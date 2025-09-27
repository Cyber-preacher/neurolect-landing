// src/components/sections/Moat.tsx
import Tile from "@/components/ui/Tile";

export default function Moat() {
  const items = [
    {
      title: "Neurosignature Schema",
      desc: "Stable, privacy-preserving identity derived from neural traits; enables consent and revocation.",
    },
    {
      title: "Policy Engine",
      desc: "Runtime guardrails for rate limits, targets, stimulation, and red lines—provable & testable.",
    },
    {
      title: "Device Drivers",
      desc: "Unified interface for invasive and non-invasive BCIs; hot-swap hardware without app changes.",
    },
    {
      title: "Eval Harness",
      desc: "Task suites and synthetic adversaries; data flywheel to continuously harden models and policies.",
    },
    {
      title: "Developer Network Effects",
      desc: "SDKs + Brain App marketplace attract builders; more apps → more users → better models.",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <header className="mb-6">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Moat &amp; IP</h2>
        <p className="mt-2 text-sm text-muted-foreground">Durable advantages that compound.</p>
      </header>

      <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <Tile key={it.title} title={it.title} desc={it.desc} />
        ))}
      </div>
    </section>
  );
}
