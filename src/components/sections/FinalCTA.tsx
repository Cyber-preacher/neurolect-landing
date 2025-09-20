import { SectionShell } from "@/components/SectionShell";
import { COPY } from "@/lib/copy";

function LeadFormStub() {
  return (
    <form className="rounded-2xl border p-6 space-y-3">
      <input className="w-full border rounded-lg p-2" placeholder="Email" />
      <textarea className="w-full border rounded-lg p-2" placeholder="Message" />
      <button className="px-4 py-2 rounded-lg border">Send</button>
    </form>
  );
}

export function FinalCTA() {
  return (
    <SectionShell
      id="contact"
      title={COPY.finalCta.title}
      subtitle={COPY.finalCta.sub}
    >
      <div className="grid gap-6 md:grid-cols-2">
        <LeadFormStub />
        <div className="rounded-2xl border p-6">
          <div className="font-medium mb-2">Developers</div>
          <p className="text-muted-foreground">
            Get in touch to collaborate on integrations and research.
          </p>
        </div>
      </div>
    </SectionShell>
  );
}
