import { CommentBubbleIcon } from './icons'
import { formatViews } from '../lib/format'

export default function CommentBadge({ count }: { count: number }) {
  if (!count) return null
  return (
    <span className="k14-comment whitespace-nowrap" aria-label={`${count} bình luận`}>
      <CommentBubbleIcon size={12} />
      {formatViews(count)}
    </span>
  )
}
