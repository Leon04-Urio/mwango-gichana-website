"use client";

import { sendGAEvent } from "@next/third-parties/google";

// Fires GA4 events for the site's key conversion actions. GA4 itself
// decides what counts as a "key event" (conversion) — mark these event
// names as key events in the GA4 admin UI once the property is set up.
// See README.md "Analytics — GA4 & Search Console".

export function trackContactFormSubmit(practiceArea?: string) {
  sendGAEvent("event", "generate_lead", {
    event_category: "contact_form",
    practice_area: practiceArea || "unspecified",
  });
}

export function trackWhatsAppClick() {
  sendGAEvent("event", "contact_whatsapp_click", {
    event_category: "engagement",
  });
}

export function trackPhoneClick(location: string) {
  sendGAEvent("event", "contact_phone_click", {
    event_category: "engagement",
    click_location: location,
  });
}
