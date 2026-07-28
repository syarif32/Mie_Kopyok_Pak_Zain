"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Truck, HeartHandshake } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Verified Products",
    description:
      "Every store on NUSAKARYA is visited and verified before it goes live, so authenticity is never in question.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description:
      "Partnered logistics across the archipelago mean your order reaches you quickly, wherever you are.",
  },
  {
    icon: HeartHandshake,
    title: "Support Local Economy",
    description:
      "Every purchase goes directly toward the livelihoods of the farmers, weavers, and makers who created it.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28">
      <SectionHeading
        eyebrow="Why NUSAKARYA"
        title="Built on Trust, Not Just Transactions"
        emphasisWord="Trust"
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
              className="flex flex-col items-start gap-5 rounded-[32px] bg-white p-9 shadow-nk-card"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Icon size={24} />
              </div>
              <h3 className="text-xl font-medium text-dark">{reason.title}</h3>
              <p className="text-sm leading-relaxed text-gray">
                {reason.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
