import { motion } from 'framer-motion'
import { Heart, ChevronDown } from 'lucide-react'
import ParticlesBackground from './ParticlesBackground'
import FloatingIcons from './FloatingIcons'

// Orchestrated entrance: icon, eyebrow, heading and subheading reveal
// in sequence rather than all at once, so the page opens like a
// single composed moment instead of scattered effects.
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.18, delayChildren: 0.15 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden
                 bg-gradient-to-b from-dusk-900 via-dusk-800 to-dusk-700"
    >
      {/* Ambient particles + floating icons sit behind all content */}
      <ParticlesBackground color="232,168,87" density={50} />
      <FloatingIcons />

      {/* Soft radial vignette so text stays legible over the particles */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(21,16,31,0)_0%,rgba(21,16,31,0.6)_75%)]" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl"
      >
        {/* Animated heart — gentle heartbeat-style pulse with a warm glow behind it */}
        <motion.div variants={item} className="relative mb-8 flex items-center justify-center">
          <div className="relative glow-ring">
            <motion.div
              animate={{ scale: [1, 1.12, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Heart size={95} className="text-ember-400 fill-ember-400/30" strokeWidth={1.5} />
            </motion.div>
          </div>
        </motion.div>

        <motion.p variants={item} className="eyebrow mb-4" style={{ fontSize: '1.5rem' }}>
          A letter for a friend
        </motion.p>

        <motion.h1
          variants={item}
          className="font-display text-6xl sm:text-7xl md:text-8xl font-semibold leading-tight tracking-tight text-blush-100"
        >
          Yara , <span className="text-dawn-gradient italic"> Danish! </span>
           Maaf kar dain na, eik chance dain dain na 🥹
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 text-2xl sm:text-3xl text-blush-100/90 font-light max-w-xl mx-auto" style={{ fontSize: '2rem' }}
        >
          Apni aesi dosti ko khona ka matlab bohut koch khona hain.
        </motion.p>

        <motion.a
          href="#letter"
          variants={item}
          className="mt-12 inline-flex items-center gap-2 text-base text-ember-300/90 hover:text-ember-200
                     transition-colors" style={{ fontSize: '2rem' }}
        >
          Read the letter
          <motion.span
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown size={36} />
          </motion.span>
        </motion.a>
      </motion.div>
    </section>
  )
}
