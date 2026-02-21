import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import Card from "@/components/Card";
import ProductCard from "@/components/ProductCard";
import StatCard from "@/components/StatCard";
import Footer from "@/components/Footer";
import { content, type Locale } from "@/lib/locales";

type LocalePageProps = {
  locale: Locale;
};

export default function LocalePage({ locale }: LocalePageProps) {
  const t = content[locale];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "H INNOV LLC",
    url: "https://www.hinnovcompany.com",
    description: t.hero.body,
    address: {
      "@type": "PostalAddress",
      streetAddress: "8 The Green",
      addressLocality: "Dover",
      addressRegion: "DE",
      postalCode: "19901",
      addressCountry: "US"
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1 302 412 0346",
      contactType: "sales"
    }
  };

  const galleryImages = [
    "/images/gallery-01.jpg",
    "/images/gallery-02.jpg",
    "/images/gallery-03.jpg",
    "/images/gallery-04.jpg",
    "/images/gallery-05.jpg",
    "/images/gallery-06.jpg"
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar locale={locale} labels={t.nav} />
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 pb-24 pt-10 sm:px-8">
        <section id="top" className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="flex flex-col gap-6">
            <p className="section-kicker">{t.hero.kicker}</p>
            <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
              {t.hero.title}
            </h1>
            <p className="text-base text-slate-600 sm:text-lg">{t.hero.body}</p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href={`/${locale}#contact`}
                className="rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                {t.hero.primaryCta}
              </Link>
              <Link href={`/${locale}#products`} className="text-sm font-semibold text-slate-700">
                {t.hero.secondaryCta}
              </Link>
            </div>
            <p className="text-sm text-slate-500">{t.hero.note}</p>
          </div>
          <div className="image-shell aspect-[4/3] w-full soft-shadow">
            <Image
              src="/images/hero.jpg"
              alt={t.images.heroAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </section>

        <Section id="invest" kicker={t.invest.kicker} title={t.invest.title} subtitle={t.invest.subtitle}>
          <div className="grid gap-6 md:grid-cols-3">
            {t.invest.cards.map((item) => (
              <Card key={item.title} title={item.title} body={item.body} />
            ))}
          </div>
        </Section>

        <Section
          id="solutions"
          kicker={t.solutions.kicker}
          title={t.solutions.title}
          subtitle={t.solutions.subtitle}
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card space-y-4">
              <p className="text-sm font-semibold text-slate-900">{t.solutions.industriesTitle}</p>
              <ul className="space-y-3 text-sm text-slate-600">
                {t.solutions.industries.map((item) => (
                  <li key={item.label}>
                    <span className="font-semibold text-slate-900">{item.label}:</span> {item.body}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card space-y-4">
              <p className="text-sm font-semibold text-slate-900">{t.solutions.performanceTitle}</p>
              <p className="text-sm text-slate-600">{t.solutions.performanceBody}</p>
              <div className="grid gap-4 sm:grid-cols-2">
                {t.solutions.performancePoints.map((point) => (
                  <div
                    key={point}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600"
                  >
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section
          id="products"
          kicker={t.products.kicker}
          title={t.products.title}
          subtitle={t.products.subtitle}
        >
          <div className="grid gap-6 md:grid-cols-3">
            {t.products.items.map((item) => (
              <ProductCard
                key={item.title}
                tag={item.tag}
                title={item.title}
                body={item.body}
                imageSrc={
                  item.title === "HexProtect®"
                    ? "/images/product-hex.jpg"
                    : item.title === "Armor Ball®"
                    ? "/images/product-armor.jpg"
                    : "/images/product-rhombo.jpg"
                }
                imageAlt={
                  item.title === "HexProtect®"
                    ? t.images.productHexAlt
                    : item.title === "Armor Ball®"
                    ? t.images.productArmorAlt
                    : t.images.productRhomboAlt
                }
              />
            ))}
          </div>
        </Section>

        <Section
          id="services"
          kicker={t.services.kicker}
          title={t.services.title}
          subtitle={t.services.subtitle}
        >
          <div className="grid gap-6 md:grid-cols-4">
            {t.services.cards.map((item) => (
              <Card key={item.title} title={item.title} body={item.body} />
            ))}
          </div>
        </Section>

        <Section id="roi" kicker={t.roi.kicker} title={t.roi.title} subtitle={t.roi.subtitle}>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {t.roi.cards.map((item) => (
              <Card key={item.title} title={item.title} body={item.body} />
            ))}
          </div>
        </Section>

        <Section
          id="numbers"
          kicker={t.numbers.kicker}
          title={t.numbers.title}
          subtitle={t.numbers.subtitle}
        >
          <div className="grid gap-6 md:grid-cols-3">
            {t.numbers.stats.map((item) => (
              <StatCard
                key={item.title}
                title={item.title}
                highlight={item.highlight}
                body={item.body}
              />
            ))}
          </div>
        </Section>

        <Section
          id="trusted"
          kicker={t.trusted.kicker}
          title={t.trusted.title}
          subtitle={t.trusted.subtitle}
        >
          <div className="card grid gap-6 md:grid-cols-2">
            <div className="grid grid-cols-2 gap-4">
              {t.trusted.industries.map((label) => (
                <div
                  key={label}
                  className="flex items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 px-4 py-6 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500"
                >
                  {label}
                </div>
              ))}
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-slate-900">{t.trusted.cardTitle}</h3>
              <p className="text-sm text-slate-600">{t.trusted.cardBody}</p>
              <Link href={`/${locale}#contact`} className="text-sm font-semibold text-slate-900">
                {t.trusted.link}
              </Link>
            </div>
          </div>
        </Section>

        <Section
          id="gallery"
          kicker={t.gallery.kicker}
          title={t.gallery.title}
          subtitle={t.gallery.subtitle}
        >
          <div className="grid gap-4 md:grid-cols-3">
            {galleryImages.map((src, index) => (
              <div key={src} className="image-shell aspect-[4/3]">
                <Image
                  src={src}
                  alt={t.images.galleryAlt[index] || t.images.galleryAlt[0]}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </Section>

        <Section
          id="molding"
          kicker={t.molding.kicker}
          title={t.molding.title}
          subtitle={t.molding.subtitle}
        >
          <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
            <div className="card space-y-4">
              <p className="text-sm text-slate-600">{t.molding.body}</p>
              <ul className="space-y-2 text-sm text-slate-600">
                {t.molding.points.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
            </div>
            <div className="image-shell aspect-[4/3]">
              <Image
                src="/images/molding.jpg"
                alt={t.images.moldingAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
        </Section>

        <Section
          id="contact"
          kicker={t.contact.kicker}
          title={t.contact.title}
          subtitle={t.contact.subtitle}
        >
          <div className="card flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-3">
              <p className="text-sm font-semibold text-slate-900">H INNOV LLC</p>
              <p className="text-sm text-slate-600">8 The Green, 19901 Dover (DE) USA</p>
              <p className="text-sm text-slate-600">+1 302 412 0346</p>
              <Link
                href="mailto:hinnovcompamy@gmail.com"
                className="text-sm font-semibold text-slate-700 hover:text-slate-900"
              >
                hinnovcompamy@gmail.com
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <Link
                href="mailto:hinnovcompamy@gmail.com"
                className="rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                {t.contact.emailCta}
              </Link>
              <Link href="tel:+13024120346" className="text-sm font-semibold text-slate-700">
                {t.contact.callCta}
              </Link>
            </div>
          </div>
        </Section>
      </main>
      <Footer locale={locale} labels={t.footer} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
