import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion'

/**
 * TypingText
 * Reveals `text` one character at a time, like it's being typed live.
 * Starts only once the element scrolls into view, and once per mount
 * (it won't re-type if the user scrolls past it again).
 *
 * Props:
 *  - text: string to type out
 *  - speed: ms delay between characters (default 45)
 *  - className: extra classes for the wrapping <span>
 */
export default function TypingText({ text, speed = 45, className = '' }) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const prefersReduced = usePrefersReducedMotion()

  useEffect(() => {
    if (!isInView) return

    // If the user prefers reduced motion, just show the full line instantly.
    if (prefersReduced) {
      setDisplayed(text)
      setDone(true)
      return
    }

    let index = 0
    const interval = setInterval(() => {
      index += 1
      setDisplayed(text.slice(0, index))
      if (index >= text.length) {
        clearInterval(interval)
        setDone(true)
      }
    }, speed)

    return () => clearInterval(interval)
  }, [isInView, text, speed, prefersReduced])

  return (
    <span ref={ref} className={className}>
      {displayed}
      {!done && (
        <motion.span
          aria-hidden="true"
          className="inline-block w-[2px] h-[1em] bg-ember-300 ml-1 align-middle"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.7, repeat: Infinity, repeatType: 'reverse' }}
        />
      )}
    </span>
  )
}
