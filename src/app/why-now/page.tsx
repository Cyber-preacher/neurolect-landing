// src/app/why-now/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why now — Neurolect",
  description:
    "The timing thesis: hardware maturity, leaps in AI translation, privacy-by-design expectations, and favorable cost curves make a universal BCI OS inevitable.",
};

export default function WhyNowPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <header className="max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-tight">Why now</h1>
        <p className="mt-4 text-muted-foreground">
          A universal brain–computer interface OS is now practical. Device reliability is up,
          AI translation is accurate and fast, privacy expectations are codified, and costs
          have fallen enough to support real products and developer ecosystems.
        </p>
      </header>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Four drivers</h2>
        <ul className="mt-4 space-y-6">
          <li className="rounded-2xl border p-4">
            <h3 className="font-medium">1) Hardware maturity</h3>
            <p className="mt-1 text-muted-foreground">
              Non-invasive EEG is more stable and usable (dry electrodes, better sampling, robust
              wireless); research-grade and clinical devices expose cleaner APIs. Interop is finally
              achievable through a common driver model.
            </p>
          </li>

          <li className="rounded-2xl border p-4">
            <h3 className="font-medium">2) AI translation leaps</h3>
            <p className="mt-1 text-muted-foreground">
              Signal denoising, embedding, and intent modeling have improved dramatically. Modern
              models map neural features to linguo-emotional commands with lower latency and higher
              confidence, enabling real-time experiences.
            </p>
          </li>

          <li className="rounded-2xl border p-4">
            <h3 className="font-medium">3) Privacy &amp; consent by default</h3>
            <p className="mt-1 text-muted-foreground">
              Users and regulators expect transparent capture, explicit consent, revocation, and
              least-privilege data flows. An OS-level policy runtime is the right abstraction to
              make these guarantees enforceable.
            </p>
          </li>

          <li className="rounded-2xl border p-4">
            <h3 className="font-medium">4) Cost curves + edge</h3>
            <p className="mt-1 text-muted-foreground">
              Commodity sensors, edge accelerators, and cloud pipelines reduce total cost of
              ownership. Developers can ship real “brain apps” with sustainable unit economics.
            </p>
          </li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">What this enables</h2>
        <ul className="mt-4 list-disc pl-6 text-muted-foreground space-y-2">
          <li>Everyday assistive control and communication, outside research labs.</li>
          <li>Neurosignature-backed security that’s private, portable, and revocable.</li>
          <li>A healthy developer ecosystem for neural-first applications (BApps).</li>
        </ul>
      </section>

      <nav className="mt-10 flex flex-wrap gap-4">
        <Link href="/how-it-works" className="underline underline-offset-4">
          How it works →
        </Link>
        <Link href="/moat" className="underline underline-offset-4">
          Moat &amp; IP →
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
