// src/components/sections/Moat.tsx
// Content grounded in Neurolect Whitepaper v0.3 (user-provided).
// No COPY imports to avoid type drift. UTF-8 LF.

import Link from "next/link";

type Tile = { title: string; desc: string };

const hero = {
  title: "Moat & IP",
  kicker: "Why Neurolect can’t be easily copied",
  intro:
    "Neurolect is the operating system and lingua franca for brain–computer interaction. Our defensibility combines protocol-layer control, proprietary neurosignature data, identity & security primitives, and standards-aligned infrastructure. Together these form a barrier that strengthens with usage.",
};

const pillars: Tile[] = [
  {
    title: "Protocol layer (linguo-emotional interface)",
    desc:
      "We define the standardized encoding that maps neural intent into linguistic + affective semantics. Devices may vary, but interoperable communication flows through Neurolect’s protocol—akin to an OS ABI for BCIs.",
  },
  {
    title: "Proprietary neurosignature dataset",
    desc:
      "A growing corpus linking neural patterns with semantic and emotional labels. This data improves personalization, decoding accuracy, and anti-spoofing. It compounds via a privacy-preserving flywheel.",
  },
  {
    title: "Identity & security primitives",
    desc:
      "Neurosignatures act as supplementary biometric factors within multi-factor auth. With conventional credentials and encrypted embeddings, we enable 1-human-1-brain style resistance and safe personalization.",
  },
  {
    title: "Standards-aligned OS for BCIs",
    desc:
      "Hardware-agnostic HAL and common data formats make Neurolect the hub across EEG/ECoG/MEG and future devices. Alignment with industry efforts (e.g., LSL-style streaming; IEEE P2731-like semantics) reduces partner switching costs.",
  },
];

const whyItMatters: Tile[] = [
  {
    title: "Defensibility investors recognize",
    desc:
      "Moat isn’t UI; it’s protocols, datasets, identity, and infra. This stack raises replication cost and enables licensing.",
  },
  {
    title: "Ecosystem control without lock-in",
    desc:
      "We standardize interfaces so BApps and devices interoperate—yet the meaning layer and dataset remain Neurolect’s core competence.",
  },
  {
    title: "Compounding network effects",
    desc:
      "Each validated session enriches models and calibration priors, improving accuracy and cutting onboarding time for the next user.",
  },
];

const ipStrategy = {
  headline: "IP strategy (legal + technical)",
  bullets: [
    "Patents: linguo-emotional encoding/decoding flows, secure identity binding, protocol handshakes, command/bytecode mapping.",
    "Trade secrets: dataset curation pipelines, feature spaces, model ensembles, calibration heuristics, on-device compression.",
    "Data rights: consented, privacy-preserving neurosignature/label collections; encrypted embeddings; contractual partner use limits.",
    "Standards position: interoperable where it boosts adoption; proprietary where it preserves differentiation (translator & embeddings).",
  ],
};

const transparency: Tile[] = [
  {
    title: "What works now",
    desc:
      "Hardware-agnostic ingestion, modular preprocessing, basic intent classification, and coarse affect tags in constrained tasks.",
  },
  {
    title: "What’s experimental",
    desc:
      "Neurosignatures for biometrics remain supplementary factors; real-time linguo-emotional dialogue at scale is a long-term goal.",
  },
  {
    title: "What we don’t claim",
    desc:
      "No grand transhumanist promises. We focus on measurable, user-visible gains and clinical/assistive impact first.",
  },
];

const roadmap = {
  headline: "Defensibility roadmap",
  phases: [
    {
      title: "Phase I — Protocol & SDK",
      points: [
        "Publish v1 protocol spec (commands + affect tags) and HAL adapters.",
        "Reference apps (assistive comms, hands-free productivity).",
        "Per-user calibration + encrypted embedding store.",
      ],
    },
    {
      title: "Phase II — Dataset & On-device",
      points: [
        "Grow labeled neurosignature corpus; active learning loops.",
        "Quantized translators for edge devices; faster cold-start.",
        "File formal patents; expand trade-secret surface.",
      ],
    },
    {
      title: "Phase III — Ecosystem & Licensing",
      points: [
        "BApp marketplace and partner certification.",
        "Protocol compliance program; compatibility badges.",
        "Licensing: translator runtime + embedding schemas.",
      ],
    },
  ],
};

