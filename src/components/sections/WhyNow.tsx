// src/components/sections/WhyNow.tsx
// "Why Now" section without any partners/logos.

import React from "react";
import { COPY } from "@/lib/copy";

type Point = { title?: string; desc?: string } | string;

export default function WhyNow() {
  const title = COPY?.whyNow?.title ?? "Why now";
  const body = COPY?.whyNow?.body ?? COPY?.whyNow?.desc ?? "";
  const points: Point[] = COPY?.whyNow?.points ?? COPY?.whyNow?.items ?? [];

  return (
    <section id="why-now" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{title}</h2>
        {body ? <p className="mt-4 text-muted-foreground max-w-3xl">{body}</p> : null}

        {Array.isArray(points) && points.length > 0 && (
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {points.map((p, i) => {
              const t = typeof p === "string" ? p : p?.title ?? "";
              const d = typeof p === "string" ? "" : p?.desc ?? "";
              return (
                <li
                  key={i}
                  className="rounded-2xl border p-6 bg-background/60 backdrop-blur-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="text-lg font-medium leading-tight">{t}</h3>
                  {d ? <p className="mt-2 text-sm text-muted-foreground">{d}</p> : null}
                </li>
              );
            })}
          </ul>
        )}

        {/* No logo/partner/testimonial strips. */}
      </div>
    </section>
  );
}
