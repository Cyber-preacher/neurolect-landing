// src/components/sections/Traction.tsx
import { COPY } from "@/lib/copy";

type LogoItem =
  | { name: string; src?: never }
  | { name?: string; src: string; alt?: string };

export default function Traction() {
  const traction = COPY?.traction ?? { logos: [], quotes: [] };
  const logos: LogoItem[] = Array.isArray(traction.logos) ? traction.logos : [];
  const quotes: { quote: string; author?: string }[] = Array.isArray(traction.quotes) ? traction.quotes : [];

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Logos */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 items-center">
        {logos.length > 0 ? (
          logos.map((l, i) => (
            <div
              key={(l as any).src ?? (l as any).name ?? i}
              className="rounded-xl border bg-background/50 backdrop-blur p-3 text-center text-xs text-muted-foreground"
              title={(l as any).name ?? (l as any).alt ?? "Partner"}
            >
              {/* If an image path is provided later, you can render it here with next/image.
                  For now we render name chips to avoid 404s and lint issues. */}
              {(l as any).name ? <span className="font-medium">{(l as any).name}</span> : <span>Partner</span>}
            </div>
          ))
        ) : (
          <>
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="rounded-xl border bg-background/40 backdrop-blur p-3 text-center text-xs text-muted-foreground">
                Partner
              </div>
            ))}
          </>
        )}
      </div>

      {/* Quotes */}
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {(quotes.length > 0 ? quotes : [
          { quote: "“Neurolect makes neural UX practical by scoping, standardizing, and securing.”", author: "Investor" },
          { quote: "“Policy-first design is the only way to scale BCIs beyond demos.”", author: "Founder" },
        ]).map((q, i) => (
          <figure key={i} className="rounded-2xl border bg-background/60 backdrop-blur-xl p-5">
            <blockquote className="text-sm text-muted-foreground">{q.quote}</blockquote>
            {q.author && <figcaption className="mt-2 text-xs text-foreground/70">— {q.author}</figcaption>}
          </figure>
        ))}
      </div>
    </section>
  );
}
