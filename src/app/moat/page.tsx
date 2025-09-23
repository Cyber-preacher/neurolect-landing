// src/app/moat/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Moat & IP — Neurolect",
  description:
    "Our durable edge: neurosignature schema, policy engine, device drivers, and an evaluation harness designed for safety, portability, and performance.",
};

export default function MoatPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <header className="max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-tight">Moat &amp; IP</h1>
        <p className="mt-4 text-muted-foreground">
          Neurolect is built as an operating system with safety and portability at its core.
          Our moat combines a privacy-preserving identity layer with a policy runtime and
          cross-device drivers, validated by a rigorous evaluation harness.
        </p>
      </header>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Four pillars</h2>
        <ul className="mt-4 list-disc pl-6 space-y-3 text-muted-foreground">
          <li>
            <strong>Neurosignature schema:</strong> a portable, privacy-preserving representation
            of neural identity and state. Designed for selective disclosure, revocation, and
            on-device verification where possible.
          </li>
          <li>
            <strong>Policy engine &amp; runtime:</strong> consent-first execution with revocation,
            rate limits, stimulation guardrails, and red-team filters. Policies are explicit and
            composable, making safety a default—not an afterthought.
          </li>
          <li>
            <strong>Device drivers:</strong> unified support for EEG and implant devices with
            predictable latency/throughput budgets and compatibility contracts, so apps work
            consistently across vendors.
          </li>
          <li>
            <strong>Evaluation harness:</strong> reproducible benchmarks for accuracy, latency,
            robustness, and safety—including adversarial tests—to track improvements and prevent regressions.
          </li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Mini diagram (concept)</h2>
        <div
          className="mt-4 rounded-2xl border p-4 bg-muted/30 text-sm text-muted-foreground"
          aria-label="Conceptual diagram description"
        >
          <p>
            <strong>Signals</strong> → <strong>Processing</strong> →{" "}
            <strong>Intent Models</strong> → <strong>Policy Runtime</strong> →{" "}
            <strong>SDKs / BApps</strong>
          </p>
          <p className="mt-2">
            The <em>neurosignature schema</em> sits alongside the runtime for identity and consent.
            Drivers feed normalized signals in; policies enforce what can execute and when; SDKs expose
            a stable API to applications.
          </p>
        </div>
      </section>

      <nav className="mt-10 flex flex-wrap gap-4">
        <Link href="/how-it-works" className="underline underline-offset-4">
          How it works →
        </Link>
        <Link href="/safety" className="underline underline-offset-4">
          Safety &amp; Ethics →
        </Link>
        <Link href="/investors" className="underline underline-offset-4">
          For Investors →
        </Link>
      </nav>
    </main>
  );
}
