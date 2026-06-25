import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

export default function Letter() {
  return (
    <section
      id="letter"
      className="relative bg-gradient-to-b from-dusk-600 to-dusk-500 py-24 px-6"
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="eyebrow mb-3" style={{fontSize:'1.5rem'}}>In my own words</p>
          <h2 className="font-display text-5xl sm:text-5xl font-semibold text-blush-100">
            The letter
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="glass-card p-8 sm:p-12"
        >
          <Quote className="text-ember-300/70 mb-4" size={28} strokeWidth={1.5} />

          <div className="font-display text-lg sm:text-xl leading-[1.85] text-blush-100 space-y-5" style={{fontSize:'2rem', lineHeight:1.5}}>
            <p>Dear Danish,</p>
            <p>
              Main janta hoon ke shayad maine tumhe hurt kiya hai, aur us baat ka mujhe dil se afsos hai. Hamari dosti hamesha mere liye bohat ahmiyat rakhti hai. Jab main pichle waqt ko yaad karta hoon, to hamari har baat, har hansi aur har woh lamha yaad aata hai jo humne saath guzara.
            </p>
            <p>
              Maine kabhi nahi chaha tha ke meri ghaltiyan hamare darmiyan doori paida kar dein. Agar maine tumhe mayoos kiya hai, to yeh jano ke yeh kabhi meri niyyat nahi thi.
            </p>
            <p>
              Tum meri zindagi ka ek bohat aham hissa ho, aur main dil se tumhari har us cheez ki qadr karta hoon jo tumne mere liye ki. Mujhe hamari dosti ki kami mehsoos hoti hai aur meri umeed hai krta ho ek din hum dobara saath aage barh sakenge.
            </p>
            <p>
              Jo bhi ho, hamari saath guzari hui yaadein mere liye hamesha qeemti rahengi.
            </p>
            <p className="italic text-ember-200 pt-2">Tumhara Dost,Muneeb ❤️</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
