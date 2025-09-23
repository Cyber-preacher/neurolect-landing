import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Why now — Neurolect",
  description: "Timing thesis: hardware maturity, AI personalization, privacy, cost curves.",
};

export default function WhyNowPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">Why now</h1>
      <ol className="mt-6 list-decimal pl-6 space-y-2 text-muted-foreground">
        <li>BCI hardware & biosignal capture maturing.</li>
        <li>AI personalization needs private intent signals.</li>
        <li>Privacy norms & regulation favor local control.</li>
        <li>Falling cost curves for sensors & compute.</li>
      </ol>
    </main>
  );
}
