import { useEffect } from 'react'

// Every element carrying one of these classes toggles `.is-visible` every
// time it crosses into or out of the viewport — so the animation replays
// on every scroll pass, not just the first time.
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
 * toggles `.is-visible` on each one via IntersectionObserver — adding it
 * when the element enters the viewport and removing it when the element
 * leaves, so the animation replays every time.
 *
 * Respects prefers-reduced-motion: if the user has that set, everything
 * is marked visible immediately and never toggled off.
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
          } else {
            entry.target.classList.remove('is-visible')
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