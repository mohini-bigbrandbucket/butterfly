import { useState } from 'react'
import useScrollReveal from './hooks/useScrollReveal'
import ScrollProgressBar from './components/Scrollprogressbar'
import Header from './components/Header'
import Hero from './components/Hero'
import Audience from './components/Audience'
import WhyEFT from './components/WhyEFT'
import Whychooseprogram from './components/Whychooseprogram'
import Programme from './components/Programme'
import WhatYouLeaveWith from './components/WhatYouLeaveWith'
import Logistics from './components/Logistics'
import Testimonials from './components/Testimonials'
import WrittenTestimonials from './components/writtenTestimonials'
import Trainer from './components/Trainer'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'
import VideoModal from './components/VideoModal'
import StickyWhatsApp from './components/StickyWhatsApp'
import MobileStickyBar from './components/MobileStickyBar'

export default function App() {
  const [activeVideoId, setActiveVideoId] = useState(null)

  // Scans the page once mounted and reveals every .reveal* element as it
  // scrolls into view. See src/hooks/useScrollReveal.js.
  useScrollReveal()

  return (
    <>
      <ScrollProgressBar />
      <Header />
      <main id="top">
        <Hero />
        <Audience />
        <WhyEFT />
        <Whychooseprogram />
        <Programme />
        <WhatYouLeaveWith />
        <Logistics />
        <Testimonials onPlay={setActiveVideoId} />
        <WrittenTestimonials />
        <Trainer />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <VideoModal videoId={activeVideoId} onClose={() => setActiveVideoId(null)} />
      <StickyWhatsApp />
      <MobileStickyBar />
    </>
  )
}