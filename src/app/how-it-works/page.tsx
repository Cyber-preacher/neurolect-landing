// src/app/how-it-works/page.tsx
// Standalone "How it works" page (App Router). UTF-8 LF.

import type { Metadata } from "next";
import HowItWorks from "@/components/sections/HowItWorks";

export const metadata: Metadata = {
  title: "How It Works — Neurolect",
  description:
    "Neurolect standardizes brain–computer interaction: HAL adapters, linguo-emotional translation, identity & security, and the BApp ecosystem.",
  alternates: { canonical: "/how-it-works" },
  openGraph: {
    title: "How It Works — Neurolect",
    description:
      "From signal to meaning: acquisition, intent embeddings, linguo-emotional translation, command mapping, and feedback.",
    url: "/how-it-works",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return (
    <main className="pb-24">
      <HowItWorks />
    </main>
  );
}
