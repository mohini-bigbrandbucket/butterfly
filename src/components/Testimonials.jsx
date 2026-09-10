import { motion } from 'framer-motion'

const videos = [
  {
    thumb: '/assets/testimonial-1.png',
    label: 'Play testimonial video 1',
    id: 'yxa20wJloOc',
  },
  {
    thumb: '/assets/testimonial-2.png',
    label: 'Play testimonial video 2',
    id: 'KNS89KczaGM',
  },
  {
    thumb: '/assets/testimonial-3.jpeg',
    label: 'Play testimonial video 3',
    id: 'Do7_si0iGkE',
  },
  {
    thumb: '/assets/testimonial-4.png',
    label: 'Play testimonial video 4',
    id: 'vrwrzNAAhZs',
  },
]

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

export default function Testimonials({ onPlay }) {
  const handleKeyDown = (e, id) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onPlay(id)
    }
  }

  return (
    <section className="section testimonials-section">
      <div className="container">

        {/* Heading */}
        <motion.div
          className="ornate-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{
            duration: 0.7,
            ease: 'easeOut',
          }}
        >
          <span className="ornate-line"></span>
          <h2>Voices of Transformation</h2>
          <span className="ornate-line"></span>
        </motion.div>

        {/* Videos */}
        <motion.div
          className="testimonial-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          transition={{
            staggerChildren: 0.15,
          }}
        >
          {videos.map((v, i) => (
            <motion.div
              className="testimonial-card"
              key={i}
              variants={cardVariants}
              role="button"
              tabIndex={0}
              aria-label={v.label}
              onClick={() => onPlay(v.id)}
              onKeyDown={(e) => handleKeyDown(e, v.id)}
              whileHover={{
                y: -6,
                scale: 1.015,
                transition: {
                  duration: 0.25,
                  ease: 'easeOut',
                },
              }}
              whileTap={{
                scale: 0.98,
              }}
            >
              <img
                src={v.thumb}
                alt={v.label}
                className="testimonial-thumb"
              />

              <motion.div
                className="play-overlay"
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(0,0,0,0.06)',
                }}
              >
                <motion.svg
                  width="52"
                  height="52"
                  viewBox="0 0 60 60"
                  style={{
                    filter:
                      'drop-shadow(0 3px 6px rgba(0,0,0,0.35))',
                  }}
                  initial={{ scale: 0.85, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{
                    duration: 0.45,
                    delay: 0.2 + i * 0.08,
                    ease: 'easeOut',
                  }}
                  whileHover={{
                    scale: 1.12,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                >
                  <circle
                    cx="30"
                    cy="30"
                    r="28"
                    fill="#d6a02e"
                  />
                  <path
                    d="M25 19 L43 30 L25 41 Z"
                    fill="#ffffff"
                  />
                </motion.svg>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
