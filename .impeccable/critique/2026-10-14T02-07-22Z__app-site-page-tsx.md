---
target: home page
total_score: 22
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 2
target_identity: "file:C:\\Users\\HomePC\\Desktop\\law\\app\\(site)\\page.tsx"
target_fingerprint: "sha256:7adb64fa7a23b6d9662ac7fb526da376bb608534cd003a1731fd0ca97efa0d1d"
target_path: "C:\\Users\\HomePC\\Desktop\\law\\app\\(site)\\page.tsx"
timestamp: 2026-10-14T02-07-22Z
slug: app-site-page-tsx
---
Method: dual-agent (A: design review sub-agent · B: detector and browser evidence sub-agent)

# Critique: home page (app/(site)/page.tsx)

Score: 22/32 applicable (heuristics 7 and 10 n/a), about 27.5/40. Rating: Good, held back by genericness.

Design specificity: about 40% authored, 60% interchangeable. Identity lives in the seal photo and the nouns Kajiado, Amboseli and group ranch. Layout, type and colour are well made but not specific to this firm.

Detector: 4 advisory "font size outside DESIGN.md" findings (Hero.tsx lines 45 and 51, ReachAndClients.tsx line 25, BlogTeaser.tsx line 69). No overflow at 360px, one h1, no missing alt text, contrast passes on solid backgrounds. 22 of 34 tappable elements under 44x44px at 390px.

## Priority issues
- [P1] Hero is generic, shows a Nairobi skyline for a Kimana firm, has a visible image seam and no contact action. Suggested: /impeccable shape
- [P1] Practice strips use a filled gold button (breaks the gold-is-a-mark rule), sideways labels, hover-only opening, and are not keyboard focusable. Suggested: /impeccable layout
- [P2] The middle is two bullet lists with no proof; "Our Clients: Individuals" says nothing; demo client strip would make an unapproved claim if real names went live. Suggested: /impeccable clarify
- [P2] Every section opens with the same gold rule and serif heading, with similar padding; no scale change. Suggested: /impeccable bolder
- [P3] Small tap targets and tiny small-caps text on phones; tagline wraps to a third line. Suggested: /impeccable adapt

## What works
- The gold seal hero photograph, the only unmistakably firm-specific visual.
- Type and surface discipline across ivory, navy and paper.
- A well-weighted close: phone, then WhatsApp, then consultation form.

## Questions
- If Kajiado and Amboseli were removed, what would still be specific to Kimana?
- Why does the first screen say Dependable Legal Counsel instead of what the firm does for a landowner?
- What if the page were built around documents (title deed, succession form, lease)?
