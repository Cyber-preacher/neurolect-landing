// src/components/sections/WhyNow.tsx
import Tile from "@/components/ui/Tile";

export default function WhyNow() {
  const bullets = [
    { title: "Hardware Maturity", desc: "Commodity EEG, new implant generations, and better dry electrode stacks." },
    { title: "AI Personalization", desc: "Foundation models enable low-shot personalization of intent and affect." },
    { title: "Privacy Momentum", desc: "Cultural and regulatory pressure favors private-by-default neural tech." },
    { title: "Cost Curves", desc: "Compute + sensors get cheaper yearly, enabling accessible brain apps." },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <header className="mb-6">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Why now</h2>
        <p className="mt-2 text-sm text-muted-foreground">Converging trends make Neurolect inevitable.</p>
      </header>

      <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-4">
        {bullets.map((b) => (
          <Tile key={b.title} title={b.title} desc={b.desc} />
        ))}
      </div>
    </section>
  );
}
