// src/app/api/anti-spam/route.ts
import { NextRequest, NextResponse } from "next/server";
import { getClientKey, issueToken } from "@/lib/anti-spam";

/**
 * Returns an HMAC anti-spam token bound to client key (ip-ish + UA) and timestamp.
 * No authentication; tokens expire via timestamp skew check on submit.
 */
export async function GET(req: NextRequest) {
  const key = getClientKey(req);
  const payload = issueToken(key);
  return NextResponse.json({ ok: true, ...payload });
}
