import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Moat & IP — Neurolect",
  description: "Neurosignature schema, policy engine, drivers, eval harness.",
};

export default function MoatPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Moat & IP</h1>
      <ul className="mt-6 list-disc pl-6 space-y-2 text-muted-foreground">
        <li><strong>Neurosignature schema:</strong> portable, privacy-preserving representation.</li>
        <li><strong>Policy engine:</strong> consent, revocation, rate-limits, stimulation guardrails.</li>
        <li><strong>Drivers:</strong> multi-device support; latency contracts & compatibility.</li>
        <li><strong>Eval harness:</strong> reproducible benchmarks incl. adversarial & safety tests.</li>
      </ul>
    </main>
  );
}
