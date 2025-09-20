import { SectionShell } from "@/components/SectionShell";
import { COPY } from "@/lib/copy";
import { Timeline } from "@/components/Timeline";

export function Roadmap() {
  const items = COPY.roadmap.phases.map((p) => ({
    title: p.phase,
    body: p.detail
  }));
  return (
    <SectionShell id="roadmap" title={COPY.roadmap.title}>
      <Timeline items={items} />
    </SectionShell>
  );
}
