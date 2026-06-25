import { useState } from 'react'
import { motion } from 'framer-motion'
import { ImageOff, Maximize2 } from 'lucide-react'
import Lightbox from './Lightbox'

// Replace these captions/paths with your own — drop real photos into
// /public/images using these exact filenames and they'll appear here.
const PHOTOS = [
  { src: 'images/danish1.jpeg', caption: 'The day it all began', span: 'sm:row-span-2' },
  { src: '/images/danish2.png', caption: 'Laughing about nothing', span: 'sm:row-span-2' },
  { src: '/images/danish3.jpeg', caption: 'Side by side, as always', span: 'sm:row-span-2' },
  { src: '/images/danish.jpeg', caption: 'A memory worth keeping', span: 'sm:row-span-2' },
  { src: '/images/danish5.jpeg', caption: 'Here’s to many more', span: 'sm:row-span-2' },
  { src: '/images/danish6.jpeg', caption: 'Here’s to many more', span: 'sm:row-span-2' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
}

function GalleryTile({ photo, index, onOpen }) {
  const [errored, setErrored] = useState(false)

  return (
    <motion.button
      type="button"
      onClick={() => onOpen(index)}
      className={`group relative w-full h-full min-h-[160px] overflow-hidden rounded-2xl
                  border border-white/10 text-left ${photo.span}`}
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {!errored ? (
        <img
          src={photo.src}
          alt={photo.caption}
          loading="lazy"
          onError={() => setErrored(true)}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500
                     group-hover:scale-110"
        />
      ) : (
        // Graceful placeholder so the page never shows a broken-image
        // icon — just add the real photo at this path later.
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2
                         bg-gradient-to-br from-dusk-600 via-dusk-700 to-ember-500/30 text-blush-200/70">
          <ImageOff size={26} strokeWidth={1.5} />
          <span className="font-stamp text-[11px] tracking-wide px-3 text-center opacity-70">
            {photo.src}
          </span>
        </div>
      )}

      {/* Hover overlay with caption + expand affordance */}
      <div className="absolute inset-0 bg-gradient-to-t from-dusk-900/85 via-dusk-900/0 to-transparent
                       opacity-0 group-hover:opacity-100 transition-opacity duration-300
                       flex items-end p-4">
        <p className="font-body text-base text-blush-100">{photo.caption}</p>
      </div>
      <div className="absolute top-3 right-3 p-1.5 rounded-full bg-dusk-900/50 text-blush-100/80
                       opacity-0 group-hover:opacity-100 transition-opacity">
        <Maximize2 size={14} />
      </div>
    </motion.button>
  )
}

/**
 * Gallery
 * Responsive photo grid with a lightbox. Uses CSS grid with a couple
 * of taller tiles so the layout reads as composed rather than a plain
 * uniform grid.
 */
export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null)

  return (
    <section id="gallery" className="relative bg-dusk-700 py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="eyebrow mb-3" style={{fontSize : '1.5rem'}}>Snapshots</p>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-blush-100">
            Pieces of <span className="text-dawn-gradient">us</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 auto-rows-[160px] sm:auto-rows-[180px] gap-4">
          {PHOTOS.map((photo, index) => (
            <GalleryTile key={photo.src} photo={photo} index={index} onOpen={setActiveIndex} />
          ))}
        </div>
      </div>

      {activeIndex !== null && (
        <Lightbox
          photos={PHOTOS}
          activeIndex={activeIndex}
          onClose={() => setActiveIndex(null)}
          onNavigate={setActiveIndex}
        />
      )}
    </section>
  )
}
