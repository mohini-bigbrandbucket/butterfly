import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const writtenTestimonials = [
  {
    quote: 'I came with so much trust, and it really showed me a way forward. Problems may not go away 100%, but you can take little steps at a time and just relax and breathe.',
    name: 'Anisha',
    role: 'HR Professional',
  },
  {
    quote: 'Though I am a healer and a coach, I realised that this technique is so effective, so beautiful, and so quick. Saumya is the most compassionate teacher I could have. I would recommend this to everybody.',
    name: 'Lai',
    role: 'Healer & Coach',
  },
  {
    quote: "I came all the way from Raipur. I wasn't confident at first, but the learning was very easy. She never made me feel bad about my mistakes. She said it's okay, and it's brilliant to make mistakes. That was very reassuring.",
    name: 'Renu Ahuja',
    role: 'Tarot Card Reader & Self-Love Coach, Raipur',
  },
  {
    quote: "Saumya is an amazing facilitator. Right from the moment you start, she knew what she was talking about — very proficient, very kind, very patient. Massive shifts have happened. I am in a lighter space and I'm loving it, and I'm going to take this further.",
    name: 'Billa Sandhu',
    role: null,
  },
  {
    quote: 'This is a new modality that I have learnt, and it has genuinely changed my way of thinking and my mindset. There were so many leads I got from just the EFT techniques. I was blown away and amazed at the same time, because I never knew that this existed.',
    name: 'Laksh Narang',
    role: 'Shamanic Healer & Stock Trader',
  },
  {
    quote: 'I already had a lot of understanding of how beliefs and emotions show up in the body, but working with EFT has given me an additional tool to address these problems and find resolution. I am really grateful that I attended this workshop and will definitely be recommending it to others.',
    name: 'Dilpreet',
    role: 'Healer, Life Coach & Family Constellation Facilitator',
  },
  {
    quote: "I came here with zero expectations — I was just feeling so stuck in life. I leave today with a lot of valuable information about myself. Saumya herself is an extremely passionate person. The way she works us through all our issues in the sessions — it's just amazing.",
    name: 'Meera Elley',
    role: 'Corporate Professional | ICF Coach',
  },
  {
    quote: "I've been absolutely taken by the standard of teaching here. It gave us a very happy space to work in, where we felt relaxed and every single need of ours was taken care of. Saumya was very kind to offer even further support beyond the six supervision sessions, which gives a lot of flexibility as a newcomer.",
    name: 'Jaishree Singh',
    role: 'Public Health Services, UK',
  },
  {
    quote: "As a therapist, I've always been looking for ways to grow and upskill. This training has been life-changing. The theory and the practical were so intertwined beautifully. It really makes you feel secure in the way you're practising. You don't have to be from a professional psychological space to do this course — even for personal growth, it's amazing. I have met very few people as eloquent and patient as Saumya. She creates such a safe, nurturing space — even the course was structured so we were embodying the process before practising with others.",
    name: 'Shreya',
    role: 'Counselling Psychologist, Noida',
    truncate: true,
    shortQuote:
      "As a therapist, I've always been looking for ways to grow and upskill. This training",
  },
]

// Keep these breakpoints in sync with your CSS
function getCardsPerView() {
  if (typeof window === 'undefined') return 3

  const w = window.innerWidth

  if (w <= 600) return 1
  if (w <= 900) return 2

  return 3
}

function useCardsPerView() {
  const [cardsPerView, setCardsPerView] = useState(getCardsPerView)

  useEffect(() => {
    let frame = null

    const handleResize = () => {
      if (frame !== null) return

      frame = requestAnimationFrame(() => {
        frame = null
        setCardsPerView(getCardsPerView())
      })
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)

      if (frame !== null) {
        cancelAnimationFrame(frame)
      }
    }
  }, [])

  return cardsPerView
}

