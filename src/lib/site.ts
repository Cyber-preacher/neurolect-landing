export const SITE = {
  name: "Neurolect",
  description: "The OS layer for brain–computer interfaces",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ||
    "http://localhost:3050",
  twitter: "@neurolect", // change to your handle or remove
};

export function absoluteUrl(path = "/") {
  const base = SITE.url;
  return path.startsWith("http") ? path : `${base}${path.startsWith("/") ? "" : "/"}${path}`;
}
