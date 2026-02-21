import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

const description =
  "Advanced floating cover solutions designed to reduce evaporation, improve water quality, and protect industrial reservoirs.";

export const metadata: Metadata = {
  title: "Floating Cover Solutions | H INNOV LLC",
  description,
  openGraph: {
    title: "Floating Cover Solutions | H INNOV LLC",
    description,
    type: "website",
    siteName: "H INNOV LLC"
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.hinnovcompany.com")
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>{children}</body>
    </html>
  );
}
