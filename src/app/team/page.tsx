// src/app/team/page.tsx
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Team — Neurolect",
  description:
    "Focused, credible, and shipping. A compact team with deep BCI, systems, and product experience.",
};

type Member = {
  name: string;
  role: string;
  bio: string;
  img?: string;          // public/people/<file>.jpg|png
  links?: { label: string; href: string }[];
};

const TEAM: Member[] = [
  {
    name: "Dato Kavazi",
    role: "Founder & CEO",
    bio: "BCI OS direction; prior co-founder at Humanode. Systems, cryptography, and shipping neural-adjacent products.",
    img: "/people/dato.jpg",
    links: [
      { label: "X", href: "https://x.com/DavidKavazi" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/" },
    ],
  },
  // Add 3–5 more concise bios with credibility markers (labs, shipped systems, patents).
  {
    name: "Add teammate",
    role: "Title",
    bio: "One sentence on why they’re great for this problem (BCI/ML/safety/low-latency runtime).",
  },
  {
    name: "Add teammate",
    role: "Title",
    bio: "One sentence with a crisp, externally verifiable marker (ex-<company>, <lab>, papers, shipped products).",
  },
];

const ADVISORS: Member[] = [
  {
    name: "Add advisor",
    role: "Advisor — Neuroscience",
    bio: "University affiliation or lab; brief focus. Optional publications or standards work.",
  },
  {
    name: "Add advisor",
    role: "Advisor — Safety & Policy",
    bio: "Brief background on AI safety, bioethics, or policy/regulatory work.",
  },
];

export default function TeamPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <header className="max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-tight">Team</h1>
        <p className="mt-4 text-muted-foreground">
          Focused, credible, and shipping. We combine BCI research, systems engineering, and product craft.
          Our mandate: make brain–computer interfaces safe, usable, and useful for everyday software.
        </p>
      </header>

      {/* Core team */}
      <section className="mt-10">
        <h2 className="text-xl font-semibold">Core</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((m) => (
            <article key={m.name} className="rounded-2xl border p-5">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 overflow-hidden rounded-full bg-muted">
                  {m.img ? (
                    <Image
                      src={m.img}
                      alt={m.name}
                      width={48}
                      height={48}
                      className="h-full w-full object-cover"
                    />
                  ) : null}
                </div>
                <div>
                  <h3 className="font-semibold leading-tight">{m.name}</h3>
                  <p className="text-sm text-muted-foreground">{m.role}</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">{m.bio}</p>
              {m.links?.length ? (
                <div className="mt-3 flex flex-wrap gap-3">
                  {m.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      className="text-sm underline underline-offset-4"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {l.label} →
                    </a>
                  ))}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      {/* Advisors (optional) */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold">Advisors</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ADVISORS.map((m) => (
            <article key={m.name} className="rounded-2xl border p-5">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 overflow-hidden rounded-full bg-muted" />
                <div>
                  <h3 className="font-semibold leading-tight">{m.name}</h3>
                  <p className="text-sm text-muted-foreground">{m.role}</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">{m.bio}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Hiring note (optional) */}
      <section className="mt-12 rounded-2xl border p-5 bg-muted/30">
        <h2 className="text-lg font-semibold">We’re assembling a compact, senior team</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          If you’ve shipped low-latency runtimes, intent models, or safety systems, we’d like to hear from you.
        </p>
        {/* Update to real email or form when ready */}
        {/* <a href="/careers" className="mt-3 inline-block underline underline-offset-4">Open roles →</a> */}
      </section>
    </main>
  );
}
