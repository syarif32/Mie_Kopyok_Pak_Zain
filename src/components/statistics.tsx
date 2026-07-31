"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

// Kita masukkan datanya langsung di sini agar mudah diedit
const statistikWarung = [
  { id: 1, value: 45, suffix: "+", label: "Tahun Resep Bertahan" },
  { id: 2, value: 1500000, suffix: "+", label: "Mangkuk Terjual" },
  { id: 3, value: 49, suffix: "/50", label: "Rating Kepuasan (4.9/5.0)" },
  { id: 4, value: 100, suffix: "%", label: "Bahan Segar & Alami" },
];

function formatValue(value: number) {
  // Mengubah M (Million) menjadi Jt (Juta)
  if (value >= 1000000) return `${(value / 1000000).toFixed(1).replace(".0", "")} Jt`;
  // Mengubah K (Kilo) menjadi Rb (Ribu)
  if (value >= 1000) return `${Math.round(value / 1000)} Rb`;
  return `${Math.round(value)}`;
}

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 2.5, // Sedikit diperlambat agar animasinya lebih dramatis
      ease: "easeOut",
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className="text-5xl font-bold text-[var(--color-primary)] sm:text-6xl tracking-tighter">
      {formatValue(display)}
      <span className="text-3xl sm:text-4xl text-white ml-1">{suffix}</span>
    </span>
  );
}

export function Statistics() {
  return (
    <section className="bg-[var(--color-dark)] py-24 border-y border-white/10 relative z-20">
      <div className="mx-auto max-w-6xl px-6">
        
        {/* Tambahan Judul Kecil agar bagian ini tidak terlalu sepi */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-[var(--color-primary)] uppercase">
            Jejak Rasa Kami
          </span>
          <h2 className="mt-4 text-3xl font-bold uppercase tracking-tighter text-white sm:text-4xl">
            Bukti Cinta Pelanggan
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-12 sm:grid-cols-4 md:gap-10">
          {statistikWarung.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center gap-3 text-center"
            >
              <Counter value={stat.value} suffix={stat.suffix} />
              <span className="text-sm font-medium tracking-wide uppercase text-white/60">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}