import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import ContactModal from '../molecules/ContactModal'
import ImageModal from '../molecules/ImageModal'
import { useContactModal } from '../../hooks/useContactModal'
import { useImageModal } from '../../hooks/useImageModal'
import { useScrollAnimations } from '../../hooks/useScrollAnimations'

export const ProyectsTemplate = () => {
    const [activeFilter, setActiveFilter] = useState('all')

    // Hooks personalizados
    const contactModal = useContactModal()
    const imageModal = useImageModal()
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
            url: 'https://www.linkedin.com/in/josgonzalezdev',
            color: '#0077b5'
        },
        {
            name: 'Email',
            icon: 'mdi:email',
            url: 'mailto:jgonzalez.242720@gmail.com',
            color: '#ea4335'
        }
    ]

    // Proyectos destacados
    const featuredProjects = [
        {
            id: 1,
            title: "GeoDash",
            description: "Juego de trivia en la web para poner a prueba tus conocimientos sobre Geografia.",
            image: "https://res.cloudinary.com/dzydnoljd/image/upload/v1759196714/Captura_de_pantalla_2025-09-29_194504_dn564s.png",
            technologies: ["React Native", "JavaScript", "Mongo DB Atlas", "Express", "Vercel", "Render"],
            category: "web",
            status: "completed",
            github: "https://github.com/JoseGonzalez-dev/Geodash_Frontend",
            demo: "https://geodash-frontend.vercel.app/",
            featured: true
        },
        {
            id: 2,
            title: "Tienda Online",
            description: "E-commerce completo con carrito de compras, gestión de productos, autenticación de usuarios y panel administrativo. Conectado a base de datos MySQL.",
            image: "https://res.cloudinary.com/dzydnoljd/image/upload/v1752988296/Captura_de_pantalla_2025-07-19_230717_ood9cz.png",
            technologies: ["Java", "JavaFX", "MySQL", "CSS"],
            category: "desktop",
            status: "completed",
            github: "https://github.com/JoseGonzalez-dev/Kinal_Store.git",
            demo: null,
            featured: true
        },
        {
            id: 3,
            title: "Hotel-Havenis-sys",
            description: "Systema para la gestion de hoteles, eventos y servicios.",
            image: "https://res.cloudinary.com/dzydnoljd/image/upload/v1752990178/Captura_de_pantalla_2025-07-19_234245_y65e2q.png",
            technologies: ["React", "Node.js", "MongoDB", "Express"],
            category: "fullstack",
            status: "completed",
            github: "https://github.com/ndelacruz-2023048/Sistema-gestion-hotelera.git",
            demo: null,
            featured: true
        },
        {
            id: 4,
            title: "Calculadora React Native",
            description: "Aplicación móvil nativa con interfaz intuitiva, operaciones matemáticas avanzadas y diseño responsive para Android e iOS.",
            image: "https://res.cloudinary.com/dzydnoljd/image/upload/v1752989592/Imagen_de_WhatsApp_2025-07-19_a_las_23.32.31_55db8a94_rqphag.jpg",
            technologies: ["React Native", "JavaScript", "Expo", "Mobile Development"],
            category: "mobile",
            status: "completed",
            github: "https://github.com/JoseGonzalez-dev/Proyectos.git",
            demo: null,
            featured: true
        }
    ]

    // Todos los proyectos
    const allProjects = [
        ...featuredProjects,
        {
            id: 4,
            title: "Blog de Aprendizaje",
            description: "Sistema Blod de aprendizaje con la apariencia de una red social pudiendo interactuar con ella dinamicamente.",
            image: "https://res.cloudinary.com/dzydnoljd/image/upload/v1752990512/Captura_de_pantalla_2025-07-19_234821_voahkp.png",
            technologies: ["React", "Node.js", "MongoDB", "Express"],
            category: "fullstack",
            status: "completed",
            github: "https://github.com/JoseGonzalez-dev/Blog_Aprendizaje_FyB.git",
            demo: null,
            featured: false
        },
        {
            id: 5,
            title: "Portafolio Web",
            description: "Sitio web personal responsive con animaciones fluidas, diseño moderno y optimización para SEO.",
            image: "https://res.cloudinary.com/dzydnoljd/image/upload/v1752990469/fbnlgfe0klobdro85po6.png",
            technologies: ["React", "Node.js", "MongoDB", "Express", "Socket.io"],
            category: "web",
            status: "completed",
            github: "https://github.com/JoseGonzalez-dev/Portafolio_Web.git",
            demo: null,
            featured: false
        },
        {
            id: 6,
            title: "AguaComun-sys",
            description: "Proyecto comunitario para la gestion, optimización y cuidado del agua en las comunidades de Guatemala.",
            image: "https://res.cloudinary.com/dzydnoljd/image/upload/v1752990984/Captura_de_pantalla_2025-07-19_235610_odhgqb.png",
            technologies: ["React", "Node.js", "MongoDB", "Express", "Socket.io"],
            category: "web",
            status: "completed",
            github: "https://github.com/ndelacruz-2023048/AguaComun_Frontend.git",
            demo: 'https://aguacomunfrontend-production.up.railway.app/',
            featured: false
        },
        {
            id: 7,
            title: "Limae-sys",
            description: "Sitio para la prevencion y trata del bulling, acoso escolar o violencia escolar, con chat integrado las 24 horas.",
            image: "https://res.cloudinary.com/dzydnoljd/image/upload/v1752991625/Captura_de_pantalla_2025-07-20_000648_hoapaa.png",
            technologies: ["React", "Node.js", "MongoDB", "Express", "Socket.io"],
            category: "web",
            status: "completed",
            github: "https://github.com/ndelacruz-2023048/Limae_Frontend.git",
            demo: "https://limae.org",
            featured: false
        },
        {
            id: 8,
            title: "Tienda Online",
            description: "API rest full encargada de la gestion de productos asi como la compra de los mismos",
            image: "https://res.cloudinary.com/dzydnoljd/image/upload/v1752991983/Captura_de_pantalla_2025-07-20_001250_cocqkr.png",
            technologies: ["Node.js", "MongoDB", "Espress"],
            category: "backend",
            status: "completed",
            github: "https://github.com/jgonzalez-2023195/Online_Store.git",
            demo: null,
            featured: false
        }
    ]

    // Filtros de categorías
    const categories = [
        { id: 'all', label: 'Todos', icon: 'mdi:view-grid' },
        { id: 'web', label: 'Web', icon: 'mdi:web' },
        { id: 'fullstack', label: 'Full Stack', icon: 'mdi:layers' },
        { id: 'backend', label: 'Backend', icon: 'mdi:server' },
        { id: 'mobile', label: 'Móvil', icon: 'mdi:cellphone' },
        { id: 'desktop', label: 'Escritorio', icon: 'mdi:desktop-classic' }
    ]

    // Filtrar proyectos
    const filteredProjects = activeFilter === 'all'
        ? allProjects
        : allProjects.filter(project => project.category === activeFilter)

    // Estadísticas
    const stats = [
        { label: 'Proyectos Completados', value: '9+', icon: 'mdi:check-circle' },
        { label: 'Tecnologías Usadas', value: '15+', icon: 'mdi:code-tags' },
        { label: 'APIs Desarrolladas', value: '3+', icon: 'mdi:api' },
        { label: 'Plataformas', value: '4+', icon: 'mdi:devices' }
    ]

    return (
        <div className='bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen pt-20 px-4 pb-8'>
            <div className='max-w-7xl mx-auto w-full'>

                {/* Hero Section */}
                <section className='text-center mb-16'>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className='mb-8'>
                            <div className='w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6'>
                                <Icon icon="mdi:rocket-launch" className='text-3xl text-white' />
                            </div>
                        </div>

                        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6'>
                            Mis <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400'>Proyectos</span>
                        </h1>

                        <p className='text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed'>
                            Una colección de proyectos que demuestran mis habilidades en Java, Spring Boot, React, Node.js y desarrollo móvil
                        </p>
                    </motion.div>
                </section>

                {/* Estadísticas */}
                <section className='mb-16'>
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className='bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center'
                            >
                                <Icon icon={stat.icon} className='text-3xl text-purple-400 mx-auto mb-3' />
                                <div className='text-2xl font-bold text-white mb-1'>{stat.value}</div>
                                <div className='text-gray-400 text-sm'>{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Proyectos Destacados */}
                <section className='mb-16'>
                    <div className='text-center mb-12'>
                        <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
                            Proyectos Destacados
                        </h2>
                        <p className='text-gray-300 text-lg max-w-2xl mx-auto'>
                            Los proyectos más importantes que demuestran mis habilidades técnicas y creatividad
                        </p>
                    </div>

                    <div className='grid lg:grid-cols-3 gap-8'>
                        {featuredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className='bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 group'
                            >
                                {/* Imagen del proyecto */}
                                <div className='relative h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 overflow-hidden'>
                                    {project.image && project.image.startsWith('http') ? (
                                        <div 
                                            className='relative w-full h-full cursor-pointer group/image'
                                            onClick={() => imageModal.openModal(project.image, project.title, project.title)}
                                        >
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
                                                onError={(e) => {
                                                    e.target.style.display = 'none';
                                                    e.target.parentElement.nextSibling.style.display = 'flex';
                                                }}
                                            />
                                            {/* Overlay de zoom */}
                                            <div className='absolute inset-0 bg-black/0 group-hover/image:bg-black/20 transition-all duration-300 flex items-center justify-center'>
                                                <div className='opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm rounded-full p-3'>
                                                    <Icon icon="mdi:magnify-plus" className='text-white text-2xl' />
                                                </div>
                                            </div>
                                        </div>
                                    ) : null}
                                    <div className={`absolute inset-0 flex items-center justify-center ${project.image && project.image.startsWith('http') ? 'hidden' : 'flex'}`}>
                                        <Icon icon="mdi:image" className='text-4xl text-white/50' />
                                    </div>
                                    <div className='absolute top-4 right-4 z-10'>
                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${project.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                                            project.status === 'in-progress' ? 'bg-yellow-500/20 text-yellow-400' :
                                                'bg-blue-500/20 text-blue-400'
                                            }`}>
                                            {project.status === 'completed' ? 'Completado' :
                                                project.status === 'in-progress' ? 'En Progreso' : 'Planeado'}
                                        </span>
                                    </div>
                                </div>

                                <div className='p-6'>
                                    <h3 className='text-xl font-bold text-white mb-3'>{project.title}</h3>
                                    <p className='text-gray-400 text-sm mb-4 leading-relaxed'>{project.description}</p>

                                    {/* Tecnologías */}
                                    <div className='flex flex-wrap gap-2 mb-4'>
                                        {project.technologies.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className='px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs font-medium'
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Enlaces */}
                                    <div className='flex gap-3'>
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className='flex items-center gap-2 px-3 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg text-sm transition-colors duration-200'
                                            >
                                                <Icon icon="mdi:github" />
                                                Código
                                            </a>
                                        )}
                                        {project.demo && (
                                            <a
                                                href={project.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className='flex items-center gap-2 px-3 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm transition-colors duration-200'
                                            >
                                                <Icon icon="mdi:open-in-new" />
                                                Demo
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Filtros */}
                <section className='mb-8'>
                    <div className='flex flex-wrap justify-center gap-3'>
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveFilter(category.id)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-200 ${activeFilter === category.id
                                    ? 'bg-purple-600 text-white shadow-lg'
                                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                                    }`}
                            >
                                <Icon icon={category.icon} />
                                {category.label}
                            </button>
                        ))}
                    </div>
                </section>

                {/* Todos los Proyectos */}
                <section className='mb-16'>
                    <div className='text-center mb-12'>
                        <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
                            Todos los Proyectos
                        </h2>
                        <p className='text-gray-300 text-lg max-w-2xl mx-auto'>
                            Explora mi portafolio completo de proyectos organizados por categoría
                        </p>
                    </div>

                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                className='bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 group'
                            >
                                {/* Imagen del proyecto */}
                                <div className='relative h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 overflow-hidden'>
                                    {project.image && project.image.startsWith('http') ? (
                                        <div 
                                            className='relative w-full h-full cursor-pointer group/image'
                                            onClick={() => imageModal.openModal(project.image, project.title, project.title)}
                                        >
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
                                                onError={(e) => {
                                                    e.target.style.display = 'none';
                                                    e.target.parentElement.nextSibling.style.display = 'flex';
                                                }}
                                            />
                                            {/* Overlay de zoom compacto */}
                                            <div className='absolute inset-0 bg-black/0 group-hover/image:bg-black/20 transition-all duration-300 flex items-center justify-center'>
                                                <div className='opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm rounded-full p-2'>
                                                    <Icon icon="mdi:magnify-plus" className='text-white text-lg' />
                                                </div>
                                            </div>
                                        </div>
                                    ) : null}
                                    <div className={`absolute inset-0 flex items-center justify-center ${project.image && project.image.startsWith('http') ? 'hidden' : 'flex'}`}>
                                        <Icon icon="mdi:folder-open" className='text-2xl text-white/50' />
                                    </div>
                                    {project.featured && (
                                        <div className='absolute top-2 left-2 z-10'>
                                            <Icon icon="mdi:star" className='text-yellow-400 text-lg' />
                                        </div>
                                    )}
                                </div>

                                <div className='p-4'>
                                    <h3 className='text-lg font-bold text-white mb-2'>{project.title}</h3>
                                    <p className='text-gray-400 text-sm mb-3 leading-relaxed line-clamp-2'>{project.description}</p>

                                    {/* Tecnologías */}
                                    <div className='flex flex-wrap gap-1 mb-3'>
                                        {project.technologies.slice(0, 3).map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className='px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs'
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {project.technologies.length > 3 && (
                                            <span className='px-2 py-1 bg-gray-500/20 text-gray-300 rounded text-xs'>
                                                +{project.technologies.length - 3}
                                            </span>
                                        )}
                                    </div>

                                    {/* Enlaces */}
                                    <div className='flex gap-2'>
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className='flex items-center gap-1 px-2 py-1 bg-gray-700 hover:bg-gray-600 text-white rounded text-xs transition-colors duration-200'
                                            >
                                                <Icon icon="mdi:github" />
                                                Código
                                            </a>
                                        )}
                                        {project.demo && (
                                            <a
                                                href={project.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className='flex items-center gap-1 px-2 py-1 bg-purple-600 hover:bg-purple-700 text-white rounded text-xs transition-colors duration-200'
                                            >
                                                <Icon icon="mdi:open-in-new" />
                                                Demo
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Call to Action */}
                <section className='mb-16'>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className='bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-purple-500/30 text-center'
                    >
                        <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
                            ¿Tienes un proyecto en mente?
                        </h2>
                        <p className='text-gray-300 text-lg max-w-2xl mx-auto mb-8'>
                            Estoy siempre abierto a nuevos desafíos y oportunidades de colaboración.
                            ¡Hablemos sobre tu próximo proyecto!
                        </p>
                        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                            <button
                                onClick={contactModal.openContactModal}
                                className='inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 transform'
                            >
                                <Icon icon="mdi:email" className='group-hover:animate-bounce' />
                                Contactar
                            </button>
                            <a
                                href="https://github.com/JoseGonzalez-dev"
                                target="_blank"
                                rel="noopener noreferrer"
                                className='inline-flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 transform'
                            >
                                <Icon icon="mdi:github" />
                                Ver GitHub
                            </a>
                        </div>
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

            {/* Modal de imágenes */}
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
