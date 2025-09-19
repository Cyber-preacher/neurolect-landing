import { COPY } from "@/lib/copy"
import { SectionShell } from "@/components/SectionShell"


export function CoreSolutions() {
return (
<SectionShell id="advantages" title={COPY.core.title}>
<ul className="grid gap-4 md:grid-cols-2">
{COPY.core.bullets.map((b, i) => (
<li key={i} className="rounded-2xl border p-6 text-muted-foreground">{b}</li>
))}
</ul>
</SectionShell>
)
}
