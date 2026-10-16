# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

The site serves three groups of readers, in roughly equal measure. Each arrives with a different level of urgency and a different question, and the site must answer all three without making any of them feel they are on the wrong page.

- **Individuals and families across Kenya** who have a personal legal matter: a land purchase or dispute, a succession or estate, a family disagreement, a demand letter, or a dispute that is heading to court. They are often on a phone, often anxious, and usually need a clear first step more than they need a long explanation. They want to know that a qualified advocate will take their matter seriously, treat it in confidence and tell them plainly what their options are.
- **Businesses, SMEs and entrepreneurs** who need practical, dependable legal support: registering and structuring a company, drafting and reviewing commercial agreements, resolving a commercial dispute, or taking advice before a transaction. They read quickly, compare firms, and look for evidence of professionalism, process and responsiveness before they pick up the phone.
- **Institutions and investors**: non-governmental and community-based organisations, conservancies, development partners and diaspora investors, who often cannot attend in person. They vet the firm remotely before instructing it, mostly for land, corporate, compliance and due diligence work, and they expect the website to read like the front page of an established firm.

## Product Purpose

This is the corporate website of Mwango Gichana & Co. Advocates, a general-practice law firm whose offices are in Kimana Town, Kajiado South, and which acts for clients throughout the Republic of Kenya. The site has three jobs.

1. **Establish credibility quickly.** A first-time visitor should conclude within a few seconds that this is a serious, well-run professional practice: structured, clear about what it does, and accountable to the rules that govern advocates.
2. **Prompt the visitor to seek counsel straight away.** The first screen asks the visitor what they need help with and moves them directly towards a practice area, a phone call or a WhatsApp message, in the manner of a booking or enquiry bar. A visitor should never have to hunt for the way to instruct the firm.
3. **Give enough substance to trust the firm.** Each practice area explains the services offered, the problems clients commonly bring, how the firm assists, the relevant Kenyan legal context and answers to common questions. The articles section demonstrates knowledge and gives prospective clients something useful before they make contact.

Success is a qualified enquiry, measured by GA4 events for form submission, WhatsApp click and phone click.

## Positioning

Mwango Gichana & Co. Advocates presents itself as an ethical, practical and dependable full-service firm for individuals, families, businesses and institutions anywhere in Kenya. Its offices happen to be in Kimana Town, and that is a fact about where the firm sits, not a limit on whom it serves or a feature to be placed in every headline. The firm's location appears in the footer, the contact page and the About page, where it belongs, and is not used to narrow the national scope of the firm's work.

The firm's character is corporate in the best sense: methodical, plainly spoken and careful. It combines the technical rigour expected of a leading Kenyan practice with direct access to the advocate who is handling the matter. Tagline: "Trusted Legal Counsel".

The overall impression the site should create is that of an established firm with an orderly way of working. Confidence should come from clear structure, specific description of services, complete information and a consistent professional voice, and never from boasting.

## Operating Context

- Practice areas: Environment and Land Law; Family and Succession; Corporate and Commercial; Litigation and Dispute Resolution; and Legal Research, Opinions and Due Diligence (five areas in total, defined in `lib/content/practiceAreas.ts`). The firm describes itself as a general practice, with particular depth in these areas.
- Courts: Magistrates' Courts, the High Court of Kenya and the Environment and Land Court.
- Client types: individuals and families, businesses and SMEs, NGOs and community-based organisations, conservancies and diaspora investors.
- Primary contact paths are phone (+254 741 947 265), WhatsApp (assumed to be the same number; this is to be confirmed with the firm), email, and the contact form (sent through Resend).
- The firm publishes articles, a client showcase and testimonials itself through Sanity Studio at `/studio`. Client logos and testimonials have an approval toggle that defaults to off, because client confidentiality matters.

## Capabilities and Constraints

- Next.js App Router, React, TypeScript, Tailwind CSS v4, Framer Motion, Sanity, Resend, GA4. The code lives on GitHub. Vercel (connected to the repository) is a testing copy only; the production host has not been chosen yet. Whatever host is chosen must run Next.js as a server, because the contact form (`/api/contact`) and the Sanity refresh webhook (`/api/revalidate`) are server routes, so plain static hosting will not work.
- Two content sources: `lib/content/*.ts` for firm information and practice areas (developer-edited), and Sanity for blog posts, clients and testimonials (firm-edited).
- **Mobile and low bandwidth first.** A large share of visitors arrive on phones, often over patchy connections. Phone and WhatsApp are primary paths, the first screen must remain light, and every page must be comfortable to read and operate with one thumb.
- **Bilingual, English and Kiswahili.** A language toggle exists (`components/layout/LanguageToggle.tsx`, stored in localStorage). Content and layout must be able to work in both languages, including longer Kiswahili strings.
- **Professional advertising rules.** All copy must stay within Kenyan advocate advertising limits (Advocates Act and LSK rules): no boasting, no guaranteed outcomes, no comparative claims about other firms. A corporate, fuller voice is welcome, but it must be factual and measured.
- Open decisions, still placeholders in `lib/content/firm.ts`: firm vision and mission, full street address, office hours, and homepage trust figures (years of combined experience, number of advocates, matters handled). None of these may be shown as fact until the firm confirms them.

