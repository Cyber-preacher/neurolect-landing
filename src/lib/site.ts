// src/lib/site.ts
/**
 * Central site metadata & helpers.
 * Extend this object cautiously; keep only stable, public fields.
 */

export type SiteConfig = {
  name: string;
  description: string;
  url: string;            // canonical origin, no trailing slash
  twitter: string;        // handle with @ or full
  calendly?: string;      // optional booking URL
};

export const SITE: SiteConfig = {
  name: "Neurolect",
  description:
    "Neurolect — the OS layer for Brain–Computer Interfaces: intent models, neurosignature schema, and a policy runtime for safe, reversible brain-to-device communication.",
  url: "https://neurolect.ai",
  twitter: "@neurolect",
  // If you have a real Calendly, set it in env or inline it here:
  // calendly: "https://calendly.com/your-org/intro-15",
};

export function absoluteUrl(path: string): string {
  // Handles both "/foo" and "foo"
  return new URL(path.startsWith("/") ? path : `/${path}`, SITE.url).toString();
}
