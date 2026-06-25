import TypingText from './TypingText'

/**
 * TypingBridge
 * A quiet breathing space between the Hero and the Gallery — a single
 * typed line that gives the page a moment of stillness before the
 * photos and memories begin.
 */
export default function TypingBridge() {
  return (
    <section className="relative bg-dusk-800 py-20 sm:py-28 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-display text-2xl sm:text-3xl md:text-4xl italic leading-relaxed text-blush-100 min-h-[3em] sm:min-h-[2.4em]" style={{ fontSize: '3.5rem' , lineHeight:1.5}}>
          <TypingText
            text="Danish, Apni dosti ki value kisi bi glti sa zaida hain. Hum ek dusra ki gltiyoon ko maaf kar skta hai na. eik dusra ko moqa dan skta hai so eik chance dain dain na."
            speed={45}
          />
        </p>
      </div>
    </section>
  )
}
