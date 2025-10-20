// src/components/sections/Traction.tsx
// Metrics/bullets only. No partners/logos/quotes. Type-safe (no `any`).

import { COPY } from "@/lib/copy";

type Stat = { label: string; value: string };
type Bullet = { title?: string; desc?: string } | string;

function asObject(v: unknown): Record<string, unknown> {
  return typeof v === "object" && v !== null ? (v as Record<string, unknown>) : {};
}

function getString(o: Record<string, unknown>, key: string): string | undefined {
  const v = o[key];
  return typeof v === "string" ? v : undefined;
}

function getArray<T = unknown>(o: Record<string, unknown>, key: string): T[] {
  const v = o[key];
  return Array.isArray(v) ? (v as T[]) : [];
}

export default function Traction() {
  // Read COPY.traction as unknown, then narrow at runtime.
  const trRaw = (COPY as unknown as { traction?: unknown })?.traction;
  const tr = asObject(trRaw);

  const title = getString(tr, "title") ?? "Traction";
  const intro =
    getString(tr, "body") ??
    getString(tr, "desc") ??
    getString(tr, "text") ??
    "";

  const stats =
    (getArray<Stat>(tr, "stats").length > 0
      ? getArray<Stat>(tr, "stats")
      : getArray<Stat>(tr, "metrics")) ?? [];

  const bullets =
    (getArray<Bullet>(tr, "bullets").length > 0
      ? getArray<Bullet>(tr, "bullets")
      : getArray<Bullet>(tr, "items")) ?? [];

  // If nothing to show, render nothing (keeps Home clean).
  const nothingToShow =
    !intro && (!stats || stats.length === 0) && (!bullets || bullets.length === 0);
  if (nothingToShow) return null;

  return (
    <section id="traction" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{title}</h2>

        {intro ? <p className="mt-4 text-muted-foreground max-w-3xl">{intro}</p> : null}

        {Array.isArray(stats) && stats.length > 0 && (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <div key={i} className="rounded-2xl border p-6 bg-background/60 backdrop-blur-sm text-center">
                <div className="text-3xl font-semibold tracking-tight">{s?.value ?? "-"}</div>
                <div className="mt-2 text-sm text-muted-foreground">{s?.label ?? ""}</div>
              </div>
            ))}
          </div>
        )}

        {Array.isArray(bullets) && bullets.length > 0 && (
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {bullets.map((b, i) => {
              const t = typeof b === "string" ? b : b?.title ?? "";
              const d = typeof b === "string" ? "" : b?.desc ?? "";
              return (
                <li key={i} className="rounded-2xl border p-6 bg-background/60 backdrop-blur-sm hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-medium leading-tight">{t}</h3>
                  {d ? <p className="mt-2 text-sm text-muted-foreground">{d}</p> : null}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </section>
  );
}
