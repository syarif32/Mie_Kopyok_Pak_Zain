"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";

export function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28">
      <SectionHeading
        eyebrow="What People Say"
        title="Stories From Our Customers"
        emphasisWord="Customers"
        align="center"
        className="mx-auto"
      />

      <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {testimonials.map((t, index) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="flex flex-col gap-6 rounded-[32px] bg-white p-9 shadow-nk-card"
          >
            <Quote className="text-primary/40" size={32} />
            <p className="text-base leading-relaxed text-dark">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="mt-auto flex items-center gap-3">
              <div className="relative h-11 w-11 overflow-hidden rounded-full">
                <Image src={t.image} alt={t.name} fill className="object-cover" />
              </div>
              <div>
                <p className="text-sm font-medium text-dark">{t.name}</p>
                <p className="text-xs text-gray">{t.location}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
