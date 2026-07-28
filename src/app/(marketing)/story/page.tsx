"use client";

import { motion } from "framer-motion";

export default function StoryPage() {
  return (
    <main className="min-h-screen bg-black pt-40 pb-20 px-6 md:px-20 text-white flex flex-col items-center justify-center text-center">
      <div className="max-w-3xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold tracking-tighter mb-10 uppercase"
        >
          Warisan Rasa
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-8 text-lg md:text-xl font-light leading-relaxed text-white/70"
        >
          <p>
            Berawal dari sebuah gerobak sederhana di sudut kota Semarang, resep ini dijaga dengan penuh dedikasi melintasi tiga generasi.
          </p>
          <p>
            Setiap piring yang kami sajikan bukan sekadar makanan, melainkan sebuah penghormatan terhadap tradisi kuliner lokal. Krupuk gendar yang diremukkan, kuah bawang yang pekat, dan tauge yang renyah menyatu dalam simfoni rasa yang tidak pernah berubah sejak hari pertama.
          </p>
        </motion.div>
      </div>
    </main>
  );
}