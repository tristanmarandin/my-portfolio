import { ArrowDown } from "lucide-react";
import CTAButton from "@/components/CTAButton";
import Reveal from "@/components/Reveal";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutSection() {
  const { language } = useLanguage();
  return (
    <section className="relative h-dvh snap-start overflow-hidden border-t border-b border-dashed border-neutral-700">
      {/* Image à droite */}
      <div aria-hidden className="absolute right-0 top-0 bottom-0 w-1/2 -z-20">
        <img
          src="/tristan-marandin.webp"
          alt=""
          className="h-full w-full object-cover object-center"
        />
        {/* Effet ombragé sur les bords */}
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/20 to-black/60"></div>
      </div>

      {/* Fond sombre pour le texte à gauche */}
      <div
        aria-hidden
        className="absolute left-0 top-0 bottom-0 w-1/2 -z-10 bg-black/80"
      />

      <div className="relative z-10 h-full flex items-center">
        <div className="w-1/2 px-6 sm:px-8 md:px-16 text-white">
          <Reveal>
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-semibold mb-4 sm:mb-6 tracking-tight">
              {language === "fr" ? "Qui suis‑je ?" : "About me"}
            </h2>
          </Reveal>
          <Reveal delay={100}>
          <div className="w-full space-y-4 leading-6 sm:leading-7 text-base sm:text-lg md:text-xl text-neutral-300">
            {language === "fr" ? (
              <>
                <p>
                  Ingénieur des Mines et spécialisé en Intelligence Artificielle et Logiciel,
                  j’ai travaillé sur des projets variés : R&D en intelligence artificielle, Cloud computing, Développements d’applications GenAI, Design UI/UX, Application mobiles et web.
                </p>
                <p>Je m'adapte rapidement et j'aime relever des défis uniques.</p>
                
                <div className="pt-8 sm:pt-10">
                  <p className="flex items-center justify-start gap-2 mb-4 text-neutral-400 text-left text-xs sm:text-sm text-pretty">
                    <ArrowDown className="w-3 h-3 sm:w-4 sm:h-4" />
                    Construisons ensemble quelque chose d'extraordinaire !
                    <ArrowDown className="w-4 h-4 hidden sm:visible" />
                  </p>
                </div>
              </>
            ) : (
              <>
                <p>
                  Engineering graduate specialized in AI and software. I have worked on
                  diverse projects: R&D in AI, Cloud computing, GenAI apps, UI/UX design, and mobile/web applications.
                </p>
                <p>I adapt quickly and enjoy tackling unique challenges.</p>
                <div className="pt-8 sm:pt-10">
                  <p className="flex items-center justify-start gap-2 mb-4 text-neutral-400 text-left text-xs sm:text-sm">
                    <ArrowDown className="w-3 h-3 sm:w-4 sm:h-4 text-pretty" />
                    Let’s build something extraordinary together!
                    <ArrowDown className="w-4 h-4 hidden sm:visible" />
                  </p>

                </div>
              </>
            )}
            <Reveal delay={200}>
              <div className="flex items-center gap-3 sm:gap-4">
                <CTAButton href="mailto:tristan.marandin@gmail.com" className="text-base">
                  {language === "fr" ? "Contactez‑moi 🫡" : "Contact me 🫡"}
                </CTAButton>
                <a href="https://www.linkedin.com/in/tristan-marandin-5a51751b8/" target="_blank" rel="noopener noreferrer" className="p-4 cursor-pointer rounded-full bg-white/10 hover:bg-white/20 focus:bg-white/20 transition-colors ">
                  <svg height="16px"
                    width="16px"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 382 382"
                    xmlSpace="preserve"
                    fill="#000000">
                    <g id="SVGRepo_bgCarrier"
                      stroke-width="0" />
                    <g id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round" />
                    <g id="SVGRepo_iconCarrier">
                      <path style={{ fill: "#0077B7" }}
                        d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889 C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056 H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806 c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1 s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73 c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079 c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426 c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472 L341.91,330.654L341.91,330.654z" />
                    </g>
                  </svg>
                </a>
                <a href="https://www.github.com/tristanmarandin" target="_blank" rel="noopener noreferrer" className="hidden sm:block p-4 cursor-pointer rounded-full bg-white/10 hover:bg-white/20 focus:bg-white/20 transition-colors ">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00662 0C3.57917 0 0 3.60555 0 8.06611C0 11.6317 2.29329 14.6498 5.4747 15.7181C5.87246 15.7984 6.01816 15.5445 6.01816 15.331C6.01816 15.144 6.00505 14.503 6.00505 13.8352C3.7778 14.316 3.31399 12.8736 3.31399 12.8736C2.95606 11.9388 2.42572 11.6985 2.42572 11.6985C1.69674 11.2044 2.47882 11.2044 2.47882 11.2044C3.28744 11.2578 3.71175 12.0324 3.71175 12.0324C4.42745 13.2609 5.58074 12.9138 6.04471 12.7001C6.11092 12.1792 6.32315 11.8187 6.5485 11.6184C4.77211 11.4314 2.90312 10.737 2.90312 7.63869C2.90312 6.7573 3.22107 6.03619 3.72486 5.47536C3.64538 5.27509 3.36693 4.44696 3.80451 3.33858C3.80451 3.33858 4.48055 3.12487 6.00488 4.16654C6.6575 3.98998 7.33054 3.90016 8.00662 3.8994C8.68266 3.8994 9.37181 3.99298 10.0082 4.16654C11.5327 3.12487 12.2087 3.33858 12.2087 3.33858C12.6463 4.44696 12.3677 5.27509 12.2882 5.47536C12.8053 6.03619 13.1101 6.7573 13.1101 7.63869C13.1101 10.737 11.2411 11.418 9.45146 11.6184C9.74318 11.8721 9.99492 12.3528 9.99492 13.114C9.99492 14.1957 9.98181 15.0638 9.98181 15.3308C9.98181 15.5445 10.1277 15.7984 10.5253 15.7182C13.7067 14.6497 16 11.6317 16 8.06611C16.0131 3.60555 12.4208 0 8.00662 0Z" fill="white" />
                  </svg>
                </a>
              </div>
            </Reveal>
          </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}


