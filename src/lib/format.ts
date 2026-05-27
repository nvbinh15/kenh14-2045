// Kenh14-style view-count formatting: "284K", "2,8M", "1,2K".
// Vietnamese number locale uses a comma as the decimal separator.
export function formatViews(n: number): string {
  if (!n || n < 0) return '0'
  if (n >= 1_000_000) {
    const v = n / 1_000_000
    return `${trim(v)}M`
  }
  if (n >= 1_000) {
    const v = n / 1_000
    return `${trim(v)}K`
  }
  return String(n)
}

function trim(v: number): string {
  // One decimal place, VN comma separator, drop a trailing ",0".
  const s = v.toFixed(v >= 100 ? 0 : 1)
  return s.replace('.', ',').replace(/,0$/, '')
}
