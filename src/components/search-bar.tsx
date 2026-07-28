"use client";

import { Search } from "lucide-react";
import { motion } from "framer-motion";

export function SearchBar() {
  return (
    <motion.form
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.3 }}
      className="flex w-full max-w-xl items-center gap-3 rounded-full border border-white/25 bg-white/10 px-6 py-4 shadow-nk-soft backdrop-blur-md"
      onSubmit={(e) => e.preventDefault()}
    >
      <Search className="shrink-0 text-white/70" size={20} />
      <input
        type="text"
        placeholder="Search products, stores, or categories..."
        className="visible-focus w-full bg-transparent text-sm text-white placeholder:text-white/60 focus:outline-none"
      />
    </motion.form>
  );
}
