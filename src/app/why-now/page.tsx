// src/app/why-now/page.tsx
// Neurolect — Why now
// App Router / Next.js 15. UTF-8 LF.

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why now | Neurolect",
  description:
    "Why the timing is right for a neural OS: decoding breakthroughs, standardization, hardware maturity, and practical near-term BCI applications.",
  openGraph: {
    title: "Why now | Neurolect",
    description:
      "Why the timing is right for a neural OS: decoding breakthroughs, standardization, hardware maturity, and practical near-term BCI applications.",
    type: "article",
  },
};

type Tile = {
  title: string;
  body: string;
};

const reasons: Tile[] = [
  {
    title: "Historic HCI trend → lower friction",
    body:
      "From CLI → GUI → touch/voice, every wave reduced the gap between intent and action. Direct neural input is the next reduction of interaction cost.",
  },
  {
    title: "Decoding is crossing the threshold",
    body:
      "Recent neural-to-speech and semantic reconstruction studies show practical decoding under controlled conditions. It’s not sci-fi — it’s an engineering problem with a curve we can ride.",
  },
  {
    title: "Emotion as context (realistic, coarse)",
    body:
      "EEG-based affect classifiers can distinguish broad states (e.g., positive/neutral/negative) in lab settings. Coarse tags are enough to improve UX feedback loops.",
  },
  {
    title: "Hardware is accessible & diverse",
    body:
      "From consumer EEG to research-grade arrays, device choice exists. What’s missing is a unifying software layer that’s modality-agnostic and developer-friendly.",
  },
  {
    title: "Standards & plumbing are emerging",
    body:
      "Data interchange efforts and stream-sync stacks (e.g., LSL-like concepts) signal the right moment to define a common OS-level interface for neural data.",
  },
  {
    title: "A realistic first market exists",
    body:
      "Assistive comms, focus/meditation, adaptive UX, and simple control loops can deliver value now — while higher-bandwidth ‘direct speech’ remains a staged goal.",
  },
];

const whatNeurolectDoes: Tile[] = [
  {
    title: "Linguo-emotional translation",
    body:
      "AI modules map signals to structured intent + coarse affect tags. Near term: discrete selections and short commands; long term: richer semantic payloads.",
  },
  {
    title: "Device-agnostic HAL",
    body:
      "A hardware abstraction layer normalizes input across EEG/ECoG/etc. Developers target one interface; users keep their preferred device.",
  },
  {
    title: "Neurosignatures (MFA, not magic)",
    body:
      "Neural ‘brainprints’ can support multi-factor auth and personalization. We treat them as supplementary, not standalone, with strict privacy controls.",
  },
  {
    title: "BApps & developer framework",
    body:
      "SDKs/APIs + a marketplace for brain-native software. Start with low-bandwidth utilities; iterate toward richer experiences as the stack matures.",
  },
];

const objections: Tile[] = [
  {
    title: "“Decoding isn’t accurate enough.”",
    body:
      "True for unconstrained, free-form output. We aim near-term at constrained intents (selection, commands) where error-tolerant UX patterns and reinforcement learning shine.",
  },
  {
    title: "“Signals vary too much across sessions.”",
    body:
      "Personalized calibration + continual learning reduce drift. The HAL also lets us fuse auxiliary channels to stabilize intent estimates.",
  },
  {
    title: "“Privacy risks are unacceptable.”",
    body:
      "We design for data minimization, explicit consent, encryption in transit/at rest, and on-device options where feasible. Neurosignatures stay MFA-scoped.",
  },
  {
    title: "“There’s no consumer use case yet.”",
    body:
      "Assistive comms, accessibility, and focus tools exist today. Neurolect standardizes them and compounds progress across devices and apps.",
  },
];

