import { type MetadataRoute } from "next";
import { SITE, absoluteUrl } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  const base = SITE.url;
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: base,
  };
}

