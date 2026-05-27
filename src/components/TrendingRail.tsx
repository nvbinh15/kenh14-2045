import { Link } from 'react-router-dom'
import type { Article } from '../types'
import { BoltIcon } from './icons'
import ViewCount from './ViewCount'

/** "Đọc nhiều / Trending" rail — ranked list with magenta rank numbers. */
export default function TrendingRail({ items, title = 'Đọc nhiều' }: { items: Article[]; title?: string }) {
  if (items.length === 0) return null
  return (
    <section className="k14-card p-4 bg-white rounded-xl">
      <div className="flex items-center gap-2 pb-3 mb-1 border-b-2 border-k14-pink">
        <BoltIcon size={16} className="text-k14-pink" />
        <h3 className="font-head font-extrabold text-[16px] uppercase tracking-wide text-k14-ink">
          {title}
        </h3>
      </div>
      <ol>
        {items.map((a, i) => (
          <li key={a.slug} className="flex gap-3 py-2.5 border-b border-k14-line last:border-b-0">
            <span className="k14-rank">{i + 1}</span>
            <Link to={a.url} className="flex-1 min-w-0 group">
              <h4 className="k14-title k14-title-xs">{a.title}</h4>
              <div className="mt-1">
                <ViewCount count={a.viewCount} />
              </div>
            </Link>
          </li>
        ))}
      </ol>
    </section>
  )
}
