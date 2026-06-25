import { motion, useScroll, useSpring } from 'framer-motion'

/**
 * ScrollProgress
 * A thin thread across the very top of the page that fills as you
 * scroll — visually "closing the distance" between the apology at
 * the top and forgiveness at the bottom. Color shifts from cool plum
 * to warm amber along its own length to match the page's dusk -> dawn
 * color journey.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 80, damping: 20, mass: 0.3 })

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[60]"
    >
      <div className="w-full h-full bg-gradient-to-r from-dusk-500 via-ember-400 to-ember-300" />
    </motion.div>
  )
}
