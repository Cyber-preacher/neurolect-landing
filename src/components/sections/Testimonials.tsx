import { COPY } from "@/lib/copy"
import { SectionShell } from "@/components/SectionShell"


export function Testimonials() {
return (
<SectionShell id="recognition" title={COPY.testimonials.title} subtitle={COPY.testimonials.sub}>
<div className="grid gap-4 md:grid-cols-2">
<div className="rounded-2xl border p-6 text-muted-foreground">“Placeholder quote from partner.”</div>
<div className="rounded-2xl border p-6 text-muted-foreground">“Placeholder quote from researcher.”</div>
</div>
</SectionShell>
)
}
