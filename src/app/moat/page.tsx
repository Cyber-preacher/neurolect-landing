// src/app/moat/page.tsx
// Standalone Moat page (App Router). UTF-8 LF.

import type { Metadata } from "next";
import Moat from "@/components/sections/Moat";

export const metadata: Metadata = {
  title: "Moat — Neurolect",
  description:
    "Neurolect’s defensibility: protocol-layer control, proprietary neurosignature dataset, identity & security primitives, and standards-aligned OS for BCIs.",
  alternates: { canonical: "/moat" },
  openGraph: {
    title: "Moat — Neurolect",
    description:
      "Why Neurolect can’t be easily copied: translator protocol, proprietary data, security/identity, standards alignment.",
    url: "/moat",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function Page() {
  return (
    <main className="pb-24">
      <Moat />
    </main>
  );
}