export default function WhyNowPage() {
  return (
    <main className="min-h-dvh">
      {/* Hero */}
      <section className="container mx-auto px-4 pt-16 pb-10">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Why now?
          </h1>
          <p className="mt-4 text-muted-foreground">
            The timing is right for a neural OS. Decoding quality is improving,
            devices are accessible, and standards are forming. Neurolect is the
            software layer that turns fragmented progress into a usable platform.
          </p>
        </div>

        {/* Placeholder: market-timing chart */}
        <div
          aria-label="market timing chart placeholder"
          className="mx-auto mt-8 h-40 max-w-3xl rounded-2xl border border-dashed p-4 text-center text-sm text-muted-foreground"
        >
          <div className="mt-8">[Chart placeholder: “HCI friction ↓ over time → BCIs”]</div>
        </div>
      </section>

      {/* 6 reasons grid */}
      <section className="container mx-auto px-4 py-10">
        <h2 className="text-xl font-medium">The moment</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <article
              key={i}
              className="rounded-2xl border bg-card p-6 shadow-sm transition hover:shadow-md"
            >
              <h3 className="text-base font-medium">{r.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{r.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* What Neurolect standardizes */}
      <section className="container mx-auto px-4 py-10">
        <div className="flex items-baseline justify-between">
          <h2 className="text-xl font-medium">What Neurolect makes possible</h2>
          <Link
            href="/how-it-works"
            className="text-sm text-primary underline-offset-4 hover:underline"
          >
            Explore the stack →
          </Link>
        </div>

        {/* Placeholder: layered stack schema */}
        <div
          aria-label="stack schema placeholder"
          className="mt-4 rounded-2xl border border-dashed p-4 text-center text-sm text-muted-foreground"
        >
          <div className="mt-4">[Schema placeholder: “HAL → AI translation → BApps”]</div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {whatNeurolectDoes.map((r, i) => (
            <article
              key={i}
              className="rounded-2xl border bg-card p-6 shadow-sm transition hover:shadow-md"
            >
              <h3 className="text-base font-medium">{r.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{r.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Roadmap timing */}
      <section className="container mx-auto px-4 py-10">
        <h2 className="text-xl font-medium">Timing, realistically</h2>
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          <article className="rounded-2xl border bg-card p-6">
            <h3 className="text-base font-medium">Now → 12 months</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
              <li>Low-bandwidth intents (select, confirm, navigate)</li>
              <li>Coarse affect tags to adapt feedback & pacing</li>
              <li>Calibrated personalization; on-device options</li>
              <li>Assistive communication + focus utilities (BApps)</li>
            </ul>
          </article>
          <article className="rounded-2xl border bg-card p-6">
            <h3 className="text-base font-medium">12 → 36 months</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
              <li>Richer compositional commands; multi-step macros</li>
              <li>Better cross-session stability; HAL device breadth</li>
              <li>Developer ecosystem & marketplace growth</li>
              <li>Early enterprise pilots; privacy certifications</li>
            </ul>
          </article>
          <article className="rounded-2xl border bg-card p-6">
            <h3 className="text-base font-medium">Beyond</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
              <li>Continuous semantic streams (speculative)</li>
              <li>Neurosync research for collaborative tasks</li>
              <li>Deeper human–AI co-work patterns</li>
            </ul>
          </article>
        </div>

        {/* Placeholder: milestone timeline */}
        <div
          aria-label="timeline placeholder"
          className="mt-6 h-28 rounded-2xl border border-dashed p-4 text-center text-sm text-muted-foreground"
        >
          <div className="mt-3">[Timeline placeholder: milestones & de-risking gates]</div>
        </div>
      </section>

      {/* Objections / FAQ */}
      <section className="container mx-auto px-4 py-10">
        <h2 className="text-xl font-medium">Answering the tough questions</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {objections.map((o, i) => (
            <article key={i} className="rounded-2xl border bg-card p-6">
              <h3 className="text-base font-medium">{o.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{o.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 pb-16 pt-6">
        <div className="mx-auto max-w-3xl rounded-2xl border bg-card p-6 text-center">
          <h2 className="text-xl font-medium">Build with us</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            If you’re building neural hardware, assistive tools, or research
            software, we want your device or dataset to “just work” in Neurolect.
          </p>
          <div className="mt-4 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/how-it-works"
              className="inline-flex items-center rounded-xl border px-4 py-2 text-sm hover:bg-accent"
            >
              See architecture
            </Link>
            <Link
              href="/api/lead"
              className="inline-flex items-center rounded-xl border px-4 py-2 text-sm hover:bg-accent"
            >
              Request access
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
