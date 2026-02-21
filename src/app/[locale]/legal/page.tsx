import Link from "next/link";
import { content, type Locale } from "@/lib/locales";

type PageProps = {
  params: Promise<{ locale: Locale }>;
};

export default async function LegalPage({ params }: PageProps) {
  const { locale } = await params;
  const t = content[locale];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <main className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-6 pb-20 pt-16 sm:px-8">
        <h1 className="text-3xl font-semibold">{t.legal.title}</h1>
        <p className="text-sm text-slate-600">{t.legal.body}</p>
        <p className="text-sm text-slate-600">{t.legal.rights}</p>
        <Link href={`/${locale}`} className="text-sm font-semibold text-slate-700">
          {t.nav.contactCta}
        </Link>
      </main>
    </div>
  );
}
