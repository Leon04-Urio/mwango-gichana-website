"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { firm } from "@/lib/content/firm";
import { fadeUp, staggerChildren } from "@/lib/motion";

export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-end overflow-hidden bg-navy-950 sm:min-h-screen">
      <Image
        src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=2400&auto=format&fit=crop"
        alt="Acacia trees on the open savannah of the Amboseli ecosystem, Kajiado County"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_35%] opacity-[0.55]"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-navy-950/40"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-navy-950/60 via-transparent to-transparent"
        aria-hidden="true"
      />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerChildren(0.15)}
        className="relative z-10 mx-auto w-full max-w-8xl px-6 pb-20 pt-40 sm:pb-28 lg:px-10"
      >
        <motion.p
          variants={fadeUp}
          className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold-400"
        >
          <span className="h-px w-10 bg-gold-400" aria-hidden="true" />
          {firm.legalStatus} &middot; {firm.location.subCounty}, Kenya
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="max-w-3xl font-display text-4xl leading-[1.08] text-balance text-ivory sm:text-5xl md:text-6xl"
        >
          Trusted Legal Counsel for Kajiado South &amp; the Amboseli Ecosystem
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-7 max-w-xl text-base leading-relaxed text-ivory/75 sm:text-lg"
        >
          {firm.descriptionShort}
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <Button href="/contact" variant="primary" size="lg" showArrow>
            Request a Consultation
          </Button>
          <Button href="/practice-areas" variant="outline-light" size="lg">
            Explore Our Practice Areas
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
