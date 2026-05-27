import { useState } from 'react'
import { countComments, type Comment } from '../lib/comments'
import CommentItem from './CommentItem'

interface Props {
  comments: Comment[]
  fallbackCount?: number
}

type SortMode = 'top' | 'new'

export default function Comments({ comments, fallbackCount }: Props) {
  const [sort, setSort] = useState<SortMode>('top')
  const [showAll, setShowAll] = useState(false)

  const loaded = countComments(comments)
  const total = Math.max(fallbackCount ?? 0, loaded)

  const sorted = [...comments].sort((a, b) => {
    if (sort === 'top') return b.likes - a.likes
    return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  })

  const visible = showAll ? sorted : sorted.slice(0, 10)
  const hasMore = sorted.length > 10 && !showAll

  return (
    <section className="mt-8">
      <div className="border-t-[3px] border-k14-pink pt-2 pb-3">
        <h2 className="font-head text-[18px] font-extrabold text-k14-ink m-0 inline uppercase">Bình luận</h2>
        <span className="text-[18px] text-k14-mute ml-1"> ({total})</span>
      </div>

      <form className="mb-4" onSubmit={e => e.preventDefault()}>
        <textarea
          placeholder="Bạn nghĩ sao về drama này?"
          className="w-full min-h-[72px] rounded-lg bg-k14-pink-soft/60 border border-k14-line p-3 text-[14px] outline-none focus:border-k14-pink resize-y"
        />
        <div className="flex justify-end mt-2">
          <button
            type="submit"
            className="bg-k14-pink text-white px-7 py-2 rounded-full text-[13px] font-extrabold uppercase tracking-wide hover:bg-k14-pink-dark"
          >
            Gửi
          </button>
        </div>
      </form>

      <div className="flex gap-5 border-b border-k14-line pb-2 mb-1 text-[13px] font-semibold">
        <button
          type="button"
          onClick={() => setSort('top')}
          className={sort === 'top' ? 'text-k14-pink font-bold' : 'text-k14-mute hover:text-k14-pink'}
        >
          Quan tâm nhất
        </button>
        <button
          type="button"
          onClick={() => setSort('new')}
          className={sort === 'new' ? 'text-k14-pink font-bold' : 'text-k14-mute hover:text-k14-pink'}
        >
          Mới nhất
        </button>
      </div>

      {comments.length === 0 ? (
        <p className="text-k14-mute text-[14px] py-6 text-center">
          Chưa có bình luận nào. Bạn là người đầu tiên hóng và để lại ý kiến nhé.
        </p>
      ) : (
        <div>
          {visible.map(c => <CommentItem key={c.id} comment={c} />)}
        </div>
      )}

      {hasMore && (
        <button
          type="button"
          onClick={() => setShowAll(true)}
          className="block w-full text-center bg-k14-pink-soft text-k14-pink font-bold py-3 mt-2 rounded-lg text-[14px] hover:bg-[#ffd0e2]"
        >
          Xem thêm bình luận
        </button>
      )}
    </section>
  )
}
