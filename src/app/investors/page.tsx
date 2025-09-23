// src/app/investors/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import InvestorsForm from "@/components/investors/InvestorsForm";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Investors — Neurolect",
  description:
    "Book a call, grab the teaser, and request access to the data room. Neurolect is building the universal OS for brain–computer interfaces.",
};

export default function InvestorsPage() {
  const calendlyUrl =
    SITE?.calendly && SITE.calendly.length > 0
      ? SITE.calendly
      : "https://calendly.com/your-calendly-slot/intro";

  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
      <header className="max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-tight">For Investors</h1>
        <p className="mt-4 text-muted-foreground">
          Neurolect is an operating system that turns neural activity into intuitive digital actions.
          We’re building the universal OS for brain–computer interfaces—with privacy, consent, and
          safety enforced at runtime.
        </p>
      </header>

      {/* Quick actions */}
      <section className="mt-8 grid gap-6 lg:grid-cols-3">
        {/* Teaser card */}
        <article className="rounded-2xl border p-5">
          <h2 className="text-lg font-semibold">Teaser pack</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            A short overview of product, moat, timing, and roadmap.
          </p>
          <div className="mt-4">
            <Link
              href="/pack/neurolect-investor-pack.pdf"
              className="inline-flex rounded-2xl px-3.5 py-2 text-sm font-semibold border hover:bg-accent hover:text-accent-foreground"
            >
              Download teaser
            </Link>
          </div>
        </article>

        {/* Calendly card */}
        <article className="rounded-2xl border p-5 lg:col-span-2">
          <h2 className="text-lg font-semibold">Book a call</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Grab time directly on our calendar. We’ll tailor the session to your focus areas.
          </p>
          <div className="mt-4 overflow-hidden rounded-xl border">
            <iframe
              title="Calendly scheduling"
              src={calendlyUrl}
              className="h-[660px] w-full"
              loading="lazy"
            />
          </div>
        </article>
      </section>

      {/* Request Data Room */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold">Request Data Room access</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Send us a short note. We’ll follow up with the data room and materials relevant to your thesis.
        </p>

        <div className="mt-6">
          <InvestorsForm />
        </div>
      </section>

      {/* Safety reassurance */}
      <section className="mt-12 rounded-2xl border p-5 bg-muted/30">
        <p className="text-sm text-muted-foreground">
          We respect your inbox and privacy. Submissions are validated and rate-limited; we never share your contact info.
        </p>
      </section>
    </main>
  );
}
