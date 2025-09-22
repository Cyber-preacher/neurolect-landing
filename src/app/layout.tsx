import "./globals.css";
import type { Metadata } from "next";
import Analytics from "@/components/Analytics";

export const metadata: Metadata = {
  title: "Neurolect",
  description: "The OS layer for brain–computer interfaces",
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL
    ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
    : undefined,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
