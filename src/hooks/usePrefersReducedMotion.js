import { useEffect, useState } from 'react'

/**
 * Tracks the user's `prefers-reduced-motion` OS setting so ambient
 * animations (particles, floating icons) can be switched off or
 * simplified for people who request less motion.
 */
export default function usePrefersReducedMotion() {
  const [prefersReduced, setPrefersReduced] = useState(false)

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReduced(query.matches)

    const handleChange = (event) => setPrefersReduced(event.matches)
    query.addEventListener('change', handleChange)
    return () => query.removeEventListener('change', handleChange)
  }, [])

  return prefersReduced
}
