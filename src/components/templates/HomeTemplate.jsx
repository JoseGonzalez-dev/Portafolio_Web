import React from 'react'

export const HomeTemplate = () => {
  return (
    <div className='bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-svh flex items-center justify-center px-4'>
      {/* Contenido centrado */}
      <div className='max-w-6xl mx-auto w-full'>
        <div className='flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12'>

          {/* Texto */}
          <div className='text-center lg:text-left lg:flex-1'>
            <h1 className='text-4xl lg:text-5xl font-bold text-white mb-4'>
              Hola 👋 Soy José Francisco González
            </h1>
            <p className='text-xl lg:text-2xl text-gray-200'>
              Desarrollador Web Full Stack apasionado por la tecnología y el diseño.
            </p>
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
