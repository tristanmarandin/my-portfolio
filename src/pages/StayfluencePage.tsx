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
import StoreButtons from "@/components/StoreButtons";

const images: string[] = [
  "/projects/stayfluence.webp",
];

export default function StayfluencePage() {
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
    <main className="min-h-screen overflow-y-auto pb-16 bg-gradient-to-br to-card from-orange-900/50">
      <TitleSection
        title="Stayfluence"
        badges={[
          { label: "Flutter", variant: "outline" },
          { label: "Firebase", variant: "outline" },
          { label: "Stripe", variant: "outline" },
          { label: "iCal", variant: "outline" },
        ]}
        description={
          language === "fr"
            ? "Le Airbnb pour influenceurs : échange de contenu contre un séjour."
            : "Airbnb for influencers: exchange content for a stay."
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
                      <img src={src} alt="Stayfluence screenshot" className="max-h-[500px] object-cover" loading="lazy" />
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
                Cette application mobile est développée avec Flutter et Firebase, et permet de créer deux type de comptes différents : influenceurs et propriétaires.
              </p>
              <p className="text-muted-foreground">
                Les <strong>propriétaires</strong> renseignent les informations de leur bien et synchronisent leurs disponibilités via leur iCal Airbnb et booking.
              </p>
              <p className="text-muted-foreground">
                Les <strong>influenceurs</strong> précisent leur compte instagram, tiktok ou youtube et sont sélectionnés par rapport à leur pertinence vis à vis de l'application. Une fois sélectionnés, ils peuvent faire une demande de réservation.
              </p>
              <p className="font-semibold pt-2">
                Concept de l'application :
              </p>
              <p className="text-muted-foreground">
                Les propriétaires propose un séjour gratuit (principalement en basse saison), et l'influence propose du contenu sur ses réseaux en échange. Dans l'ordre, l'influence propose une offre de contenu pour le bien du propriétaire, qui accepte ou non l'offre. Une fois l'offre acceptée, un contrat numérique est généré. 
              </p>
            </>
          ) : (
            <>
              <p className="text-muted-foreground">
                This mobile app is built with Flutter and Firebase and supports two account types: influencers and property owners.
              </p>
              <p className="text-muted-foreground">
                <strong>Owners</strong> enter their property details and sync availability via their Airbnb and Booking iCal.
              </p>
              <p className="text-muted-foreground">
                <strong>Influencers</strong> provide their Instagram, TikTok, or YouTube account and are selected based on their relevance to the app. Once selected, they can request a booking.
              </p>
              <p className="font-semibold pt-2">
                App concept:
              </p>
              <p className="text-muted-foreground">
                Owners offer a free stay (mainly in low season), and the influencer offers content on their social channels in exchange. In order, the influencer submits a content offer for the owner's property, which the owner can accept or decline. Once accepted, a digital contract is generated.
              </p>
            </>
          )}
        </div>

        <div className="mt-16 pb-12 mr-auto">
          <div className="rounded-xl border p-4 w-full sm:w-1/2">
            <h3 className="text-sm font-medium text-muted-foreground mb-4">{language === "fr" ? "Liens" : "Links"}</h3>
            <StoreButtons
              playstore="https://play.google.com/store/apps/details?id=com.mycompany.stayfluenceapp"
              appstore="https://apps.apple.com/fr/app/stayfluence/id6473265731"
              language={language}
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row-reverse gap-3 mt-4 pb-16">
          <Link to="/beebuilder" className="w-full">
            <Button className="w-full bg-foreground text-background hover:bg-foreground/90">
              {language === "fr" ? "Voir le projet suivant (BeeBuilder)" : "See next project (BeeBuilder)"}<ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <Link to="/manta" className="w-full">
            <Button variant="outline" className="w-full">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {language === "fr" ? "Voir le projet précédent (Manta)" : "See previous project (Manta)"}
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
            alt="Stayfluence full size"
            className="max-h-[90vh] max-w-[90vw] rounded-lg border"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </main>
  );
}


