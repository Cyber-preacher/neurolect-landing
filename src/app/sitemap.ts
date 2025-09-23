import { type MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";
import fs from "node:fs";
import path from "node:path";

const STATIC_ROUTES = [
  "/", "/how-it-works", "/moat", "/safety", "/why-now",
  "/investors", "/team", "/press", "/changelog", "/privacy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return STATIC_ROUTES.map((path) => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency: path === "/" ? "daily" : "weekly",
    priority: path === "/" ? 1.0 : 0.7,
  }));
}
