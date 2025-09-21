"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BRAND } from "@/lib/brand";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container py-20 md:py-28">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight"
        >
          {BRAND.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-4 max-w-2xl text-base md:text-lg text-muted-foreground"
        >
          {BRAND.tagline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-3 max-w-3xl text-sm md:text-base text-muted-foreground"
        >
          {BRAND.description}
        </motion.p>

        <div className="mt-8 flex flex-wrap gap-3">
          {/* Primary → Investors funnel */}
          <Button
            size="lg"
            asChild
            aria-label="Request an investor call"
            data-analytics="cta-investors"
          >
            <Link href="/investors">{BRAND.ctaPrimary ?? "Request investor call"}</Link>
          </Button>

          {/* Secondary → keep whitepaper for now (switch to teaser pack later) */}
          <Button
            size="lg"
            variant="secondary"
            asChild
            aria-label="Open the whitepaper"
            data-analytics="cta-whitepaper"
          >
            <a href="/whitepaper" target="_blank" rel="noreferrer">
              {BRAND.ctaSecondary ?? "Whitepaper"}
            </a>
          </Button>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
    </section>
  );
}
