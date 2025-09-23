// src/app/page.tsx
import Link from "next/link";
import Hero from "@/components/sections/Hero";
import Traction from "@/components/sections/Traction";

function Card({
  title,
  desc,
  href,
}: { title: string; desc: string; href: string }) {
  return (
    <article className="rounded-2xl border p-5 h-full flex flex-col">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground flex-1">{desc}</p>
      <div className="mt-4">
        <Link href={href} className="underline underline-offset-4">Learn more →</Link>
      </div>
    </article>
  );
}

export default function HomePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <Hero />

      {/* Minis grid */}
      <section className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card
          title="How it works"
          desc="Signals → Processing → Intent Models → Policy Runtime → SDKs. The whole pipeline, diagram-first."
          href="/how-it-works"
        />
        <Card
          title="Moat & IP"
          desc="Neurosignature schema, policy engine, device drivers, and an evaluation harness form a durable moat."
          href="/moat"
        />
        <Card
          title="Safety & Ethics"
          desc="Consent and revocation by default, strict rate limits, stimulation guardrails, and red-teaming."
          href="/safety"
        />
        <Card
          title="Why now"
          desc="Hardware maturity, AI personalization, privacy norms, and falling cost curves converge right now."
          href="/why-now"
        />
      </section>

      {/* Traction logos / quotes */}
      <section className="mt-14">
        <Traction />
      </section>

      {/* Footer CTA strip */}
      <section className="mt-12 mb-8 flex flex-col items-center gap-3 text-center">
        <h2 className="text-xl font-semibold tracking-tight">Ready to talk?</h2>
        <p className="text-sm text-muted-foreground">
          Book a call and grab the teaser pack.
        </p>
        <div className="flex gap-3">
          <Link href="/investors" className="rounded-2xl px-3.5 py-2 text-sm font-semibold shadow-sm border bg-primary text-primary-foreground hover:opacity-90">
            Investors
          </Link>
          <Link href="/pack/neurolect-investor-pack.pdf" className="rounded-2xl px-3.5 py-2 text-sm font-semibold border hover:bg-accent hover:text-accent-foreground">
            Download teaser
          </Link>
        </div>
      </section>
    </div>
  );
}
