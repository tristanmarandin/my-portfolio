interface Props {
    playstore: string;
    appstore: string;
    language: string;
}

export default function StoreButtons({ playstore, appstore, language }: Props) {
    return (
        <div className="flex flex-col sm:flex-row  gap-3 w-full">
            <a
                href={playstore}
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                    src={language === "fr"
                        ? "Google-play-badge-fr.webp"
                        : "Google-play-badge-en.webp"}
                    alt={language === "fr" ? "Disponible sur Google Play" : "Get it on Google Play"}
                    className="h-12 w-auto select-none block"
                    loading="lazy"
                />
            </a>

            <a
                href={appstore}
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                    src={language === "fr"
                        ? "https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/fr-fr?size=250x83"
                        : "https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83"}
                    alt={language === "fr" ? "Télécharger dans l’App Store" : "Download on the App Store"}
                    className="h-12 w-auto select-none block"
                    loading="lazy"
                />
            </a>
        </div>
    );
}