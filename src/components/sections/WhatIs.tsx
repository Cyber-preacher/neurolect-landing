import { SectionShell } from "@/components/SectionShell";
import { COPY } from "@/lib/copy";

export function WhatIs() {
  return (
    <SectionShell id="about" title={COPY.whatIs.title}>
      <p className="text-muted-foreground max-w-3xl">{COPY.whatIs.body}</p>
    </SectionShell>
  );
}

