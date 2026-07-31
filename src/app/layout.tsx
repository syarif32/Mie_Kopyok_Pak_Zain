import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import "maplibre-gl/dist/maplibre-gl.css";

// Menggunakan Poppins dengan berbagai ketebalan
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], 
  variable: "--font-poppins",
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
    <html lang="id" className={`${poppins.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}