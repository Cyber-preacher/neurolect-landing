import { NextResponse } from "next/server";
import { z } from "zod";
import { createClient } from "@supabase/supabase-js";

const schema = z.object({
  email: z.string().email(),
  name: z.string().min(1).optional(),
  message: z.string().optional(),
  source: z.string().optional(),
  honeypot: z.string().optional(), // spam trap
});

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE! // server-side only
);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = schema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
    }

    // honeypot
    if (parsed.data.honeypot) {
      return NextResponse.json({ success: true }); // silently ignore
    }

    const { error } = await supabase.from("investor_leads").insert({
      email: parsed.data.email,
      name: parsed.data.name,
      message: parsed.data.message,
      source: parsed.data.source ?? "site",
    });

    if (error) {
      console.error(error);
      return NextResponse.json({ error: "Database error" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
