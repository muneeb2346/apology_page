import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Play, Pause, Music2, AlertCircle } from 'lucide-react'

/**
 * MusicPlayer
 * Floating control, fixed to the bottom-right corner. Music never
 * autoplays — it only starts when the user presses play. Drop your
 * track at /public/music/friendship.mp3 (it will be served from
 * /music/friendship.mp3) to make it work.
 */
export default function MusicPlayer() {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [unavailable, setUnavailable] = useState(false)

  function togglePlayback() {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
      return
    }

    audio
      .play()
      .then(() => setIsPlaying(true))
      .catch(() => setUnavailable(true))
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.6 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-full
                 bg-dusk-900/80 border border-white/10 backdrop-blur-lg shadow-xl"
    >
      <audio
        ref={audioRef}
        src="/music/friendship.mp3"
        loop
        onEnded={() => setIsPlaying(false)}
        onError={() => setUnavailable(true)}
      />

      <button
        type="button"
        onClick={togglePlayback}
        disabled={unavailable}
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
        className="flex items-center justify-center w-9 h-9 rounded-full bg-ember-400 text-dusk-900
                   hover:bg-ember-300 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
      >
        {isPlaying ? <Pause size={26} /> : <Play size={16} />}
      </button>

      <div className="hidden sm:flex items-center gap-1.5 text-sm text-blush-100/90">
        {unavailable ? (
          <>
            <AlertCircle size={14} className="text-ember-300" />
            <span>Add /music/friendship.mp3</span>
          </>
        ) : (
          <>
            <Music2 size={14} className="text-ember-300" />
            <span>{isPlaying ? 'Our song is playing' : 'Play our song'}</span>
          </>
        )}
      </div>
    </motion.div>
  )
}
