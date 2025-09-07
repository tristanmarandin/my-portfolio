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
  "/projects/manta/manta-report.webp",
];

export default function MantaPage() {
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
        title="Manta"
        badges={[
          { label: "AI" },
          { label: "React", variant: "outline" },
          { label: "Vite.js", variant: "outline" },
          { label: "Python", variant: "outline" },
          { label: "AWS", variant: "outline" },
          { label: "Docker", variant: "outline" },
          { label: "Stripe", variant: "outline" },
        ]}
        description={
          language === "fr"
            ? "Assistante IA qui prend des notes de réunion pour vous."
            : "AI assistant that takes meeting notes for you."
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
                      <img src={src} alt="Manta screenshot" className="size-full object-cover" loading="lazy" />
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
                Manta est une assistante IA qui prend les notes de réunions à votre place. C'est une application web développée en React et Serverless avec des AWS Lambda en Python, utilisant l'API de Stripe pour gérer les abonnements.
              </p>
              <p className="text-muted-foreground">
                Manta a pour but de transcrire les réunions pour permettre la génération d'un compte-rendu, et aussi pour permettre de poser des questions sur ces réunions.
              </p>
              <p className="font-semibold pt-2">
                Comment ça marche ?
              </p>
              <ul className="list-decimal pl-5 space-y-1 text-muted-foreground">
                <li>L'utilisateur renseigne le lien d'un réunion Teams ou Google Meet. À ce moment, une tache AWS ECS écrite en python est lancée. Il s'agit d'un script qui va se connecter à la réunion et lancer un enregistrement audio.</li>
                <li>Lorsque la réunion est terminée, l'audio est transcrit puis stocké.</li>
                <li>L'utilisateur peut ouvrir un chat ou générer un compte-rendu à propos de la transcription.</li>
              </ul>
            </>
          ) : (
            <>
              <p className="text-muted-foreground">
                Manta is an AI assistant that takes meeting notes for you. It is a web app built with React and a serverless backend using AWS Lambda in Python, and it uses Stripe to manage subscriptions.
              </p>
              <p className="text-muted-foreground">
                Manta transcribes meetings to enable summary generation and to let you ask questions about those meetings.
              </p>
              <p className="font-semibold pt-2">
                How does it work?
              </p>
              <ul className="list-decimal pl-5 space-y-1 text-muted-foreground">
                <li>The user provides a Teams or Google Meet link. At that moment, an AWS ECS task written in Python starts. It connects to the meeting and launches an audio recording.</li>
                <li>When the meeting ends, the audio is transcribed and stored.</li>
                <li>The user can open a chat or generate a summary based on the transcription.</li>
              </ul>
            </>
          )}
        </div>

        <div className="mt-16 pb-12 mr-auto">
          <div className="rounded-xl border p-4 w-full sm:w-1/2">
            <h3 className="text-sm font-medium text-muted-foreground">{language === "fr" ? "Liens" : "Links"}</h3>
            <div className="mt-4 flex flex-col gap-3">
              <p className="text-muted-foreground text-sm">
                Pour raison de priorité, le projet Manta a été suspendu.
              </p>
              <a href="https://www.divindata.com" target="_blank" rel="noopener noreferrer" className="w-full">
                <Button className="w-full">{language === "fr" ? "Visiter le site" : "Visit website"}</Button>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row-reverse gap-3 mt-4 pb-16">
          <Link to="/stayfluence" className="w-full">
            <Button className="w-full bg-foreground text-background hover:bg-foreground/90">
              {language === "fr" ? "Voir le projet suivant (Stayfluence)" : "See next project (Stayfluence)"}<ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <Link to="/espadon" className="w-full">
            <Button variant="outline" className="w-full">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {language === "fr" ? "Voir le projet précédent (Espadon)" : "See previous project (Espadon)"}
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
            alt="Manta full size"
            className="max-h-[90vh] max-w-[90vw] rounded-lg border"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </main>
  );
}


