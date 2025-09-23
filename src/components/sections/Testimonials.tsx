import { SectionShell } from "@/components/SectionShell";
import { COPY } from "@/lib/copy";

export function Testimonials() {
  return (
    <SectionShell
      id="recognition"
      title={COPY.testimonials.title}
      subtitle={COPY.testimonials.sub}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border p-6 text-muted-foreground">
          â€œPlaceholder quote from partner.â€
        </div>
        <div className="rounded-2xl border p-6 text-muted-foreground">
          â€œPlaceholder quote from researcher.â€
        </div>
      </div>
    </SectionShell>
  );
}

