// src/components/sections/TechStack.tsx
"use client";

import * as React from "react";
import Section from "@/components/sections/Section";
import { COPY } from "@/lib/copy";

/**
 * Normalizes COPY.tech.layers so it can be either:
 * - string[] (layer names only)  → { name: string, desc: "" }
 * - { name: string, desc: string }[]
 * - or even legacy { title, description }[]
 */
type LayerObj = { name: string; desc: string };

function normalizeLayers(layers: unknown): LayerObj[] {
  if (!Array.isArray(layers)) return [];
  return layers.map((l): LayerObj => {
    if (typeof l === "string") {
      return { name: l, desc: "" };
    }
    if (l && typeof l === "object") {
      const maybe: Record<string, unknown> = l as Record<string, unknown>;
      const name =
        (typeof maybe.name === "string" && maybe.name) ||
        (typeof maybe.title === "string" && maybe.title) ||
        "";
      const desc =
        (typeof maybe.desc === "string" && maybe.desc) ||
        (typeof maybe.description === "string" && maybe.description) ||
        "";
      return { name, desc };
    }
    return { name: "", desc: "" };
  }).filter((x) => x.name.length > 0);
}

export default function TechStack() {
  const title = COPY?.tech?.title ?? "Tech stack";
  const rawLayers = COPY?.tech?.layers ?? [];
  const layers = normalizeLayers(rawLayers);

  // Fallback demo if copy is absent
  const finalLayers: LayerObj[] =
    layers.length > 0
      ? layers
      : [
        { name: "Next.js 15 + App Router", desc: "TypeScript, Webpack dev locally" },
        { name: "Tailwind (tokens)", desc: "OKLCH palette + dark mode via class" },
        { name: "Shadcn components", desc: "Accessible primitives with our theme" },
        { name: "Plausible", desc: "Cookie-less analytics and custom events" },
      ];

  return (
    <Section id="tech" title={title}>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {finalLayers.map((l, i) => (
          <li key={i} className="rounded-2xl border p-6">
            <div className="font-semibold">{l.name}</div>
            {l.desc && <div className="text-muted-foreground">{l.desc}</div>}
          </li>
        ))}
      </ul>
    </Section>
  );
}

// Optional named export if your page imports { TechStack }
export { TechStack };
