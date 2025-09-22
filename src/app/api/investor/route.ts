// src/app/api/investor/route.ts
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

/**
 * FEAT-03 investor endpoint:
 * - Zod validation
 * - Honeypot
 * - Optional Supabase persistence (only if envs are present)
 * - Rate-limit stub (replace with Upstash/Redis later)
 */

const InvestorSchema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email(),
  company: z.string().min(1).max(160).optional(),
  message: z.string().min(1).max(5000),
  // Honeypot: should be empty
  website: z.string().max(0).optional().or(z.literal("")),
});

type InvestorInput = z.infer<typeof InvestorSchema>;

function json(status: number, body: unknown) {
  return NextResponse.json(body, { status });
}

async function allowRequest(): Promise<boolean> {
  // TODO: Replace with IP-based limiter
  return true;
}

async function persistWithSupabase(data: InvestorInput): Promise<void> {
  const url = process.env.SUPABASE_URL;
  const anon = process.env.SUPABASE_ANON_KEY;
  const service = process.env.SUPABASE_SERVICE_ROLE;

  // If no URL or key provided, skip persistence (safe in CI/build)
  if (!url || !(anon || service)) {
    return;
  }

  // Lazy import and client creation INSIDE function only when envs exist
  const { createClient } = await import("@supabase/supabase-js");
  const client = createClient(url, service ?? anon);

  // Create table `investors` with columns (name, email, company, message, created_at) in your DB.
  const { error } = await client.from("investors").insert({
    name: data.name,
    email: data.email,
    company: data.company ?? null,
    message: data.message,
  });

  if (error) {
    // Surface but don't fail the request
    // eslint-disable-next-line no-console
    console.error("[/api/investor] supabase insert error:", error.message);
  }
}

export async function POST(req: NextRequest) {
  try {
    const ok = await allowRequest();
    if (!ok) {
      return json(429, { ok: false, error: "Too many requests" });
    }

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

    await persistWithSupabase(parsed.data);

    // Optional: send an auto-reply via email provider here.

    return json(200, { ok: true });
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : "Unknown error";
    return json(500, { ok: false, error: msg });
  }
}
