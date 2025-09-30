import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';
import { RadialBarChart, RadialBar, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const SkillsOrbit = ({ category = 'frontend', title = 'Mis Habilidades' }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Configuraciones de habilidades por categoría con niveles de dominio
    const skillsConfig = {
        frontend: {
            skills: [
                { icon: 'logos:react', name: 'React', color: '#61DAFB', bg: '#1e3a8a', level: 85, experience: '2 años' },
                { icon: 'logos:react', name: 'React Native', color: '#20232A', bg: '#374151', level: 35, experience: '6 meses' },
                { icon: 'logos:tailwindcss-icon', name: 'Tailwind', color: '#06B6D4', bg: '#0891b2', level: 90, experience: '2 años' },
                { icon: 'logos:flutter', name: 'Flutter', color: '#02569B', bg: '#1e40af', level: 20, experience: '6 meses' },
                { icon: 'logos:javascript', name: 'JavaScript', color: '#F7DF1E', bg: '#ca8a04', level: 88, experience: '3 años' },
                { icon: 'logos:typescript-icon', name: 'TypeScript', color: '#3178C6', bg: '#1d4ed8', level: 55, experience: '1.5 años' },
                { icon: 'logos:html-5', name: 'HTML5', color: '#E34F26', bg: '#dc2626', level: 99, experience: '4 años' },
                { icon: 'logos:css-3', name: 'CSS3', color: '#1572B6', bg: '#1d4ed8', level: 95, experience: '3 años' }
            ],
            centerIcon: 'mdi:web',
            centerColor: 'from-blue-400 via-blue-500 to-blue-600',
            centerBorderColor: 'border-blue-300/30'
        },
        backend: {
            skills: [
                { icon: 'logos:nodejs-icon', name: 'Node.js', color: '#339933', bg: '#166534', level: 80, experience: '1 año' },
                { icon: 'logos:java', name: 'Java', color: '#ED8B00', bg: '#ca8a04', level: 80, experience: '2 años' },
                { icon: 'logos:python', name: 'Python', color: '#3776AB', bg: '#1e40af', level: 55, experience: '1 año' },
                { icon: 'logos:c-sharp', name: 'C#', color: '#239120', bg: '#166534', level: 20, experience: '2 meses' },
                { icon: 'logos:dotnet', name: '.NET', color: '#512BD4', bg: '#7c3aed', level: 20, experience: '2 meses' },
                { icon: 'logos:postgresql', name: 'PostgreSQL', color: '#336791', bg: '#1e40af', level: 5, experience: '6 meses' },
                { icon: 'logos:mongodb', name: 'MongoDB', color: '#47A248', bg: '#166534', level: 85, experience: '1 año' },
                { icon: 'logos:mysql', name: 'MySQL', color: '#4479A1', bg: '#1d4ed8', level: 90, experience: '2 años' },
            ],
            centerIcon: 'mdi:server',
            centerColor: 'from-green-400 via-green-500 to-green-600',
            centerBorderColor: 'border-green-300/30'
        },
        tools: {
            skills: [
                { icon: 'logos:git-icon', name: 'Git', color: '#F05032', bg: '#ea580c', level: 90, experience: '3 años' },
                { icon: 'fluent-mdl2:git-hub-logo', name: 'GitHub', color: '#F0F6FF', bg: '#374151', level: 88, experience: '3 años' },
                { icon: 'logos:aws', name: 'AWS', color: '#FF9900', bg: '#ca8a04', level: 45, experience: '10 meses' },
                { icon: 'logos:firebase', name: 'Firebase', color: '#FFCA28', bg: '#ca8a04', level: 75, experience: '1.5 años' },
                { icon: 'logos:vercel', name: 'Vercel', color: '#FFFFFF', bg: '#374151', level: 65, experience: '2 meses' },
                { icon: 'logos:visual-studio-code', name: 'VS Code', color: '#007ACC', bg: '#1d4ed8', level: 100, experience: '5 años' },
                { icon: 'logos:figma', name: 'Figma', color: '#F24E1E', bg: '#ea580c', level: 40, experience: '3 meses' },
                { icon: 'logos:postman', name: 'Postman', color: '#FF6C37', bg: '#ea580c', level: 90, experience: '2 años' }
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
                    <motion.button
                        onClick={() => setIsModalOpen(true)}
                        className='bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-sm font-semibold px-4 py-2 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl'
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Icon icon="mdi:chart-bar" className='inline mr-2' />
                        Ver Niveles de Dominio
                    </motion.button>
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

            {/* Modal con gráficas de nivel de dominio */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        className='fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsModalOpen(false)}
                    >
                        <motion.div
                            className='bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-slate-600'
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Header del modal */}
                            <div className='flex justify-between items-center mb-6'>
                                <div>
                                    <h2 className='text-2xl font-bold text-white mb-2'>
                                        Niveles de Dominio - {title}
                                    </h2>
                                    <p className='text-gray-400'>
                                        Análisis detallado de mis habilidades técnicas
                                    </p>
                                </div>
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className='text-gray-400 hover:text-white transition-colors p-2'
                                >
                                    <Icon icon="mdi:close" className='text-2xl' />
                                </button>
                            </div>

                            {/* Gráfica de barras */}
                            <div className='mb-8'>
                                <h3 className='text-lg font-semibold text-white mb-4'>
                                    Nivel de Dominio por Tecnología
                                </h3>
                                <div className='bg-slate-900/50 rounded-xl p-4'>
                                    <ResponsiveContainer width="100%" height={300}>
                                        <BarChart data={skills} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                                            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                                            <XAxis
                                                dataKey="name"
                                                stroke="#9CA3AF"
                                                fontSize={12}
                                                angle={-45}
                                                textAnchor="end"
                                                height={80}
                                            />
                                            <YAxis stroke="#9CA3AF" fontSize={12} />
                                            <Tooltip
                                                contentStyle={{
                                                    backgroundColor: '#1F2937',
                                                    border: '1px solid #374151',
                                                    borderRadius: '8px',
                                                    color: '#F9FAFB'
                                                }}
                                                formatter={(value, name) => [`${value}%`, 'Nivel de Dominio']}
                                                labelFormatter={(label) => `Tecnología: ${label}`}
                                            />
                                            <Bar
                                                dataKey="level"
                                                fill="#3B82F6"
                                                radius={[4, 4, 0, 0]}
                                            />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>

                            {/* Gráficas radiales individuales */}
                            <div className='mb-6'>
                                <h3 className='text-lg font-semibold text-white mb-4'>
                                    Detalle Individual
                                </h3>
                                <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                                    {skills.map((skill, index) => (
                                        <div key={index} className='bg-slate-900/50 rounded-xl p-4 text-center'>
                                            <div className='mb-3'>
                                                <Icon icon={skill.icon} className='text-3xl mx-auto' style={{ color: skill.color }} />
                                            </div>
                                            <h4 className='text-white font-semibold text-sm mb-2'>{skill.name}</h4>

                                            {/* Gráfica radial personalizada */}
                                            <div className='relative w-24 h-24 mx-auto mb-3'>
                                                <svg className='absolute inset-0 w-full h-full transform -rotate-90' viewBox='0 0 100 100'>
                                                    {/* Círculo de fondo (100%) */}
                                                    <circle
                                                        cx='50'
                                                        cy='50'
                                                        r='35'
                                                        fill='none'
                                                        stroke='#374151'
                                                        strokeWidth='6'
                                                    />
                                                    {/* Círculo de progreso */}
                                                    <circle
                                                        cx='50'
                                                        cy='50'
                                                        r='35'
                                                        fill='none'
                                                        stroke={skill.color}
                                                        strokeWidth='6'
                                                        strokeLinecap='round'
                                                        strokeDasharray={`${2 * Math.PI * 35}`}
                                                        strokeDashoffset={`${2 * Math.PI * 35 * (1 - skill.level / 100)}`}
                                                        style={{
                                                            transition: 'stroke-dashoffset 1.5s ease-in-out',
                                                            filter: 'drop-shadow(0 0 4px rgba(0,0,0,0.3))'
                                                        }}
                                                    />
                                                </svg>
                                            </div>

                                            <div className='text-center'>
                                                <div className='text-lg font-bold text-white mb-1'>
                                                    {skill.level}%
                                                </div>
                                                <div className='text-xs text-gray-400'>
                                                    {skill.experience}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Leyenda de niveles */}
                            <div className='bg-slate-900/50 rounded-xl p-4'>
                                <h3 className='text-lg font-semibold text-white mb-3'>
                                    Escala de Dominio
                                </h3>
                                <div className='grid grid-cols-1 md:grid-cols-5 gap-3 text-sm'>
                                    <div className='flex items-center'>
                                        <div className='w-4 h-4 bg-red-500 rounded mr-2'></div>
                                        <span className='text-gray-300'>0-20% Principiante</span>
                                    </div>
                                    <div className='flex items-center'>
                                        <div className='w-4 h-4 bg-orange-500 rounded mr-2'></div>
                                        <span className='text-gray-300'>21-40% Básico</span>
                                    </div>
                                    <div className='flex items-center'>
                                        <div className='w-4 h-4 bg-yellow-500 rounded mr-2'></div>
                                        <span className='text-gray-300'>41-60% Intermedio</span>
                                    </div>
                                    <div className='flex items-center'>
                                        <div className='w-4 h-4 bg-blue-500 rounded mr-2'></div>
                                        <span className='text-gray-300'>61-80% Avanzado</span>
                                    </div>
                                    <div className='flex items-center'>
                                        <div className='w-4 h-4 bg-green-500 rounded mr-2'></div>
                                        <span className='text-gray-300'>81-100% Experto</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default SkillsOrbit; 