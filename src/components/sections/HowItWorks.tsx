// src/components/sections/HowItWorks.tsx
import Tile from "@/components/ui/Tile";

export default function HowItWorks() {
  const steps = [
    {
      title: "Signals",
      desc: "Ingest EEG and implant streams via universal drivers; normalize sampling, channels, and timing.",
      badge: "Step 1",
    },
    {
      title: "Processing",
      desc: "Artifact removal, band-pass, feature extraction; transform time-series into intent-ready features.",
      badge: "Step 2",
    },
    {
      title: "Intent Models",
      desc: "Supervised + self-supervised models infer intents, affect, and control primitives from features.",
      badge: "Step 3",
    },
    {
      title: "Policy Runtime",
      desc: "Safety policies gate rate, scope, and targets; stimulation guardrails and consent enforcement.",
      badge: "Step 4",
    },
    {
      title: "SDKs",
      desc: "Typed SDKs for apps and devices—subscribe to intents, stream feedback, and build Brain Apps.",
      badge: "Step 5",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <header className="mb-6">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">How it works</h2>
        <p className="mt-2 text-sm text-muted-foreground">Signals → Processing → Intent Models → Policy Runtime → SDKs</p>
      </header>

      <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
        {steps.map((s) => (
          <Tile key={s.title} title={s.title} desc={s.desc} badge={s.badge} />
        ))}
      </div>
    </section>
  );
}
