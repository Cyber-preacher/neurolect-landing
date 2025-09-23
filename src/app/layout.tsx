// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Analytics from "@/components/Analytics";
import Navbar from "@/components/Navbar";
import { SITE, absoluteUrl } from "@/lib/site";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.name,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  alternates: {
    canonical: absoluteUrl("/"),
  },
  openGraph: {
    type: "website",
    url: absoluteUrl("/"),
    siteName: SITE.name,
    title: SITE.name,
    description: SITE.description,
    images: [
      {
        url: absoluteUrl("/api/og"), // served by opengraph-image.tsx
        width: 1200,
        height: 630,
        alt: `${SITE.name} — Open Graph`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: SITE.twitter,
    creator: SITE.twitter,
    title: SITE.name,
    description: SITE.description,
    images: [absoluteUrl("/api/og")],
  },
  icons: {
    icon: [{ url: "/favicon.ico" }],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {/* A11y: keyboard users can jump past the nav */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only fixed left-2 top-2 z-[1000] rounded border bg-background px-3 py-1"
        >
          Skip to content
        </a>
        {/* Main content region */}
        <Navbar />
        <main id="main">{children}</main>

        <Analytics />
      </body>
    </html>
  );
}
