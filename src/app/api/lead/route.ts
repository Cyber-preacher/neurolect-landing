// src/app/api/lead/route.ts
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { allowByIp, getClientKey, verifyToken } from "@/lib/anti-spam";

const LeadSchema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email(),
  company: z.string().min(1).max(160).optional(),
  message: z.string().min(1).max(5000),
  website: z.string().max(0).optional().or(z.literal("")),
  ts: z.number().int().positive(),
  token: z.string().min(1),
});

type LeadInput = z.infer<typeof LeadSchema>;

function json(status: number, body: unknown) {
  return NextResponse.json(body, { status });
}

async function persistLead(_data: LeadInput): Promise<void> {
  // Wire up Supabase or email provider if desired.
  void _data;
}

export async function POST(req: NextRequest) {
  const key = getClientKey(req);

  // Rate limit
  if (!allowByIp(key)) {
    return json(429, { ok: false, error: "Too many requests" });
  }

  try {
    const contentType = req.headers.get("content-type") ?? "";
    if (!contentType.includes("application/json")) {
      return json(415, { ok: false, error: "Unsupported Media Type" });
    }

    const raw = (await req.json()) as unknown;
    const parsed = LeadSchema.safeParse(raw);
    if (!parsed.success) {
      return json(400, { ok: false, error: "Invalid input", issues: parsed.error.issues });
    }

    // Honeypot
    if (parsed.data.website && parsed.data.website.length > 0) {
      return json(204, { ok: true });
    }

    // Verify HMAC token
    const isValid = verifyToken(key, { ts: parsed.data.ts, token: parsed.data.token });
    if (!isValid) {
      return json(400, { ok: false, error: "Bad anti-spam token" });
    }

    await persistLead(parsed.data);
    return json(200, { ok: true });
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : "Unknown error";
    return json(500, { ok: false, error: msg });
  }
}
