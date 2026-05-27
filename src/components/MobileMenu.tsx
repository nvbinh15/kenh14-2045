import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Wordmark from './Wordmark'
import { CloseIcon, SearchIcon, UserIcon } from './icons'
import type { Category } from '../lib/categories'

interface Props {
  open: boolean
  onClose: () => void
  categories: Category[]
}

/**
 * Slide-in drawer for the heavily mobile-trafficked Kenh14 audience:
 * full-height right overlay, brand mark + close X, search, login row, and
 * the full vertical category list. State-driven Tailwind, no library.
 */
export default function MobileMenu({ open, onClose, categories }: Props) {
  useEffect(() => {
    if (!open) return
    const original = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = original }
  }, [open])

  useEffect(() => {
    if (!open) return
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [open, onClose])

  return (
    <>
      <div
        aria-hidden={!open}
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-200 lg:hidden ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />

      <aside
        aria-hidden={!open}
        aria-label="Menu chính"
        className={`fixed inset-y-0 right-0 z-50 flex w-[86vw] max-w-[360px] flex-col bg-white shadow-2xl transition-transform duration-300 ease-out lg:hidden ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-k14-line px-4 h-[58px]">
          <Link to="/" onClick={onClose} aria-label="Kenh14 2045">
            <Wordmark height={28} />
          </Link>
          <button
            type="button"
            onClick={onClose}
            aria-label="Đóng menu"
            className="p-2 -mr-2 text-k14-ink hover:text-k14-pink"
          >
            <CloseIcon size={22} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="px-4 pt-4">
            <label className="flex items-center gap-2 rounded-lg bg-k14-chip px-3 h-11 focus-within:ring-2 ring-k14-pink">
              <SearchIcon size={16} className="text-k14-mute" />
              <input
                type="search"
                placeholder="Tìm trên Kenh14 2045"
                className="flex-1 bg-transparent text-[14px] outline-none placeholder:text-k14-mute"
              />
            </label>
          </div>

          <div className="px-4 pt-4 pb-3 flex items-center gap-4 text-[13px] font-semibold text-k14-ink">
            <button className="flex items-center gap-1.5 hover:text-k14-pink">
              <UserIcon size={16} />
              Đăng nhập
            </button>
            <span className="text-k14-line">|</span>
            <a className="hover:text-k14-pink">Genz Area</a>
            <span className="text-k14-line">|</span>
            <a className="hover:text-k14-pink">ShowLive</a>
          </div>

          <div className="border-t border-k14-line" />

          <nav aria-label="Chuyên mục" className="px-2 py-2">
            <p className="px-3 pt-2 pb-1 text-[11px] font-extrabold uppercase tracking-wider text-k14-pink">
              Chuyên mục
            </p>
            <ul>
              {categories.map(c => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    onClick={onClose}
                    className={`flex items-center px-3 py-3 text-[15px] font-bold uppercase tracking-wide border-b border-k14-line/70 ${
                      c.accent ? 'text-k14-pink' : 'text-k14-ink'
                    } hover:text-k14-pink`}
                  >
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="px-4 py-4 text-[11px] text-k14-mute leading-snug">
            <p>
              <strong className="text-k14-ink">Trang web hư cấu (satire)</strong>
              {' '}— phiên bản 2045 do fan tạo.
            </p>
          </div>
        </div>
      </aside>
    </>
  )
}
