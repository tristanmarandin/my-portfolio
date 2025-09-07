import { useLanguage } from "@/context/LanguageContext";
import { GridSmallBackground } from "@/components/ui/grid-background";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "@/components/Reveal";

type Project = {
    id: string;
    title: string;
    descriptionFr: string;
    descriptionEn: string;
    image: string;
    to?: string;
    href?: string;
    tags: string[];
    color?: string;
};

const projects: Project[] = [
    {
        id: "tookan",
        title: "Tookan",
        to: "/tookan",
        descriptionFr: "Tookan est un logiciel d'assistance aux visio qui donne des conseils IA en temps réel.",
        descriptionEn: "Tookan is a software that gives real-time AI advice during visio-meeting.",
        image: "/tookan.webp",
        tags: ["AI", "React", "rust", "AWS", "Docker"],
        color: "green",
    },
    {
        id: "piknic",
        title: "Piknic",
        to: "/piknic",
        descriptionFr: "Piknic une application mobile qui permet de rencontrer des inconnus autour d'un pique-nique.",
        descriptionEn: "Piknic is a mobile app that allows you to meet strangers around a picnic.",
        image: "/piknic.webp",
        tags: ["Flutter", "Firebase", "UI/UX", "Stripe"],
        color: "lime",
    },
    {
        id: "prospeak-ai",
        title: "Prospeak AI",
        to: "/prospeak-ai",
        descriptionFr: "Prospeak AI est une application web qui automatise la création de publicités Facebook avec l'IA.",
        descriptionEn: "Prospeak AI is a web app that automates the creation of Facebook ads with AI.",
        image: "/prospeak.webp",
        tags: ["AI", "React", "python", "AWS"],
        color: "blue",
    },
    {
        id: "espadon",
        title: "Espadon",
        to: "/espadon",
        descriptionFr: "Espadon est une plateforme web qui regroupe plusieurs outils d'optimisation et fiabilisation avec l'IA.",
        descriptionEn: "Espadon is a web platform that groups several optimization and reliability tools with AI.",
        image: "/espadon.webp",
        tags: ["AI", "React", "Java", "python", "AWS"],
        color: "indigo",
    },
    {
        id: "manta",
        title: "Manta",
        to: "/manta",
        descriptionFr: "Manta est une assistante IA qui prend des notes de réunion pour vous.",
        descriptionEn: "Manta is an AI assistant that takes notes of your meetings for you.",
        image: "/manta.webp",
        tags: ["AI", "React", "python", "AWS", "Stripe"],
        color: "indigo",
    },
    // {
    //     id: "divindata",
    //     title: "Divindata",
    //     to: "https://www.divindata.com",
    //     descriptionFr: "Divindata est un site web qui permet de gérer vos tâches et vos projets.",
    //     descriptionEn: "Divindata is a web site that allows you to manage your tasks and projects.",
    //     image: "/divindata/divindata-home.webp",
    //     tags: ["AI", "React", "AWS"],
    //     color: "indigo",
    // },
    {
        id: "stayfluence",
        title: "Stayfluence",
        to: "/stayfluence",
        descriptionFr: "Stayfluence est le Airbnb pour les influenceurs : ils échangent du contenu contre un séjour.",
        descriptionEn: "Stayfluence is the Airbnb for influencers: they exchange content for a stay.",
        image: "/stayfluence.webp",
        tags: ["Flutter", "Firebase", "Stripe"],
        color: "orange",
    },
    {
        id: "beebuilder",
        title: "Beebuilder",
        to: "/beebuilder",
        descriptionFr: "Beebuilder est une plateforme de mise en relation entre maîtres d'œuvre et contractuels en Afrique de l'Ouest.",
        descriptionEn: "Beebuilder is a platform that connects master builders and contractors in West Africa.",
        image: "/beebuilder.webp",
        tags: ["React", "python", "AWS"],
        color: "amber",
    }
];

