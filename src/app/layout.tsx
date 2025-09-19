import "./globals.css"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/react"
import { ThemeProvider } from "@/components/ThemeProvider"
import { geistMono, geistSans } from "@/lib/fonts"

export const metadata: Metadata = {
  title: "Neurolect — Linguo-emotional OS",
  description:
    "Neurolect: universal OS for neuro-linguistic and emotional interaction. Neurosignatures, intent streaming, privacy-first design.",
  metadataBase: new URL("https://YOUR-DOMAIN.TLD"), // ← set later
  openGraph: {
    title: "Neurolect",
    description:
      "Universal OS for neuro-linguistic interaction: neurosignatures & intent streaming.",
    url: "https://YOUR-DOMAIN.TLD",
    siteName: "Neurolect",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neurolect",
    description:
      "Universal OS for neuro-linguistic interaction: neurosignatures & intent streaming.",
    images: ["/og.png"],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-dvh bg-background text-foreground antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