## Voice and Content Density

The site should be fuller and more explicit than a minimalist brochure. Where there is real, accurate content to give, give it in complete, well-organised sentences, in the manner of an established corporate firm's website.

- Each page and section should carry enough written substance for a careful reader to understand what the firm does, who it is for and what happens next. Short taglines may open a section, but they should be followed by explanation rather than left to stand alone.
- Prefer clear headings, short introductory paragraphs, structured lists of services, and numbered or labelled sections that a reader can scan.
- The tone is formal, courteous and precise. Use plain language and define legal terms where they cannot be avoided.
- Every claim must be accurate, verifiable and within advertising rules. Do not invent statistics, awards, case results or client names to fill space.

## Visual Direction

The visual identity is corporate and professional: a deep navy and white base, a restrained gold accent, serif headlines for authority and a legible serif or sans body. Layouts are orderly, with a strong grid, generous but not excessive space and a clear hierarchy.

- The reference for tone is an established corporate law firm website: a confident full-width opening screen with a headline and an enquiry bar ("What can we help you with?"), followed by a structured summary of the firm, its services and its people.
- Use photography of real professional settings (offices, meetings, advocates at work) rather than abstract decoration. Placeholder photography is acceptable during development, and real photography of the firm's office and advocates replaces it when supplied.
- The header is solid and calm, with a clear primary action. Footers are complete: contact details, navigation, practice areas and legal links.
- Avoid ornamental effects, novelty interactions and decoration that does not help a reader. Motion should be quiet and brief.

## Brand Commitments

- Firm name: Mwango Gichana & Co. Advocates. Legal status line: "Advocates of the High Court of Kenya".
- Values: Accessible, Direct Advice; Discretion; Practical Strategy; Technical Rigour. Voice is formal, direct and discreet, and fuller than the earlier minimalist copy.
- The firm's mark is an "MG" monogram over a column and scales of justice, in navy and gold, with the wordmark "MWANGO GICHANA & CO. ADVOCATES". It currently exists only inside a mockup image (`public/hero-seal-stamp-wide.jpg`, a gold embossed seal on paper). No vector logo file has been supplied. The favicon and Apple icon are in `app/`.

## Evidence on Hand

- Real firm description, practice area content, contact details, and LinkedIn and Instagram profiles, all in `lib/content/firm.ts`.
- No real photography of the firm's office or advocates has been supplied. The hero uses a city photograph and the seal mockup as temporary imagery, the home page and About page use clearly labelled image placeholders, and the blog covers are stock photographs.
- No confirmed testimonials, client logos, published articles beyond the three on file, advocate count or years of experience yet. Sanity holds unapproved template entries only. The client logo strip on the home page currently shows invented demonstration logos and must be removed before launch. Future work must not fabricate any of these.

## Product Principles

1. **Prompt action from the first screen.** The opening screen asks the visitor what they need and moves them straight to the right practice area, a phone call or a WhatsApp message.
2. **Corporate, ordered and complete.** The site should read as an established firm: clear structure, full descriptions, consistent headings and a professional voice throughout.
3. **Make contact the easy path.** Phone and WhatsApp are one tap away from every page, and the form is a fallback, not the only route.
4. **Plain, formal language.** Advise directly and courteously, without jargon, hype or outcome promises. Personal matters need calm reassurance.
5. **Nothing unconfirmed presented as fact.** Placeholder figures, testimonials, logos and photographs stay hidden or clearly pending until the firm verifies them, and are removed before launch.
6. **Light, accessible and bilingual by default.** Every page works on a slow phone connection, in both English and Kiswahili, and meets WCAG AA contrast.

## Accessibility & Inclusion

Audience includes users on low-end phones and slow connections, and users who read Kiswahili rather than English. No formal accessibility standard was specified; default to WCAG AA, with readable type sizes, sufficient contrast, keyboard-operable controls and touch targets of at least 44 by 44 pixels.
