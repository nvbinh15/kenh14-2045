interface Props {
  height?: number
  className?: string
}

/**
 * Kenh14 2045 wordmark — derivative SVG mark for the satirical "2045" fork.
 *
 * Built in the same visual register as the real kenh14.vn logo (a chunky
 * lowercase "kenh" with a brand-red "14" block), but distinct enough to read
 * as a fictional sibling — we append a "2045" badge. This is satire, NOT a
 * pixel copy of the trademark.
 *
 * Intrinsic ratio 300:64. Default height 40 → width ~188px.
 */
export default function Wordmark({ height = 40, className = '' }: Props) {
  const aspect = 300 / 64
  const width = Math.round(height * aspect)
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 300 64"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Kenh14 2045"
    >
      {/* "kenh" wordmark — heavy rounded sans in ink */}
      <text
        x="0"
        y="46"
        fontFamily="Arial Black, Arial, Helvetica, sans-serif"
        fontWeight={900}
        fontSize="44"
        letterSpacing="-1.5"
        fill="#15171a"
      >
        kenh
      </text>

      {/* brand-red "14" block — the signature element */}
      <rect x="102" y="10" width="64" height="46" rx="9" fill="#a70e1a" />
      <text
        x="134"
        y="46"
        fontFamily="Arial Black, Arial, Helvetica, sans-serif"
        fontWeight={900}
        fontSize="40"
        fill="#ffffff"
        textAnchor="middle"
        letterSpacing="-1"
      >
        14
      </text>

      {/* ".vn" tail */}
      <text
        x="172"
        y="46"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight={700}
        fontSize="20"
        fill="#9aa0a8"
      >
        .vn
      </text>

      {/* "2045" sub-brand badge */}
      <rect x="216" y="18" width="82" height="30" rx="6" fill="#15171a" />
      <text
        x="257"
        y="39"
        fontFamily="Arial Black, Arial, Helvetica, sans-serif"
        fontSize="20"
        fontWeight={900}
        fill="#ffd400"
        textAnchor="middle"
        letterSpacing="0.5"
      >
        2045
      </text>
    </svg>
  )
}
