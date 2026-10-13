---
name: Mwango Gichana & Co. Advocates
description: Ivory paper, deep navy and a single gold mark for a boutique Kenyan law firm. Serif-led, square-cornered and hairline-ruled.
colors:
  navy-abyss: "#0b1424"
  navy-deep: "#10192e"
  navy-mid: "#16233f"
  navy-slate: "#223257"
  navy-dusk: "#33456f"
  ink-charcoal: "#24262b"
  ink-soft: "#4a4d54"
  ivory: "#faf8f3"
  ivory-dim: "#f3efe4"
  paper: "#efe9da"
  gold-bright: "#cfa94e"
  gold-seal: "#b3903f"
  gold-bronze: "#7a6029"
  hairline: "rgba(16, 25, 46, 0.12)"
  hairline-on-dark: "rgba(250, 248, 243, 0.18)"
typography:
  display:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "3.75rem"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "normal"
  headline:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "2.75rem"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "normal"
  title:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.33
    letterSpacing: "normal"
  body:
    fontFamily: "EB Garamond, Georgia, serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
    letterSpacing: "normal"
  label:
    fontFamily: "EB Garamond, Georgia, serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.33
    letterSpacing: "0.25em"
  signature:
    fontFamily: "Alex Brush, cursive"
    fontSize: "2.25rem"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "normal"
rounded:
  none: "0px"
spacing:
  xs: "10px"
  sm: "20px"
  md: "30px"
  lg: "50px"
  section: "120px"
  section-lg: "160px"
components:
  button-primary:
    backgroundColor: "{colors.navy-deep}"
    textColor: "{colors.ivory}"
    rounded: "{rounded.none}"
    padding: "15px 30px"
  button-primary-hover:
    backgroundColor: "{colors.navy-mid}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.navy-deep}"
    rounded: "{rounded.none}"
    padding: "15px 30px"
  button-outline-light:
    backgroundColor: "transparent"
    textColor: "{colors.ivory}"
    rounded: "{rounded.none}"
    padding: "15px 30px"
  button-outline-light-hover:
    backgroundColor: "{colors.ivory}"
    textColor: "{colors.navy-deep}"
  input-field:
    backgroundColor: "{colors.ivory}"
    textColor: "{colors.navy-abyss}"
    rounded: "{rounded.none}"
    padding: "15px 20px"
  card-practice:
    backgroundColor: "{colors.ivory}"
    textColor: "{colors.ink-soft}"
    rounded: "{rounded.none}"
    padding: "40px"
  nav-solid:
    backgroundColor: "{colors.ivory}"
    textColor: "{colors.ink-soft}"
    padding: "20px 30px"
  footer:
    backgroundColor: "{colors.navy-abyss}"
    textColor: "{colors.ivory}"
---

# Design System: Mwango Gichana & Co. Advocates

## Overview

**Creative North Star: "The Chambers Seal"**

The site behaves like a document that has been sealed. The reading surface is ivory paper, the authority is navy, and the one act of endorsement is a small gold mark, the way a wax seal sits at the foot of a deed. The hero photograph of the firm's seal on a document is the literal source of the metaphor, and the brush-script wordmark is its signature.

The mood is formal first and calm throughout. Warmth comes from language and detail (plain copy, a handwritten wordmark, a Kiswahili toggle), never from decoration. The system rejects flashy corporate-law styling, stock gavel-and-scales imagery, safari-tourism cliches, and anything that reads as boasting or as a promise of outcome.

**Key Characteristics:**
- Ivory and paper surfaces, navy authority, gold only as a mark.
- Two Garamond cuts plus one handwritten signature.
- Square, flat, hairline-ruled; no shadow at rest.
- One quiet fade-up motion, played once.

## Colors

A navy-and-ivory palette with one metal accent. Navy carries authority, ivory and paper carry the reading surface, and gold appears only as a small mark of endorsement.

