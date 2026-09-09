import { motion } from 'framer-motion'

const points = [
  {
    title: 'Facilitated by Saumya Shharma',
    text: (
      <>
        Train with one of India&rsquo;s well-known EFT trainers and trauma resolution expert, with{' '}
        <strong>16+ years</strong> of experience.
      </>
    ),
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="#D6A02E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="19" r="7" />
        <path d="M10 39C10 30.5 16 25 24 25C32 25 38 30.5 38 39" />
        <path d="M24 4V8" />
        <path d="M11 8.5L13.5 11.5" />
        <path d="M37 8.5L34.5 11.5" />
        <path d="M6 20H10" />
        <path d="M38 20H42" />
      </svg>
    ),
  },
  {
    title: 'A Hybrid Framework',
    text: (
      <>
        <strong>3 days</strong> of in-person training followed by <strong>6 months</strong> of live
        online supervision, mentoring, and community support to help you integrate what you&rsquo;ve
        learned.
      </>
    ),
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="#D6A02E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="7" y="10" width="34" height="30" rx="3" />
        <path d="M7 19H41" />
        <path d="M15 6V13" />
        <path d="M33 6V13" />
        <rect x="13" y="24" width="5" height="5" rx="1" />
        <rect x="21.5" y="24" width="5" height="5" rx="1" />
        <rect x="30" y="24" width="5" height="5" rx="1" />
      </svg>
    ),
  },
  {
    title: 'Trauma-Informed and Integrative',
    text: (
      <>
        The curriculum blends therapeutic insight, nervous system safety, and practitioner
        readiness, not just tapping technique.
      </>
    ),
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="#D6A02E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 38C24 38 10 29.5 10 19.5C10 14.5 13.8 11 18.2 11C20.6 11 22.7 12.2 24 14C25.3 12.2 27.4 11 29.8 11C34.2 11 38 14.5 38 19.5C38 29.5 24 38 24 38Z" />
        <path d="M24 6V9" />
        <path d="M13 6.5L14.8 9" />
        <path d="M35 6.5L33.2 9" />
        <path d="M6 15L9 16.2" />
        <path d="M42 15L39 16.2" />
      </svg>
    ),
  },
  {
    title: 'Small-Group Setting',
    text: (
      <>
        Group sizes are capped at <strong>8&ndash;12</strong> participants to allow real peer
        practice, live demonstrations, and direct supervision.
      </>
    ),
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="#D6A02E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="16" r="6" />
        <circle cx="10" cy="19" r="4.6" />
        <circle cx="38" cy="19" r="4.6" />
        <path d="M14 39C14 32 18.5 27.5 24 27.5C29.5 27.5 34 32 34 39" />
        <path d="M4 36C4 30.5 6.8 27 10.5 27" />
        <path d="M44 36C44 30.5 41.2 27 37.5 27" />
      </svg>
    ),
  },
  {
    title: 'Personal and Professional Growth Together',
    text: (
      <>
        This is an experiential course; many participants report personal breakthroughs alongside
        the professional skill-building.
      </>
    ),
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="#D6A02E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 42V22" />
        <path d="M24 22C24 22 10 21 10 9C22 9 24 22 24 22Z" />
        <path d="M24 27C24 27 38 26 38 15C27 15 24 27 24 27Z" />
      </svg>
    ),
  },
  {
    title: 'A Global Certification Pathway',
    text: (
      <>
        Earn credentials through EFTMRA (UK), one of the largest EFT accreditation bodies, headed
        by Karl Dawson, founder of Matrix Reimprinting. This gives you the standing to practise
        internationally and be listed on a global practitioner network.
      </>
    ),
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="#D6A02E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="24" r="16" />
        <ellipse cx="24" cy="24" rx="16" ry="6.4" />
        <ellipse cx="24" cy="24" rx="7" ry="16" />
        <path d="M8 24H40" />
      </svg>
    ),
  },
]

const headingVariants = {
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

const introContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.15,
    },
  },
}

const introVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const cardsContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export default function WhyChooseProgram() {
  return (
    <section id="why-choose" className="section why-choose-section">
      <div className="container">

        {/* HEADING */}
        <motion.div
          className="ornate-heading"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <span className="ornate-line"></span>

          <h2>Why Choose This Program?</h2>

          <span className="ornate-line"></span>
        </motion.div>

        {/* INTRO */}
        <motion.div
          className="why-choose-intro"
          variants={introContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
        >
          <motion.p variants={introVariants}>
            As EFT becomes more widely known, the number of weekend tapping workshops has grown
            rapidly. Many teach the basic technique; far fewer develop the practitioner.
          </motion.p>

          <motion.p variants={introVariants}>
            Knowing where the tapping points are is only a small part of what makes an effective
            EFT practitioner. What matters just as much is knowing how to build emotional safety,
            work with strong or hidden emotions, identify core issues, navigate resistance, pace a
            session well, and support transformation ethically and responsibly.
          </motion.p>
        </motion.div>

        {/* CARDS */}
        <motion.div
          className="why-choose-grid"
          variants={cardsContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {points.map((p, i) => (
            <motion.div
              className="why-choose-card"
              key={i}
              variants={cardVariants}
              whileHover={{
                y: -7,
                transition: {
                  duration: 0.25,
                  ease: 'easeOut',
                },
              }}
            >
              <motion.div
                className="why-choose-icon"
                whileHover={{
                  scale: 1.08,
                  rotate: 3,
                  transition: {
                    duration: 0.25,
                  },
                }}
              >
                {p.icon}
              </motion.div>

              <h3>{p.title}</h3>

              <p>{p.text}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
