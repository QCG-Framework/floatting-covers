import Link from "next/link";

type FooterProps = {
  locale: string;
  labels: {
    floating: string;
    legal: string;
    sitemap: string;
  };
};

export default function Footer({ locale, labels }: FooterProps) {
  return (
    <footer className="border-t border-slate-200 py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>2024-2026 © H INNOV LLC</p>
        <div className="flex items-center gap-4">
          <Link href={`/${locale}`} className="hover:text-slate-700">
            {labels.floating}
          </Link>
          <Link href={`/${locale}/legal`} className="hover:text-slate-700">
            {labels.legal}
          </Link>
          <Link href={`/${locale}/sitemap`} className="hover:text-slate-700">
            {labels.sitemap}
          </Link>
        </div>
      </div>
    </footer>
  );
}
