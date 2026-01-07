import { motion } from 'framer-motion'

const stats = [
  { label: 'Columnas y cartas de opinión', value: 'XX', icon: '✍️' },
  { label: 'Apariciones en medios', value: 'XX', icon: '📺' },
  { label: 'Seguidores LinkedIn', value: 'XX', icon: '💼' },
  { label: 'Suscriptores YouTube', value: 'XX', icon: '▶️' },
  { label: 'Podcasts realizados', value: 'XX', icon: '🎙️' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', stiffness: 300 }
  }
}

export function SlideResumen2() {
  return (
    <div className="w-full h-full flex flex-col
      bg-gradient-to-br from-azul-oscuro to-azul-profundo px-8 py-12 overflow-auto">

      {/* Header */}
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="inline-block px-4 py-1 bg-azul-primario/30 text-azul-claro
          rounded-full text-sm tracking-wider mb-4">
          RETROSPECTIVA
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
          Resumen 2025
        </h2>
        <p className="text-azul-claro/60 text-lg">Prensa, comunicaciones y redes sociales</p>
      </motion.div>

      {/* Grid de estadísticas */}
      <div className="flex-1 flex flex-col justify-center max-w-5xl mx-auto w-full">
        {/* Sección de prensa */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-azul-primario font-bold text-xl mb-4 flex items-center gap-2">
            <span className="w-8 h-8 bg-azul-primario/20 rounded-lg flex items-center justify-center">📰</span>
            Prensa y Comunicaciones
          </h3>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-5 gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center
                  border border-white/5 hover:border-azul-primario/30
                  transition-all duration-300"
                whileHover={{ scale: 1.05, y: -3 }}
              >
                <span className="text-3xl mb-2 block">{stat.icon}</span>
                <motion.span
                  className="text-3xl md:text-4xl font-black text-white block"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  {stat.value}
                </motion.span>
                <span className="text-white/60 text-xs mt-1 block leading-tight">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Sección de Sentencias Destacadas */}
        <motion.div
          className="bg-gradient-to-r from-azul-primario/20 to-purple-500/20
            rounded-2xl p-6 border border-white/10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <motion.div
              className="w-20 h-20 bg-gradient-to-br from-azul-primario to-purple-500
                rounded-2xl flex items-center justify-center text-4xl shadow-xl"
              whileHover={{ rotate: 5, scale: 1.1 }}
            >
              ⚖️
            </motion.div>

            <div className="text-center md:text-left flex-1">
              <h3 className="text-white font-bold text-2xl mb-2">
                Sentencias Destacadas 2024-2025
              </h3>
              <p className="text-white/70">
                Lanzamiento de la nueva página web de Sentencias Destacadas
              </p>
            </div>

            <motion.div
              className="flex items-center gap-2 text-azul-primario"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <span className="text-sm font-medium">Ver más</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M9 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
