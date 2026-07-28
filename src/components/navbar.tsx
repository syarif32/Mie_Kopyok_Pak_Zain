"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

const links = [
  { label: "Menu", href: "/menu" },
  { label: "Cerita", href: "/story" },
  { label: "Galeri", href: "/gallery" },
  { label: "Kontak", href: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-x-0 top-4 z-50 flex justify-center px-4 mix-blend-difference"
    >
      <nav
        className={`flex w-full max-w-7xl items-center justify-between rounded-full border px-6 py-4 transition-all duration-500 ${
          scrolled
            ? "border-white/10 bg-black/50 shadow-2xl backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <Link href="/" className="flex items-center gap-2">
          <span className="font-serif text-2xl italic text-white">Mie</span>
          <span className="text-xl font-bold tracking-widest text-white uppercase">
            Kopyok
          </span>
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-light tracking-widest text-white/70 transition-colors hover:text-white uppercase"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-4 md:flex">
          {/* Anda bisa menyesuaikan varian tombol ini nanti di ui/button.tsx */}
          <Button variant="primary" className="border-white text-white hover:bg-white hover:text-black rounded-full px-6 tracking-widest text-xs uppercase">
            Pesan Sekarang
          </Button>
        </div>

        <button
          className="text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Buka menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-24 w-[92%] max-w-5xl rounded-3xl border border-white/10 bg-black/90 p-8 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-6 text-center">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-lg tracking-widest text-white/80 hover:text-white uppercase"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4 flex flex-col gap-4">
                <Button className="w-full rounded-full bg-white text-black tracking-widest uppercase">
                  Pesan Sekarang
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}