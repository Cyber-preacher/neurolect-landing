// src/components/sections/ChallengesSolutions.tsx
import React from "react";
import { COPY } from "@/lib/copy";

type Challenge = {
  title: string;
  problem: string;
  solution: string;
};

export default function ChallengesSolutions() {
  const title = COPY?.challenges?.title ?? "Challenges & Solutions";
  const items: Challenge[] = Array.isArray(COPY?.challenges?.items)
    ? (COPY.challenges.items as Challenge[])
    : [];

  return (
    <section id="solutions" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <header className="mb-6">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">{title}</h2>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <article key={item.title} className="rounded-2xl border bg-background/60 backdrop-blur-xl p-6">
            <h3 className="font-medium">{item.title}</h3>

            <div className="mt-3 space-y-3">
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-wide text-foreground/70">
                  Problem
                </div>
                <p className="text-sm text-muted-foreground">{item.problem}</p>
              </div>

              <div>
                <div className="text-[11px] font-semibold uppercase tracking-wide text-foreground/70">
                  Solution
                </div>
                <p className="text-sm text-muted-foreground">{item.solution}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
