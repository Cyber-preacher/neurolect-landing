import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import Moat from "@/components/sections/Moat";
import Safety from "@/components/sections/Safety";
import { WhatIs } from "@/components/sections/WhatIs";
import { ChallengesSolutions } from "@/components/sections/ChallengesSolutions";
import { CoreSolutions } from "@/components/sections/CoreSolutions";
import { UseCases } from "@/components/sections/UseCases";
import { TechStack } from "@/components/sections/TechStack";
import { Roadmap } from "@/components/sections/Roadmap";
import { Team } from "@/components/sections/Team";
import { Testimonials } from "@/components/sections/Testimonials";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Moat />
        <Safety />
        <WhatIs />
        <ChallengesSolutions />
        <CoreSolutions />
        <UseCases />
        <TechStack />
        <Roadmap />
        <Team />
        <Testimonials />
        <FinalCTA />
      </main>
    </div>
  );
}
