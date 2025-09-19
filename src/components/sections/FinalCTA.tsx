import { COPY } from "@/lib/copy"
import { SectionShell } from "@/components/SectionShell"
import LeadForm from "@/components/LeadForm"


export function FinalCTA() {
return (
<SectionShell id="contact" title={COPY.finalCta.title} subtitle={COPY.finalCta.sub}>
<div className="grid gap-6 md:grid-cols-2">
<LeadForm />
<div className="rounded-2xl border p-6">
<div className="font-semibold mb-2">Why join now?</div>
<ul className="list-disc pl-5 text-muted-foreground space-y-1">
<li>Shape the standard for neurosignature tooling.</li>
<li>Early integrations and partner support.</li>
<li>Access private pilots and SDK updates.</li>
</ul>
</div>
</div>
</SectionShell>
)
}
