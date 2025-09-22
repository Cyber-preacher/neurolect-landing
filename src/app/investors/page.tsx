// src/app/investors/page.tsx
import * as React from "react";
import Link from "next/link";
import { SITE, absoluteUrl } from "@/lib/site";
import InvestorForm from "@/components/InvestorForm";

/**
 * Investors page with Calendly + teaser pack + request form.
 */
export default function InvestorsPage() {
  const teaserHref = absoluteUrl("/pack/neurolect-investor-pack.pdf");

  const onError = (err: unknown) => {
    // Use the value so eslint doesn’t warn; no disable directives needed
    if (process.env.NODE_ENV !== "production") {
      // eslint-disable-next-line no-console
      console.error("[Calendly iframe] load error:", err);
    }
  };

  const calendlySrc =
    SITE.calendly && SITE.calendly.length > 0 ? SITE.calendly : "about:blank";

  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-4xl font-semibold tracking-tight">Invest in {SITE.name}</h1>
      <p className="mt-3 text-muted-foreground">
        Book a call, skim the teaser, and request access to the data room.
      </p>

      <section className="mt-8 grid gap-8 md:grid-cols-2">
        <div className="rounded-xl border p-4">
          <h2 className="text-xl font-medium">Book a call</h2>
          <div className="mt-3 aspect-video rounded-lg border">
            <iframe
              title="Calendly"
              src={calendlySrc}
              className="h-full w-full rounded-lg"
              onError={(e) => onError((e as unknown) ?? new Error("Calendly failed to load"))}
            />
          </div>
          {calendlySrc === "about:blank" && (
            <p className="mt-2 text-xs text-muted-foreground">
              Set <code>SITE.calendly</code> in <code>src/lib/site.ts</code> to enable booking.
            </p>
          )}
        </div>

        <div className="rounded-xl border p-4">
          <h2 className="text-xl font-medium">Teaser pack</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Short overview PDF for quick diligence.
          </p>
          <div className="mt-4">
            <Link
              href={teaserHref}
              className="inline-flex items-center rounded-2xl border px-4 py-2 font-medium hover:opacity-90"
            >
              Download PDF
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-8 rounded-xl border p-4">
        <h2 className="text-xl font-medium">Request Data Room</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Submit your details and we’ll follow up with access.
        </p>
        <div className="mt-4">
          <InvestorForm />
        </div>
      </section>
    </main>
  );
}
