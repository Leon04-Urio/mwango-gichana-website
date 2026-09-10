"use client";

import { Quote } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { fadeUp, staggerChildren } from "@/lib/motion";
import type { Testimonial } from "@/sanity/lib/types";

export function Testimonials({ testimonials }: { testimonials: Testimonial[] }) {
  if (testimonials.length === 0) return null;

  return (
    <section className="bg-navy-950 py-24 sm:py-32">
      <div className="mx-auto max-w-8xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="Client Feedback"
          title="What Clients Say"
          align="center"
          light
          className="mx-auto"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerChildren(0.1)}
          className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((t) => (
            <motion.figure
              key={t._id}
              variants={fadeUp}
              className="border border-ivory/15 p-8"
            >
              <Quote className="size-6 text-gold-400" aria-hidden="true" />
              <blockquote className="mt-5 text-ivory/85 leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              {(t.clientName || t.clientDescription) && (
                <figcaption className="mt-6 border-t border-ivory/10 pt-4 text-sm">
                  {t.clientName && (
                    <span className="font-medium text-ivory">{t.clientName}</span>
                  )}
                  {t.clientDescription && (
                    <span className="block text-ivory/50">{t.clientDescription}</span>
                  )}
                </figcaption>
              )}
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
