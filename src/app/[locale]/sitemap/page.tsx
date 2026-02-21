import SiteMapContent from "@/components/SiteMapPage";
import { type Locale } from "@/lib/locales";

type PageProps = {
  params: Promise<{ locale: Locale }>;
};

export default async function SiteMapPage({ params }: PageProps) {
  const { locale } = await params;
  return <SiteMapContent locale={locale} />;
}
