"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Home, Utensils, BookOpen, Image as ImageIcon, Phone } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

const links = [
  { label: "Beranda", href: "/", icon: Home },
  { label: "Menu", href: "/menu", icon: Utensils },
  { label: "Cerita", href: "/story", icon: BookOpen }, 
  { label: "Pemesanan", href: "/gallery", icon: ImageIcon },
  { label: "Kontak", href: "/contact", icon: Phone },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* =========================================
          1. DESKTOP NAVBAR (Tampil di PC/Laptop)
          ========================================= */}
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        className="fixed inset-x-0 top-4 z-50 hidden xl:flex justify-center px-4"
      >
        <nav
          className={`flex w-full max-w-7xl items-center justify-between rounded-full border px-8 py-4 transition-all duration-500 ${
            scrolled
              ? "border-white/10 bg-[var(--color-dark)]/95 backdrop-blur-xl shadow-2xl" 
              : "border-white/20 bg-black/20 backdrop-blur-md"
          }`}
        >
          <Link href="/" className="flex items-center gap-2">
            <span className="font-sans text-2xl italic text-white">Mie</span>
            <span className="text-xl font-bold tracking-widest text-white uppercase">
              Kopyok
            </span>
          </Link>

          <div className="flex items-center gap-8">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm tracking-widest transition-colors uppercase py-2 ${
                    isActive ? "text-white font-medium" : "text-white/70 font-light hover:text-white"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="active-desktop-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full bg-[var(--color-primary)]"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-4">
            <Button className="border border-[var(--color-primary)] bg-[var(--color-primary)] text-white hover:bg-white hover:border-white hover:text-[var(--color-dark)] rounded-full px-8 py-5 tracking-widest text-xs font-bold uppercase transition-all shadow-lg">
              <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer">
                Pesan Sekarang
              </a>
            </Button>
          </div>
        </nav>
      </motion.header>


      {/* =========================================
          2. MOBILE TOP BAR (Solusi agar atas tidak kosong)
          ========================================= */}
      <header 
        className={`xl:hidden fixed inset-x-0 top-0 z-50 flex items-center justify-between px-4 sm:px-6 py-4 transition-all duration-300 ${
          scrolled 
            ? "bg-[var(--color-dark)]/95 backdrop-blur-xl shadow-md border-b border-white/5" 
            : "bg-gradient-to-b from-black/60 to-transparent"
        }`}
      >
        <Link href="/" className="flex items-center gap-1">
          <span className="font-sans text-2xl italic text-white">Mie</span>
          <span className="text-xl font-bold tracking-widest text-white uppercase">Kopyok</span>
        </Link>
        
        <a 
    href="https://wa.me/6289524570682?text=Halo%2C%20saya%20ingin%20pesan%20Mie%20Kopyok." 
    target="_blank" 
    rel="noopener noreferrer"
    className="visible-focus inline-flex shrink-0 items-center justify-center min-h-11 rounded-full border border-white/20 bg-[var(--color-primary-dark)] px-5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[var(--color-dark)]"
  >
    Pesan
  </a>
      </header>


      {/* =========================================
          3. MOBILE BOTTOM NAV (Animasi Tab Bar)
          ========================================= */}
      <div className="xl:hidden fixed bottom-0 inset-x-0 z-50 pb-[calc(1rem+env(safe-area-inset-bottom))] pt-8 px-4 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none">
        <nav className="pointer-events-auto mx-auto flex w-full max-w-md items-center justify-between rounded-full border border-white/10 bg-[var(--color-dark)]/95 px-2 py-2 backdrop-blur-xl shadow-[0_-10px_40px_rgba(0,0,0,0.3)] relative">
          {links.map((link) => {
            const isActive = pathname === link.href;
            const Icon = link.icon;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative flex flex-col items-center justify-center w-12 sm:w-14 h-14 z-10 transition-colors duration-300 ${
                  isActive ? "text-[var(--color-dark)]" : "text-white/60 hover:text-white"
                }`}
                aria-label={link.label}
              >
                {/* Indikator Latar Belakang Geser (Magic Pill) */}
                {isActive && (
                  <motion.div
                    layoutId="active-mobile-indicator"
                    className="absolute inset-0 rounded-full bg-[var(--color-primary)] shadow-md"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
                
                {/* Ikon & Label */}
                <span className="relative z-20 flex flex-col items-center gap-1">
                  <Icon size={isActive ? 20 : 22} strokeWidth={isActive ? 2.5 : 1.5} className="transition-all duration-300" />
                  <span className={`text-[9px] tracking-wider uppercase font-medium transition-all duration-300 ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 absolute bottom-0"}`}>
                    {link.label}
                  </span>
                </span>
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}