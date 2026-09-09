import useCountdown from '../useCountdown'

export default function MobileStickyBar() {
  const { days, hours, mins, secs, isPast } = useCountdown('2026-09-18T00:00:00')

  return (
    <div className="mobile-cta-bar">
      <div className="mobile-cta-info">
        <span className="mobile-cta-date">18 – 20 Sep 2026</span>
        {!isPast && (
          <span className="mobile-cta-timer">
            {days}d : {hours}h : {mins}m : {secs}s
          </span>
        )}
      </div>
      <a
        className="btn mobile-cta-btn"
        href="https://pages.razorpay.com/EFT-Practitioners-training"
        target="_blank"
        rel="noopener noreferrer"
      >
        Register Now <span className="arrow">→</span>
      </a>
    </div>
  )
}