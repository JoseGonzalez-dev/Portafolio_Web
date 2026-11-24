import { useState } from 'react'

export const useContactModal = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    botcheck: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  // Función para abrir modal de contacto
  const openContactModal = () => {
    setIsContactModalOpen(true)
    document.body.style.overflow = 'hidden'
  }

  // Función para cerrar modal
  const closeContactModal = () => {
    setIsContactModalOpen(false)
    document.body.style.overflow = 'unset'
    setFormData({ name: '', email: '', subject: '', message: '', botcheck: '' })
    setSubmitStatus(null)
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
    setSubmitStatus(null)

    try {
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
      if (!accessKey) {
        throw new Error('Falta configurar VITE_WEB3FORMS_ACCESS_KEY.')
      }

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          from_name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          botcheck: formData.botcheck
        })
      })

      const result = await response.json()

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'No se pudo transmitir el mensaje.')
      }

      setSubmitStatus({
        type: 'success',
        message: 'Mensaje transmitido correctamente. Te responderé pronto.'
      })
      setFormData({ name: '', email: '', subject: '', message: '', botcheck: '' })
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: error instanceof Error
          ? error.message
          : 'Ocurrió un error al transmitir el mensaje.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return {
    isContactModalOpen,
    formData,
    isSubmitting,
    submitStatus,
    openContactModal,
    closeContactModal,
    handleInputChange,
    handleSubmit
  }
}