import Link from "next/link";
import { content, type Locale } from "@/lib/locales";

type PageProps = {
  params: Promise<{ locale: Locale }>;
};

export default async function SiteMapPage({ params }: PageProps) {
  const { locale } = await params;
  const t = content[locale];

  const anchors = [
    "solutions",
    "products",
    "services",
    "roi",
    "numbers",
    "trusted",
    "gallery",
    "molding",
    "contact"
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <main className="mx-auto flex w-full max-w-3xl flex-col gap-8 px-6 pb-20 pt-16 sm:px-8">
        <div className="space-y-3">
          <h1 className="text-3xl font-semibold">{t.sitemap.title}</h1>
          <p className="text-sm text-slate-600">{t.sitemap.sectionsTitle}</p>
        </div>
        <div className="grid gap-3">
          {anchors.map((anchor, index) => (
            <Link
              key={anchor}
              href={`/${locale}#${anchor}`}
              className="text-sm font-semibold text-slate-700"
            >
              {t.sitemap.sections[index]}
            </Link>
          ))}
        </div>
        <div className="space-y-3">
          <p className="text-sm text-slate-600">{t.sitemap.languageTitle}</p>
          <div className="flex flex-wrap gap-3">
            {(["en", "fr", "pl"] as const).map((lang) => (
              <Link
                key={lang}
                href={`/${lang}`}
                className="rounded-full border border-slate-300 px-4 py-2 text-xs font-semibold text-slate-700"
              >
                {lang.toUpperCase()}
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
