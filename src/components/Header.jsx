import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { href: '#why-eft', label: 'Why EFT?' },
    { href: '#programme', label: 'Programme' },
    { href: '#workshop', label: 'Workshop' },
    { href: '#trainer', label: 'Trainer' },
    { href: '#faq', label: 'FAQ' },
  ]

  return (
    <header className="site-header reveal-nav">
      <div className="nav-container container">
        <a className="brand" href="#top" aria-label="The Butterfly Effect Home">
          <img src="/assets/logo.png" alt="The Butterfly Effect" className="brand-logo-img" />
        </a>

        <nav className={`desktop-nav${menuOpen ? ' is-open' : ''}`}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-right">
          <a
            className="btn btn-header"
            href="https://pages.razorpay.com/EFT-Practitioners-training"
            target="_blank"
            rel="noopener noreferrer"
          >
            Register Now <span className="arrow">→</span>
          </a>
          <button
            className="menu-toggle"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className={`menu-icon${menuOpen ? ' is-open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
      </div>
    </header>
  )
}
