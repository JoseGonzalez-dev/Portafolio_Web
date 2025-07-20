import React from 'react'
import { Icon } from '@iconify/react'

export const Footer = () => {
    const currentYear = new Date().getFullYear()

    const socialLinks = [
        { icon: 'mdi:github', href: 'https://github.com/JoseGonzalez-dev', label: 'GitHub' },
        { icon: 'mdi:linkedin', href: 'https://www.linkedin.com/in/jgonz%C3%A1lez-02407k?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', label: 'LinkedIn' },
        { icon: 'mdi:twitter', href: '#', label: 'Twitter' },
        { icon: 'mdi:instagram', href: '#', label: 'Instagram' },
        { icon: 'mdi:email', href: 'mailto:jgonzalez.242720@gmail.com', label: 'Email' }
    ]

    const quickLinks = [
        { label: 'Inicio', href: '/' },
        { label: 'Acerca de mi', href: '/about' },
        { label: 'Proyectos', href: '/projects' },
        { label: 'Contacto', href: '/contact' }
    ]

    const services = [
        { label: 'Desarrollo Web', href: '#' },
        { label: 'Diseño UI/UX', href: '#' },
        { label: 'Consultoría', href: '#' },
        { label: 'Mantenimiento', href: '#' }
    ]

    return (
        <footer className="bg-gradient-to-t from-slate-900 via-slate-800 to-slate-900 border-t border-slate-700">
            <div className="max-w-7xl mx-auto px-6 py-12">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">

                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <h3 className="text-white text-2xl font-bold mb-4">José Francisco Gonález Ordoñez</h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-md">
                            Desarrollador Full Stack apasionado por crear experiencias digitales
                            excepcionales. Especializado en tecnologías modernas y diseño centrado en el usuario.
                        </p>

                        {/* Social Links */}
                        <div className="flex space-x-4">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
                                >
                                    <Icon icon={social.icon} width="24" height="24" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Enlaces Rápidos</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Servicios</h4>
                        <ul className="space-y-2">
                            {services.map((service, index) => (
                                <li key={index}>
                                    <a
                                        href={service.href}
                                        className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                                    >
                                        {service.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-slate-700 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">

                        {/* Copyright */}
                        <div className="text-gray-400 text-sm">
                            © {currentYear} José González. Todos los derechos reservados.
                        </div>

                        {/* Additional Links */}
                        <div className="flex space-x-6 text-sm">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                                Política de Privacidad
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                                Términos de Uso
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll to Top Button */}
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 z-50"
                aria-label="Volver arriba"
            >
                <Icon icon="mdi:chevron-up" width="24" height="24" />
            </button>
        </footer>
    )
}
