// src/components/sections/WhyNow.tsx
// Content-only “Why Now”; no partners/logos; type-safe without `any`.

import { COPY } from "@/lib/copy";

type Point = { title?: string; desc?: string } | string;

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

export default function WhyNow() {
  const wn = asObject((COPY as unknown as { whyNow?: unknown })?.whyNow);

  const title = getString(wn, "title") ?? "Why now";

  // Prefer keys that may exist; otherwise fall back to empty.
  // (We don't assume `body`/`desc` exist on the COPY type.)
  const body =
    getString(wn, "body") ??
    getString(wn, "desc") ??
    getString(wn, "text") ??
    "";

  const pointsRaw =
    getArray<Point>(wn, "points").length > 0
      ? getArray<Point>(wn, "points")
      : getArray<Point>(wn, "items");

  const points: Point[] = pointsRaw ?? [];

  // If nothing meaningful, render nothing.
  const nothingToShow = !body && points.length === 0;
  if (nothingToShow) return null;

  return (
    <section id="why-now" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{title}</h2>
        {body ? <p className="mt-4 text-muted-foreground max-w-3xl">{body}</p> : null}

        {points.length > 0 && (
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
      </div>
    </section>
  );
}
