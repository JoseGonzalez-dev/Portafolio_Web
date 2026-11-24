import { Icon } from '@iconify/react'
import { NavLink } from 'react-router-dom'

export const NotFoundPage = () => {
  const protocolCards = [
    {
      icon: 'mdi:alert-outline',
      title: 'Reportar Anomalía',
      description: 'Registra para revisión una ruta incorrecta.',
      action: 'Crear ticket',
      href: 'mailto:jgonzalez.242720@gmail.com?subject=Reporte%20de%20ruta%20en%20JGonzalez',
      external: true,
    },
    {
      icon: 'mdi:map-outline',
      title: 'Mapa del Sistema',
      description: 'Consulta el índice estructural del portafolio.',
      action: 'Ver arquitectura',
      href: '/proyects',
    },
    {
      icon: 'mdi:shield-lock-outline',
      title: 'Contacto Cifrado',
      description: 'Accede a un canal seguro de comunicación.',
      action: 'Iniciar canal',
      href: 'mailto:jgonzalez.242720@gmail.com',
      external: true,
    },
  ]

  return (
    <section
      className="not-found-page"
      style={{
        minHeight: 'calc(100vh - 113px)',
        display: 'flex',
        alignItems: 'center',
        background: 'var(--bg-primary)',
        overflow: 'hidden',
      }}
    >
      <div className="w-full max-w-6xl mx-auto px-6 xl:px-10 py-16 text-center">
        <p style={{ fontFamily: 'var(--font-mono)', color: '#B89855', fontSize: '0.58rem', letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: '20px' }}>
          <span style={{ color: 'var(--accent)' }}>●</span> Error // Protocolo 404 · Acceso Denegado
        </p>

        <div
          aria-label="404"
          className="not-found-404"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(7rem, 16vw, 11rem)',
            lineHeight: 0.82,
            letterSpacing: '-0.08em',
            color: 'rgba(232,224,208,0.22)',
            textShadow: '0 18px 38px rgba(139,26,26,0.12)',
            userSelect: 'none',
          }}
        >
          404
        </div>

        <h1 style={{ fontFamily: 'var(--font-display)', color: 'var(--text-main)', fontSize: 'clamp(1.5rem, 4vw, 2.2rem)', marginTop: '30px', marginBottom: '10px' }}>
          Objetivo Inexistente / Acceso Denegado
        </h1>
        <p style={{ fontFamily: 'var(--font-body)', color: 'var(--text-muted)', maxWidth: '620px', margin: '0 auto', lineHeight: 1.7, fontSize: '0.88rem' }}>
          La ruta solicitada no forma parte del registro activo del sistema. Regresa al inicio o consulta los proyectos disponibles.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mt-8">
          <NavLink
            to="/"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.62rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#E8E0D0',
              textDecoration: 'none',
              border: '1px solid var(--danger)',
              background: 'var(--danger)',
              padding: '11px 18px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <Icon icon="mdi:arrow-left" width={14} />
            Volver al Inicio
          </NavLink>
          <NavLink
            to="/proyects"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.62rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#C49A50',
              textDecoration: 'none',
              border: '1px solid var(--border-light)',
              padding: '11px 18px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <Icon icon="mdi:folder-search-outline" width={14} />
            Explorar Proyectos
          </NavLink>
        </div>

        <div className="not-found-protocols text-left">
          {protocolCards.map(card => (
            <div key={card.title} style={{ border: '1px solid var(--border)', background: 'rgba(19,14,14,0.72)', padding: '18px' }}>
              <Icon icon={card.icon} width={18} style={{ color: 'var(--accent-dim)', marginBottom: '12px' }} />
              <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--text-main)', fontSize: '0.95rem', marginBottom: '6px' }}>
                {card.title}
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem', lineHeight: 1.55, marginBottom: '12px' }}>
                {card.description}
              </p>
              {card.external ? (
                <a
                  href={card.href}
                  style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)', fontSize: '0.56rem', textDecoration: 'none' }}
                >
                  {card.action} →
                </a>
              ) : (
                <NavLink
                  to={card.href}
                  style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)', fontSize: '0.56rem', textDecoration: 'none' }}
                >
                  {card.action} →
                </NavLink>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
