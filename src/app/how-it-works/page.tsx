// src/app/how-it-works/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Neurolect works",
  description:
    "Signals → Processing → Intent Models → Policy Runtime → SDKs. Neurolect is a linguo-emotional interface that turns neural activity into trusted intent for apps and devices.",
};

export default function HowItWorksPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight">How Neurolect works</h1>
        <p className="mt-2 text-muted-foreground max-w-3xl">
          Neurolect is a linguo-emotional interface that translates inner-speech and emotion into machine-actionable intent,
          secured by neurosignatures and orchestrated across hardware via a policy runtime and HAL.
        </p>
      </header>

      <section className="space-y-10">
        <div>
          <h2 className="text-xl font-semibold">1) Signals</h2>
          <p className="mt-2 text-muted-foreground">
            We ingest multimodal neural data from non-invasive and invasive BCIs (today: EEG and compatible sensors; tomorrow: higher-fidelity arrays).
            A lightweight driver layer normalizes device outputs into a common stream.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">2) Processing</h2>
          <p className="mt-2 text-muted-foreground">
            Signal cleaning, feature extraction, and temporal alignment prepare data for linguo-emotional decoding. We target inner-speech tokens and
            affective vectors to capture both intent and nuance.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">3) Intent Models</h2>
          <p className="mt-2 text-muted-foreground">
            Models map neural features to discrete intent tokens (commands, slots, emotional modifiers). These tokens carry provenance and confidence
            to support downstream policy decisions.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">4) Policy Runtime</h2>
          <p className="mt-2 text-muted-foreground">
            The policy engine fuses context (app state, user profile, safety constraints) with intent tokens and routes outcomes
            across devices through HAL. Every action is checked against consent, rate limits, and guardrails.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">5) SDKs & BApps</h2>
          <p className="mt-2 text-muted-foreground">
            Developers consume intents via SDKs and build Brain Apps (BApps). Token schemas and events are stable, so apps integrate once and
            run across hardware. This enables an ecosystem with durable network effects.
          </p>
        </div>
      </section>

      <section className="mt-12 border-t pt-8">
        <h2 className="text-xl font-semibold">Why it matters</h2>
        <ul className="mt-3 list-disc pl-5 space-y-2 text-muted-foreground">
          <li>Bridges biological signals and digital systems with a common “neural LSL” for apps.</li>
          <li>Captures intent and emotion together—communication becomes richer and safer to automate.</li>
          <li>Hardware-agnostic via HAL; policy ensures safe, reversible actions tied to user consent.</li>
        </ul>
      </section>
    </main>
  );
}
