import type { Section } from '../types'
import { SECTION_COLORS } from '../types'

interface SubCat {
  label: string
  href?: string
}

interface Props {
  title: string
  href?: string
  section?: Section
  subcats?: SubCat[]
}

export default function SectionHeader({ title, href = '#', section, subcats }: Props) {
  const accent = section ? SECTION_COLORS[section] : '#a70e1a'
  return (
    <div className="k14-section-title" style={{ ['--sec-accent' as string]: accent }}>
      <div className="label">
        <h2>{title}</h2>
        {subcats && subcats.length > 0 && (
          <div className="k14-section-subcats">
            {subcats.map(s => (
              <a key={s.label} href={s.href ?? '#'}>{s.label}</a>
            ))}
          </div>
        )}
      </div>
      <a href={href} className="k14-section-more">Xem tất cả ›</a>
    </div>
  )
}
