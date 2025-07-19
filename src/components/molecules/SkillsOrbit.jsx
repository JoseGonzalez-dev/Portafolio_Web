import React from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const SkillsOrbit = ({ category = 'frontend', title = 'Mis Habilidades' }) => {
    // Configuraciones de habilidades por categoría
    const skillsConfig = {
        frontend: {
            skills: [
                { icon: 'logos:react', name: 'React', color: '#61DAFB', bg: '#1e3a8a' },
                { icon: 'logos:react', name: 'React Native', color: '#61DAFB', bg: '#1e3a8a' },
                { icon: 'logos:tailwindcss-icon', name: 'Tailwind', color: '#06B6D4', bg: '#0891b2' },
                { icon: 'logos:flutter', name: 'Flutter', color: '#ED8B00', bg: '#ca8a04' },
                { icon: 'logos:javascript', name: 'JavaScript', color: '#F7DF1E', bg: '#ca8a04' },
                { icon: 'logos:typescript-icon', name: 'TypeScript', color: '#3178C6', bg: '#1d4ed8' },
                { icon: 'logos:html-5', name: 'HTML5', color: '#E34F26', bg: '#dc2626' },
                { icon: 'logos:css-3', name: 'CSS3', color: '#1572B6', bg: '#1d4ed8' }
            ],
            centerIcon: 'mdi:web',
            centerColor: 'from-blue-400 via-blue-500 to-blue-600',
            centerBorderColor: 'border-blue-300/30'
        },
        backend: {
            skills: [
                { icon: 'logos:nodejs-icon', name: 'Node.js', color: '#339933', bg: '#166534' },
                { icon: 'logos:python', name: 'Python', color: '#3776AB', bg: '#1e40af' },
                { icon: 'logos:java', name: 'Java', color: '#ED8B00', bg: '#ca8a04' },
                { icon: 'logos:spring-icon', name: 'Spring Boot', color: '#6DB33F', bg: '#166534' },
                { icon: 'logos:postgresql', name: 'PostgreSQL', color: '#336791', bg: '#1e40af' },
                { icon: 'logos:mongodb', name: 'MongoDB', color: '#47A248', bg: '#166534' },
                { icon: 'logos:mysql', name: 'MySQL', color: '#4479A1', bg: '#1d4ed8' },
                { icon: 'logos:npm-icon', name: 'Redis', color: '#DC382D', bg: '#dc2626' }
            ],
            centerIcon: 'mdi:server',
            centerColor: 'from-green-400 via-green-500 to-green-600',
            centerBorderColor: 'border-green-300/30'
        },
        tools: {
            skills: [
                { icon: 'logos:git-icon', name: 'Git', color: '#F05032', bg: '#ea580c' },
                { icon: 'fluent-mdl2:git-hub-logo', name: 'GitHub', color: '#181717', bg: '#374151' },
                { icon: 'logos:aws', name: 'AWS', color: '#FF9900', bg: '#ca8a04' },
                { icon: 'logos:firebase', name: 'Firebase', color: '#FFCA28', bg: '#ca8a04' },
                { icon: 'logos:vercel', name: 'Vercel', color: '#000000', bg: '#374151' },
                { icon: 'logos:visual-studio-code', name: 'VS Code', color: '#007ACC', bg: '#1d4ed8' },
                { icon: 'logos:figma', name: 'Figma', color: '#F24E1E', bg: '#ea580c' },
                { icon: 'logos:postman', name: 'Postman', color: '#FF6C37', bg: '#ea580c' }
            ],
            centerIcon: 'mdi:tools',
            centerColor: 'from-purple-400 via-purple-500 to-purple-600',
            centerBorderColor: 'border-purple-300/30'
        },
        frameworks: {
            skills: [
                { icon: 'logos:tailwindcss-icon', name: 'Tailwind', color: '#06B6D4', bg: '#0891b2' },
                { icon: 'logos:bootstrap', name: 'Bootstrap', color: '#7952B3', bg: '#7c3aed' },
                { icon: 'logos:nextjs-icon', name: 'Next.js', color: '#000000', bg: '#374151' },
                { icon: 'logos:nuxt-icon', name: 'Nuxt.js', color: '#00DC82', bg: '#166534' },
                { icon: 'logos:express', name: 'Express', color: '#000000', bg: '#374151' },
                { icon: 'logos:fastify', name: 'Fastify', color: '#000000', bg: '#374151' },
                { icon: 'logos:prisma', name: 'Prisma', color: '#2D3748', bg: '#374151' },
                { icon: 'logos:graphql', name: 'GraphQL', color: '#E10098', bg: '#be185d' }
            ],
            centerIcon: 'mdi:package-variant',
            centerColor: 'from-orange-400 via-orange-500 to-orange-600',
            centerBorderColor: 'border-orange-300/30'
        }
    };

    const currentConfig = skillsConfig[category] || skillsConfig.frontend;
    const skills = currentConfig.skills;

    return (
        <div className='flex justify-center items-center py-8'>
            {/* Contenedor principal con diseño tipo móvil */}
            <div className='relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-slate-600/30'>

                {/* Header del componente */}
                <div className='text-center mb-6'>
                    <h3 className='text-white font-bold text-lg mb-2'>{title}</h3>
                    <p className='text-gray-400 text-sm font-medium'>
                        Built with <span className='text-blue-400 font-semibold'>React</span> + <span className='text-purple-400 font-semibold'>Motion</span>
                    </p>
                </div>

                <div className='relative w-80 h-80 md:w-96 md:h-96 mx-auto'>

                    {/* Centro - Icono principal animado */}
                    <motion.div
                        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br ${currentConfig.centerColor} rounded-full flex items-center justify-center shadow-2xl z-20 border-4 ${currentConfig.centerBorderColor}`}
                        animate={{
                            rotate: [0, 360],
                            scale: [1, 1.05, 1],
                            boxShadow: [
                                "0 0 20px rgba(59, 130, 246, 0.3)",
                                "0 0 40px rgba(59, 130, 246, 0.5)",
                                "0 0 20px rgba(59, 130, 246, 0.3)"
                            ]
                        }}
                        transition={{
                            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                            scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                            boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                        }}
                    >
                        <Icon icon={currentConfig.centerIcon} className='text-white text-3xl md:text-4xl font-bold' />
                    </motion.div>

                    {/* Contenedor orbital que rota */}
                    <motion.div
                        className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full'
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                        {/* Iconos posicionados en círculo */}
                        {skills.map((skill, index) => {
                            const angle = (index * 360) / skills.length
                            const radius = 130
                            const x = Math.cos((angle * Math.PI) / 180) * radius
                            const y = Math.sin((angle * Math.PI) / 180) * radius

                            return (
                                <div key={skill.name} className='absolute' style={{
                                    left: `calc(50% + ${x}px)`,
                                    top: `calc(50% + ${y}px)`,
                                    transform: 'translate(-50%, -50%)'
                                }}>
                                    <motion.div
                                        className='w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center shadow-lg border-2 z-10'
                                        style={{
                                            backgroundColor: `${skill.color}20`,
                                            borderColor: `${skill.color}60`,
                                        }}
                                        // Contrarrota para mantener los iconos derechos
                                        animate={{ rotate: -360 }}
                                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    >
                                        <Icon icon={skill.icon} className='text-lg md:text-xl' />
                                    </motion.div>
                                </div>
                            )
                        })}
                    </motion.div>

                    {/* Círculos de órbita decorativos con animación */}
                    <motion.div
                        className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 border border-white/10 rounded-full'
                        animate={{ rotate: 360 }}
                        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.div
                        className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 border border-white/5 rounded-full'
                        animate={{ rotate: -360 }}
                        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
                    />

                    {/* Partículas decorativas */}
                    {[...Array(6)].map((_, i) => (
                        <motion.div
                            key={i}
                            className='absolute w-1 h-1 bg-white/30 rounded-full'
                            style={{
                                top: `${20 + Math.random() * 60}%`,
                                left: `${20 + Math.random() * 60}%`,
                            }}
                            animate={{
                                opacity: [0.3, 1, 0.3],
                                scale: [1, 1.5, 1],
                            }}
                            transition={{
                                duration: 2 + Math.random() * 2,
                                repeat: Infinity,
                                delay: Math.random() * 2,
                            }}
                        />
                    ))}
                </div>


            </div>
        </div>
    )
}

export default SkillsOrbit; 