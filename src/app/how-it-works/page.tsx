// src/app/how-it-works/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How it works — Neurolect",
  description:
    "End-to-end pipeline: Signals → Processing → Intent Models → Policy Runtime → SDKs. See how Neurolect turns neural activity into intuitive digital actions.",
};

function TocLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <a
        className="hover:underline underline-offset-4 text-sm"
        href={href}
      >
        {children}
      </a>
    </li>
  );
}

export default function HowItWorksPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <header className="max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-tight">
          How it works
        </h1>
        <p className="mt-4 text-muted-foreground">
          Neurolect is an operating system that turns neural activity into
          intuitive digital actions. The platform standardizes how signals are
          captured, processed, and translated into intent—so brain–computer
          interfaces feel instant and human.
        </p>
      </header>

      {/* Mini TOC */}
      <aside className="mt-8 rounded-2xl border p-4 bg-muted/30">
        <div className="text-sm font-medium">On this page</div>
        <ul className="mt-2 grid gap-x-6 gap-y-1 sm:grid-cols-2">
          <TocLink href="#signals">1) Signals</TocLink>
          <TocLink href="#processing">2) Processing</TocLink>
          <TocLink href="#intent-models">3) Intent Models</TocLink>
          <TocLink href="#policy-runtime">4) Policy Runtime</TocLink>
          <TocLink href="#sdks">5) SDKs</TocLink>
        </ul>
      </aside>

      <div className="mt-10 space-y-10">
        <section id="signals" aria-labelledby="signals-title">
          <h2 id="signals-title" className="text-xl font-semibold">
            1) Signals
          </h2>
          <p className="mt-2 text-muted-foreground">
            Acquisition drivers ingest neural data from EEG, implant streams,
            and future modalities. Drivers normalize formats, timestamps, and
            sampling rates to a common schema with predictable latency budgets.
          </p>
        </section>

        <section id="processing" aria-labelledby="processing-title">
          <h2 id="processing-title" className="text-xl font-semibold">
            2) Processing
          </h2>
          <p className="mt-2 text-muted-foreground">
            Denoising, alignment, and feature extraction transform raw signals
            into robust representations. This stage enforces throughput and
            latency SLAs, preparing clean features for real-time inference.
          </p>
        </section>

        <section id="intent-models" aria-labelledby="intent-models-title">
          <h2 id="intent-models-title" className="text-xl font-semibold">
            3) Intent Models
          </h2>
          <p className="mt-2 text-muted-foreground">
            Neurolinguistic and affect models map features to intents with
            confidence scores. Outputs support both discrete commands and
            continuous controls, with optional affect tags for richer context.
          </p>
        </section>

        <section id="policy-runtime" aria-labelledby="policy-runtime-title">
          <h2 id="policy-runtime-title" className="text-xl font-semibold">
            4) Policy Runtime
          </h2>
          <p className="mt-2 text-muted-foreground">
            Safety is enforced at runtime: consent and revocation, rate limits,
            stimulation guardrails, and red-team filters. Policies are explicit
            and revocable, making privacy and safety defaults—not add-ons.
          </p>
        </section>

        <section id="sdks" aria-labelledby="sdks-title">
          <h2 id="sdks-title" className="text-xl font-semibold">
            5) SDKs
          </h2>
          <p className="mt-2 text-muted-foreground">
            Client libraries and adapters make it easy to build “brain apps.”
            Developers integrate intents in minutes and can target desktop,
            mobile, games, and assistive tools with a consistent API.
          </p>
        </section>
      </div>

      <nav className="mt-10 flex flex-wrap gap-4">
        <Link href="/moat" className="underline underline-offset-4">
          See our Moat →
        </Link>
        <Link href="/safety" className="underline underline-offset-4">
          Safety &amp; Ethics →
        </Link>
        <Link href="/investors" className="underline underline-offset-4">
          For Investors →
        </Link>
      </nav>
    </main>
  );
}
