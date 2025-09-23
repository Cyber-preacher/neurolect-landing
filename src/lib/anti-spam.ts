// src/lib/anti-spam.ts
import crypto from "crypto";
import type { NextRequest } from "next/server";

/**
 * Anti-spam utilities:
 * - HMAC token bound to (ip-ish + user-agent + timestamp)
 * - Simple in-memory IP rate limiter (per process)
 *
 * All functions are NO-OP safe when secret/envs are missing.
 */

const DEFAULT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const DEFAULT_MAX_REQS = 12; // per window per IP

// In-memory sliding window = Map<ipKey, number[]>
const ipHits: Map<string, number[]> = new Map();

/**
 * Resolve a best-effort client IP from headers only (NextRequest has no `ip`).
 * Prioritize standard proxy headers.
 */
function resolveIpFromHeaders(req: NextRequest): string {
  const xfwd = req.headers.get("x-forwarded-for"); // e.g., "client, proxy1, proxy2"
  if (xfwd && xfwd.length > 0) {
    const first = xfwd.split(",")[0]?.trim();
    if (first && first.length > 0) return first;
  }
  const xreal = req.headers.get("x-real-ip");
  if (xreal && xreal.length > 0) return xreal.trim();
  return "0.0.0.0";
}

export function getClientKey(req: NextRequest): string {
  // Best-effort IP + UA binding. Works behind common proxies.
  const ip = resolveIpFromHeaders(req);
  const ua = req.headers.get("user-agent") || "ua";
  // Keep short to avoid PII over-collection; hashing is enough for binding
  const hash = crypto.createHash("sha1").update(`${ip}|${ua}`).digest("hex");
  return hash.slice(0, 24);
}

export function getSecret(): string | null {
  return process.env.ANTISPAM_SECRET || null;
}

export type AntiSpamToken = { ts: number; token: string };

/**
 * Issue a token that is valid for ~20 minutes.
 * If no secret exists, returns a dev token; verification will accept it.
 */
export function issueToken(userKey: string, now = Date.now()): AntiSpamToken {
  const ts = now;
  const secret = getSecret();
  if (!secret) {
    // dev token
    return { ts, token: "dev" };
  }
  const token = crypto.createHmac("sha256", secret).update(`${userKey}:${ts}`).digest("hex");
  return { ts, token };
}

/**
 * Verify a provided token (HMAC) within an allowed skew window.
 * Returns true if the token is valid or we're in dev/no-secret mode.
 */
export function verifyToken(
  userKey: string,
  provided: { ts?: number; token?: string } | null,
  now = Date.now(),
  maxSkewMs = 20 * 60 * 1000 // 20 min
): boolean {
  if (!provided || typeof provided.ts !== "number" || typeof provided.token !== "string") {
    return false;
  }
  const { ts, token } = provided;

  // basic ts sanity (not far future/past)
  if (Math.abs(now - ts) > maxSkewMs) return false;

  const secret = getSecret();
  if (!secret) {
    // Accept dev token in local/CI
    return token === "dev";
  }

  const expected = crypto.createHmac("sha256", secret).update(`${userKey}:${ts}`).digest("hex");

  // constant-time-ish compare
  return crypto.timingSafeEqual(Buffer.from(token), Buffer.from(expected));
}

/**
 * Sliding window in-memory rate limit. Safe to use without Redis.
 * Returns true if request should be allowed, false if rate-limited.
 */
export function allowByIp(
  ipKey: string,
  now = Date.now(),
  windowMs = DEFAULT_WINDOW_MS,
  maxReqs = DEFAULT_MAX_REQS
): boolean {
  const arr = ipHits.get(ipKey) ?? [];
  const cutoff = now - windowMs;
  const kept = arr.filter((t) => t > cutoff);
  kept.push(now);
  ipHits.set(ipKey, kept);
  return kept.length <= maxReqs;
}

