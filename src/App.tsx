import { lazy, Suspense, useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import CategoryNav from './components/CategoryNav'
import Footer from './components/Footer'
import MobileMenu from './components/MobileMenu'
import { CATEGORIES } from './lib/categories'
import Home from './pages/Home'

// Article detail route deferred — only matters once a reader clicks in.
const Article = lazy(() => import('./pages/Article'))

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function NotFound() {
  return (
    <main className="mx-auto max-w-k14 px-4 py-16 text-center">
      <h1 className="font-head text-2xl font-extrabold text-k14-ink">404 — Hết drama để hóng</h1>
      <p className="text-k14-mute mt-3">Trang bạn tìm có thể đã bị gỡ vì quá hot.</p>
      <a href="/" className="inline-block mt-6 text-k14-pink font-bold">Về trang chủ</a>
    </main>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-k14-bg">
        <Header onOpenMenu={() => setMenuOpen(true)} />
        <CategoryNav />
        <Suspense fallback={<div className="min-h-[60vh]" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Kenh14 URL convention: /:section/:slug.html */}
            <Route path="/:section/:slug.html" element={<Article />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
        <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} categories={CATEGORIES} />
      </div>
    </BrowserRouter>
  )
}
