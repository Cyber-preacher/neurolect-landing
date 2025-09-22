"use client";

import Image from "next/image";
import SectionShell from "@/components/SectionShell";
import { COPY } from "@/lib/copy";

export default function Traction() {
  const logos = COPY.traction.logos;
  const quotes = COPY.traction.quotes;

  return (
    <SectionShell id="traction" title={COPY.traction.title} subtitle={COPY.traction.sub}>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
        {logos.map((l, i) => (
          <div key={i} className="flex items-center justify-center rounded-2xl border p-4 bg-background/50">
            <Image src={l.src} alt={l.alt} width={160} height={48} className="opacity-80 hover:opacity-100 transition-opacity" />
          </div>
        ))}
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {quotes.map((q, i) => (
          <figure key={i} className="rounded-2xl border p-6 bg-background/50">
            <blockquote className="text-sm text-muted-foreground">“{q.text}”</blockquote>
            <figcaption className="mt-3 text-xs">
              <span className="font-semibold">{q.attribution}</span>
              {q.role ? <span className="text-muted-foreground"> — {q.role}</span> : null}
            </figcaption>
          </figure>
        ))}
      </div>
    </SectionShell>
  );
}
