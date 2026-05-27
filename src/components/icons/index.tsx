// Lightweight chrome icons. Stroke 1.7 — a touch heavier than VnExpress for
// Kenh14's punchier feel. Each icon takes optional size, inherits currentColor.

import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement> & { size?: number }

const baseProps = (size = 16): SVGProps<SVGSVGElement> => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
})

export function SearchIcon({ size = 16, ...rest }: IconProps) {
  return (
    <svg {...baseProps(size)} {...rest}>
      <circle cx="11" cy="11" r="6.5" />
      <path d="M20 20l-4.3-4.3" />
    </svg>
  )
}

export function UserIcon({ size = 16, ...rest }: IconProps) {
  return (
    <svg {...baseProps(size)} {...rest}>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 20c0-3.6 3.1-6 7-6s7 2.4 7 6" />
    </svg>
  )
}

export function MenuIcon({ size = 16, ...rest }: IconProps) {
  return (
    <svg {...baseProps(size)} {...rest}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  )
}

export function CloseIcon({ size = 16, ...rest }: IconProps) {
  return (
    <svg {...baseProps(size)} {...rest}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  )
}

export function ChevronRightIcon({ size = 12, ...rest }: IconProps) {
  return (
    <svg {...baseProps(size)} {...rest}>
      <path d="M9 6l6 6-6 6" />
    </svg>
  )
}

// Speech-bubble used for comment counts.
export function CommentBubbleIcon({ size = 12, ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      <path d="M3 5.6C3 4.7 3.7 4 4.6 4h10.8c.9 0 1.6.7 1.6 1.6v6.7c0 .9-.7 1.6-1.6 1.6H10.5l-3.3 2.9-.0-2.9H4.6c-.9 0-1.6-.7-1.6-1.6V5.6z" />
    </svg>
  )
}

// Eye icon for view counts — Kenh14's signature card metric.
export function EyeIcon({ size = 13, ...rest }: IconProps) {
  return (
    <svg {...baseProps(size)} {...rest}>
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
      <circle cx="12" cy="12" r="2.7" />
    </svg>
  )
}

// Lightning / fire-ish bolt for the HOT badge.
export function BoltIcon({ size = 12, ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      {...rest}
    >
      <path d="M13 2L4.5 13.5H11l-1 8.5L19.5 10H13z" />
    </svg>
  )
}

export function ClockIcon({ size = 12, ...rest }: IconProps) {
  return (
    <svg {...baseProps(size)} {...rest}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 1.8" />
    </svg>
  )
}

export function PlayIcon({ size = 12, ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      {...rest}
    >
      <path d="M8 5v14l11-7z" />
    </svg>
  )
}

export function HomeIcon({ size = 14, ...rest }: IconProps) {
  return (
    <svg {...baseProps(size)} {...rest}>
      <path d="M3 11.5L12 4l9 7.5" />
      <path d="M5.5 10v9.5h13V10" />
    </svg>
  )
}
