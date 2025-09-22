// next.config.ts
import type { NextConfig } from "next";

/**
 * Deployment-safe headers:
 * - Minimal security set that won’t break Calendly iframe or Plausible.
 * - We use CSP **Report-Only** to avoid blocking during rollout.
 *   Flip to `Content-Security-Policy` after verifying in Vercel logs.
 */
const securityHeaders: Array<{ key: string; value: string }> = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" }, // our pages can be framed by same-origin; Calendly is an <iframe src> we embed, so OK
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  { key: "Cross-Origin-Resource-Policy", value: "same-origin" },
  {
    key: "Permissions-Policy",
    value: [
      "geolocation=(), microphone=(), camera=(), payment=(), usb=()",
      "interest-cohort=()",
    ].join(", "),
  },
  {
    // Start with Report-Only to avoid accidental breaks; inspect `/_vercel/insights` or Logs.
    key: "Content-Security-Policy-Report-Only",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' https://plausible.io https://vercel.live",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob:",
      "connect-src 'self' https://plausible.io https://vercel.live",
      "frame-src 'self' https://calendly.com https://*.calendly.com",
      "font-src 'self' data:",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'self'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Leave Turbopack as build default; locally you prefer Webpack via env (see docs).
  // No custom images config needed for current site.
  experimental: {},
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
