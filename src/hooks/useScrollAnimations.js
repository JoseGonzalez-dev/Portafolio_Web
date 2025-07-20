import { useScroll, useTransform } from 'framer-motion'

export const useScrollAnimations = () => {
  const { scrollY } = useScroll()
  
  // Diferentes efectos de parallax
  const parallaxY1 = useTransform(scrollY, [0, 300], [0, -50])
  const parallaxY2 = useTransform(scrollY, [0, 300], [0, -100])
  const parallaxY3 = useTransform(scrollY, [0, 500], [0, -150])
  
  // Efectos de opacidad
  const fadeOpacity = useTransform(scrollY, [0, 200], [1, 0])
  const revealOpacity = useTransform(scrollY, [0, 300], [0, 1])
  
  // Efectos de escala
  const scaleEffect = useTransform(scrollY, [0, 300], [1, 1.1])
  const shrinkEffect = useTransform(scrollY, [0, 300], [1, 0.9])

  // Configuraciones de animación predefinidas
  const animationVariants = {
    // Animación básica de entrada
    fadeInUp: {
      initial: { opacity: 0, y: 60 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.8, ease: "easeOut" }
    },
    
    // Animación de entrada desde la izquierda
    slideInLeft: {
      initial: { opacity: 0, x: -60 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.8, ease: "easeOut" }
    },
    
    // Animación de entrada desde la derecha
    slideInRight: {
      initial: { opacity: 0, x: 60 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.8, ease: "easeOut" }
    },
    
    // Animación de escala
    scaleIn: {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 0.6, ease: "easeOut" }
    },
    
    // Animación de rotación
    rotateIn: {
      initial: { opacity: 0, rotate: -10 },
      animate: { opacity: 1, rotate: 0 },
      transition: { duration: 0.8, ease: "easeOut" }
    },
    
    // Contenedor con stagger
    staggerContainer: {
      animate: {
        transition: {
          staggerChildren: 0.1,
          delayChildren: 0.2
        }
      }
    },
    
    // Item de stagger
    staggerItem: {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6, ease: "easeOut" }
    },
    
    // Animación de hover para botones
    buttonHover: {
      whileHover: { 
        scale: 1.05, 
        transition: { duration: 0.2 } 
      },
      whileTap: { 
        scale: 0.95,
        transition: { duration: 0.1 }
      }
    },
    
    // Animación de hover para tarjetas
    cardHover: {
      whileHover: { 
        y: -8,
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" }
      }
    },
    
    // Animación de entrada con bounce
    bounceIn: {
      initial: { opacity: 0, scale: 0.3 },
      animate: { 
        opacity: 1, 
        scale: 1,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 20
        }
      }
    }
  }

  // Configuraciones de viewport para whileInView
  const viewportConfig = {
    once: true,
    margin: "-100px",
    amount: 0.3
  }

  return {
    // Efectos de parallax
    parallaxY1,
    parallaxY2,
    parallaxY3,
    
    // Efectos de opacidad
    fadeOpacity,
    revealOpacity,
    
    // Efectos de escala
    scaleEffect,
    shrinkEffect,
    
    // Variantes de animación
    animationVariants,
    
    // Configuración de viewport
    viewportConfig,
    
    // Scroll Y para efectos personalizados
    scrollY
  }
}