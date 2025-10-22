// src/components/Navbar.tsx
// Defensive Navbar: no crashes if any nav group is empty/undefined.
// Removes legacy links (Press/Team/Privacy/Changelog). UTF-8 LF.

"use client";

import Link from "next/link";
import { useRef } from "react";
import {
  PRIMARY_NAV,
  MORE_NAV,
  CTA_NAV,
} from "@/lib/nav";

export default function Navbar() {
  const moreRef = useRef<HTMLDetailsElement>(null);

  const primary = Array.isArray(PRIMARY_NAV) ? PRIMARY_NAV : [];
  const more = Array.isArray(MORE_NAV) ? MORE_NAV : [];
  const ctas = Array.isArray(CTA_NAV) ? CTA_NAV : [];

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-14 items-center justify-between gap-3">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <Link href="/" className="font-semibold tracking-tight">
              Neurolect
            </Link>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {primary.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}

            {/* More (dropdown) — only render if we have items */}
            {more.length > 0 && (
              <details ref={moreRef} className="relative">
                <summary className="list-none cursor-pointer text-sm text-muted-foreground hover:text-foreground">
                  More
                </summary>
                <div className="absolute right-0 mt-2 w-48 rounded-xl border bg-background p-2 shadow-lg">
                  {more.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-foreground"
                      onClick={() => moreRef.current?.removeAttribute("open")}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </details>
            )}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-2">
            {ctas.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="inline-flex items-center rounded-xl border px-3 py-1.5 text-sm hover:bg-accent"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu (very simple) */}
          <details className="md:hidden">
            <summary className="px-2 py-1.5 rounded-lg border text-sm">Menu</summary>
            <div className="mt-2 flex flex-col gap-1 rounded-xl border p-2">
              {[...primary, ...more].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
              {ctas.length > 0 && <div className="my-1 h-px w-full bg-border" />}
              {ctas.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg border px-3 py-2 text-sm hover:bg-accent"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
