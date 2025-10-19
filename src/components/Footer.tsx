import Link from "next/link";
import { COPY } from "@/lib/copy";

const year = new Date().getFullYear();
const company = "Neurolect";

type FooterLink = { href: string; label: string };

export default function Footer() {
  const links: FooterLink[] =
    (COPY as any)?.footer?.links ?? [
      { href: "/privacy", label: "Privacy" },
      { href: "/changelog", label: "Changelog" },
    ];

  return (
    <footer className="mt-24 border-t">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="text-sm text-muted-foreground">
            © {year} {company}. All rights reserved.
          </div>
          <nav className="flex flex-wrap items-center gap-4 text-sm">
            {links.map((l, i) => (
              <Link key={${l.href}-} href={l.href} className="hover:underline">
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}