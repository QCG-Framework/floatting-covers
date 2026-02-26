import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { localeMetadata } from "@/lib/metadata";
import "@/app/globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

export const metadata: Metadata = localeMetadata("pl");

export default function PlLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={`${inter.variable} font-sans`}>{children}</body>
    </html>
  );
}
