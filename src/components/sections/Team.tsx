import { SectionShell } from "@/components/SectionShell";
import { COPY } from "@/lib/copy";

export function Team() {
  return (
    <SectionShell id="team" title={COPY.team.title} subtitle={COPY.team.sub}>
      <div className="grid gap-4 md:grid-cols-3">
        {["Research", "Product", "Advisors"].map((slot) => (
          <div key={slot} className="rounded-2xl border p-6">
            <div className="font-medium">{slot}</div>
            <p className="text-muted-foreground">TBD</p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

