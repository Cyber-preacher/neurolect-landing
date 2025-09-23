// src/app/investors/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { z } from "zod";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Investors — Neurolect",
  description:
    "Book a call, grab the teaser, and request access to the data room. Neurolect is building the universal OS for brain–computer interfaces.",
};

const InvestorSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Enter a valid email"),
  firm: z.string().min(2, "Enter your firm (or individual)"),
  note: z.string().max(800, "Keep it under 800 characters").optional().or(z.literal("")),
  token: z.string().optional(), // anti-spam token (HMAC/honeypot server will check)
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

export default function InvestorsPage() {
  // Anti-spam token
  const [token, setToken] = useState<string>("");
  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const r = await fetch("/api/anti-spam", { method: "POST" });
        if (!mounted) return;
        if (r.ok) {
          const { token } = (await r.json()) as { token?: string };
          if (token) setToken(token);
        }
      } catch {
        // no-op; server will still rate-limit/honeypot
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

  const calendlyUrl =
    SITE?.calendly && SITE.calendly.length > 0
      ? SITE.calendly
      : "https://calendly.com/your-calendly-slot/intro"; // fallback placeholder

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
        const body = await r.json().catch(() => ({}));
        const msg = typeof body?.error === "string" ? body.error : "Submission failed";
        setState({ status: "error", message: msg });
        return;
      }
      setState({ status: "success" });
      setForm({ name: "", email: "", firm: "", note: "" });
    } catch (err) {
      setState({ status: "error", message: "Network error" });
    }
  }

  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
      <header className="max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-tight">For Investors</h1>
        <p className="mt-4 text-muted-foreground">
          Neurolect is an operating system that turns neural activity into intuitive digital actions.
          We’re building the universal OS for brain–computer interfaces—with privacy, consent, and
          safety enforced at runtime.
        </p>
      </header>

      {/* Quick actions */}
      <section className="mt-8 grid gap-6 lg:grid-cols-3">
        {/* Teaser card */}
        <article className="rounded-2xl border p-5">
          <h2 className="text-lg font-semibold">Teaser pack</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            A short overview of product, moat, timing, and roadmap.
          </p>
          <div className="mt-4">
            <Link
              href="/pack/neurolect-investor-pack.pdf"
              className="inline-flex rounded-2xl px-3.5 py-2 text-sm font-semibold border hover:bg-accent hover:text-accent-foreground"
            >
              Download teaser
            </Link>
          </div>
        </article>

        {/* Calendly card */}
        <article className="rounded-2xl border p-5 lg:col-span-2">
          <h2 className="text-lg font-semibold">Book a call</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Grab time directly on our calendar. We’ll tailor the session to your focus areas.
          </p>
          <div className="mt-4 overflow-hidden rounded-xl border">
            <iframe
              title="Calendly scheduling"
              src={calendlyUrl}
              className="h-[660px] w-full"
              loading="lazy"
            />
          </div>
        </article>
      </section>

      {/* Request Data Room */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold">Request Data Room access</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Send us a short note. We’ll follow up with the data room and materials relevant to your thesis.
        </p>

        <form className="mt-6 grid gap-4 max-w-xl" onSubmit={onSubmit} noValidate>
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
              <span className="text-sm text-green-600">
                Thanks — we’ll be in touch shortly.
              </span>
            ) : null}
            {state.status === "error" ? (
              <span className="text-sm text-destructive">{state.message}</span>
            ) : null}
          </div>
        </form>
      </section>

      {/* Safety reassurance */}
      <section className="mt-12 rounded-2xl border p-5 bg-muted/30">
        <p className="text-sm text-muted-foreground">
          We respect your inbox and privacy. Submissions are validated and rate-limited; we never share your contact info.
        </p>
      </section>
    </main>
  );
}
