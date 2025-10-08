// src/components/sections/UseCases.tsx
import React from "react";
import { COPY } from "@/lib/copy";

type UseCaseItem = {
  title: string;
  desc?: string;
  // room for future fields (icon, link, tag, etc.)
};

export default function UseCases() {
  const title = COPY?.useCases?.title ?? "Use cases";
  const items: UseCaseItem[] = COPY?.useCases?.items ?? [];

  return (
    <section id="use-cases" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
          {title}
        </h2>

        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((uc, i) => (
            <li
              key={i}
              className="rounded-2xl border p-6 bg-background/60 backdrop-blur-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-medium leading-tight">{uc.title}</h3>
              {uc.desc ? (
                <p className="mt-2 text-sm text-muted-foreground">{uc.desc}</p>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
