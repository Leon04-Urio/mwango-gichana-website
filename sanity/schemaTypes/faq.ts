import { defineField, defineType } from "sanity";

// Reusable object type, embedded inside practiceArea.faqs and also
// available as a standalone document for general site-wide FAQs.
export const faqObject = defineType({
  name: "faq",
  title: "FAQ",
  type: "object",
  fields: [
    defineField({ name: "question", title: "Question", type: "string", validation: (r) => r.required() }),
    defineField({ name: "answer", title: "Answer", type: "text", validation: (r) => r.required() }),
  ],
  preview: {
    select: { title: "question" },
  },
});

export const faqDocument = defineType({
  name: "siteFaq",
  title: "General Site FAQ",
  type: "document",
  fields: [
    defineField({ name: "question", title: "Question", type: "string", validation: (r) => r.required() }),
    defineField({ name: "answer", title: "Answer", type: "text", validation: (r) => r.required() }),
    defineField({ name: "order", title: "Display Order", type: "number" }),
  ],
});
