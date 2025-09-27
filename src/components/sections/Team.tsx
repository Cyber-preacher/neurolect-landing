// src/components/sections/Team.tsx
import Tile from "@/components/ui/Tile";

type Member = {
  name: string;
  role: string;
  cred: string;
  photo?: string; // optional for now
};

const TEAM: Member[] = [
  { name: "A. Founder", role: "CEO", cred: "Ex-XYZ, 2x exits; neuroscience & product" },
  { name: "B. Co-Founder", role: "CTO", cred: "Ex-ABC; ML systems & real-time inference" },
  { name: "C. Research", role: "Neuro ML", cred: "Affect modeling; closed-loop control" },
  { name: "D. Platform", role: "Infra", cred: "SDKs, APIs, safety runtime" },
  { name: "E. Design", role: "Design Lead", cred: "HMI for neural UX; accessibility" },
];

export default function Team() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <header className="mb-6">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Team</h2>
        <p className="mt-2 text-sm text-muted-foreground">Crisp bios, credibility, and focus on safety.</p>
      </header>

      <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
        {TEAM.map((m) => (
          <Tile
            key={m.name}
            title={`${m.name} — ${m.role}`}
            desc={m.cred}
          />
        ))}
      </div>
    </section>
  );
}
