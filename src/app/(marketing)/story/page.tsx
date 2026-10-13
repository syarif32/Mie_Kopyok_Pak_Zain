"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { MagicCursor } from "@/components/ui/cursor";
import { motion } from "framer-motion";
import Image from "next/image";

export default function CeritaPage() {
  return (
    <main className="relative min-h-screen bg-[var(--color-cream)] flex flex-col overflow-x-hidden selection:bg-[var(--color-primary)] selection:text-white">
      
      {/* 
        Memanggil Kursor Ajaib! 
        Warna diubah menggunakan format RGB dari palet Anda: 
        139 107 77 = Soft Brown
        166 98 31  = Primary Dark (Caramel)
      */}
      <MagicCursor colors={["139 107 77", "166 98 31"]} />
      
      <Navbar />

      <section className="relative w-full pt-28 md:pt-40 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex-grow flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="text-xs font-semibold tracking-[0.2em] text-[var(--color-primary)] uppercase mb-6 block">
            Jejak Langkah
          </span>
          <h3 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tighter uppercase text-[var(--color-dark)] leading-tight">
            Kisah <span className="text-[var(--color-primary)] lowercase emphasis">Sebuah</span> Rasa
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-[4/5] w-full rounded-[32px] overflow-hidden shadow-2xl"
          >
            <Image 
              src="/images/ko.png" 
              alt="Perjalanan Mie Kopyok" 
              fill 
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col gap-6 text-[var(--color-dark)]/80 text-base sm:text-lg font-light leading-relaxed"
          >
            <p>
              Berawal dari sebuah dapur kecil dan resep sederhana yang diwariskan secara turun-temurun, keluarga kami memulai perjalanan meracik kelezatan yang kini Anda kenal. 
            </p>
            <p>
              Setiap piring Mie Kopyok yang disajikan bukan sekadar hidangan, melainkan sebuah bentuk cinta dan dedikasi ayah kami dalam menjaga keaslian rasa tradisional yang perlahan mulai tergerus zaman.
            </p>
            <p>
              Dari merintis warung kecil hingga kini mampu melayani katering untuk berbagai acara besar, kami terus berkomitmen menyajikan hidangan yang tidak hanya mengenyangkan perut, tapi juga menghangatkan memori.
            </p>
            
            <div className="mt-8 pt-8 border-t border-black/10">
              <span className="font-bold uppercase tracking-widest text-sm text-[var(--color-dark)]">
                — Pak Zain
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}