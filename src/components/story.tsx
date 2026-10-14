"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Story() {
  return (
    <section id="cerita" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-28 relative z-20">
      <div className="grid grid-cols-1 items-center gap-8 md:gap-12 lg:grid-cols-2 lg:gap-20">
        
        {/* Kolom Kiri: Gambar Momen Memasak / Dapur */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="relative aspect-[4/5] w-full overflow-hidden rounded-[48px] shadow-2xl"
        >
          {/* Gambar diubah menjadi suasana memasak atau bahan tradisional */}
          <Image
            src="/images/ko.png"
            alt="Proses meracik bumbu warisan"
            fill
            sizes="(max-width: 767px) 100vw, 50vw"
            className="object-cover"
          />
          {/* Overlay tipis agar gambar lebih menyatu dengan tema */}
          <div className="absolute inset-0 bg-black/10" />
        </motion.div>

        {/* Kolom Kanan: Teks Filosofi */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex flex-col gap-6"
        >
          <span className="text-xs font-bold tracking-[0.2em] text-[var(--color-primary)] uppercase">
            Filosofi Rasa
          </span>
          
          <h2 className="text-3xl font-bold leading-[1.1] text-[var(--color-dark)] sm:text-5xl uppercase tracking-tighter">
            Setiap Piring
            <br />
            Menyimpan <span className="emphasis text-[var(--color-primary)] lowercase">Cerita</span>.
          </h2>
          
          <p className="text-base sm:text-lg leading-relaxed text-[var(--color-dark)]/70 font-light">
            Di balik kepekatan kuah kaldu bawang dan renyahnya kerupuk gendar, terdapat dedikasi panjang merawat resep leluhur. Kami mempertahankan metode memasak lambat dan pemilihan rempah segar yang diturunkan dari generasi ke generasi.
          </p>
          
          <p className="leading-relaxed text-[var(--color-dark)]/70 font-light">
            Bagi kami, menyajikan makanan bukan sekadar menuntaskan lapar. Ini adalah tentang merawat kenangan masa lalu dan menyajikannya kembali secara hangat ke hadapan Anda hari ini.
          </p>
          
          <div className="mt-4">
            {/* Tombol diarahkan ke halaman cerita yang sudah kita buat sebelumnya */}
            <Link href="/cerita" passHref>
              <Button className="rounded-full bg-[var(--color-primary)] px-8 py-6 text-xs font-bold tracking-widest uppercase text-white shadow-lg transition-all hover:bg-[var(--color-primary)]/90 hover:scale-105">
                Baca Kisah Lengkap
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}