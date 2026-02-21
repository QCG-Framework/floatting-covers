import type { Metadata } from "next";
import LocalePage from "@/components/LocalePage";
import { content, locales, type Locale } from "@/lib/locales";

type PageProps = {
  params: Promise<{ locale: Locale }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = content[locale];
  const description = t.hero.body;
  return {
    title: `Floating Cover Solutions | H INNOV LLC`,
    description,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        fr: "/fr",
        pl: "/pl"
      }
    },
    openGraph: {
      title: "Floating Cover Solutions | H INNOV LLC",
      description,
      type: "website",
      locale
    }
  };
}

export default async function Home({ params }: PageProps) {
  const { locale } = await params;
  return <LocalePage locale={locale} />;
}
