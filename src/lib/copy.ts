const COPY = {
  nav: [
    { href: "#about", label: "What is Neurolect" },
    { href: "#solutions", label: "Challenges & Solutions" },
    { href: "#advantages", label: "Core Solutions" },
    { href: "#use-cases", label: "Use cases" },
    { href: "#technology", label: "Tech stack" },
    { href: "#roadmap", label: "Roadmap" },
    { href: "#team", label: "Team" },
    { href: "#recognition", label: "Recognition" },
    { href: "#contact", label: "Contact" }
  ],
  whatIs: {
    title: "Neurolect — Operating System for Brain–Computer Interfaces",
    body:
      "Neurolect is a universal BCI OS for linguo-emotional data exchange. " +
      "It enables brain-to-device and brain-to-brain communication via neurosignatures, " +
      "with safety, privacy, and developer-friendly primitives."
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
  team: {
    title: "Team & Advisors",
    sub: "Cross-disciplinary team across neuroscience, HCI, security, and infra."
  },
  testimonials: {
    title: "Recognition",
    sub: "Quotes & logos coming soon — partners, researchers, ecosystem supporters."
  },
  finalCta: {
    title: "Build with Neurolect",
    sub: "Join the dev preview, propose integrations, or collaborate on research."
  }
};

export type SiteCopy = typeof COPY;
export { COPY };
export default COPY;
