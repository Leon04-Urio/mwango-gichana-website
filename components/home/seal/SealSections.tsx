"use client";

import { useState } from "react";
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
import { cn } from "@/lib/utils";

const inView = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, amount: 0.05 },
} as const;

/* One image, one sentence. */
export function SealIntro() {
  return (
    <section className="bg-ivory py-16 sm:py-40">
      <div className="mx-auto grid max-w-8xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-12 lg:gap-24 lg:px-10">
        <motion.div {...inView} variants={fadeUp} className="lg:col-span-5">
          {/* Photo container. Add the firm's photo here when it is ready. */}
          <div className="relative flex aspect-[4/5] w-full items-center justify-center border border-border-hairline bg-ivory-dim">
            <span className="text-sm uppercase tracking-[0.2em] text-charcoal">Img place holder</span>
          </div>
        </motion.div>

        <motion.div {...inView} variants={fadeUp} className="lg:col-span-7">
          <span className="block h-px w-14 bg-gold-500" aria-hidden="true" />
          <h2 className="font-display display-light mt-8 max-w-2xl text-3xl leading-[1.15] text-balance text-navy-950 sm:text-4xl lg:text-5xl">
            A boutique practice, rooted in Kajiado South.
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-charcoal">
            Founded to bring Nairobi-calibre legal counsel to the Amboseli ecosystem, delivered by
            advocates who understand the land, the communities, and the issues unique to this part
            of Kenya.
          </p>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-charcoal">
            We are a general practice firm with particular depth in land and environment, family and
            succession, corporate and commercial matters, and litigation and dispute resolution.
          </p>
          <Link
            href="/about"
            className="focus-ring group mt-10 inline-flex items-center gap-2 border-b border-gold-500 pb-1 text-sm uppercase tracking-[0.2em] text-navy-900 transition-colors hover:text-gold-600"
          >
            The firm
            <ArrowUpRight className="size-4 text-gold-600" aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* Tall strips that widen as you point at them. */
export function SealPractice() {
  const [active, setActive] = useState(0);
  return (
    <section className="bg-navy-950 py-28 text-ivory sm:py-40">
      <div className="mx-auto max-w-8xl px-6 lg:px-10">
        <motion.div {...inView} variants={fadeUp}>
          <span className="block h-px w-14 bg-gold-400" aria-hidden="true" />
          <h2 className="font-display display-light mt-10 text-4xl leading-[1.1] sm:text-6xl">
            Practice areas
          </h2>
        </motion.div>

        <motion.div
          {...inView}
          variants={fadeUp}
          className="mt-16 flex h-[40rem] flex-col gap-2 md:h-[34rem] md:flex-row"
        >
          {practiceAreas.map((area, i) => {
            const on = active === i;
            return (
              <div
                key={area.slug}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                className={cn(
                  "relative cursor-pointer overflow-hidden bg-navy-900 transition-[flex] duration-500 ease-out",
                  on ? "flex-[5]" : "flex-1",
                )}
              >
                <div
                  className={cn(
                    "relative flex h-full p-6 md:flex-col md:justify-end md:p-8",
                    on ? "flex-col justify-end" : "items-center gap-4",
                  )}
                >
                  <div
                    className={cn(
                      "font-display text-lg text-gold-400 md:absolute md:left-8 md:top-5",
                      on && "mb-3 md:mb-0",
                    )}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  {!on && (
                    <h3 className="font-display text-xl md:absolute md:bottom-8 md:left-1/2 md:-translate-x-1/2 md:rotate-180 md:text-2xl md:[writing-mode:vertical-rl]">
                      {area.shortTitle}
                    </h3>
                  )}
                  {on && (
                    <div className="max-w-md">
                      <h3 className="font-display text-3xl leading-tight md:text-4xl">
                        {area.shortTitle}
                      </h3>
                      <p className="mt-4 line-clamp-4 text-base leading-relaxed text-ivory/80">
                        {area.summary}
                      </p>
                      <Link
                        href={`/practice-areas#${area.slug}`}
                        onClick={(e) => e.stopPropagation()}
                        className="focus-ring mt-6 inline-flex items-center gap-3 border border-gold-400 bg-gold-400 px-6 py-3 text-sm font-medium uppercase tracking-[0.15em] text-navy-950 transition-colors hover:bg-transparent hover:text-gold-400"
                      >
                        View details
                        <ArrowUpRight className="size-4" aria-hidden="true" />
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export function SealClose() {
  return (
    <section className="bg-paper py-28 text-center text-navy-950 sm:py-40">
      <motion.div {...inView} variants={fadeUp} className="mx-auto max-w-3xl px-6">
        <span className="mx-auto block h-px w-14 bg-gold-500" aria-hidden="true" />
        <h2 className="font-display display-light mt-10 text-4xl leading-[1.1] text-balance sm:text-6xl">
          Speak to an advocate
        </h2>
        <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-charcoal">
          Call or message us directly, or request a consultation. We respond promptly and in
          confidence.
        </p>
        <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
          <TrackedPhoneLink
            href={firm.contact.phoneHref}
            location="home_close"
            className="focus-ring inline-flex items-center justify-center gap-3 border border-navy-900 bg-navy-900 px-9 py-4 text-sm font-medium uppercase tracking-[0.2em] text-ivory transition-colors duration-300 hover:bg-transparent hover:text-navy-900"
          >
            <Phone className="size-4" aria-hidden="true" />
            {firm.contact.phoneDisplay}
          </TrackedPhoneLink>
          {firm.contact.whatsappNumber && (
            <TrackedWhatsAppLink
              href={whatsappHref(genericMessage)}
              className="focus-ring inline-flex items-center justify-center gap-3 border border-navy-900/40 px-9 py-4 text-sm uppercase tracking-[0.2em] text-navy-900 transition-colors duration-300 hover:bg-navy-900 hover:text-ivory"
            >
              <WhatsAppIcon className="size-4" />
              WhatsApp
            </TrackedWhatsAppLink>
          )}
        </div>
        <Link
          href="/contact"
          className="focus-ring mt-10 inline-block border-b border-gold-500 pb-1 text-sm uppercase tracking-[0.2em] text-navy-900 transition-colors hover:text-gold-600"
        >
          Request a consultation
        </Link>
      </motion.div>
    </section>
  );
}
