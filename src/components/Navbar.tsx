"use client";

import Link from "next/link";
import { COPY } from "@/lib/copy";

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-50 bg-background/80 backdrop-blur border-b">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">
          Neurolect
        </Link>
        <nav className="hidden md:flex items-center gap-3 text-sm">
          {COPY.nav.map((n) => (
            <Link key={n.href} href={n.href} className="px-2 py-1">
              {n.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
