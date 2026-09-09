import { motion } from 'framer-motion'

const prices = [
  {
    title: 'Super-Early-Bird',
    main: '₹42,000',
    sub: '₹79,900 for 2 participants',
    validity: ['On or before', '20 July 2026'],
  },
  {
    title: 'Early-Bird',
    main: '₹45,000',
    sub: '₹84,500 for 2 participants',
    validity: ['21 July –', '30 August 2026'],
  },
  {
    title: 'Standard Price',
    main: '₹50,000',
    sub: null,
    validity: ['From', '1 September 2026'],
  },
]

const included = [
  'Two detailed physical training manuals',
  'Lunch and refreshments across all 3 days',
  '6 monthly group supervision and mentoring sessions with Saumya',
  'Certificate of attendance on completion',
  'Eligibility for globally accredited certification through EFTMRA (UK)',
  'Opportunities to assist in future batches, and access to a global practitioner community',
]

const fadeUp = {
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

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const listItem = {
  hidden: {
    opacity: 0,
    x: -15,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.45,
      ease: 'easeOut',
    },
  },
}

const priceCard = {
  hidden: {
    opacity: 0,
    y: 25,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

export default function Logistics() {
  return (
    <section id="workshop" className="section logistics-section">
      <div className="container">

        <motion.div
          className="logistics-card"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
        >

          <div className="logistics-top-row">

            {/* Left: Logistics */}
            <motion.div
              className="logistics-col"
              variants={fadeUp}
            >
              <h2>Workshop Logistics</h2>

              <motion.div
                className="logistics-list"
                variants={staggerContainer}
              >
                <motion.div
                  className="logistics-item"
                  variants={listItem}
                >
                  <svg
                    className="logistics-icon"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="#E7BE63"
                    strokeWidth="2"
                  >
                    <rect x="2.5" y="4" width="15" height="13.5" rx="2" />
                    <path
                      d="M6 2V5.5M14 2V5.5M2.5 8H17.5"
                      strokeLinecap="round"
                    />
                    <circle cx="6.5" cy="11.5" r="0.75" fill="#E7BE63" />
                    <circle cx="10" cy="11.5" r="0.75" fill="#E7BE63" />
                    <circle cx="13.5" cy="11.5" r="0.75" fill="#E7BE63" />
                    <circle cx="6.5" cy="14.5" r="0.75" fill="#E7BE63" />
                    <circle cx="10" cy="14.5" r="0.75" fill="#E7BE63" />
                  </svg>
                  <span>18, 19 & 20 September 2026</span>
                </motion.div>

                <motion.div
                  className="logistics-item"
                  variants={listItem}
                >
                  <svg
                    className="logistics-icon"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="#E7BE63"
                    strokeWidth="2"
                  >
                    <circle cx="10" cy="10" r="7.5" />
                    <path
                      d="M10 5.5V10L13.5 12"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span>9:00 AM – 5:30 PM daily</span>
                </motion.div>

                <motion.div
                  className="logistics-item"
                  variants={listItem}
                >
                  <svg
                    className="logistics-icon"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="#E7BE63"
                    strokeWidth="2"
                  >
                    <path d="M10 2.5C6.96 2.5 4.5 4.96 4.5 8C4.5 12.2 10 17.5 10 17.5C10 17.5 15.5 12.2 15.5 8C15.5 4.96 13.04 2.5 10 2.5Z" />
                    <circle cx="10" cy="8" r="2.2" fill="#E7BE63" />
                  </svg>
                  <span>Udman Hotel, Panchshila Park, New Delhi</span>
                </motion.div>

                <motion.div
                  className="logistics-item"
                  variants={listItem}
                >
                  <svg
                    className="logistics-icon"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="#E7BE63"
                    strokeWidth="2"
                  >
                    <circle cx="10" cy="6" r="2.5" />
                    <circle cx="5" cy="8" r="2" />
                    <circle cx="15" cy="8" r="2" />
                    <path d="M6 16C6 13.5 7.8 12.5 10 12.5C12.2 12.5 14 13.5 14 16" />
                    <path d="M2 17C2 15 3.5 14.5 5 14.5C5.8 14.5 6.6 14.8 7.2 15.2" />
                    <path d="M18 17C18 15 16.5 14.5 15 14.5C14.2 14.5 13.4 14.8 12.8 15.2" />
                  </svg>
                  <span>Group size: 8–12 participants</span>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Vertical Divider */}
            <motion.div
              className="logistics-divider"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />

            {/* Right: Investment */}
            <motion.div
              className="investment-col"
              variants={fadeUp}
            >
              <h2>Investment</h2>

              <motion.div
                className="pricing-cards-grid"
                variants={staggerContainer}
              >
                {prices.map((p, i) => (
                  <motion.div
                    className="price-card"
                    key={i}
                    variants={priceCard}
                    whileHover={{
                      y: -6,
                      transition: { duration: 0.25 },
                    }}
                  >
                    <div className="price-title">{p.title}</div>

                    <div className="price-main">
                      {p.main}{' '}
                      <span className="price-solo">solo</span>
                    </div>

                    <div
                      className={`price-sub ${
                        !p.sub ? 'price-sub-spacer' : ''
                      }`}
                    >
                      {p.sub || '\u00A0'}
                    </div>

                    <div className="price-validity">
                      {p.validity.map((v, j) => (
                        <span key={j}>{v}</span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Horizontal Divider */}
          <motion.div
            className="logistics-horizontal-divider"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          />

          {/* Bottom: What's Included */}
          <motion.div
            className="included-row"
            variants={fadeUp}
          >
            <h2>What's Included</h2>

            <motion.ul
              className="included-points"
              variants={staggerContainer}
            >
              {included.map((item, i) => (
                <motion.li
                  key={i}
                  variants={listItem}
                >
                  <motion.span
                    className="point-icon"
                    whileHover={{
                      scale: 1.2,
                      rotate: 15,
                    }}
                  >
                    ✦
                  </motion.span>
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Horizontal Divider */}
          <motion.div
            className="logistics-horizontal-divider"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          />

          {/* Certification Note */}
          <motion.div
            className="logistics-note"
            variants={fadeUp}
          >
            <motion.span
              className="logistics-note-icon"
              aria-hidden="true"
              whileHover={{ scale: 1.1 }}
            >
              i
            </motion.span>

            <p>
              <strong>Note:</strong> Full EFT Practitioner certification
              (beyond attendance) requires a separate one-time £99
              registration with EFTMRA, covering supplementary video content
              and your first year's practitioner listing — see FAQ for
              details.
            </p>
          </motion.div>

          {/* Final Register CTA */}
          <motion.div
            className="logistics-register-wrap"
            variants={fadeUp}
          >
            <motion.a
              className="btn btn-logistics-register"
              href="https://pages.razorpay.com/EFT-Practitioners-training"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                y: -3,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.98,
              }}
            >
              Register Now &amp; Claim Your Seat{' '}
              <motion.span
                className="arrow"
                whileHover={{ x: 5 }}
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}