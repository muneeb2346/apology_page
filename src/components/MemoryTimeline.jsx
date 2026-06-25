import { motion } from 'framer-motion'
import { Sparkles, Laugh, ShieldCheck, Star } from 'lucide-react'

const MEMORIES = [
  {
    label: 'Chapter 01',
    title: 'Friendship startup',
    text: 'vo 2nd semester ka din jis din tu or main pehli dafa bahir aketa gayn tuna mujsa chai ka pucha jaha sa humrai yeh unmatchable dosti shuru hoi .',
    icon: Sparkles,
  },
  {
    label: 'Chapter 02',
    title: 'Fun moments together',
    text: 'Sath ghumna phirna, late night baatain karna, late night aketa bethna.',
    icon: Laugh,
  },
  {
    label: 'Chapter 03',
    title: 'Times of support',
    text: 'Hr vo lamha jis main muja teri zaroorat hoti thi tera bagire kaha avaiable hona, beshak raat jagna ho jab ka agla din paper hi kio na ho , hr terah ka support karna emotionally, mera koch kaha bagire mera dil ki baat samaj jana or bohut och aea hi',
    icon: ShieldCheck,
  },
  {
    label: 'Chapter 04',
    title: 'Unforgettable memories',
    text: 'The ones we still bring up, the ones I’ll keep with me no matter what happens next.',
    icon: Star,
  },
]

const cardVariants = (fromLeft) => ({
  hidden: { opacity: 0, x: fromLeft ? -40 : 40, y: 10 },
  show: { opacity: 1, x: 0, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
})

export default function MemoryTimeline() {
  return (
    <section id="memories" className="relative bg-dusk-600 py-24 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="eyebrow mb-3" style={{fontSize:'1.5rem'}}>Our story, in order</p>
          <h2 className="font-display text-5xl sm:text-5xl font-semibold text-blush-100">
            Friendship, <span className="text-dawn-gradient">remembered</span>
          </h2>
        </div>

        <div className="relative">
          {/* Center spine on desktop, left rail on mobile */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b
                           from-ember-300/10 via-ember-400/50 to-ember-300/10 sm:-translate-x-1/2" />

          <div className="space-y-12">
            {MEMORIES.map((memory, index) => {
              const fromLeft = index % 2 === 0
              const Icon = memory.icon
              return (
                <div
                  key={memory.title}
                  className={`relative flex items-start sm:items-center gap-6
                              sm:w-2/3 ${fromLeft ? 'sm:ml-0 sm:pr-10' : 'sm:ml-auto sm:pl-10'}
                              pl-12 sm:pl-0`}
                              style={{lineHeight:1.5}}
                >
                  {/* Node on the spine */}
                  <span
                    className={`absolute top-1.5 sm:top-1/2 sm:-translate-y-1/2 left-4 sm:left-auto
                                ${fromLeft ? 'sm:-right-[7px]' : 'sm:-left-[7px]'}
                                -translate-x-1/2 sm:translate-x-0
                                w-3.5 h-3.5 rounded-full bg-ember-400 ring-4 ring-dusk-600 z-10`}
                  />

                  <motion.div
                    variants={cardVariants(fromLeft)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-80px' }}
                    className="glass-card w-full p-6"
                  >
                    <span className="font-stamp text-xs tracking-[0.2em] text-ember-300/90 uppercase" style={{fontSize: '2rem'}}>
                      {memory.label}
                    </span>
                    <div className="flex items-center gap-2 mt-2 mb-2">
                      <Icon size={30} className="text-ember-400" strokeWidth={1.6} />
                      <h3 className="font-display text-3xl font-medium text-blush-100" style={{fontSize:'2.5rem'}}>
                        {memory.title}
                      </h3>
                    </div>
                    <p className="text-blush-100/90 text-base leading-relaxed" style={{fontSize:'1.75rem'}}>{memory.text}</p>
                  </motion.div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