const licensing: Tile[] = [
  {
    title: "Runtime licensing",
    desc:
      "Per-device or per-MAU licensing for the translator runtime and embedding schemas; free HAL adapters to reduce friction.",
  },
  {
    title: "Data & models",
    desc:
      "Hosted personalization/calibration; on-prem for regulated deployments; strict privacy/consent controls.",
  },
  {
    title: "Partner program",
    desc:
      "SDK support, test suites, and certification tracks to ensure compatible latency, accuracy, and privacy across third-party devices.",
  },
];

export default function Moat() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-widest text-muted-foreground">
            {hero.kicker}
          </p>
          <h1 className="mt-2 text-4xl md:text-5xl font-semibold tracking-tight">
            {hero.title}
          </h1>
          <p className="mt-4 text-muted-foreground">{hero.intro}</p>
        </div>

        {/* Pillars */}
        <h2 className="mt-12 text-2xl md:text-3xl font-semibold tracking-tight">
          Our moat pillars
        </h2>
        <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {pillars.map((p, i) => (
            <li
              key={i}
              className="rounded-2xl border p-6 bg-background/60 backdrop-blur-sm"
            >
              <h3 className="text-lg font-medium leading-tight">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
            </li>
          ))}
        </ul>

        {/* Why it matters */}
        <h2 className="mt-12 text-2xl md:text-3xl font-semibold tracking-tight">
          Why this matters
        </h2>
        <ul className="mt-6 grid gap-6 sm:grid-cols-3">
          {whyItMatters.map((w, i) => (
            <li key={i} className="rounded-2xl border p-6">
              <h3 className="text-base font-medium leading-tight">{w.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{w.desc}</p>
            </li>
          ))}
        </ul>

        {/* IP strategy */}
        <div className="mt-12 rounded-2xl border p-6">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            {ipStrategy.headline}
          </h2>
          <ul className="mt-4 list-disc pl-5 text-sm text-muted-foreground space-y-2">
            {ipStrategy.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </div>

        {/* Transparency */}
        <h2 className="mt-12 text-2xl md:text-3xl font-semibold tracking-tight">
          Transparent claims
        </h2>
        <ul className="mt-6 grid gap-6 sm:grid-cols-3">
          {transparency.map((t, i) => (
            <li key={i} className="rounded-2xl border p-6">
              <h3 className="text-base font-medium leading-tight">{t.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
            </li>
          ))}
        </ul>

        {/* Roadmap */}
        <div className="mt-12">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            {roadmap.headline}
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {roadmap.phases.map((ph, i) => (
              <div key={i} className="rounded-2xl border p-6">
                <h3 className="text-base font-medium leading-tight">{ph.title}</h3>
                <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground space-y-2">
                  {ph.points.map((pt, j) => (
                    <li key={j}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Licensing */}
        <h2 className="mt-12 text-2xl md:text-3xl font-semibold tracking-tight">
          Licensing & ecosystem
        </h2>
        <ul className="mt-6 grid gap-6 sm:grid-cols-3">
          {licensing.map((l, i) => (
            <li key={i} className="rounded-2xl border p-6">
              <h3 className="text-base font-medium leading-tight">{l.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{l.desc}</p>
            </li>
          ))}
        </ul>

        {/* Ethics & privacy */}
        <div className="mt-12 rounded-2xl border p-6">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Ethics & privacy, by design
          </h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Neurosignatures are treated as sensitive. We use multi-factor models,
            strong encryption, and explicit consent. We align with neuroergonomics
            to keep cognitive load low and avoid over-claiming beyond current science.
            See our{" "}
            <Link href="/privacy" className="underline">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
