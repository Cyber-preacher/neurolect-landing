// src/app/api/investor/route.ts
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import {
  allowByIp,
  getClientKey,
  issueToken,
  verifyToken,
} from "@/lib/anti-spam";

/**
 * FEAT-03 + FEAT-16:
 * - Zod validation
 * - Honeypot
 * - HMAC token verification (optional dev mode if no secret)
 * - Simple per-IP rate limit
 * - Optional Supabase persistence (only if envs exist)
 */

const InvestorSchema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email(),
  company: z.string().min(1).max(160).optional(),
  message: z.string().min(1).max(5000),
  website: z.string().max(0).optional().or(z.literal("")), // honeypot
  ts: z.number().int().positive(),
  token: z.string().min(1),
});

type InvestorInput = z.infer<typeof InvestorSchema>;

function json(status: number, body: unknown) {
  return NextResponse.json(body, { status });
}

async function persistWithSupabase(data: InvestorInput): Promise<void> {
  const url = process.env.SUPABASE_URL;
  const anon = process.env.SUPABASE_ANON_KEY;
  const service = process.env.SUPABASE_SERVICE_ROLE;

  if (typeof url !== "string" || (!anon && !service)) return;

  const supabaseUrl: string = url;
  const supabaseKey: string = (service ?? anon)!;

  const { createClient } = await import("@supabase/supabase-js");
  const client = createClient(supabaseUrl, supabaseKey);

  const { error } = await client.from("investors").insert({
    name: data.name,
    email: data.email,
    company: data.company ?? null,
    message: data.message,
  });

  if (error) {
    console.error("[/api/investor] supabase insert error:", error.message);
  }
}

export async function GET(req: NextRequest) {
  // Expose token issuing for non-React clients if needed
  const key = getClientKey(req);
  const t = issueToken(key);
  return json(200, { ok: true, ...t });
}

export async function POST(req: NextRequest) {
  const key = getClientKey(req);

  // Rate limit by IP key
  if (!allowByIp(key)) {
    return json(429, { ok: false, error: "Too many requests" });
  }

  try {
    const contentType = req.headers.get("content-type") ?? "";
    if (!contentType.includes("application/json")) {
      return json(415, { ok: false, error: "Unsupported Media Type" });
    }

    const raw = (await req.json()) as unknown;
    const parsed = InvestorSchema.safeParse(raw);
    if (!parsed.success) {
      return json(400, { ok: false, error: "Invalid input", issues: parsed.error.issues });
    }

    // Honeypot: silently accept bots
    if (parsed.data.website && parsed.data.website.length > 0) {
      return json(204, { ok: true });
    }

    // Verify HMAC token
    const isValid = verifyToken(key, { ts: parsed.data.ts, token: parsed.data.token });
    if (!isValid) {
      return json(400, { ok: false, error: "Bad anti-spam token" });
    }

    await persistWithSupabase(parsed.data);

    // Optional: auto-reply email here
    return json(200, { ok: true });
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : "Unknown error";
    return json(500, { ok: false, error: msg });
  }
}
