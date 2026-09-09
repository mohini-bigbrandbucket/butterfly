import { useEffect } from 'react'

// Every element carrying one of these classes starts hidden (see the
// "CINEMATIC SCROLL ANIMATION SYSTEM" block in the stylesheet) and is
// revealed the first time it crosses into the viewport. Once revealed it
// stays revealed — we don't want content flickering out again on re-scroll.
const REVEAL_SELECTOR = [
  '.reveal',
  '.reveal-nav',
  '.reveal-scale',
  '.reveal-left',
  '.reveal-right',
  '.reveal-card',
  '.reveal-mask',
  '.reveal-image',
].join(', ')

/**
 * Call this once, near the top of the component tree (e.g. in App.jsx).
 * It scans the whole document for revealable elements after mount and
 * toggles `.is-visible` on each one via IntersectionObserver.
 *
 * Respects prefers-reduced-motion: if the user has that set, everything
 * is marked visible immediately instead of waiting on scroll — the CSS
 * already scopes all the hidden/animated states to
 * `@media (prefers-reduced-motion: no-preference)`, so this just keeps
 * behavior consistent with that.
 */
export default function useScrollReveal() {
  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const elements = Array.from(document.querySelectorAll(REVEAL_SELECTOR))

    if (prefersReduced || !('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('is-visible'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -8% 0px',
      }
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}