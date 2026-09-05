import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router'
import { motion, AnimatePresence } from 'framer-motion'
import { Icon } from '@iconify/react'
import ContactModal from '../molecules/ContactModal'
import { useContactModal } from '../../hooks/useContactModal'
import CV from '../../assets/CV.pdf'

/* ─────────────────────────────────────────
   Terminal Loader
───────────────────────────────────────── */
const LINES = [
  { text: '> Initializing cyber_portfolio v2.4.1...', color: '#6B6B6B', delay: 0 },
  { text: '> Establishing secure connection...', color: '#6B6B6B', delay: 320 },
  { text: '  ✓ TLS_1.3 handshake complete', color: '#4CAF50', delay: 640 },
  { text: '> Installing dependencies:', color: '#6B6B6B', delay: 960 },
  { text: '  ✓ zero-trust-auth@3.1.2', color: '#4CAF50', delay: 1180 },
  { text: '  ✓ cryptoshield@latest', color: '#4CAF50', delay: 1360 },
  { text: '  ✓ portfolio-core@5.0.0', color: '#4CAF50', delay: 1540 },
  { text: '  ⟳ loading threat-intel-module...', color: '#FFBD2E', delay: 1720 },
  { text: '  ✓ threat-intel-module loaded', color: '#4CAF50', delay: 1950 },
  { text: '> Compiling secure assets...', color: '#6B6B6B', delay: 2150 },
  { text: '> STATUS: READY — ACCESS GRANTED', color: '#C9A84C', delay: 2450 },
]

