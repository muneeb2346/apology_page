import { motion } from 'framer-motion'
import { Heart, HeartHandshake } from 'lucide-react'
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion'

const ICONS = [Heart, HeartHandshake, Heart]

// Fixed, hand-placed positions (in %) so icons feel composed rather than
// randomly scattered every render.
const LAYOUT = [
  { top: '15%', left: '8%', size: 22, delay: 0, duration: 7 },
  { top: '70%', left: '12%', size: 16, delay: 1.2, duration: 8 },
  { top: '25%', left: '88%', size: 18, delay: 0.6, duration: 6.5 },
  { top: '60%', left: '92%', size: 24, delay: 1.8, duration: 7.5 },
  { top: '85%', left: '50%', size: 14, delay: 0.3, duration: 9 },
  { top: '10%', left: '45%', size: 16, delay: 2, duration: 6 },
]

/**
 * FloatingIcons
 * Ambient hearts and a "friendship" handshake-heart icon drifting
 * gently in the background. Purely decorative (aria-hidden) and
 * disabled in spirit (frozen, no drift) when reduced motion is set.
 */
export default function FloatingIcons({ className = '' }) {
  const prefersReduced = usePrefersReducedMotion()

  return (
    <div aria-hidden="true" className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {LAYOUT.map((pos, i) => {
        const Icon = ICONS[i % ICONS.length]
        return (
          <motion.div
            key={i}
            className="absolute text-ember-300/40"
            style={{ top: pos.top, left: pos.left }}
            animate={
              prefersReduced
                ? {}
                : { y: [0, -18, 0], opacity: [0.25, 0.55, 0.25] }
            }
            transition={{
              duration: pos.duration,
              delay: pos.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <Icon size={pos.size} strokeWidth={1.5} />
          </motion.div>
        )
      })}
    </div>
  )
}
