// src/components/sections/Hero.tsx
"use client";

import Link from "next/link";
import { COPY } from "@/lib/copy";

// Safe Plausible call if present (no global augmentation)
type PlausibleFn = (event: string, options?: { props?: Record<string, unknown> }) => void;
type PlausibleWin = { plausible?: PlausibleFn };

export default function Hero() {
  const track = (name: string) => {
    const w = typeof window !== "undefined" ? (window as unknown as PlausibleWin) : null;
    if (w?.plausible) w.plausible(name);
  };

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid items-center gap-10 md:grid-cols-2 max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        {/* Left copy */}
        <div className="max-w-3xl">
          <p className="text-sm/6 tracking-widest text-primary/80 uppercase">
            {COPY.hero.eyebrow}
          </p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
            {COPY.hero.title}
          </h1>
          <p className="mt-4 text-base/7 text-muted-foreground">
            {COPY.hero.subtitle}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={COPY.hero.primaryCta.href}
              onClick={() => track(COPY.hero.primaryCta.track)}
              className="inline-flex items-center rounded-2xl border bg-primary px-3.5 py-2 text-sm font-semibold text-primary-foreground shadow-sm hover:opacity-90"
            >
              {COPY.hero.primaryCta.label}
            </Link>
            <Link
              href={COPY.hero.secondaryCta.href}
              onClick={() => track(COPY.hero.secondaryCta.track)}
              className="inline-flex items-center rounded-2xl border px-3.5 py-2 text-sm font-semibold hover:bg-accent hover:text-accent-foreground"
            >
              {COPY.hero.secondaryCta.label}
            </Link>
          </div>

          <p className="mt-3 text-xs text-muted-foreground">
            {COPY.hero.note}
          </p>
        </div>

        {/* Right: portrait video card (4:5), no surface/padding, rounded mask */}
        <div className="relative w-full">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.25rem]">
            <video
              className="h-full w-full object-cover"
              autoPlay
              playsInline
              loop
              muted
              preload="auto"
              aria-label="Neon light trails encircling a calm face—symbolizing neural intent"
            >
              <source src="/media/hero-loop-desktop.webm" type="video/webm" />
              <source src="/media/hero-loop-desktop.mp4" type="video/mp4" />
            </video>
            {/* ultra-light veil to harmonize with the light background; remove if unwanted */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/18 via-white/5 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
