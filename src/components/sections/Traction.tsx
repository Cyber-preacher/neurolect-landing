// src/components/sections/Traction.tsx
import { COPY } from "@/lib/copy";

// Allow either a text-only logo chip or an image logo
type TextLogo = { name: string; src?: undefined; alt?: undefined };
type ImageLogo = { src: string; alt?: string; name?: string };
type LogoItem = TextLogo | ImageLogo;

type QuoteItem = { quote: string; author?: string };

// Type guards
function isImageLogo(item: LogoItem): item is ImageLogo {
  return typeof (item as ImageLogo).src === "string" && (item as ImageLogo).src.length > 0;
}

export default function Traction() {
  // Fallbacks in case COPY is missing fields
  const fallbackLogos: LogoItem[] = [
    { name: "Alpha Labs" },
    { name: "Signal Bridge" },
    { name: "Cerebra Partners" },
    { name: "Neuron Forge" },
    { name: "Atlas Ventures" },
    { name: "Synapse Studio" },
  ];
  const fallbackQuotes: QuoteItem[] = [
    {
      quote: "“Neurolect’s policy-first runtime is a credible path to safe, cross-device neural interfaces.”",
      author: "Principal, Atlas Ventures",
    },
    {
      quote: "“A lingua franca for neural intent is the missing layer. HAL + SDKs make this buildable today.”",
      author: "Founder, Neuro HMI startup",
    },
  ];

  const logos: LogoItem[] = Array.isArray(COPY?.traction?.logos) && COPY.traction.logos.length > 0
    ? (COPY.traction.logos as LogoItem[])
    : fallbackLogos;

  const quotes: QuoteItem[] = Array.isArray(COPY?.traction?.quotes) && COPY.traction.quotes.length > 0
    ? (COPY.traction.quotes as QuoteItem[])
    : fallbackQuotes;

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Logos */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 items-center">
        {logos.map((logo, i) => {
          const key = isImageLogo(logo) ? logo.src : logo.name;
          return (
            <div
              key={key ?? `logo-${i}`}
              className="rounded-xl border bg-background/50 backdrop-blur p-3 text-center text-xs text-muted-foreground"
              title={isImageLogo(logo) ? (logo.alt ?? logo.name ?? "Partner") : logo.name}
            >
              {/* If you later add real SVGs/PNGs, you can switch to <img> or next/image here. */}
              {isImageLogo(logo) ? (
                <span className="font-medium">{logo.alt ?? logo.name ?? "Partner"}</span>
              ) : (
                <span className="font-medium">{logo.name}</span>
              )}
            </div>
          );
        })}
      </div>

      {/* Quotes */}
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {quotes.map((q, i) => (
          <figure key={q.quote ?? `q-${i}`} className="rounded-2xl border bg-background/60 backdrop-blur-xl p-5">
            <blockquote className="text-sm text-muted-foreground">{q.quote}</blockquote>
            {q.author && <figcaption className="mt-2 text-xs text-foreground/70">— {q.author}</figcaption>}
          </figure>
        ))}
      </div>
    </section>
  );
}
