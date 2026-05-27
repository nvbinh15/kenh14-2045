# Kenh14 visual identity notes (research → re-skin)

Researched live `kenh14.vn` at 1440x900 via Playwright (2026-05-27). Screenshots
in `.playwright-mcp/` (`kenh14-home-top.png` = real site; `k14-2045-*.png` = our build).

## Brand colour
- Real signature **magenta/hot-pink "14" logo block** — we lead with this as the
  primary: `k14-pink #e6005c` (hover `#c4004f`).
- Current site's **horizontal menu bar is deep red `rgb(167,14,26)` = `#a70e1a`** —
  kept as the `k14-red` accent (e.g. Xã hội chip). We render the *menu bar itself*
  in magenta to foreground the iconic brand colour for the satire fork.
- Accents seen on-site: orange `#fb6c27` / `#ff5400` (promos), yellow `#fbe708`
  (highlights). We use gold `#ffd400` for the HOT badge highlight / active nav.

## Layout vs VnExpress (the key differences)
| | VnExpress | Kenh14 |
|---|---|---|
| Surface | serious newspaper, white, red `#a4123f`, serif headlines | breathless Gen-Z, light-gray bg, magenta, **all-sans** punchy heads |
| Nav | thin white strip, gray text | **solid magenta bar, white UPPERCASE bold tabs**, sticky, scroll-x on mobile |
| Cards | tight, square-ish, small thumbs, text-dense | **image-dominant, rounded corners (10–16px), big thumbs**, hover zoom |
| Card meta | comment bubble only | **view count ("284K") with eye icon + comment count**, per-card |
| Badges | none | **HOT badge overlay** on thumbs, **per-section colour chips** on every card |
| Hero | image + title below | **image with gradient scrim + headline overlaid** |
| Rails | "tin nóng / đọc nhiều" text lists | **ranked "ĐỌC NHIỀU" rail with big magenta rank numbers** |

## Typography
- Body: Arial/sans on real site → we use **Inter**. Headlines on real site use a
  custom `SFD-Bold` → we use **Montserrat 700–900** (heavier, punchier, on-brand).

## Category nav set (real, in order)
Star · Ciné · Musik · Beauty & Fashion · Đời sống · Money.14 · Ăn-Chơi-Đi · Xã hội ·
Sức khỏe · Tek-life · Học đường · Xem Mua Luôn · Video (+ eMagazine, Genz Area, ShowLive).
Mapped onto the locked 2045 section slugs: star, kpop-quocte, trending, hoc-duong,
tinh-yeu, dep, an-choi, money-z, tek, xa-hoi, sport.

## Wordmark
Derivative SVG: chunky black "kenh" + **magenta rounded "14" block** + ".vn" tail +
a black "2045" badge with gold text — reads as a fictional sibling, not a trademark copy.

## Footer
Includes the required satire disclaimer:
"Trang web hư cấu (satire) — Nội dung và hình ảnh tạo bằng AI cho mục đích sáng tạo
phi thương mại."
