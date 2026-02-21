import { notFound } from "next/navigation";
import LocalePage from "@/components/LocalePage";
import LegalContent from "@/components/LegalPage";
import SiteMapContent from "@/components/SiteMapPage";
import { locales, type Locale } from "@/lib/locales";

type PageProps = {
  params: Promise<{ slug: string[] }>;
};

export default async function CatchAllPage({ params }: PageProps) {
  const { slug } = await params;
  const [maybeLocale, maybeSection] = slug || [];

  if (!maybeLocale || !locales.includes(maybeLocale as Locale)) {
    return notFound();
  }

  const locale = maybeLocale as Locale;

  if (maybeSection === "legal") {
    return <LegalContent locale={locale} />;
  }

  if (maybeSection === "sitemap") {
    return <SiteMapContent locale={locale} />;
  }

  if (maybeSection) {
    return notFound();
  }

  return <LocalePage locale={locale} />;
}
