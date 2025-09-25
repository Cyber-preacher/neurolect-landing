// src/app/layout.tsx
import "./globals.css";
import "./theme.css";
import type { Metadata } from "next";
import Analytics from "@/components/Analytics";
import { SITE, absoluteUrl } from "@/lib/site";
import Navbar from "@/components/Navbar";
import NeonStrings from "@/components/brand/NeonStrings";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: SITE.name, template: `%s — ${SITE.name}` },
  description: SITE.description,
  applicationName: SITE.name,
  alternates: { canonical: absoluteUrl("/") },
  openGraph: {
    type: "website",
    url: absoluteUrl("/"),
    siteName: SITE.name,
    title: SITE.name,
    description: SITE.description,
    images: [{ url: absoluteUrl("/api/og"), width: 1200, height: 630, alt: `${SITE.name} — Open Graph` }],
  },
  twitter: {
    card: "summary_large_image",
    site: SITE.twitter,
    creator: SITE.twitter,
    title: SITE.name,
    description: SITE.description,
    images: [absoluteUrl("/api/og")],
  },
  icons: { icon: [{ url: "/favicon.ico" }], apple: [{ url: "/apple-touch-icon.png" }] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-root min-h-dvh antialiased">
        {/* Neon strings: fixed under everything */}
        <NeonStrings className="fixed inset-0 -z-10" density={11} speed={34} intensity={0.22} />

        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
