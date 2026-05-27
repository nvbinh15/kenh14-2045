import { Link, useParams } from 'react-router-dom'
import { getArticleBySlug, getRelated, getTrending } from '../lib/articles'
import { SECTION_LABELS } from '../types'
import { getCommentsForSlug } from '../lib/comments'
import Comments from '../components/Comments'
import SectionHeader from '../components/SectionHeader'
import ArticleCard from '../components/ArticleCard'
import TrendingRail from '../components/TrendingRail'
import CategoryChip from '../components/CategoryChip'
import Img from '../components/Img'
import ViewCount from '../components/ViewCount'
import CommentBadge from '../components/CommentBadge'
import { ClockIcon } from '../components/icons'

const VN_WEEKDAYS = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy']

function formatVnDate(iso: string): string {
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return ''
  const wd = VN_WEEKDAYS[d.getDay()]
  const hh = String(d.getHours()).padStart(2, '0')
  const mm = String(d.getMinutes()).padStart(2, '0')
  return `${wd}, ${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}, ${hh}:${mm} (GMT+7)`
}

/**
 * Lightweight markdown-ish renderer for the MDX body — paragraphs, **bold**
 * subheads, *italic* notes, and `- ` lists. Same subset the content team uses.
 */
function renderBody(raw: string): React.ReactNode {
  const blocks = raw.split(/\n{2,}/).map(b => b.trim()).filter(Boolean)

  return blocks.map((block, idx) => {
    const subMatch = block.match(/^\*\*([^*][\s\S]*?[^*])\*\*$/)
    if (subMatch) return <h3 key={idx}>{subMatch[1]}</h3>

    const italMatch = block.match(/^\*([^*][\s\S]*[^*])\*$/)
    if (italMatch) {
      return (
        <p key={idx} className="!text-[14px] italic !text-k14-mute !mt-6 !mb-2">
          {italMatch[1]}
        </p>
      )
    }

    if (/^- /.test(block)) {
      const items = block.split(/\n/).map(l => l.replace(/^- /, '').trim())
      return <ul key={idx}>{items.map((it, i) => <li key={i}>{renderInline(it)}</li>)}</ul>
    }

    return <p key={idx}>{renderInline(block)}</p>
  })
}

function renderInline(text: string): React.ReactNode[] {
  const out: React.ReactNode[] = []
  let i = 0, key = 0, buf = ''
  const flush = () => { if (buf) { out.push(buf); buf = '' } }
  while (i < text.length) {
    if (text[i] === '*' && text[i + 1] === '*') {
      const end = text.indexOf('**', i + 2)
      if (end > -1) { flush(); out.push(<strong key={`b${key++}`}>{text.slice(i + 2, end)}</strong>); i = end + 2; continue }
    } else if (text[i] === '*') {
      const end = text.indexOf('*', i + 1)
      if (end > -1) { flush(); out.push(<em key={`i${key++}`} className="italic">{text.slice(i + 1, end)}</em>); i = end + 1; continue }
    }
    buf += text[i]; i++
  }
  flush()
  return out
}

