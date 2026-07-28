"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Cta() {
  return (
    <section className="px-6 py-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8 }}
        className="relative mx-auto max-w-7xl overflow-hidden rounded-[48px]"
      >
        <div className="relative flex min-h-[420px] items-center justify-center px-6 py-20">
          <Image
            src="https://images.unsplash.com/photo-1596496181848-3091d4878b24?q=80&w=2000&auto=format&fit=crop"
            alt="Indonesian craft market"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-dark/75" />

          <div className="relative z-10 flex max-w-2xl flex-col items-center gap-8 text-center">
            <h2 className="text-4xl font-medium leading-[1.1] text-white sm:text-5xl">
              Ready to Support
              <br />
              <span className="emphasis text-primary">Local Businesses</span>?
            </h2>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button variant="primary" size="lg">
                Explore Products
              </Button>
              <Button variant="outlineLight" size="lg">
                Become Partner
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
