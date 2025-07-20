import React from 'react'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import SkillsOrbit from '../molecules/SkillsOrbit'
import ContactModal from '../molecules/ContactModal'
import { useContactModal } from '../../hooks/useContactModal'
import { useScrollAnimations } from '../../hooks/useScrollAnimations'
import { Navigate, NavLink } from 'react-router'

export const AboutMeTemplate = () => {
    // Hooks personalizados
    const contactModal = useContactModal()
    const { animationVariants, viewportConfig } = useScrollAnimations()
    
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

    return (
        <div className='bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen px-4 pt-20 pb-8'>
            <div className='max-w-6xl mx-auto w-full'>

                {/* Hero Section */}
                <section className='text-center mb-16'>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <motion.div 
                            className='mb-8'
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <img
                                src='https://res.cloudinary.com/dzydnoljd/image/upload/e_background_removal/f_png/v1752813675/iyo_hmala0.jpg'
                                alt='José Francisco González - Desarrollador Full Stack'
                                className='w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto shadow-2xl border-4 border-white/20 object-cover hover:border-white/40 transition-all duration-300'
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6'>
                                Más sobre <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400'>Mi</span>
                            </h1>

                            <p className='text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed'>
                                Hola mi nombre es: <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400'>José Francisco González Ordoñez</span> soy desarrollador Full Stack junior apasionado por crear soluciones digitales que impacten positivamente en la vida de las personas
                            </p>
                        </motion.div>
                    </motion.div>
                </section>

                {/* Mi Historia Section */}
                <section className='mb-16'>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={viewportConfig}
                        className='bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10'
                    >
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={viewportConfig}
                            className='text-3xl md:text-4xl font-bold text-white mb-8 text-center'
                        >
                            Mi Historia en el Desarrollo
                        </motion.h2>

                        <div className='grid md:grid-cols-2 gap-8 items-center'>
                            {/* Texto de la historia */}
                            <motion.div 
                                className='space-y-6'
                                variants={animationVariants.staggerContainer}
                                initial="initial"
                                whileInView="animate"
                                viewport={viewportConfig}
                            >
                                <motion.p 
                                    variants={animationVariants.slideInLeft}
                                    className='text-gray-300 text-lg leading-relaxed'
                                >
                                    Mi viaje en el mundo del desarrollo comenzó hace algunos años atras cuando descubrí la magia de convertir ideas en realidad a través del código. Lo que empezó como curiosidad se transformó en una verdadera pasión.
                                </motion.p>

                                <motion.p 
                                    variants={animationVariants.slideInLeft}
                                    className='text-gray-300 text-lg leading-relaxed'
                                >
                                    Tengo conocimiento en varias tecnologías modernas como <span className='text-blue-400 font-semibold'>React</span>, <span className='text-green-400 font-semibold'>Node.js</span> y <span className='text-purple-400 font-semibold'>JavaScript</span>, siempre manteniéndome actualizado con las últimas tendencias del desarrollo.
                                </motion.p>

                                <motion.p 
                                    variants={animationVariants.slideInLeft}
                                    className='text-gray-300 text-lg leading-relaxed'
                                >
                                    Cada proyecto es una oportunidad para aprender algo nuevo y crear soluciones que no solo funcionen bien, sino que también brinden una experiencia excepcional al usuario.
                                </motion.p>
                            </motion.div>

                            {/* Imagen o elemento visual */}
                            <motion.div 
                                className='flex justify-center'
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                viewport={viewportConfig}
                            >
                                <div className='relative'>
                                    <motion.div 
                                        className='w-64 h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300'
                                        whileHover={{ scale: 1.05, rotate: 2 }}
                                    >
                                        <div className='text-center'>
                                            <motion.div 
                                                className='text-4xl mb-4'
                                                animate={{ rotate: [0, 10, -10, 0] }}
                                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                            >
                                                💻
                                            </motion.div>
                                            <h3 className='text-white font-bold text-xl mb-2'>Código con Propósito</h3>
                                            <p className='text-gray-400 text-sm'>Creando soluciones que importan</p>
                                        </div>
                                    </motion.div>

                                    {/* Elementos decorativos */}
                                    <motion.div 
                                        className='absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-60'
                                        animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                    />
                                    <motion.div 
                                        className='absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full opacity-60'
                                        animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </section>

                {/* Skills Orbital Section */}
                <section className='mb-16'>
                    <motion.div 
                        className='text-center mb-12'
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, margin: "-50px", amount: 0.2 }}
                    >
                        <motion.h2 
                            className='text-3xl md:text-4xl font-bold text-white mb-4'
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true, margin: "-50px" }}
                        >
                            Mis Habilidades
                        </motion.h2>
                        <motion.p 
                            className='text-gray-300 text-lg max-w-2xl mx-auto'
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true, margin: "-50px" }}
                        >
                            Tecnologías y herramientas que domino para crear experiencias digitales excepcionales
                        </motion.p>
                    </motion.div>

                    {/* Contenedor de habilidades orbitales - Optimizado para móviles */}
                    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12 xl:gap-16'>
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true, margin: "-100px", amount: 0.3 }}
                            className='flex justify-center'
                        >
                            <SkillsOrbit category="frontend" title="Frontend" />
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true, margin: "-100px", amount: 0.3 }}
                            className='flex justify-center'
                        >
                            <SkillsOrbit category="backend" title="Backend" />
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true, margin: "-100px", amount: 0.3 }}
                            className='flex justify-center md:col-span-2 xl:col-span-1'
                        >
                            <SkillsOrbit category="tools" title="Herramientas" />
                        </motion.div>
                    </div>
                </section>

                {/* Estadísticas y Logros */}
                <section className='mb-16'>
                    <motion.div 
                        className='bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10'
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={viewportConfig}
                    >
                        <motion.h2 
                            className='text-3xl md:text-4xl font-bold text-white mb-8 text-center'
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={viewportConfig}
                        >
                            En Números
                        </motion.h2>

                        <motion.div 
                            className='grid grid-cols-2 md:grid-cols-4 gap-6'
                            variants={animationVariants.staggerContainer}
                            initial="initial"
                            whileInView="animate"
                            viewport={viewportConfig}
                        >
                            <motion.div
                                className='text-center group'
                                variants={animationVariants.bounceIn}
                                whileHover={{ scale: 1.05, y: -5 }}
                            >
                                <div className='text-3xl md:text-4xl font-bold text-blue-400 mb-2 group-hover:scale-110 transition-transform'>2+</div>
                                <div className='text-gray-300 text-sm'>Años de Experiencia</div>
                            </motion.div>

                            <motion.div
                                className='text-center group'
                                variants={animationVariants.bounceIn}
                                whileHover={{ scale: 1.05, y: -5 }}
                            >
                                <div className='text-3xl md:text-4xl font-bold text-green-400 mb-2 group-hover:scale-110 transition-transform'>10+</div>
                                <div className='text-gray-300 text-sm'>Proyectos Completados</div>
                            </motion.div>

                            <motion.div
                                className='text-center group'
                                variants={animationVariants.bounceIn}
                                whileHover={{ scale: 1.05, y: -5 }}
                            >
                                <div className='text-3xl md:text-4xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform'>8+</div>
                                <div className='text-gray-300 text-sm'>Tecnologías Dominadas</div>
                            </motion.div>

                            <motion.div
                                className='text-center group'
                                variants={animationVariants.bounceIn}
                                whileHover={{ scale: 1.05, y: -5 }}
                            >
                                <div className='text-3xl md:text-4xl font-bold text-orange-400 mb-2 group-hover:scale-110 transition-transform'>100%</div>
                                <div className='text-gray-300 text-sm'>Dedicación</div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </section>

                {/* Filosofía de Trabajo */}
                <section className='mb-16'>
                    <motion.div 
                        className='text-center mb-12'
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, margin: "-50px", amount: 0.2 }}
                    >
                        <motion.h2 
                            className='text-3xl md:text-4xl font-bold text-white mb-4'
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true, margin: "-50px" }}
                        >
                            Mi Filosofía de Trabajo
                        </motion.h2>
                        <motion.p 
                            className='text-gray-300 text-lg max-w-2xl mx-auto'
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true, margin: "-50px" }}
                        >
                            Los principios que guían mi desarrollo profesional
                        </motion.p>
                    </motion.div>

                    {/* Grid optimizado para responsive */}
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        <motion.div
                            className='bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center hover:border-white/20 transition-all duration-300 group'
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true, margin: "-50px", amount: 0.3 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                        >
                            <motion.div 
                                className='text-4xl mb-4'
                                animate={{ rotate: [0, 5, -5, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            >
                                🎯
                            </motion.div>
                            <h3 className='text-white font-bold text-lg mb-3 group-hover:text-blue-400 transition-colors'>Orientado a Resultados</h3>
                            <p className='text-gray-400 text-sm'>
                                Cada línea de código tiene un propósito claro y contribuye al objetivo final del proyecto.
                            </p>
                        </motion.div>

                        <motion.div
                            className='bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center hover:border-white/20 transition-all duration-300 group'
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true, margin: "-50px", amount: 0.3 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                        >
                            <motion.div 
                                className='text-4xl mb-4'
                                animate={{ y: [0, -5, 0] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            >
                                🚀
                            </motion.div>
                            <h3 className='text-white font-bold text-lg mb-3 group-hover:text-green-400 transition-colors'>Aprendizaje Continuo</h3>
                            <p className='text-gray-400 text-sm'>
                                La tecnología evoluciona constantemente, y yo evoluciono con ella manteniéndome actualizado.
                            </p>
                        </motion.div>

                        <motion.div
                            className='bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center hover:border-white/20 transition-all duration-300 group'
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true, margin: "-50px", amount: 0.3 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                        >
                            <motion.div 
                                className='text-4xl mb-4'
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                            >
                                👥
                            </motion.div>
                            <h3 className='text-white font-bold text-lg mb-3 group-hover:text-purple-400 transition-colors'>Trabajo en Equipo</h3>
                            <p className='text-gray-400 text-sm'>
                                Los mejores proyectos nacen de la colaboración y el intercambio de ideas.
                            </p>
                        </motion.div>

                        <motion.div
                            className='bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center hover:border-white/20 transition-all duration-300 group'
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true, margin: "-50px", amount: 0.3 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                        >
                            <motion.div 
                                className='text-4xl mb-4'
                                animate={{ rotate: [0, 15, -15, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            >
                                💡
                            </motion.div>
                            <h3 className='text-white font-bold text-lg mb-3 group-hover:text-yellow-400 transition-colors'>Innovación</h3>
                            <p className='text-gray-400 text-sm'>
                                Busco siempre nuevas formas de resolver problemas y mejorar la experiencia del usuario.
                            </p>
                        </motion.div>

                        <motion.div
                            className='bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center hover:border-white/20 transition-all duration-300 group'
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            viewport={{ once: true, margin: "-50px", amount: 0.3 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                        >
                            <motion.div 
                                className='text-4xl mb-4'
                                animate={{ rotate: [0, -10, 10, 0] }}
                                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                            >
                                🔧
                            </motion.div>
                            <h3 className='text-white font-bold text-lg mb-3 group-hover:text-orange-400 transition-colors'>Código Limpio</h3>
                            <p className='text-gray-400 text-sm'>
                                Escribo código que no solo funciona, sino que es mantenible y escalable.
                            </p>
                        </motion.div>

                        <motion.div
                            className='bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center hover:border-white/20 transition-all duration-300 group'
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            viewport={{ once: true, margin: "-50px", amount: 0.3 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                        >
                            <motion.div 
                                className='text-4xl mb-4'
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            >
                                ⚡
                            </motion.div>
                            <h3 className='text-white font-bold text-lg mb-3 group-hover:text-cyan-400 transition-colors'>Eficiencia</h3>
                            <p className='text-gray-400 text-sm'>
                                Optimizo tanto el rendimiento del código como los procesos de desarrollo.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Call to Action - Navegación a otras secciones */}
                <section className='mb-16'>
                    <motion.div 
                        className='bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-blue-500/30'
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={viewportConfig}
                    >
                        <motion.div 
                            className='text-center mb-8'
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={viewportConfig}
                        >
                            <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
                                ¿Quieres Saber Más?
                            </h2>
                            <p className='text-gray-300 text-lg max-w-2xl mx-auto'>
                                Explora mi trayectoria académica, experiencia profesional y proyectos destacados
                            </p>
                        </motion.div>

                        <motion.div 
                            className='grid md:grid-cols-3 gap-6'
                            variants={animationVariants.staggerContainer}
                            initial="initial"
                            whileInView="animate"
                            viewport={viewportConfig}
                        >
                            <motion.a
                                className='bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center transition-all duration-300 group'
                                variants={animationVariants.scaleIn}
                                whileHover={{ scale: 1.05, y: -5 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <NavLink to={'/education'}>
                                    <Icon icon="mdi:school" className='text-4xl text-blue-400 mb-4 mx-auto group-hover:scale-110 transition-transform' />
                                    <h3 className='text-white font-bold text-lg mb-2 group-hover:text-blue-400 transition-colors'>Educación</h3>
                                    <p className='text-gray-400 text-sm'>
                                        Formación académica y certificaciones
                                    </p>
                                </NavLink>
                            </motion.a>

                            <motion.a
                                className='bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center transition-all duration-300 group'
                                variants={animationVariants.scaleIn}
                                whileHover={{ scale: 1.05, y: -5 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Icon icon="mdi:rocket-launch" className='text-4xl text-green-400 mb-4 mx-auto group-hover:scale-110 transition-transform' />
                                <Navigate to={'/proyects'}>
                                    <h3 className='text-white font-bold text-lg mb-2 group-hover:text-green-400 transition-colors'>Proyectos</h3>
                                    <p className='text-gray-400 text-sm'>
                                        Mis trabajos y desarrollos
                                    </p>
                                </Navigate>
                            </motion.a>

                            <motion.button
                                onClick={contactModal.openContactModal}
                                className='bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl p-6 text-center transition-all duration-300 group w-full'
                                variants={animationVariants.scaleIn}
                                whileHover={{ scale: 1.05, y: -5 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Icon icon="mdi:email" className='text-4xl text-white mb-4 mx-auto group-hover:scale-110 group-hover:animate-bounce transition-transform' />
                                <h3 className='text-white font-bold text-lg mb-2'>Contacto</h3>
                                <p className='text-white/80 text-sm'>
                                    Hablemos sobre tu próximo proyecto
                                </p>
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </section>
            </div>

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
        </div>
    )
}
