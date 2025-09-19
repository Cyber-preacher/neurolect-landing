import { COPY } from "@/lib/copy"
import { SectionShell } from "@/components/SectionShell"


export function Roadmap() {
return (
<SectionShell id="roadmap" title={COPY.roadmap.title}>
<div className="grid gap-4 md:grid-cols-3">
{COPY.roadmap.phases.map((p, i) => (
<div key={i} className="rounded-2xl border p-6">
<div className="font-semibold">{p.phase}</div>
<div className="text-muted-foreground">{p.detail}</div>
</div>
))}
</div>
</SectionShell>
)
}
