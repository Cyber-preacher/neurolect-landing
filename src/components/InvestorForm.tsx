"use client";

import { useState } from "react";
import { z } from "zod";

/** Client-side schema to keep inputs clean before POSTing */
const InvestorSchema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Enter a valid email."),
  firm: z.string().optional(),
  note: z.string().max(1000, "Message is too long.").optional(),
});

type InvestorInput = z.infer<typeof InvestorSchema>;

function getErrorMessage(err: unknown): string {
  if (err instanceof Error) return err.message;
  if (typeof err === "string") return err;
  try {
    return JSON.stringify(err);
  } catch {
    return "Unknown error";
  }
}

export default function InvestorForm() {
  const [form, setForm] = useState<InvestorInput>({ name: "", email: "", firm: "", note: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState<string>("");

  const onChange =
    (key: keyof InvestorInput) =>
      (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
        setForm((f) => ({ ...f, [key]: e.target.value }));

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    const parsed = InvestorSchema.safeParse(form);
    if (!parsed.success) {
      setStatus("error");
      setError(parsed.error.issues[0]?.message ?? "Invalid input.");
      return;
    }

    try {
      const res = await fetch("/api/investor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });

      // Attempt to read JSON without assuming a type
      let payload: unknown = undefined;
      try {
        payload = await res.json();
      } catch {
        /* ignore non-JSON responses */
      }

      if (!res.ok) {
        let message = res.statusText || "Request failed";
        if (payload && typeof payload === "object") {
          const obj = payload as { error?: unknown; message?: unknown };
          if (typeof obj.error === "string") message = obj.error;
          else if (typeof obj.message === "string") message = obj.message;
        }
        throw new Error(message);
      }

      // success path: accept either {ok:true} or empty 2xx
      setStatus("success");
    } catch (err: unknown) {
      setStatus("error");
      setError(getErrorMessage(err));
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Name</label>
        <input
          required
          value={form.name}
          onChange={onChange("name")}
          className="mt-1 w-full rounded-md border px-3 py-2"
          placeholder="Ada Lovelace"
          name="name"
          autoComplete="name"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Email</label>
        <input
          required
          value={form.email}
          onChange={onChange("email")}
          type="email"
          className="mt-1 w-full rounded-md border px-3 py-2"
          placeholder="you@firm.com"
          name="email"
          autoComplete="email"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Firm (optional)</label>
        <input
          value={form.firm ?? ""}
          onChange={onChange("firm")}
          className="mt-1 w-full rounded-md border px-3 py-2"
          placeholder="Atlas Ventures"
          name="firm"
          autoComplete="organization"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Message (optional)</label>
        <textarea
          value={form.note ?? ""}
          onChange={onChange("note")}
          className="mt-1 w-full rounded-md border px-3 py-2"
          rows={4}
          placeholder="A line about your interest or timeline…"
          name="note"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
      {status === "success" && (
        <p className="text-sm text-emerald-600" role="status">
          Thanks — we’ll be in touch shortly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="rounded-2xl px-4 py-2 text-sm font-semibold shadow-sm border bg-primary text-primary-foreground disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Request intro"}
      </button>
    </form>
  );
}
