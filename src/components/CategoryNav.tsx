import { Link } from 'react-router-dom'
import { HomeIcon } from './icons'
import { CATEGORIES } from '../lib/categories'

/**
 * Kenh14's signature magenta menu bar — sticky, horizontal-scroll on mobile,
 * uppercase bold tabs in white on hot-pink.
 */
export default function CategoryNav() {
  return (
    <nav className="sticky top-0 z-30 bg-k14-pink shadow-md">
      <div className="mx-auto max-w-k14 px-1 sm:px-4 flex items-center">
        <Link to="/" className="k14-nav-link shrink-0 pr-3" aria-label="Trang chủ">
          <HomeIcon size={17} />
        </Link>
        <div className="k14-scroll-x flex flex-1">
          {CATEGORIES.map(c => (
            <a
              key={c.label}
              href={c.href}
              className={`k14-nav-link ${c.accent ? 'k14-nav-accent' : ''}`}
            >
              {c.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
