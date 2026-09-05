import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'

export const EducationTemplate = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.async = true
    script.src = '//cdn.credly.com/assets/utilities/embed.js'
    document.head.appendChild(script)
    return () => {
      const existing = document.querySelector('script[src="//cdn.credly.com/assets/utilities/embed.js"]')
      if (existing) document.head.removeChild(existing)
    }
  }, [])

  const timeline = [
    {
      period: '2026 - Actual',
      title: 'Ingeniería en Sistemas de la Información y Ciencias de la Computación',
      institution: 'Universidad Mariano Gálvez de Guatemala',
      location: 'Guatemala',
      tags: ['Ingeniería', 'Sistemas', 'Informática', 'Ciencias de la Computación'],
      description: 'Formación integral en desarrollo de software, arquitectura de sistemas, gestión de datos y ciencias computacionales avanzadas.',
    },
    {
      period: '2023 – 2025',
      title: 'Perito en Computación',
      institution: 'Centro Educativo Técnico Laboral Kinal',
      location: 'Guatemala',
      tags: ['Redes', 'Programación', 'Sistemas Operativos'],
      description: 'Diversificado con especialización en tecnología. Formación sólida en administración de sistemas, redes y desarrollo de software.',
    },
    {
      period: '2016 – 2023',
      title: 'Educación Básica',
      institution: 'Centro de Estudios Guatemala',
      location: 'Guatemala',
      tags: ['Matemáticas', 'Ciencias', 'Tecnología'],
      description: 'Bases en matemáticas, ciencias e introducción a la tecnología informática.',
    },
  ]

    const certifications = [
    {
      title: 'Ethical Hacker',
      provider: 'CISCO Networking Academy',
      description: 'Pruebas de penetración, seguridad en la nube, análisis de malware, ingeniería social y defensas de red.',
      status: 'Valid',
      credlyUrl: 'https://www.credly.com/users/jose-gonzalez',
      pdfUrl: null, // Puedes colocar la ruta de tu PDF, ej: '/certs/ethical_hacker.pdf'
      date: 'Jun 2026',
    },
    {
      title: 'Introduction to Cybersecurity',
      provider: 'CISCO Networking Academy',
      description: 'Fundamentos de ciberseguridad, análisis de amenazas, defensa de redes y salvaguardias de sistemas.',
      status: 'Valid',
      credlyUrl: 'https://www.credly.com/users/jose-gonzalez',
      pdfUrl: null,
      date: 'Sept 2025',
    },
    {
      title: 'Operating Systems Basics',
      provider: 'CISCO Networking Academy',
      description: 'Administración y conceptos esenciales de sistemas operativos Windows, Linux y dispositivos móviles.',
      status: 'Valid',
      credlyUrl: null,
      pdfUrl: null,
      date: 'Nov 2024',
    },
    {
      title: 'CCNA: Introduction to Networks',
      provider: 'CISCO Networking Academy',
      description: 'Arquitecturas de red, modelos OSI/TCP-IP, direccionamiento IPv4/IPv6 y configuración de switches/routers.',
      status: 'Valid',
      credlyUrl: null,
      pdfUrl: null,
      date: 'Ene 2023',
    },
    {
      title: 'Networking Academy Learn-A-Thon',
      provider: 'CISCO (Ediciones 2024, 2025, 2026)',
      description: 'Insignias de participación activa y excelencia en maratones de tecnología y aprendizaje Cisco.',
      status: 'Valid',
      credlyUrl: 'https://www.credly.com/users/jose-gonzalez',
      pdfUrl: null,
      date: '2024 - 2026',
    },
  ]

  const cardStyle = { background: 'var(--bg-card)', border: '1px solid var(--border)' }

  const statusStyle = (status) => {
    if (status === 'Valid') return { background: 'var(--green-valid)', color: 'var(--green-text)', fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.1em', padding: '2px 8px', textTransform: 'uppercase' }
    if (status === 'En Proceso') return { background: 'rgba(180,130,20,0.15)', color: '#C9A84C', fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.1em', padding: '2px 8px', textTransform: 'uppercase' }
    return { background: 'rgba(60,60,60,0.4)', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.1em', padding: '2px 8px', textTransform: 'uppercase' }
  }

  return (
    <div style={{ background: 'var(--bg-primary)', minHeight: '100vh', paddingTop: '80px', paddingBottom: '80px' }}>
      <div className="max-w-7xl mx-auto px-6 xl:px-10">

        {/* ── PAGE HEADER ── */}
        <section className="mb-14">
          <div className="flex items-center gap-2 mb-5">
            <span className="pulse-dot w-1.5 h-1.5 rounded-full bg-[var(--accent)] inline-block" />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--text-muted)', letterSpacing: '0.16em' }} className="uppercase">
              System Record / Education Data
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1
              style={{ lineHeight: 1.1 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              <span style={{ fontFamily: 'var(--font-display)', color: 'var(--text-main)' }}>Knowledge </span>
              <span style={{ fontFamily: 'var(--font-display)', color: 'var(--text-muted)', fontStyle: 'italic', fontWeight: 300 }}>Architecture</span>
            </h1>
            <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)', maxWidth: '560px', lineHeight: 1.7 }}>
              Registro cronológico de educación formal y certificaciones técnicas especializadas.
              Estableciendo la teoría que fundamenta los mecanismos de defensa prácticos.
            </p>
          </motion.div>
        </section>

        {/* ── TWO COLUMNS ── */}
        <div className="grid lg:grid-cols-3 gap-8">

          {/* Left — Timeline */}
          <div className="lg:col-span-2">
            <div className="relative">
              {/* Vertical line */}
              <div
                style={{ position: 'absolute', left: '10px', top: 0, bottom: 0, width: '1px', background: 'var(--border)' }}
              />

              <div className="space-y-6 pl-10">
                {timeline.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.12 }}
                    className="relative"
                  >
                    {/* Timeline dot */}
                    <div
                      style={{
                        position: 'absolute',
                        left: '-36px',
                        top: '18px',
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        border: '1px solid var(--accent)',
                        background: 'var(--bg-primary)',
                      }}
                    />

                    <div style={{ ...cardStyle, padding: '20px 24px' }}>
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--text-main)', fontSize: '1.05rem', fontWeight: 600 }}>
                            {item.title}
                          </h3>
                          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '3px' }}>
                            {item.institution}
                          </p>
                        </div>
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--text-muted)', letterSpacing: '0.08em', whiteSpace: 'nowrap', marginLeft: '12px', border: '1px solid var(--border)', padding: '2px 8px' }}>
                          {item.period}
                        </span>
                      </div>

                      <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '12px' }}>
                        {item.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {item.tags.map(tag => (
                          <span
                            key={tag}
                            style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', color: 'var(--text-muted)', border: '1px solid var(--border)', padding: '2px 8px', letterSpacing: '0.08em' }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Active Certifications */}
          <div>
            <div className="flex items-center justify-between gap-2 mb-5">
              <div className="flex items-center gap-2">
                <Icon icon="mdi:shield-check" width={15} style={{ color: '#D49A4B' }} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: '#D49A4B', letterSpacing: '0.16em' }} className="uppercase font-semibold">
                  Active Certifications
                </span>
              </div>
              <a
                href="https://www.credly.com/users/jose-gonzalez"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontFamily: 'var(--font-mono)', fontSize: '0.52rem', color: '#8A8A8A', letterSpacing: '0.1em' }}
                className="hover:text-[var(--accent)] transition-colors uppercase"
              >
                [Credly Profile ↗]
              </a>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, i) => {
                // Determine left border accent like mockup
                let borderLeftStyle = '1px solid var(--border)'
                if (i === 0) borderLeftStyle = '2px solid #D49A4B'
                else if (i === 1) borderLeftStyle = '2px solid #8B1A1A'
                else if (cert.status === 'Valid') borderLeftStyle = '2px solid rgba(201,168,76,0.35)'

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    style={{
                      ...cardStyle,
                      borderLeft: borderLeftStyle,
                      padding: '16px 18px',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <h4 style={{ fontFamily: 'var(--font-display)', color: 'var(--text-main)', fontSize: '0.92rem', fontWeight: 600, lineHeight: 1.3 }}>
                        {cert.title}
                      </h4>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.52rem',
                          letterSpacing: '0.12em',
                          padding: '2px 7px',
                          textTransform: 'uppercase',
                          border: cert.status === 'Valid' ? '1px solid rgba(201,168,76,0.4)' : '1px solid #3A3A3A',
                          color: cert.status === 'Valid' ? '#C9A84C' : '#7A7A7A',
                          background: cert.status === 'Valid' ? 'rgba(201,168,76,0.08)' : 'transparent',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {cert.status}
                      </span>
                    </div>

                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: '#7A7A7A', letterSpacing: '0.08em', marginBottom: '8px', textTransform: 'uppercase' }}>
                      {cert.provider}
                    </p>

                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: '#8A8A8A', lineHeight: 1.5, marginBottom: '12px' }}>
                      {cert.description}
                    </p>

                    {/* Gradient bar for certification card (like OSCP mockup) */}
                    <div
                      style={{
                        height: '2px',
                        width: '100%',
                        background: i % 2 === 0
                          ? 'linear-gradient(90deg, #8B1A1A 0%, #D49A4B 60%, #E8ACA3 100%)'
                          : 'linear-gradient(90deg, #6B1414 0%, #8B1A1A 50%, #C9A84C 100%)',
                        marginBottom: '12px',
                        borderRadius: '1px',
                        opacity: 0.9,
                      }}
                    />

                    <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                      <div className="flex items-center gap-3">
                        {cert.credlyUrl || cert.credlyId ? (
                          <a
                            href={cert.credlyUrl || `https://www.credly.com/badges/${cert.credlyId}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', color: 'var(--accent)', letterSpacing: '0.1em', textDecoration: 'none', textTransform: 'uppercase' }}
                            className="hover:underline flex items-center gap-1"
                          >
                            [VERIFY ON CREDLY ↗]
                          </a>
                        ) : (
                          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', color: '#A38444', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                            [VERIFIED BY NETACAD]
                          </span>
                        )}

                        {cert.pdfUrl && (
                          <a
                            href={cert.pdfUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', color: '#E8ACA3', letterSpacing: '0.1em', textDecoration: 'none', textTransform: 'uppercase' }}
                            className="hover:underline flex items-center gap-1"
                          >
                            [VIEW PDF 📄↗]
                          </a>
                        )}
                      </div>

                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', color: '#5A5A5A', letterSpacing: '0.08em' }}>
                        {cert.date}
                      </span>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>


        </div>

        {/* ── Footer label ── */}
        <div className="mt-16 pt-6" style={{ borderTop: '1px solid var(--border)' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', color: 'var(--text-dim)', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
            © {new Date().getFullYear()} Cyber_Portfolio.&nbsp;
            <span style={{ color: 'var(--accent-dim)' }}>Secure Access Granted.</span>
          </p>
        </div>

      </div>
    </div>
  )
}
