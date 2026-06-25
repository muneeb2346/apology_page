import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart } from 'lucide-react'
import FloatingIcons from './FloatingIcons'

// A small burst of hearts that animates outward once forgiveness is given.
function HeartBurst() {
  const hearts = Array.from({ length: 10 })
  return (
    <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {hearts.map((_, i) => {
        const angle = (i / hearts.length) * Math.PI * 2
        const distance = 90 + Math.random() * 40
        return (
          <motion.span
            key={i}
            className="absolute text-ember-300"
            initial={{ opacity: 1, x: 0, y: 0, scale: 0.6 }}
            animate={{
              opacity: 0,
              x: Math.cos(angle) * distance,
              y: Math.sin(angle) * distance,
              scale: 1,
            }}
            transition={{ duration: 1.1, ease: 'easeOut' }}
          >
            <Heart size={16} className="fill-ember-300/60" />
          </motion.span>
        )
      })}
    </div>
  )
}

export default function Forgiveness() {
  const [response, setResponse] = useState(null) // null | 'yes' | 'time'
  const [showBurst, setShowBurst] = useState(false)

  function handleForgive() {
    setResponse('yes')
    setShowBurst(true)
    setTimeout(() => setShowBurst(false), 1200)
  }

  return (
    <section
      id="forgiveness"
      className="relative bg-gradient-to-b from-dusk-500 to-ember-500/20 py-28 px-6 overflow-hidden"
    >
      <FloatingIcons />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        {/* Glowing pulsing heart */}
        <div className="relative inline-flex items-center justify-center mb-10 glow-ring">
          <motion.div
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Heart size={64} className="text-ember-400 fill-ember-400/30" strokeWidth={1.4} />
          </motion.div>
          {showBurst && <HeartBurst />}
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-4xl sm:text-6xl font-semibold text-blush-100"
        >
          Please <span className="text-dawn-gradient italic">Forgive Me</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-5 text-blush-100/90 text-xl"
          style={{fontSize:'2rem'}}
        >
          There's no pressure here — just an open hand, whenever you're ready. But I'll keep on trying
        </motion.p>

        <AnimatePresence mode="wait">
          {!response ? (
            <motion.div
              key="buttons"
              exit={{ opacity: 0, y: -10 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            >
            </motion.div>
          ) : (
            <motion.p
              key="reply"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-10 font-display italic text-2xl text-ember-200"
            >
              {response === 'yes'
                ? 'Thank you. That means more than words can say.'
                : 'Take all the time you need — I’ll be here.'}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
