import ScrollProgress from './components/ScrollProgress'
import Hero from './components/Hero'
import TypingBridge from './components/TypingBridge'
import Gallery from './components/Gallery'
import MemoryTimeline from './components/MemoryTimeline'
import Letter from './components/Letter'
import ReasonsGrid from './components/ReasonsGrid'
import Forgiveness from './components/Forgiveness'
import MusicPlayer from './components/MusicPlayer'
import Footer from './components/Footer'

/**
 * App
 * A single-page apology site for Danish. Sections are composed in a
 * deliberate emotional order: regret (Hero) -> shared history
 * (Gallery, Memories) -> the letter itself -> appreciation (Reasons)
 * -> an open door (Forgiveness) -> a closing thought (Footer).
 *
 * The background color of each section warms gradually from deep
 * indigo to amber as you scroll — see tailwind.config.js "dusk" and
 * "ember" palettes — mirroring that emotional arc.
 */
export default function App() {
  return (
    <div className="relative">
      <ScrollProgress />
      <main>
        <Hero />
        <TypingBridge />
        <Gallery />
        <MemoryTimeline />
        <Letter />
        <ReasonsGrid />
        <Forgiveness />
      </main>
      <Footer />
    </div>
  )
}
