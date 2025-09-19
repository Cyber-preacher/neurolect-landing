import { COPY } from "@/lib/copy"
import { SectionShell } from "@/components/SectionShell"


export function ChallengesSolutions() {
return (
<SectionShell id="solutions" title={COPY.challenges.title}>
<div className="grid gap-4 md:grid-cols-2">
{COPY.challenges.items.map((item, i) => (
<div key={i} className="rounded-2xl border p-6">
<h3 className="font-semibold">Challenge</h3>
<p className="text-muted-foreground">{item.challenge}</p>
<div className="my-3 h-px bg-border" />
<h3 className="font-semibold">Solution</h3>
<p className="text-muted-foreground">{item.solution}</p>
</div>
))}
</div>
</SectionShell>
)
}
