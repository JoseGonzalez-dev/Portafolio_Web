import React, { useState } from 'react'
import { Icon } from '@iconify/react'
import { NavLink, useNavigate } from 'react-router-dom'
import ContactModal from '../molecules/ContactModal'
import { useContactModal } from '../../hooks/useContactModal'

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()

  // Hook del modal de contacto
  const contactModal = useContactModal()

  // Contactos sociales para el modal
  const socialContacts = [
    {
      name: 'GitHub',
      icon: 'mdi:github',
      url: 'https://github.com/JoseGonzalez-dev',
      color: '#ffffff'
    },
    {
      name: 'LinkedIn',
      icon: 'mdi:linkedin',
      url: 'https://www.linkedin.com/in/jgonz%C3%A1lez-02407k?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      color: '#0077b5'
    },
    {
      name: 'Email',
      icon: 'mdi:email',
      url: 'mailto:jgonzalez.242720@gmail.com',
      color: '#ea4335'
    }
  ]

  // Datos del menú centralizados
  const menuItems = [
    { href: '/', label: 'Inicio', isSpecial: false },
    { href: '/about', label: 'Acerca de mi', isSpecial: false },
    { href: '/education', label: 'Educación', isSpecial: false },
    { href: '/proyects', label: 'Proyectos', isSpecial: false },
    { href: '/contact', label: 'Contactame', isSpecial: true }
  ]

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  // Estilos reutilizables
  const styles = {
    regularLink: "text-gray-300 hover:text-white transition-colors duration-300 font-medium",
    activeRegularLink: "text-white font-semibold",
    specialButton: "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-blue-500/30",
    mobileRegularLink: "block text-gray-300 hover:text-white hover:bg-slate-700 px-4 py-3 rounded-lg transition-all duration-200 font-medium",
    activeMobileRegularLink: "block text-white bg-slate-700 px-4 py-3 rounded-lg font-semibold",
    mobileSpecialButton: "block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-blue-500/30 text-center"
  }

  // Componente para enlaces del menú desktop
  const DesktopMenuItem = ({ item }) => {
    if (item.isSpecial) {
      return (
        <button
          onClick={contactModal.openContactModal}
          className={`${styles.specialButton} px-6 py-2 rounded-full`}
        >
          {item.label}
        </button>
      )
    }

    return (
      <NavLink
        to={item.href}
        className={({ isActive }) =>
          isActive
            ? `${styles.regularLink} ${styles.activeRegularLink}`
            : styles.regularLink
        }
      >
        {item.label}
      </NavLink>
    )
  }

  // Componente para enlaces del menú mobile
  const MobileMenuItem = ({ item }) => {
    if (item.isSpecial) {
      return (
        <button
          onClick={() => {
            contactModal.openContactModal()
            closeMenu()
          }}
          className={`${styles.mobileSpecialButton} w-full text-left`}
        >
          {item.label}
        </button>
      )
    }

    return (
      <NavLink
        to={item.href}
        onClick={closeMenu}
        className={({ isActive }) =>
          isActive
            ? `${styles.mobileRegularLink} ${styles.activeMobileRegularLink}`
            : styles.mobileRegularLink
        }
      >
        {item.label}
      </NavLink>
    )
  }

  return (
    <>
      <nav className="bg-transparent backdrop-blur-md  fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-6 xl:px-10 2xl:px-1 pt-2 pb-2">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center group cursor-pointer">
              <div className="flex items-center space-x-3">
                {/* Monograma minimalista */}
                <div className="relative">
                  <div className="w-10 h-10 border-2 border-white/20 rounded-lg flex items-center justify-center group-hover:border-blue-400/60 transition-all duration-300">
                    <span className="text-white font-bold text-lg tracking-tight group-hover:text-blue-400 transition-colors duration-300">
                      JG
                    </span>
                  </div>
                </div>

                {/* Texto del logo */}
                <div className="flex flex-col">
                  <h1 className="text-white text-xl xl:text-2xl font-semibold tracking-tight leading-none">
                    José González
                  </h1>
                  <div className="text-sm text-gray-400 font-light tracking-wide">
                    Full Stack Developer
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8 xl:space-x-12 2xl:space-x-16 xl:ml-16 2xl:ml-24">
              {menuItems.map((item, index) => (
                <DesktopMenuItem key={index} item={item} />
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-300 hover:text-white focus:outline-none transition-colors duration-200"
                aria-label="Toggle menu"
              >
                <Icon
                  icon={isMenuOpen ? "mdi:close" : "mdi:menu"}
                  width="28"
                  height="28"
                />
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
            }`}>
            <div className="px-2 pt-2 pb-4 space-y-2 bg-black/20 backdrop-blur-md border-t border-white/10">
              {menuItems.map((item, index) => (
                <MobileMenuItem key={index} item={item} />
              ))}
            </div>
          </div>
        </div>
      </nav>

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
    </>
  )
}
