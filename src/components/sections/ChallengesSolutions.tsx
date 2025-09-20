import { SectionShell } from "@/components/SectionShell";
import { COPY } from "@/lib/copy";

export function ChallengesSolutions() {
  return (
    <SectionShell id="solutions" title={COPY.challenges.title}>
      <div className="grid gap-4 md:grid-cols-2">
        {COPY.challenges.items.map((item, i) => (
          <div key={i} className="rounded-2xl border p-6">
            <h3 className="font-medium">{item.title}</h3>
            <p className="text-muted-foreground">{item.body}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
