"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, staggerChildren } from "@/lib/motion";

// Two panels side by side at every size: the city on the left carries the
// headline; the gold seal fills the right. On a phone the whole hero is compact.
export function Hero() {
  const reduceMotion = useReducedMotion();
  return (
    <section className="grid h-[22rem] grid-cols-[6fr_6fr] overflow-hidden bg-charcoal sm:h-[34rem] md:h-auto md:min-h-[100svh]">
      <div className="relative z-10 col-start-1 row-start-1 w-[118%] md:w-[112%] [-webkit-mask-image:linear-gradient(to_right,black_72%,transparent)] [mask-image:linear-gradient(to_right,black_72%,transparent)] md:[-webkit-mask-image:linear-gradient(to_right,black_78%,transparent)] md:[mask-image:linear-gradient(to_right,black_78%,transparent)]">
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
          className="relative z-10 flex h-full flex-col justify-end px-5 pb-6 pt-20 sm:px-6 sm:pb-14 sm:pt-28 lg:px-10 lg:pb-20"
        >
          <motion.span variants={fadeUp} className="block h-px w-14 bg-gold-400" aria-hidden="true" />
          <motion.h1
            variants={fadeUp}
            className="font-display display-light mt-5 max-w-md text-[1.75rem] leading-[1.08] text-balance text-ivory sm:mt-8 sm:text-5xl lg:text-6xl"
          >
            Dependable Legal Counsel
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-4 flex flex-wrap items-center gap-x-2 text-[0.65rem] uppercase tracking-[0.14em] text-ivory/90 sm:mt-6 sm:gap-x-4 sm:text-sm sm:tracking-[0.3em]"
          >
            Trust
            <span className="text-gold-400" aria-hidden="true">&middot;</span>
            Integrity
            <span className="text-gold-400" aria-hidden="true">&middot;</span>
            Discretion
          </motion.p>
        </motion.div>
      </div>

      <div className="relative col-span-2 col-start-1 row-start-1 overflow-hidden bg-charcoal">
        {/* Wider than the panel and pinned right, so the join in the wide image is always cropped out. */}
        <div className="absolute inset-y-0 -right-16 w-[205%] sm:right-0 sm:w-[190%] md:w-[130%]">
          <Image
            src="/hero-seal-stamp-wide.jpg"
            alt="Mwango Gichana & Co. Advocates wax seal stamp on a document"
            fill
            priority
            sizes="(min-width: 768px) 130vw, 230vw"
            className="object-cover object-[100%_52%]"
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
