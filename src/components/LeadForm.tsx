"use client"

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { Button } from "@/components/ui/button"

const schema = z.object({
  email: z.string().email(),
  name: z.string().max(120).optional(),
  company: z.string().max(160).optional(),
  note: z.string().max(2000).optional(),
})
type FormValues = z.infer<typeof schema>

export default function LeadForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } =
    useForm<FormValues>({ resolver: zodResolver(schema) })
  const [status, setStatus] = useState<"idle"|"ok"|"err">("idle")

  const onSubmit = async (data: FormValues) => {
    setStatus("idle")
    const res = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
    if (res.ok) { setStatus("ok"); reset() } else { setStatus("err") }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-3">
      <input
        {...register("email")}
        placeholder="Work email"
        className="w-full rounded-xl border px-3 py-2"
      />
      {errors.email && <p className="text-sm text-red-600">Enter a valid email</p>}

      <div className="grid md:grid-cols-2 gap-3">
        <input {...register("name")} placeholder="Your name" className="rounded-xl border px-3 py-2" />
        <input {...register("company")} placeholder="Company (optional)" className="rounded-xl border px-3 py-2" />
      </div>

      <textarea {...register("note")} placeholder="Tell us what you’d like to build…"
        className="rounded-xl border px-3 py-2 min-h-28" />

      <div className="flex items-center gap-3">
        <Button size="lg" disabled={isSubmitting}>
          {isSubmitting ? "Sending…" : "Request early access"}
        </Button>
        {status === "ok" && <span className="text-sm text-green-600">Got it — we’ll reach out.</span>}
        {status === "err" && <span className="text-sm text-red-600">Error — try again.</span>}
      </div>
    </form>
  )
}

