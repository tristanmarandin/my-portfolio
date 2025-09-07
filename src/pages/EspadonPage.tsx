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
  "/projects/espadon/espadon-product-sheet.webp",
  "/projects/espadon/espadon-inventory.webp",
  "/projects/espadon/espadon-siren.webp",
];

export default function EspadonPage() {
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
    <main className="min-h-screen overflow-y-auto pb-16 bg-gradient-to-br to-card from-indigo-900/50">
      <TitleSection
        title="Espadon"
        badges={[
          { label: "AI" },
          { label: "React", variant: "outline" },
          { label: "Vite.js", variant: "outline" },
          { label: "Java", variant: "outline" },
          { label: "Python", variant: "outline" },
          { label: "AWS", variant: "outline" },
        ]}
        description={
          language === "fr"
            ? "Plateforme web regroupant plusieurs outils d’optimisation et de fiabilisation avec l’IA."
            : "Web platform grouping several optimization and reliability tools with AI."
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
                      <img src={src} alt="Espadon screenshot" className="size-full object-cover" loading="lazy" />
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
                Espadon combine plusieurs services (fiches produit, inventaires, vérification SIREN) en s’appuyant sur un front React, un backend Java déployés sur AWS et des fonctions Python serverless pour les process.
              </p>
              <p>
                Les deux services principaux d'Espadon sont la saisie automatique de l'inventaire et la génération de bases de données. Les autres sont des services basiques, qui constituent des interfaces pour des API tierces.
              </p>
              <p className="font-semibold pt-2">
                Saisie automatique de l'inventaire
              </p>
              <p className="text-muted-foreground">
                Ce service répond à un besoin qu'ont les négociants de bois à fiabiliser la saisie de leurs inventaires. À partir des fiches d'inventaires remplient à la mains par les employés, l'outil extrait en quelques minutes les données sous format Excel, avec 94% de précision.
              </p>
              <p className="text-muted-foreground">
                L'outil mélange de la Computer Vision avec de l'extraction par LLM pour fiabiliser au maximum l'extraction de l'écriture manuscrite. De plus, l'outil va renseigner un score de confiance pour chaque ligne extraite, pour faciliter le contrôle humain.
              </p>
              <p className="font-semibold pt-2">
                Génération de bases de données
              </p>
              <p className="text-muted-foreground">
                Ce service répond à un deuxième besoin qu'ont les négociants de matériaux : compléter et structurer leur base de données articles. L'outil permet d'extraire les caractéristiques d'un produit, à partir de sources variées (pdf, excel, sites web).
              </p>
            </>
          ) : (
            <>
              <p className="text-muted-foreground">
                Espadon combines several services (product sheets, inventory entry, SIREN verification) powered by a React frontend, Java backend deployed on AWS, and serverless Python functions for processing.
              </p>
              <p>
                The two main services are automatic inventory entry and database generation. Others are more basic and mainly provide interfaces to third‑party APIs.
              </p>
              <p className="font-semibold pt-2">
                Automatic inventory entry
              </p>
              <p className="text-muted-foreground">
                This service addresses timber traders’ need to make inventory entry more reliable. From hand‑filled inventory sheets, the tool extracts the data into Excel within minutes, achieving 94% accuracy.
              </p>
              <p className="text-muted-foreground">
                The tool blends Computer Vision with LLM‑based extraction to maximize the reliability of handwriting recognition. It also assigns a confidence score to each extracted line to facilitate human review.
              </p>
              <p className="font-semibold pt-2">
                Database generation
              </p>
              <p className="text-muted-foreground">
                This service addresses a second need for materials merchants: completing and structuring their product databases. The tool extracts product characteristics from various sources (PDF, Excel, websites).
              </p>
            </>
          )}
        </div>

        <div className="mt-16 pb-12 mr-auto">
          <div className="rounded-xl border p-4 w-full sm:w-1/2">
            <h3 className="text-sm font-medium text-muted-foreground">{language === "fr" ? "Liens" : "Links"}</h3>
            <div className="mt-4 flex flex-col gap-3">
              <a href="https://www.divindata.com" target="_blank" rel="noopener noreferrer" className="w-full">
                <Button className="w-full">{language === "fr" ? "Visiter le site" : "Visit website"}</Button>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row-reverse gap-3 mt-4 pb-16">
          <Link to="/manta" className="w-full">
            <Button className="w-full bg-foreground text-background hover:bg-foreground/90">
              {language === "fr" ? "Voir le projet suivant (Manta)" : "See next project (Manta)"}<ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <Link to="/prospeak-ai" className="w-full">
            <Button variant="outline" className="w-full">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {language === "fr" ? "Voir le projet précédent (Prospeak AI)" : "See previous project (Prospeak AI)"}
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
            alt="Espadon full size"
            className="max-h-[90vh] max-w-[90vw] rounded-lg border"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </main>
  );
}


