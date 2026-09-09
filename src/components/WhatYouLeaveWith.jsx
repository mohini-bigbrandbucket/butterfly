import { motion } from 'framer-motion'

const personalItems = [
  'A practical tool for regulating stress and emotional overwhelm',
  'Greater awareness of your own emotional patterns and triggers',
  'Increased resilience and nervous system flexibility',
  'Greater self-compassion and emotional freedom',
]

const professionalItems = [
  'A solid foundation in EFT Levels 1 & 2',
  'Confidence facilitating EFT sessions safely and effectively',
  'Practical experience through supervised practice',
  'A framework for working with anxiety, stress, limiting beliefs, and fears',
  'A deeper understanding of trauma-informed practice',
  'The ability to integrate EFT into your existing coaching or therapy work',
  'Access to ongoing supervision, mentoring, and certification pathways',
]

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle
        cx="12"
        cy="12"
        r="10.25"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M7.5 12.4L10.3 15.2L16.5 8.8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function HeartIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M24 40C24 40 6 28.5 6 16.8C6 10.6 10.9 6 16.8 6C20 6 22.7 7.6 24 10C25.3 7.6 28 6 31.2 6C37.1 6 42 10.6 42 16.8C42 28.5 24 40 24 40Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function BriefcaseIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect
        x="5"
        y="16"
        width="38"
        height="24"
        rx="3"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M17 16V12C17 9.79086 18.7909 8 21 8H27C29.2091 8 31 9.79086 31 12V16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M5 27H43" stroke="currentColor" strokeWidth="2" />
      <rect
        x="20"
        y="24"
        width="8"
        height="7"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  )
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 25,
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

const listItemVariants = {
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

export default function WhatYouLeaveWith() {
  return (
    <section id="what-you-leave-with" className="section leave-with-section">
      <div className="container">

        {/* Heading */}
        <motion.div
          className="ornate-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="ornate-line"></span>
          <h2>What You Will Leave With</h2>
          <span className="ornate-line"></span>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="leave-with-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >

          {/* Personally */}
          <motion.div
            className="leave-with-card leave-with-card--light"
            variants={itemVariants}
            whileHover={{
              y: -6,
              transition: { duration: 0.25 },
            }}
          >
            <div className="leave-with-card-head">

              <motion.span
                className="leave-with-icon leave-with-icon--light"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.2,
                  ease: 'easeOut',
                }}
              >
                <HeartIcon />
              </motion.span>

              <h3>Personally</h3>
            </div>

            <motion.ul
              className="leave-with-list"
              variants={containerVariants}
            >
              {personalItems.map((item, i) => (
                <motion.li
                  key={i}
                  variants={listItemVariants}
                >
                  <span className="leave-with-check leave-with-check--light">
                    <CheckIcon />
                  </span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Professionally */}
          <motion.div
            className="leave-with-card leave-with-card--dark"
            variants={itemVariants}
            whileHover={{
              y: -6,
              transition: { duration: 0.25 },
            }}
          >
            <div className="leave-with-card-head">

              <motion.span
                className="leave-with-icon leave-with-icon--dark"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.3,
                  ease: 'easeOut',
                }}
              >
                <BriefcaseIcon />
              </motion.span>

              <h3>Professionally</h3>
            </div>

            <motion.ul
              className="leave-with-list"
              variants={containerVariants}
            >
              {professionalItems.map((item, i) => (
                <motion.li
                  key={i}
                  variants={listItemVariants}
                >
                  <span className="leave-with-check leave-with-check--dark">
                    <CheckIcon />
                  </span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}