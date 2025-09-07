import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";

type TitleBadge = {
  label: string;
  variant?: "default" | "primary" | "secondary" | "destructive" | "outline";
};

type TitleSectionProps = {
  title: ReactNode;
  description?: ReactNode;
  badges?: TitleBadge[];
  className?: string;
};

export default function TitleSection({
  title,
  description,
  badges = [],
  className,
}: TitleSectionProps) {
  const navigate = useNavigate();
  const { language } = useLanguage();
  return (
    <section className={cn("mx-auto max-w-4xl px-6 py-8", className)}>
      <div className="flex items-center gap-2 mb-4">
        <Button variant="ghost" onClick={() => navigate("/#projects")} className="text-muted-foreground hover:bg-transparent">
          <ArrowLeft className="w-4 h-4" />{language === "fr" ? "Retour aux projets" : "Back to projects"}
        </Button>
      </div>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
        {title}
      </h1>
      {badges.length > 0 ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {badges.map((b) => (
            <Badge key={`${String(b.label)}-${b.variant ?? "default"}`} variant={b.variant ?? "default"}>
              {b.label}
            </Badge>
          ))}
        </div>
      ) : null}
      {description ? (
        <p className="mt-4 text-muted-foreground leading-relaxed">{description}</p>
      ) : null}
    </section>
  );
}


