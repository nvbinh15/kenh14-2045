import HeroArticle from '../components/HeroArticle'
import ArticleCard from '../components/ArticleCard'
import SectionHeader from '../components/SectionHeader'
import TrendingRail from '../components/TrendingRail'
import { getBySection, getHero, getTopStories, getTrending } from '../lib/articles'
import { SECTION_LABELS, type Section } from '../types'

const SECTION_BLOCKS: Section[] = [
  'star',
  'kpop-quocte',
  'trending',
  'tinh-yeu',
  'dep',
  'an-choi',
  'hoc-duong',
  'money-z',
  'tek',
  'sport',
  'xa-hoi',
]

const SECTION_SUBCATS: Partial<Record<Section, { label: string }[]>> = {
  star: [{ label: 'Sao Việt' }, { label: 'Hội bạn thân' }, { label: 'TV Show' }, { label: 'Idol' }],
  'kpop-quocte': [{ label: 'Hàn Quốc' }, { label: 'Âu - Mỹ' }, { label: 'Cbiz' }],
  dep: [{ label: 'Beauty' }, { label: 'Fashion' }, { label: 'B&F Pick' }],
  'an-choi': [{ label: 'Có như lời đồn' }, { label: 'Here We Go' }, { label: 'Review' }],
  sport: [{ label: 'Bóng đá' }, { label: 'Esports' }, { label: 'Đường đua' }],
}

export default function Home() {
  const hero = getHero()
  const top = getTopStories(8)
  const trending = getTrending(8)

  // 2 stories right under the hero
  const heroRelated = top.slice(0, 2)
  // next batch → the big top grid
  const gridTop = top.slice(2, 8)

  const usedSlugs = new Set([hero?.slug, ...heroRelated.map(a => a.slug), ...gridTop.map(a => a.slug)])

  if (!hero) {
    return (
      <div className="mx-auto max-w-k14 px-4 py-10 text-center">
        <h1 className="font-head text-2xl font-extrabold">Kenh14 2045</h1>
        <p className="text-k14-mute mt-2">Chưa có bài nào — phòng tin đang ngủ nướng.</p>
        <p className="text-k14-mute text-[13px] mt-4">
          Thêm file MDX vào <code>content/articles/</code> để bắt đầu.
        </p>
      </div>
    )
  }

  return (
    <main className="mx-auto max-w-k14 px-3 sm:px-4 pt-4">
      {/* Top zone: hero (8/12) + trending rail (4/12) */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6">
        <div className="lg:col-span-8">
          <HeroArticle article={hero} related={heroRelated} />
          {gridTop.length > 0 && (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
              {gridTop.map(a => (
                <ArticleCard key={a.slug} article={a} variant="small" showSection />
              ))}
            </div>
          )}
        </div>

        <aside className="lg:col-span-4">
          <TrendingRail items={trending} title="Đọc nhiều" />
        </aside>
      </section>

      {/* Section blocks */}
      <div className="mt-8 space-y-9">
        {SECTION_BLOCKS.map(sec => {
          const items = getBySection(sec, 9).filter(a => !usedSlugs.has(a.slug))
          if (items.length === 0) return null
          items.forEach(a => usedSlugs.add(a.slug))
          const [lead, ...rest] = items
          return (
            <section key={sec} id={sec}>
              <SectionHeader
                title={SECTION_LABELS[sec]}
                href={`#${sec}`}
                section={sec}
                subcats={SECTION_SUBCATS[sec]}
              />
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6">
                <div className="lg:col-span-7">
                  <ArticleCard article={lead} variant="medium" showSummary />
                </div>
                <div className="lg:col-span-5">
                  {rest.slice(0, 4).map(a => (
                    <ArticleCard key={a.slug} article={a} variant="side-row" />
                  ))}
                </div>
              </div>
              {rest.length > 4 && (
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
                  {rest.slice(4, 8).map(a => (
                    <ArticleCard key={a.slug} article={a} variant="small" />
                  ))}
                </div>
              )}
            </section>
          )
        })}
      </div>
    </main>
  )
}
