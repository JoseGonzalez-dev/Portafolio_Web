import { useState } from 'react'

export const useImageModal = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState({
    src: '',
    alt: '',
    title: ''
  })

  const openModal = (imageSrc, imageAlt = '', title = '') => {
    setCurrentImage({
      src: imageSrc,
      alt: imageAlt,
      title: title
    })
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
    // Limpiar después de la animación
    setTimeout(() => {
      setCurrentImage({
        src: '',
        alt: '',
        title: ''
      })
    }, 300)
  }

  return {
    isOpen,
    currentImage,
    openModal,
    closeModal
  }
}