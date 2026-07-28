"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { categories, type Category } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";

function CategoryCard({ category, index }: { category: Category; index: number }) {
  return (
    <motion.a
      href="#products"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.08 }}
      className="group relative flex h-[380px] flex-col justify-end overflow-hidden rounded-[32px] shadow-nk-card"
    >
      <Image
        src={category.image}
        alt={category.title}
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dark/85 via-dark/20 to-transparent" />

      <div className="relative z-10 flex items-end justify-between gap-4 p-7">
        <div>
          <h3 className="text-2xl font-medium text-white">{category.title}</h3>
          <p className="mt-1.5 max-w-[220px] text-sm text-white/75">
            {category.description}
          </p>
          <span className="mt-3 inline-block text-xs tracking-wide text-white/55">
            {category.count}
          </span>
        </div>
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md transition-all duration-500 group-hover:bg-primary group-hover:rotate-45">
          <ArrowUpRight size={18} />
        </div>
      </div>
    </motion.a>
  );
}

export function FeaturedCategories() {
  return (
    <section id="categories" className="mx-auto max-w-7xl px-6 py-28">
      <SectionHeading
        eyebrow="Browse by Craft"
        title="Six Worlds of Nusantara"
        emphasisWord="Nusantara"
        description="From highland coffee to hand-carved teak, every category is a doorway into a different region's way of making."
      />
      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category, index) => (
          <CategoryCard key={category.id} category={category} index={index} />
        ))}
      </div>
    </section>
  );
}
