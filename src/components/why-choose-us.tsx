"use client";

import { motion } from "framer-motion";
import { UtensilsCrossed, Flame, HeartHandshake } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

const reasons = [
  {
    icon: Flame,
    title: "Resep Legendaris",
    description:
      "Diracik secara turun-temurun dengan kuah kaldu bawang yang pekat, hangat, dan menggugah selera di setiap suapan.",
  },
  {
    icon: UtensilsCrossed,
    title: "Bahan Segar Pilihan",
    description:
      "Menggunakan tauge segar berkualitas, irisan lontong empuk, serta kerupuk gendar renyah khas buatan tangan.",
  },
  {
    icon: HeartHandshake,
    title: "Cita Rasa Autentik",
    description:
      "Menghadirkan kehangatan cita rasa asli Semarang langsung ke meja Anda dengan penuh dedikasi dan keramahan.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28">
      <SectionHeading
        eyebrow="Keunggulan Kami"
        title="Kenapa Harus Kami?"
        emphasisWord="Kami"
        align="center"
        className="mx-auto"
      />

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {reasons.map((reason, index) => {
          const Icon = reason.icon;
          return (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-start gap-5 rounded-[var(--radius-nk-sm)] bg-white p-9 shadow-nk-card border border-[var(--color-primary)]/10"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                <Icon size={24} />
              </div>
              <h3 className="text-xl font-medium text-[var(--color-dark)]">{reason.title}</h3>
              <p className="text-sm leading-relaxed text-[var(--color-gray)]">
                {reason.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}