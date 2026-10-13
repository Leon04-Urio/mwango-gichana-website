// The serrated roundel of the firm's gold embossed seal, redrawn as SVG.
// Authored artwork: the "MG" monogram is set in the display face and the
// serrated edge is generated, not traced from the firm's mockup image.

const TEETH = 56;
const OUTER = 48;
const INNER = 44.6;

function serratedPath() {
  const points: string[] = [];
  for (let i = 0; i < TEETH * 2; i++) {
    const r = i % 2 === 0 ? OUTER : INNER;
    const a = (Math.PI * 2 * i) / (TEETH * 2) - Math.PI / 2;
    points.push(`${(50 + r * Math.cos(a)).toFixed(2)},${(50 + r * Math.sin(a)).toFixed(2)}`);
  }
  return `M${points.join("L")}Z`;
}

const PATH = serratedPath();

export function SealMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      role="img"
      aria-label="Seal of Mwango Gichana & Co. Advocates"
      className={className}
    >
      <path d={PATH} fill="var(--color-gold-500)" />
      <circle cx="50" cy="50" r="41" fill="none" stroke="var(--color-navy-950)" strokeOpacity="0.55" strokeWidth="0.6" />
      <circle cx="50" cy="50" r="38.5" fill="none" stroke="var(--color-navy-950)" strokeOpacity="0.35" strokeWidth="0.4" />
      <text
        x="50"
        y="55"
        textAnchor="middle"
        fontSize="27"
        fill="var(--color-navy-950)"
        style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 600 }}
      >
        MG
      </text>
      <path d="M31 62h38" stroke="var(--color-navy-950)" strokeOpacity="0.6" strokeWidth="0.5" />
      <text
        x="50"
        y="70"
        textAnchor="middle"
        fontSize="5.2"
        letterSpacing="1.2"
        fill="var(--color-navy-950)"
        style={{ fontFamily: "var(--font-garamond), Georgia, serif", fontWeight: 600 }}
      >
        ADVOCATES
      </text>
    </svg>
  );
}
