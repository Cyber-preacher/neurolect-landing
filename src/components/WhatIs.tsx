import { COPY } from "@/lib/copy"
import { SectionShell } from "@/components/SectionShell"


export function WhatIs() {
return (
<SectionShell id="about" title={COPY.whatIs.title}>
<p className="text-muted-foreground max-w-3xl">{COPY.whatIs.body}</p>
</SectionShell>
)
}




