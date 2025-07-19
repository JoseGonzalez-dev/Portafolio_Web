import React from 'react'
import { motion } from 'framer-motion'
import { Icon } from '@iconify/react'
import SkillsOrbit from '../molecules/SkillsOrbit'

export const AboutMeTemplate = () => {
    return (
        <div className='bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen px-4 pt-20 pb-8'>
            <div className='max-w-6xl mx-auto w-full'>

                {/* Hero Section */}
                <section className='text-center mb-16'>
                    <div className='mb-8'>
                        <img
                            src='https://res.cloudinary.com/dzydnoljd/image/upload/e_background_removal/f_png/v1752813675/iyo_hmala0.jpg'
                            alt='José Francisco González - Desarrollador Full Stack'
                            className='w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto shadow-2xl border-4 border-white/20 object-cover'
                        />
                    </div>

                    <div>
                        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6'>
                            Más sobre <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400'>Mi</span>
                        </h1>

                        <p className='text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed'>
                            Hola mi nombre es: <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400'>José Francisco González Ordoñez</span> soy desarrollador Full Stack junior apasionado por crear soluciones digitales que impacten positivamente en la vida de las personas
                        </p>
                    </div>
                </section>

                {/* Mi Historia Section */}
                <section className='mb-16'>
                    <div className='bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10'>
                        <h2 className='text-3xl md:text-4xl font-bold text-white mb-8 text-center'>
                            Mi Historia en el Desarrollo
                        </h2>

                        <div className='grid md:grid-cols-2 gap-8 items-center'>
                            {/* Texto de la historia */}
                            <div className='space-y-6'>
                                <p className='text-gray-300 text-lg leading-relaxed'>
                                    Mi viaje en el mundo del desarrollo comenzó hace algunos años atras cuando descubrí la magia de convertir ideas en realidad a través del código. Lo que empezó como curiosidad se transformó en una verdadera pasión.
                                </p>

                                <p className='text-gray-300 text-lg leading-relaxed'>
                                    Tengo conocimiento en varias tecnologías modernas como <span className='text-blue-400 font-semibold'>React</span>, <span className='text-green-400 font-semibold'>Node.js</span> y <span className='text-purple-400 font-semibold'>JavaScript</span>, siempre manteniéndome actualizado con las últimas tendencias del desarrollo.
                                </p>

                                <p className='text-gray-300 text-lg leading-relaxed'>
                                    Cada proyecto es una oportunidad para aprender algo nuevo y crear soluciones que no solo funcionen bien, sino que también brinden una experiencia excepcional al usuario.
                                </p>
                            </div>

                            {/* Imagen o elemento visual */}
                            <div className='flex justify-center'>
                                <div className='relative'>
                                    <div className='w-64 h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10'>
                                        <div className='text-center'>
                                            <div className='text-4xl mb-4'>💻</div>
                                            <h3 className='text-white font-bold text-xl mb-2'>Código con Propósito</h3>
                                            <p className='text-gray-400 text-sm'>Creando soluciones que importan</p>
                                        </div>
                                    </div>

                                    {/* Elementos decorativos */}
                                    <div className='absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-60 animate-pulse'></div>
                                    <div className='absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full opacity-60 animate-pulse delay-1000'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Skills Orbital Section */}
                <section className='mb-16'>
                    <div className='text-center mb-12'>
                        <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
                            Mis Habilidades
                        </h2>
                        <p className='text-gray-300 text-lg max-w-2xl mx-auto'>
                            Tecnologías y herramientas que domino para crear experiencias digitales excepcionales
                        </p>
                    </div>

                    {/* Contenedor de habilidades orbitales */}
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-80'>
                        <SkillsOrbit category="frontend" title="Frontend" />
                        <SkillsOrbit category="backend" title="Backend" />
                        <SkillsOrbit category="tools" title="Herramientas" />
                    </div>
                </section>
            </div>
        </div>
    )
}
