import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Icon } from '@iconify/react'

const CodeShowcase = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [isTyping, setIsTyping] = useState(false)

  // Ejemplos de código de tus proyectos reales
  const codeExamples = [
    {
      title: 'Java Application',
      language: 'Java',
      icon: 'logos:java',
      color: '#ED8B00',
      code: `public class PortfolioApp {
    private String nombre;
    private String profesion;
    private List<String> tecnologias;
    
    public PortfolioApp() {
        this.nombre = "José Francisco";
        this.profesion = "Desarrollador Full Stack";
        this.tecnologias = Arrays.asList(
            "Java", "Spring Boot", "React", 
            "Node.js", "MySQL", "React Native"
        );
    }
    
    public void mostrarInformacion() {
        System.out.println("=== MI PORTAFOLIO ===");
        System.out.println("Nombre: " + nombre);
        System.out.println("Profesión: " + profesion);
        System.out.println("\\nTecnologías que domino:");
        
        tecnologias.forEach(tech -> 
            System.out.println("✓ " + tech)
        );
        
        System.out.println("\\n¡Listo para nuevos desafíos!");
    }
    
    public static void main(String[] args) {
        PortfolioApp portfolio = new PortfolioApp();
        portfolio.mostrarInformacion();
        
        // Mensaje motivacional
        System.out.println("\\n" + "=".repeat(30));
        System.out.println("💻 Código limpio, soluciones efectivas");
        System.out.println("🚀 Siempre aprendiendo y mejorando");
        System.out.println("=".repeat(30));
    }
}`
    },
    {
      title: 'React Component',
      language: 'JavaScript',
      icon: 'logos:react',
      color: '#61DAFB',
      code: `const TiendaOnline = () => {
  const [productos, setProductos] = useState([])
  const [carrito, setCarrito] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch('/api/productos')
        const data = await response.json()
        setProductos(data)
      } catch (error) {
        console.error('Error:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchProductos()
  }, [])

  const agregarAlCarrito = (producto) => {
    setCarrito(prev => [...prev, producto])
  }

  return (
    <div className="tienda-container">
      {loading ? <Spinner /> : (
        <ProductGrid 
          productos={productos}
          onAgregar={agregarAlCarrito}
        />
      )}
    </div>
  )
}`
    },
    {
      title: 'Node.js API',
      language: 'JavaScript',
      icon: 'logos:nodejs-icon',
      color: '#339933',
      code: `const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../models/User')

const router = express.Router()

// Registro de usuario
router.post('/register', async (req, res) => {
  try {
    const { email, password, nombre } = req.body
    
    // Verificar si el usuario existe
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.status(400).json({ 
        error: 'El usuario ya existe' 
      })
    }
    
    // Encriptar contraseña
    const hashedPassword = await bcrypt.hash(password, 10)
    
    // Crear usuario
    const user = new User({
      email,
      password: hashedPassword,
      nombre
    })
    
    await user.save()
    
    // Generar token
    const token = jwt.sign(
      { userId: user._id }, 
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    )
    
    res.status(201).json({ token, user: user.toJSON() })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

module.exports = router`
    },
    {
      title: 'React Native',
      language: 'JavaScript',
      icon: 'logos:react',
      color: '#61DAFB',
      code: `import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const Calculadora = () => {
  const [display, setDisplay] = useState('0')
  const [previousValue, setPreviousValue] = useState(null)
  const [operation, setOperation] = useState(null)
  const [waitingForOperand, setWaitingForOperand] = useState(false)

  const inputNumber = (num) => {
    if (waitingForOperand) {
      setDisplay(String(num))
      setWaitingForOperand(false)
    } else {
      setDisplay(display === '0' ? String(num) : display + num)
    }
  }

  const performOperation = (nextOperation) => {
    const inputValue = parseFloat(display)

    if (previousValue === null) {
      setPreviousValue(inputValue)
    } else if (operation) {
      const currentValue = previousValue || 0
      const newValue = calculate(currentValue, inputValue, operation)

      setDisplay(String(newValue))
      setPreviousValue(newValue)
    }

    setWaitingForOperand(true)
    setOperation(nextOperation)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.display}>{display}</Text>
      {/* Botones de la calculadora */}
    </View>
  )
}`
    }
  ]

  // Auto-cambio de tabs cada 4 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % codeExamples.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  // Efecto de typing
  useEffect(() => {
    setIsTyping(true)
    const timer = setTimeout(() => setIsTyping(false), 500)
    return () => clearTimeout(timer)
  }, [activeTab])

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Header con tabs */}
      <div className="bg-gray-800/80 backdrop-blur-sm rounded-t-xl border border-gray-700/50">
        <div className="flex items-center justify-between p-4 border-b border-gray-700/50">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <Icon icon="mdi:code-tags" />
            <span>Mis Proyectos</span>
          </div>
        </div>
        
        {/* Tabs */}
        <div className="flex overflow-x-auto">
          {codeExamples.map((example, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                activeTab === index
                  ? 'text-white bg-gray-700/50 border-b-2 border-blue-400'
                  : 'text-gray-400 hover:text-white hover:bg-gray-700/30'
              }`}
            >
              <Icon 
                icon={example.icon} 
                className="text-lg"
                style={{ color: example.color }}
              />
              {example.title}
            </button>
          ))}
        </div>
      </div>

      {/* Code Display */}
      <div className="bg-gray-900/90 backdrop-blur-sm rounded-b-xl border-x border-b border-gray-700/50 relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Icon 
                  icon={codeExamples[activeTab].icon} 
                  className="text-xl"
                  style={{ color: codeExamples[activeTab].color }}
                />
                <span className="text-white font-medium">
                  {codeExamples[activeTab].title}
                </span>
                <span className="text-gray-400 text-sm">
                  {codeExamples[activeTab].language}
                </span>
              </div>
              
              {/* Indicador de typing */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center gap-1 text-green-400 text-sm"
                >
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>Cargando...</span>
                </motion.div>
              )}
            </div>

            <pre className="text-sm leading-relaxed overflow-x-auto">
              <code className="text-gray-300 font-mono">
                {codeExamples[activeTab].code}
              </code>
            </pre>
          </motion.div>
        </AnimatePresence>

        {/* Líneas de código animadas */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"
              style={{
                top: `${20 + i * 30}%`,
                left: 0,
                right: 0,
              }}
              animate={{
                opacity: [0, 0.5, 0],
                scaleX: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>

      {/* Stats del código */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-4 grid grid-cols-3 gap-4"
      >
        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10 text-center">
          <Icon icon="mdi:code-braces" className="text-blue-400 text-xl mx-auto mb-1" />
          <div className="text-white font-semibold text-sm">Clean Code</div>
          <div className="text-gray-400 text-xs">Código limpio</div>
        </div>
        
        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10 text-center">
          <Icon icon="mdi:rocket-launch" className="text-green-400 text-xl mx-auto mb-1" />
          <div className="text-white font-semibold text-sm">Optimizado</div>
          <div className="text-gray-400 text-xs">Performance</div>
        </div>
        
        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10 text-center">
          <Icon icon="mdi:shield-check" className="text-purple-400 text-xl mx-auto mb-1" />
          <div className="text-white font-semibold text-sm">Seguro</div>
          <div className="text-gray-400 text-xs">Best practices</div>
        </div>
      </motion.div>

      {/* Descripción */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-4 text-center"
      >
        <p className="text-gray-300 text-sm">
          Ejemplos reales de código de mis proyectos
        </p>
        <p className="text-gray-400 text-xs mt-1">
          Desliza o espera para ver diferentes tecnologías
        </p>
      </motion.div>
    </div>
  )
}

export default CodeShowcase