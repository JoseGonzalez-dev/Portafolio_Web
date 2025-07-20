import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Icon } from '@iconify/react'

const ContactModal = ({ 
  isOpen, 
  onClose, 
  formData, 
  isSubmitting, 
  onInputChange, 
  onSubmit,
  socialContacts = []
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className='fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4'
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className='bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-white/10 shadow-2xl'
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header del modal */}
            <div className='flex items-center justify-between mb-8'>
              <div>
                <motion.h3 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className='text-3xl font-bold text-white mb-2'
                >
                  ¡Hablemos!
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className='text-gray-400'
                >
                  Cuéntame sobre tu proyecto
                </motion.p>
              </div>
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className='text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full'
              >
                <Icon icon="mdi:close" className='text-2xl' />
              </motion.button>
            </div>

            {/* Formulario */}
            <form onSubmit={onSubmit} className='space-y-6'>
              <div className='grid md:grid-cols-2 gap-6'>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <label className='block text-white font-medium mb-2'>
                    Nombre *
                  </label>
                  <input
                    type='text'
                    name='name'
                    value={formData.name}
                    onChange={onInputChange}
                    required
                    className='w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all'
                    placeholder='Tu nombre completo'
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <label className='block text-white font-medium mb-2'>
                    Email *
                  </label>
                  <input
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={onInputChange}
                    required
                    className='w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all'
                    placeholder='tu@email.com'
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <label className='block text-white font-medium mb-2'>
                  Asunto *
                </label>
                <input
                  type='text'
                  name='subject'
                  value={formData.subject}
                  onChange={onInputChange}
                  required
                  className='w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all'
                  placeholder='¿De qué quieres hablar?'
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <label className='block text-white font-medium mb-2'>
                  Mensaje *
                </label>
                <textarea
                  name='message'
                  value={formData.message}
                  onChange={onInputChange}
                  required
                  rows={5}
                  className='w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all resize-none'
                  placeholder='Cuéntame sobre tu proyecto, idea o cualquier cosa en la que pueda ayudarte...'
                />
              </motion.div>

              {/* Botones del formulario */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className='flex gap-4 pt-4'
              >
                <button
                  type='button'
                  onClick={onClose}
                  className='flex-1 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 border border-white/20'
                >
                  Cancelar
                </button>
                <button
                  type='submit'
                  disabled={isSubmitting}
                  className='flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2'
                >
                  {isSubmitting ? (
                    <>
                      <div className='w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin'></div>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Icon icon="mdi:send" />
                      Enviar mensaje
                    </>
                  )}
                </button>
              </motion.div>
            </form>

            {/* Información de contacto adicional */}
            {socialContacts.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className='mt-8 pt-6 border-t border-white/10'
              >
                <p className='text-gray-400 text-sm text-center mb-4'>
                  O contáctame directamente por:
                </p>
                <div className='flex justify-center gap-4'>
                  {socialContacts.map((contact, index) => (
                    <motion.a
                      key={contact.name}
                      href={contact.url}
                      target='_blank'
                      rel='noopener noreferrer'
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className='bg-white/5 hover:bg-white/10 p-3 rounded-xl transition-all duration-300 border border-white/10 hover:border-white/20'
                    >
                      <Icon 
                        icon={contact.icon} 
                        className='text-xl'
                        style={{ color: contact.color }}
                      />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ContactModal