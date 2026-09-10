import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import useCountdown from '../useCountdown'

export default function Hero() {
  const { days, hours, mins, secs, isPast } = useCountdown('2026-09-18T00:00:00')

  const heroRef = useRef(null)
  const parallaxRef = useRef(null)

  // Existing subtle parallax
  useEffect(() => {
    const layer = parallaxRef.current
    const hero = heroRef.current

    if (!layer || !hero) return undefined

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReduced) return undefined

    let ticking = false

    const update = () => {
      const rect = hero.getBoundingClientRect()
      const height = rect.height || 1

      const progress = Math.min(
        Math.max(-rect.top / height, 0),
        1
      )

      layer.style.transform = `translateY(${progress * 50}px)`
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update)
        ticking = true
      }
    }

    update()

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const imageAnimation = {
    hidden: {
      opacity: 0,
      x: 80,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const featuresContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const featureAnimation = {
    hidden: {
      opacity: 0,
      y: 25,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section className="hero" ref={heroRef}>

      {/* HERO IMAGE */}
      <motion.div
        className="hero-image-wrap"
        variants={imageAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <div
          className="hero-parallax-layer"
          ref={parallaxRef}
        >
          <img
            src="/assets/hero-speaker.jpg"
            alt="Saumya Shharma conducting EFT training workshop"
            className="hero-img"
          />
        </div>
      </motion.div>

      <div className="hero-bg-fill"></div>

      <div className="hero-grid container">
        <div className="hero-copy">

          {/* TITLE */}
          <motion.h1
            className="hero-title"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: 0.2 }}
          >
            <span className="hero-title-white">
              EFT Practitioners'
            </span>

            <span className="hero-title-main">
              Training:{' '}
              <span className="gold-text">
                Your Pathway
              </span>
            </span>

            <span className="hero-title-sub gold-text">
              to Professional EFT Practice
            </span>
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            className="hero-lead"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: 0.4 }}
          >
            Evidence-based, trauma-informed training for
            coaches, therapists, psychologists, healers, and
            committed personal growth seekers.
          </motion.p>

          {/* CTA */}
          <motion.div
            className="hero-cta-wrap"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: 0.55 }}
          >
            <motion.a
              className="btn btn-primary"
              href="https://pages.razorpay.com/EFT-Practitioners-training"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.97,
              }}
              transition={{
                duration: 0.2,
              }}
            >
              Secure Your Spot{' '}
              <motion.span
                className="arrow"
                whileHover={{ x: 5 }}
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>

          {/* DATE & LOCATION */}
          <motion.div
            className="hero-date-loc-pill"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: 0.7 }}
          >
            <div className="pill-item">
              <svg
                className="pill-icon"
                viewBox="0 0 20 20"
                fill="none"
                stroke="#E7BE63"
                strokeWidth="1.5"
              >
                <rect
                  x="2.5"
                  y="4"
                  width="15"
                  height="13.5"
                  rx="2"
                />
                <path
                  d="M6 2V5.5M14 2V5.5M2.5 8H17.5"
                  strokeLinecap="round"
                />
                <circle
                  cx="6.5"
                  cy="11.5"
                  r="0.75"
                  fill="#E7BE63"
                />
                <circle
                  cx="10"
                  cy="11.5"
                  r="0.75"
                  fill="#E7BE63"
                />
                <circle
                  cx="13.5"
                  cy="11.5"
                  r="0.75"
                  fill="#E7BE63"
                />
                <circle
                  cx="6.5"
                  cy="14.5"
                  r="0.75"
                  fill="#E7BE63"
                />
                <circle
                  cx="10"
                  cy="14.5"
                  r="0.75"
                  fill="#E7BE63"
                />
              </svg>

              <span>
                18 - 20 September&nbsp;&nbsp;&nbsp;2026
              </span>
            </div>

            <div className="pill-divider"></div>

            <div className="pill-item">
              <svg
                className="pill-icon"
                viewBox="0 0 20 20"
                fill="none"
                stroke="#E7BE63"
                strokeWidth="1.5"
              >
                <path d="M10 2.5C6.96 2.5 4.5 4.96 4.5 8C4.5 12.2 10 17.5 10 17.5C10 17.5 15.5 12.2 15.5 8C15.5 4.96 13.04 2.5 10 2.5Z" />
                <circle
                  cx="10"
                  cy="8"
                  r="2.2"
                  fill="#E7BE63"
                />
              </svg>

              <span>New Delhi</span>
            </div>
          </motion.div>

          {/* FEATURES */}
          <motion.div
            className="hero-features"
            variants={featuresContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >

            {/* FEATURE 1 */}
            <motion.div
              className="feature-item"
              variants={featureAnimation}
            >
              <div className="feature-icon-wrap">
                <svg
                  viewBox="0 0 32 32"
                  fill="none"
                  stroke="#E7BE63"
                  strokeWidth="1.5"
                >
                  <circle cx="16" cy="10" r="3.5" />
                  <circle cx="8" cy="13" r="3" />
                  <circle cx="24" cy="13" r="3" />
                  <path
                    d="M10 23C10 19.5 12.5 18 16 18C19.5 18 22 19.5 22 23"
                    strokeLinecap="round"
                  />
                  <path
                    d="M3 24C3 21 5.5 20 8 20C9.3 20 10.5 20.4 11.3 21"
                    strokeLinecap="round"
                  />
                  <path
                    d="M29 24C29 21 26.5 20 24 20C22.7 20 21.5 20.4 20.7 21"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <div className="feature-text">
                <strong>3 days</strong>
                <span>
                  in-person
                  <br />
                  training
                </span>
              </div>
            </motion.div>

            <div className="feature-divider"></div>

            {/* FEATURE 2 */}
            <motion.div
              className="feature-item"
              variants={featureAnimation}
            >
              <div className="feature-icon-wrap">
                <svg
                  viewBox="0 0 32 32"
                  fill="none"
                  stroke="#E7BE63"
                  strokeWidth="1.5"
                >
                  <rect
                    x="4"
                    y="6"
                    width="24"
                    height="15"
                    rx="1.5"
                  />
                  <path d="M2 25H30M13 21V25M19 21V25" />
                  <circle cx="11" cy="13" r="2.2" />
                  <path d="M8 18C8 16 9.5 15.5 11 15.5C12.5 15.5 14 16 14 18" />
                  <circle cx="21" cy="13" r="2.2" />
                  <path d="M18 18C18 16 19.5 15.5 21 15.5C22.5 15.5 24 16 24 18" />
                </svg>
              </div>

              <div className="feature-text">
                <strong>6 months</strong>
                <span>
                  live online supervision
                  <br />
                  & mentoring
                </span>
              </div>
            </motion.div>

            <div className="feature-divider"></div>

            {/* FEATURE 3 */}
            <motion.div
              className="feature-item"
              variants={featureAnimation}
            >
              <div className="feature-icon-wrap">
                <svg
                  viewBox="0 0 32 32"
                  fill="none"
                  stroke="#E7BE63"
                  strokeWidth="1.5"
                >
                  <circle cx="16" cy="16" r="10.5" />
                  <ellipse
                    cx="16"
                    cy="16"
                    rx="5"
                    ry="10.5"
                  />
                  <path d="M5.5 16H26.5M7.5 10.5H24.5M7.5 21.5H24.5" />
                </svg>
              </div>

              <div className="feature-text">
                <strong>Global</strong>
                <span>
                  EFTMRA (UK)
                  <br />
                  certification pathway
                </span>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>

      {/* COUNTDOWN */}
      <motion.div
        className="countdown-card"
        variants={{
          hidden: {
            opacity: 0,
            x: 60,
          },
          visible: {
            opacity: 1,
            x: 0,
            transition: {
              duration: 0.8,
              delay: 0.8,
              ease: [0.22, 1, 0.36, 1],
            },
          },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="countdown-heading">
          {isPast
            ? 'Workshop Is Live'
            : 'Workshop Starts In'}
        </div>

        {!isPast && (
          <div className="countdown-grid">

            <div className="count-col">
              <span className="count-num">{days}</span>
              <span className="count-label">Days</span>
            </div>

            <div className="count-divider"></div>

            <div className="count-col">
              <span className="count-num">{hours}</span>
              <span className="count-label">Hours</span>
            </div>

            <div className="count-divider"></div>

            <div className="count-col">
              <span className="count-num">{mins}</span>
              <span className="count-label">Minutes</span>
            </div>

            <div className="count-divider"></div>

            <div className="count-col">
              <span className="count-num">{secs}</span>
              <span className="count-label">Seconds</span>
            </div>

          </div>
        )}
      </motion.div>

    </section>
  )
}