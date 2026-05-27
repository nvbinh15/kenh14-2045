import type { Comment, CommentReply } from '../lib/comments'

// Deterministic avatar colour from username — Kenh14-ish bright palette.
const AVATAR_COLORS = [
  '#a70e1a', '#7b2ff7', '#1f6feb', '#0aa66e',
  '#ff5400', '#d6336c', '#0e9488', '#f59e0b',
]

function avatarColor(name: string): string {
  let h = 0
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) >>> 0
  return AVATAR_COLORS[h % AVATAR_COLORS.length]
}

function initial(name: string): string {
  const parts = name.trim().split(/\s+/)
  const last = parts[parts.length - 1] || name
  return (last[0] || '?').toUpperCase()
}

// Relative time against a fixed "now" of 2045-04-26T18:00 — the edition's
// publish moment — so strings are stable on every load.
const NOW_2045 = new Date('2045-04-26T18:00:00+07:00').getTime()

function relTime(iso: string): string {
  const t = new Date(iso).getTime()
  if (Number.isNaN(t)) return ''
  const diff = Math.max(0, NOW_2045 - t)
  const m = Math.floor(diff / 60000)
  if (m < 1) return 'vừa xong'
  if (m < 60) return `${m} phút trước`
  const h = Math.floor(m / 60)
  if (h < 24) return `${h} giờ trước`
  const d = Math.floor(h / 24)
  if (d < 7) return `${d} ngày trước`
  const w = Math.floor(d / 7)
  if (w < 5) return `${w} tuần trước`
  return `${Math.floor(d / 30)} tháng trước`
}

function fmtLikes(n: number): string {
  if (n >= 1000) return (n / 1000).toFixed(n >= 10000 ? 0 : 1).replace('.0', '') + 'k'
  return String(n)
}

function CommentBody({ comment, nested = false }: { comment: Comment | CommentReply; nested?: boolean }) {
  const bg = avatarColor(comment.username)
  return (
    <div className={`flex gap-2 sm:gap-3 ${nested ? 'pl-6 sm:pl-12 pt-3' : 'py-3'}`}>
      <div
        className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-white text-[14px] font-bold select-none"
        style={{ background: bg }}
        aria-hidden
      >
        {initial(comment.username)}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[14px] leading-[20px] text-k14-ink m-0 break-words">
          <span className="font-bold mr-1.5">{comment.username}</span>
          {comment.location && (
            <span className="text-[12px] text-k14-mute mr-1.5">({comment.location})</span>
          )}
          <span>{comment.body}</span>
        </p>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-[12px] text-k14-mute">
          <button className="flex items-center gap-1 hover:text-k14-pink" type="button">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 11v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1Z" />
              <path d="M7 11l4-7c.6-1 2-1 2.6 0a3 3 0 0 1 .4 1.5V9h5a2 2 0 0 1 2 2.3l-1.2 7A2 2 0 0 1 17.8 20H7" />
            </svg>
            <span>Thích</span>
          </button>
          {comment.likes > 0 && (
            <span className="text-k14-pink font-bold">{fmtLikes(comment.likes)}</span>
          )}
          <button className="hover:text-k14-pink" type="button">Trả lời</button>
          <span className="ml-auto">{relTime(comment.timestamp)}</span>
        </div>
      </div>
    </div>
  )
}

export default function CommentItem({ comment }: { comment: Comment }) {
  return (
    <div className="border-b border-k14-line last:border-b-0">
      <CommentBody comment={comment} />
      {comment.replies && comment.replies.length > 0 && (
        <div className="bg-[#fafafb] border-t border-k14-line rounded-lg mb-2">
          {comment.replies.map(r => (
            <div key={r.id} className="border-b border-k14-line last:border-b-0">
              <CommentBody comment={r} nested />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
