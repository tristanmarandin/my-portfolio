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
    "/projects/tookan/tookan-home.webp",
    "/projects/tookan/tookan-calls.webp",
    "/projects/tookan/tookan-call-eval.webp",
    "/projects/tookan/tookan-email.webp",
    "/projects/tookan/tookan-template-email.webp",
    "/projects/tookan/tookan-crm.webp",
    "/projects/tookan/tookan-template-crm.webp",
    "/projects/tookan/tookan-template-config.webp",
    "/projects/tookan/tookan-add-crm-field.webp",
    "/projects/tookan/tookan-report.webp",
];

export default function TookanPage() {
    const { language } = useLanguage();
    const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setLightboxSrc(null);
            }
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, []);

    return (
        <main className="min-h-screen overflow-y-auto pb-16 bg-gradient-to-br to-card from-green-900/50">
            <TitleSection
                title="Tookan"
                badges={[
                    { label: "AI" },
                    { label: "React", variant: "outline" },
                    { label: "Vite.js", variant: "outline" },
                    { label: "Rust", variant: "outline" },
                    { label: "Tauri", variant: "outline" },
                    { label: "AWS", variant: "outline" },
                    { label: "API Salesforce", variant: "outline" },
                    { label: "Docker", variant: "outline" },
                ]}
                description={
                    language === "fr"
                        ? "Tookan est un logiciel d'assistance aux visio qui donne des conseils IA en temps réel."
                        : "Tookan is a software that gives real-time AI advice during video calls."
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
                                            <img src={src} alt="Tookan screenshot" className="size-full object-cover" loading="lazy" />
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
                                C’est un logiciel développé avec le framework Tauri permettant d’allier l’élégance d’un frontend en React avec la robustesse d’un backend en Rust.
                            </p>

                            <div className="space-y-2">
                                <p>
                                    Le logiciel permet d’obtenir des conseils IA générés en temps réel durant une réunion en visio :
                                </p>
                                <ol className="list-decimal pl-5 space-y-1 text-muted-foreground">
                                    <li>Le logiciel capture le son de l’ordinateur et l’envoi sur une EC2 AWS, via WebSocket</li>
                                    <li>Le son est transcrit en texte avec le modèle de TTS Whisper.</li>
                                    <li>Un LLM génère un conseil à partir de l’historique de la conversation et les objectifs</li>
                                    <li>Le serveur renvoi le conseil au client, qui l’affiche dans un overlay invisible à l’enregistrement d’écran</li>
                                </ol>
                            </div>

                            <div className="space-y-2">
                                <p>
                                    Une fois l’appel terminé, Tookan offre un certain nombre de fonctionnalités supplémentaires :
                                </p>
                                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                                    <li>
                                        <span className="font-medium">Évaluation de l’appel</span> : permet d’évaluer l’appel, utile pour un meilleur onboarding des nouveaux sales
                                    </li>
                                    <li>
                                        <span className="font-medium">Remplissage automatique du CRM</span> : d’après la transcription de l’appel, un LLM se charge de remplir le CRM connecté (Salesforce, Hubspot, etc.)
                                    </li>
                                    <li>
                                        <span className="font-medium">Compte rendu et Email de suivi</span> : un LLM se charge de les générer pour gagner du temps
                                    </li>
                                </ul>
                            </div>

                            <p>
                                Enfin, pour que les actions IA soient plus pertinentes, toutes les fonctionnalités précédentes sont personnalisables à partir d’instructions en langage naturel.
                            </p>
                            <p>
                                Pourquoi Python ?
                            </p>
                            <p className="text-muted-foreground">
                                À première vue, faire du python à côté du Rust peut paraitre étonnant, mais l'intérêt du python réside dans la maturité de son écosystème en terme d'IA, notamment avec Pytorch et Hugging Face. De plus, on ne perd pas de perfomances sur de telles librairies qui tournent en C++ sous le capot.
                            </p>
                        </>
                    ) : (
                        <>
                            <p className="text-muted-foreground">
                                Built with the Tauri framework, combining the elegance of a React frontend with the robustness of a Rust backend.
                            </p>

                            <div className="space-y-2">
                                <p>The software provides real‑time AI guidance during video meetings:</p>
                                <ol className="list-decimal pl-5 space-y-1 text-muted-foreground">
                                    <li>The app captures computer audio and streams it to an AWS EC2 over WebSocket</li>
                                    <li>Audio is transcribed to text using Whisper</li>
                                    <li>An LLM generates guidance based on conversation history and objectives</li>
                                    <li>The server returns the guidance to the client, displayed in an overlay invisible to screen recording</li>
                                </ol>
                            </div>

                            <div className="space-y-2">
                                <p>After the call, Tookan offers additional features:</p>
                                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                                    <li>
                                        <span className="font-medium">Call evaluation</span>: assess the call, useful for onboarding new sales reps
                                    </li>
                                    <li>
                                        <span className="font-medium">Automatic CRM filling</span>: based on the transcript, an LLM fills the connected CRM (Salesforce, HubSpot, etc.)
                                    </li>
                                    <li>
                                        <span className="font-medium">Meeting report and follow‑up email</span>: generated by an LLM to save time
                                    </li>
                                </ul>
                            </div>

                            <p>
                                To make AI actions more relevant, all features are customizable using natural‑language instructions.
                            </p>
                            <p>
                                Why Python?
                            </p>
                            <p className="text-muted-foreground">
                                At first glance, it may seem surprising to do Python alongside Rust, but the interest of Python lies in the maturity of its ecosystem in terms of AI, particularly with Pytorch and Hugging Face. Moreover, we don't lose performance on such libraries that run in C++ under the hood.
                            </p>
                        </>
                    )}
                </div>

                <div className="mt-16 pb-12 mr-auto">
                    <div className="rounded-xl border p-4 w-full sm:w-1/2">
                        <h3 className="text-sm font-medium text-muted-foreground">
                            {language === "fr" ? "Liens" : "Links"}
                        </h3>
                        <div className="mt-4 flex flex-col gap-3">
                            <p className="text-sm text-muted-foreground">{language === "fr" ? "Ce logiciel n’est plus disponible au public." : "This software is no longer available to the public."}</p>
                            
                        </div>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row-reverse gap-3 mt-4 pb-16">
                    <Link to="/piknic" className="w-full">
                        <Button className="w-full bg-foreground text-background hover:bg-foreground/90">
                            {language === "fr" ? "Voir le projet suivant (Piknic)" : "See next project (Piknic)"}<ArrowRight className="w-4 h-4" />
                        </Button>
                    </Link>
                    <Link to="/beebuilder" className="w-full">
                        <Button variant="outline" className="w-full">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            {language === "fr" ? "Voir le projet précédent (Beebuilder)" : "See previous project (Beebuilder)"}
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
                        alt="Tookan full size"
                        className="max-h-[90vh] max-w-[90vw] rounded-lg border"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </main>
    );
}


