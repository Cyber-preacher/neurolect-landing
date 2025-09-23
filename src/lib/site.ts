// src/lib/site.ts
/**
 * Central site metadata & helpers.
 * Extend cautiously; keep fields stable and public.
 */

export type SiteConfig = {
  name: string;
  description: string;
  url: string;            // canonical origin, no trailing slash
  twitter: string;        // '@handle' or URL
  calendly?: string;      // optional booking URL
};

export const SITE: SiteConfig = {
  name: "Neurolect",
  description:
    "Neurolect â€” the OS layer for Brainâ€“Computer Interfaces: intent models, neurosignature schema, and a policy runtime for safe, reversible brain-to-device communication.",
  url: "https://neurolect.ai",
  twitter: "@neurolect",
  // If you have a Calendly, set it here or via env and map it in runtime code:
  // calendly: "https://calendly.com/your-org/intro-15",
};

export function absoluteUrl(path: string): string {
  return new URL(path.startsWith("/") ? path : `/${path}`, SITE.url).toString();
}