function ProjectCard({ project }: { project: Project }) {
    const { language } = useLanguage();

    const card = (
        <article className={cn(
            "h-full flex flex-col group relative mx-auto w-full max-w-md rounded-xl border border-gray-800 bg-card text-card-foreground shadow-sm transition-all hover:shadow-lg cursor-pointer focus backdrop-blur-sm duration-300",
            {
                "bg-gradient-to-b from-card to-green-900/50 border-green-900": project.color === "green",
                "bg-gradient-to-b from-card to-blue-900/50 border-blue-900": project.color === "blue",
                "bg-gradient-to-b from-card to-indigo-900/50 border-indigo-900": project.color === "indigo" || !project.color,
                "bg-gradient-to-b from-card to-lime-900/50 border-lime-900": project.color === "lime",
                "bg-gradient-to-b from-card to-amber-900/50 border-amber-900": project.color === "amber",
                "bg-gradient-to-b from-card to-orange-900/50 border-orange-900": project.color === "orange",
            }
        )}>
            <div
                className={cn(
                    "pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300",
                    {
                        "bg-gradient-to-b from-card to-green-800/50 group-hover:opacity-100 group-focus:opacity-100": project.color === "green",
                        "bg-gradient-to-b from-card to-blue-800/50 group-hover:opacity-100 group-focus:opacity-100": project.color === "blue",
                        "bg-gradient-to-b from-card to-indigo-800/50 group-hover:opacity-100 group-focus:opacity-100": project.color === "indigo" || !project.color,
                        "bg-gradient-to-b from-card to-lime-800/50 group-hover:opacity-100 group-focus:opacity-100": project.color === "lime",
                        "bg-gradient-to-b from-card to-amber-800/50 group-hover:opacity-100 group-focus:opacity-100": project.color === "amber",
                        "bg-gradient-to-b from-card to-orange-800/50 group-hover:opacity-100 group-focus:opacity-100": project.color === "orange",
                    }
                )}
            />
            <div className="p-4 relative z-10">
                <div className="relative aspect-[16/9] overflow-hidden rounded-xl border">
                    <img
                        src={"/projects" + project.image}
                        alt=""
                        className="size-full object-cover object-top-left transition-transform duration-500 group-hover:scale-[1.03]"
                        loading="lazy"
                    />
                </div>
            </div>

            <div className="flex-1 pb-6 flex flex-col justify-between relative z-10">
                <div className="px-5 sm:px-6 flex-1">

                    <h3 className="text-xl font-semibold leading-snug">
                        {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                        {language === "fr" ? project.descriptionFr : project.descriptionEn}
                    </p>
                </div>


                <div className="px-4 mt-6 flex items-center justify-between">
                    <div className="flex items-center gap-1">
                        {project.tags.map((tag) => (
                            <Badge variant={tag == "AI" ? "default" : "outline"} key={tag}>{tag}</Badge>
                        ))}
                    </div>
                </div>
            </div>
        </article>
    );

    if (project.to) {
        if (project.to.startsWith("https")) {
            return (
                <a href={project.to} target="_blank" rel="noopener noreferrer" className=" h-full">
                    {card}
                </a>
            );
        }
        return (
            
            <Link to={project.to} className="h-full" aria-label={`${project.title} ${language === "fr" ? "- Ouvrir" : "- Open"}`}>
                {card}
            </Link>
        );
    }

    return card;
}

export default function ProjectsSection() {
    const { language } = useLanguage();

    return (
        <section id="projects" className="h-dvh relative snap-start overflow-hidden flex flex-col items-center justify-center">
            <GridSmallBackground className="py-20 sm:py-24 md:py-28 min-h-[42rem]">
                <div className="mx-auto max-w-6xl px-6">
                    <Reveal>
                        <header className="mb-10 sm:mb-12">
                            <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
                                {language === "fr" ? "Mes projets récents" : "Recent Projects"}
                            </h2>
                            <p className="mt-3 text-center text-muted-foreground">
                                {language === "fr"
                                    ? "Sélection de travaux et d'expérimentations."
                                    : "A selection of work and experiments."}
                            </p>
                        </header>
                    </Reveal>

                    <Reveal delay={100}>
                        <div className="relative">
                            <Carousel
                                className="mx-auto max-w-5xl"
                                opts={{ align: "start", loop: true }}
                            >
                                <CarouselContent >
                                    {projects.map((p) => (
                                        <CarouselItem key={p.id} className="basis-full sm:basis-1/2 lg:basis-1/2 xl:basis-1/3">
                                            <ProjectCard project={p} />
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <CarouselPrevious className="-left-4 sm:-left-8" />
                                <CarouselNext className="-right-4 sm:-right-8" />
                            </Carousel>
                        </div>
                    </Reveal>
                </div>
                <Reveal delay={200}>
                    <div className="flex items-center w-full text-sm text-muted-foreground/80 mt-8">
                        <p className="mx-auto ">{language === "fr" ? "Vous ne voyez pas votre projet ici ?" : "You don't see your project here?"} <a href="mailto:tristan.marandin@gmail.com" className="underline">{language === "fr" ? "Contactez-moi" : "Contact me"}<ArrowUpRight className="w-4 h-4 inline-block" /></a> </p>
                    </div>
                </Reveal>
            </GridSmallBackground>
        </section>
    );
}


