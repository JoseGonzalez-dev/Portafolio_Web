import React from 'react'

export const Footer = () => {
  const year = new Date().getFullYear()

  const externalLinks = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jgonz%C3%A1lez-02407k?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
    { label: 'GitHub',   href: 'https://github.com/JoseGonzalez-dev' },
    { label: 'Contact',  href: 'mailto:jgonzalez.242720@gmail.com' },
  ]

  const linkStyle = {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.6rem',
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: 'var(--text-muted)',
    textDecoration: 'none',
    transition: 'color 0.2s ease',
    cursor: 'pointer',
  }

  return (
    <footer style={{ borderTop: '1px solid var(--border)', background: 'var(--bg-primary)' }}>
      <div className="max-w-7xl mx-auto px-6 xl:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="pulse-dot w-2 h-2 rounded-full bg-[var(--accent)] inline-block" />
          <span style={{ fontFamily: 'var(--font-mono)', letterSpacing: '0.05em', color: 'var(--text-muted)', fontSize: '0.7rem', textTransform: 'uppercase' }}>
            Cyber<span style={{ color: 'var(--accent)' }}>_</span>Portfolio
          </span>
        </div>

        {/* Copyright */}
        <p style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', fontSize: '0.58rem', letterSpacing: '0.12em', textTransform: 'uppercase', textAlign: 'center' }}>
          © {year} Cyber_Portfolio.{' '}
          <span style={{ color: 'var(--accent-dim)' }}>Secure Access Granted.</span>
        </p>

        {/* Links */}
        <div className="flex items-center gap-6">
          {externalLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              style={linkStyle}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--text-main)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
            >
              {label}
            </a>
          ))}
        </div>

      </div>
    </footer>
  )
}
