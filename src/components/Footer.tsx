// src/components/Footer.tsx
// Minimal, robust footer (no COPY imports; no template literals in keys).

import Link from "next/link";

const year = new Date().getFullYear();

const links: { href: string; label: string }[] = [
  { href: "/privacy", label: "Privacy" },
  { href: "/changelog", label: "Changelog" },
];

export default function Footer() {
  return (
    <footer className="mt-24 border-t">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="text-sm text-muted-foreground">
            © {year} Neurolect. All rights reserved.
          </div>

          <nav className="flex flex-wrap items-center gap-4 text-sm">
            {links.map((l, i) => (
              <Link key={i} href={l.href} className="hover:underline">
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
