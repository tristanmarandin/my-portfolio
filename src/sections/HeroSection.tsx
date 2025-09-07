import CTAButton from "@/components/CTAButton";
import { useLanguage } from "@/context/LanguageContext";
import { Badge } from "@/components/ui/badge";
import CenterRevealText from "@/components/CenterRevealText";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const { language } = useLanguage();
  return (
    <section className="relative overflow-hidden h-dvh text-center snap-start">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(9, 9, 11, 0.2) 0%, #09090b 100%)",
        }}
      />

      {/* Glow indigo centré */}
      <div
        aria-hidden
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle 40vmax at 50% 50%, rgba(99,102,241,0.35) 0%, rgba(99,102,241,0.15) 35%, transparent 70%)",
          filter: "blur(32px)",
        }}
      />

      {/* Contenu */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <div
          className="flex items-center gap-2 mb-4 fade-up"
          style={{
            // 1s de délai, durée 500ms, easing doux
            // @ts-ignore CSS vars
            "--fade-up-delay": "1.3s",
            // @ts-ignore CSS vars
            "--fade-up-duration": "700ms",
            // @ts-ignore CSS vars
            "--fade-up-ease": "cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          <Badge variant="secondary">
            {language === "fr" ? "IA" : "AI"}
          </Badge>
          <Badge variant="secondary">
            {language === "fr" ? "UI/UX" : "UI/UX"}
          </Badge>
          <Badge variant="secondary">
            {language === "fr" ? "App Web" : "Web App"}
          </Badge>
          <Badge variant="secondary">
            {language === "fr" ? "App Mobile" : "Mobile App"}
          </Badge>
          <Badge variant="secondary">
            {language === "fr" ? "Cloud" : "Cloud"}
          </Badge>
        </div>
        <p className="text-lg sm:text-2xl text-gray-300 mb-2 sm:mb-4 tracking-tight">
          <CenterRevealText
            text={language === "fr" ? "Développeur Full Stack" : "Full‑Stack Developer"}
            baseDelaySec={0.4}
            durationSec={0.4}
            staggerSec={0.04}
            easing="ease-in"
            animateOnMountOnly
          />
        </p>
        <h1 className="text-5xl sm:text-8xl font-semibold mb-4 sm:mb-8 tracking-tight leading-none">
          <CenterRevealText
            text={language === "fr" ? "Tristan" : "Tristan"}
            className="block"
          />
          <CenterRevealText
            text={language === "fr" ? "Marandin" : "Marandin"}
            className="block -mt-2 sm:-mt-4"
          />
        </h1>
        <p className="text-muted-foreground mb-16">{language === "fr" ? "" : ""}</p>
        <CTAButton
          href="mailto:tristan.marandin@gmail.com"
          className="fade-up"
          style={{
            // Apparition après les badges
            // @ts-ignore CSS vars
            "--fade-up-delay": "1.6s",
            // @ts-ignore CSS vars
            "--fade-up-duration": "700ms",
            // @ts-ignore CSS vars
            "--fade-up-ease": "cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          {language === "fr"
            ? "Parlons de votre projet 👋"
            : "Let's talk about your project 👋"}
        </CTAButton>
        <div className="relative mt-8 fade-down"
          style={{
            // 1s de délai, durée 500ms, easing doux
            // @ts-ignore CSS vars
            "--fade-down-delay": "1.6s",
            // @ts-ignore CSS vars
            "--fade-down-duration": "700ms",
            // @ts-ignore CSS vars
            "--fade-down-ease": "cubic-bezier(0.22, 1, 0.36, 1)",
          }}>
          <div className="absolute bottom-0 left-0 w-full h-full">
            <div className="flex flex-col items-center">
              <ChevronDown className="w-6 h-6 text-gray-400/40" />
              <ChevronDown className="w-6 h-6 text-gray-400/20" />
              <ChevronDown className="w-6 h-6 text-gray-400/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


