import Image from "next/image";
import { ContactForm } from "@/components/forms/ContactForm";
import type { Testimonial } from "@/sanity/lib/types";

// The enquiry form with the seal beside it. A testimonial card shows only once one is approved.
export function HomeContact({ testimonials }: { testimonials: Testimonial[] }) {
  const quote = testimonials[0];

  return (
    <section id="contact-us" className="scroll-mt-20 bg-white py-14 sm:py-24">
      <div className="mx-auto grid max-w-8xl grid-cols-1 gap-12 px-6 lg:grid-cols-12 lg:gap-12 lg:px-10">
        <div className="lg:col-span-7">
          <h2 className="font-display text-xl uppercase tracking-[0.12em] text-navy-950">
            Send an Enquiry
          </h2>
          <p className="mt-2 text-sm text-charcoal">Fields marked * are required.</p>
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>

        <aside className="lg:col-span-5">
          <div className="relative flex min-h-[24rem] flex-col justify-end overflow-hidden bg-navy-900 p-4 sm:min-h-[36rem] sm:p-8">
            <div className="absolute inset-y-0 right-0 w-[240%] sm:w-[200%]">
              <Image
                src="/hero-seal-stamp-wide.jpg"
                alt="Mwango Gichana & Co. Advocates seal on a document"
                fill
                sizes="100vw"
                className="object-cover object-[100%_40%]"
              />
            </div>
            <div
              className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent"
              aria-hidden="true"
            />

            {quote && (
              <div className="relative bg-white p-5 text-navy-950 sm:p-8">
                <figure>
                  <blockquote className="text-sm leading-relaxed text-charcoal sm:text-base">
                    &ldquo;{quote.quote}&rdquo;
                  </blockquote>
                  {(quote.clientName || quote.clientDescription) && (
                    <figcaption className="mt-3 font-display text-base sm:text-lg">
                      {quote.clientName}
                      {quote.clientDescription && (
                        <span className="block font-sans text-sm text-charcoal">
                          {quote.clientDescription}
                        </span>
                      )}
                    </figcaption>
                  )}
                </figure>
              </div>
            )}
          </div>
        </aside>
      </div>
    </section>
  );
}
