"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BRAND } from "@/lib/brand";
import { track } from "@/lib/analytics";

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
        <div className="mt-8 flex gap-3">
          <Button size="lg" onClick={() => track("hero_primary_cta_click")}>
            {BRAND.ctaPrimary}
          </Button>
          <Button size="lg" variant="secondary" asChild>
            <a href="/whitepaper" target="_blank" rel="noreferrer" onClick={() => track("hero_secondary_cta_click")}>
              {BRAND.ctaSecondary}
            </a>
          </Button>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
    </section>
  );
}