function QuoteCard({ t }) {
  const [expanded, setExpanded] = useState(false)

  const showTruncated = t.truncate && !expanded

  return (
    <motion.div
      className="quote-card"
      whileHover={{
        y: -4,
        transition: {
          duration: 0.25,
        },
      }}
    >
      <span className="quote-mark">&ldquo;</span>

      <p className="quote-text">
        {showTruncated ? (
          <>
            {t.shortQuote}…{' '}

            <span
              className="quote-readmore-inline"
              onClick={() => setExpanded(true)}
            >
              Read more
            </span>
          </>
        ) : (
          <>
            {t.quote}

            {t.truncate && (
              <>
                {' '}

                <span
                  className="quote-readmore-inline"
                  onClick={() => setExpanded(false)}
                >
                  Read less
                </span>
              </>
            )}
          </>
        )}
      </p>

      <div className="quote-attribution">
        <span className="quote-name">{t.name}</span>

        {t.role && (
          <span className="quote-role">{t.role}</span>
        )}
      </div>
    </motion.div>
  )
}

const AUTOSCROLL_INTERVAL = 4000

export default function WrittenTestimonials() {
  const cardsPerView = useCardsPerView()

  const maxIndex = Math.max(
    0,
    writtenTestimonials.length - cardsPerView
  )

  const [index, setIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Keep index valid when screen size changes
  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex))
  }, [maxIndex])

  const goPrev = () => {
    setIndex((i) => Math.max(0, i - 1))
  }

  const goNext = () => {
    setIndex((i) => Math.min(maxIndex, i + 1))
  }

  // Autoscroll
  useEffect(() => {
    if (isPaused || maxIndex === 0) {
      return undefined
    }

    const id = setInterval(() => {
      setIndex((i) => (i >= maxIndex ? 0 : i + 1))
    }, AUTOSCROLL_INTERVAL)

    return () => clearInterval(id)
  }, [isPaused, maxIndex])

  const pause = () => setIsPaused(true)
  const resume = () => setIsPaused(false)

  const stepPercent = 100 / cardsPerView

  return (
    <section className="section written-testimonials-section">
      <div className="container">

        {/* Heading */}
        <motion.div
          className="ornate-heading"
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: false,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
            ease: 'easeOut',
          }}
        >
          <span className="ornate-line"></span>

          <h2>From the People Who've Been in the Room</h2>

          <span className="ornate-line"></span>
        </motion.div>

        {/* Slider */}
        <motion.div
          className="quote-slider"
          onMouseEnter={pause}
          onMouseLeave={resume}
          onFocus={pause}
          onBlur={resume}
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: false,
            amount: 0.15,
          }}
          transition={{
            duration: 0.7,
            ease: 'easeOut',
          }}
        >
          {/* Previous Button */}
          <motion.button
            className="quote-nav quote-nav-prev"
            onClick={goPrev}
            disabled={index === 0}
            aria-label="Previous"
            type="button"
            whileHover={{
              scale: index === 0 ? 1 : 1.1,
            }}
            whileTap={{
              scale: 0.95,
            }}
          >
            &#8249;
          </motion.button>

          {/* Viewport */}
          <div className="quote-slider-viewport">

            {/* Animated Track */}
            <motion.div
              className="quote-track"
              animate={{
                x: `-${index * stepPercent}%`,
              }}
              transition={{
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              {writtenTestimonials.map((t, i) => (
                <div
                  className="quote-slide"
                  key={i}
                >
                  <QuoteCard t={t} />
                </div>
              ))}
            </motion.div>

          </div>

          {/* Next Button */}
          <motion.button
            className="quote-nav quote-nav-next"
            onClick={goNext}
            disabled={index === maxIndex}
            aria-label="Next"
            type="button"
            whileHover={{
              scale: index === maxIndex ? 1 : 1.1,
            }}
            whileTap={{
              scale: 0.95,
            }}
          >
            &#8250;
          </motion.button>
        </motion.div>

        {/* Dots */}
        <motion.div
          className="quote-dots"
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: false,
          }}
          transition={{
            duration: 0.5,
            delay: 0.2,
          }}
        >
          {Array.from({
            length: maxIndex + 1,
          }).map((_, i) => (
            <motion.button
              key={i}
              className={`quote-dot ${
                i === index ? 'is-active' : ''
              }`}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              type="button"
              whileHover={{
                scale: 1.2,
              }}
              whileTap={{
                scale: 0.9,
              }}
              animate={{
                scale: i === index ? 1.15 : 1,
              }}
              transition={{
                duration: 0.2,
              }}
            />
          ))}
        </motion.div>

      </div>
    </section>
  )
}
