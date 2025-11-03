"use client";

import { Hero } from "@/components/Hero";
import { NavBar } from "@/components/NavBar";
import { DynamicProcessCanvasSection } from "@/components/DynamicProcessCanvasSection";
import { ProgrammingSpectrum } from "@/components/ProgrammingSpectrum";
import { AIAugmentation } from "@/components/AIAugmentation";
import { UnifiedAssetGraph } from "@/components/UnifiedAssetGraph";
import { CrossReality } from "@/components/CrossReality";
import { MissionControl } from "@/components/MissionControl";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <div className="bg-[#020817] text-white">
      <NavBar />
      <Hero />
      <DynamicProcessCanvasSection />
      <ProgrammingSpectrum />
      <AIAugmentation />
      <UnifiedAssetGraph />
      <CrossReality />
      <MissionControl />
      <ContactSection />
      <Footer />
    </div>
  );
}
