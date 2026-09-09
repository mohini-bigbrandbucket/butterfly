import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="register" className="section cta-section">
      <div className="container">
        <motion.div
          className="cta-card"
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
            amount: 0.25,
          }}
          transition={{
            duration: 0.8,
            ease: 'easeOut',
          }}
        >

          <motion.div
            className="cta-text-wrap"
            initial={{
              opacity: 0,
              x: -35,
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
              duration: 0.7,
              delay: 0.15,
              ease: 'easeOut',
            }}
          >
            <motion.h2
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
                delay: 0.25,
                ease: 'easeOut',
              }}
            >
              <span className="cta-h2-sub">
                Take the Next Step Towards
              </span>

              <span className="cta-h2-main">
                Becoming a Certified EFT Practitioner
              </span>
            </motion.h2>

            <motion.p
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
                duration: 0.6,
                delay: 0.4,
                ease: 'easeOut',
              }}
            >
              Join a supportive community, gain practical tools, and create real change — for yourself and others.
            </motion.p>
          </motion.div>

          <motion.div
            className="cta-action-wrap"
            initial={{
              opacity: 0,
              x: 35,
              scale: 0.95,
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
              duration: 0.7,
              delay: 0.3,
              ease: 'easeOut',
            }}
          >
            <motion.a
              className="btn btn-cta"
              href="https://pages.razorpay.com/EFT-Practitioners-training"
              target="_blank"
              rel="noopener noreferrer"
            style={{
  fontSize: '13.5px',
}}
              whileHover={{
                scale: 1.05,
                y: -2,
              }}
              whileTap={{
                scale: 0.96,
              }}
              transition={{
                duration: 0.2,
              }}
            >
              Register Now <span className="arrow">→</span>
            </motion.a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}