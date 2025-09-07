import { CTAButton } from "@/components/CTAButton";
import { useLanguage } from "@/context/LanguageContext";
import Reveal from "@/components/Reveal";

// Need me ? Contact me !
export default function FooterSection() {
    const { language } = useLanguage();
    return (
        <footer className="relative min-h-dvh h-fit snap-start flex flex-col items-center justify-center gap-10">
            <div
                aria-hidden
                className="absolute inset-0 -z-10"
                style={{
                    background:
                        "radial-gradient(circle at 50% 50%, rgba(9, 9, 11, 0.2) 0%, #09090b 100%)",
                }}
            />

            {/* Glow indigo centré */}
            <div
                aria-hidden
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(circle 40vmax at 50% 50%, rgba(99,102,241,0.35) 0%, rgba(99,102,241,0.15) 35%, transparent 70%)",
                    filter: "blur(32px)",
                }}
            />
            <Reveal>
                <div className="flex flex-col items-center justify-center gap-2 text-center">
                    <h2 className="text-2xl font-semibold">{language === "fr" ? "Intéressé pour travailler ensemble ?" : "Interested in working together ?"}</h2>
                    <p className="text-sm text-muted-foreground">
                        {language === "fr" ? "Discutons-en !" : "Let's have a chat!"}
                    </p>

                    <CTAButton href="mailto:tristan.marandin@gmail.com" className="text-base mt-10">
                        {language === "fr" ? "Contactez‑moi 🫡" : "Contact me 🫡"}
                    </CTAButton>
                </div>
            </Reveal>
            <Reveal delay={150} className="absolute bottom-12 left-0 right-0">
                <div className="flex flex-col items-center justify-center mx-auto gap-4">
                    <div className="flex items-center justify-center gap-4">
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
                        <a href="https://www.github.com/tristanmarandin" target="_blank" rel="noopener noreferrer" className="p-4 cursor-pointer rounded-full bg-white/10 hover:bg-white/20 focus:bg-white/20 transition-colors ">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00662 0C3.57917 0 0 3.60555 0 8.06611C0 11.6317 2.29329 14.6498 5.4747 15.7181C5.87246 15.7984 6.01816 15.5445 6.01816 15.331C6.01816 15.144 6.00505 14.503 6.00505 13.8352C3.7778 14.316 3.31399 12.8736 3.31399 12.8736C2.95606 11.9388 2.42572 11.6985 2.42572 11.6985C1.69674 11.2044 2.47882 11.2044 2.47882 11.2044C3.28744 11.2578 3.71175 12.0324 3.71175 12.0324C4.42745 13.2609 5.58074 12.9138 6.04471 12.7001C6.11092 12.1792 6.32315 11.8187 6.5485 11.6184C4.77211 11.4314 2.90312 10.737 2.90312 7.63869C2.90312 6.7573 3.22107 6.03619 3.72486 5.47536C3.64538 5.27509 3.36693 4.44696 3.80451 3.33858C3.80451 3.33858 4.48055 3.12487 6.00488 4.16654C6.6575 3.98998 7.33054 3.90016 8.00662 3.8994C8.68266 3.8994 9.37181 3.99298 10.0082 4.16654C11.5327 3.12487 12.2087 3.33858 12.2087 3.33858C12.6463 4.44696 12.3677 5.27509 12.2882 5.47536C12.8053 6.03619 13.1101 6.7573 13.1101 7.63869C13.1101 10.737 11.2411 11.418 9.45146 11.6184C9.74318 11.8721 9.99492 12.3528 9.99492 13.114C9.99492 14.1957 9.98181 15.0638 9.98181 15.3308C9.98181 15.5445 10.1277 15.7984 10.5253 15.7182C13.7067 14.6497 16 11.6317 16 8.06611C16.0131 3.60555 12.4208 0 8.00662 0Z" fill="white" />
                            </svg>
                        </a>
                    </div>
                    <p className="text-center text-sm text-muted-foreground">
                        &copy; {new Date().getFullYear()} - {language === "fr" ? "Tous droits réservés" : "All rights reserved"}
                    </p>
                </div>
            </Reveal>
        </footer>
    );
}