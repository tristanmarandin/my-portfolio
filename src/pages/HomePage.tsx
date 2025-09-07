import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import ProjectsSection from "@/sections/ProjectsSection";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import SkillsSection from "@/sections/SkillsSection";
import FooterSection from "@/sections/FooterSection";

export default function HomePage() {
  const location = useLocation();
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    if (location.hash === "#projects") {
      const target = containerRef.current.querySelector("#projects") as HTMLElement | null;
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

  return (
    // <main ref={containerRef} className="h-dvh overflow-y-auto">
    <main ref={containerRef} className="h-dvh overflow-y-auto snap-y snap-mandatory">
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <SkillsSection />
      <FooterSection />
    </main>
  );
}