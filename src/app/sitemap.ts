// src/app/sitemap.ts
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://neurolect.ai";
  const now = new Date();

  return [
    { url: `${base}/`, lastModified: now },
    { url: `${base}/product`, lastModified: now },
    { url: `${base}/how-it-works`, lastModified: now },
    { url: `${base}/why-now`, lastModified: now },
    { url: `${base}/safety`, lastModified: now },
    { url: `${base}/moat`, lastModified: now },
  ];
}
