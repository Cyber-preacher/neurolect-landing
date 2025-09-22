// src/app/api/lead/route.ts
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

/**
 * Zod schema for lead submissions.
 * Feel free to extend with more fields later (budget, timeline, etc.).
 */
const LeadSchema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email(),
  company: z.string().min(1).max(160).optional(),
  message: z.string().min(1).max(5000),
  // simple honeypot: should be empty
  website: z.string().max(0).optional().or(z.literal("")),
});

type LeadInput = z.infer<typeof LeadSchema>;

function json(status: number, body: unknown) {
  return NextResponse.json(body, { status });
}

/**
 * Rate-limit placeholder (in-memory noop here).
 * Swap with durable store (Upstash/Redis) when ready.
 */
async function allowRequest(_req: NextRequest): Promise<boolean> {
  return true;
}

/**
 * Persist placeholder.
 * Replace with Supabase/Email or other provider.
 */
async function persistLead(_data: LeadInput): Promise<void> {
  // no-op for now
}

export async function POST(req: NextRequest) {
  try {
    const ok = await allowRequest(req);
    if (!ok) {
      return json(429, { ok: false, error: "Too many requests" });
    }

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
      return json(204, { ok: true }); // silently accept bots
    }

    await persistLead(parsed.data);
    return json(200, { ok: true });
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : "Unknown error";
    return json(500, { ok: false, error: msg });
  }
}
