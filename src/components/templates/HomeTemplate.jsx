import React from 'react'
import { NavLink } from 'react-router'
import OrbitalSkills from '../molecules/OrbitalSkills'

export const HomeTemplate = () => {
  return (
    <div className='bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-svh flex items-center justify-center px-4'>
      {/* Contenido centrado */}
      <div className='max-w-6xl mx-auto w-full'>
        <div className='flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12'>

          {/* Texto */}
          <div className='text-center lg:text-left lg:flex-1'>
            <h1 className='text-4xl lg:text-5xl font-bold text-white mb-4'>
              Hola 👋 Soy José Francisco González Ordoñez
            </h1>
            <p className='text-xl lg:text-2xl text-gray-200'>
              Desarrollador Web Full Stack apasionado por la tecnología y el diseño.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start'>
              <button className='bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-blue-500/30'>
                Descargar CV
              </button>
              <NavLink to={'/about'}>
                <button className='bg-transparent border-2 border-white/30 hover:border-white/60 text-white hover:bg-white/10 px-6 py-3 rounded-full font-semibold transition-all duration-300 backdrop-blur-sm'>
                  Acerca de mi
                </button>
              </NavLink>
              <button className='bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40 px-6 py-3 rounded-full font-semibold transition-all duration-300 backdrop-blur-sm'>
                Contactame
              </button>
            </div>
          </div>

          {/* Imagen */}
          <div className='lg:flex-1 flex justify-center'>
            <picture>
              <source
                srcSet='https://res.cloudinary.com/dzydnoljd/image/upload/e_background_removal/f_png/v1752813675/iyo_hmala0.jpg'
                media='(min-width: 740px)'
              />
              <img
                src='https://res.cloudinary.com/dzydnoljd/image/upload/e_background_removal/f_png/v1752813675/iyo_hmala0.jpg'
                alt='José Francisco González Ordoñez'
                className='h-72 w-72 md:h-64 md:w-64 lg:h-[800px] lg:w-[800px] object-contain mask-[linear-gradient(0deg,_transparent_0%,_black_20%)]'
              />
            </picture>
          </div>
        </div>
      </div>
    </div>
  )
}
