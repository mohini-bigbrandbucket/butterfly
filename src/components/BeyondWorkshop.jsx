const items = [
  {
    text: 'Concept revision and advanced demonstrations',
    icon: (
      <svg viewBox="0 0 32 32" width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16 9C13.8 7.2 10.6 6.4 7 7V22.5C10.6 21.9 13.8 22.7 16 24.5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 9C18.2 7.2 21.4 6.4 25 7V22.5C21.4 21.9 18.2 22.7 16 24.5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M16 9V24.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    text: 'Case studies and presentation reviews',
    icon: (
      <svg viewBox="0 0 32 32" width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M9 4H19L25 10V27C25 27.5523 24.5523 28 24 28H9C8.44772 28 8 27.5523 8 27V5C8 4.44772 8.44772 4 9 4Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path d="M19 4V10H25" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M12 16H21" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M12 20.5H21" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M12 25H18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    text: 'Q&A and clarification of complex themes',
    icon: (
      <svg viewBox="0 0 32 32" width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4 8.5C4 6.567 5.567 5 7.5 5H18.5C20.433 5 22 6.567 22 8.5V14.5C22 16.433 20.433 18 18.5 18H10L5.5 21.5V18H7.5C5.567 18 4 16.433 4 14.5V8.5Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M18 15.5C18 17.9853 20.0147 20 22.5 20H23L27 23V19.5H24.5C22.0147 19.5 20 17.4853 20 15V13"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    text: 'Supervised practice sessions',
    icon: (
      <svg viewBox="0 0 32 32" width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="11" cy="9" r="3.2" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="M4.5 22C4.5 17.8 7.4 15 11 15C14.6 15 17.5 17.8 17.5 22"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <circle cx="21.5" cy="10.5" r="2.6" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="M19 15.3C22.1 15 24.7 17.3 25.2 21"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
]

export default function BeyondWorkshop() {
  return (
    <div className="beyond-card">
      <div className="beyond-left">
        <span className="beyond-badge">Beyond the Workshop</span>
        <h3 className="beyond-heading">
          Plus: <span className="gold-text">6 Months</span> of Live Supervision &amp; Mentoring
          with Saumya
        </h3>
        <p className="beyond-sub">
          Monthly online sessions (2.5–3 hours each) continue your learning after the workshop,
          covering:
        </p>
      </div>

      <div className="beyond-right">
        {items.map((item, i) => (
          <div className="beyond-item" key={i}>
            <span className="beyond-icon">{item.icon}</span>
            <span className="beyond-divider"></span>
            <span className="beyond-text">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  )
}