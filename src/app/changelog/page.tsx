// src/app/changelog/page.tsx
import * as React from "react";
import { COPY } from "@/lib/copy";

type Entry = {
  id: string;          // used for #anchors
  date: string;        // YYYY-MM-DD
  title: string;
  items: string[];     // bullet points
};

function byDateDesc(a: Entry, b: Entry) {
  return new Date(b.date).getTime() - new Date(a.date).getTime();
}

export const metadata = {
  title: "Changelog",
  description:
    "Release notes and project milestones for Neurolect. First 3 entries with linkable anchors.",
};

export default function ChangelogPage() {
  // If COPY.changelog exists, prefer it; else use defaults
  const copyTitle = COPY?.changelog?.title ?? "Changelog";
  const entries: Entry[] =
    (Array.isArray(COPY?.changelog?.entries) ? COPY!.changelog!.entries : undefined) ??
    [
      {
        id: "2025-09-23-feat16-anti-spam",
        date: "2025-09-23",
        title: "Anti-spam shipped for forms (FEAT-16)",
        items: [
          "HMAC token + honeypot + per-IP rate limiting for /api/investor and /api/lead",
          "Optional Supabase persistence remains lazily initialized (builds without secrets)",
          "No client cookies; privacy-friendly by default",
        ],
      },
      {
        id: "2025-09-22-feat15-errors",
        date: "2025-09-22",
        title: "404 & 500 pages (FEAT-15) + Perf/A11y pass",
        items: [
          "Styled not-found and global error pages with reset action",
          "Skip-link, focus rings, and contrast polish in globals",
          "Roadmap & TechStack hardening for copy shape differences",
        ],
      },
      {
        id: "2025-09-21-feat13-seo",
        date: "2025-09-21",
        title: "SEO essentials (FEAT-13)",
        items: [
          "robots.ts, sitemap.ts, dynamic Open Graph image",
          "metadataBase + social cards wired in layout",
          "Plausible preconnect; wrapper for custom events",
        ],
      },
    ];

  const sorted = [...entries].sort(byDateDesc);

  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">{copyTitle}</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        The latest changes to the Neurolect landing and APIs.
      </p>

      {/* Mini TOC */}
      <nav className="mt-6 rounded-xl border p-4">
        <div className="text-sm font-medium">Entries</div>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
          {sorted.map((e) => (
            <li key={e.id}>
              <a className="hover:underline" href={`#${e.id}`}>
                <time dateTime={e.date} className="text-muted-foreground">
                  {e.date}
                </time>{" "}
                — {e.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Entries */}
      <section className="mt-8 space-y-10">
        {sorted.slice(0, 3).map((e) => (
          <article key={e.id} id={e.id} className="scroll-mt-24">
            <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-muted-foreground">
              <span className="inline-block h-2 w-2 rounded-full bg-primary" />
              <time dateTime={e.date}>{e.date}</time>
            </div>
            <h2 className="mt-3 text-xl font-semibold">{e.title}</h2>
            <ul className="mt-3 list-disc space-y-1 pl-6 text-sm">
              {e.items.map((it, i) => (
                <li key={i}>{it}</li>
              ))}
            </ul>
            <div className="mt-4">
              <a
                href="#top"
                className="text-xs text-muted-foreground underline underline-offset-4 hover:no-underline"
              >
                Back to top
              </a>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
