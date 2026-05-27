import { Link } from 'react-router-dom'
import type { Article } from '../types'
import HotBadge from './HotBadge'
import CategoryChip from './CategoryChip'
import MetaRow from './MetaRow'
import Img from './Img'

interface Props {
  article: Article
  related?: Article[]
}

/**
 * Kenh14 hero — big rounded image with the headline overlaid in a gradient
 * scrim at the bottom (image-forward, very Kenh14), plus a 2-up related strip.
 */
export default function HeroArticle({ article, related = [] }: Props) {
  return (
    <article className="k14-card">
      <Link to={article.url} className="block relative group rounded-2xl overflow-hidden">
        <div className="k14-thumb aspect-[16/10] sm:aspect-[16/9]">
          {article.hot && <HotBadge />}
          <Img src={article.heroImage} alt={article.title} fallbackSeed={article.slug} eager className="w-full h-full object-cover" />
        </div>
        {/* gradient scrim + headline */}
        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 bg-gradient-to-t from-black/85 via-black/45 to-transparent">
          <CategoryChip section={article.section} />
          <h2 className="k14-title k14-hero-title text-white group-hover:text-white">
            {article.title}
          </h2>
          <p className="hidden sm:block text-white/85 text-[14px] leading-[20px] mt-2 line-clamp-2">
            {article.summary}
          </p>
          <div className="mt-2 [&_.k14-views]:text-white/80 [&_.k14-comment]:text-white">
            <MetaRow article={article} className="mt-0" />
          </div>
        </div>
      </Link>

      {related.length > 0 && (
        <div className="grid grid-cols-2 gap-3 mt-3">
          {related.slice(0, 2).map(r => (
            <Link key={r.slug} to={r.url} className="k14-card block group">
              <div className="k14-thumb aspect-[16/10] rounded-xl">
                {r.hot && <HotBadge />}
                <Img src={r.heroImage} fallbackSeed={r.slug} />
              </div>
              <h4 className="k14-title k14-title-sm mt-2">{r.title}</h4>
              <MetaRow article={r} />
            </Link>
          ))}
        </div>
      )}
    </article>
  )
}