### Primary
- **Chambers Navy** (#10192e, `navy-deep`): primary button fill, headings on ivory, and the tone of the brand. Its deeper sibling **Abyss Navy** (#0b1424, `navy-abyss`) is the hero backdrop, the footer, and the darkest heading colour. **Mid Navy** (#16233f) is the primary button hover. **Slate Navy** (#223257) and **Dusk Navy** (#33456f) are reserved for tonal steps on dark surfaces.
- **Seal Gold** (#b3903f, `gold-seal`): focus ring, active-nav underline, eyebrow rules and success-panel borders. It is too low in contrast for small text on ivory, so it is used only for lines and outlines.
- **Bright Gold** (#cfa94e, `gold-bright`): eyebrow text, rules and hover accents on navy surfaces only.
- **Bronze Gold** (#7a6029, `gold-bronze`): the text-safe gold for eyebrows, icons and links on ivory and paper.

### Neutral
- **Ivory** (#faf8f3): page background and card fill. **Ivory Dim** (#f3efe4) is the hover wash on menu items. **Paper** (#efe9da) is the alternate section background, such as the practice areas band.
- **Charcoal Ink** (#24262b): body text. **Soft Ink** (#4a4d54): secondary copy, nav links and labels.
- **Hairline** (rgba(16, 25, 46, 0.12)): the default border colour for every element (set globally). **Hairline on Dark** (rgba(250, 248, 243, 0.18)) is the equivalent on navy.

### Named Rules
**The One Mark Rule.** Gold marks a thing and never fills it. It appears as a rule, an underline, an icon, an eyebrow or an outline. A gold button, panel or background is out of system.

**The Text-Safe Gold Rule.** On ivory and paper, gold text is always Bronze Gold (#7a6029). Seal Gold (#b3903f) and Bright Gold (#cfa94e) are for lines, or for text on navy only.

## Typography

**Display Font:** Cormorant Garamond (with Georgia, serif), weight 600 (only 500 and 600 are loaded).
**Body Font:** EB Garamond (with Georgia, serif), weights 400, 500 and 600.
**Signature Font:** Alex Brush (with cursive), used only for the "Mwango Gichana" wordmark in the header.

**Character:** Two Garamond cuts in one register: a high-contrast display face for headings and a sturdy book face for reading. The brush signature is the one personal gesture, standing in for a lawyer's signature. The root font size is 20px, so every `rem` value below is 25% larger than the browser default: 1rem is 20px.

### Hierarchy
- **Display** (600, 2.25rem to 3.75rem, i.e. 45px to 75px, line-height 1.08): the home hero headline. It is balanced and capped at max-w-3xl.
- **Headline** (600, 1.875rem to 2.75rem, i.e. 37.5px to 55px, line-height 1.25): section titles through the shared section header.
- **Title** (600, 1.25rem to 1.5rem, i.e. 25px to 30px): card titles and mobile menu items.
- **Body** (400, 1rem to 1.125rem, line-height 1.625): section descriptions and article text. Compact card copy drops to 0.875rem (17.5px) in Soft Ink.
- **Label** (600, 0.75rem, i.e. 15px, letter-spacing 0.25em, uppercase): eyebrows over section titles, in gold. Form labels use the same size with 0.025em tracking.
- **Signature** (400, 1.875rem to 2.25rem): the header wordmark only.

### Named Rules
**The One Signature Rule.** Alex Brush appears in the wordmark and nowhere else. It is never used for headings, quotes or decoration.

**The Two Garamonds Rule.** Headings are Cormorant, and everything read at length is EB Garamond. Sans-serif families are not introduced.

## Layout

A single centred column, `max-w-8xl` (100rem, i.e. 2000px), with 30px gutters on mobile and 50px from `lg` up. Sections breathe vertically, at 120px padding on mobile and 160px from `sm` up. Density is low: one idea per band, generous white space, and left-aligned section headers over grids. The rhythm alternates ivory and paper bands, with navy reserved for the hero and footer.

Grids are ruled, not gapped: practice area cards sit in a 1 / 2 / 3 column grid with 1px gaps over a hairline backing, so the cards read as cells in a register. The trust stats are a four-column definition list divided by left hairlines. Breakpoints are Tailwind's defaults. `lg` (1024px) is where the header switches from the hamburger menu to the full navigation. The hero is 92vh on mobile and full viewport height from `sm` up, with content bottom-left.

### Named Rules
**The Ruled Register Rule.** Repeated items are separated by 1px hairlines, not by gaps, shadows or tinted boxes.

## Elevation & Depth

Flat by default. Depth comes from tonal layering (ivory, paper and navy bands), 1px hairline borders, and image overlays on the hero (navy gradients over a seal photograph at 55% opacity). The only shadow in the system is `shadow-lg` on the practice areas dropdown, and the only blur is a `backdrop-blur-sm` on the scrolled header at 95% ivory.

### Named Rules
**The Paper Stays Flat Rule.** Cards, buttons, inputs and panels have no shadow at rest or on hover. Hover is expressed by a border darkening, a fill change or an arrow nudge.

## Shapes

Square. Every button, card, input, menu and panel has 0px radius, and every boundary is a 1px hairline. Icon buttons in the footer are 45px squares with a 1px outline. Small rules (a 40px to 50px line before an eyebrow, a 1px underline under the active nav link) are the only ornament.

**Confirmed direction, not yet built.** The firm chose a *soft and approachable* component philosophy. The shipped code is square and flat, so the frontmatter tokens above record what exists. When this direction is implemented, expect a small radius scale and low, diffuse shadows. Exact values are `[to be resolved during implementation]`. Until then, new components follow the square system so that the site stays coherent.

## Components

### Buttons
- **Shape:** square (0px), 1px border, `text-sm` (17.5px) medium weight with 0.025em tracking, no wrapping. `md` is 15px by 30px, and `lg` is 20px by 40px at base size.
- **Primary:** Chambers Navy fill, ivory text, navy border. Hover moves to Mid Navy. Trailing arrow (up-right) nudges 2px on hover.
- **Secondary:** transparent, navy text, 30%-navy border. Hover darkens the border to full navy and adds a 5% navy wash.
- **Outline light:** for navy surfaces. Ivory text and a 50%-ivory border, inverting to ivory fill with navy text on hover.
- **Ghost:** text only in navy, turning Bronze Gold on hover.
- **Transition:** colours only, 300ms. Focus is a 2px Seal Gold outline with 3px offset (`.focus-ring`).

### Cards / Containers
- **Practice area card:** ivory fill, 1px hairline border, 40px padding, square. A gold-bronze line icon (32px) at top left and a two-digit index (01, 02...) in Cormorant at 40% soft ink at top right. Title in Cormorant, summary in Soft Ink, and a "View Practice Area" link line with an up-right arrow at the foot. Hover darkens the border to 40% navy. There is no shadow and no lift.
- **Success panel:** 1px border in Seal Gold at 40%, with a 5% gold wash, a gold-bronze check icon and a Cormorant heading.

### Inputs / Fields
- **Style:** square, 1px border at 20% navy, ivory fill, `text-sm`, 15px by 20px padding. Placeholder text is Soft Ink at 50%.
- **Labels:** uppercase, 0.75rem, semibold, 0.025em tracking in Soft Ink, always above the field.
- **Focus:** border goes to full navy, plus the Seal Gold focus ring.
- **Choices:** radios use the navy accent colour, laid out in a row. A hidden honeypot field sits alongside.

### Navigation
- **Header:** fixed. On the home page it is transparent over the hero with ivory text, and it turns solid (ivory at 95% with a hairline bottom border and slight blur) after 48px of scroll. On inner pages it is always solid.
- **Wordmark:** "Mwango Gichana" in Alex Brush over "& Co. Advocates" in 0.65rem uppercase gold with 0.3em tracking.
- **Links:** `text-sm` medium. The active link is full-strength with a 1px gold underline. The practice areas item opens a hairline-bordered ivory dropdown with `shadow-lg`, fading and rising 8px in 180ms.
- **Call to action:** a square "Request a Consultation" button (outlined in ivory over the hero, navy-filled when solid), plus a language toggle (English / Kiswahili).
- **Mobile:** below `lg`, a hamburger opens a full-width ivory panel. Links are 25px Cormorant with hairline dividers and stagger in from the left. The consultation button and language toggle sit at the foot.

### Section header (signature component)
An eyebrow line (a 40px gold rule, 50px over the hero, then a 0.75rem uppercase gold label at 0.25em tracking), a Cormorant headline, and an optional Soft Ink description at max-w-2xl. It is used to open every home page band and inner page.

### Footer
Abyss Navy with a hairline-on-dark top border. Ivory text at 80%, gold uppercase column labels, compact link lists at 0.75rem, and 45px square outlined social icons (LinkedIn, Instagram, WhatsApp) that turn Bright Gold on hover.

### Motion
Motion is quiet and one-directional. Content fades up 18px over 0.6s with an ease-out curve (0.22, 1, 0.36, 1), staggered 0.08s to 0.15s between siblings, and plays once per element on scroll into view. Other transitions are colour-only at 300ms, with the header at 500ms. `prefers-reduced-motion` collapses all animation and transition durations to near zero and disables smooth scrolling.

## Do's and Don'ts

### Do:
- **Do** use gold as a single mark per view: one eyebrow rule, one underline, one icon (The One Mark Rule).
- **Do** keep primary actions Chambers Navy (#10192e) with ivory text, and put the consultation call to action in the header on every page.
- **Do** separate repeated items with 1px hairlines, as the practice area grid does.
- **Do** use Bronze Gold (#7a6029) for any gold text on ivory or paper.
- **Do** give every interactive element the 2px Seal Gold focus ring.
- **Do** keep hero and imagery treatments seal-like: dark navy overlay, muted photo, headline bottom-left.

### Don't:
- **Don't** fill a button, card or panel with gold.
- **Don't** add shadows, lifts or glows to cards and buttons.
- **Don't** use Alex Brush anywhere but the wordmark, or introduce a sans-serif family.
- **Don't** use gavel, scales-of-justice or safari stock imagery, or any wording that boasts or promises an outcome.
- **Don't** show placeholder stats, logos or testimonials as if they were confirmed.
