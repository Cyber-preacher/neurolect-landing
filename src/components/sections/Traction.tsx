// src/components/sections/Traction.tsx
// Traction without any partner/logo/endorsement content.

import React from "react";
import { COPY } from "@/lib/copy";

type Stat = { label: string; value: string };
type Bullet = { title?: string; desc?: string } | string;

export default function Traction() {
  const title = COPY?.traction?.title ?? "Traction";
  const intro = COPY?.traction?.body ?? COPY?.traction?.desc ?? "";
  const stats: Stat[] =
    COPY?.traction?.stats ??
    COPY?.traction?.metrics ??
    [];

  const bullets: Bullet[] =
    COPY?.traction?.bullets ??
    COPY?.traction?.items ??
    [];

  return (
    <section id="traction" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{title}</h2>

        {intro ? (
          <p className="mt-4 text-muted-foreground max-w-3xl">{intro}</p>
        ) : null}

        {Array.isArray(stats) && stats.length > 0 && (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={i}
                className="rounded-2xl border p-6 bg-background/60 backdrop-blur-sm text-center"
              >
                <div className="text-3xl font-semibold tracking-tight">{s?.value ?? "-"}</div>
                <div className="mt-2 text-sm text-muted-foreground">{s?.label ?? ""}</div>
              </div>
            ))}
          </div>
        )}

        {Array.isArray(bullets) && bullets.length > 0 && (
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {bullets.map((b, i) => {
              const title = typeof b === "string" ? b : b?.title ?? "";
              const desc = typeof b === "string" ? "" : b?.desc ?? "";
              return (
                <li
                  key={i}
                  className="rounded-2xl border p-6 bg-background/60 backdrop-blur-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="text-lg font-medium leading-tight">{title}</h3>
                  {desc ? (
                    <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
                  ) : null}
                </li>
              );
            })}
          </ul>
        )}

        {/* IMPORTANT: No partner/logo/press/testimonial rows here. */}
      </div>
    </section>
  );
}
