export function getCachedUtmParams(): Record<string, string> {
  const raw = localStorage.getItem('utm_cache')
  if (!raw) return {}

  try {
    const parsed = JSON.parse(raw)
    const now = Date.now()
    if (parsed.expires && parsed.expires > now) {
      const { expires, ...utm } = parsed
      return utm
    }
  } catch (e) {
    console.warn('Invalid UTM cache:', e)
  }

  return {}
}
