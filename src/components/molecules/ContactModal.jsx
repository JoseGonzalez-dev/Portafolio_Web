import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Icon } from '@iconify/react'

const ContactModal = ({
  isOpen,
  onClose,
  formData,
  isSubmitting,
  onInputChange,
  onSubmit,
  socialContacts = []
}) => {
  const inputStyle = {
    width: '100%',
    background: '#0D0D0D',
    border: '1px solid var(--border)',
    color: 'var(--text-main)',
    fontFamily: 'var(--font-mono)',
    fontSize: '0.8rem',
    padding: '10px 14px',
    outline: 'none',
    transition: 'border-color 0.2s ease',
  }

  const labelStyle = {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.6rem',
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: 'var(--text-muted)',
    display: 'block',
    marginBottom: '6px',
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="contact-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)' }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            id="contact-modal-panel"
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1,    opacity: 1, y: 0 }}
            exit={{ scale: 0.95,   opacity: 0, y: 20 }}
            transition={{ type: 'spring', stiffness: 280, damping: 28 }}
            style={{
              background: '#0F0F0F',
              border: '1px solid var(--accent)',
              maxWidth: '640px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
            }}
            className="relative"
            onClick={e => e.stopPropagation()}
          >
            {/* ── Terminal title bar ── */}
            <div
              style={{
                background: '#161616',
                borderBottom: '1px solid var(--border)',
                padding: '10px 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                  <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <span className="w-3 h-3 rounded-full bg-[#28C840]" />
                </div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--text-muted)', letterSpacing: '0.1em' }}>
                  SECURE_CHANNEL // ESTABLISH_CONNECTION
                </span>
              </div>
              <button
                id="contact-modal-close-btn"
                onClick={onClose}
                style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: '0.7rem' }}
                className="hover:text-[var(--text-main)] transition-colors cursor-pointer"
              >
                [X]
              </button>
            </div>

            {/* ── Body ── */}
            <div className="p-6 md:p-8">
              {/* Header */}
              <div className="mb-6">
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--accent)', letterSpacing: '0.15em' }} className="uppercase mb-2">
                  ● Transmission Protocol Active
                </p>
                <h2
                  style={{ fontFamily: 'var(--font-display)', color: 'var(--text-main)', fontSize: '1.6rem', fontWeight: 700 }}
                >
                  Envía un Mensaje
                </h2>
                <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '4px' }}>
                  Cuéntame sobre tu proyecto. Respondo en menos de 24h.
                </p>
              </div>

              {/* Form */}
              <form id="contact-modal-form" onSubmit={onSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label style={labelStyle}>Nombre *</label>
                    <input
                      id="contact-input-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={onInputChange}
                      required
                      placeholder="Tu nombre completo"
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                      onBlur={e => e.target.style.borderColor = 'var(--border)'}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Email *</label>
                    <input
                      id="contact-input-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={onInputChange}
                      required
                      placeholder="tu@email.com"
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                      onBlur={e => e.target.style.borderColor = 'var(--border)'}
                    />
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Asunto *</label>
                  <input
                    id="contact-input-subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={onInputChange}
                    required
                    placeholder="¿De qué quieres hablar?"
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}
                  />
                </div>

                <div>
                  <label style={labelStyle}>Mensaje *</label>
                  <textarea
                    id="contact-input-message"
                    name="message"
                    value={formData.message}
                    onChange={onInputChange}
                    required
                    rows={5}
                    placeholder="Cuéntame sobre tu proyecto..."
                    style={{ ...inputStyle, resize: 'none' }}
                    onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}
                  />
                </div>

                {/* Buttons */}
                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={onClose}
                    style={{
                      flex: 1,
                      border: '1px solid var(--border)',
                      color: 'var(--text-muted)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.65rem',
                      letterSpacing: '0.12em',
                      padding: '10px',
                      background: 'transparent',
                      cursor: 'pointer',
                      textTransform: 'uppercase',
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-light)'; e.currentTarget.style.color = 'var(--text-main)' }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-muted)' }}
                  >
                    [CANCEL]
                  </button>
                  <button
                    id="contact-submit-btn"
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                      flex: 2,
                      border: '1px solid var(--accent)',
                      color: '#0D0D0D',
                      background: 'var(--accent)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.65rem',
                      letterSpacing: '0.12em',
                      padding: '10px',
                      cursor: isSubmitting ? 'not-allowed' : 'pointer',
                      textTransform: 'uppercase',
                      fontWeight: 600,
                      opacity: isSubmitting ? 0.6 : 1,
                      transition: 'opacity 0.2s',
                    }}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <span className="cursor-blink">_</span> TRANSMITTING...
                      </span>
                    ) : (
                      '▶ TRANSMIT_MESSAGE'
                    )}
                  </button>
                </div>
              </form>

              {/* Social links */}
              {socialContacts.length > 0 && (
                <div style={{ borderTop: '1px solid var(--border)', marginTop: '24px', paddingTop: '20px' }}>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', color: 'var(--text-muted)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: '12px' }}>
                    // Direct channels
                  </p>
                  <div className="flex gap-4">
                    {socialContacts.map((contact, i) => (
                      <a
                        key={i}
                        href={contact.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.6rem',
                          letterSpacing: '0.1em',
                          color: 'var(--text-muted)',
                          textDecoration: 'none',
                          textTransform: 'uppercase',
                          border: '1px solid var(--border)',
                          padding: '4px 10px',
                          transition: 'all 0.2s',
                        }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)' }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-muted)' }}
                      >
                        [{contact.name}]
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ContactModal