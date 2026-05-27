import Wordmark from './Wordmark'

export default function Footer() {
  return (
    <footer className="bg-white border-t-4 border-k14-pink mt-10">
      <div className="mx-auto max-w-k14 px-4 py-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-12 gap-6 text-[13px]">
        <div className="col-span-2 sm:col-span-3 lg:col-span-4">
          <Wordmark height={34} />
          <p className="text-[12px] text-k14-mute mt-3 leading-snug">
            Kenh14 2045 — Tin tức giải trí, showbiz, Gen Z và xã hội.
          </p>
          <p className="text-[12px] text-k14-mute mt-1 leading-snug">
            Cập nhật xu hướng nhanh hơn cả thuật toán.
          </p>
        </div>
        <div className="col-span-1 lg:col-span-2">
          <h4 className="font-head font-extrabold mb-2 uppercase text-[12px] tracking-wide">Chuyên mục</h4>
          <ul className="space-y-1 text-k14-mute">
            <li><a href="#star" className="hover:text-k14-pink">Star</a></li>
            <li><a href="#kpop-quocte" className="hover:text-k14-pink">Kpop &amp; Quốc tế</a></li>
            <li><a href="#trending" className="hover:text-k14-pink">Trending</a></li>
            <li><a href="#tinh-yeu" className="hover:text-k14-pink">Tình yêu</a></li>
            <li><a href="#dep" className="hover:text-k14-pink">Đẹp</a></li>
          </ul>
        </div>
        <div className="col-span-1 lg:col-span-2">
          <h4 className="font-head font-extrabold mb-2 uppercase text-[12px] tracking-wide">Khám phá</h4>
          <ul className="space-y-1 text-k14-mute">
            <li><a className="hover:text-k14-pink">Money-Z</a></li>
            <li><a className="hover:text-k14-pink">Tek</a></li>
            <li><a className="hover:text-k14-pink">Sport</a></li>
            <li><a className="hover:text-k14-pink">Xem Mua Luôn</a></li>
            <li><a className="hover:text-k14-pink">Video / ShowLive</a></li>
          </ul>
        </div>
        <div className="col-span-2 sm:col-span-1 lg:col-span-4">
          <h4 className="font-head font-extrabold mb-2 uppercase text-[12px] tracking-wide">Liên hệ</h4>
          <ul className="space-y-1 text-k14-mute">
            <li>Hotline GenZ: 1900 1414 (24/7)</li>
            <li>Email: hi@kenh14-2045.fake</li>
            <li>Hợp tác: brand@kenh14-2045.fake</li>
            <li>Tip drama: tip@kenh14-2045.fake</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-k14-line bg-[#fafafb]">
        <div className="mx-auto max-w-k14 px-4 py-3 text-[11px] text-k14-mute">
          <p className="leading-snug">
            <strong className="text-k14-ink">Trang web hư cấu (satire)</strong>
            {' '}— Nội dung và hình ảnh tạo bằng AI cho mục đích sáng tạo phi
            thương mại. Không phải sản phẩm chính thức của Kenh14.
          </p>
          <div className="flex flex-col sm:flex-row justify-between gap-1 mt-1">
            <span>© 2045 Kenh14 2045 (fan-fork). Một dự án châm biếm phi thương mại.</span>
            <span>Phiên bản 2045.04 — Cập nhật lúc 09:30 GMT+7</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
