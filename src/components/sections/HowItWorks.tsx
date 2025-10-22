// src/components/sections/HowItWorks.tsx
// Full "How it works" section that composes the three diagrams and page content.
// UTF-8 LF.

import Link from "next/link";
import ArchitectureDiagram from "@/components/diagrams/ArchitectureDiagram";
import PipelineDiagram from "@/components/diagrams/PipelineDiagram";
import MonetizationMap from "@/components/diagrams/MonetizationMap";

type Tile = { title: string; desc: string };
type Phase = { title: string; points: string[] };

const hero = {
  kicker: "Neurolect Product",
  title: "How Neurolect Works",
  intro:
    "Neurolect is both a runtime (OS) and a protocol that translates neural intent into linguistic and affective meaning. Hardware-agnostic, privacy-first, and built for BrainApps (BApps).",
};

const valueProps: Tile[] = [
  {
    title: "OS + Protocol",
    desc:
      "We provide a linguo-emotional protocol and runtime that encode neural intent as interoperable commands plus affect tags—an OS ABI for BCIs.",
  },
  {
    title: "Hardware-agnostic HAL",
    desc:
      "Adapters for EEG/ECoG/MEG and future modalities. Streams are synchronized into common formats/timestamps for downstream models.",
  },
  {
    title: "Identity & Security",
    desc:
      "Neurosignatures are supplementary biometric factors within MFA. Encrypted embeddings and explicit consent by default.",
  },
  {
    title: "BApp Ecosystem",
    desc:
      "SDKs, APIs, simulator, and certification flows so developers can ship assistive comms, hands-free productivity, and immersive apps.",
  },
];

const whatBlocks: Tile[] = [
  {
    title: "What Neurolect is",
    desc:
      "A unified OS and data interface for BCIs. As an OS, it manages neural I/O and feedback; as a format, it standardizes embeddings and protocol messages so any device/app can interoperate.",
  },
  {
    title: "What Neurolect is not",
    desc:
      "Not a headset manufacturer or generic LLM wrapper. We avoid grand transhumanist claims; we prioritize measurable UX gains and assistive/clinical impact first.",
  },
];

const archLayers = [
  { title: "User Interaction Layer", body: "Neural UI/UX favors low cognitive load: constrained selections, adaptive feedback, confirmations, and error-tolerant flows." },
  { title: "Hardware Abstraction Layer (HAL)", body: "Device adapters harmonize EEG/ECoG/MEG and auxiliary sensors (eye/EMG/IMU) into a synchronized stream. Inspired by LSL-style aggregation; aligned with emerging standards." },
  { title: "AI & Translation Layer", body: "Preprocessing → intent embeddings → linguo-emotional translation. Personalization via calibration and reinforcement signals." },
  { title: "Identity & Security Layer", body: "Neurosignature-assisted MFA, encrypted embeddings, consent-gated data, and tenant isolation for regulated deployments." },
  { title: "Communication Layer", body: "Brain→Device is available now for control of apps/devices. Brain→Brain is a longer-term research track (Neurosync)." },
  { title: "Application Layer", body: "SDKs for BApps: standardized commands, affect tags, capability discovery, policy hooks, and store/certification plumbing." },
];

const pipeline = [
  { title: "1) Acquisition & Preprocessing", body: "Artifact handling (ICA/filters), synchronization, and optional sensor fusion. Outputs stable, time-aligned signals." },
  { title: "2) Neural Feature Encoding & Intent Extraction", body: "CNN/LSTM/Transformer variants build intent embeddings for selections, motor imagery, or coarse affect." },
  { title: "3) Linguo-Emotional Translator", body: "Maps embeddings to semantic/textual commands plus affect tags (e.g., urgency/frustration) for richer downstream behavior." },
  { title: "4) Command & Bytecode Mapper", body: "Deterministic rules for simple actions; learned planners for multi-step tasks using app capability schemas." },
  { title: "5) Feedback & Reinforcement", body: "Confirmations/corrections refine per-user models. Profiles store priors to reduce cold-start time." },
];

const capabilities: Tile[] = [
  { title: "Works now", desc: "HAL ingestion, modular preprocessing, constrained-task intent classification, coarse affect tags, and per-user calibration." },
  { title: "In active development", desc: "Quantized on-device translators, richer capability schemas for apps, faster cold-start with few-shot calibration." },
  { title: "Research track", desc: "Neurosignatures as strong auth, fluid linguo-emotional dialogue at scale, and multi-user synchronization (Neurosync)." },
];

const sdk: Tile[] = [
  { title: "Developer SDKs", desc: "Type-safe client libraries (Web/React, native shells, Unity/Unreal). Includes HAL adapters, simulator, and test suites." },
  { title: "APIs", desc: "Session/capability APIs, personalization endpoints, encrypted embedding stores. On-prem option for regulated customers." },
  { title: "Compliance & Privacy", desc: "Consent flows, tenant isolation, and data minimization. Neurosignatures handled as sensitive by design." },
];

