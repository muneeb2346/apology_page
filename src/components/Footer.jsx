import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative bg-ember-500/15 border-t border-white/10 py-14 px-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-xl mx-auto text-center"
      >
        <Heart size={62} className="mx-auto mb-4 text-ember-400 fill-ember-400/40" />
        <p className="font-display italic text-xl sm:text-2xl text-blush-100 leading-relaxed" style={{fontSize:'2.5rem', lineHeight:1.5}}>
          "Friendship is not about being perfect. It's about understanding, forgiveness, and
          staying together through life's ups and downs."
          <p>"Muja pata main ghlti pa hoon but main bohut sharminda hoon to muja eik dafa chance dain dain na."</p>
          
        </p>
        <p className="mt-6 font-stamp text-sm uppercase tracking-[0.25em] text-blush-200/70" style={{fontSize:'1.5rem'}}>
          For Danish, From Muneeb
        </p>
      </motion.div>
    </footer>
  )
}
