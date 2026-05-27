import type { Article } from '../types'
import ViewCount from './ViewCount'
import CommentBadge from './CommentBadge'

/** Compact view-count + comment-count row used under card titles. */
export default function MetaRow({ article, className = '' }: { article: Article; className?: string }) {
  if (!article.viewCount && !article.commentCount) return null
  return (
    <div className={`flex items-center gap-3 mt-1.5 ${className}`}>
      <ViewCount count={article.viewCount} />
      <CommentBadge count={article.commentCount} />
    </div>
  )
}
