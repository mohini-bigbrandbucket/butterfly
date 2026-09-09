# EFT Practitioners' Training — React (Vite)

A pixel-matching React conversion of the original static HTML/CSS/JS landing page.

## Run it

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

Output goes to `dist/`.

## Structure

- `src/App.jsx` — page assembly
- `src/components/` — one component per section (Header, Hero, Audience, WhyEFT, Programme, Logistics, Testimonials, Trainer, FAQ, CTA, Footer, VideoModal)
- `src/useCountdown.js` — countdown timer hook
- `src/index.css` — all styling (same design tokens/palette as the original)
- `public/assets/` — images (logo, hero photo, testimonials, trainer photo)

## Still placeholder (same as original)

- "Register Now" buttons use a `mailto:` link — swap for your real registration form/URL.
- Testimonial/trainer/hero photos are cropped from the reference image — replace with real high-res photos before going live.
