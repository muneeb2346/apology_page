# I'm Sorry, Danish 💛

A single-page, heartfelt apology + celebration-of-friendship site, built
with React (Vite), Tailwind CSS, and Framer Motion.

The page's visual idea — "Distance to Dawn" — is that the background
gradually warms from deep night plum (regret, at the top) to soft dawn
amber (hope and reconciliation, by the Forgiveness section and footer),
and a thin progress thread at the very top of the page fills in as you
scroll, visually "closing the distance."

## 1. Install

You need [Node.js](https://nodejs.org) 18+ installed. Then, inside this
folder:

```bash
npm install
```

## 2. Run it locally

```bash
npm run dev
```

This opens the site at `http://localhost:5173` with hot-reload — any
edit you make shows up instantly.

## 3. Build for hosting (optional)

```bash
npm run build
```

This outputs a production-ready static site into `dist/`, which you can
upload to Netlify, Vercel, GitHub Pages, or any static host. Preview the
production build locally with:

```bash
npm run preview
```

## Add your own photos and music

The site runs perfectly fine out of the box — missing photos/music show
a tasteful placeholder instead of breaking. To personalize it:

- **Photos:** drop 5 photos into `public/images/` named exactly
  `danish1.jpg`, `danish2.jpg`, `danish3.jpg`, `danish4.jpg`,
  `danish5.jpg`. (Want more/fewer photos, or different captions? Edit
  the `PHOTOS` array at the top of `src/components/Gallery.jsx`.)
- **Music:** drop one track into `public/music/` named exactly
  `friendship.mp3`. It never autoplays — Danish has to press play.

## Folder structure

```
danish-apology-page/
├── index.html                  Page shell + Google Fonts
├── package.json
├── tailwind.config.js          Color palette, fonts, custom keyframes
├── postcss.config.js
├── vite.config.js
├── public/
│   ├── images/                 Put danish1.jpg … danish5.jpg here
│   └── music/                  Put friendship.mp3 here
└── src/
    ├── main.jsx                 React entry point
    ├── App.jsx                  Composes every section, in order
    ├── index.css                Tailwind + custom utility classes
    ├── hooks/
    │   └── usePrefersReducedMotion.js
    └── components/
        ├── ScrollProgress.jsx    Top "closing the distance" thread
        ├── ParticlesBackground.jsx  Ambient ember/firefly canvas
        ├── FloatingIcons.jsx     Drifting heart/friendship icons
        ├── Hero.jsx              Section 1 — full-screen landing
        ├── TypingBridge.jsx      Typed line between Hero and Gallery
        ├── TypingText.jsx        Reusable typing-animation component
        ├── Gallery.jsx           Section 2 — photo grid
        ├── Lightbox.jsx          Full-size photo modal
        ├── MemoryTimeline.jsx    Section 3 — memories timeline
        ├── Letter.jsx            Section 4 — glassmorphism letter
        ├── ReasonsGrid.jsx       Section 5 — reasons cards
        ├── Forgiveness.jsx       Section 6 — "Can You Forgive Me?"
        ├── MusicPlayer.jsx       Floating play/pause control
        └── Footer.jsx            Closing quote
```

## Customizing the text

Everything is plain JSX, so it's easy to edit by hand:

- **Headline / subheading:** `src/components/Hero.jsx`
- **Typed line:** `src/components/TypingBridge.jsx`
- **Memory cards:** the `MEMORIES` array in `src/components/MemoryTimeline.jsx`
- **The letter itself:** `src/components/Letter.jsx`
- **The four "reasons" cards:** the `REASONS` array in `src/components/ReasonsGrid.jsx`
- **Forgiveness section copy / buttons:** `src/components/Forgiveness.jsx`
- **Footer quote:** `src/components/Footer.jsx`

## Notes

- Built with functional components and hooks throughout — no class
  components.
- Respects `prefers-reduced-motion`: ambient animations calm down
  automatically for anyone with that OS setting enabled.
- Fully responsive from small phones up through large desktops.
- Verified with a clean `npm run build` (no errors or warnings) before
  delivery.
