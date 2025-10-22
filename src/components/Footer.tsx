// src/components/Footer.tsx
// No Privacy/Changelog/Team/Press links. UTF-8 LF.

import Link from "next/link";

export default function Footer() {
  const company = "Neurolect";

  const links: { label: string; href: string }[] = [
    { label: "Home", href: "/" },
    { label: "How it works", href: "/how-it-works" },
    { label: "Moat", href: "/moat" },
  ];

  return (
    <footer className="mt-16 border-t py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} {company}. All rights reserved.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
            {links.map((l, i) => (
              <Link
                key={i}
                href={l.href}
                className="text-muted-foreground hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
