const navLinks = [
  { href: '#why-eft', label: 'Why EFT?' },
  { href: '#programme', label: 'Programme' },
  { href: '#workshop', label: 'Workshop' },
  { href: '#trainer', label: 'Trainer' },
  { href: '#faq', label: 'FAQ' },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top-row">
        <a className="brand brand-footer" href="#top" aria-label="The Butterfly Effect Home">
          <img src="/assets/logo.png" alt="The Butterfly Effect" className="brand-logo-img" />
        </a>

        <div className="footer-v-divider"></div>

        <nav className="footer-nav">
          {navLinks.map((link, i) => (
            <span key={link.href} style={{ display: 'contents' }}>
              <a href={link.href}>{link.label}</a>
              {i < navLinks.length - 1 && <span className="nav-pipe">|</span>}
            </span>
          ))}
        </nav>

        <div className="footer-v-divider"></div>

        <div className="footer-contact">
          <div className="contact-info">
            <span className="contact-label">Contact</span>
            <a href="tel:+919958630057" className="contact-phone">
              <svg viewBox="0 0 16 16" fill="currentColor" className="phone-icon">
                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.4 9.07a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328z" />
              </svg>
              <span>+91 9810598658</span>
            </a>
            <a href="mailto:saumya@thebutterfly-effect.com" className="contact-email">
              <svg viewBox="0 0 16 16" fill="currentColor" className="phone-icon">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-.5a.5.5 0 0 0-.5.5v.217l6.5 4.33 6.5-4.33V4a.5.5 0 0 0-.5-.5H2ZM14.5 5.869l-6.223 4.148a.5.5 0 0 1-.554 0L1.5 5.869V12a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5V5.869Z" />
              </svg>
              <span>saumya@thebutterfly-effect.com</span>
            </a>
          </div>
        </div>
      </div>

      <div className="container footer-bottom-row">
        <div className="copyright">© 2026 The Butterfly Effect. All rights reserved.</div>
        <div className="legal-links">
          <a href="#">Terms & Conditions</a>
          <span className="legal-pipe">|</span>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  )
}