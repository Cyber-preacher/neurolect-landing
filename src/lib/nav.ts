// src/lib/nav.ts
export type NavItem = {
  label: string;
  href: string;
  cta?: boolean;
};

export const PRIMARY_NAV: NavItem[] = [
  { label: "Product", href: "/how-it-works" },
  { label: "Moat", href: "/moat" },
  { label: "Safety", href: "/safety" },
  { label: "Why now", href: "/why-now" },
];

export const MORE_NAV: NavItem[] = [
  { label: "Team", href: "/team" },
  { label: "Press", href: "/press" },
  { label: "Changelog", href: "/changelog" },
  { label: "Privacy", href: "/privacy" },
];

export const CTA_NAV: NavItem = { label: "Investors", href: "/investors", cta: true };

