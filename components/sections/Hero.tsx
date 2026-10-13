"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, staggerChildren } from "@/lib/motion";

// Two panels: the city on the left carries the headline and one button; the
// gold seal fills the right. They stack on a phone.
export function Hero() {
  const reduceMotion = useReducedMotion();
  return (
    <section className="grid min-h-[100svh] grid-rows-[1.1fr_1fr] overflow-hidden bg-charcoal md:grid-cols-[6fr_6fr] md:grid-rows-1">
      <div className="relative z-10 min-h-[26rem] md:col-start-1 md:row-start-1 max-md:-mb-24 max-md:pb-24 md:w-[112%] [-webkit-mask-image:linear-gradient(to_bottom,black_78%,transparent)] [mask-image:linear-gradient(to_bottom,black_78%,transparent)] md:[-webkit-mask-image:linear-gradient(to_right,black_78%,transparent)] md:[mask-image:linear-gradient(to_right,black_78%,transparent)]">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute inset-0 origin-[45%_45%]"
            initial={{ scale: reduceMotion ? 1.14 : 1 }}
            animate={{ scale: 1.14 }}
            transition={{ duration: 3, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src="/hero-nairobi.jpg"
              alt="A raised road curving past office towers in the city centre"
              fill
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover object-[50%_22%]"
            />
          </motion.div>
        </div>
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/60 md:via-black/20 md:to-black/45"
          aria-hidden="true"
        />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerChildren(0.15)}
          className="relative z-10 flex h-full flex-col justify-end px-6 pb-14 pt-28 max-md:pb-36 lg:px-10 lg:pb-20"
        >
          <motion.span variants={fadeUp} className="block h-px w-14 bg-gold-400" aria-hidden="true" />
          <motion.h1
            variants={fadeUp}
            className="font-display display-light mt-8 max-w-md text-4xl leading-[1.05] text-balance text-ivory sm:text-5xl lg:text-6xl"
          >
            Dependable Legal Counsel
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-6 flex flex-wrap items-center gap-x-2.5 text-xs uppercase tracking-[0.18em] text-ivory/90 sm:gap-x-4 sm:text-sm sm:tracking-[0.3em]"
          >
            Trust
            <span className="text-gold-400" aria-hidden="true">&middot;</span>
            Integrity
            <span className="text-gold-400" aria-hidden="true">&middot;</span>
            Discretion
          </motion.p>
        </motion.div>
      </div>

      <div className="relative min-h-[22rem] overflow-hidden bg-charcoal md:col-span-2 md:col-start-1 md:row-start-1">
        {/* Wider than the panel and pinned right, so the join in the wide image is always cropped out. */}
        <div className="absolute inset-y-0 right-0 w-[190%] md:w-[130%]">
          <Image
            src="/hero-seal-stamp-wide.jpg"
            alt="Mwango Gichana & Co. Advocates wax seal stamp on a document"
            fill
            priority
            sizes="(min-width: 768px) 130vw, 190vw"
            className="object-cover object-[100%_58%]"
          />
        </div>
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/35"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
