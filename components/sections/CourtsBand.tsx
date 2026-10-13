"use client";

import { motion } from "framer-motion";
import { firm } from "@/lib/content/firm";
import { fadeUp, staggerChildren } from "@/lib/motion";

export function CourtsBand() {
  return (
    <section className="border-b border-border-hairline bg-ivory">
      <div className="mx-auto max-w-8xl px-6 lg:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={staggerChildren(0.1)}
          className="grid grid-cols-1 gap-y-6 border-t border-border-hairline py-12 lg:grid-cols-[14rem_1fr] lg:items-center lg:gap-x-10 lg:py-14"
        >
          <motion.p
            variants={fadeUp}
            className="text-xs font-medium uppercase tracking-[0.15em] text-charcoal"
          >
            We appear before
          </motion.p>
          <ul className="grid grid-cols-1 gap-y-5 sm:grid-cols-3">
            {firm.courts.map((court, i) => (
              <motion.li
                key={court}
                variants={fadeUp}
                className={
                  i > 0 ? "sm:border-l sm:border-border-hairline sm:pl-8" : ""
                }
              >
                <span className="font-display text-2xl text-navy-950">
                  {court}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
