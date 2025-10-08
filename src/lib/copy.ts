// src/lib/copy.ts
export const SITE = {
  name: "Neurolect",
  url: "https://neurolect.ai",
  twitter: "@neurolect",
  tagline: "Operating System for Cyber-Brains",
  description:
    "Neurolect is a hardware-agnostic OS and data format for brain-computer interfaces. It translates neural signals into linguo-emotional data, standardizes device integration, and enables a new class of BrainApps.",
};

export const COPY = {
  /** NEW — used by <WhatIs/> */
  whatIs: {
    title: "What is Neurolect?",
    body:
      "Neurolect is a hardware-agnostic operating system for brain–computer interfaces. It translates neural activity into structured, linguo-emotional data and routes trusted intent through a policy-aware runtime into apps and devices via a hardware abstraction layer (HAL). Developers build BrainApps with stable tokens and SDKs, while users remain in control through consent, revocation, and privacy-first defaults. Neurosignatures are optional and used only as a supplementary factor within multi-factor authentication.",
  },

  hero: {
    eyebrow: "Operating System for Cyber-Brains",
    title: "Neurolect: the universal OS for brain–computer interfaces",
    subtitle:
      "Translate neural signals into linguo-emotional data. Standardize across devices with a hardware-agnostic HAL. Build BrainApps with a developer-first runtime and SDKs.",
    primaryCta: { label: "Investors", href: "/investors", track: "cta_investors" },
    secondaryCta: {
      label: "Download teaser",
      href: "/pack/neurolect-investor-pack.pdf",
      track: "cta_teaser",
    },
    note:
      "Neurosignatures are experimental and intended as a supplementary factor within multi-factor auth.",
  },

  homeMiniCards: [
    {
      title: "How it works",
      desc:
        "Signals → Processing → Linguo-Emotional Models → Policy Runtime → SDKs. A clear, device-agnostic pipeline.",
      href: "/how-it-works",
    },
    {
      title: "Moat & IP",
      desc:
        "Neurosignature schema, policy engine, device drivers, and an evaluation harness compose a durable platform moat.",
      href: "/moat",
    },
    {
      title: "Safety & Ethics",
      desc:
        "Consent and revocation by default, strict rate limits, stimulation guardrails, and privacy-first data handling.",
      href: "/safety",
    },
    {
      title: "Why now",
      desc:
        "Convergence of neuro-hardware maturity, ML decoding progress, privacy norms, and falling compute costs.",
      href: "/why-now",
    },
  ],

  howItWorks: {
    title: "How Neurolect works",
    intro:
      "Neurolect converts noisy neural signals into structured, linguo-emotional data and routes it through a policy-aware runtime into BrainApps—independent of the underlying BCI hardware.",
    items: [
      {
        name: "Signals",
        body:
          "Support invasive and non-invasive sources (EEG/MEG/implants). A hardware abstraction layer normalizes streams.",
      },
      {
        name: "Processing",
        body:
          "Adaptive filtering, artifact rejection, and synchronization; prepare signals for robust downstream decoding.",
      },
      {
        name: "Linguo-Emotional Models",
        body:
          "ML models map activity to linguistic intent and basic affect. Early but rapidly improving; scoped for pragmatic use.",
      },
      {
        name: "Policy Runtime",
        body:
          "A runtime that enforces consent, rate limits, guardrails, and per-app permissions before actions execute.",
      },
      {
        name: "SDKs & BrainApps",
        body:
          "Developer APIs for input events, state, and feedback loops. Distribute BApps via a curated catalog.",
      },
    ],
    footnote:
      "Neurolect does not claim full natural language decoding. We start narrow, measurable, and expand by evidence.",
  },

  moat: {
    title: "Moat & IP",
    bullets: [
      "Neurosignature schema: a portable, privacy-preserving representation of user-specific neural features.",
      "Policy engine: programmable guardrails for consent, revocation, and safe output pathways.",
      "Device drivers: HAL and connectors for heterogeneous BCI hardware (non-invasive to invasive).",
      "Eval harness: standardized tasks and datasets to compare model and driver performance over time.",
    ],
    callout:
      "IP focuses on the schema + runtime contracts that make third-party hardware and BApps interoperable.",
  },

  safety: {
    title: "Safety & Ethics",
    preface:
      "Neural data is intimate. Neurolect builds for safety, consent, and dignity from the first line of code.",
    bullets: [
      "Consent & revocation: explicit, session-scoped permissions; one-tap revoke.",
      "Rate limits & timeouts: reduce runaway actions and fatigue; bound actuation.",
      "Stimulation guardrails: conservative defaults; hardware-vendor-verified profiles only.",
      "Private by default: local first, encrypted transit and at-rest if cloud is used.",
      "Neurosignatures as supplementary: never the sole factor for authentication.",
    ],
    linkLabel: "Read the plain-English policy",
    linkHref: "/privacy",
  },

  whyNow: {
    title: "Why now",
    bullets: [
      "Hardware slope: consumer EEG improving; invasive systems scaling channels and reliability.",
      "ML decoding: state-of-the-art shows meaningful strides in constrained settings.",
      "Privacy & sovereignty: appetite for user-owned identity and consentable data flows.",
      "Cost curves: cheaper sensors and compute unlock practical, narrow BCI experiences.",
    ],
    note:
      "We avoid hype: ship constrained experiences that are useful today; expand surface area with evidence.",
  },

  /** used by <Traction/>; safe placeholders until logos/quotes are finalized */
  traction: {
    logos: [
      { name: "Alpha Labs" },
      { name: "Signal Bridge" },
      { name: "Cerebra Partners" },
      { name: "Neuron Forge" },
      { name: "Atlas Ventures" },
      { name: "Synapse Studio" },
    ],
    quotes: [
      {
        quote:
          "Neurolect’s policy-first runtime is the most credible path to safe, cross-device neural interfaces.",
        author: "Principal, Atlas Ventures",
      },
      {
        quote:
          "A lingua franca for neural intent is the missing layer. HAL + SDKs make this buildable today.",
        author: "Founder, Neuro HMI startup",
      },
    ],
  },
};
