import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, ImageOff } from 'lucide-react'

/**
 * Lightbox
 * Full-screen modal for viewing a gallery photo at full size, with
 * keyboard (Esc / arrow keys) and click-through navigation.
 */
export default function Lightbox({ photos, activeIndex, onClose, onNavigate }) {
  const [errored, setErrored] = useState(false)
  const photo = photos[activeIndex]

  useEffect(() => {
    setErrored(false)
  }, [activeIndex])

  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onNavigate((activeIndex + 1) % photos.length)
      if (e.key === 'ArrowLeft') onNavigate((activeIndex - 1 + photos.length) % photos.length)
    }
    window.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [activeIndex, photos.length, onClose, onNavigate])

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[80] flex items-center justify-center bg-dusk-900/90 backdrop-blur-sm px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label={`Photo: ${photo.caption}`}
      >
        <motion.div
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.92, opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-w-3xl w-full"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-dusk-800">
            {!errored ? (
              <img
                src={photo.src}
                alt={photo.caption}
                onError={() => setErrored(true)}
                className="w-full max-h-[75vh] object-contain bg-dusk-900"
              />
            ) : (
              <div className="w-full h-[50vh] flex flex-col items-center justify-center gap-3
                               bg-gradient-to-br from-dusk-600 to-ember-500/30 text-blush-200/70">
                <ImageOff size={36} strokeWidth={1.5} />
                <span className="font-stamp text-sm opacity-80">{photo.src}</span>
              </div>
            )}
            <div className="p-4 text-center">
              <p className="font-display italic text-blush-100">{photo.caption}</p>
            </div>
          </div>

          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close photo"
            className="absolute -top-3 -right-3 p-2 rounded-full bg-ember-400 text-dusk-900
                       hover:bg-ember-300 transition-colors shadow-lg"
          >
            <X size={18} />
          </button>

          {/* Prev / next controls */}
          <button
            type="button"
            onClick={() => onNavigate((activeIndex - 1 + photos.length) % photos.length)}
            aria-label="Previous photo"
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-dusk-900/60
                       text-blush-100 hover:bg-dusk-900/90 transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            onClick={() => onNavigate((activeIndex + 1) % photos.length)}
            aria-label="Next photo"
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-dusk-900/60
                       text-blush-100 hover:bg-dusk-900/90 transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
