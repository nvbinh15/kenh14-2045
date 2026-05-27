// Shared category list used by CategoryNav (desktop strip) and MobileMenu
// (drawer). Mirrors the real kenh14.vn menu set, re-skinned to the 2045
// section slugs locked in the MDX schema.

import type { Section } from '../types'

export interface Category {
  label: string
  href: string
  section?: Section
  accent?: boolean
}

export const CATEGORIES: Category[] = [
  { label: 'Mới nhất', href: '#' },
  { label: 'eMagazine', href: '#trending', accent: true },
  { label: 'Star', href: '#star', section: 'star' },
  { label: 'Kpop & Quốc tế', href: '#kpop-quocte', section: 'kpop-quocte' },
  { label: 'Trending', href: '#trending', section: 'trending' },
  { label: 'Học đường', href: '#hoc-duong', section: 'hoc-duong' },
  { label: 'Tình yêu', href: '#tinh-yeu', section: 'tinh-yeu' },
  { label: 'Đẹp', href: '#dep', section: 'dep' },
  { label: 'Ăn - Chơi', href: '#an-choi', section: 'an-choi' },
  { label: 'Money-Z', href: '#money-z', section: 'money-z' },
  { label: 'Tek', href: '#tek', section: 'tek' },
  { label: 'Xã hội', href: '#xa-hoi', section: 'xa-hoi' },
  { label: 'Sport', href: '#sport', section: 'sport' },
  { label: 'Xem Mua Luôn', href: '#' },
  { label: 'Video', href: '#' },
]
