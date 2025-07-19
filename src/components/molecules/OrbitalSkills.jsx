import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const OrbitalSkills = () => {
  const [likes, setLikes] = useState(39);
  const [comments, setComments] = useState(4);
  const [shares, setShares] = useState(12);

  // Definir las tecnologías con sus iconos
  const technologies = [
    { name: 'React', icon: 'logos:react', color: '#61DAFB' },
    { name: 'Vue', icon: 'logos:vue', color: '#4FC08D' },
    { name: 'Svelte', icon: 'logos:svelte-icon', color: '#FF3E00' },
    { name: 'Ember', icon: 'logos:ember', color: '#E04E39' },
    { name: 'JavaScript', icon: 'logos:javascript', color: '#F7DF1E' },
    { name: 'TypeScript', icon: 'logos:typescript-icon', color: '#3178C6' },
    { name: 'SolidJS', icon: 'logos:solidjs-icon', color: '#2C4F7C' },
    { name: 'Angular', icon: 'logos:angular-icon', color: '#DD0031' }
  ];

  // Calcular posiciones orbitales
  const calculatePositions = () => {
    const radius = 100; // Radio del orbital
    return technologies.map((_, index) => {
      const angle = (index * 360) / technologies.length;
      const x = Math.cos((angle * Math.PI) / 180) * radius;
      const y = Math.sin((angle * Math.PI) / 180) * radius;
      return { x, y, angle };
    });
  };

  const positions = calculatePositions();

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Contenedor principal */}
      <motion.div
        className="relative w-80 h-80 mx-auto"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Fondo espacial con estrellas */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-3xl overflow-hidden border border-gray-700/30">
          {/* Estrellas animadas */}
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-0.5 h-0.5 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>

        {/* Sol central */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-2xl"
          animate={{
            scale: [1, 1.1, 1],
            boxShadow: [
              "0 0 20px rgba(255, 255, 0, 0.5)",
              "0 0 40px rgba(255, 255, 0, 0.8)",
              "0 0 20px rgba(255, 255, 0, 0.5)"
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Icon
            icon="mdi:code-tags"
            className="w-8 h-8 text-black"
          />
        </motion.div>

        {/* Planetas orbitando */}
        {technologies.map((tech, index) => {
          const position = positions[index];
          return (
            <motion.div
              key={tech.name}
              className="absolute w-10 h-10 flex items-center justify-center"
              style={{
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
              }}
              animate={{
                x: [0, position.x, 0],
                y: [0, position.y, 0],
                rotate: [0, 360],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
                delay: index * 0.3,
              }}
            >
              <motion.div
                className="w-10 h-10 rounded-full flex items-center justify-center shadow-lg"
                style={{
                  backgroundColor: tech.color,
                  boxShadow: `0 0 15px ${tech.color}60`,
                }}
                whileHover={{
                  scale: 1.3,
                  boxShadow: `0 0 25px ${tech.color}90`,
                }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon
                  icon={tech.icon}
                  className="w-5 h-5 text-white"
                />
              </motion.div>
            </motion.div>
          );
        })}

        {/* Órbita visible sutil */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-52 h-52 border border-white/10 rounded-full"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </motion.div>

      {/* Botones de interacción */}
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-4">
        <motion.button
          className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20"
          whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
          whileTap={{ scale: 0.9 }}
        >
          <Icon icon="mdi:share-variant" className="w-5 h-5 text-white" />
        </motion.button>

        <motion.button
          className="w-10 h-10 bg-red-500/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-red-500/30"
          whileHover={{ scale: 1.1, backgroundColor: "rgba(239,68,68,0.3)" }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setLikes(likes + 1)}
        >
          <Icon icon="mdi:heart" className="w-5 h-5 text-red-500" />
        </motion.button>

        <motion.button
          className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20"
          whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
          whileTap={{ scale: 0.9 }}
        >
          <Icon icon="mdi:comment" className="w-5 h-5 text-white" />
        </motion.button>

        <motion.button
          className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20"
          whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
          whileTap={{ scale: 0.9 }}
        >
          <Icon icon="mdi:arrow-right" className="w-5 h-5 text-white" />
        </motion.button>
      </div>

      {/* Contadores */}
      <div className="absolute right-16 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 text-white text-xs">
        <div className="text-center">{likes}</div>
        <div className="text-center">{comments}</div>
        <div className="text-center">{shares}</div>
      </div>

      {/* Código de ejemplo */}
      <motion.div
        className="mt-6 bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 font-mono text-sm text-gray-200 border border-gray-700/50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <div className="flex items-center gap-2 mb-3">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <pre className="text-xs leading-relaxed">
          {`const positions = Array.from(
  { length: icons.length },
  (_, i) => {
    const angle = (i * 360) / icons.length;
    return {
      left: \`calc(50% + \${radius * 
        Math.cos((angle * Math.PI) / 180)}px)\`,
      top: \`calc(50% + \${radius * 
        Math.sin((angle * Math.PI) / 180)}px)\`,
    };
  }
);`}
        </pre>
      </motion.div>

      {/* Información adicional */}
      <motion.div
        className="mt-4 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <p className="text-gray-300 text-sm">
          ¿Alguna vez has visto iconos orbitando como planetas? 🌍
        </p>
        <p className="text-gray-400 text-xs mt-1">
          Tecnologías que domino en constante movimiento
        </p>
      </motion.div>
    </div>
  );
};

export default OrbitalSkills; 