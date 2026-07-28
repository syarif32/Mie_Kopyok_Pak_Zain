"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, Star, Eye, ShoppingBag } from "lucide-react";
import { products, type Product } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";

function ProductCard({ product, index }: { product: Product; index: number }) {
  const [saved, setSaved] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.08 }}
      className="group flex flex-col overflow-hidden rounded-[32px] bg-white shadow-nk-card"
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        <button
          onClick={() => setSaved((v) => !v)}
          aria-label="Save to favorites"
          className="visible-focus absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/85 backdrop-blur-md transition-colors hover:bg-white"
        >
          <Heart
            size={17}
            className={saved ? "fill-primary text-primary" : "text-dark"}
          />
        </button>

        <div className="absolute inset-x-4 bottom-4 flex translate-y-3 justify-center opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <button className="visible-focus flex items-center gap-2 rounded-full bg-white/90 px-4 py-2.5 text-xs font-medium text-dark backdrop-blur-md hover:bg-white">
            <Eye size={14} />
            Quick View
          </button>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-6">
        <span className="text-xs tracking-wide text-gray">{product.store}</span>
        <h3 className="text-base font-medium leading-snug text-dark">
          {product.name}
        </h3>

        <div className="mt-1 flex items-center gap-1 text-xs text-soft-brown">
          <Star size={13} className="fill-primary text-primary" />
          {product.rating.toFixed(1)}
        </div>

        <div className="mt-3 flex items-center justify-between">
          <span className="text-lg font-medium text-dark">{product.price}</span>
          <button
            aria-label="Add to cart"
            className="visible-focus flex h-11 w-11 items-center justify-center rounded-full bg-primary text-white transition-transform hover:scale-105"
          >
            <ShoppingBag size={17} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export function FeaturedProducts() {
  return (
    <section id="products" className="mx-auto max-w-7xl px-6 py-28">
      <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
        <SectionHeading
          eyebrow="Handpicked"
          title="Products Worth the Story"
          emphasisWord="Story"
          description="A rotating selection curated with the makers themselves, chosen for craft as much as for beauty."
        />
        <Button variant="secondary" className="shrink-0">
          View All Products
        </Button>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div>
    </section>
  );
}
