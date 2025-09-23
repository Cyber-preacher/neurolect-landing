import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Team — Neurolect",
  description: "Focused, credible, and shipping.",
};

type Member = { name: string; role: string; bio: string; img?: string };

const TEAM: Member[] = [
  { name: "Dato Kavazi", role: "Founder", bio: "BCI OS & Humanode co-founder; shipper across AI/crypto." },
  { name: "—", role: "—", bio: "Add 3–5 more concise bios with credibility markers." },
];

export default function TeamPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Team</h1>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {TEAM.map((m) => (
          <article key={m.name} className="rounded-2xl border p-5">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-muted overflow-hidden">
                {m.img ? (
                  <Image src={m.img} alt={m.name} width={48} height={48} className="h-full w-full object-cover" />
                ) : null}
              </div>
              <div>
                <h2 className="font-semibold">{m.name}</h2>
                <p className="text-sm text-muted-foreground">{m.role}</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">{m.bio}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
