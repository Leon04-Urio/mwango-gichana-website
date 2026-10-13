"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PracticeAreaCard } from "@/components/cards/PracticeAreaCard";
import { Button } from "@/components/ui/Button";
import { practiceAreas } from "@/lib/content/practiceAreas";
import { fadeUp, staggerChildren } from "@/lib/motion";

export function PracticeAreasGrid() {
  return (
    <section className="bg-paper py-24 sm:py-32">
      <div className="mx-auto max-w-8xl px-6 lg:px-10">
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <SectionHeader
            eyebrow="What We Do"
            title="Practice Areas"
            description="A general practice firm with particular depth across five areas, built around the legal needs of Kajiado South and the Amboseli ecosystem."
          />
          <div className="shrink-0">
            <Button href="/practice-areas" variant="secondary" showArrow>
              View All Practice Areas
            </Button>
          </div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerChildren(0.08)}
          className="mt-14 grid grid-cols-1 gap-px bg-border-hairline sm:grid-cols-2 lg:grid-cols-3"
        >
          {practiceAreas.map((area, index) => (
            <motion.div key={area.slug} variants={fadeUp}>
              <PracticeAreaCard area={area} index={index} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
