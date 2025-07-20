import { useState } from 'react'

export const useContactModal = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Función para abrir modal de contacto
  const openContactModal = () => {
    setIsContactModalOpen(true)
    document.body.style.overflow = 'hidden'
  }

  // Función para cerrar modal
  const closeContactModal = () => {
    setIsContactModalOpen(false)
    document.body.style.overflow = 'unset'
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  // Manejar cambios en el formulario
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  // Enviar formulario
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simular envío (aquí integrarías con tu backend)
    await new Promise(resolve => setTimeout(resolve, 2000))

    console.log('Formulario enviado:', formData)
    setIsSubmitting(false)
    closeContactModal()

    // Mostrar notificación de éxito (opcional)
    alert('¡Mensaje enviado correctamente! Te responderé pronto.')
  }

  return {
    isContactModalOpen,
    formData,
    isSubmitting,
    openContactModal,
    closeContactModal,
    handleInputChange,
    handleSubmit
  }
}