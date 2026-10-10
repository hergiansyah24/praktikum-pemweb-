import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const tautan = [
  { href: "/", label: "Beranda" },
  { href: "/katalog", label: "Katalog" },
];

export const metadata: Metadata = {
  title: "Sistem Pemantauan Kampus",
  description:
    "Platform pemantauan energi dan lingkungan kampus.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <a
          href="#konten"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-white focus:p-3 focus:text-black"
        >
          Lewati ke konten utama
        </a>

        <SiteHeader namaProduk="Pemantauan Kampus" tautan={tautan} />

        {children}

        <SiteFooter namaProduk="Pemantauan Kampus" />
      </body>
    </html>
  );
}