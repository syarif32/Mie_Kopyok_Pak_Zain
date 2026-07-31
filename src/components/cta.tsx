"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Cta() {
  return (
    <section className="px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8 }}
        className="relative mx-auto max-w-7xl overflow-hidden rounded-[var(--radius-nk-lg)] shadow-nk-soft"
      >
        <div className="relative flex min-h-[460px] items-center justify-center px-6 py-20 text-center">
          {/* Background Image: Menggunakan foto nuansa kuliner/hangat yang menggugah selera */}
          <Image
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2000&auto=format&fit=crop"
            alt="Suasana Kuliner Hangat"
            fill
            className="object-cover"
          />
          {/* Gradient overlay gelap agar teks mudah dibaca dan senada dengan tema dark */}
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-dark)]/90 via-[var(--color-dark)]/80 to-[var(--color-dark)]/90" />

          <div className="relative z-10 flex max-w-2xl flex-col items-center gap-6">
            <span className="rounded-full border border-white/20 bg-white/10 px-5 py-1.5 text-xs font-bold tracking-[0.2em] text-white/90 uppercase backdrop-blur-md">
              Cita Rasa Legendaris
            </span>

            <h2 className="text-4xl font-medium leading-[1.1] text-white sm:text-5xl md:text-6xl">
              Siap Menikmati Kehangatan <br />
              <span className="emphasis text-[var(--color-primary)]">Mie Kopyok</span> Kami?
            </h2>

            <p className="max-w-lg text-sm sm:text-base text-white/80 font-light leading-relaxed">
              Kunjungi warung kami atau pesan sekarang untuk merasakan semangkuk kaldu bawang pekat, tauge segar, dan kerupuk gendar yang otentik.
            </p>

            <div className="mt-4 flex flex-col gap-4 sm:flex-row">
              <Button className="rounded-full bg-[var(--color-primary)] px-8 py-6 text-xs font-bold tracking-widest uppercase text-white shadow-lg transition-all hover:bg-[var(--color-primary)]/90 hover:scale-105">
                Pesan Porsi Anda
              </Button>
              <Button variant="secondary" className="rounded-full border-white/40 bg-transparent px-8 py-6 text-xs font-bold tracking-widest uppercase text-white transition-all hover:bg-white/10">
                Hubungi Kami
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}