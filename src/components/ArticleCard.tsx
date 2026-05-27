import { Link } from 'react-router-dom'
import type { Article } from '../types'
import HotBadge from './HotBadge'
import CategoryChip from './CategoryChip'
import MetaRow from './MetaRow'
import Img from './Img'

type Variant = 'medium' | 'small' | 'list' | 'side-lead' | 'side-row'

interface Props {
  article: Article
  variant?: Variant
  showSection?: boolean
  showSummary?: boolean
}

function Thumb({ article, ratio = 'aspect-[16/10]' }: { article: Article; ratio?: string }) {
  return (
    <div className={`k14-thumb ${ratio}`}>
      {article.hot && <HotBadge />}
      <Img src={article.heroImage} fallbackSeed={article.slug} />
    </div>
  )
}

export default function ArticleCard({
  article,
  variant = 'medium',
  showSection = false,
  showSummary = false,
}: Props) {
  if (variant === 'side-lead') {
    // Big sidebar lead: rounded image + chip + title + short summary
    return (
      <article className="k14-card pb-3 mb-3 border-b border-k14-line">
        <Link to={article.url} className="block">
          <Thumb article={article} />
          <div className="pt-2.5">
            {showSection && <CategoryChip section={article.section} />}
            <h3 className="k14-title k14-title-md">{article.title}</h3>
            {article.summary && showSummary && (
              <p className="k14-desc mt-1.5 text-[13px] leading-[18px]">{article.summary}</p>
            )}
            <MetaRow article={article} />
          </div>
        </Link>
      </article>
    )
  }

  if (variant === 'side-row') {
    // Compact sidebar row: thumb left, title right
    return (
      <article className="k14-card flex gap-3 py-2.5 border-b border-k14-line last:border-b-0">
        <Link to={article.url} className="shrink-0 w-[104px]">
          <Thumb article={article} ratio="aspect-[16/10] rounded-lg" />
        </Link>
        <Link to={article.url} className="flex-1 min-w-0">
          <h3 className="k14-title k14-title-xs">{article.title}</h3>
          <MetaRow article={article} className="mt-1" />
        </Link>
      </article>
    )
  }

  if (variant === 'list') {
    // Numbered/plain list row used in rails
    return (
      <article className="k14-card flex gap-3 py-2.5 border-b border-k14-line last:border-b-0">
        <Link to={article.url} className="shrink-0 w-[84px]">
          <Thumb article={article} ratio="aspect-[16/10] rounded-lg" />
        </Link>
        <Link to={article.url} className="flex-1 min-w-0">
          <h3 className="k14-title k14-title-xs">{article.title}</h3>
          <MetaRow article={article} className="mt-1" />
        </Link>
      </article>
    )
  }

  if (variant === 'small') {
    return (
      <article className="k14-card">
        <Link to={article.url} className="block">
          <Thumb article={article} ratio="aspect-[16/10] rounded-lg" />
          <div className="pt-2.5">
            {showSection && <CategoryChip section={article.section} />}
            <h3 className="k14-title k14-title-sm">{article.title}</h3>
            <MetaRow article={article} />
          </div>
        </Link>
      </article>
    )
  }

  // medium — the workhorse section-lead card
  return (
    <article className="k14-card">
      <Link to={article.url} className="block">
        <Thumb article={article} ratio="aspect-[16/9] rounded-xl" />
        <div className="pt-3">
          {showSection && <CategoryChip section={article.section} />}
          <h3 className="k14-title k14-title-lg">{article.title}</h3>
          {showSummary && article.summary && (
            <p className="k14-desc mt-2">{article.summary}</p>
          )}
          <MetaRow article={article} />
        </div>
      </Link>
    </article>
  )
}
