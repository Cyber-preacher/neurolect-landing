// src/app/api/pack/route.ts
import { NextResponse } from "next/server";

/**
 * Temporary redirect to the public PDF.
 * We can later add server-side logging or signed URLs without changing the CTA.
 */
export async function GET() {
  return NextResponse.redirect("/pack/neurolect-investor-pack.pdf", { status: 307 });
}

