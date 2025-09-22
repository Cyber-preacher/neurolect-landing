const COPY = {
  nav: [
    { href: "#about", label: "What is Neurolect" },
    { href: "#how-it-works", label: "How it works" },
    { href: "#moat", label: "Moat & IP" },
    { href: "#safety", label: "Safety & Ethics" }, // NEW
    { href: "#solutions", label: "Challenges & Solutions" },
    { href: "#advantages", label: "Core Solutions" },
    { href: "#use-cases", label: "Use cases" },
    { href: "#technology", label: "Tech stack" },
    { href: "#roadmap", label: "Roadmap" },
    { href: "#team", label: "Team" },
    { href: "#recognition", label: "Recognition" },
    { href: "#contact", label: "Contact" }
  ],

  hero: {
    h1: "Neurolect — the OS layer for brain–computer interfaces",
    sub: "From raw signals to safe, portable neurosignatures developers can build on.",
    primaryCta: "Request investor call",
    secondaryCta: "Download investor pack"
  },

  whatIs: {
    title: "Neurolect — Operating System for Brain–Computer Interfaces",
    body:
      "Neurolect is a universal BCI OS for linguo-emotional data exchange. " +
      "It enables brain-to-device and brain-to-brain communication via neurosignatures, " +
      "with safety, privacy, and developer-friendly primitives."
  },

  howItWorks: {
    title: "How Neurolect works",
    sub: "From raw biosignals to safe, portable neurosignatures developers can build on.",
    layers: [
      { title: "Signals (I/O layer)", body: "EEG, EMG, eye-tracking, speech, IMU and other devices feed normalized streams." },
      { title: "Processing", body: "Denoising, feature extraction and multi-modal alignment create stable representations." },
      { title: "Intent Models", body: "Decoders map signals to intents; personalization adapts with user-consented profiles." },
      { title: "Policy Runtime", body: "Consent, scopes, rate limits and audit produce safe, revocable capabilities." },
      { title: "SDKs & Apps", body: "TypeScript/Rust SDKs, simulators and reference apps expose capabilities to builders." }
    ]
  },

  moat: {
    title: "Moat & IP",
    sub: "A defensible stack: schema + runtime + drivers + evaluation + governance.",
    bullets: [
      {
        title: "Neurosignature schema",
        body: "Portable, revocable user embeddings with provenance and consent scopes — the API others build on."
      },
      {
        title: "Policy runtime",
        body: "Runtime enforcement for consented capabilities: scopes, rate limits, revocation, and audit trails."
      },
      {
        title: "Hardware drivers",
        body: "Adapters for EEG/EMG/eye/speech/IMU — abstracted interfaces that compound integrations over time."
      },
      {
        title: "Evaluation harness",
        body: "Standardized tasks, datasets, and safety tests for reproducible progress and regulatory readiness."
      },
      {
        title: "Governance & ecosystem",
        body: "Open spec + compatibility program; long-term network effects for devices, apps, and users."
      }
    ],
    callout: "The core IP is the schema + runtime coupling: consent-aware neurosignatures that remain portable yet controllable."
  },

  // NEW — Safety & Ethics
  safety: {
    title: "Safety & Ethics",
    sub: "We design for consent, revocability, and human agency — before performance.",
    items: [
      {
        title: "Consent & control",
        body: "All capabilities are granted per scope, per app. Users can revoke at any time; grants expire by default."
      },
      {
        title: "Privacy by design",
        body: "Neurosignatures are user-owned artifacts with provenance; apps receive only the minimum signals needed."
      },
      {
        title: "Rate limits & guardrails",
        body: "Limits per capability and per app prevent feedback loops and abuse; safety tests run in CI."
      },
      {
        title: "Stimulation safeguards",
        body: "Protective defaults for any actuators; human-in-the-loop for sensitive actions and overrides."
      },
      {
        title: "Auditability",
        body: "Every consented action is logged with source, scope, and time to enable post-hoc review."
      }
    ],
    link: {
      href: "/pack/neurolect-safety-ethics.pdf", // placeholder, add later
      label: "Safety & Ethics 1-pager (PDF)"
    }
  },

  challenges: {
    title: "Key challenges we’re solving",
    items: [
      { title: "Signal → Intent gap", body: "Decode noisy neural/physio signals into reliable intents." },
      { title: "Privacy & consent", body: "User-owned neurosignatures, permissioning, revocation, auditability." },
      { title: "Safety & ethics", body: "Guardrails for feedback loops; sandboxed capabilities and review layers." },
      { title: "Interoperability", body: "Hardware-agnostic drivers and a common API/SDK for apps and devices." }
    ]
  },

  core: {
    title: "Neurolect core solutions",
    bullets: [
      "Neurosignature schema: portable, revocable user embeddings with provenance.",
      "Intent runtime: from low-level signals to typed actions and policies.",
      "Safety model: consented scopes, rate limits, and reversible permissions.",
      "Dev SDKs: TypeScript/Rust kits, simulators, reference apps."
    ]
  },

  tech: {
    title: "Technology stack",
    layers: [
      "I/O layer: EEG/EMG/eye-tracking/speech/IMU; hardware drivers.",
      "Signal processing: denoise, feature extraction, alignment.",
      "Model layer: intent decoding, personalization, continual learning.",
      "Runtime: policy engine, capability tokens, sandbox.",
      "SDKs & APIs: app surface, event bus, storage adapters."
    ]
  },

  useCases: {
    title: "Use cases",
    items: [
      "Hands-free accessibility and assistive control",
      "Silent text input and command palettes",
      "Affective computing & adaptive UX",
      "BCI-first creative tools",
      "Telepresence & collaborative control",
      "Neuro-secure authentication (consented)"
    ]
  },

  roadmap: {
    title: "Roadmap",
    phases: [
      { phase: "v0.1 Research kits", detail: "Signal simulators, mock devices, baseline decoders, demo apps." },
      { phase: "v0.2 Dev Preview", detail: "SDKs, policy engine MVP, consent flows, local profiles." },
      { phase: "v0.3 Hardware integrations", detail: "Drivers for 2–3 devices, on-device inference options." },
      { phase: "v0.4 Safety review", detail: "Ethics board process, testing harnesses, red-team protocols." },
      { phase: "v1.0 Launch", detail: "Stable APIs, store for apps/drivers, governance bootstrap." }
    ]
  },

  investors: {
    title: "For Investors",
    body:
      "We’re raising to bring the Neurolect OS to developers and device makers. " +
      "Book a call, grab the pack, or request the full data room.",
    calendlyUrl:
      "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2jtVwCNFO-gN8hhIBFH_D77MF1oouFKFWdFWXv7hMRuZUXltBB-BVk54T6uN6_zJi16slzapI-"
  },

  team: { title: "Team & Advisors", sub: "Cross-disciplinary team across neuroscience, HCI, security, and infra." },

  testimonials: { title: "Recognition", sub: "Quotes & logos coming soon — partners, researchers, ecosystem supporters." },

  finalCta: { title: "Build with Neurolect", sub: "Join the dev preview, propose integrations, or collaborate on research." }
};

export type SiteCopy = typeof COPY;
export { COPY };
export default COPY;
