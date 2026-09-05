import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Icon } from '@iconify/react'
import ContactModal from '../molecules/ContactModal'
import ImageModal from '../molecules/ImageModal'
import { useContactModal } from '../../hooks/useContactModal'
import { useImageModal } from '../../hooks/useImageModal'

export const ProyectsTemplate = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const contactModal = useContactModal()
  const imageModal = useImageModal()

  const socialContacts = [
    { name: 'GitHub',   icon: 'mdi:github',  url: 'https://github.com/JoseGonzalez-dev',    color: '#ffffff' },
    { name: 'LinkedIn', icon: 'mdi:linkedin', url: 'https://www.linkedin.com/in/jgonz%C3%A1lez-02407k?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', color: '#0077b5' },
    { name: 'Email',    icon: 'mdi:email',    url: 'mailto:jgonzalez.242720@gmail.com',      color: '#ea4335' },
  ]

  const projects = [
    {
      id: 1, title: 'Tienda Online', category: 'desktop', live: true,
      desc: 'E-commerce completo con carrito de compras, gestión de productos y panel administrativo. Conectado a base de datos MySQL.',
      image: 'https://res.cloudinary.com/dzydnoljd/image/upload/v1752988296/Captura_de_pantalla_2025-07-19_230717_ood9cz.png',
      tags: ['Java', 'JavaFX', 'MySQL', 'CSS'],
      github: 'https://github.com/JoseGonzalez-dev/Kinal_Store.git',
      demo: null,
    },
    {
      id: 2, title: 'Hotel-Havenis-sys', category: 'fullstack', live: false,
      desc: 'Sistema para la gestión de hoteles, eventos y servicios con arquitectura fullstack.',
      image: 'https://res.cloudinary.com/dzydnoljd/image/upload/v1752990178/Captura_de_pantalla_2025-07-19_234245_y65e2q.png',
      tags: ['React', 'Node.js', 'MongoDB', 'Express'],
      github: 'https://github.com/ndelacruz-2023048/Sistema-gestion-hotelera.git',
      demo: null,
    },
    {
      id: 3, title: 'Calculadora React Native', category: 'mobile', live: false,
      desc: 'Aplicación móvil nativa con operaciones matemáticas avanzadas y diseño responsive para Android e iOS.',
      image: 'https://res.cloudinary.com/dzydnoljd/image/upload/v1752989592/Imagen_de_WhatsApp_2025-07-19_a_las_23.32.31_55db8a94_rqphag.jpg',
      tags: ['React Native', 'JavaScript', 'Expo'],
      github: 'https://github.com/JoseGonzalez-dev/Proyectos.git',
      demo: null,
    },
    {
      id: 4, title: 'Blog de Aprendizaje', category: 'fullstack', live: false,
      desc: 'Sistema blog con apariencia de red social, interacción dinámica en tiempo real.',
      image: 'https://res.cloudinary.com/dzydnoljd/image/upload/v1752990512/Captura_de_pantalla_2025-07-19_234821_voahkp.png',
      tags: ['React', 'Node.js', 'MongoDB', 'Express'],
      github: 'https://github.com/JoseGonzalez-dev/Blog_Aprendizaje_FyB.git',
      demo: null,
    },
    {
      id: 5, title: 'Portafolio Web', category: 'web', live: false,
      desc: 'Sitio web personal responsive con animaciones fluidas, diseño moderno y optimización SEO.',
      image: 'https://res.cloudinary.com/dzydnoljd/image/upload/v1752990469/fbnlgfe0klobdro85po6.png',
      tags: ['React', 'Vite', 'Tailwind'],
      github: 'https://github.com/JoseGonzalez-dev/Portafolio_Web.gita',
      demo: null,
    },
    {
      id: 6, title: 'AguaComun-sys', category: 'web', live: true,
      desc: 'Proyecto comunitario para gestión, optimización y cuidado del agua en comunidades de Guatemala.',
      image: 'https://res.cloudinary.com/dzydnoljd/image/upload/v1752990984/Captura_de_pantalla_2025-07-19_235610_odhgqb.png',
      tags: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      github: 'https://github.com/ndelacruz-2023048/AguaComun_Frontend.git',
      demo: 'https://aguacomunfrontend-production.up.railway.app/',
    },
    {
      id: 7, title: 'Limae-sys', category: 'web', live: true,
      desc: 'Plataforma de prevención contra el bullying escolar con chat integrado 24/7.',
      image: 'https://res.cloudinary.com/dzydnoljd/image/upload/v1752991625/Captura_de_pantalla_2025-07-20_000648_hoapaa.png',
      tags: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      github: 'https://github.com/ndelacruz-2023048/Limae_Frontend.git',
      demo: 'https://limae.org',
    },
    {
      id: 8, title: 'Tienda Online API', category: 'backend', live: false,
      desc: 'API RESTful para gestión de productos y proceso de compras eCommerce.',
      image: 'https://res.cloudinary.com/dzydnoljd/image/upload/v1752991983/Captura_de_pantalla_2025-07-20_001250_cocqkr.png',
      tags: ['Node.js', 'MongoDB', 'Express'],
      github: 'https://github.com/jgonzalez-2023195/Online_Store.git',
      demo: null,
    },
  ]

  const categories = [
    { id: 'all',      label: 'All' },
    { id: 'web',      label: 'Web' },
    { id: 'fullstack',label: 'Full Stack' },
    { id: 'backend',  label: 'Backend' },
    { id: 'mobile',   label: 'Mobile' },
    { id: 'desktop',  label: 'Desktop' },
  ]

  const filtered = activeFilter === 'all' ? projects : projects.filter(p => p.category === activeFilter)

  const cardStyle = { background: 'var(--bg-card)', border: '1px solid var(--border)' }

  return (
    <div style={{ background: 'var(--bg-primary)', minHeight: '100vh', paddingTop: '80px', paddingBottom: '80px' }}>
      <div className="max-w-7xl mx-auto px-6 xl:px-10">

        {/* ── PAGE HEADER ── */}
        <section className="mb-14">
          <div className="flex items-center gap-2 mb-5">
            <span className="pulse-dot w-1.5 h-1.5 rounded-full bg-[var(--accent)] inline-block" />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--text-muted)', letterSpacing: '0.16em' }} className="uppercase">
              Classified Archive // Operations
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1
              style={{ fontFamily: 'var(--font-display)', color: 'var(--text-main)', fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 700, lineHeight: 1.05 }}
              className="mb-4"
            >
              Active Operations.
            </h1>
            <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)', maxWidth: '540px', lineHeight: 1.7, fontSize: '0.95rem' }}>
              Registro de operaciones técnicas ejecutadas con éxito. Selecciona un archivo de proyecto para revisar las especificaciones completas.
            </p>
          </motion.div>
        </section>

        {/* ── FILTERS ── */}
        <section className="mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  padding: '5px 14px',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  background: activeFilter === cat.id ? 'var(--accent)' : 'transparent',
                  border: activeFilter === cat.id ? '1px solid var(--accent)' : '1px solid var(--border)',
                  color: activeFilter === cat.id ? '#0D0D0D' : 'var(--text-muted)',
                  fontWeight: activeFilter === cat.id ? 600 : 400,
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </section>

        {/* ── PROJECT GRID ── */}
        <section className="mb-14">
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  style={{ ...cardStyle, overflow: 'hidden' }}
                  className="group hover:border-[var(--border-light)] transition-all duration-200 flex flex-col"
                >
                  {/* Image */}
                  <div
                    className="relative overflow-hidden cursor-pointer"
                    style={{ height: '180px', background: '#111' }}
                    onClick={() => imageModal.openModal(project.image, project.title, project.title)}
                  >
                    {project.image && (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400"
                        onError={e => { e.target.style.display = 'none' }}
                      />
                    )}

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ border: '1px solid rgba(201,168,76,0.6)', padding: '6px 12px', fontFamily: 'var(--font-mono)', fontSize: '0.55rem', color: 'var(--accent)', letterSpacing: '0.12em', background: 'rgba(13,13,13,0.8)' }}
                      >
                        [VIEW FILE]
                      </div>
                    </div>

                    {/* Live badge */}
                    {project.live && (
                      <div className="absolute top-3 right-3"
                        style={{ background: 'rgba(13,13,13,0.85)', border: '1px solid var(--border-light)', padding: '2px 8px', display: 'flex', alignItems: 'center', gap: '5px' }}
                      >
                        <span className="pulse-dot w-1.5 h-1.5 rounded-full bg-[var(--green-text)] inline-block" />
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5rem', color: 'var(--green-text)', letterSpacing: '0.12em' }}>LIVE</span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-start gap-2 mb-2">
                      <Icon icon="mdi:shield-outline" width={14} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '3px' }} />
                      <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--text-main)', fontSize: '1rem', fontWeight: 600, lineHeight: 1.3 }}>
                        {project.title}
                      </h3>
                    </div>

                    <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)', fontSize: '0.8rem', lineHeight: 1.6, marginBottom: '12px', flex: 1 }}>
                      {project.desc}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.map(tag => (
                        <span
                          key={tag}
                          style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', color: 'var(--text-muted)', border: '1px solid var(--border)', padding: '2px 7px', letterSpacing: '0.06em' }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.1em', color: 'var(--text-muted)', border: '1px solid var(--border)', padding: '4px 10px', textDecoration: 'none', textTransform: 'uppercase', transition: 'all 0.2s', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                          onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)' }}
                          onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-muted)' }}
                        >
                          <Icon icon="mdi:github" width={12} /> Code
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', letterSpacing: '0.1em', color: '#0D0D0D', background: 'var(--accent)', border: '1px solid var(--accent)', padding: '4px 10px', textDecoration: 'none', textTransform: 'uppercase', transition: 'all 0.2s', display: 'inline-flex', alignItems: 'center', gap: '4px', fontWeight: 600 }}
                          onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent-dim)' }}
                          onMouseLeave={e => { e.currentTarget.style.background = 'var(--accent)' }}
                        >
                          <Icon icon="mdi:open-in-new" width={12} /> Demo
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* ── FOOTER ── */}
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '20px' }}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.55rem', color: 'var(--text-dim)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              © {new Date().getFullYear()} Cyber_Portfolio.&nbsp;
              <span style={{ color: 'var(--accent-dim)' }}>Secure Archive Accredited.</span>
            </p>
            <button
              onClick={contactModal.openContactModal}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.6rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                padding: '8px 18px',
                background: 'var(--danger)',
                border: '1px solid var(--danger)',
                color: 'var(--text-main)',
                cursor: 'pointer',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--danger-hover)'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--danger)'}
            >
              ● Secure Contact
            </button>
          </div>
        </div>
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
      <ImageModal
        isOpen={imageModal.isOpen}
        onClose={imageModal.closeModal}
        imageSrc={imageModal.currentImage.src}
        imageAlt={imageModal.currentImage.alt}
        title={imageModal.currentImage.title}
      />
    </div>
  )
}
