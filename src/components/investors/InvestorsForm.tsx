// src/components/investors/InvestorsForm.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import { z } from "zod";

const InvestorSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Enter a valid email"),
  firm: z.string().min(2, "Enter your firm (or individual)"),
  note: z.string().max(800, "Keep it under 800 characters").optional().or(z.literal("")),
  token: z.string().optional(), // anti-spam token (server will verify; optional)
  utm: z
    .object({
      source: z.string().optional(),
      medium: z.string().optional(),
      campaign: z.string().optional(),
      content: z.string().optional(),
      term: z.string().optional(),
    })
    .partial()
    .optional(),
});

type FormState =
  | { status: "idle" }
  | { status: "submitting" }
  | { status: "success" }
  | { status: "error"; message: string }
  | { status: "invalid"; errors: Record<string, string> };

function getUTMFromSearch(search: string) {
  const p = new URLSearchParams(search);
  return {
    source: p.get("utm_source") ?? undefined,
    medium: p.get("utm_medium") ?? undefined,
    campaign: p.get("utm_campaign") ?? undefined,
    content: p.get("utm_content") ?? undefined,
    term: p.get("utm_term") ?? undefined,
  };
}

// Type guard to narrow JSON error responses without using `any`
function hasError(obj: unknown): obj is { error: string } {
  if (typeof obj !== "object" || obj === null) return false;
  const rec = obj as Record<string, unknown>;
  return typeof rec.error === "string";
}

export default function InvestorsForm() {
  // Anti-spam token
  const [token, setToken] = useState<string>("");
  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const r = await fetch("/api/anti-spam", { method: "POST" });
        if (!mounted) return;
        if (r.ok) {
          const json: unknown = await r.json();
          const tok = (json as { token?: string }).token;
          if (tok) setToken(tok);
        }
      } catch {
        // no-op; server still rate-limits/honeypot
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  // UTM capture
  const utm = useMemo(
    () => (typeof window !== "undefined" ? getUTMFromSearch(window.location.search) : {}),
    []
  );

  const [form, setForm] = useState({
    name: "",
    email: "",
    firm: "",
    note: "",
  });
  const [state, setState] = useState<FormState>({ status: "idle" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState({ status: "submitting" });

    const parsed = InvestorSchema.safeParse({
      ...form,
      token,
      utm,
    });

    if (!parsed.success) {
      const errors: Record<string, string> = {};
      parsed.error.issues.forEach((i) => {
        const key = i.path.join(".");
        errors[key] = i.message;
      });
      setState({ status: "invalid", errors });
      return;
    }

    try {
      const r = await fetch("/api/investor", {
        method: "POST",
        headers: { "content-type": "application/json; charset=utf-8" },
        body: JSON.stringify(parsed.data),
      });

      if (!r.ok) {
        const body: unknown = await r.json().catch(() => ({}));
        const msg = hasError(body) ? body.error : "Submission failed";
        setState({ status: "error", message: msg });
        return;
      }
      setState({ status: "success" });
      setForm({ name: "", email: "", firm: "", note: "" });
    } catch {
      setState({ status: "error", message: "Network error" });
    }
  }

  return (
    <form className="grid gap-4 max-w-xl" onSubmit={onSubmit} noValidate>
      {/* Hidden anti-spam token */}
      <input type="hidden" name="token" value={token} />

      <div>
        <label className="block text-sm font-medium" htmlFor="name">Full name</label>
        <input
          id="name"
          name="name"
          value={form.name}
          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
          className="mt-1 w-full rounded-lg border px-3 py-2"
          placeholder="Ada Lovelace"
          autoComplete="name"
          required
        />
        {state.status === "invalid" && state.errors?.name ? (
          <p className="mt-1 text-sm text-destructive">{state.errors.name}</p>
        ) : null}
      </div>

      <div>
        <label className="block text-sm font-medium" htmlFor="email">Work email</label>
        <input
          id="email"
          name="email"
          value={form.email}
          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
          className="mt-1 w-full rounded-lg border px-3 py-2"
          placeholder="you@firm.com"
          inputMode="email"
          autoComplete="email"
          required
        />
        {state.status === "invalid" && state.errors?.email ? (
          <p className="mt-1 text-sm text-destructive">{state.errors.email}</p>
        ) : null}
      </div>

      <div>
        <label className="block text-sm font-medium" htmlFor="firm">Firm</label>
        <input
          id="firm"
          name="firm"
          value={form.firm}
          onChange={(e) => setForm((f) => ({ ...f, firm: e.target.value }))}
          className="mt-1 w-full rounded-lg border px-3 py-2"
          placeholder="Alpha Capital"
          required
        />
        {state.status === "invalid" && state.errors?.firm ? (
          <p className="mt-1 text-sm text-destructive">{state.errors.firm}</p>
        ) : null}
      </div>

      <div>
        <label className="block text-sm font-medium" htmlFor="note">Note (optional)</label>
        <textarea
          id="note"
          name="note"
          value={form.note}
          onChange={(e) => setForm((f) => ({ ...f, note: e.target.value }))}
          className="mt-1 w-full rounded-lg border px-3 py-2"
          rows={4}
          placeholder="What are you most curious about?"
        />
        {state.status === "invalid" && state.errors?.note ? (
          <p className="mt-1 text-sm text-destructive">{state.errors.note}</p>
        ) : null}
      </div>

      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={state.status === "submitting"}
          className="inline-flex rounded-2xl px-3.5 py-2 text-sm font-semibold shadow-sm border bg-primary text-primary-foreground hover:opacity-90 disabled:opacity-60"
        >
          {state.status === "submitting" ? "Sending…" : "Request access"}
        </button>

        {state.status === "success" ? (
          <span className="text-sm text-green-600">Thanks — we’ll be in touch shortly.</span>
        ) : null}
        {state.status === "error" ? (
          <span className="text-sm text-destructive">{state.message}</span>
        ) : null}
      </div>
    </form>
  );
}
