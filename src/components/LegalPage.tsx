import Link from "next/link";
import { content, type Locale } from "@/lib/locales";

type LegalPageProps = {
  locale: Locale;
};

export default function LegalPage({ locale }: LegalPageProps) {
  const t = content[locale];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <main className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-6 pb-20 pt-16 sm:px-8">
        <h1 className="text-3xl font-semibold">{t.legal.title}</h1>
        <p className="text-sm text-slate-600">{t.legal.intro}</p>
        <div className="space-y-6">
          {t.legal.sections.map((section) => (
            <div key={section.title} className="space-y-3">
              <h2 className="text-base font-semibold text-slate-900">{section.title}</h2>
              {section.body.map((line) => (
                <p
                  key={line}
                  className={`text-sm text-slate-600 ${
                    section.emphasize ? "font-semibold uppercase tracking-[0.02em]" : ""
                  }`}
                >
                  {line}
                </p>
              ))}
            </div>
          ))}
        </div>
        <div className="space-y-2">
          <p className="text-sm font-semibold text-slate-900">{t.legal.contactLabel}</p>
          <p className="text-sm text-slate-600">{t.legal.contactText}</p>
          <Link
            href={`mailto:${t.legal.contactEmail}`}
            className="text-sm font-semibold text-slate-700 hover:text-slate-900"
          >
            {t.legal.contactEmail}
          </Link>
        </div>
        <Link href={`/${locale}`} className="text-sm font-semibold text-slate-700">
          {t.nav.contactCta}
        </Link>
      </main>
    </div>
  );
}
