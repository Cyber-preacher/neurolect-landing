// src/components/sections/Hero.tsx
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16 grid items-center gap-10 md:grid-cols-2">
        {/* Left copy */}
        <div>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
            <span className="gradient-text">Neurolect</span> — The Universal OS for Brain–Computer Interfaces
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-prose">
            Connect, communicate, and control technology directly from your mind.
            A calm, safe pathway from neural activity to intent—built for people and products.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/investors"
              className="inline-flex items-center rounded-2xl px-4 py-2 text-sm font-semibold shadow-sm border bg-primary text-primary-foreground hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Investors
            </Link>
            <Link
              href="/pack/neurolect-investor-pack.pdf"
              className="inline-flex items-center rounded-2xl px-4 py-2 text-sm font-semibold border hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Download teaser
            </Link>
          </div>

          <div className="mt-6">
            <span className="chip">Private by design</span>
            <span className="chip ml-2">Consent &amp; revocation</span>
          </div>
        </div>

        {/* Right: looped video */}
        <div className="relative aspect-[4/5] w-full">
          <div className="absolute inset-0 overflow-hidden rounded-[1.25rem] surface surface-xl">
            <video
              className="h-full w-full object-cover"
              autoPlay
              muted
              playsInline
              loop
              preload="auto"
              aria-label="Neon light trails encircling a calm face—symbolizing neural intent"
            >
              <source src="/media/hero-loop-desktop.webm" type="video/webm" />
              <source src="/media/hero-loop-desktop.mp4" type="video/mp4" />
            </video>
            {/* Light veil for copy contrast */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/40 via-white/10 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
