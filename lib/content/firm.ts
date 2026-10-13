// Real firm details as supplied by the client. Fields wrapped in [ ] are
// placeholders that MUST be confirmed/replaced before launch — see
// README.md "Client Content Checklist".

export const firm = {
  name: "Mwango Gichana & Co. Advocates",
  shortName: "Mwango Gichana",
  tagline: "Trusted Legal Counsel for the Amboseli Ecosystem",
  legalStatus: "Advocates of the High Court of Kenya",

  descriptionShort:
    "A boutique law firm based in Kimana Town, Kajiado South, providing individuals, businesses, NGOs, conservancies and investors with the calibre of legal counsel available in Nairobi, delivered by advocates who understand this part of Kenya.",

  aboutParagraphs: [
    "Mwango Gichana & Co. Advocates is a boutique law firm based in Kimana Town, Kajiado South, at the heart of the Amboseli ecosystem. We were founded to provide individuals, businesses, NGOs, conservancies, and investors in this region with the same calibre of legal counsel available in Nairobi, delivered by advocates who understand the terrain, the people, and the issues unique to this part of Kenya.",
    "We are a general practice firm with particular depth in Land & Environment, Family & Succession, Corporate & Commercial, and Litigation & Dispute Resolution. Our work spans the full range of legal needs in Kajiado County, from conveyancing and group ranch matters to family disputes, business formation, and courtroom representation before the Magistrates' Courts, the High Court, and the Environment and Land Court.",
  ],

  // Not yet supplied by the client — placeholder until confirmed.
  vision: "[Firm vision statement to be supplied by the client]",
  mission: "[Firm mission statement to be supplied by the client]",

  values: [
    {
      title: "Local Expertise, Nairobi Calibre Counsel",
      description:
        "We combine deep familiarity with Kajiado County, its land tenure history, conservancies, and communities, with the technical rigour expected of a leading Kenyan law firm.",
    },
    {
      title: "Accessible, Direct Advice",
      description:
        "Clients deal directly with the advocates handling their matter, in plain language, without unnecessary layers.",
    },
    {
      title: "Discretion",
      description:
        "Family, succession and land matters are often personal. We treat every instruction with the confidentiality it deserves.",
    },
    {
      title: "Practical Strategy",
      description:
        "We advise on the outcome that actually serves the client, in the boardroom, at the negotiating table, or in court, not simply the most litigious path.",
    },
  ],

  contact: {
    email: "gloria@mwangogichanalegal.com",
    phoneDisplay: "+254 741 947 265",
    phoneHref: "tel:+254741947265",
    // Assumed to be WhatsApp-reachable on the same number — CONFIRM with
    // the client before launch (see README checklist).
    whatsappNumber: "254741947265",
    linkedin: "https://www.linkedin.com/company/mwango-gichana-co-advocates",
  },

  location: {
    town: "Kimana Town",
    subCounty: "Kajiado South",
    county: "Kajiado County",
    region: "Amboseli ecosystem",
    country: "Kenya",
    // Full street/plot address not yet supplied.
    addressLine: "[Building / Plot details, Kimana Town, Kajiado South]",
    mapEmbedUrl:
      "https://www.google.com/maps?q=Kimana,Kajiado,Kenya&output=embed",
    officeHours: [
      { day: "Monday to Friday", hours: "[8:00 AM to 5:00 PM]" },
      { day: "Saturday", hours: "[By appointment]" },
      { day: "Sunday", hours: "Closed" },
    ],
  },

  courts: [
    "Magistrates' Courts",
    "High Court of Kenya",
    "Environment and Land Court",
  ],

  clientTypes: [
    "Individuals",
    "Businesses & SMEs",
    "NGOs & Community-Based Organisations",
    "Conservancies",
    "Diaspora investors",
  ],

  // Not rendered anywhere yet. Placeholder figures until the client verifies
  // them; the homepage band shows the courts instead (see CourtsBand).
  stats: [
    { label: "Practice Areas", value: "5" },
    { label: "Years of Combined Experience", value: "[XX]+" },
    { label: "Advocates", value: "[X]" },
    { label: "Courts Appeared Before", value: "3" },
  ],

  social: {
    linkedin: "https://www.linkedin.com/company/mwango-gichana-co-advocates",
    instagram: "https://www.instagram.com/mwangogichanaco.advocates",
  },
} as const;
