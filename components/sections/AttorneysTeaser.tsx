"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AttorneyCard } from "@/components/cards/AttorneyCard";
import { Button } from "@/components/ui/Button";
import { attorneys } from "@/lib/content/attorneys";
import { fadeUp, staggerChildren } from "@/lib/motion";

export function AttorneysTeaser() {
  return (
    <section className="bg-ivory py-24 sm:py-32">
      <div className="mx-auto max-w-8xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="Our People"
          title="Meet the Team"
          description="Advocates of the High Court of Kenya, based in Kajiado South."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerChildren(0.1)}
          className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3"
        >
          {attorneys.map((attorney) => (
            <motion.div key={attorney.slug} variants={fadeUp}>
              <AttorneyCard attorney={attorney} />
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-14">
          <Button href="/attorneys" variant="secondary" showArrow>
            View Full Team
          </Button>
        </div>
      </div>
    </section>
  );
}
