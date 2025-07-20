import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'

export const EducationTemplate = () => {
    // Cargar el script de Credly cuando el componente se monta
    useEffect(() => {
        const script = document.createElement('script')
        script.type = 'text/javascript'
        script.async = true
        script.src = '//cdn.credly.com/assets/utilities/embed.js'
        document.head.appendChild(script)

        return () => {
            // Limpiar el script cuando el componente se desmonte
            const existingScript = document.querySelector('script[src="//cdn.credly.com/assets/utilities/embed.js"]')
            if (existingScript) {
                document.head.removeChild(existingScript)
            }
        }
    }, [])

    // Datos de certificaciones
    const certifications = [
        {
            title: "Operating Systems Basics",
            provider: "CISCO Networking Academy",
            status: "Completado",
            date: "2024",
            icon: "cib:cisco",
            color: "#1BA0D7",
            description: "Fundamentos de sistemas operativos y administración básica",
            credlyBadge: {
                id: "6560200d-6f18-499a-af36-7e38c188a7d7",
                width: "150",
                height: "270"
            },
            verified: true
        },
        {
            title: "CCNAv7: Introduction to Networks",
            provider: "CISCO Networking Academy",
            status: "Completado",
            date: "2023",
            icon: "cib:cisco",
            color: "#1BA0D7",
            description: "Introducción a redes y conceptos fundamentales de networking",
            credlyBadge: {
                id: "76b1ed65-3646-401d-a871-699889c9581d",
                width: "150",
                height: "270"
            },
            verified: true
        },
        // {
        //     title: "AWS Cloud Practitioner",
        //     provider: "Amazon Web Services",
        //     status: "En Proceso",
        //     date: "2025",
        //     icon: "logos:aws",
        //     color: "#FF9900",
        //     description: "Fundamentos de computación en la nube con AWS"
        // },
        {
            title: "IT Essentials",
            provider: "CISCO",
            status: "Próximamente",
            date: "2025",
            icon: "cib:cisco",
            color: "#1BA0D7",
            description: "Fundamentos de hardware y software de computadoras"
        }
    ]

    // Datos de cursos adicionales
    const courses = [
        {
            title: "Microsoft Azure Fundamentals",
            provider: "Microsoft Learn",
            type: "Curso Gratuito",
            icon: "logos:microsoft-azure",
            color: "#0078D4"
        },
        {
            title: "Introducción a Ciberseguridad",
            provider: "Autodidacta",
            type: "En Progreso",
            icon: "mdi:shield-check",
            color: "#DC2626"
        },
        {
            title: "Fundamentos de Redes",
            provider: "Varios Proveedores",
            type: "Cursos Básicos",
            icon: "mdi:network",
            color: "#059669"
        }
    ]

    return (
        <div className='bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen pt-20 px-4 pb-8'>
            <div className='max-w-6xl mx-auto w-full'>

                {/* Hero Section */}
                <section className='text-center mb-16'>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className='mb-8'>
                            <div className='w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6'>
                                <Icon icon="mdi:school" className='text-3xl text-white' />
                            </div>
                        </div>

                        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6'>
                            Mi <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400'>Formación</span> Académica
                        </h1>

                        <p className='text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed'>
                            Un recorrido por mi trayectoria educativa en tecnología, desde estudios formales hasta certificaciones especializadas
                        </p>
                    </motion.div>
                </section>

                {/* Estudios Formales */}
                <section className='mb-16'>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className='bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10'
                    >
                        <h2 className='text-3xl md:text-4xl font-bold text-white mb-8 text-center'>
                            Estudios Formales
                        </h2>

                        <div className='flex flex-col md:flex-row items-center gap-8'>
                            <div className='md:flex-1'>
                                <div className='bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl p-6 border border-blue-500/30'>
                                    <div className='flex items-center mb-4'>
                                        <Icon icon="mdi:school-outline" className='text-3xl text-blue-400 mr-3' />
                                        <div>
                                            <h3 className='text-xl font-bold text-white'>Perito en Computación</h3>
                                            <p className='text-blue-400'>Diversificado - Último Año</p>
                                        </div>
                                    </div>

                                    <div className='space-y-3'>
                                        <div className='flex items-center text-gray-300'>
                                            <Icon icon="mdi:calendar" className='text-lg mr-2 text-blue-400' />
                                            <span>2023 - 2025 (En curso)</span>
                                        </div>
                                        <div className='flex items-center text-gray-300'>
                                            <Icon icon="mdi:map-marker" className='text-lg mr-2 text-blue-400' />
                                            <span>Centro educativo técnico laboral Kinal, Guatemala</span>
                                        </div>
                                        <div className='flex items-center text-gray-300'>
                                            <Icon icon="mdi:chart-line" className='text-lg mr-2 text-blue-400' />
                                            <span>Especialización en Tecnología</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='md:flex-1'>
                                <div className='text-center'>
                                    <div className='text-6xl mb-4'>🎓</div>
                                    <h4 className='text-white font-bold text-lg mb-2'>Formación Técnica</h4>
                                    <p className='text-gray-400 text-sm leading-relaxed'>
                                        Especializándome en computación con enfoque en desarrollo de software,
                                        redes y administración de sistemas. Una base sólida para mi carrera en tecnología.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* Certificaciones Técnicas */}
                <section className='mb-16'>
                    <div className='text-center mb-12'>
                        <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
                            Certificaciones Técnicas
                        </h2>
                        <p className='text-gray-300 text-lg max-w-2xl mx-auto'>
                            Certificaciones oficiales que validan mis conocimientos en tecnologías específicas
                        </p>
                    </div>

                    <div className='grid md:grid-cols-2 gap-6'>
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className='bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300'
                            >
                                <div className='flex items-start gap-4'>
                                    {/* Badge oficial o icono */}
                                    <div className='flex-shrink-0'>
                                        {cert.credlyBadge ? (
                                            <div className='relative group cursor-pointer'>
                                                {/* Badge visual estilo CISCO */}
                                                <div className='w-16 h-16 rounded-lg shadow-lg border-2 border-white/20 hover:shadow-xl hover:border-white/40 transition-all duration-300 overflow-hidden'
                                                    style={{
                                                        background: 'linear-gradient(135deg, #1BA0D7 0%, #0891b2 100%)'
                                                    }}>
                                                    <div className='flex flex-col items-center justify-center h-full p-1'>
                                                        <Icon icon="cib:cisco" className='text-white text-xl mb-1' />
                                                        <div className='text-white text-xs font-bold text-center leading-none'>
                                                            CISCO
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Indicador de verificación */}
                                                <div className='absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center border-2 border-slate-900'>
                                                    <Icon icon="mdi:check" className='text-white text-xs' />
                                                </div>

                                                {/* Enlace a Credly */}
                                                <a
                                                    href={`https://www.credly.com/badges/${cert.credlyBadge.id}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className='absolute inset-0 z-10'
                                                    title="Ver certificación en Credly"
                                                ></a>
                                            </div>
                                        ) : (
                                            <div className='w-16 h-16 rounded-lg flex items-center justify-center shadow-lg border border-white/10' style={{ backgroundColor: `${cert.color}20` }}>
                                                <Icon icon={cert.icon} className='text-2xl' style={{ color: cert.color }} />
                                            </div>
                                        )}
                                    </div>

                                    <div className='flex-1'>
                                        <div className='flex items-center justify-between mb-2'>
                                            <h3 className='text-white font-bold text-lg'>{cert.title}</h3>
                                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${cert.status === 'Completado' ? 'bg-green-500/20 text-green-400' :
                                                cert.status === 'En Proceso' ? 'bg-yellow-500/20 text-yellow-400' :
                                                    'bg-blue-500/20 text-blue-400'
                                                }`}>
                                                {cert.status}
                                            </span>
                                        </div>

                                        <p className='text-gray-400 text-sm mb-3'>{cert.description}</p>

                                        <div className='flex items-center justify-between'>
                                            <div className='flex items-center gap-2'>
                                                <span className='text-gray-300 font-medium'>{cert.provider}</span>
                                                {cert.verified && (
                                                    <span className='inline-flex items-center px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium'>
                                                        <Icon icon="mdi:check-circle" className='mr-1' />
                                                        Verified
                                                    </span>
                                                )}
                                            </div>
                                            <span className='text-gray-400 text-sm'>{cert.date}</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Cursos y Especializaciones */}
                <section className='mb-16'>
                    <div className='text-center mb-12'>
                        <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
                            Cursos y Especializaciones
                        </h2>
                        <p className='text-gray-300 text-lg max-w-2xl mx-auto'>
                            Formación continua y cursos complementarios para ampliar mis conocimientos
                        </p>
                    </div>

                    <div className='grid md:grid-cols-3 gap-6'>
                        {courses.map((course, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className='bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center hover:border-white/20 transition-all duration-300'
                            >
                                <div className='w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center' style={{ backgroundColor: `${course.color}20` }}>
                                    <Icon icon={course.icon} className='text-3xl' style={{ color: course.color }} />
                                </div>

                                <h3 className='text-white font-bold text-lg mb-2'>{course.title}</h3>
                                <p className='text-gray-400 text-sm mb-3'>{course.provider}</p>
                                <span className='inline-block px-3 py-1 bg-gray-500/20 text-gray-300 rounded-full text-xs font-medium'>
                                    {course.type}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Timeline Educativo */}
                <section className='mb-16'>
                    <div className='text-center mb-12'>
                        <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
                            Mi Trayectoria Educativa
                        </h2>
                        <p className='text-gray-300 text-lg max-w-2xl mx-auto'>
                            Línea de tiempo de mi formación académica y profesional
                        </p>
                    </div>

                    <div className='relative'>
                        {/* Línea vertical */}
                        <div className='absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full'></div>

                        <div className='space-y-12'>
                            {/* 2022 - Inicio Diversificado */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className='flex items-center'
                            >
                                <div className='w-1/2 pr-8 text-right'>
                                    <div className='bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10'>
                                        <h4 className='text-white font-bold'>Inicio de Diversificado</h4>
                                        <p className='text-gray-400 text-sm'>Perito en Computación</p>
                                    </div>
                                </div>
                                <div className='w-8 h-8 bg-blue-500 rounded-full border-4 border-slate-900 z-10'></div>
                                <div className='w-1/2 pl-8'>
                                    <span className='text-blue-400 font-bold'>2023</span>
                                </div>
                            </motion.div>

                            {/* 2024 - Certificaciones CISCO */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className='flex items-center'
                            >
                                <div className='w-1/2 pr-8 text-right'>
                                    <span className='text-green-400 font-bold'>2023 y 2024</span>
                                </div>
                                <div className='w-8 h-8 bg-green-500 rounded-full border-4 border-slate-900 z-10'></div>
                                <div className='w-1/2 pl-8'>
                                    <div className='bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10'>
                                        <h4 className='text-white font-bold'>Certificaciones CISCO</h4>
                                        <p className='text-gray-400 text-sm'>Operating Systems & CCNAv7</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* 2025 - Graduación y AWS */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className='flex items-center'
                            >
                                <div className='w-1/2 pr-8 text-right'>
                                    <div className='bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10'>
                                        <h4 className='text-white font-bold'>Graduación</h4>
                                        <p className='text-gray-400 text-sm'>Perito en computación</p>
                                    </div>
                                </div>
                                <div className='w-8 h-8 bg-purple-500 rounded-full border-4 border-slate-900 z-10'></div>
                                <div className='w-1/2 pl-8'>
                                    <span className='text-purple-400 font-bold'>2025</span>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Próximos Objetivos */}
                <section className='mb-16'>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className='bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-blue-500/30'
                    >
                        <div className='text-center mb-8'>
                            <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
                                Próximos Objetivos
                            </h2>
                            <p className='text-gray-300 text-lg max-w-2xl mx-auto'>
                                Mis metas educativas y profesionales a corto y mediano plazo
                            </p>
                        </div>

                        <div className='grid md:grid-cols-3 gap-6'>
                            <div className='text-center'>
                                <div className='text-4xl mb-4'>🎯</div>
                                <h3 className='text-white font-bold text-lg mb-2'>2025</h3>
                                <p className='text-gray-400 text-sm'>
                                    Completar CISCO IT Essentials, Graduación y más certificados
                                </p>
                            </div>

                            <div className='text-center'>
                                <div className='text-4xl mb-4'>🛡️</div>
                                <h3 className='text-white font-bold text-lg mb-2'>Ciberseguridad</h3>
                                <p className='text-gray-400 text-sm'>
                                    Profundizar en seguridad informática y obtener certificaciones especializadas
                                </p>
                            </div>

                            <div className='text-center'>
                                <div className='text-4xl mb-4'>🚀</div>
                                <h3 className='text-white font-bold text-lg mb-2'>Universidad</h3>
                                <p className='text-gray-400 text-sm'>
                                    Continuar estudios superiores en Ingeniería en Sistemas o Ciberseguridad
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </section>

            </div>
        </div>
    )
}
