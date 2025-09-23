"use client";

import SectionShell from "@/components/SectionShell";
import { COPY } from "@/lib/copy";

export default function WhyNow() {
  return (
    <SectionShell id="why-now" title={COPY.whyNow.title} subtitle={COPY.whyNow.sub}>
      <div className="grid gap-4 md:grid-cols-2">
        {COPY.whyNow.bullets.map((b, i) => (
          <div key={i} className="rounded-2xl border p-5">
            <h3 className="text-sm font-semibold">{b.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{b.body}</p>
          </div>
        ))}
      </div>

      {COPY.whyNow.note && (
        <p className="mt-6 text-xs text-muted-foreground">{COPY.whyNow.note}</p>
      )}
    </SectionShell>
  );
}

