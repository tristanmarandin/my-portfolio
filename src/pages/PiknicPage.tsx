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
import { X, ArrowRight, ArrowLeft } from "lucide-react";
import StoreButtons from "@/components/StoreButtons";

const images: string[] = [
  "/projects/piknic/piknic-presentation.webp",
];

export default function PiknicPage() {
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
    <main className="min-h-screen overflow-y-auto pb-16 bg-gradient-to-br to-card from-lime-900/50">
      <TitleSection
        title="Piknic"
        badges={[
          { label: "Flutter", variant: "outline" },
          { label: "Firebase", variant: "outline" },
          { label: "Stripe", variant: "outline" },
          { label: "UI/UX", variant: "outline" },
        ]}
        description={
          language === "fr"
            ? "Application mobile pour rencontrer des inconnus autour d’un pique‑nique."
            : "Mobile app to meet strangers around a picnic."
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
                      <img src={src} alt="Piknic screenshot" className="size-full object-cover" loading="lazy" />
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
                Piknic est une application mobile développée avec Flutter, en dart, utilisant Firebase comme solution cloud.</p>
              <p className="text-muted-foreground">Elle suit la clean architecture, architecture idéale pour segmenter les responsabilités dont les trois principaux avantages sont :</p>
              <ul className="list-decimal list-inside text-muted-foreground">
                <li>Le code est plus facile à maintenir</li>
                <li>Facilité pour développer à plusieurs sur des segments différents</li>
                <li>Le code est plus lisible et facile à comprendre</li>
              </ul>
              <p className="text-muted-foreground">
                L'application permet aux utilisateurs de s'inscrire à des Piknic pour rencontrer une dizaine d'inconnus dans leur ville.
              </p>
              <p>
                Comment ça marche ?
              </p>
              <p className="text-muted-foreground">
                Dans l'ordre, l'utilisateur s'inscrit à une date, puis 3 jours avant l'évènement, il découvre le noms des autres participants avec qui il peut s'organiser sur les choses à ramener. Pour cela, une discussion de groupe est ouverte et une interface organisée par catégories leur permet de renseigner facilement ces éléments.
              </p>
              <p className="text-muted-foreground">
                Un effort particulier a été fait sur l'UI/UX, notamment en utilisant un style Néo-Burtalisme et des illustrations accueillantes.
              </p>

            </>
          ) : (
            <>
              <p className="text-muted-foreground">
                Piknic is a mobile app built with Flutter (Dart) and Firebase (Auth, Firestore, Storage).
              </p>
              <p className="text-muted-foreground">
                It follows Clean Architecture to clearly separate responsibilities. The main benefits are:
              </p>
              <ul className="list-decimal list-inside text-muted-foreground">
                <li>Easier maintenance over time</li>
                <li>Smoother collaboration across independent feature areas</li>
                <li>More readable and easier-to-understand code</li>
              </ul>
              <p className="text-muted-foreground">
                The app lets users register for a Piknic to meet around ten strangers in their city.
              </p>
              <p>
                How does it work?
              </p>
              <p className="text-muted-foreground">
                Users first register for a date. Three days before the event, they discover the other participants and can coordinate what to bring. A group chat is opened, and a category-based interface helps everyone quickly fill in the items they will bring.
              </p>
              <p className="text-muted-foreground">
                Special care was given to the UI/UX, using a neo-brutalism style and friendly illustrations.
              </p>
            </>
          )}
        </div>

        <div className="mt-16 pb-12 mr-auto">
          <div className="rounded-xl border p-4 w-full sm:w-1/2">
            <h3 className="text-sm font-medium text-muted-foreground">{language === "fr" ? "Liens" : "Links"}</h3>
            <div className="flex flex-col gap-3 mt-4">


              <StoreButtons
                playstore="https://play.google.com/store/apps/details?id=fun.piknic&hl=fr"
                appstore="https://apps.apple.com/fr/app/piknic/id6747728731"
                language={language}
              />
              <a href="http://piknic.fun/" target="_blank" rel="noopener noreferrer" className="w-full">
                <Button className="w-full">{language === "fr" ? "Visiter le site" : "Visit website"}</Button>
              </a>

            </div>

          </div>
        </div>
        <div className="flex flex-col sm:flex-row-reverse gap-3 mt-4 pb-16">
          <Link to="/prospeak-ai" className="w-full">
            <Button className="w-full bg-foreground text-background hover:bg-foreground/90">{language === "fr" ? "Voir le projet suivant (Prospeak AI)" : "See next project (Prospeak AI)"}<ArrowRight className="w-4 h-4" /></Button>
          </Link>
          <Link to="/tookan" className="w-full">
            <Button variant="outline" className="w-full">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {language === "fr" ? "Voir le projet précédent (Tookan)" : "See previous project (Tookan)"}
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
            alt="Piknic full size"
            className="max-h-[90vh] max-w-[90vw] rounded-lg border"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </main>
  );
}


