"use client";

import SectionShell from "@/components/SectionShell";
import { COPY } from "@/lib/copy";

export default function Safety() {
  const items = COPY.safety.items;
  return (
    <SectionShell id="safety" title={COPY.safety.title} subtitle={COPY.safety.sub}>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4">
          {items.map((it, i) => (
            <div key={i} className="rounded-2xl border p-4">
              <h3 className="text-sm font-semibold">{it.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{it.body}</p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border p-4">
          <PolicyCard />
          {COPY.safety.link?.href && (
            <p className="mt-3 text-xs text-muted-foreground">
              Read more:{" "}
              <a
                className="underline underline-offset-4"
                href={COPY.safety.link.href}
                target="_blank"
                rel="noreferrer"
              >
                {COPY.safety.link.label}
              </a>
            </p>
          )}
        </div>
      </div>
    </SectionShell>
  );
}

function PolicyCard() {
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-semibold">Runtime guardrails</h3>
      <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
        <li>Consent-scoped capabilities (least privilege)</li>
        <li>Revocation &amp; expiry (time-boxed grants)</li>
        <li>Rate limits per capability &amp; per app</li>
        <li>Audit log with provenance</li>
        <li>Stimulation safeguards &amp; human-in-the-loop overrides</li>
      </ul>
    </div>
  );
}
