"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { firm } from "@/lib/content/firm";
import { fadeUp } from "@/lib/motion";

export function AboutTeaser() {
  return (
    <section className="bg-ivory py-24 sm:py-32">
      <div className="mx-auto grid max-w-8xl grid-cols-1 gap-16 px-6 lg:grid-cols-12 lg:gap-10 lg:px-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="relative lg:col-span-5"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1519674921880-e784bc34ebd4?q=80&w=1400&auto=format&fit=crop"
              alt="Detail of classical architectural columns, evoking the firm's grounding in legal tradition"
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
          </div>
          <div
            className="absolute -bottom-6 -right-6 hidden h-32 w-32 border border-gold-500/60 sm:block"
            aria-hidden="true"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="lg:col-span-7 lg:pl-4"
        >
          <SectionHeader eyebrow="Who We Are" title="Counsel That Understands the Ground It Stands On" />
          <div className="mt-7 space-y-5 text-charcoal-soft leading-relaxed">
            {firm.aboutParagraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>

          <dl className="mt-10 grid grid-cols-1 gap-6 border-t border-border-hairline pt-8 sm:grid-cols-2">
            {firm.values.slice(0, 4).map((value) => (
              <div key={value.title}>
                <dt className="font-display text-lg text-navy-950">
                  {value.title}
                </dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-charcoal-soft">
                  {value.description}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-10">
            <Button href="/about" variant="secondary" showArrow>
              Learn More About Us
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
