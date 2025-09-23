import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How it works — Neurolect",
  description: "Signals → Processing → Intent Models → Policy Runtime → SDKs.",
};

export default function HowItWorksPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">How it works</h1>
      <p className="mt-4 text-muted-foreground">
        End-to-end: Signals → Processing → Intent Models → Policy Runtime → SDKs.
      </p>

      <div className="mt-8 space-y-8">
        <section id="signals">
          <h2 className="text-xl font-semibold">1) Signals</h2>
          <p className="text-muted-foreground">Acquisition drivers for EEG / invasive streams and simulated sources.</p>
        </section>
        <section id="processing">
          <h2 className="text-xl font-semibold">2) Processing</h2>
          <p className="text-muted-foreground">Denoising, alignment, feature extraction; latency & throughput SLAs.</p>
        </section>
        <section id="intent-models">
          <h2 className="text-xl font-semibold">3) Intent Models</h2>
          <p className="text-muted-foreground">Neurolinguistic & affect models mapping features → intents.</p>
        </section>
        <section id="policy-runtime">
          <h2 className="text-xl font-semibold">4) Policy Runtime</h2>
          <p className="text-muted-foreground">Consent, revocation, rate limits, stimulation guardrails, red-team filters.</p>
        </section>
        <section id="sdks">
          <h2 className="text-xl font-semibold">5) SDKs</h2>
          <p className="text-muted-foreground">Adapters for apps, games, assistive tooling; developer ergonomics.</p>
        </section>
      </div>

      <div className="mt-10 flex gap-3">
        <Link href="/moat" className="underline underline-offset-4">See our Moat →</Link>
        <Link href="/safety" className="underline underline-offset-4">Safety & Ethics →</Link>
      </div>
    </main>
  );
}
