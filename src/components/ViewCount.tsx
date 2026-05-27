import { EyeIcon } from './icons'
import { formatViews } from '../lib/format'

export default function ViewCount({ count, className = '' }: { count: number; className?: string }) {
  if (!count) return null
  return (
    <span className={`k14-views ${className}`} aria-label={`${count} lượt xem`}>
      <EyeIcon size={12} />
      {formatViews(count)}
    </span>
  )
}
