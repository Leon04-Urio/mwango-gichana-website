"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { TrackedPhoneLink } from "@/components/analytics/TrackedPhoneLink";
import { TrackedWhatsAppLink } from "@/components/analytics/TrackedWhatsAppLink";
import { firm } from "@/lib/content/firm";
import { practiceAreas } from "@/lib/content/practiceAreas";
import { genericMessage, whatsappHref } from "@/lib/content/homepage";
import { fadeUp, staggerChildren } from "@/lib/motion";

// One full-width photograph with the headline on the darkened left and the
// enquiry bar beneath it. On a phone the whole hero is compact.
export function Hero() {
  const reduceMotion = useReducedMotion();
  const router = useRouter();
  const choose = (slug: string) => {
    if (slug) router.push(`/practice-areas#${slug}`);
  };
  return (
    <section className="relative flex h-[28rem] items-end overflow-hidden bg-charcoal sm:h-[36rem] md:h-auto md:min-h-[100svh]">
      <motion.div
        className="absolute inset-0 origin-[70%_40%]"
        initial={{ scale: reduceMotion ? 1.06 : 1 }}
        animate={{ scale: 1.06 }}
        transition={{ duration: 3, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src="/hero-office.jpg"
          alt="An advocate working at a laptop in a professional office"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[75%_8%]"
        />
      </motion.div>
      <div
        className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-950/60 to-transparent md:via-navy-950/45"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"
        aria-hidden="true"
      />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerChildren(0.15)}
        className="relative z-10 mx-auto flex w-full max-w-8xl flex-col px-5 pb-32 pt-20 sm:px-6 sm:pb-40 sm:pt-28 lg:px-10 lg:pb-44"
      >
        <div className="max-w-xl">
          <motion.span variants={fadeUp} className="block h-px w-14 bg-gold-400" aria-hidden="true" />
          <motion.h1
            variants={fadeUp}
            className="font-display display-light mt-5 max-w-lg text-[1.5rem] leading-[1.12] text-balance text-ivory sm:mt-8 sm:text-4xl lg:text-5xl"
          >
            Legal counsel for individuals, families and businesses across Kenya
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
        </div>
      </motion.div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute inset-x-5 bottom-5 z-20 sm:bottom-10 sm:left-6 sm:right-auto sm:w-[26rem] lg:bottom-14 lg:left-10 lg:w-[30rem]"
      >
        <label htmlFor="hero-need" className="sr-only">
          What can we help you with?
        </label>
        <div className="relative">
          <select
            id="hero-need"
            defaultValue=""
            onChange={(e) => choose(e.target.value)}
            className="focus-ring h-12 w-full appearance-none border border-border-hairline bg-white pl-4 pr-10 text-sm text-navy-950 sm:h-14 sm:text-base"
          >
            <option value="" disabled>
              What can we help you with?
            </option>
            {practiceAreas.map((a) => (
              <option key={a.slug} value={a.slug}>
                {a.shortTitle}
              </option>
            ))}
          </select>
          <ChevronDown
            className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-navy-950"
            aria-hidden="true"
          />
        </div>
        <p className="mt-3 text-xs text-ivory/90 sm:text-sm">
          Or speak to an advocate:{" "}
          <TrackedPhoneLink
            href={firm.contact.phoneHref}
            location="hero"
            className="focus-ring inline-block py-1 underline decoration-gold-400 underline-offset-4 hover:text-gold-400"
          >
            Call
          </TrackedPhoneLink>
          <span className="mx-2 text-gold-400" aria-hidden="true">&middot;</span>
          <TrackedWhatsAppLink
            href={whatsappHref(genericMessage)}
            className="focus-ring inline-block py-1 underline decoration-gold-400 underline-offset-4 hover:text-gold-400"
          >
            WhatsApp
          </TrackedWhatsAppLink>
        </p>
      </form>
    </section>
  );
}
