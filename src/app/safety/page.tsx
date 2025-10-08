// src/app/safety/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Safety & Ethics",
  description:
    "Consent and revocation by default, on-device preference, strict rate limits, stimulation guardrails, and red-teaming. Privacy anchored in neurosignatures.",
};

export default function SafetyPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight">Safety & Ethics</h1>
        <p className="mt-2 text-muted-foreground max-w-3xl">
          Safety is productized—not a disclaimer. Policies execute before actions, and users can revoke at any time.
        </p>
      </header>

      <section className="grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-xl font-semibold">Consent & Revocation</h2>
          <p className="mt-2 text-muted-foreground">
            Explicit scopes and lifetimes for each capability. One-tap revocation invalidates tokens and halts downstream automations.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">On-device preference</h2>
          <p className="mt-2 text-muted-foreground">
            Sensitive decoding runs locally when feasible; cloud processing is encrypted and minimized with privacy budgets.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Rate limits & Guardrails</h2>
          <p className="mt-2 text-muted-foreground">
            Temporal and magnitude limits on actions, plus stimulation guardrails to avoid harmful feedback loops.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Data rights</h2>
          <p className="mt-2 text-muted-foreground">
            Your neurosignature anchors rights of access, portability, and deletion. We never sell raw neural data.
          </p>
        </div>
      </section>

      <section className="mt-12 border-t pt-8">
        <h2 className="text-xl font-semibold">Red-teaming & Audits</h2>
        <p className="mt-2 text-muted-foreground">
          Adversarial tests stress-check decoding and policy layers; audit logs cover token provenance, policy decisions, and device routing.
        </p>
      </section>
    </main>
  );
}
