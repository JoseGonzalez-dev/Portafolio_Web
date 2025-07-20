import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router'
import { motion, AnimatePresence } from 'framer-motion'
import { Icon } from '@iconify/react'
import CodeShowcase from '../molecules/CodeShowcase'
import ContactModal from '../molecules/ContactModal'
import { useContactModal } from '../../hooks/useContactModal'
import { useScrollAnimations } from '../../hooks/useScrollAnimations'
import CV from '../../assets/CV.pdf'

export const HomeTemplate = () => {
  // Estados para loader
  const [isLoading, setIsLoading] = useState(true)

  // Hooks personalizados
  const contactModal = useContactModal()
  const { animationVariants, viewportConfig, parallaxY1, parallaxY2 } = useScrollAnimations()

  // Efecto de carga inicial
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  // Función para descargar CV
  const handleDownloadCV = () => {
    const link = document.createElement('a')
    link.href = CV
    link.download = 'Jose_Gonzalez_CV.pdf'
    link.target = '_blank'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    console.log('CV descargado')
  }

  // Contactos sociales
  const socialContacts = [
    {
      name: 'GitHub',
      icon: 'mdi:github',
      url: 'https://github.com/JoseGonzalez-dev',
      color: '#ffffff',
      hoverColor: '#4f46e5',
      description: 'Código y proyectos'
    },
    {
      name: 'LinkedIn',
      icon: 'mdi:linkedin',
      url: 'https://www.linkedin.com/in/jgonz%C3%A1lez-02407k?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      color: '#0077b5',
      hoverColor: '#005885',
      description: 'Red profesional'
    },
    {
      name: 'Email',
      icon: 'mdi:email',
      url: 'mailto:jgonzalez.242720@gmail.com',
      color: '#ea4335',
      hoverColor: '#d33b2c',
      description: 'Contacto directo'
    }
  ]

  // Estadísticas rápidas
  const stats = [
    { label: 'Proyectos', value: '9+', icon: 'mdi:rocket-launch' },
    { label: 'Tecnologías', value: '15+', icon: 'mdi:code-tags' },
    { label: 'Experiencia', value: '2+', icon: 'mdi:calendar' },
    { label: 'APIs', value: '3+', icon: 'mdi:api' }
  ]

  // Tecnologías principales
  const mainTechs = [
    { name: 'Java', icon: 'logos:java', color: '#ED8B00' },
    { name: 'Spring Boot', icon: 'logos:spring-icon', color: '#6DB33F' },
    { name: 'React', icon: 'logos:react', color: '#61DAFB' },
    { name: 'Node.js', icon: 'logos:nodejs-icon', color: '#339933' },
    { name: 'MySQL', icon: 'logos:mysql-icon', color: '#4479A1' },
    { name: 'React Native', icon: 'logos:react', color: '#61DAFB' }
  ]

  return (
    <div className='bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen relative'>

      {/* Loader de página */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className='fixed inset-0 z-50 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center'
          >
            <div className='text-center'>
              <motion.div
                animate={{
                  rotate: 360,
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  rotate: { duration: 2, repeat: Infinity, ease: "linear" },
                  scale: { duration: 1, repeat: Infinity, ease: "easeInOut" }
                }}
                className='w-16 h-16 border-4 border-blue-500/30 border-t-blue-500 rounded-full mx-auto mb-4'
              />
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className='text-2xl font-bold text-white mb-2'
              >
                José González
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className='text-gray-400'
              >
                Cargando portafolio...
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>



      {/* Modal de contacto */}
      <ContactModal
        isOpen={contactModal.isContactModalOpen}
        onClose={contactModal.closeContactModal}
        formData={contactModal.formData}
        isSubmitting={contactModal.isSubmitting}
        onInputChange={contactModal.handleInputChange}
        onSubmit={contactModal.handleSubmit}
        socialContacts={socialContacts}
      />

      {/* Hero Section */}
      <section className='min-h-screen flex items-center justify-center px-4 py-20'>
        <div className='max-w-7xl mx-auto w-full'>

          {/* Layout principal con grid responsive */}
          <div className='grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16'>

            {/* Contenido de texto */}
            <motion.div
              className='text-center lg:text-left order-2 lg:order-1'
              {...animationVariants.fadeInUp}
            >
              {/* Saludo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className='inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-full border border-white/20 mb-8 hover:bg-white/15 transition-all duration-300'
              >
                <span className='text-2xl animate-pulse'>👋</span>
                <span className='text-white font-medium text-lg'>¡Hola! Soy José González</span>
              </motion.div>

              {/* Título Principal */}
              <motion.h1
                className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6'
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.7 }}
              >
                Desarrollador{' '}
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-pulse'>
                  Full Stack
                </span>
              </motion.h1>

              {/* Descripción */}
              <motion.p
                className='text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-10'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                Apasionado por la tecnología y el diseño.
                <span className='block text-lg text-gray-400 mt-2'>
                  Creando experiencias digitales excepcionales
                </span>
              </motion.p>

              {/* Botones de Acción */}
              <motion.div
                className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <button
                  onClick={handleDownloadCV}
                  className='group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-blue-500/30 flex items-center gap-3 justify-center'
                >
                  <Icon icon="mdi:download" className='text-xl group-hover:animate-bounce' />
                  Descargar CV
                </button>

                <NavLink
                  to='/about'
                  className='group bg-transparent border-2 border-white/30 hover:border-white/60 text-white hover:bg-white/10 px-8 py-4 rounded-full font-semibold transition-all duration-300 backdrop-blur-sm flex items-center gap-3 justify-center'
                >
                  <Icon icon="mdi:account" className='text-xl group-hover:scale-110 transition-transform' />
                  Acerca de mí
                </NavLink>

                <button
                  onClick={contactModal.openContactModal}
                  className='group bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40 px-8 py-4 rounded-full font-semibold transition-all duration-300 backdrop-blur-sm flex items-center gap-3 justify-center'
                >
                  <Icon icon="mdi:email" className='text-xl group-hover:scale-110 transition-transform' />
                  Contáctame
                </button>
              </motion.div>

              {/* Contactos Sociales - Sección elegante */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.6 }}
                className='text-center lg:text-left'
              >
                <div className='inline-flex items-center gap-2 mb-4'>
                  <div className='h-px bg-gradient-to-r from-transparent to-white/20 w-8'></div>
                  <span className='text-gray-400 text-sm font-medium'>Conecta conmigo</span>
                  <div className='h-px bg-gradient-to-l from-transparent to-white/20 w-8'></div>
                </div>

                <div className='flex gap-3 justify-center lg:justify-start'>
                  {socialContacts.map((contact, index) => (
                    <motion.a
                      key={contact.name}
                      href={contact.url}
                      target='_blank'
                      rel='noopener noreferrer'
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.2 + index * 0.1, duration: 0.4 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className='group relative'
                    >
                      <div className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-3 hover:border-white/30 transition-all duration-300 hover:bg-white/10'>
                        <Icon
                          icon={contact.icon}
                          className='text-2xl transition-colors duration-300'
                          style={{ color: contact.color }}
                        />
                      </div>

                      {/* Tooltip */}
                      <div className='absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10'>
                        {contact.description}
                        <div className='absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800'></div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Imagen de Perfil */}
            <motion.div
              className='flex justify-center order-1 lg:order-2'
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className='relative group'>
                {/* Efecto de resplandor */}
                <div className='absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-3xl scale-110 group-hover:scale-125 transition-transform duration-500'></div>

                {/* Anillo decorativo */}
                <div className='absolute inset-0 rounded-full border-2 border-gradient-to-r from-blue-400/50 to-purple-400/50 animate-spin-slow'></div>

                <picture className='relative z-10'>
                  <source
                    srcSet='https://res.cloudinary.com/dzydnoljd/image/upload/e_background_removal/f_png/v1752813675/iyo_hmala0.jpg'
                    media='(min-width: 740px)'
                  />
                  <img
                    src='https://res.cloudinary.com/dzydnoljd/image/upload/e_background_removal/f_png/v1752813675/iyo_hmala0.jpg'
                    alt='José Francisco González Ordoñez'
                    className='h-80 w-80 md:h-96 md:w-96 lg:h-[28rem] lg:w-[28rem] object-contain rounded-full border-4 border-white/20 shadow-2xl group-hover:border-white/40 transition-all duration-300'
                  />
                </picture>
              </div>
            </motion.div>
          </div>

          {/* Code Showcase - Sección separada */}
          <motion.div
            className='flex justify-center mb-16'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <div className='w-full max-w-4xl'>
              <CodeShowcase />
            </div>
          </motion.div>

          {/* Estadísticas Rápidas */}
          <motion.div
            className='grid grid-cols-2 md:grid-cols-4 gap-6'
            variants={animationVariants.staggerContainer}
            initial="initial"
            animate="animate"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={animationVariants.staggerItem}
                transition={{ delay: 1.2 + index * 0.1 }}
                className='text-center group'
              >
                <div className='bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 group-hover:scale-105'>
                  <Icon
                    icon={stat.icon}
                    className='text-3xl text-blue-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300'
                  />
                  <div className='text-3xl font-bold text-white mb-1'>{stat.value}</div>
                  <div className='text-gray-400 text-sm font-medium'>{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tecnologías Principales */}
      <section className='py-20 px-4'>
        <div className='max-w-7xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className='inline-flex items-center gap-2 bg-blue-500/10 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-500/20 mb-6'
            >
              <Icon icon="mdi:code-tags" className='text-blue-400 text-lg' />
              <span className='text-blue-300 font-medium'>Mi Stack Tecnológico</span>
            </motion.div>

            <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
              Tecnologías que{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400'>
                Domino
              </span>
            </h2>
            <p className='text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed'>
              Stack tecnológico moderno y versátil para crear aplicaciones robustas,
              escalables y con experiencias de usuario excepcionales
            </p>
          </motion.div>

          <motion.div
            className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6'
            variants={animationVariants.staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={viewportConfig}
          >
            {mainTechs.map((tech, index) => (
              <motion.div
                key={tech.name}
                variants={animationVariants.staggerItem}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.08, y: -8 }}
                className='group'
              >
                <div className='bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/25 hover:bg-white/10 transition-all duration-300 text-center h-full flex flex-col justify-center items-center relative overflow-hidden'>
                  {/* Efecto de brillo en hover */}
                  <div className='absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700'></div>

                  <Icon
                    icon={tech.icon}
                    className='text-5xl mx-auto mb-4 group-hover:scale-125 transition-all duration-300 relative z-10'
                    style={{ color: tech.color }}
                  />
                  <h3 className='text-white font-semibold text-base group-hover:text-gray-100 transition-colors relative z-10'>
                    {tech.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className='py-20 px-4'>
        <div className='max-w-6xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className='text-center'
          >
            <div className='relative bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-3xl p-8 md:p-16 border border-blue-500/30 overflow-hidden'>
              {/* Efectos de fondo decorativos */}
              <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl'></div>
              <div className='absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl'></div>
              <div className='absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl'></div>

              <div className='relative z-10'>
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className='inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-400/30 mb-8'
                >
                  <Icon icon="mdi:handshake" className='text-blue-400 text-xl' />
                  <span className='text-blue-300 font-medium'>Colaboremos Juntos</span>
                </motion.div>

                {/* Título principal */}
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight'
                >
                  ¿Listo para{' '}
                  <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400'>
                    trabajar juntos?
                  </span>
                </motion.h2>

                {/* Descripción */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className='text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed'
                >
                  Estoy disponible para nuevos proyectos y oportunidades de colaboración.
                  <span className='block text-lg text-gray-400 mt-2'>
                    ¡Hablemos sobre tu próxima idea y hagámosla realidad!
                  </span>
                </motion.p>

                {/* Botones de navegación */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                  className='flex flex-wrap gap-4 justify-center'
                >
                  <NavLink
                    to='/about'
                    className='group inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-white/40 hover:scale-105'
                  >
                    <Icon icon="mdi:account" className='text-xl group-hover:scale-110 transition-transform' />
                    Sobre Mí
                  </NavLink>

                  <NavLink
                    to='/education'
                    className='group inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-white/40 hover:scale-105'
                  >
                    <Icon icon="mdi:school" className='text-xl group-hover:scale-110 transition-transform' />
                    Educación
                  </NavLink>

                  <NavLink
                    to='/proyects'
                    className='group inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-white/40 hover:scale-105'
                  >
                    <Icon icon="mdi:rocket-launch" className='text-xl group-hover:scale-110 transition-transform' />
                    Ver Proyectos
                  </NavLink>

                  <button
                    onClick={contactModal.openContactModal}
                    className='group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300 border border-blue-500/30'
                  >
                    <Icon icon="mdi:email" className='text-xl group-hover:animate-bounce' />
                    Contactar Ahora
                  </button>
                </motion.div>

                {/* Información adicional */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  viewport={{ once: true }}
                  className='mt-12 pt-8 border-t border-white/10'
                >
                  <div className='flex flex-col md:flex-row items-center justify-center gap-8 text-gray-400'>
                    <div className='flex items-center gap-2'>
                      <Icon icon="mdi:clock-outline" className='text-green-400' />
                      <span>Respuesta en 24h</span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <Icon icon="mdi:shield-check" className='text-blue-400' />
                      <span>Trabajo profesional</span>
                    </div>
                    <div className='flex items-center gap-2'>
                      <Icon icon="mdi:heart" className='text-red-400' />
                      <span>Pasión por el código</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
