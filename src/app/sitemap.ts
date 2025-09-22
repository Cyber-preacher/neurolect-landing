import { type MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";
import fs from "node:fs";
import path from "node:path";

export default function sitemap(): MetadataRoute.Sitemap {
  // Known routes; add more as pages ship
  const routes = ["/", "/investors", "/press"].filter((p) =>
    fs.existsSync(path.join(process.cwd(), "src", "app", p.replace(/^\//, ""), "page.tsx"))
  );

  const now = new Date().toISOString();

  return routes.map((r) => ({
    url: absoluteUrl(r),
    lastModified: now,
    changeFrequency: r === "/" ? "weekly" : "monthly",
    priority: r === "/" ? 1 : 0.6,
  }));
}
