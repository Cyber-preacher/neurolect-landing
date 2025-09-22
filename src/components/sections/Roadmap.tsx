// src/components/sections/Roadmap.tsx
"use client";

import * as React from "react";
import Section from "@/components/sections/Section";
import { COPY } from "@/lib/copy";

/**
 * Accepts dates in multiple formats and converts them to ISO for <time dateTime>.
 * Supported:
 *  - "YYYY-MM-DD"
 *  - "YYYY-MM"
 *  - "YYYY"
 *  - "Q1 YYYY" | "Q2 YYYY" | "Q3 YYYY" | "Q4 YYYY"
 */
function toIsoDate(when: string): string | undefined {
  const s = when.trim();

  // YYYY-MM-DD
  const ymd = /^(\d{4})-(\d{2})-(\d{2})$/.exec(s);
  if (ymd) {
    const [, y, m, d] = ymd;
    const date = new Date(Date.UTC(Number(y), Number(m) - 1, Number(d)));
    return isNaN(date.getTime()) ? undefined : date.toISOString();
  }

  // YYYY-MM
  const ym = /^(\d{4})-(\d{2})$/.exec(s);
  if (ym) {
    const [, y, m] = ym;
    const date = new Date(Date.UTC(Number(y), Number(m) - 1, 1));
    return isNaN(date.getTime()) ? undefined : date.toISOString();
  }

  // YYYY
  const yOnly = /^(\d{4})$/.exec(s);
  if (yOnly) {
    const [, y] = yOnly;
    const date = new Date(Date.UTC(Number(y), 0, 1));
    return isNaN(date.getTime()) ? undefined : date.toISOString();
  }

  // Qx YYYY
  const qy = /^Q([1-4])\s+(\d{4})$/.exec(s);
  if (qy) {
    const quarter = Number(qy[1]) as 1 | 2 | 3 | 4;
    const year = Number(qy[2]);
    const quarterStartMonthMap: Record<1 | 2 | 3 | 4, number> = {
      1: 1,  // Jan
      2: 4,  // Apr
      3: 7,  // Jul
      4: 10, // Oct
    };
    const month = quarterStartMonthMap[quarter];
    const date = new Date(Date.UTC(year, month - 1, 1));
    return isNaN(date.getTime()) ? undefined : date.toISOString();
  }

  return undefined;
}

type Phase = {
  id: string;
  phase: string;   // short title
  detail: string;  // description
  status: "done" | "planned" | string;
  date: string;    // accepts formats parsed by toIsoDate
};

// Named function so we can export both default and named
function Roadmap() {
  const c = COPY.roadmap as
    | { title: string; phases: Phase[] }
    | undefined;

  // Prefer COPY.roadmap.phases; fall back to demo phases
  const phases: Phase[] =
    c?.phases ?? [
      { id: "proto", phase: "Prototype v1", detail: "End-to-end demo", status: "planned", date: "Q4 2025" },
      { id: "sdk", phase: "SDK Alpha", detail: "Bindings + docs", status: "planned", date: "2026-03" },
      { id: "drivers", phase: "Driver Pack", detail: "Vendors A/B", status: "planned", date: "2026" },
    ];

  return (
    <Section id="roadmap" title={c?.title ?? "Roadmap"}>
      <ol className="relative border-s pl-6 space-y-6">
        {phases.map((it) => {
          const iso = toIsoDate(it.date);
          const status = it.status === "done" ? "done" : "planned";
          return (
            <li key={it.id} className="ms-4">
              <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border bg-background" />
              <div className="flex items-center gap-2">
                <h3 className="font-medium">{it.phase}</h3>
                {status === "done" ? (
                  <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs text-green-700">
                    achieved
                  </span>
                ) : (
                  <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs text-amber-700">
                    planned
                  </span>
                )}
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{it.detail}</p>
              <p className="mt-1 text-sm text-muted-foreground">
                <time dateTime={iso ?? ""}>{it.date}</time>
              </p>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}

export default Roadmap;
export { Roadmap };
