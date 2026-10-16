"use client";

import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { WhatsAppIcon } from "@/components/ui/icons/WhatsAppIcon";
import { TrackedPhoneLink } from "@/components/analytics/TrackedPhoneLink";
import { TrackedWhatsAppLink } from "@/components/analytics/TrackedWhatsAppLink";
import { firm } from "@/lib/content/firm";
import { practiceAreas } from "@/lib/content/practiceAreas";
import { genericMessage, whatsappHref } from "@/lib/content/homepage";
import { fadeUp } from "@/lib/motion";

const inView = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, amount: 0.05 },
} as const;

/* One image, one sentence. */
export function SealIntro() {
  return (
    <section className="bg-ivory py-12 sm:py-40">
      <div className="mx-auto grid max-w-8xl grid-cols-1 items-center gap-8 px-6 lg:grid-cols-12 lg:gap-24 lg:px-10">
        <motion.div {...inView} variants={fadeUp} className="hidden lg:col-span-5 lg:block">
          {/* Photo container. Add the firm's photo here when it is ready. */}
          <div className="relative flex aspect-[4/5] w-full items-center justify-center border border-border-hairline bg-ivory-dim">
            <span className="text-sm uppercase tracking-[0.2em] text-charcoal">Img place holder</span>
          </div>
        </motion.div>

        <motion.div {...inView} variants={fadeUp} className="lg:col-span-7">
          <span className="block h-px w-14 bg-gold-500" aria-hidden="true" />
          <h2 className="font-display display-light mt-6 max-w-2xl text-2xl leading-[1.15] text-balance text-navy-950 sm:mt-8 sm:text-4xl lg:text-5xl">
            A boutique practice, rooted in Kajiado South.
          </h2>
          {/* Phones only: the photo container sits under the heading. */}
          <div className="relative mt-5 flex aspect-[2/1] w-full items-center justify-center border border-border-hairline bg-ivory-dim lg:hidden">
            <span className="text-sm uppercase tracking-[0.2em] text-charcoal">Img place holder</span>
          </div>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-charcoal sm:mt-8 sm:text-lg">
            Founded to bring Nairobi-calibre legal counsel to the Amboseli ecosystem, delivered by
            advocates who understand the land, the communities, and the issues unique to this part
            of Kenya.
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-charcoal sm:mt-5 sm:text-lg">
            We are a general practice firm with particular depth in land and environment, family and
            succession, corporate and commercial matters, and litigation and dispute resolution.
          </p>
          <Link
            href="/about"
            className="focus-ring group mt-7 inline-flex items-center gap-2 border-b border-gold-500 pb-1 text-xs uppercase sm:mt-10 sm:text-sm tracking-[0.2em] text-navy-900 transition-colors hover:text-gold-600"
          >
            The firm
            <ArrowUpRight className="size-4 text-gold-600" aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* A ruled index. Heading on the left, one row per area on the right, each a plain link. */
export function SealPractice() {
  return (
    <section className="bg-navy-950 py-14 text-ivory sm:py-28">
      <div className="mx-auto grid max-w-8xl grid-cols-1 gap-8 px-6 lg:grid-cols-12 lg:gap-16 lg:px-10">
        <motion.div {...inView} variants={fadeUp} className="lg:col-span-4">
          <h2 className="font-display display-light text-3xl leading-[1.1] sm:text-5xl lg:sticky lg:top-32">
            Practice areas
          </h2>
        </motion.div>

        <motion.div {...inView} variants={fadeUp} className="lg:col-span-8">
          <ul className="border-t border-border-hairline-dark">
            {practiceAreas.map((area, i) => (
              <li key={area.slug} className="border-b border-border-hairline-dark">
                <Link
                  href={`/practice-areas#${area.slug}`}
                  className="focus-ring group grid grid-cols-[2.25rem_minmax(0,1fr)_1.5rem] items-start gap-x-3 py-5 transition-[padding] duration-300 hover:pl-2 sm:grid-cols-[3.5rem_minmax(0,1fr)_2rem] sm:gap-x-4 sm:py-7"
                >
                  <span className="pt-1 font-display text-base text-gold-400 sm:pt-2 sm:text-lg">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="min-w-0">
                    <span className="block font-display text-xl leading-snug transition-colors group-hover:text-gold-400 sm:text-3xl">
                      {area.shortTitle}
                    </span>
                    <span className="mt-1.5 line-clamp-2 max-w-xl text-sm leading-snug text-ivory/70 sm:mt-2 sm:text-base sm:leading-relaxed">
                      {area.summary}
                    </span>
                  </span>
                  <ArrowUpRight
                    className="mt-1.5 size-5 text-gold-400 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 sm:mt-2 sm:size-6"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/practice-areas"
            className="focus-ring group mt-6 inline-flex min-h-11 items-center gap-2 border-b border-gold-400 pb-1 text-sm uppercase tracking-[0.2em] text-ivory transition-colors hover:text-gold-400"
          >
            All practice areas
            <ArrowUpRight className="size-4 text-gold-400" aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export function SealClose() {
  return (
    <section className="bg-paper py-10 text-center text-navy-950 sm:py-14">
      <motion.div {...inView} variants={fadeUp} className="mx-auto max-w-3xl px-6">
        <h2 className="font-display display-light text-2xl leading-[1.1] text-balance sm:text-4xl">
          Speak to an advocate
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-charcoal sm:mt-4 sm:text-base">
          Call or message us directly, or request a consultation. We respond promptly and in
          confidence.
        </p>
        <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:mt-6 sm:flex-row sm:gap-4">
          <TrackedPhoneLink
            href={firm.contact.phoneHref}
            location="home_close"
            className="focus-ring inline-flex items-center justify-center gap-3 border border-navy-900 bg-navy-900 px-6 py-3 text-xs sm:px-7 sm:text-sm font-medium uppercase tracking-[0.2em] text-ivory transition-colors duration-300 hover:bg-transparent hover:text-navy-900"
          >
            <Phone className="size-4" aria-hidden="true" />
            {firm.contact.phoneDisplay}
          </TrackedPhoneLink>
          {firm.contact.whatsappNumber && (
            <TrackedWhatsAppLink
              href={whatsappHref(genericMessage)}
              className="focus-ring inline-flex items-center justify-center gap-3 border border-navy-900/40 px-6 py-3 text-xs sm:px-7 sm:text-sm uppercase tracking-[0.2em] text-navy-900 transition-colors duration-300 hover:bg-navy-900 hover:text-ivory"
            >
              <WhatsAppIcon className="size-4" />
              WhatsApp
            </TrackedWhatsAppLink>
          )}
        </div>
        <Link
          href="/contact"
          className="focus-ring mt-4 inline-block border-b border-gold-500 pb-1 text-xs sm:mt-5 sm:text-sm uppercase tracking-[0.2em] text-navy-900 transition-colors hover:text-gold-600"
        >
          Request a consultation
        </Link>
      </motion.div>
    </section>
  );
}
