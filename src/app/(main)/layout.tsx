import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: "Floating Cover Solutions | H INNOV LLC",
  description:
    "Advanced floating cover solutions designed to reduce evaporation, improve water quality, and protect industrial reservoirs.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.hinnovcompany.com"
  )
};

export default function MainLayout({
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
