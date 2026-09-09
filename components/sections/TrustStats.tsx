"use client";

import { motion } from "framer-motion";
import { firm } from "@/lib/content/firm";
import { fadeUp, staggerChildren } from "@/lib/motion";

export function TrustStats() {
  return (
    <section className="border-b border-border-hairline bg-ivory">
      <div className="mx-auto max-w-8xl px-6 lg:px-10">
        <motion.dl
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={staggerChildren(0.1)}
          className="grid grid-cols-2 gap-x-6 gap-y-10 border-t border-border-hairline py-14 sm:grid-cols-4 sm:py-16"
        >
          {firm.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className={
                i > 0
                  ? "border-l border-border-hairline pl-6 sm:pl-8"
                  : "pl-0"
              }
            >
              <dd className="font-display text-4xl text-navy-950 sm:text-5xl">
                {stat.value}
              </dd>
              <dt className="mt-2 text-xs font-medium uppercase tracking-[0.15em] text-charcoal-soft">
                {stat.label}
              </dt>
            </motion.div>
          ))}
        </motion.dl>
        <p className="pb-8 text-xs text-charcoal-soft/70">
          Figures marked with brackets are placeholders pending confirmation
          by the firm.
        </p>
      </div>
    </section>
  );
}
