import { motion } from 'framer-motion'

export default function FAQ() {
  const faqs = [
    {
      q: 'What exactly is EFT?',
      a: 'Emotional Freedom Techniques (EFT), often called "tapping," is an evidence-informed approach combining elements of Chinese acupressure, modern psychology, and neuroscience. It involves gently tapping specific meridian points on the body while focusing on a distressing issue — such as stress, a limiting belief, trauma, or physical discomfort — with the aim of releasing emotional blocks and supporting the nervous system\'s return to balance.',
    },
    {
      q: 'How does tapping help with stress and trauma?',
      a: (
        <>
          EFT is thought to work by addressing the body's stress response to distressing memories or experiences.
          <ul>
            <li>Tapping on meridian points while acknowledging the issue is designed to send a calming signal to the nervous system, helping reduce the intensity of the stress response.</li>
            <li>Over time, this can lessen the emotional charge of triggers, easing symptoms like anxiety, fear, or physical discomfort.</li>
            <li>Across the 3 days and the supervision sessions that follow, you'll learn to work with painful memories, traumatic responses, and overwhelming emotions using a paced, trauma-informed approach.</li>
            <li>EFT has been evaluated against APA Division 12 criteria for evidence-based treatment and found to meet them for several conditions, including PTSD — though it isn't currently listed among APA's officially endorsed treatments, and this remains an area of ongoing research and some debate within psychology.</li>
          </ul>
        </>
      ),
    },
    {
      q: 'What is the timeline and structure of this training?',
      a: 'The program has two phases: 3 full days of in-person training in New Delhi, followed by 6 monthly online group supervision and mentoring sessions to support you as you begin practising.',
    },
    {
      q: 'What is EFTMRA, and why does it matter?',
      a: 'EFTMRA (EFT & Matrix Reimprinting Academy) is one of the largest global training bodies for EFT, with over 10,000 practitioners trained worldwide. Headed by Karl Dawson, EFT Founding Master and creator of Matrix Reimprinting, EFTMRA training includes some concepts and frameworks not taught elsewhere.',
    },
    {
      q: 'What are the steps to becoming a certified, internationally accredited EFT practitioner?',
      a: (
        <>
          The 3-day workshop covers EFT Levels 1 & 2. At the end, you receive a Certificate of Attendance. To complete full Practitioner Accreditation:
          <ul>
            <li>
              Register your profile at{' '}
              <a
                href="https://www.eftmatrixacademy.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.eftmatrixacademy.com
              </a>
            </li>
            <li>Review approximately 6 hours of supplementary video content</li>
            <li>Pass an online multiple-choice exam</li>
          </ul>
          Once complete, you receive international certification and can list yourself on the global practitioner directory.
          <br />
          <br />
          Note: There is a one-time £99 registration fee paid directly to EFTMRA (UK), covering the video learning modules and your first year of directory listing.
        </>
      ),
    },
    {
      q: 'Will my certification be recognized worldwide?',
      a: 'Yes. Certification through EFTMRA (UK) carries global validity, allowing you to establish your practice internationally.',
    },
    {
      q: "What comes after EFT Practitioners' Training?",
      a: (
        <>
          EFT Levels 1 & 2 give you the foundational skills to work with and create profound change for your clients and yourself, – be that working with complete issues including aspects like painful memories, limiting beliefs, physical pains.
          <br />
          <br />
          From there your learning can deepen in two important directions.
          <br />
          <br />
          EFT Level 3 – Advanced Practitioner Training helps you move from knowing EFT techniques to thinking and working like an advanced practitioner, learning to stitch a bespoke session for your client. You deepen your understanding of trauma-informed practice, identifying core issues, hidden resistance, nervous system regulation, therapeutic language, case navigation, and advanced EFT interventions, so you can work with greater clarity, confidence, and depth.
          <br />
          <br />
          Matrix Reimprinting Practitioners' Training is an advanced EFT method created by Karl Dawson, the founder of Matrix Reimprinting, that takes you deeper into the emotional memories and limiting beliefs at the root of long-standing patterns. You learn to work gently with big and small trauma, including childhood, prenatal and peri-natal trauma, phobias, addictions, relationship themes, birth experiences, allergies, serious illness-related emotional themes, and personal, ancestral, and collective imprints. EFTMRA is the only body that provides accredited training in this revolutionary method.
          <br />
          <br />
          Together, these trainings form a progressive practitioner pathway.
          <br />
          EFT Levels 1 & 2 give you the foundation.
          <br />
          EFT 3 helps you develop the map.
          <br />
          Matrix Reimprinting helps you go deeper to the roots.
          <br />
          <br />
          You can take these trainings as and when you feel ready to deepen your skills and expand the kind of work you are able to hold with yourself and your clients.
        </>
      ),
    },
  ]

  return (
    <section id="faq" className="section faq-section">
      <div className="container">

        {/* Heading Animation */}
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
          <motion.span
            className="ornate-line"
            initial={{
              scaleX: 0,
            }}
            whileInView={{
              scaleX: 1,
            }}
            viewport={{
              once: false,
            }}
            transition={{
              duration: 0.7,
              delay: 0.2,
              ease: 'easeOut',
            }}
          />

          <h2>Frequently Asked Questions</h2>

          <motion.span
            className="ornate-line"
            initial={{
              scaleX: 0,
            }}
            whileInView={{
              scaleX: 1,
            }}
            viewport={{
              once: false,
            }}
            transition={{
              duration: 0.7,
              delay: 0.2,
              ease: 'easeOut',
            }}
          />
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          className="faq-accordion-box"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
            amount: 0.15,
          }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.15,
              },
            },
          }}
        >
          {faqs.map((item, i) => (
            <motion.details
              className="faq-item"
              key={i}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 20,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    ease: 'easeOut',
                  },
                },
              }}
              whileHover={{
                y: -2,
                transition: {
                  duration: 0.2,
                },
              }}
            >
              <summary className="faq-summary">
                {item.q}

                <motion.span
                  className="faq-toggle"
                  whileHover={{
                    scale: 1.15,
                  }}
                  whileTap={{
                    scale: 0.9,
                  }}
                >
                  +
                </motion.span>
              </summary>

              <div className="faq-answer">
                {item.a}
              </div>
            </motion.details>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
