import { motion } from 'framer-motion'

export default function Trainer() {
  return (
    <section id="trainer" className="section trainer-section">
      <div className="container">
        <motion.div
          className="trainer-card"
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
            ease: 'easeOut',
          }}
        >
          {/* Trainer Photo */}
          <motion.div
            className="trainer-photo-wrap"
            initial={{
              opacity: 0,
              x: -40,
              scale: 0.96,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: 'easeOut',
            }}
          >
            <motion.img
              src="/assets/trainer.jpg"
              alt="Saumya Shharma - EFT & Matrix Reimprinting Master Trainer"
              className="trainer-img"
              whileHover={{
                scale: 1.03,
              }}
              transition={{
                duration: 0.4,
                ease: 'easeOut',
              }}
            />
          </motion.div>

          {/* Trainer Info */}
          <motion.div
            className="trainer-info"
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: 'easeOut',
            }}
          >
            <motion.div
              className="trainer-eyebrow"
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: 0.3,
              }}
            >
              ABOUT THE TRAINER
            </motion.div>

            <motion.h2
              className="trainer-name"
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: 0.4,
                ease: 'easeOut',
              }}
            >
              Saumya Shharma
            </motion.h2>

            <motion.h3
              className="trainer-designation"
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: 0.5,
                ease: 'easeOut',
              }}
            >
              EFT & Matrix Reimprinting Master Trainer
            </motion.h3>

            <motion.p
              className="trainer-exp"
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: 0.6,
              }}
            >
              16+ years' experience
            </motion.p>

            <motion.p
              className="trainer-bio"
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: 0.7,
                ease: 'easeOut',
              }}
            >
              Saumya Shharma is a globally recognised Trauma Resolution Therapist & Coach
              (ICF-PCC) and EFT and Matrix Reimprinting Master Trainer with over 16 years
              of experience in emotional and behavioural transformation.
            </motion.p>

            <motion.ul
              className="trainer-points"
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.15,
                    delayChildren: 0.2,
                  },
                },
              }}
            >
              <motion.li
                variants={{
                  hidden: {
                    opacity: 0,
                    x: 20,
                  },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 0.5,
                      ease: 'easeOut',
                    },
                  },
                }}
              >
                Founder of <strong>The Butterfly Effect</strong>, having worked with
                thousands of individuals, corporate leaders, and practitioners.
              </motion.li>

              <motion.li
                variants={{
                  hidden: {
                    opacity: 0,
                    x: 20,
                  },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 0.5,
                      ease: 'easeOut',
                    },
                  },
                }}
              >
                Known for her warm, deeply present, trauma-informed teaching style.
              </motion.li>

              <motion.li
                variants={{
                  hidden: {
                    opacity: 0,
                    x: 20,
                  },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 0.5,
                      ease: 'easeOut',
                    },
                  },
                }}
              >
                Integrates EFT with Matrix Reimprinting, Somatic Experiencing, Family
                Constellations, Coaching, and other therapeutic modalities.
              </motion.li>

              <motion.li
                variants={{
                  hidden: {
                    opacity: 0,
                    x: 20,
                  },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 0.5,
                      ease: 'easeOut',
                    },
                  },
                }}
              >
                Focused on building practitioners' confidence, sensitivity, and clinical
                judgement — not just technique.
              </motion.li>
            </motion.ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}