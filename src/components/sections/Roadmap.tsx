// src/components/sections/Roadmap.tsx
import React from "react";
import { COPY } from "@/lib/copy";

// Old shape (some earlier components used this)
type PhaseOld = {
  phase: string;
  detail: string;
  status: string; // "achieved" | "planned" | "in-progress"
  date: string;
};

// New shape (in current copy.ts)
type PhaseNew = {
  id: string;
  when: string;
  title: string;
  achieved: boolean;
  items: { label: string; status: string }[]; // "done" | "planned" | "in-progress"
};

// Unified UI model used for rendering
type PhaseUI = {
  id: string;
  when: string;
  title: string;
  achieved: boolean;
  items: { label: string; status: "done" | "planned" | "in-progress" }[];
};

// Type guards without using `any`
function isRecord(v: unknown): v is Record<string, unknown> {
  return typeof v === "object" && v !== null;
}
function isPhaseOld(v: unknown): v is PhaseOld {
  return (
    isRecord(v) &&
    typeof v.phase === "string" &&
    typeof v.detail === "string" &&
    typeof v.status === "string" &&
    typeof v.date === "string"
  );
}
function isPhaseNew(v: unknown): v is PhaseNew {
  return (
    isRecord(v) &&
    typeof v.title === "string" &&
    typeof v.when === "string" &&
    typeof v.achieved === "boolean" &&
    Array.isArray(v.items)
  );
}

function toUI(val: unknown, index: number): PhaseUI {
  if (isPhaseNew(val)) {
    return {
      id: typeof val.id === "string" && val.id.length > 0 ? val.id : `phase-${index + 1}`,
      when: val.when,
      title: val.title,
      achieved: val.achieved,
      items: val.items.map((it, j) => ({
        label: typeof it.label === "string" ? it.label : `Item ${j + 1}`,
        status:
          it.status === "done" || it.status === "planned" || it.status === "in-progress"
            ? it.status
            : ("planned" as const),
      })),
    };
  }
  if (isPhaseOld(val)) {
    // Map the old flat shape to the new UI model
    const status =
      val.status === "done" || val.status === "planned" || val.status === "in-progress"
        ? val.status
        : ("planned" as const);
    return {
      id: `phase-${index + 1}`,
      when: val.date,
      title: val.phase,
      achieved: status === "done" || val.status === "achieved",
      items: [{ label: val.detail, status }],
    };
  }
  // Fallback — should not happen if copy is well-formed
  return {
    id: `phase-${index + 1}`,
    when: "TBD",
    title: "Milestone",
    achieved: false,
    items: [{ label: "Details forthcoming", status: "planned" }],
  };
}

function badgeClass(achieved: boolean): string {
  return achieved
    ? "bg-emerald-600/80 text-white"
    : "bg-slate-600/70 text-white";
}

export default function Roadmap() {
  const rd = (COPY as unknown as { roadmap?: unknown }).roadmap as
    | { title?: string; phases?: unknown[]; footnote?: string }
    | undefined;

  const title = typeof rd?.title === "string" ? rd.title : "Roadmap";
  const phasesRaw = Array.isArray(rd?.phases) ? rd!.phases : [];
  const phases: PhaseUI[] = phasesRaw.map(toUI);
  const footnote = typeof rd?.footnote === "string" ? rd.footnote : undefined;

  return (
    <section id="roadmap" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <header className="mb-6">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">{title}</h2>
      </header>

      <ol className="grid gap-4 md:grid-cols-3">
        {phases.map((p) => (
          <li key={p.id} className="rounded-2xl border bg-background/60 backdrop-blur-xl p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-lg font-medium">{p.title}</h3>
                <div className="text-xs text-muted-foreground mt-0.5">{p.when}</div>
              </div>
              <span className={`px-2 py-1 text-[11px] rounded-full ${badgeClass(p.achieved)}`}>
                {p.achieved ? "Achieved" : "Planned"}
              </span>
            </div>

            <ul className="mt-4 space-y-2">
              {p.items.map((it, i) => (
                <li key={`${p.id}-${i}`} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-current opacity-60" />
                  <span className="text-sm text-muted-foreground">{it.label}</span>
                  <span className="ml-auto text-[11px] uppercase tracking-wide text-foreground/60">
                    {it.status}
                  </span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      {footnote && <p className="mt-4 text-xs text-muted-foreground">{footnote}</p>}
    </section>
  );
}

// Named export if other files import { Roadmap }
export { Roadmap };
