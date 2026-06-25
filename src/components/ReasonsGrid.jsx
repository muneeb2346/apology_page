import { motion } from 'framer-motion'
import { HeartHandshake, Umbrella, Camera, Heart } from 'lucide-react'

const REASONS = [
  { text: 'You always supported me.', icon: HeartHandshake },
  { text: 'You made difficult times easier.', icon: Umbrella },
  { text: 'You gave me unforgettable memories.', icon: Camera },
  { text: 'Your friendship means a lot to me.', icon: Heart },
]

const cardVariants = {
  hidden: { opacity: 0, y: 26 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function ReasonsGrid() {
  return (
    <section className="relative bg-dusk-500 py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="eyebrow mb-3" style={{fontSize:'1.5rem'}}>Why it matters</p>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-blush-100">
            Reasons our friendship is <span className="text-dawn-gradient">worth it</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {REASONS.map((reason, i) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={reason.text}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-60px' }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="group relative p-7 rounded-2xl border border-white/10 bg-white/5
                           hover:bg-white/10 hover:border-ember-300/40 transition-colors
                           text-center flex flex-col items-center gap-4"
              >
                <div className="relative w-14 h-14 flex items-center justify-center rounded-full
                                 bg-ember-400/15 text-ember-300 group-hover:scale-110
                                 transition-transform duration-300">
                  <Icon size={36} strokeWidth={1.6} />
                </div>
                <p className="font-body text-blush-100 text-base sm:text-lg leading-relaxed" style={{fontSize:'2rem', lineHeight:1.5}}>
                  {reason.text}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
