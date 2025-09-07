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
  "/projects/beebuilder/BeeBuilderHome.webp",
  "/projects/beebuilder/BeeBuilderProjects.webp",
  "/projects/beebuilder/BeeBuilderProject.webp",
  "/projects/beebuilder/BeeBuilderProjectEdit.webp",
  "/projects/beebuilder/BeeBuilderOfferEdit.webp",
  "/projects/beebuilder/BeeBuilderJobOffer.webp",
  "/projects/beebuilder/BeeBuilderSearch.webp",
  "/projects/beebuilder/BeeBuilderProfile.webp",
  "/projects/beebuilder/BeeBuilderChats.webp",
  "/projects/beebuilder/BeeBuilderchat.webp",
];

export default function BeebuilderPage() {
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
    <main className="min-h-screen overflow-y-auto pb-16 bg-gradient-to-br to-card from-amber-900/50">
      <TitleSection
        title="Beebuilder"
        badges={[
          { label: "React", variant: "outline" },
          { label: "Vite.js", variant: "outline" },
          { label: "Python", variant: "outline" },
          { label: "AWS", variant: "outline" },
        ]}
        description={
          language === "fr"
            ? "Plateforme de mise en relation entre maîtres d'œuvre et contractuels en Afrique de l'Ouest."
            : "Platform connecting master builders and contractors in West Africa."
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
                      <img src={src} alt="Beebuilder screenshot" className="size-full object-cover" loading="lazy" />
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
                Beebuilder est une plateforme développée en React et Python en serveless sur AWS. C'est une plateforme de mise en relation classique qui s'adresse aux maîtres d'oeuvre et aux contractuels.
              </p>
              <p>
                La plateforme propose plusieurs fonctionnalités :
              </p>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>
                  Un <strong>espace maître d'oeuvre</strong> pour créer des projets et gérer les offres.
                </li>
                <li>
                  Un <strong>espace contractuel</strong>, pour créer un profil et postuler à des offres de missions selon leurs critères.
                </li>
                <li>
                  Un <strong>espace de messagerie</strong> pour communiquer avec les maîtres d'oeuvre et les contractuels.
                </li>
              </ul>
            </>
          ) : (
            <>
              <p className="text-muted-foreground">
                Beebuilder is a platform built with React and a serverless Python backend on AWS. It connects master builders and contractors.
              </p>
              <p>
                The platform offers several features:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>
                  A <strong>master builder area</strong> to create projects and manage offers.
                </li>
                <li>
                  A <strong>contractor area</strong>, to create a profile and apply to job offers based on their criteria.
                </li>
                <li>
                  A <strong>messaging area</strong> to communicate between master builders and contractors.
                </li>
              </ul>
            </>
          )}
        </div>

        <div className="mt-16 pb-12 mr-auto">
          <div className="rounded-xl border p-4 w-full sm:w-1/2">
            <h3 className="text-sm font-medium text-muted-foreground">{language === "fr" ? "Liens" : "Links"}</h3>
            <div className="mt-4 flex flex-col gap-3">
              <a href="https://www.beebuilder.co" target="_blank" rel="noopener noreferrer" className="w-full">
                <Button className="w-full">{language === "fr" ? "Visiter le site" : "Visit website"}</Button>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row-reverse gap-3 mt-4 pb-16">
          <Link to="/tookan" className="w-full">
            <Button className="w-full bg-foreground text-background hover:bg-foreground/90">{language === "fr" ? "Voir le projet suivant (Tookan)" : "See next project (Tookan)"}<ArrowRight className="w-4 h-4" /></Button>
          </Link>
          <Link to="/stayfluence" className="w-full">
            <Button variant="outline" className="w-full">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {language === "fr" ? "Voir le projet précédent (Stayfluence)" : "See previous project (Stayfluence)"}
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
            alt="Beebuilder full size"
            className="max-h-[90vh] max-w-[90vw] rounded-lg border"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </main>
  );
}


