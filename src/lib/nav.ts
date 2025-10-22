// src/lib/nav.ts
// UTF-8 LF. Central nav used by Navbar/Footer/etc.

export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

export const PRIMARY_NAV: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "How it works", href: "/how-it-works" },
  { label: "Why now", href: "/why-now" },   // change to "/#why-now" if it’s a homepage anchor
  { label: "Safety", href: "/safety" },     // change to "/#safety" if it’s a homepage anchor
  { label: "Moat", href: "/moat" },
];

export const MORE_NAV: NavItem[] = [
  // Intentionally empty for now (Press/Team/Privacy/Changelog removed).
];

export const CTA_NAV: NavItem[] = [
  { label: "Request access", href: "/api/lead" },
];

export const SECONDARY_NAV: NavItem[] = [
  // Add footer-only items here if needed later.
];

// Back-compat alias for components that import NAV directly (e.g., Footer)
export const NAV = PRIMARY_NAV;
