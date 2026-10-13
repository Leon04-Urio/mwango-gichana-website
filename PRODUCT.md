# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences of equal weight:

- **Individuals and families in Kajiado South and the wider Amboseli ecosystem** with a personal legal matter (land, succession, family disputes). They are often on a phone, looking for an advocate they can trust and reach directly.
- **Institutions and investors**: conservancies, NGOs and community-based organisations, SMEs, and diaspora investors. They need to vet the firm remotely before instructing it, mostly for land, corporate and compliance work.

## Product Purpose

The marketing and content site for Mwango Gichana & Co. Advocates, a boutique general-practice law firm in Kimana Town, Kajiado South. It exists to turn a visitor into an enquiry (contact form, phone, WhatsApp) and to give a prospective client enough substance on the firm's practice areas to trust it. Success is a qualified enquiry, measured by GA4 events for form submission, WhatsApp click and phone click.

## Positioning

Local depth with Nairobi calibre. The advocates are based in Kimana, at the heart of the Amboseli ecosystem. They understand group ranch history, conservancies and local land tenure, and they apply the technical rigour expected of a leading Kenyan firm. Tagline: "Trusted Legal Counsel for the Amboseli Ecosystem".

## Operating Context

- Practice areas: Environment and Land Law; Family and Succession; Corporate and Commercial; Litigation and Dispute Resolution; plus general practice (five areas in total, defined in `lib/content/practiceAreas.ts`).
- Courts: Magistrates' Courts, High Court of Kenya, Environment and Land Court.
- Client types: individuals, businesses and SMEs, NGOs and CBOs, conservancies, diaspora investors.
- Primary contact paths are phone (+254 741 947 265), WhatsApp (assumed to be the same number, to be confirmed), email, and the contact form (sent through Resend).
- The firm publishes articles, a client showcase and testimonials itself through Sanity Studio at `/studio`. Client logos and testimonials have an approval toggle that defaults to off, because client confidentiality matters.

## Capabilities and Constraints

- Next.js App Router, React, TypeScript, Tailwind CSS v4, Framer Motion, Sanity, Resend, GA4, deployed on Vercel from GitHub.
- Two content sources: `lib/content/*.ts` for firm info and practice areas (developer-edited), and Sanity for blog posts, clients and testimonials (firm-edited).
- **Mobile and low bandwidth first.** Many visitors are on phones with patchy connections in Kimana. WhatsApp and phone contact are primary paths, and pages must stay light.
- **Bilingual, English and Kiswahili.** A language toggle exists (`components/layout/LanguageToggle.tsx`, stored in localStorage). Content and layout must be able to work in both languages, including longer Kiswahili strings.
- **Professional advertising rules.** Copy must stay within Kenyan advocate advertising limits (Advocates Act and LSK rules): no boasting, no guaranteed outcomes, no comparative claims about other firms.
- Open decisions, still placeholders in `lib/content/firm.ts`: firm vision and mission, full street address, office hours, and homepage trust stats (years of combined experience, number of advocates).

## Brand Commitments

- Firm name: Mwango Gichana & Co. Advocates. Legal status line: "Advocates of the High Court of Kenya".
- Voice in existing copy is plain, direct and discreet. Values: Local Expertise with Nairobi Calibre Counsel; Accessible, Direct Advice; Discretion; Practical Strategy.
- The firm's mark is an "MG" monogram over a column and scales of justice, in navy and gold, with the wordmark "MWANGO GICHANA & CO. ADVOCATES". It exists only inside two mockup images (`public/hero-office-wall.jpg`, a wall sign, and `public/hero-seal-stamp.jpg`, a gold embossed seal on paper). No vector logo file has been supplied. The app icon and apple icon are also in `app/`.

## Evidence on Hand

- Real firm description, practice area content, contact details, and LinkedIn and Instagram profiles, all in `lib/content/firm.ts`.
- No real photography of Kimana, the Amboseli terrain, the office or the team has been supplied. The two images in `public/` are logo mockups, and the stock columns photo on the About teaser is an Unsplash placeholder.
- No confirmed testimonials, client logos, published articles, advocate count or years of experience yet. Sanity holds unapproved template entries only. Future work must not fabricate any of these.

## Product Principles

1. **Local knowledge is the proof.** Show the depth of understanding of Kajiado land, conservancies and communities through specific, accurate content, not generic legal language.
2. **Make contact the easy path.** Phone and WhatsApp are one tap away on every page, and the form is a fallback, not the only route.
3. **Plain language, discreet tone.** Advise directly, without jargon, hype or outcome promises. Personal matters need calm reassurance.
4. **Nothing unconfirmed presented as fact.** Placeholder stats, testimonials and logos stay hidden or clearly pending until the firm verifies them.
5. **Light and bilingual by default.** Every page works on a slow phone connection and in both English and Kiswahili.

## Accessibility & Inclusion

Audience includes users on low-end phones and slow connections, and users who read Kiswahili rather than English. No formal accessibility standard was specified; default to WCAG AA.
