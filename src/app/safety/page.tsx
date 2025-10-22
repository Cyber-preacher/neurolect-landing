// src/app/safety/page.tsx
// Neurolect — Safety & Privacy
// App Router / Next.js 15. UTF-8 LF; no COPY deps.

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Safety & Privacy | Neurolect",
  description:
    "How Neurolect handles neural data: consent, minimization, encryption, neurosignatures as MFA, retention, governance, red teaming, and research ethics.",
  openGraph: {
    title: "Safety & Privacy | Neurolect",
    description:
      "How Neurolect handles neural data: consent, minimization, encryption, neurosignatures as MFA, retention, governance, red teaming, and research ethics.",
    type: "article",
  },
};

type Item = { title: string; body: string };

const pillars: Item[] = [
  {
    title: "Consent-first, transparent use",
    body:
      "Every neural stream and derived embedding is opt-in with explicit, revocable consent. Interfaces show what’s captured, why, and where it flows.",
  },
  {
    title: "Data minimization by default",
    body:
      "We collect the least data necessary to perform a task. Prefer low-bandwidth intents over raw continuous streams; prefer on-device processing where feasible.",
  },
  {
    title: "Security-in-depth, practical now",
    body:
      "Encryption in transit (TLS) and at rest (AES-256). Keys segregated; audit trails on access. FHE and differential privacy are tracked as future-fit options, not blocking real-time UX today.",
  },
  {
    title: "Neurosignatures as MFA (not magic)",
    body:
      "Neural ‘brainprints’ assist identity checks and personalization, but never act as a sole factor. Expect drift; require corroborating factors (device, passkey, risk scoring).",
  },
  {
    title: "Lifecycle & retention controls",
    body:
      "Short default retention for raw signals; longer for derived, de-identified aggregates only with consent. One-click export and delete for user data.",
  },
  {
    title: "Independent review & red teaming",
    body:
      "Periodic external audits, adversarial testing against spoofing and model inversion, and formal disclosure of findings with remediation timelines.",
  },
];

const safeguards: Item[] = [
  {
    title: "On-device preference & sandboxing",
    body:
      "When possible, decode intent on the user’s device; if cloud is used, isolate per-tenant workloads and scrub transient buffers.",
  },
  {
    title: "Scoped APIs & least privilege",
    body:
      "BApps receive scoped tokens for specific intents — not raw neural data. The HAL enforces policy at the boundary.",
  },
  {
    title: "Telemetry with privacy",
    body:
      "Operational metrics are opt-in, de-identified, and aggregated. No covert model logging of raw signals. Research data requires a separate, IRB-style gate.",
  },
  {
    title: "User-visible rails & fallbacks",
    body:
      "Low-confidence decoding triggers confirmations or simpler UI paths. Users can pause/kill capture instantly.",
  },
  {
    title: "Supply chain scrutiny",
    body:
      "Signed builds, SBOMs, and reproducible pipelines. Device drivers and SDKs are version-pinned and hash-checked.",
  },
];

const threatModel: Item[] = [
  {
    title: "Spoofing / Impersonation",
    body:
      "Mitigation: neurosignatures only as MFA; liveness signals, session-bound keys, behavioral friction on anomalies.",
  },
  {
    title: "Model inversion / data leakage",
    body:
      "Mitigation: no raw neural logs to models; strict feature tap lists; encrypted embeddings; periodic leakage tests.",
  },
  {
    title: "Session hijack / token theft",
    body:
      "Mitigation: short-lived tokens, mTLS for device ↔ HAL, step-up auth on risk events, device attestation.",
  },
  {
    title: "Side-channel & aux-sensor abuse",
    body:
      "Mitigation: consent gating per sensor, cross-sensor correlation limited, runtime policy that disables non-essential feeds.",
  },
  {
    title: "Data breach / insider risk",
    body:
      "Mitigation: row-level ACLs, dual-control for exports, alerting on unusual queries, irreversible deletion protocol.",
  },
];

const governance: Item[] = [
  {
    title: "Policy surface",
    body:
      "Public Safety Policy, Data Processing Addendum, and Research Data Addendum. Versioned, diff-tracked, and archived.",
  },
  {
    title: "Ethics & IRB-style review",
    body:
      "Human-subjects research follows IRB-like review, explicit consents, and re-consent for scope changes.",
  },
  {
    title: "Standards alignment",
    body:
      "We watch and align with emerging neurotech standards (e.g., data interchange efforts) and privacy frameworks as they mature.",
  },
  {
    title: "Bug bounty & disclosures",
    body:
      "Coordinated disclosure program and bounty for vulnerabilities. We publish postmortems for high-severity issues.",
  },
];