export default function Article() {
  const { slug } = useParams<{ slug: string }>()
  const result = slug ? getArticleBySlug(slug) : null

  if (!result) {
    return (
      <main className="mx-auto max-w-k14 px-4 py-16 text-center">
        <h1 className="font-head text-2xl font-extrabold text-k14-ink">404 — Bài viết không tồn tại</h1>
        <p className="text-k14-mute mt-3">Có thể bài đã được gỡ, hoặc bạn gõ nhầm link rồi đó.</p>
        <Link to="/" className="inline-block mt-6 text-k14-pink font-bold">Về trang chủ</Link>
      </main>
    )
  }

  const { article, body } = result
  const related = getRelated(article.slug, article.section, 4)
  const comments = getCommentsForSlug(article.slug)
  const trending = getTrending(8).filter(a => a.slug !== article.slug).slice(0, 6)
  const sectionLabel = SECTION_LABELS[article.section]
  const dateStr = formatVnDate(article.publishedAt)

  return (
    <main className="mx-auto max-w-k14 px-3 sm:px-4 pt-3 pb-10">
      <nav className="text-[12px] text-k14-mute pb-3 font-semibold">
        <Link to="/" className="hover:text-k14-pink">Trang chủ</Link>
        <span className="mx-1.5">›</span>
        <Link to={`/#${article.section}`} className="hover:text-k14-pink">{sectionLabel}</Link>
        {article.subsection && (
          <>
            <span className="mx-1.5">›</span>
            <span className="capitalize">{article.subsection.replace(/-/g, ' ')}</span>
          </>
        )}
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mt-2">
        <article className="lg:col-span-8 lg:max-w-[740px] min-w-0">
          <CategoryChip section={article.section} />

          <h1 className="font-head font-extrabold text-[24px] leading-[31px] lg:text-[32px] lg:leading-[42px] text-k14-ink mt-1 mb-4">
            {article.title}
          </h1>

          <p className="font-semibold text-[16px] leading-[24px] lg:text-[17px] lg:leading-[27px] text-[#3a3f47] mb-4">
            {article.summary}
          </p>

          <div className="flex items-center flex-wrap gap-x-3 gap-y-1 text-[12px] text-k14-mute pb-4 border-b border-k14-line">
            <span className="font-bold text-k14-ink">{article.author}</span>
            {article.authorRole && <span className="italic"> — {article.authorRole}</span>}
            <span className="inline-flex items-center gap-1">
              <ClockIcon size={11} /> {dateStr}
            </span>
            <span className="ml-auto flex items-center gap-3">
              <ViewCount count={article.viewCount} />
              <CommentBadge count={article.commentCount} />
            </span>
          </div>

          <figure className="my-5">
            <div className="aspect-[16/9] bg-k14-line overflow-hidden rounded-xl">
              <Img
                src={article.heroImage}
                alt={article.heroImageCaption || article.title}
                fallbackSeed={article.slug}
                eager
                className="w-full h-full object-cover"
              />
            </div>
            {(article.heroImageCaption || article.heroImageCredit) && (
              <figcaption className="text-[13px] italic text-k14-mute mt-2 leading-snug">
                {article.heroImageCaption}
                {article.heroImageCredit && !article.heroImageCaption?.includes(article.heroImageCredit) && (
                  <span className="not-italic"> {article.heroImageCredit}</span>
                )}
              </figcaption>
            )}
          </figure>

          <div className="k14-body">{renderBody(body)}</div>

          {article.tags.length > 0 && (
            <div className="border-t border-k14-line mt-6 pt-3 flex items-center gap-2 flex-wrap">
              <span className="text-[12px] uppercase font-extrabold text-k14-mute">Tags:</span>
              {article.tags.map(tag => (
                <a
                  key={tag}
                  href={`#tag-${tag}`}
                  className="text-[12px] font-semibold px-3 py-1 rounded-full bg-k14-chip text-k14-ink hover:bg-k14-pink hover:text-white"
                >
                  #{tag.replace(/-/g, '')}
                </a>
              ))}
            </div>
          )}

          <div className="flex items-center flex-wrap gap-2 sm:gap-3 mt-5 pt-4 border-t border-k14-line">
            <span className="text-[12px] uppercase font-extrabold text-k14-mute w-full sm:w-auto">Chia sẻ:</span>
            {['Zalo', 'Facebook', 'TikTok', 'X', 'Sao chép'].map(label => (
              <button
                key={label}
                type="button"
                className="text-[12px] font-semibold px-4 py-1.5 rounded-full border border-k14-line text-k14-ink hover:border-k14-pink hover:text-k14-pink"
              >
                {label}
              </button>
            ))}
          </div>

          {related.length > 0 && (
            <section className="mt-8">
              <SectionHeader title="Bài viết liên quan" section={article.section} />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
                {related.map(r => (
                  <ArticleCard key={r.slug} article={r} variant="small" showSection />
                ))}
              </div>
            </section>
          )}

          <Comments comments={comments} fallbackCount={article.commentCount} />
        </article>

        <aside className="lg:col-span-4 mt-6 lg:mt-0 space-y-6">
          <TrendingRail items={trending} title="Đọc nhiều" />
        </aside>
      </div>
    </main>
  )
}
