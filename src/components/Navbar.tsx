import Link from "next/link";
import { locales } from "@/lib/locales";

type NavbarProps = {
  locale: string;
  labels: {
    solutions: string;
    products: string;
    services: string;
    roi: string;
    contact: string;
    contactCta: string;
    language: string;
  };
};

export default function Navbar({ locale, labels }: NavbarProps) {
  const links = [
    { label: labels.solutions, href: "#solutions" },
    { label: labels.products, href: "#products" },
    { label: labels.services, href: "#services" },
    { label: labels.roi, href: "#roi" },
    { label: labels.contact, href: "#contact" }
  ];

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200/70 bg-white/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
        <Link
          href={`/${locale}#top`}
          className="text-sm font-semibold tracking-[0.2em] text-slate-900"
        >
          H INNOV LLC
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={`/${locale}${link.href}`}
              className="hover:text-slate-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-slate-500 sm:flex">
            {labels.language}
            {locales.map((item) => (
              <Link
                key={item}
                href={`/${item}`}
                className={`rounded-full px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] ${
                  item === locale ? "bg-slate-900 text-white" : "text-slate-600"
                }`}
              >
                {item}
              </Link>
            ))}
          </div>
          <Link
            href={`/${locale}#contact`}
            className="rounded-full border border-slate-300 px-4 py-2 text-xs font-semibold text-slate-900 transition hover:border-slate-400"
          >
            {labels.contactCta}
          </Link>
        </div>
      </div>
    </header>
  );
}
