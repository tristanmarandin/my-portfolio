import { memo } from "react";
import { DotBackground } from "@/components/ui/dot-background";
import Reveal from "@/components/Reveal";

type Skill = {
    name: string;
    icon: string;
};

type SkillCategory = {
    title: string;
    skills: Skill[];
};

function SkillPill({ icon, name }: Skill) {
    return (
        <div className="inline-flex items-center gap-2 rounded-md border bg-accent px-3 py-1.5 hover:bg-gray-800 transition-colors">
            <img src={icon} alt="" className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="text-sm">{name}</span>
        </div>
    );
}

const categories: SkillCategory[] = [
    {
        title: "Languages & DB",
        skills: [
            { name: "TypeScript", icon: "/skills/typescript-icon.svg" },
            { name: "Dart", icon: "/skills/dart.svg" },
            { name: "Python", icon: "/skills/python.svg" },
            { name: "Java", icon: "/skills/java.svg" },
            { name: "Rust", icon: "/skills/rust.svg" },
            { name: "PostgreSQL", icon: "/skills/postgresql.svg" },
            { name: "Drizzle", icon: "/skills/drizzle.svg" },
            { name: "Firestore", icon: "/skills/firebase.svg" },
            { name: "DynamoDB", icon: "/skills/aws-dynamodb.svg" },
        ],
    },
    {
        title: "Frameworks & Bundlers",
        skills: [
            { name: "ReactJS", icon: "/skills/react.svg" },
            { name: "Flutter", icon: "/skills/flutter.svg" },
            { name: "Tauri", icon: "/skills/tauri.svg" },
            { name: "TailwindCSS", icon: "/skills/tailwindcss-icon.svg" },
            { name: "ViteJS", icon: "/skills/vitejs.svg" },
            { name: "NextJS", icon: "/skills/nextjs-icon.svg" },
            { name: "Docker", icon: "/skills/docker-icon.svg" },
        ],
    },
    {
        title: "Cloud & API",
        skills: [
            { name: "AWS", icon: "/skills/aws.svg" },
            { name: "Vercel", icon: "/skills/vercel-icon.svg" },
            { name: "Firebase", icon: "/skills/firebase.svg" },
            { name: "Supabase", icon: "/skills/supabase-icon.svg" },
            { name: "GCP", icon: "/skills/google-cloud.svg" },
            { name: "OpenAI API", icon: "/skills/openai.svg" },
            { name: "Facebook API", icon: "/skills/meta-icon.svg" },
            { name: "Stripe API", icon: "/skills/stripe.svg" },
            { name: "Brevo API", icon: "/skills/Brevo.svg" },
            { name: "Twilio API", icon: "/skills/twilio-icon.svg" },
            { name: "Salesforce API", icon: "/skills/salesforce.svg" },
        ],
    },
];

function SkillsSection() {
    return (
        <DotBackground>
            <section id="skills" className="relative min-h-dvh h-fit snap-start py-16">
                <div className="mx-auto max-w-6xl px-6 h-full flex flex-col justify-center">
                    <Reveal>
                        <header className="mb-10 sm:mb-12">
                            <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
                                Compétences
                            </h2>
                            <p className="mt-3 text-center text-muted-foreground">
                                La collections d’outils qui me permet de créer tous les jours.
                            </p>
                        </header>
                    </Reveal>

                    <div className="grid grid-cols-1 max-w-lg mx-auto gap-8">
                        {categories.map((category, index) => (
                            <Reveal key={category.title} delay={(index + 1) * 100}>
                                <div className="space-y-3">
                                    <h3 className="text-sm font-medium tracking-wide text-muted-foreground text-center">
                                        {category.title}
                                    </h3>
                                    <div className="flex flex-wrap gap-2 justify-center">
                                        {category.skills.map((skill) => (
                                            <SkillPill key={skill.name} {...skill} />
                                        ))}
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>
        </DotBackground>
    );
}

export default memo(SkillsSection);

