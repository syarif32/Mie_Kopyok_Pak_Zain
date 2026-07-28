"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { makers, type Maker } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";

function MakerCard({ maker, index }: { maker: Maker; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="grid grid-cols-1 items-stretch gap-0 overflow-hidden rounded-[32px] bg-white shadow-nk-card sm:grid-cols-[220px_1fr]"
    >
      <div className="relative h-64 w-full sm:h-full">
        <Image src={maker.image} alt={maker.name} fill className="object-cover" />
      </div>
      <div className="flex flex-col justify-center gap-3 p-8">
        <h3 className="text-2xl font-medium text-dark">{maker.name}</h3>
        <span className="text-sm font-medium text-primary">{maker.role}</span>
        <span className="flex items-center gap-1.5 text-sm text-gray">
          <MapPin size={14} />
          {maker.city}
        </span>
        <p className="mt-1 max-w-xl text-sm leading-relaxed text-gray">
          {maker.bio}
        </p>
      </div>
    </motion.div>
  );
}

export function Makers() {
  return (
    <section id="makers" className="mx-auto max-w-7xl px-6 py-28">
      <SectionHeading
        eyebrow="The People"
        title="Meet the Makers"
        description="The names, faces, and hands behind the products — because craftsmanship deserves credit."
      />
      <div className="mt-14 flex flex-col gap-6">
        {makers.map((maker, index) => (
          <MakerCard key={maker.id} maker={maker} index={index} />
        ))}
      </div>
    </section>
  );
}
