import LegalContent from "@/components/LegalPage";
import { type Locale } from "@/lib/locales";

type PageProps = {
  params: Promise<{ locale: Locale }>;
};

export default async function LegalPage({ params }: PageProps) {
  const { locale } = await params;
  return <LegalContent locale={locale} />;
}
