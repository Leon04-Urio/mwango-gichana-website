"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { fadeUp, staggerChildren } from "@/lib/motion";
import type { ClientLogo } from "@/sanity/lib/types";
import { resolveImage } from "@/sanity/lib/fetch";

export function ClientLogos({ clients }: { clients: ClientLogo[] }) {
  if (clients.length === 0) return null;

  return (
    <section className="border-y border-border-hairline bg-ivory py-20 sm:py-24">
      <div className="mx-auto max-w-8xl px-6 lg:px-10">
        <SectionHeader eyebrow="Trusted By" title="Organizations We've Worked With" align="center" className="mx-auto" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerChildren(0.08)}
          className="mt-14 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5"
        >
          {clients.map((c) => {
            const logo = resolveImage(c.logo, c.name);
            const content = logo ? (
              <div className="relative h-14 w-full grayscale transition-all duration-300 hover:grayscale-0">
                <Image src={logo.src} alt={logo.alt} fill className="object-contain" sizes="200px" />
              </div>
            ) : (
              <p className="text-center font-display text-lg text-charcoal-soft">{c.name}</p>
            );

            return (
              <motion.div key={c._id} variants={fadeUp} className="flex items-center justify-center">
                {c.website ? (
                  <a
                    href={c.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring flex w-full items-center justify-center"
                    aria-label={c.name}
                  >
                    {content}
                  </a>
                ) : (
                  content
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
