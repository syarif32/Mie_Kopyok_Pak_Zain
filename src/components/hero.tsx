"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SearchBar } from "@/components/search-bar";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1587049633312-d628ae50a8ae?q=80&w=2400&auto=format&fit=crop"
          alt="Indonesian coffee farmer harvesting cherries at sunrise"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/70 via-dark/40 to-dark/85" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs tracking-[0.2em] text-white/80 backdrop-blur-md"
        >
          NUSAKARYA · A HOME FOR INDONESIAN UMKM
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-5xl font-medium leading-[1.05] text-white sm:text-6xl md:text-7xl"
        >
          Discover Indonesia
          <br />
          Through <span className="emphasis text-primary">Local Craftsmanship</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-7 max-w-xl text-balance text-base text-white/80 sm:text-lg"
        >
          Support local businesses by discovering authentic handmade products
          from every corner of Indonesia.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-9 flex flex-col gap-4 sm:flex-row"
        >
          <Button variant="primary" size="lg">
            Explore Products
          </Button>
          <Button variant="outlineLight" size="lg">
            Become Partner
          </Button>
        </motion.div>

        <div className="mt-10 flex w-full justify-center">
          <SearchBar />
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/70"
      >
        <ArrowDown size={22} />
      </motion.div>
    </section>
  );
}
