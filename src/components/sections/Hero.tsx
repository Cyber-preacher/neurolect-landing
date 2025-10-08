// src/components/sections/Hero.tsx
"use client";

import Link from "next/link";
import { COPY } from "@/lib/copy";

export default function Hero() {
  // Safe Plausible call if present
  type PlausibleFn = (event: string, options?: { props?: Record<string, unknown> }) => void;
  const track = (name: string) => {
    const w = typeof window !== "undefined" ? (window as unknown as { plausible?: PlausibleFn }) : null;
    if (w?.plausible) w.plausible(name);
  };

  return (
    <section className="relative">
      {/* Copy block */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-12 md:pt-16 md:pb-14">
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

        {/* Video card */}
        <div className="mt-10 md:mt-14">
          <div className="relative overflow-hidden rounded-3xl border bg-black/70 shadow-lg">
            <video
              className="h-[320px] w-full md:h-[440px] object-cover"
              autoPlay
              playsInline
              loop
              muted
            >
              <source src="/media/hero-loop-desktop.webm" type="video/webm" />
              <source src="/media/hero-loop-desktop.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
