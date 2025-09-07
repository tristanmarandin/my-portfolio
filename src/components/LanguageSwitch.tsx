import { useLanguage } from "@/context/LanguageContext";

export default function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className="fixed top-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1 rounded-full bg-black/30 backdrop-blur-sm px-1 py-1 ring-1 ring-white/10 shadow-lg shadow-indigo-500/20 fade-down"
      style={{
        // @ts-ignore CSS vars
        "--fade-down-delay": "1.6s",
        // @ts-ignore CSS vars
        "--fade-down-duration": "700ms",
        // @ts-ignore CSS vars
        "--fade-down-ease": "cubic-bezier(0.22, 1, 0.36, 1)",
      }}
    >
      <button
        type="button"
        aria-pressed={language === "en"}
        onClick={() => setLanguage("en")}
        className={
          "px-2 py-1 rounded-full text-sm transition " +
          (language === "en"
            ? "bg-white/20 text-white"
            : "text-white/70 hover:text-white cursor-pointer")
        }
      >
        🇬🇧
      </button>
      {/* <span className="text-white/30">|</span> */}
      <button
        type="button"
        aria-pressed={language === "fr"}
        onClick={() => setLanguage("fr")}
        className={
          "px-2 py-1 rounded-full text-sm transition " +
          (language === "fr"
            ? "bg-white/20 text-white"
            : "text-white/70 hover:text-white cursor-pointer")
        }
      >
        🇫🇷
      </button>
    </div>
  );
}


