import type { Section } from '../types'
import { SECTION_COLORS, SECTION_LABELS } from '../types'

export default function CategoryChip({ section }: { section: Section }) {
  return (
    <span className="k14-chip" style={{ background: SECTION_COLORS[section] }}>
      {SECTION_LABELS[section]}
    </span>
  )
}
