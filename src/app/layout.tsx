import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NUSAKARYA — Discover Indonesia Through Local Craftsmanship",
  description:
    "NUSAKARYA connects you with authentic handmade products and the stories of the Indonesian artisans, farmers, and makers behind them.",
  keywords: [
    "UMKM",
    "Indonesia",
    "local craftsmanship",
    "handmade",
    "artisans",
    "Nusantara",
  ],
  openGraph: {
    title: "NUSAKARYA — Discover Indonesia Through Local Craftsmanship",
    description:
      "Authentic products, real stories, from every corner of Indonesia.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