export default function SafetyPage() {
  return (
    <main className="min-h-dvh">
      {/* Hero */}
      <section className="container mx-auto px-4 pt-16 pb-10">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Safety & Privacy
          </h1>
          <p className="mt-4 text-muted-foreground">
            Neurolect treats neural data as the most sensitive personal signal.
            Our approach blends practical, today-ready protections with a clear
            roadmap toward stronger, privacy-preserving computation.
          </p>
        </div>

        {/* Placeholder: compliance map / control matrix */}
        <div
          aria-label="policy matrix placeholder"
          className="mx-auto mt-8 h-40 max-w-3xl rounded-2xl border border-dashed p-4 text-center text-sm text-muted-foreground"
        >
          <div className="mt-8">[Table placeholder: Consent → Minimization → Encryption → Retention → Audit]</div>
        </div>
      </section>

      {/* Core pillars */}
      <section className="container mx-auto px-4 py-10">
        <h2 className="text-xl font-medium">Core pillars</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <article key={i} className="rounded-2xl border bg-card p-6 shadow-sm hover:shadow-md">
              <h3 className="text-base font-medium">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Threat model */}
      <section className="container mx-auto px-4 py-10">
        <div className="flex items-baseline justify-between">
          <h2 className="text-xl font-medium">Threat model & mitigations</h2>
          <Link
            href="/moat"
            className="text-sm text-primary underline-offset-4 hover:underline"
          >
            See Moat & IP →
          </Link>
        </div>

        {/* Placeholder: threat diagram */}
        <div
          aria-label="threat diagram placeholder"
          className="mt-4 rounded-2xl border border-dashed p-4 text-center text-sm text-muted-foreground"
        >
          <div className="mt-4">[Diagram placeholder: Device ↔ HAL ↔ AI layer ↔ BApps, controls at each hop]</div>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {threatModel.map((t, i) => (
            <article key={i} className="rounded-2xl border bg-card p-6">
              <h3 className="text-base font-medium">{t.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{t.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Practice details */}
      <section className="container mx-auto px-4 py-10">
        <h2 className="text-xl font-medium">What we do in practice</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {safeguards.map((s, i) => (
            <article key={i} className="rounded-2xl border bg-card p-6">
              <h3 className="text-base font-medium">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
            </article>
          ))}
        </div>

        {/* Placeholder: key management / data flow schematic */}
        <div
          aria-label="key management placeholder"
          className="mt-6 h-28 rounded-2xl border border-dashed p-4 text-center text-sm text-muted-foreground"
        >
          <div className="mt-3">[Schema placeholder: Keys & secrets, tenant isolation, audit trail]</div>
        </div>
      </section>

      {/* Governance */}
      <section className="container mx-auto px-4 py-10">
        <h2 className="text-xl font-medium">Governance & accountability</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {governance.map((g, i) => (
            <article key={i} className="rounded-2xl border bg-card p-6">
              <h3 className="text-base font-medium">{g.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{g.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* FAQ highlights */}
      <section className="container mx-auto px-4 py-10">
        <h2 className="text-xl font-medium">FAQ highlights</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <article className="rounded-2xl border bg-card p-6">
            <h3 className="text-base font-medium">Do you store raw brain data?</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              By default, no. We transform raw streams into short-lived features and intent signals, purge raws quickly, and prefer on-device decoding where possible.
            </p>
          </article>
          <article className="rounded-2xl border bg-card p-6">
            <h3 className="text-base font-medium">Are neurosignatures a password?</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              No. They’re supplementary signals in a multi-factor model. Expect variability; we always require corroborating factors and offer non-neural paths.
            </p>
          </article>
          <article className="rounded-2xl border bg-card p-6">
            <h3 className="text-base font-medium">Will you sell my neural data?</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              No. We never sell personal data. Research use requires separate consent, IRB-style review, and de-identification protocols.
            </p>
          </article>
          <article className="rounded-2xl border bg-card p-6">
            <h3 className="text-base font-medium">How can I delete my data?</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              From your account portal: export then delete. Deletion propagates to backups on a fixed schedule with cryptographic erasure logs.
            </p>
          </article>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 pb-16 pt-6">
        <div className="mx-auto max-w-3xl rounded-2xl border bg-card p-6 text-center">
          <h2 className="text-xl font-medium">Safety is a product feature</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            If you’re building devices, datasets, or BApps and want a privacy-first integration, we’d love to collaborate.
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
