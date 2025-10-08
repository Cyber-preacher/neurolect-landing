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
  /** Used by <WhatIs/> */
  whatIs: {
    title: "What is Neurolect?",
    body:
      "Neurolect is a hardware-agnostic operating system for brain–computer interfaces. It translates neural activity into structured, linguo-emotional data and routes trusted intent through a policy-aware runtime into apps and devices via a hardware abstraction layer (HAL). Developers build BrainApps with stable tokens and SDKs, while users remain in control through consent, revocation, and privacy-first defaults. Neurosignatures are optional and used only as a supplementary factor within multi-factor authentication.",
  },

  /** Used by <ChallengesSolutions/> */
  challenges: {
    title: "Challenges Neurolect Addresses",
    items: [
      {
        title: "Communication barriers",
        problem:
          "Neural interfaces today struggle to convey nuanced intent and affect, leading to brittle commands and shallow expressiveness.",
        solution:
          "Neurolect maps neural activity to linguo-emotional tokens (intent + basic affect). Apps receive richer signals, improving clarity and usability.",
      },
      {
        title: "Limited accessibility",
        problem:
          "Most systems assume specific motor or speech capabilities and require device-specific training.",
        solution:
          "A hardware-agnostic HAL plus stable tokens make BrainApps accessible across non-invasive and invasive devices with lighter onboarding.",
      },
      {
        title: "Security & privacy",
        problem:
          "Raw neural data is intimate; many stacks lack consent primitives, revocation, or clear safety policy.",
        solution:
          "Consent & revocation by default, policy-gated actions, private-by-default processing, and neurosignatures used only as a supplementary factor.",
      },
      {
        title: "Fragmented standards",
        problem:
          "BCI hardware and SDKs are incompatible, forcing one-off integrations and fragile demos.",
        solution:
          "Drivers + HAL unify device I/O; the eval harness and stable intent tokens let developers integrate once and run everywhere.",
      },
    ],
  },

  /** Used by <CoreSolutions/> */
  core: {
    title: "Core Solutions & Unique Advantages",
    bullets: [
      "Thought-based control — interact with apps and devices directly via decoded intent tokens.",
      "Emotionally rich interactions — include basic affect to disambiguate and personalize actions.",
      "Neurosignature security — a portable, privacy-preserving, supplementary factor for identity.",
      "Universal compatibility — HAL + drivers make BrainApps hardware-agnostic (non-invasive to invasive).",
      "BrainApps (BApps) — developer SDKs and stable schemas enable a new category of neural applications.",
    ],
  },

  /** Used by <Roadmap/> */
  roadmap: {
    title: "Roadmap milestones",
    phases: [
      {
        id: "phase-1",
        when: "2025 H2",
        title: "Phase 1 — Foundations",
        achieved: true,
        items: [
          { label: "Signals & HAL for non-invasive EEG", status: "done" },
          { label: "Linguo-Emotional Models v0 (narrow tasks)", status: "done" },
          { label: "Policy Runtime (consent, revocation, rate limits)", status: "done" },
          { label: "SDKs for BrainApps (input/state/feedback)", status: "done" },
        ],
      },
      {
        id: "phase-2",
        when: "2026 H1",
        title: "Phase 2 — Scale & Interop",
        achieved: false,
        items: [
          { label: "Device drivers for additional EEG vendors", status: "planned" },
          { label: "Eval harness: standardized tasks & datasets", status: "planned" },
          { label: "Neurosignature schema (supplementary auth only)", status: "planned" },
          { label: "BApps catalog (curated distribution)", status: "planned" },
        ],
      },
      {
        id: "phase-3",
        when: "2026–2027",
        title: "Phase 3 — Advanced IO",
        achieved: false,
        items: [
          { label: "Higher-bandwidth decoding with partner devices", status: "planned" },
          { label: "Closed-loop UX research under strict guardrails", status: "planned" },
          { label: "Exploratory brain-to-brain protocols (no stimulation by default)", status: "planned" },
        ],
      },
    ],
    footnote:
      "Dates are indicative. We ship constrained, useful experiences first; expand by evidence and safety reviews.",
  },

  /** Used by <TechStack/> */
  tech: {
    title: "Neurolect technology stack",
    layers: [
      {
        name: "User Interaction",
        items: [
          { label: "BCI inputs", desc: "EEG/MEG/implants; multi-vendor device support via HAL." },
          { label: "Feedback loops", desc: "Haptics/visual/audio; strictly no stimulation by default." },
        ],
      },
      {
        name: "Processing",
        items: [
          { label: "Signal prep", desc: "Filtering, artifact rejection, synchronization." },
          { label: "Feature extraction", desc: "Time–frequency features and learned embeddings." },
        ],
      },
      {
        name: "AI & Translation",
        items: [
          { label: "Linguo-Emotional Models", desc: "Map activity to intent tokens + basic affect." },
          { label: "Calibration", desc: "Short, guided tasks to personalize within safe bounds." },
        ],
      },
      {
        name: "Security & Identity",
        items: [
          { label: "Consent & revocation", desc: "Session-scoped permissions; one-tap revoke." },
          { label: "Neurosignatures (optional)", desc: "Supplementary factor in MFA; privacy-preserving schema." },
        ],
      },
      {
        name: "Policy Runtime",
        items: [
          { label: "Guardrails", desc: "Rate limits, timeouts, policy checks before actuation." },
          { label: "Routing", desc: "Trusted intent events into apps/devices via contracts." },
        ],
      },
      {
        name: "Application Layer",
        items: [
          { label: "BrainApps (BApps)", desc: "SDKs for input/state/feedback; catalog distribution." },
          { label: "Dev tooling", desc: "Eval harness, logs, replay, model/version pinning." },
        ],
      },
      {
        name: "Infrastructure",
        items: [
          { label: "Edge-first", desc: "Local by default; encrypted transit & at-rest if cloud is used." },
          { label: "Scalability", desc: "Batch & streaming pipelines; observability baked in." },
        ],
      },
    ],
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

  /** Used by <Traction/>; placeholders until logos/quotes are finalized */
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

  /** NEW — Used by <Testimonials/> */
  testimonials: {
    title: "Recognition",
    sub: "Signals from the field",
    // Use either `items` or `quotes` — component can read .items; we provide both for compatibility.
    items: [
      {
        quote:
          "Policy-gated intent routing is exactly how neural UX becomes safe and useful beyond demos.",
        author: "CTO, Neural Interfaces Startup",
      },
      {
        quote:
          "A standardized intent schema with HAL-level interop is the missing substrate for BCI apps.",
        author: "Research Lead, Human–AI Interaction Lab",
      },
    ],
    quotes: [
      {
        quote:
          "Neurolect’s approach is refreshingly pragmatic—narrow, measurable, and privacy-first.",
        author: "Partner, Deep Tech Fund",
      },
    ],
  },

  /** Used by <FinalCTA/> */
  finalCta: {
    title: "Ready to talk?",
    sub: "Book a call and grab the teaser pack.",
    primary: { label: "Investors", href: "/investors", track: "cta_investors_footer" },
    secondary: {
      label: "Download teaser",
      href: "/pack/neurolect-investor-pack.pdf",
      track: "cta_teaser_footer",
    },
  },
};
