import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "firmName", title: "Firm Name", type: "string" }),
    defineField({ name: "tagline", title: "Tagline", type: "string" }),
    defineField({ name: "logo", title: "Logo", type: "image" }),
    defineField({
      name: "vision",
      title: "Vision Statement",
      type: "text",
    }),
    defineField({
      name: "mission",
      title: "Mission Statement",
      type: "text",
    }),
    defineField({
      name: "aboutParagraphs",
      title: "About — Who We Are",
      type: "array",
      of: [{ type: "text" }],
    }),
    defineField({
      name: "values",
      title: "Core Values",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", type: "string" },
            { name: "description", type: "text" },
          ],
        },
      ],
    }),
    defineField({
      name: "stats",
      title: "Trust Stats",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", type: "string" },
            { name: "value", type: "string" },
          ],
        },
      ],
    }),
    defineField({ name: "phone", title: "Phone (display)", type: "string" }),
    defineField({ name: "phoneHref", title: "Phone (tel: link)", type: "string" }),
    defineField({
      name: "whatsappNumber",
      title: "WhatsApp Number (intl format, no +)",
      type: "string",
    }),
    defineField({ name: "email", title: "Email", type: "string" }),
    defineField({ name: "linkedin", title: "LinkedIn URL", type: "url" }),
    defineField({
      name: "addressLine",
      title: "Street / Building Address",
      type: "string",
    }),
    defineField({ name: "town", title: "Town", type: "string" }),
    defineField({ name: "subCounty", title: "Sub-County", type: "string" }),
    defineField({ name: "county", title: "County", type: "string" }),
    defineField({
      name: "officeHours",
      title: "Office Hours",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "day", type: "string" },
            { name: "hours", type: "string" },
          ],
        },
      ],
    }),
    defineField({
      name: "googleMapsEmbedUrl",
      title: "Google Maps Embed URL",
      type: "url",
    }),
    defineField({
      name: "googleBusinessProfileUrl",
      title: "Google Business Profile URL",
      type: "url",
    }),
  ],
});
