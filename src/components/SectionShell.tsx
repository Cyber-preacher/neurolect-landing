// Generic section wrapper for consistent spacing/anchors
</section>
)
}


// =============================================
// FILE: src/components/sections/Hero.tsx
// Minimal, with a subtle animated gradient background (CSS only)
// =============================================
"use client"
import { Button } from "@/components/ui/button"
import { COPY } from "@/lib/copy"


export default function Hero() {
return (
<section className="relative overflow-hidden border-b">
<div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,hsl(var(--primary)/0.12),transparent_70%)] animate-pulse" />
<div className="container py-20 md:py-28">
<h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">{COPY.hero.title}</h1>
<p className="mt-4 max-w-2xl text-base md:text-lg text-muted-foreground">{COPY.hero.tagline}</p>
<p className="mt-3 max-w-3xl text-sm md:text-base text-muted-foreground">{COPY.hero.sub}</p>
<div className="mt-8 flex flex-wrap gap-3">
<Button size="lg">{COPY.hero.ctaPrimary}</Button>
<a href="/whitepaper" target="_blank" rel="noreferrer" className="inline-flex items-center rounded-xl border px-4 py-2 text-sm md:text-base">
{COPY.hero.ctaSecondary}
</a>
</div>
</div>
</section>
)
}
