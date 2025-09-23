// src/app/safety/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Safety & Ethics — Neurolect",
  description:
    "Consent and revocation by default, strict rate limits, stimulation guardrails, and red-teaming. Privacy-preserving neurosignatures with auditability.",
};

export default function SafetyPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <header className="max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-tight">Safety &amp; Ethics</h1>
        <p className="mt-4 text-muted-foreground">
          Safety is enforced at runtime, not promised in a slide. Neurolect makes consent, revocation,
          and guardrails part of the operating system so privacy and safety are defaults—not add-ons.
        </p>
      </header>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Principles we implement</h2>
        <ul className="mt-4 list-disc pl-6 space-y-3 text-muted-foreground">
          <li>
            <strong>Explicit consent flows:</strong> clear prompts and logs for what is captured,
            translated, and shared—no silent escalation.
          </li>
          <li>
            <strong>Revocation everywhere:</strong> users can cut power at any time; policies are
            revocable and changes are immediately enforced.
          </li>
          <li>
            <strong>Rate limits &amp; time-outs:</strong> all I/O is bounded with sane defaults to
            prevent overload, habituation, or abuse.
          </li>
          <li>
            <strong>Stimulation guardrails:</strong> conservative thresholds, whitelists, and
            red-teaming before enabling any stimulation pathways.
          </li>
          <li>
            <strong>Privacy-preserving neurosignatures:</strong> selective disclosure and on-device
            checks where possible; no unnecessary raw data retention.
          </li>
          <li>
            <strong>Auditability:</strong> append-only policy/event logs and verifiable configurations
            so decisions can be inspected and improved.
          </li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Programmatic enforcement</h2>
        <p className="mt-2 text-muted-foreground">
          The policy runtime sits on the hot path. Every action—ingest, translate, route, stimulate—is
          checked against explicit, versioned policies with safe defaults. Developers integrate through
          SDKs; users remain in control via consent and revocation.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Safety 1-pager</h2>
        <div className="mt-3 rounded-2xl border p-4 bg-muted/30">
          <p className="text-sm text-muted-foreground">
            A printable 1-pager with the full policy model and procedures will be linked here.
            <span className="ml-1 font-medium">Coming soon.</span>
          </p>
          {/* When ready, replace the placeholder below with the real PDF path. */}
          {/* <a href="/pack/neurolect-safety.pdf" className="mt-3 inline-block underline underline-offset-4">Download PDF →</a> */}
        </div>
      </section>

      <nav className="mt-10 flex flex-wrap gap-4">
        <Link href="/how-it-works" className="underline underline-offset-4">
          How it works →
        </Link>
        <Link href="/moat" className="underline underline-offset-4">
          Moat &amp; IP →
        </Link>
        <Link href="/why-now" className="underline underline-offset-4">
          Why now →
        </Link>
        <Link href="/investors" className="underline underline-offset-4">
          For Investors →
        </Link>
      </nav>
    </main>
  );
}
