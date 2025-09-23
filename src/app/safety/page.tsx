import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Safety & Ethics — Neurolect",
  description: "Consent, revocation, rate limits, and stimulation guardrails.",
};

export default function SafetyPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Safety & Ethics</h1>
      <ul className="mt-6 list-disc pl-6 space-y-2 text-muted-foreground">
        <li>Explicit consent flows and transparent logs.</li>
        <li>Revocation everywhere—user can always cut power.</li>
        <li>Rate limits & time-outs for all I/O.</li>
        <li>Stimulation guardrails & red-teaming.</li>
      </ul>
    </main>
  );
}
