/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      // "Distance to Dawn" palette — the page warms as you scroll,
      // mirroring the emotional arc from regret (deep indigo) to
      // reconciliation (warm dawn gold).
      colors: {
        dusk: {
          900: '#15101F', // deepest night — Hero
          800: '#1E1530',
          700: '#2C1B3D',
          600: '#3D2150', // plum — Gallery / Memories
          500: '#5B2A52',
        },
        ember: {
          400: '#E8896B',
          500: '#E8A857', // warm amber accent — Forgiveness / Footer
          300: '#F2C18C',
        },
        blush: {
          100: '#FBF6EF', // dawn cream — Letter card surface
          200: '#F4E3D3',
          300: '#F4D8C9',
        },
        ink: '#2A2230',
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Outfit"', 'sans-serif'],
        stamp: ['"JetBrains Mono"', 'monospace'],
      },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(-22px) translateX(8px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.55', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.08)' },
        },
        flicker: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.9' },
        },
      },
      animation: {
        drift: 'drift 7s ease-in-out infinite',
        pulseGlow: 'pulseGlow 2.6s ease-in-out infinite',
        flicker: 'flicker 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
