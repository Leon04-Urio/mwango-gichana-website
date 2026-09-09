"use client";

import { MessageCircle } from "lucide-react";
import { firm } from "@/lib/content/firm";

export function WhatsAppButton() {
  const number = firm.contact.whatsappNumber;
  if (!number) return null;

  const message = encodeURIComponent(
    "Hello Mwango Gichana & Co. Advocates, I would like to request a consultation."
  );

  return (
    <a
      href={`https://wa.me/${number}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="focus-ring group fixed bottom-6 right-6 z-40 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-navy-950/20 transition-transform duration-300 hover:scale-105 sm:bottom-8 sm:right-8"
    >
      <MessageCircle className="size-6" aria-hidden="true" fill="white" />
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded bg-navy-950 px-3 py-1.5 text-xs font-medium text-ivory opacity-0 transition-opacity duration-200 group-hover:opacity-100 sm:block">
        WhatsApp Us
      </span>
    </a>
  );
}
