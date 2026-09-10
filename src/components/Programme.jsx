import { motion } from 'framer-motion'
import BeyondWorkshop from './BeyondWorkshop'

const days = [
  {
    num: 'Day 1',
    name: 'Foundations',
    sub: 'Friday',
    desc: 'The history and background of EFT, the basic tapping recipe, working with physical pain and headaches, how to identify core issues, and a live demonstration of the Movie Technique.',
  },
  {
    num: 'Day 2',
    name: 'Advanced Techniques',
    sub: 'Saturday',
    desc: 'The Movie Technique for processing trauma, the research behind EFT, and identifying and working with core beliefs.',
  },
  {
    num: 'Day 3',
    name: (
      <>
        EFTMRA &amp; Matrix Edge
      </>
    ),
    sub: 'Sunday',
    desc: 'A technique from Matrix Reimprinting taught in EFTMRA training—working with timelines, beliefs, subconscious blocks, cognitive shifts, and food cravings and addictions.',
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

const rowsContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.2,
    },
  },
}

const rowVariants = {
  hidden: {
    opacity: 0,
    x: -35,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const dayVariants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: 'easeOut',
    },
  },
}

export default function Programme() {
  return (
    <section id="programme" className="section programme-section">
      <div className="container">
        <motion.div
          className="ornate-heading"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
        >
          <span className="ornate-line"></span>
          <h2>The 3-Day Programme</h2>
          <span className="ornate-line"></span>
        </motion.div>

        <motion.div
          className="programme-table"
          variants={rowsContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          {days.map((d, i) => (
            <motion.div
              className="programme-row"
              key={i}
              variants={rowVariants}
              whileHover={{
                x: 6,
                transition: {
                  duration: 0.25,
                  ease: 'easeOut',
                },
              }}
            >
              <motion.div
                className="programme-col-day"
                variants={dayVariants}
              >
                <span className="day-num">{d.num}</span>
                <span className="day-name">{d.name}</span>
                <span className="day-sub">{d.sub}</span>
              </motion.div>

              <div className="programme-col-time">
                9:00 AM – 5:30 PM
              </div>

              <div className="programme-col-desc">
                {d.desc}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{
            duration: 0.7,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <BeyondWorkshop />
        </motion.div>
      </div>
    </section>
  )
}
