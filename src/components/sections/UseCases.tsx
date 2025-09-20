import { SectionShell } from "@/components/SectionShell";
import { COPY } from "@/lib/copy";

export function UseCases() {
  return (
    <SectionShell id="use-cases" title={COPY.useCases.title}>
      <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {COPY.useCases.items.map((uc, i) => (
          <li key={i} className="rounded-2xl border p-6 text-muted-foreground">
            {uc}
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}
