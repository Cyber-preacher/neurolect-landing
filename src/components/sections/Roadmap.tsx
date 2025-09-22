"use client";

import SectionShell from "@/components/SectionShell";
import { COPY } from "@/lib/copy";
import clsx from "clsx";

type Phase = {
  id: string;
  phase: string;
  detail: string;
  status: "achieved" | "planned";
  date?: string; // accepts "2025-09", "2025", "2025-Q4", etc.
};

function toIsoOrUndefined(raw?: string): string | undefined {
  if (!raw) return undefined;

  // Trim and normalize
  const s = String(raw).trim();

  // Patterns we handle:
  // 1) YYYY-QN  -> map to first month of the quarter
  const q = s.match(/^(\d{4})-Q([1-4])$/i);
  if (q) {
    const year = Number(q[1]);
    const quarter = Number(q[2]);
    const month = { 1: 1, 2: 4, 3: 7, 4: 10 }[quarter]; // Jan/Apr/Jul/Oct
    const d = new Date(Date.UTC(year, month - 1, 1));
    return isNaN(d.getTime()) ? undefined : d.toISOString();
  }

  // 2) YYYY-MM  -> assume day 1
  const ym = s.match(/^(\d{4})-(\d{2})$/);
  if (ym) {
    const year = Number(ym[1]);
    const month = Number(ym[2]);
    const d = new Date(Date.UTC(year, month - 1, 1));
    return isNaN(d.getTime()) ? undefined : d.toISOString();
  }

  // 3) YYYY -> assume Jan 1
  const y = s.match(/^(\d{4})$/);
  if (y) {
    const year = Number(y[1]);
    const d = new Date(Date.UTC(year, 0, 1));
    return isNaN(d.getTime()) ? undefined : d.toISOString();
  }

  // 4) Try native parse for full ISO dates if provided
  const d = new Date(s);
  if (!isNaN(d.getTime())) return d.toISOString();

  return undefined;
}

export function Roadmap() {
  const phases: Phase[] = COPY.roadmap.phases;

  return (
    <SectionShell id="roadmap" title={COPY.roadmap.title}>
      <ol className="relative border-s pl-6">
        {phases.map((p) => {
          const iso = toIsoOrUndefined(p.date);
          return (
            <li key={p.id} id={p.id} className="mb-10 ms-4 scroll-mt-24">
              {/* node */}
              <span
                className={clsx(
                  "absolute -start-2.5 flex h-5 w-5 items-center justify-center rounded-full border bg-background",
                  p.status === "achieved" ? "text-green-600 border-green-600" : "text-amber-600 border-amber-600"
                )}
                aria-hidden
              >
                <span
                  className={clsx(
                    "block h-2.5 w-2.5 rounded-full",
                    p.status === "achieved" ? "bg-green-600" : "bg-amber-600"
                  )}
                />
              </span>

              <div className="rounded-2xl border p-4">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-sm font-semibold">{p.phase}</h3>
                  <StatusBadge status={p.status} />
                  {p.date && (
                    <time
                      className="text-xs text-muted-foreground"
                      {...(iso ? { dateTime: iso } : {})}
                      aria-label={`Target date ${p.date}`}
                    >
                      {p.date}
                    </time>
                  )}
                  <a
                    href={`#${p.id}`}
                    className="ml-auto text-xs text-muted-foreground hover:underline"
                    aria-label={`Link to ${p.phase}`}
                  >
                    #{p.id}
                  </a>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{p.detail}</p>
              </div>
            </li>
          );
        })}
      </ol>

      {/* Legend */}
      <div className="mt-4 flex items-center gap-3 text-xs text-muted-foreground">
        <StatusBadge status="achieved" /> Achieved
        <StatusBadge status="planned" /> Planned
      </div>
    </SectionShell>
  );
}

function StatusBadge({ status }: { status: "achieved" | "planned" }) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-medium",
        status === "achieved"
          ? "border-green-600 text-green-700 bg-green-600/10"
          : "border-amber-600 text-amber-700 bg-amber-600/10"
      )}
      aria-label={status === "achieved" ? "Achieved" : "Planned"}
    >
      {status === "achieved" ? "Achieved" : "Planned"}
    </span>
  );
}