const TerminalLoader = ({ onDone }) => {
  const [visible, setVisible] = useState([])
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    LINES.forEach((line, i) => {
      setTimeout(() => {
        setVisible(p => [...p, line])
        setProgress(Math.round(((i + 1) / LINES.length) * 100))
      }, line.delay)
    })
    const total = LINES[LINES.length - 1].delay + 700
    setTimeout(() => setTimeout(onDone, 400), total)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: '#0D0D0D' }}
    >
      <div style={{ border: '1px solid var(--accent)', background: '#080808', width: '100%', maxWidth: '520px', fontFamily: 'var(--font-mono)' }}>
        {/* title bar */}
        <div style={{ background: '#111', borderBottom: '1px solid var(--border)', padding: '8px 14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div className="flex gap-1.5">
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#FF5F57', display: 'inline-block' }} />
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#FFBD2E', display: 'inline-block' }} />
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#28C840', display: 'inline-block' }} />
          </div>
          <span style={{ fontSize: '0.58rem', color: '#404040', letterSpacing: '0.12em' }}>CYBER_PORTFOLIO — secure-terminal</span>
        </div>
        {/* body */}
        <div className="p-5 space-y-1.5" style={{ minHeight: '220px' }}>
          {visible.map((l, i) => (
            <p key={i} className="terminal-line" style={{ fontSize: '0.7rem', color: l.color }}>{l.text}</p>
          ))}
          {visible.length < LINES.length && (
            <span className="cursor-blink" style={{ fontSize: '0.7rem', color: 'var(--text-main)' }}>_</span>
          )}
        </div>
        {/* progress */}
        <div style={{ borderTop: '1px solid var(--border)', padding: '10px 20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
            <span style={{ fontSize: '0.52rem', color: '#404040', letterSpacing: '0.14em' }}>LOADING ENVIRONMENT</span>
            <span style={{ fontSize: '0.52rem', color: 'var(--accent)' }}>{progress}%</span>
          </div>
          <div style={{ height: '2px', background: '#1A1A1A', position: 'relative' }}>
            <div style={{ height: '100%', background: 'var(--accent)', width: `${progress}%`, transition: 'width 0.3s ease' }} />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

/* ─────────────────────────────────────────
   Home Template
───────────────────────────────────────── */
export const HomeTemplate = () => {
  const [showLoader, setShowLoader] = useState(() => !sessionStorage.getItem('cyber_loaded'))
  const [heroVisible, setHeroVisible] = useState(() => !!sessionStorage.getItem('cyber_loaded'))
  const contactModal = useContactModal()

  const handleLoaderDone = () => {
    sessionStorage.setItem('cyber_loaded', '1')
    setShowLoader(false)
    setHeroVisible(true)
  }

  const handleDownloadCV = () => {
    const link = document.createElement('a')
    link.href = CV
    link.download = 'Jose_Gonzalez_CV.pdf'
    link.target = '_blank'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const socialContacts = [
    { name: 'GitHub',   icon: 'mdi:github',  url: 'https://github.com/JoseGonzalez-dev',    color: '#ffffff', description: 'Código' },
    { name: 'LinkedIn', icon: 'mdi:linkedin', url: 'https://www.linkedin.com/in/jgonz%C3%A1lez-02407k?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', color: '#0077b5', description: 'LinkedIn' },
    { name: 'Email',    icon: 'mdi:email',    url: 'mailto:jgonzalez.242720@gmail.com',      color: '#ea4335', description: 'Email' },
  ]

  return (
    <div
      style={{
        background: '#0D0D0D',
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* ── Ambient background glows & Cyber Grid ── */}
      <div style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
      }}>
        {/* Cyber grid overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.025) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          opacity: 0.8,
        }} />

        {/* Top-right wine glow */}
        <div style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '55vw',
          height: '55vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(110, 18, 18, 0.4) 0%, rgba(70, 10, 10, 0.18) 45%, transparent 70%)',
          filter: 'blur(45px)',
        }} />
        {/* Bottom-left warm amber glow */}
        <div style={{
          position: 'absolute',
          bottom: '10%',
          left: '-10%',
          width: '42vw',
          height: '42vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(110, 70, 15, 0.22) 0%, transparent 70%)',
          filter: 'blur(55px)',
        }} />
        {/* Center subtle warm */}
        <div style={{
          position: 'absolute',
          top: '25%',
          left: '20%',
          width: '50vw',
          height: '35vw',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(90, 20, 10, 0.15) 0%, transparent 65%)',
          filter: 'blur(65px)',
        }} />
      </div>

      {/* Loader */}
      <AnimatePresence>
        {showLoader && <TerminalLoader onDone={handleLoaderDone} />}
      </AnimatePresence>

      {/* Contact Modal */}
      <ContactModal
        isOpen={contactModal.isContactModalOpen}
        onClose={contactModal.closeContactModal}
        formData={contactModal.formData}
        isSubmitting={contactModal.isSubmitting}
        onInputChange={contactModal.handleInputChange}
        onSubmit={contactModal.handleSubmit}
        socialContacts={socialContacts}
      />

      {/* ══════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════ */}
      <section
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div className="w-full max-w-7xl mx-auto px-6 xl:px-10 pt-20 pb-16">
          <AnimatePresence>
            {heroVisible && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
              >
                {/* Status badge */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.62rem',
                    color: '#B89855',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginBottom: '24px',
                  }}
                >
                  <span className="pulse-dot" style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#D9A553', display: 'inline-block' }} />
                  System Active // Protocol Secure
                </motion.p>

                {/* Headline */}
                <motion.h1
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.7 }}
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    lineHeight: 1.06,
                    fontSize: 'clamp(2.7rem, 6vw, 4.4rem)',
                    maxWidth: '740px',
                    marginBottom: '28px',
                    color: '#F4F0EA',
                  }}
                >
                  Securing the Digital{' '}
                  <span className="text-gradient-future">
                    Future
                  </span>
                  {' '}Against Unseen Threats.
                </motion.h1>

                {/* Subtext with left accent line */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.6 }}
                  style={{
                    borderLeft: '2px solid rgba(180, 140, 70, 0.35)',
                    paddingLeft: '18px',
                    marginBottom: '36px',
                    maxWidth: '520px',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      color: '#8A8A8A',
                      fontSize: '0.92rem',
                      lineHeight: 1.7,
                    }}
                  >
                    Desarrollador Full Stack enfocado en redes, ciberseguridad y arquitecturas zero-trust.
                    Construyendo sistemas impenetrables para un mundo hiperconectado.
                  </p>
                </motion.div>

                {/* CTA row */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', alignItems: 'center', marginBottom: '40px' }}
                >
                  {/* Primary — wine red filled with gold text/icon */}
                  <NavLink
                    to="/proyects"
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.62rem',
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      padding: '12px 24px',
                      background: '#5C1212',
                      border: '1px solid #8B2020',
                      color: '#D9A553',
                      textDecoration: 'none',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '9px',
                      transition: 'background 0.2s, border-color 0.2s, color 0.2s',
                      fontWeight: 600,
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = '#781818'; e.currentTarget.style.color = '#F2C978' }}
                    onMouseLeave={e => { e.currentTarget.style.background = '#5C1212'; e.currentTarget.style.color = '#D9A553' }}
                  >
                    <Icon icon="mdi:code-greater-than" width={14} style={{ color: '#D9A553' }} />
                    View Projects
                  </NavLink>

                  {/* Secondary — outline with gold text/icon */}
                  <button
                    onClick={handleDownloadCV}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.62rem',
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      padding: '12px 24px',
                      background: 'rgba(20, 16, 12, 0.6)',
                      border: '1px solid #382B1E',
                      color: '#C49A50',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '9px',
                      transition: 'border-color 0.2s, color 0.2s, background 0.2s',
                      fontWeight: 500,
                    }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = '#5A4630'; e.currentTarget.style.color = '#E5BE78' }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = '#382B1E'; e.currentTarget.style.color = '#C49A50' }}
                  >
                    <Icon icon="mdi:download-outline" width={14} style={{ color: '#C49A50' }} />
                    Download Resume
                  </button>
                </motion.div>


                {/* Social links */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.65, duration: 0.5 }}
                  style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}
                >
                  {socialContacts.map(c => (
                    <a
                      key={c.name}
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.58rem',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: '#4A4A4A',
                        border: '1px solid #222',
                        padding: '4px 11px',
                        textDecoration: 'none',
                        transition: 'border-color 0.2s, color 0.2s',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.5)'; e.currentTarget.style.color = 'var(--accent)' }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = '#222'; e.currentTarget.style.color = '#4A4A4A' }}
                    >
                      [{c.name}]
                    </a>
                  ))}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CORE CAPABILITIES
      ══════════════════════════════════════ */}
      <section style={{ position: 'relative', zIndex: 1, paddingBottom: '100px' }}>
        <div className="max-w-7xl mx-auto px-6 xl:px-10">

          {/* Section header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--text-main)', fontSize: '1.4rem', fontWeight: 600 }}>
              Core Capabilities
            </h2>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: '#404040', letterSpacing: '0.14em', cursor: 'pointer' }}
              className="uppercase hover:text-[var(--accent)] transition-colors"
            >
              View All Protocols_
            </span>
          </div>

          {/* ── Bento grid — matches mockup layout ── */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gridTemplateRows: 'auto',
            gap: '8px',
          }}>

            {/* Card 1 — Penetration Testing (large, cols 1-7, row 1) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{
                gridColumn: '1 / 8',
                gridRow: '1',
                background: 'rgba(20,12,12,0.85)',
                border: '1px solid #2A1A1A',
                padding: '28px',
                position: 'relative',
                overflow: 'hidden',
                minHeight: '220px',
              }}
              className="group hover:border-[#3D2020] transition-all duration-300"
            >
              {/* Subtle wine inner glow */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'radial-gradient(ellipse at 90% 10%, rgba(100,20,20,0.18) 0%, transparent 60%)',
                pointerEvents: 'none',
              }} />

              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '48px' }}>
                <div style={{
                  background: 'rgba(107,20,20,0.45)',
                  border: '1px solid rgba(139,26,26,0.6)',
                  padding: '9px',
                  display: 'inline-block',
                }}>
                  <Icon icon="mdi:magnify-scan" width={20} style={{ color: 'var(--accent)' }} />
                </div>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.52rem',
                  color: '#3A2A2A',
                  letterSpacing: '0.14em',
                  border: '1px solid #2A1A1A',
                  padding: '2px 8px',
                  textTransform: 'uppercase',
                }}>
                  NIVEL.03
                </span>
              </div>

              <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--text-main)', fontSize: '1.1rem', fontWeight: 600, marginBottom: '8px', position: 'relative' }}>
                Penetration Testing
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', color: '#5A5A5A', fontSize: '0.82rem', lineHeight: 1.65, maxWidth: '380px', position: 'relative' }}>
                Explotación sistemática de vulnerabilidades para fortalecer perímetros de red antes de que actores maliciosos puedan atacar.
              </p>
            </motion.div>

            {/* Card 2 — Zero Trust Arch (cols 8-12, row 1) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 }}
              style={{
                gridColumn: '8 / 13',
                gridRow: '1',
                background: 'rgba(16,14,12,0.85)',
                border: '1px solid #221A14',
                padding: '28px',
                position: 'relative',
                overflow: 'hidden',
                minHeight: '220px',
              }}
              className="group hover:border-[#332A1A] transition-all duration-300"
            >
              <div style={{
                position: 'absolute', inset: 0,
                background: 'radial-gradient(ellipse at 10% 90%, rgba(80,55,10,0.15) 0%, transparent 60%)',
                pointerEvents: 'none',
              }} />

              <div style={{ marginBottom: '48px' }}>
                <div style={{
                  background: 'rgba(107,20,20,0.45)',
                  border: '1px solid rgba(139,26,26,0.6)',
                  padding: '9px',
                  display: 'inline-block',
                }}>
                  <Icon icon="mdi:shield-lock-outline" width={20} style={{ color: 'var(--accent)' }} />
                </div>
              </div>

              <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--text-main)', fontSize: '1.1rem', fontWeight: 600, marginBottom: '8px', position: 'relative' }}>
                Zero Trust Arch
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', color: '#5A5A5A', fontSize: '0.82rem', lineHeight: 1.65, position: 'relative' }}>
                Diseñando entornos donde la verificación es continua y el acceso está estrictamente limitado.
              </p>
            </motion.div>

            {/* Card 3 — Threat Intel (cols 1-4, row 2) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.14 }}
              style={{
                gridColumn: '1 / 5',
                gridRow: '2',
                background: 'rgba(14,12,10,0.85)',
                border: '1px solid #221A14',
                padding: '28px',
                position: 'relative',
                minHeight: '200px',
              }}
              className="group hover:border-[#332A1A] transition-all duration-300"
            >
              <div style={{ background: 'rgba(107,20,20,0.45)', border: '1px solid rgba(139,26,26,0.6)', padding: '9px', display: 'inline-block', marginBottom: '40px' }}>
                <Icon icon="mdi:shield-alert-outline" width={20} style={{ color: 'var(--accent)' }} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--text-main)', fontSize: '1rem', fontWeight: 600, marginBottom: '6px' }}>
                Threat Intel
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', color: '#5A5A5A', fontSize: '0.8rem', lineHeight: 1.6 }}>
                Monitoreo proactivo y análisis de amenazas globales emergentes para securizar activos críticos.
              </p>
            </motion.div>

            {/* Card 4 — Incident Response (cols 5-12, row 2) — large with code symbol */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{
                gridColumn: '5 / 13',
                gridRow: '2',
                background: 'rgba(14,12,10,0.85)',
                border: '1px solid #2A2A22',
                padding: '28px',
                position: 'relative',
                overflow: 'hidden',
                minHeight: '200px',
              }}
              className="group hover:border-[#383828] transition-all duration-300"
            >
              {/* Decorative code braces */}
              <div style={{
                position: 'absolute',
                right: '24px',
                bottom: '16px',
                fontFamily: 'var(--font-mono)',
                fontSize: '5rem',
                color: 'rgba(201,168,76,0.06)',
                fontWeight: 700,
                lineHeight: 1,
                userSelect: 'none',
                pointerEvents: 'none',
              }}>
                {'{ }'}
              </div>

              <div style={{ maxWidth: '420px' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--text-main)', fontSize: '1.1rem', fontWeight: 600, marginBottom: '8px' }}>
                  Incident Response
                </h3>
                <p style={{ fontFamily: 'var(--font-body)', color: '#5A5A5A', fontSize: '0.82rem', lineHeight: 1.65, marginBottom: '20px' }}>
                  Despliegue rápido para contener, erradicar y recuperarse de brechas de seguridad, minimizando el downtime operacional.
                </p>
                <button
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.58rem',
                    color: 'var(--accent)',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                    transition: 'color 0.2s',
                  }}
                  onClick={() => contactModal.openContactModal()}
                >
                  Read Case Studies →
                </button>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  )
}
