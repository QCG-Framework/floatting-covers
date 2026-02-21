import type { MetadataRoute } from "next";
import { locales } from "@/lib/locales";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.hinnovcompany.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const urls = locales.flatMap((locale) => [
    `${baseUrl}/${locale}`,
    `${baseUrl}/${locale}/legal`,
    `${baseUrl}/${locale}/sitemap`
  ]);

  return urls.map((url) => ({
    url,
    lastModified: new Date()
  }));
}
