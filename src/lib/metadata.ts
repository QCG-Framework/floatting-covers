import type { Metadata } from "next";
import type { Locale } from "./locales";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.hinnovcompany.com";

const meta: Record<Locale, { title: string; description: string }> = {
  en: {
    title: "Floating Cover Solutions | H INNOV LLC",
    description:
      "Advanced floating cover solutions designed to reduce evaporation, improve water quality, and protect industrial reservoirs."
  },
  fr: {
    title: "Solutions de Couvertures Flottantes | H INNOV LLC",
    description:
      "Solutions avancées de couvertures flottantes pour réduire l'évaporation, améliorer la qualité de l'eau et protéger les bassins industriels."
  },
  pl: {
    title: "Rozwiązania Pokryw Pływających | H INNOV LLC",
    description:
      "Zaawansowane rozwiązania pokryw pływających do redukcji parowania, poprawy jakości wody i ochrony zbiorników przemysłowych."
  }
};

export function localeMetadata(locale: Locale): Metadata {
  const { title, description } = meta[locale];

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      siteName: "H INNOV LLC"
    },
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        en: `${baseUrl}/en`,
        fr: `${baseUrl}/fr`,
        pl: `${baseUrl}/pl`,
        "x-default": `${baseUrl}/en`
      }
    },
    metadataBase: new URL(baseUrl)
  };
}