const roadmap: Phase[] = [
  { title: "Phase I — Protocol & Reference Apps", points: ["v1 protocol (commands + affect tags), HAL adapters for common EEGs", "Assistive communication & hands-free productivity BApps", "Encrypted per-user profiles; calibration shortcuts"] },
  { title: "Phase II — Dataset & On-Device", points: ["Labeled neurosignature corpus with active learning", "Quantized translators for edge; latency & power budgets", "Patent filings; trade-secret hardening of pipelines"] },
  { title: "Phase III — Ecosystem & Certification", points: ["BApp marketplace; partner certification tracks", "Protocol compatibility badges; perf/privacy thresholds", "Runtime + embedding schema licensing programs"] },
];

export default function HowItWorks() {
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

        {/* Value props */}
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {valueProps.map((v, i) => (
            <li
              key={i}
              className="rounded-2xl border p-6 bg-background/60 backdrop-blur-sm"
            >
              <h3 className="text-lg font-medium leading-tight">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
            </li>
          ))}
        </ul>

        {/* What / Not */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {whatBlocks.map((s, i) => (
            <div key={i} className="rounded-2xl border p-6">
              <h2 className="text-2xl font-semibold tracking-tight">{s.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Architecture overview (diagram) */}
        <div className="mt-12 rounded-2xl border p-4 bg-muted/30">
          <h2 className="px-2 text-2xl md:text-3xl font-semibold tracking-tight">
            Architecture overview
          </h2>
          <p className="px-2 mt-2 text-sm text-muted-foreground max-w-3xl">
            Devices → HAL adapters → AI &amp; Translation → Command Runtime → BrainApps.
            Consent and policy enforced at boundaries; encryption and MFA in cross-cutting layers.
          </p>
          <div className="mt-4">
            <ArchitectureDiagram />
          </div>
        </div>

        {/* Layered architecture list */}
        <h2 className="mt-12 text-2xl md:text-3xl font-semibold tracking-tight">
          Layered system
        </h2>
        <ul className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {archLayers.map((l, i) => (
            <li key={i} className="rounded-2xl border p-6">
              <h3 className="text-base font-medium leading-tight">{l.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{l.body}</p>
            </li>
          ))}
        </ul>

        {/* Signal → Meaning pipeline (diagram) */}
        <div className="mt-12 rounded-2xl border p-4 bg-muted/30">
          <h2 className="px-2 text-2xl md:text-3xl font-semibold tracking-tight">
            Signal → Meaning pipeline
          </h2>
          <p className="px-2 mt-2 text-sm text-muted-foreground max-w-3xl">
            From preprocessing and feature extraction to intent/affect decoding and command mapping,
            with a visible feedback loop for personalization.
          </p>
          <div className="mt-4">
            <PipelineDiagram />
          </div>
        </div>

        {/* Pipeline explainer */}
        <ul className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pipeline.map((p, i) => (
            <li key={i} className="rounded-2xl border p-6">
              <h3 className="text-base font-medium leading-tight">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
            </li>
          ))}
        </ul>

        {/* Monetization map (diagram) */}
        <div className="mt-12 rounded-2xl border p-4 bg-muted/30">
          <h2 className="px-2 text-2xl md:text-3xl font-semibold tracking-tight">
            Where monetization lies (not pricing)
          </h2>
          <p className="px-2 mt-2 text-sm text-muted-foreground max-w-3xl">
            Runtime licensing, BApp marketplace, enterprise/on-prem support, adapter certification,
            and de-identified research partnerships (opt-in) — aligned with Neurolect v0.3.
          </p>
          <div className="mt-4">
            <MonetizationMap />
          </div>
        </div>

        {/* SDKs & APIs */}
        <h2 className="mt-12 text-2xl md:text-3xl font-semibold tracking-tight">
          SDKs & APIs
        </h2>
        <ul className="mt-6 grid gap-6 sm:grid-cols-3">
          {sdk.map((s, i) => (
            <li key={i} className="rounded-2xl border p-6">
              <h3 className="text-base font-medium leading-tight">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </li>
          ))}
        </ul>

        {/* Final CTA */}
        <div className="mt-12 rounded-2xl border p-6 bg-background/60 backdrop-blur-sm">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Build on Neurolect
          </h2>
          <p className="mt-2 text-sm text-muted-foreground max-w-2xl">
            Want early access to HAL adapters, translators, and capability schemas? Join the
            developer preview and help shape the first generation of BApps.
          </p>
          <div className="mt-6 flex gap-3">
            <Link href="/api/lead" className="inline-flex items-center rounded-xl border px-4 py-2 text-sm hover:bg-accent">
              Request access
            </Link>
            <Link href="/moat" className="inline-flex items-center rounded-xl border px-4 py-2 text-sm hover:bg-accent">
              Read “Moat &amp; IP”
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
