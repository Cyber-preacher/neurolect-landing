// src/components/sections/Safety.tsx
import Tile from "@/components/ui/Tile";
import Link from "next/link";

export default function Safety() {
  const points = [
    { title: "Consent & Revocation", desc: "User-first control: explicit consent flows and revocation at any time." },
    { title: "Rate Limits & Scopes", desc: "Throttle by task and context; default-deny on unknown targets or intents." },
    { title: "Stimulation Guardrails", desc: "Hard limits for any stimulation-capable hardware; policies tested offline." },
    { title: "Red-Teaming & Audits", desc: "Internal adversarial testing, external audits, and transparent changelogs." },
    { title: "On-Device Preference", desc: "Where possible, process on edge; encrypt in transit & at rest when remote." },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <header className="mb-6">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Safety &amp; Ethics</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Calm, careful defaults. <Link className="underline underline-offset-4" href="/pack/neurolect-investor-pack.pdf">1-pager in the pack</Link>.
        </p>
      </header>

      <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
        {points.map((p) => (
          <Tile key={p.title} title={p.title} desc={p.desc} />
        ))}
      </div>
    </section>
  );
}
