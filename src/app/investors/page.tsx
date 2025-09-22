// src/app/investors/page.tsx
import * as React from "react";
import { SITE } from "@/lib/site";
import { absoluteUrl } from "@/lib/site";
import Link from "next/link";

/**
 * Minimal investors page scaffold.
 * Assumes you already wired Calendly + teaser pack elsewhere;
 * iframes/Forms can be dropped into the placeholders below.
 */
export default function InvestorsPage() {
  const teaserHref = absoluteUrl("/pack/neurolect-investor-pack.pdf");

  // Example handler with safe unused var (prefix with underscore)
  const onError = (_err: unknown) => {
    // you can route this to Sentry or console in non-prod
  };

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
            {/* Calendly iframe placeholder */}
            <iframe
              title="Calendly"
              src={SITE.calendly ?? "about:blank"}
              className="h-full w-full rounded-lg"
              onError={() => onError(new Error("Calendly failed to load"))}
            />
          </div>
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

      {/* Optional: Request Data Room form mounts here */}
      <section className="mt-8 rounded-xl border p-4">
        <h2 className="text-xl font-medium">Request Data Room</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Submit your details and we’ll follow up with access.
        </p>
        {/* Your <InvestorForm /> component can be rendered here */}
      </section>
    </main>
  );
}
