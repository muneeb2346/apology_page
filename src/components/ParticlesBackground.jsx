import { useEffect, useRef } from 'react'
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion'

/**
 * ParticlesBackground
 * A lightweight canvas animation of soft, glowing embers drifting
 * upward — standing in for the "particles" in the brief, but tuned to
 * the dusk/firefly mood of the page rather than generic white dots.
 *
 * Props:
 *  - color: base RGB string for the glow, e.g. "232,168,87"
 *  - density: roughly how many embers to render
 */
export default function ParticlesBackground({ color = '232,168,87', density = 45 }) {
  const canvasRef = useRef(null)
  const prefersReduced = usePrefersReducedMotion()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let width = (canvas.width = canvas.offsetWidth)
    let height = (canvas.height = canvas.offsetHeight)
    let animationFrameId

    const particles = Array.from({ length: density }, () => createParticle(width, height))

    function createParticle(w, h) {
      return {
        x: Math.random() * w,
        y: Math.random() * h,
        radius: Math.random() * 2 + 0.6,
        speedY: Math.random() * 0.4 + 0.15,
        drift: Math.random() * 0.6 - 0.3,
        opacity: Math.random() * 0.5 + 0.2,
        flicker: Math.random() * 0.02 + 0.005,
      }
    }

    function handleResize() {
      width = canvas.width = canvas.offsetWidth
      height = canvas.height = canvas.offsetHeight
    }
    window.addEventListener('resize', handleResize)

    // If the user prefers reduced motion, draw one static, calm frame and stop.
    function drawStatic() {
      ctx.clearRect(0, 0, width, height)
      particles.forEach((p) => {
        ctx.beginPath()
        ctx.fillStyle = `rgba(${color}, ${p.opacity * 0.6})`
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fill()
      })
    }

    if (prefersReduced) {
      drawStatic()
      return () => window.removeEventListener('resize', handleResize)
    }

    function animate() {
      ctx.clearRect(0, 0, width, height)
      particles.forEach((p) => {
        p.y -= p.speedY
        p.x += p.drift
        p.opacity += (Math.random() - 0.5) * p.flicker

        if (p.y < -10) {
          p.y = height + 10
          p.x = Math.random() * width
        }
        if (p.x < -10) p.x = width + 10
        if (p.x > width + 10) p.x = -10

        const clampedOpacity = Math.min(Math.max(p.opacity, 0.1), 0.8)
        ctx.beginPath()
        ctx.fillStyle = `rgba(${color}, ${clampedOpacity})`
        ctx.shadowColor = `rgba(${color}, ${clampedOpacity})`
        ctx.shadowBlur = 6
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fill()
      })
      animationFrameId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [color, density, prefersReduced])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  )
}
