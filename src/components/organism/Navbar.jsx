import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import ContactModal from '../molecules/ContactModal'
import { useContactModal } from '../../hooks/useContactModal'

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const contactModal = useContactModal()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const socialContacts = [
    { name: 'GitHub',   icon: 'mdi:github',   url: 'https://github.com/JoseGonzalez-dev',      color: '#ffffff' },
    { name: 'LinkedIn', icon: 'mdi:linkedin',  url: 'https://www.linkedin.com/in/jgonz%C3%A1lez-02407k?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', color: '#0077b5' },
    { name: 'Email',    icon: 'mdi:email',     url: 'mailto:jgonzalez.242720@gmail.com',        color: '#ea4335' }
  ]

  const navLinks = [
    { to: '/',          label: 'Home' },
    { to: '/education', label: 'Education' },
    { to: '/proyects',  label: 'Projects' },
    { to: '/about',     label: 'About Me' },
  ]

  const linkBase   = 'relative font-mono text-xs tracking-widest uppercase transition-colors duration-200'
  const linkActive = 'text-[var(--text-main)] after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[1px] after:bg-[var(--accent)]'
  const linkIdle   = 'text-[var(--text-muted)] hover:text-[var(--text-main)]'

  return (
    <>
      <nav
        style={{
          background: scrolled
            ? 'rgba(13,13,13,0.95)'
            : 'rgba(13,13,13,0.7)',
          borderBottom: '1px solid var(--border)',
          backdropFilter: 'blur(12px)',
        }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto px-6 xl:px-10 h-14 flex items-center justify-between">

          {/* ── Logo ── */}
          <NavLink to="/" className="flex items-center gap-2 group">
            <span className="pulse-dot w-2 h-2 rounded-full bg-[var(--accent)] inline-block" />
            <span
              style={{ fontFamily: 'var(--font-mono)', letterSpacing: '0.05em' }}
              className="text-sm font-semibold text-[var(--text-main)] uppercase"
            >
              Cyber<span style={{ color: 'var(--accent)' }}>_</span>Portfolio
            </span>
          </NavLink>

          {/* ── Desktop links ── */}
          <div className="hidden md:flex items-center gap-8 xl:gap-10">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? linkActive : linkIdle}`
                }
              >
                {label}
              </NavLink>
            ))}

            {/* Secure Contact button */}
            <button
              id="navbar-secure-contact-btn"
              onClick={contactModal.openContactModal}
              style={{
                border: '1px solid #5A1010',
                color: 'var(--text-main)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                letterSpacing: '0.12em',
                padding: '7px 16px',
                background: '#6B1414',
                transition: 'background 0.2s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#8B1A1A'}
              onMouseLeave={e => e.currentTarget.style.background = '#6B1414'}
              className="uppercase tracking-widest cursor-pointer"
            >
              ● Secure Contact
            </button>
          </div>

          {/* ── Mobile hamburger ── */}
          <button
            id="navbar-mobile-menu-toggle"
            onClick={() => setIsMenuOpen(o => !o)}
            style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}
            className="md:hidden text-xs tracking-widest uppercase focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? '[CLOSE]' : '[MENU]'}
          </button>
        </div>

        {/* ── Mobile dropdown ── */}
        {isMenuOpen && (
          <div
            style={{ borderTop: '1px solid var(--border)', background: 'rgba(13,13,13,0.97)' }}
            className="md:hidden px-6 py-4 space-y-4"
          >
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `block font-mono text-xs tracking-widest uppercase py-2 transition-colors ${
                    isActive
                      ? 'text-[var(--accent)]'
                      : 'text-[var(--text-muted)] hover:text-[var(--text-main)]'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}

            <button
              onClick={() => { contactModal.openContactModal(); setIsMenuOpen(false) }}
              style={{
                border: '1px solid #5A1010',
                color: 'var(--text-main)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                letterSpacing: '0.12em',
                padding: '9px 14px',
                background: '#6B1414',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#8B1A1A'}
              onMouseLeave={e => e.currentTarget.style.background = '#6B1414'}
              className="w-full uppercase"
            >
              ● Secure Contact
            </button>
          </div>
        )}
      </nav>

      <ContactModal
        isOpen={contactModal.isContactModalOpen}
        onClose={contactModal.closeContactModal}
        formData={contactModal.formData}
        isSubmitting={contactModal.isSubmitting}
        onInputChange={contactModal.handleInputChange}
        onSubmit={contactModal.handleSubmit}
        socialContacts={socialContacts}
      />
    </>
  )
}
