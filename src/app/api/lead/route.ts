import { NextResponse } from "next/server"
import { z } from "zod"

const schema = z.object({
  email: z.string().email(),
  name: z.string().max(120).optional(),
  company: z.string().max(160).optional(),
  note: z.string().max(2000).optional(),
})

export async function POST(req: Request) {
  const body = await req.json().catch(() => null)
  const parsed = schema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "Invalid payload" }, { status: 400 })
  }

  const { email, name, company, note } = parsed.data

  // Optional Supabase branch
  const url = process.env.SUPABASE_URL
  const serviceRole = process.env.SUPABASE_SERVICE_ROLE
  const anon = process.env.SUPABASE_ANON_KEY

  try {
    if (url && (serviceRole || anon)) {
      const { createClient } = await import("@supabase/supabase-js")
      const supabase = createClient(url, serviceRole || anon)
      // Ensure table exists: leads(id, email text, name text, company text, note text, created_at timestamptz default now())
      const { error } = await supabase.from("leads").insert({ email, name, company, note })
      if (error) throw error
      return NextResponse.json({ ok: true, stored: "supabase" })
    } else {
      console.log("[lead] ", { email, name, company, note })
      return NextResponse.json({ ok: true, stored: "console" })
    }
  } catch (e: any) {
    console.error("[lead:error] ", e?.message || e)
    return NextResponse.json({ ok: false, error: "Failed to store lead" }, { status: 500 })
  }
}
