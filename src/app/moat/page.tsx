// src/app/moat/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Moat & IP",
  description:
    "Neurosignature schema, policy runtime, drivers, eval harness, HAL, and BApps ecosystem form a durable advantage for Neurolect.",
};

export default function MoatPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight">Moat & IP</h1>
        <p className="mt-2 text-muted-foreground max-w-3xl">
          Neurolect’s defensibility compounds across identity, orchestration, interoperability, and ecosystem layers.
        </p>
      </header>

      <section className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold">Neurosignature schema</h2>
          <p className="mt-2 text-muted-foreground">
            A privacy-preserving schema binds high-confidence actions to a person’s unique neurosignature, enabling trusted authentication
            and revocation without exposing raw neural data.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Policy engine (cross-device)</h2>
          <p className="mt-2 text-muted-foreground">
            A runtime that enforces consent, rate limits, and stimulation guardrails across apps and hardware. Policies are portable and audited.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Drivers + HAL</h2>
          <p className="mt-2 text-muted-foreground">
            A growing catalog of vendor drivers feeds a unified Hardware Abstraction Layer (HAL), making BApps hardware-agnostic.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Evaluation harness</h2>
          <p className="mt-2 text-muted-foreground">
            Continuous evals for linguo-emotional accuracy and safety regression, with anonymized replay and red-team suites.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">BApps ecosystem</h2>
          <p className="mt-2 text-muted-foreground">
            Stable intent tokens and SDKs lower integration cost, attracting third-party developers and creating two-sided network effects.
          </p>
        </div>
      </section>
    </main>
  );
}
