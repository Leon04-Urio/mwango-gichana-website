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

// Two panels side by side at every size: the city on the left carries the
// headline; the gold seal fills the right. On a phone the whole hero is compact.
export function Hero() {
  const reduceMotion = useReducedMotion();
  const router = useRouter();
  const choose = (slug: string) => {
    if (slug) router.push(`/practice-areas#${slug}`);
  };
  return (
    <section className="relative grid h-[28rem] grid-cols-[6fr_6fr] overflow-hidden bg-charcoal sm:h-[36rem] md:h-auto md:min-h-[100svh]">
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
          className="relative z-10 flex h-full flex-col justify-end px-5 pb-32 pt-20 sm:px-6 sm:pb-40 sm:pt-28 lg:px-10 lg:pb-44"
        >
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
