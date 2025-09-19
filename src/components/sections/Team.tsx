import { COPY } from "@/lib/copy"
import { SectionShell } from "@/components/SectionShell"


export function Team() {
return (
<SectionShell id="team" title={COPY.team.title} subtitle={COPY.team.sub}>
<div className="grid gap-4 md:grid-cols-3">
{/* Replace with real people/cards/logos later */}
{["Research", "Product", "Advisors"].map((slot) => (
<div key={slot} className="rounded-2xl border p-6">
<div className="font-semibold">{slot}</div>
<div className="text-muted-foreground">Coming soon — bios & logos.</div>
</div>
))}
</div>
</SectionShell>
)
}
