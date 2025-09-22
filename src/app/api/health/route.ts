// src/app/api/health/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  // Minimal, non-sensitive health info
  return NextResponse.json({
    ok: true,
    ts: Date.now(),
    uptime: typeof process.uptime === "function" ? Math.round(process.uptime()) : null,
    env: process.env.VERCEL ? "vercel" : "local",
  });
}
