import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import ContactModal from '../molecules/ContactModal'
import { useContactModal } from '../../hooks/useContactModal'

export const AboutMeTemplate = () => {
  const contactModal = useContactModal()

  const socialContacts = [
    { name: 'GitHub',   icon: 'mdi:github',  url: 'https://github.com/JoseGonzalez-dev',    color: '#ffffff' },
    { name: 'LinkedIn', icon: 'mdi:linkedin', url: 'https://www.linkedin.com/in/jgonzalez-dev', color: '#0077b5' },
    { name: 'Email',    icon: 'mdi:email',    url: 'mailto:jgonzalez.242720@gmail.com',      color: '#ea4335' },
  ]

  const skills = [
    { name: 'Frontend (React, JavaScript, HTML5, CSS3)',  pct: 88 },
    { name: 'Backend (Node.js, Express, REST APIs)',       pct: 82 },
    { name: 'Bases de Datos (MongoDB, MySQL, SQL Server)', pct: 80 },
    { name: 'Lenguajes (Java, Python, C#, C++)',           pct: 75 },
    { name: 'DevOps & Herramientas (Git, Docker, Linux)',   pct: 78 },
    { name: 'Ciberseguridad & Redes (Cisco NetAcad)',      pct: 75 },
  ]

  const arsenal = [
    { icon: 'logos:react',          label: 'React' },
    { icon: 'logos:nodejs-icon',    label: 'Node.js' },
    { icon: 'logos:javascript',     label: 'JavaScript' },
    { icon: 'logos:python',         label: 'Python' },
    { icon: 'logos:java',           label: 'Java' },
    { icon: 'logos:c-sharp',        label: 'C# (.NET)' },
    { icon: 'logos:mongodb-icon',   label: 'MongoDB' },
    { icon: 'logos:mysql-icon',     label: 'MySQL' },
    { icon: 'logos:docker-icon',    label: 'Docker' },
    { icon: 'logos:git-icon',       label: 'Git' },
    { icon: 'cib:cisco',            label: 'Cisco' },
    { icon: 'logos:linux-tux',      label: 'Sistemas Operativos' },
  ]

  const stats = [
    { value: '2+',   label: 'Años Activo' },
    { value: '10+',  label: 'Proyectos' },
    { value: '15+',  label: 'Tecnologías' },
  ]

  const cardStyle = {
    background: 'var(--bg-card)',
    border: '1px solid var(--border)',
  }

  return (
    <div style={{ background: 'var(--bg-primary)', minHeight: '100vh', paddingTop: '80px', paddingBottom: '80px' }}>
      <div className="max-w-7xl mx-auto px-6 xl:px-10">

        {/* ── HERO ── */}
        <section className="mb-16">
          {/* Badge */}
          <div className="flex items-center gap-2 mb-6">
            <span className="pulse-dot w-1.5 h-1.5 rounded-full bg-[var(--accent)] inline-block" />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--text-muted)', letterSpacing: '0.16em' }} className="uppercase">
              Identidad.Verificada
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left — text */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1
                style={{ fontFamily: 'var(--font-display)', color: 'var(--text-main)', lineHeight: 1.1 }}
                className="text-4xl md:text-5xl font-bold mb-4"
              >
                Desarrollo Full Stack{' '}
                <span style={{ color: 'var(--accent)' }}>Confiable</span>
                {' '}& Consciente del Riesgo.
              </h1>
              <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: '520px' }}
                className="text-base mb-8"
              >
                Hola, soy <span style={{ color: 'var(--text-main)' }}>José Francisco González Ordoñez</span> — Desarrollador Full Stack Jr. y estudiante de Ingeniería en Sistemas. Enfocado en la construcción de interfaces responsivas y servicios backend optimizados, con experiencia en metodologías ágiles (Scrum) y despliegues confiables (CI/CD). Mi perfil técnico se potencia con una sólida base en sistemas operativos y certificaciones activas en ciberseguridad, con total disponibilidad para integrarme a equipos de alto rendimiento a tiempo completo.
              </p>

              {/* Stats row */}
              <div className="flex gap-8">
                {stats.map(({ value, label }) => (
                  <div key={label}>
                    <div style={{ fontFamily: 'var(--font-display)', color: 'var(--text-main)', fontSize: '1.8rem', fontWeight: 700, lineHeight: 1 }}>
                      {value}
                    </div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', color: 'var(--text-muted)', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: '4px' }}>
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right — photo with frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* OP_ID label */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    background: 'rgba(13,13,13,0.85)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.55rem',
                    color: 'var(--accent)',
                    letterSpacing: '0.14em',
                    padding: '4px 10px',
                    zIndex: 10,
                    textTransform: 'uppercase',
                  }}
                >
                  OP_ID: JG-24-GT
                </div>

                <img
                  src="https://res.cloudinary.com/dzydnoljd/image/upload/e_background_removal/f_png/v1752813675/iyo_hmala0.jpg"
                  alt="José Francisco González Ordoñez"
                  style={{
                    width: '280px',
                    height: '320px',
                    objectFit: 'cover',
                    border: '1px solid var(--border-light)',
                    display: 'block',
                  }}
                />

                {/* Corner decorations */}
                <div style={{ position: 'absolute', bottom: 0, right: 0, width: '28px', height: '28px', borderBottom: '2px solid var(--accent)', borderRight: '2px solid var(--accent)' }} />
                <div style={{ position: 'absolute', top: 0, right: 0, width: '28px', height: '28px', borderTop: '2px solid var(--accent)', borderRight: '2px solid var(--accent)' }} />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── TECHNICAL CAPABILITIES ── */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Icon icon="mdi:cpu-64-bit" width={18} style={{ color: 'var(--accent)' }} />
            <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--text-main)', fontSize: '1.3rem', fontWeight: 600 }}>
              Capacidades Técnicas
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Proficiency Matrix */}
            <div style={cardStyle} className="p-6">
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', color: 'var(--accent)', letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: '16px' }}>
                ● Matriz de Competencias
              </p>
              <div className="space-y-5">
                {skills.map(({ name, pct }, i) => (
                  <motion.div
                    key={name}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                  >
                    <div className="flex justify-between mb-1.5">
                      <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: 'var(--text-muted)' }}>{name}</span>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--accent)' }}>{pct}%</span>
                    </div>
                    <div className="cyber-progress" style={{ height: '2px' }}>
                      <motion.div
                        className="h-full"
                        style={{ background: 'var(--accent)' }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.1 + 0.2 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Arsenal / Tooling */}
            <div style={cardStyle} className="p-6">
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', color: 'var(--accent)', letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: '16px' }}>
                ● Arsenal / Herramientas
              </p>
              <div className="grid grid-cols-2 gap-3">
                {arsenal.map(({ icon, label }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.06 }}
                    style={{ border: '1px solid var(--border)', padding: '10px 14px', display: 'flex', alignItems: 'center', gap: '8px', transition: 'border-color 0.2s' }}
                    className="hover:border-[var(--border-light)] cursor-default"
                  >
                    <Icon icon={icon} width={16} style={{ flexShrink: 0 }} />
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--text-muted)' }}>{label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Contact CTA ── */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ border: '1px solid var(--border)', background: 'var(--bg-card)', padding: '32px' }}
            className="flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div>
              <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--text-main)', fontSize: '1.2rem', fontWeight: 600, marginBottom: '4px' }}>
                ¿Tienes un proyecto en mente?
              </h3>
              <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                Hablemos sobre tu próxima idea. Respondo en menos de 24h.
              </p>
            </div>
            <button
              onClick={contactModal.openContactModal}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                padding: '10px 22px',
                background: 'var(--danger)',
                border: '1px solid var(--danger)',
                color: 'var(--text-main)',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--danger-hover)'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--danger)'}
            >
              ● Contacto Seguro
            </button>
          </motion.div>
        </section>
      </div>

      <ContactModal
        isOpen={contactModal.isContactModalOpen}
        onClose={contactModal.closeContactModal}
        formData={contactModal.formData}
        isSubmitting={contactModal.isSubmitting}
        onInputChange={contactModal.handleInputChange}
        onSubmit={contactModal.handleSubmit}
        socialContacts={socialContacts}
      />
    </div>
  )
}
