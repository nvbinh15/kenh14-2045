import { Link } from 'react-router-dom'
import Wordmark from './Wordmark'
import { MenuIcon, SearchIcon, UserIcon } from './icons'

interface Props {
  onOpenMenu?: () => void
}

export default function Header({ onOpenMenu }: Props) {
  return (
    <header className="bg-white">
      <div className="mx-auto max-w-k14 px-3 sm:px-4 h-[58px] lg:h-[76px] flex items-center justify-between gap-2">
        {/* Mobile: hamburger left */}
        <button
          type="button"
          onClick={onOpenMenu}
          aria-label="Mở menu"
          className="lg:hidden p-2 -ml-2 text-k14-ink hover:text-k14-pink"
        >
          <MenuIcon size={24} />
        </button>

        {/* Wordmark — center on mobile, left on desktop */}
        <Link to="/" className="flex items-end gap-3" aria-label="Kenh14 2045">
          <Wordmark height={30} className="lg:h-[44px] h-[30px] w-auto" />
          <span className="hidden lg:inline text-[11px] text-k14-mute leading-tight pb-1 italic max-w-[230px]">
            Cập nhật xu hướng Gen Z nhanh hơn cả thuật toán
          </span>
        </Link>

        {/* Desktop utility cluster */}
        <div className="hidden lg:flex items-center gap-4 text-[13px] font-semibold text-k14-ink">
          <a className="hover:text-k14-pink">Genz Area</a>
          <a className="hover:text-k14-pink">ShowLive</a>
          <span className="text-k14-line">|</span>
          <button aria-label="Tìm kiếm" className="hover:text-k14-pink p-1">
            <SearchIcon size={18} />
          </button>
          <a className="hover:text-k14-pink flex items-center gap-1.5">
            <UserIcon size={16} />
            Đăng nhập
          </a>
        </div>

        {/* Mobile icons right */}
        <div className="flex items-center gap-1 lg:hidden">
          <button aria-label="Tìm kiếm" onClick={onOpenMenu} className="p-2 text-k14-ink hover:text-k14-pink">
            <SearchIcon size={19} />
          </button>
          <button aria-label="Tài khoản" onClick={onOpenMenu} className="p-2 -mr-1 text-k14-ink hover:text-k14-pink">
            <UserIcon size={19} />
          </button>
        </div>
      </div>
    </header>
  )
}
