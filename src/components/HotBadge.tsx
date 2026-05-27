import { BoltIcon } from './icons'

export default function HotBadge({ label = 'HOT' }: { label?: string }) {
  return (
    <span className="k14-hot" aria-label={label}>
      <BoltIcon size={11} />
      {label}
    </span>
  )
}
