
import { motion } from 'framer-motion'

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 45,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const iconVariants = {
  hidden: {
    opacity: 0,
    scale: 0.7,
    rotate: -8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.8,
      delay: 0.15,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const contentVariants = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      delay: 0.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const pointsContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.35,
    },
  },
}

const pointVariants = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export default function WhyEFT() {
  return (
    <section id="why-eft" className="section why-section">
      <div className="container">

        <motion.div
          className="why-card"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >

          <div className="why-top">

            <motion.div
              className="why-icon-col"
              variants={iconVariants}
              whileHover={{
                scale: 1.05,
                transition: {
                  duration: 0.25,
                },
              }}
            >
              <img
                src="/assets/brain.png"
                alt="EFT brain-body connection"
                style={{
                  width: 92,
                  height: 92,
                  objectFit: "contain"
                }}
              />
            </motion.div>

            <motion.div
              className="why-divider"
              initial={{
                scaleY: 0,
              }}
              whileInView={{
                scaleY: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
                delay: 0.3,
              }}
            ></motion.div>

            <motion.div
              className="why-content-col"
              variants={contentVariants}
            >
              <h2>Why EFT? And Why Must You Learn It?</h2>

              <p>
                Traditional talk therapy has a ceiling. If you have clients
                who deeply understand their psychological patterns yet
                continue to struggle with symptoms that seem resistant to
                change, EFT may be the missing piece. It bridges the gap
                between understanding a problem and working through it.
              </p>
            </motion.div>

          </div>

          <motion.ul
            className="why-points"
            variants={pointsContainer}
          >

            <motion.li variants={pointVariants}>
              <strong>Awareness alone isn&apos;t enough</strong> — most people
              already know their patterns intellectually, yet the pattern
              continues.
            </motion.li>

            <motion.li variants={pointVariants}>
              <strong>Patterns live in the body</strong> — emotional reactions
              are held in the nervous system, not just conscious thought.
            </motion.li>

            <motion.li variants={pointVariants}>
              <strong>Mind, body, and emotion together</strong> — EFT reduces
              the emotional charge behind beliefs and memories that have
              persisted for years.
            </motion.li>

            <motion.li variants={pointVariants}>
              <strong>For clients and for you</strong> — a practical,
              evidence-based approach whether you&apos;re supporting others or
              on your own healing journey.
            </motion.li>

            <motion.li variants={pointVariants}>
              <strong>Built for today&apos;s pressures</strong> — stress,
              anxiety, trauma, and burnout are common; regulating and
              processing them is a valuable skill.
            </motion.li>

            <motion.li variants={pointVariants}>
              <strong>Depth, not just insight</strong> — the kind of change
              many people spend years searching for through talk alone.
            </motion.li>

          </motion.ul>

        </motion.div>

      </div>
    </section>
  )
}
