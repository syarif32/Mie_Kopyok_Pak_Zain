"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Home, Utensils, BookOpen, Image as ImageIcon, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
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
          <Link href="/" aria-label="Mie Kopyok Pak Zain — Beranda" className="visible-focus flex items-center gap-2">
            <Image src="/favicon.svg" alt="" width={44} height={44} className="h-11 w-11 shrink-0 rounded-full bg-[#F1E8DA]" />
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
            ? "bg-[var(--color-dark)]/95 backdrop-blur-xl border-b border-white/10"
            : "bg-[var(--color-dark)]/85 backdrop-blur-md border-b border-white/10"
        }`}
      >
        <Link href="/" aria-label="Mie Kopyok Pak Zain — Beranda" className="visible-focus flex items-center gap-1">
          <Image src="/favicon.svg" alt="" width={40} height={40} className="mr-1 h-10 w-10 shrink-0 rounded-full bg-[#F1E8DA]" />
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
      <div className="xl:hidden fixed bottom-0 inset-x-0 z-50 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-2 px-3 sm:px-4 pointer-events-none">
        <nav className="pointer-events-auto mx-auto grid grid-cols-5 gap-1 w-full max-w-md items-center rounded-3xl border border-white/10 bg-[var(--color-dark)]/95 p-1.5 sm:p-2 backdrop-blur-xl shadow-[0_4px_14px_rgba(0,0,0,0.12)] relative">
          {links.map((link) => {
            const isActive = pathname === link.href;
            const Icon = link.icon;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`visible-focus relative flex min-w-0 w-full flex-col items-center justify-center min-h-14 px-1 py-2 rounded-2xl z-10 transition-colors duration-300 ${
                  isActive ? "text-[var(--color-dark)]" : "text-white/60 hover:text-white"
                }`}
                aria-label={link.label}
              >
                {/* Indikator Latar Belakang Geser (Magic Pill) */}
                {isActive && (
                  <motion.div
                    layoutId="active-mobile-indicator"
                    className="absolute inset-0 rounded-2xl bg-[var(--color-primary)]"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
                
                {/* Ikon & Label */}
                <span className="relative z-20 flex w-full min-w-0 flex-col items-center gap-1">
                  <Icon size={isActive ? 20 : 22} strokeWidth={isActive ? 2.5 : 1.5} className="transition-all duration-300" />
                  <span className={`w-full text-center text-[9px] sm:text-[10px] leading-tight tracking-normal [overflow-wrap:anywhere] font-medium transition-all duration-300 ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 absolute bottom-0"}`}>
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
