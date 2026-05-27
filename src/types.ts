export type Section =
  | 'star'
  | 'kpop-quocte'
  | 'hoc-duong'
  | 'trending'
  | 'tinh-yeu'
  | 'dep'
  | 'an-choi'
  | 'money-z'
  | 'tek'
  | 'xa-hoi'
  | 'sport'

export interface ArticleFrontmatter {
  slug: string
  title: string
  section: Section
  subsection?: string
  author: string
  authorRole?: string
  publishedAt: string
  summary: string
  heroImage: string
  heroImageCaption?: string
  heroImageCredit?: string
  imagePrompt?: string
  imageStyle?: 'photo' | 'illustration'
  tags: string[]
  hot: boolean
  featured: boolean
  priority: number
  viewCount: number
  commentCount: number
  readMinutes: number
}

export interface Article extends ArticleFrontmatter {
  // Computed / runtime fields
  url: string
}

export const SECTION_LABELS: Record<Section, string> = {
  star: 'Star',
  'kpop-quocte': 'Kpop & Quốc tế',
  'hoc-duong': 'Học đường',
  trending: 'Trending',
  'tinh-yeu': 'Tình yêu',
  dep: 'Đẹp',
  'an-choi': 'Ăn - Chơi',
  'money-z': 'Money-Z',
  tek: 'Tek',
  'xa-hoi': 'Xã hội',
  sport: 'Sport',
}

// Per-section accent colour chip — Kenh14 colour-codes its category tags.
export const SECTION_COLORS: Record<Section, string> = {
  star: '#a70e1a',        // brand red (flagship section)
  'kpop-quocte': '#7b2ff7', // purple
  'hoc-duong': '#0aa66e', // green
  trending: '#ff5400',    // orange
  'tinh-yeu': '#ff2d78',  // rose
  dep: '#d6336c',         // magenta-rose
  'an-choi': '#f59e0b',   // amber
  'money-z': '#0a8a5f',   // money green
  tek: '#1f6feb',         // tech blue
  'xa-hoi': '#a70e1a',    // deep red
  sport: '#0e9488',       // teal
}
