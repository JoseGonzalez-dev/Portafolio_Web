import React, { useState } from 'react'
import { Icon } from '@iconify/react'

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Datos del menú centralizados
  const menuItems = [
    { href: '/', label: 'Inicio', isSpecial: false },
    { href: '/about', label: 'Acerca de mi', isSpecial: false },
    { href: '/gallery', label: 'Educación', isSpecial: false },
    { href: '/services', label: 'Experiencias', isSpecial: false },
    { href: '/contact', label: 'Contactame', isSpecial: true }
  ]

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  // Estilos reutilizables
  const styles = {
    regularLink: "text-gray-300 hover:text-white transition-colors duration-300 font-medium",
    specialButton: "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-blue-500/30",
    mobileRegularLink: "block text-gray-300 hover:text-white hover:bg-slate-700 px-4 py-3 rounded-lg transition-all duration-200 font-medium",
    mobileSpecialButton: "block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-blue-500/30 text-center"
  }

  // Componente para enlaces del menú desktop
  const DesktopMenuItem = ({ item }) => (
    <a
      href={item.href}
      className={item.isSpecial
        ? `${styles.specialButton} px-6 py-2 rounded-full`
        : styles.regularLink
      }
    >
      {item.label}
    </a>
  )

  // Componente para enlaces del menú mobile
  const MobileMenuItem = ({ item }) => (
    <a
      href={item.href}
      onClick={closeMenu}
      className={item.isSpecial ? styles.mobileSpecialButton : styles.mobileRegularLink}
    >
      {item.label}
    </a>
  )

  return (
    <nav className="bg-transparent backdrop-blur-md  fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 xl:px-10 2xl:px-1 pt-2 pb-2">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-white text-2xl font-bold tracking-wide xl:text-3xl">
              Logo
            </h1>
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
  )
}
