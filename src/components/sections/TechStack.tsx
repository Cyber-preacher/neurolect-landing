import { COPY } from "@/lib/copy"
import { SectionShell } from "@/components/SectionShell"


export function TechStack() {
return (
<SectionShell id="technology" title={COPY.tech.title}>
<ol className="grid gap-4 md:grid-cols-2">
{COPY.tech.layers.map((l, i) => (
<li key={i} className="rounded-2xl border p-6">
<div className="font-semibold">{l.name}</div>
<div className="text-muted-foreground">{l.desc}</div>
</li>
))}
</ol>
</SectionShell>
)
}
