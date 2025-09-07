import TitleSection from "@/sections/TitleSection";
import { useLanguage } from "@/context/LanguageContext";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowRight, X, ArrowLeft } from "lucide-react";

const images: string[] = [
  "/projects/prospeak/prospeak-home.webp",
  "/projects/prospeak/prospeak-generate-ad.webp",
  "/projects/prospeak/prospeak-gallery.webp",
  "/projects/prospeak/prospeak-agent-confg.webp",
];

export default function ProspeakAIPage() {
  const { language } = useLanguage();
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxSrc(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <main className="min-h-screen overflow-y-auto pb-16 bg-gradient-to-br to-card from-blue-900/50">
      <TitleSection
        title="Prospeak AI"
        badges={[
          { label: "AI" },
          { label: "React", variant: "outline" },
          { label: "Vite.js", variant: "outline" },
          { label: "API Facebook", variant: "outline" },
          { label: "Python", variant: "outline" },
          { label: "AWS", variant: "outline" },
          { label: "Stripe", variant: "outline" },
        ]}
        description={
          language === "fr"
            ? "Application web automatisant la création de publicités à l’aide de l’IA."
            : "Web app that automates ad creation using AI."
        }
      />

      <section className="mx-auto max-w-6xl px-6">
        <div className="relative">
          <Carousel className="mx-auto max-w-4xl" opts={{ align: "start", loop: true }}>
            <CarouselContent>
              {images.map((src) => (
                <CarouselItem key={src} className="basis-full">
                  <div className="p-2">
                    <div
                      className="relative overflow-hidden rounded-xl border cursor-zoom-in"
                      role="button"
                      tabIndex={0}
                      onClick={() => setLightboxSrc(src)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setLightboxSrc(src);
                        }
                      }}
                    >
                      <img src={src} alt="Prospeak screenshot" className="size-full object-cover" loading="lazy" />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4 sm:-left-8" />
            <CarouselNext className="-right-4 sm:-right-8" />
          </Carousel>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 mt-12">
        <header>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            {language === "fr" ? "Détails techniques" : "Technical details"}
          </h2>
        </header>

        <div className="mt-6 space-y-6">
          {language === "fr" ? (
            <>
              <p className="text-muted-foreground">
                Prospeak AI simplifie la création de publicités Facebook avec l'IA, rendant accessible cette tâche aux petites entreprises qui n'ont pas le temps ou les compétences pour le faire. Toute personne ayant navigué sur l'application de Meta Business comprend l'intérêt d'un tel outil...
              </p>
              <p>
                L'application propose plusieurs fonctionnalités :
              </p>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>Un <strong>onboarding</strong> via un chatbot, qui pose des questions sur votre projet et vos objectifs, afin de configurer des campagnes publicitaires.</li>
                <li>Un <strong>interface</strong> pour générer des images pour des publicités professionnelles.</li>
                <li>Un <strong>agent IA</strong> qui répond automatiquement aux messages Messenger, selon les instructions données. L'agent va aussi poser des questions pour récupérer les informations de contact des prospects.</li>
              </ul>
              <p>
                L'application est développée en React, avec un backend serverless Python via des AWS Lambdas, et elle utilise Stripe pour les abonnements.
              </p>
            </>
          ) : (
            <>
              <p className="text-muted-foreground">
                Prospeak AI streamlines Facebook ad creation with AI, making it accessible for small businesses that don’t have the time or expertise. Anyone who has navigated on Meta Business can appreciate the value of such a tool...
              </p>
              <p>
                The app offers several features:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>An <strong>onboarding</strong> flow via a chatbot that asks about your project and goals to configure ad campaigns.</li>
                <li>An <strong>interface</strong> to generate images for professional ads.</li>
                <li>An <strong>AI agent</strong> that automatically replies to Messenger messages based on your instructions, and asks questions to collect lead contact information.</li>
              </ul>
              <p>
                The app is built in React, with a serverless Python backend using AWS Lambdas, and it uses Stripe for subscriptions.
              </p>
            </>
          )}
        </div>

        <div className="mt-16 pb-12 mr-auto">
          <div className="rounded-xl border p-4 w-full sm:w-1/2">
            <h3 className="text-sm font-medium text-muted-foreground">{language === "fr" ? "Liens" : "Links"}</h3>
            <div className="mt-4 flex flex-col gap-3">
              <a href="https://prospeak.ai" target="_blank" rel="noopener noreferrer" className="w-full">
                <Button className="w-full">{language === "fr" ? "Visiter le site" : "Visit website"}</Button>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row-reverse gap-3 mt-4 pb-16">
          <Link to="/espadon" className="w-full">
            <Button className="w-full bg-foreground text-background hover:bg-foreground/90">
              {language === "fr" ? "Voir le projet suivant (Espadon)" : "See next project (Espadon)"}<ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <Link to="/piknic" className="w-full">
            <Button variant="outline" className="w-full">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {language === "fr" ? "Voir le projet précédent (Piknic)" : "See previous project (Piknic)"}
            </Button>
          </Link>
        </div>
      </section>

      {lightboxSrc && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center"
          onClick={() => setLightboxSrc(null)}
        >
          <button
            aria-label={language === "fr" ? "Fermer" : "Close"}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxSrc(null);
            }}
          >
            <X className="w-5 h-5 text-white" />
          </button>
          <img
            src={lightboxSrc}
            alt="Prospeak full size"
            className="max-h-[90vh] max-w-[90vw] rounded-lg border"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </main>
  );
}


