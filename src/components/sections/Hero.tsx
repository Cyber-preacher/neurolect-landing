// src/components/sections/Hero.tsx
import Link from "next/link";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative overflow-hidden border-b"
    >
      {/* Subtle background / visual */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -top-32 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(60% 60% at 50% 50%, hsl(260 100% 60% / .40), transparent 70%)" }}
        />
        <svg
          className="absolute bottom-[-3rem] right-[-3rem] h-[18rem] w-[18rem] opacity-25"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="currentColor" />
              <stop offset="100%" stopColor="currentColor" />
            </linearGradient>
          </defs>
          <path
            d="M10 120 C40 80, 80 80, 110 120 S180 160, 190 120"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <circle cx="110" cy="120" r="3" fill="currentColor" />
          <circle cx="190" cy="120" r="3" fill="currentColor" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Copy block */}
          <div>
            <h1
              id="hero-title"
              className="text-4xl font-semibold tracking-tight sm:text-5xl"
            >
              Neurolect — The Universal OS for Brain–Computer Interfaces
            </h1>

            <p className="mt-4 text-lg text-muted-foreground">
              Connect, communicate, and control technology directly from your mind.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/investors"
                className="inline-flex items-center rounded-2xl px-4 py-2 text-sm font-semibold shadow-sm border bg-primary text-primary-foreground hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Investors
              </Link>
              <Link
                href="/pack/neurolect-investor-pack.pdf"
                className="inline-flex items-center rounded-2xl px-4 py-2 text-sm font-semibold border hover:bg-accent hover:text-accent-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Download teaser
              </Link>
            </div>

            <p className="sr-only" id="hero-visual-desc">
              Abstract brain-to-device visual showing signal flow from neural activity to applications.
            </p>
          </div>

          {/* Visual block (purely decorative; described above) */}
          <div
            className="relative aspect-[4/3] rounded-3xl border bg-gradient-to-tr from-background via-muted to-background"
            role="img"
            aria-labelledby="hero-visual-desc"
          >
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 800 600"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="wire" x1="0" x2="1" y1="0" y2="0">
                  <stop offset="0%" stopColor="currentColor" />
                  <stop offset="100%" stopColor="currentColor" />
                </linearGradient>
              </defs>
              <g opacity="0.35">
                <path d="M80 420 C200 380, 260 300, 340 320 S520 420, 720 360"
                  stroke="currentColor" strokeWidth="2" fill="none" />
                <circle cx="340" cy="320" r="5" fill="currentColor" />
                <circle cx="720" cy="360" r="5" fill="currentColor" />
              </g>
              <g opacity="0.2">
                <circle cx="160" cy="220" r="28" fill="currentColor" />
                <rect x="560" y="220" width="70" height="42" rx="9" fill="currentColor" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
