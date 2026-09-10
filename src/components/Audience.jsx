
import { motion } from 'framer-motion'

const cards = [
  {
    title: (
      <>
        Psychologists &<br />Therapists
      </>
    ),
    text: "Add a somatic, evidence-informed modality to your work with clients whose symptoms haven't shifted through talk therapy alone.",
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="#D6A02E" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="15" cy="13" r="4.5" />
        <path d="M7 30C7 24 10.5 21 15 21C16.8 21 18.5 21.4 19.8 22.2" />
        <path
          d="M26 18.5C24.5 16.5 21.5 17 20.5 19C19.5 17 16.5 16.5 15 18.5C13 21 16 24.5 20.5 28C25 24.5 28 21 26 18.5Z"
          transform="translate(6, 2) scale(0.7)"
        />
      </svg>
    ),
  },
  {
    title: (
      <>
        Coaches &<br />Corporate Leaders
      </>
    ),
    text: 'Move client work from surface habits toward identity-level limiting beliefs, and build tools for navigating burnout.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="#D6A02E" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="8" y="14" width="24" height="18" rx="2.5" />
        <path d="M15 14V11C15 9.5 16.5 8 18 8H22C23.5 8 25 9.5 25 11V14" />
        <path d="M8 21H32" />
        <circle cx="20" cy="21" r="2" fill="#FFFFFF" stroke="#D6A02E" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: (
      <>
        Healers &<br />Healthcare Professionals
      </>
    ),
    text: 'Explore the connection between physical pain and emotional patterns, using a technique grounded in acupressure and modern psychology.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="#D6A02E" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10C20 10 24 16 24 22C24 25.5 22 28 20 28C18 28 16 25.5 16 22C16 16 20 10 20 10Z" />
        <path d="M20 20C24 17 30 18 31 22C32 26 28 28 23 28" />
        <path d="M20 20C16 17 10 18 9 22C8 26 12 28 17 28" />
        <path d="M11 27C7 29 9 32 15 32C19 32 20 30 20 30" />
        <path d="M29 27C33 29 31 32 25 32C21 32 20 30 20 30" />
      </svg>
    ),
  },
  {
    title: (
      <>
        Teachers, Parents &<br />Growth Seekers
      </>
    ),
    text: 'Build a practical, lasting toolkit for emotional regulation and breaking out of long-standing personal patterns.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" stroke="#D6A02E" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10L6 17L20 24L34 17L20 10Z" />
        <path d="M11 20V27C11 27 14 31 20 31C26 31 29 27 29 27V20" />
        <path d="M30 19V29M28.5 29H31.5" />
      </svg>
    ),
  },
]

const headingVariants = {
  hidden: {
    opacity: 0,
    y: 25,
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

const subtitleVariants = {
  hidden: {
    opacity: 0,
    y: 15,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.15,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const cardsContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.25,
    },
  },
}

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 45,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export default function Audience() {
  return (
    <section className="section audience-section">
      <div className="container">

        <motion.div
          className="ornate-heading"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
        >
          <span className="ornate-line"></span>

          <h2>You Belong Here</h2>

          <span className="ornate-line"></span>
        </motion.div>

        <motion.p
          className="section-sub"
          variants={subtitleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
        >
          Designed for those who hold space for deep transformation.
        </motion.p>

        <motion.div
          className="audience-grid"
          variants={cardsContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {cards.map((card, i) => (
            <motion.article
              className="audience-card"
              key={i}
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: {
                  duration: 0.25,
                  ease: 'easeOut',
                },
              }}
            >
              <motion.div
                className="card-icon-wrap"
                whileHover={{
                  scale: 1.08,
                  transition: {
                    duration: 0.25,
                  },
                }}
              >
                {card.icon}
              </motion.div>

              <h3>{card.title}</h3>

              <p>{card.text}</p>
            </motion.article>
          ))}
        </motion.div>

        {/* <div className="audience-cta">
          <a className="btn btn-secondary" href="#programme">
            Read More
          </a>
        </div> */}

      </div>
    </section>
  )
}
