"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { firm } from "@/lib/content/firm";
import { fadeUp } from "@/lib/motion";

export function CTABand() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-20 sm:py-24">
      <div
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 border-l border-gold-500/20 lg:block"
        aria-hidden="true"
      />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp}
        className="relative mx-auto flex max-w-8xl flex-col items-start justify-between gap-8 px-6 lg:flex-row lg:items-center lg:px-10"
      >
        <div className="max-w-xl">
          <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">
            <span className="h-px w-8 bg-gold-400" aria-hidden="true" />
            Speak With Our Team
          </p>
          <h2 className="font-display text-3xl leading-tight text-ivory sm:text-4xl">
            Discuss Your Legal Matter With an Advocate
          </h2>
          <p className="mt-4 text-ivory/70">
            Every matter starts with a conversation. Reach out and we&apos;ll
            direct you to the right advocate for your situation.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <Button href="/contact" variant="outline-light" size="lg" showArrow>
            Request a Consultation
          </Button>
          <a
            href={firm.contact.phoneHref}
            className="focus-ring flex items-center gap-2.5 text-ivory/80 transition-colors hover:text-ivory"
          >
            <Phone className="size-4 text-gold-400" aria-hidden="true" />
            <span className="text-sm font-medium">
              {firm.contact.phoneDisplay}
            </span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
