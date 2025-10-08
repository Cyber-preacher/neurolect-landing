// src/app/why-now/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why now",
  description:
    "BCI maturity, model personalization, privacy norms, and cost curves make a neural OS timely and necessary.",
};

export default function WhyNowPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight">Why now</h1>
        <p className="mt-2 text-muted-foreground max-w-3xl">
          A convergence of hardware, AI, and culture unlocks a safe, universal interface for the mind.
        </p>
      </header>

      <ol className="space-y-6 list-decimal pl-6">
        <li>
          <strong>Hardware maturity.</strong>{" "}
          Non-invasive BCIs have improved in fidelity and comfort, while invasive research sets the ceiling for performance.
        </li>
        <li>
          <strong>Personalized models.</strong>{" "}
          Foundation models + user conditioning make linguo-emotional decoding practical and adaptive.
        </li>
        <li>
          <strong>Privacy expectations.</strong>{" "}
          Users demand data sovereignty; neurosignature-anchored rights make trust enforceable.
        </li>
        <li>
          <strong>Falling costs.</strong>{" "}
          Edge inference and efficient pipelines bring real-time decoding to consumer hardware.
        </li>
      </ol>
    </main>
  );
}
