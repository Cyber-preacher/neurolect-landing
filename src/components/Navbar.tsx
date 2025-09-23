// src/components/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { PRIMARY_NAV, MORE_NAV, CTA_NAV } from "@/lib/nav";

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Record<string, unknown> }) => void;
  }
}

function cx(...arr: Array<string | false | null | undefined>) {
  return arr.filter(Boolean).join(" ");
}

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const moreRef = useRef<HTMLDetailsElement>(null);

  // Close mobile drawer on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname?.startsWith(href + "/");

  // Plausible helper (no-op if not loaded)
  const track = (name: string) => {
    if (typeof window !== "undefined" && typeof window.plausible === "function") {
      window.plausible(name);
    }
  };

  const toInvestors = () => {
    track("nav.cta_investors.click");
    const search = typeof window !== "undefined" ? window.location.search : "";
    router.push(`/investors${search || ""}`);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/75 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex h-14 items-center justify-between" aria-label="Primary">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="text-lg font-semibold tracking-tight focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
            >
              Neurolect
            </Link>
            <span className="hidden md:inline text-sm text-muted-foreground">• BCI OS</span>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {PRIMARY_NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cx(
                  "text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm px-1 py-0.5",
                  isActive(item.href)
                    ? "text-foreground font-medium underline underline-offset-4"
                    : "text-foreground/70 hover:text-foreground/90"
                )}
              >
                {item.label}
              </Link>
            ))}

            {/* More — native details/summary keeps a11y simple */}
            <details className="relative" ref={moreRef}>
              <summary className="list-none cursor-pointer select-none text-sm text-foreground/70 hover:text-foreground/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm px-1 py-0.5">
                More
              </summary>
              <div
                className="absolute right-0 mt-2 w-48 rounded-xl border bg-popover shadow-lg p-2"
                onClick={() => moreRef.current?.removeAttribute("open")}
              >
                {MORE_NAV.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cx(
                      "block rounded-lg px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground",
                      isActive(item.href) && "font-medium underline underline-offset-4"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </details>
          </div>

          {/* Right: Investors CTA + mobile toggle */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toInvestors}
              className="hidden md:inline-flex rounded-2xl px-3.5 py-2 text-sm font-semibold shadow-sm border bg-primary text-primary-foreground hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {CTA_NAV.label}
            </button>

            <button
              aria-label="Open menu"
              className="md:hidden inline-flex items-center justify-center rounded-md p-2 border focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              onClick={() => setOpen(true)}
            >
              ☰
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-50 bg-background/60 backdrop-blur-sm" role="dialog" aria-modal="true">
          <div className="absolute right-0 top-0 h-full w-[85%] max-w-sm bg-background border-l shadow-xl p-4">
            <div className="flex items-center justify-between">
              <span className="text-base font-semibold">Neurolect</span>
              <button
                aria-label="Close menu"
                className="inline-flex items-center justify-center rounded-md p-2 border focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                onClick={() => setOpen(false)}
              >
                ✕
              </button>
            </div>

            <div className="mt-4 flex flex-col gap-1">
              {PRIMARY_NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cx(
                    "rounded-lg px-3 py-2 text-base hover:bg-accent hover:text-accent-foreground",
                    isActive(item.href) && "font-medium underline underline-offset-4"
                  )}
                >
                  {item.label}
                </Link>
              ))}

              <div className="mt-2 border-t pt-2">
                {MORE_NAV.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cx(
                      "rounded-lg px-3 py-2 text-base hover:bg-accent hover:text-accent-foreground",
                      isActive(item.href) && "font-medium underline underline-offset-4"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <button
                type="button"
                onClick={toInvestors}
                className="mt-3 inline-flex rounded-2xl px-3.5 py-2 text-base font-semibold shadow-sm border bg-primary text-primary-foreground hover:opacity-90"
              >
                {CTA_NAV.label}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
