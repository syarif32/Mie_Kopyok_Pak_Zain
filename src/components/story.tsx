"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Story() {
  return (
    <section id="story" className="mx-auto max-w-7xl px-6 py-28">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="relative aspect-[4/5] w-full overflow-hidden rounded-[48px] shadow-nk-soft"
        >
          <Image
            src="https://images.unsplash.com/photo-1604335398980-ef1749d038a4?q=80&w=1600&auto=format&fit=crop"
            alt="Artisan hand-dyeing batik cloth"
            fill
            className="object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex flex-col gap-6"
        >
          <span className="text-xs font-medium tracking-[0.2em] text-primary">
            OUR PHILOSOPHY
          </span>
          <h2 className="text-4xl font-medium leading-[1.1] text-dark sm:text-5xl">
            Every Product
            <br />
            Has <span className="emphasis text-primary">A Story</span>.
          </h2>
          <p className="text-lg leading-relaxed text-gray">
            Behind every jar, weave, and carving is someone who learned the
            craft from someone else — a parent, a neighbor, a village elder.
            NUSAKARYA exists to carry that lineage forward, connecting
            Indonesian artisans directly with people who care where things
            come from.
          </p>
          <p className="leading-relaxed text-gray">
            We work with small producers across the archipelago to bring
            their work to a wider audience, without asking them to compromise
            the methods that make it worth having in the first place.
          </p>
          <div>
            <Button variant="secondary" size="lg">
              Read More
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
