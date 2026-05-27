import { useState } from 'react'

interface Props {
  src: string
  alt?: string
  /** Slug used to derive a deterministic placeholder if the src 404s. */
  fallbackSeed: string
  className?: string
  eager?: boolean
}

/**
 * Image with a graceful fallback: if the hero AVIF hasn't been generated yet
 * (the image agent fills public/images/ later), we swap to a deterministic
 * picsum placeholder so the layout still reads as a finished page in dev.
 */
export default function Img({ src, alt = '', fallbackSeed, className, eager = false }: Props) {
  const [errored, setErrored] = useState(false)
  const real = errored ? `https://picsum.photos/seed/${fallbackSeed}/800/500` : src
  return (
    <img
      src={real}
      alt={alt}
      className={className}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      onError={() => { if (!errored) setErrored(true) }}
    />
  )
}
