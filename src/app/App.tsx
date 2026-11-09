import { useState } from "react";
import { IntroScene } from "./components/IntroScene";
import { HeroSection } from "./components/HeroSection";
import { ProjectOverview } from "./components/ProjectOverview";
import { PersonasSection } from "./components/PersonasSection";
import { JourneyMap } from "./components/JourneyMap";
import { Challenges } from "./components/Challenges";
import { DesignSolutions } from "./components/DesignSolutions";
import { ImpactMetrics } from "./components/ImpactMetrics";
import { ClosingScene } from "./components/ClosingScene";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  const handleStartJourney = () => {
    setShowIntro(false);
    // Smooth scroll to main content
    setTimeout(() => {
      document.getElementById("main-content")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Intro Scene */}
      {showIntro && <IntroScene onStart={handleStartJourney} />}

      {/* Main Content */}
      <div id="main-content">
        {/* Hero Section */}
        <HeroSection />

        {/* Project Overview */}
        <ProjectOverview />

        {/* Research & Personas */}
        <PersonasSection />

        {/* Journey Maps */}
        <JourneyMap />

        {/* Challenges */}
        <Challenges />

        {/* Design Solutions */}
        <DesignSolutions />

        {/* Impact & Outcomes */}
        <ImpactMetrics />

        {/* Closing Scene */}
        <ClosingScene />
      </div>
    </div>
  );
}