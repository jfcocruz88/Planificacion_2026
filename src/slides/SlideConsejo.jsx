import { motion } from 'framer-motion'
import { AnimatedOwl } from '../components/AnimatedOwl'

export function SlideConsejo() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-slate-900">

      {/* Acentos sutiles */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-950/30 to-transparent" />
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-3xl" />

      {/* Partículas de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 0.5, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Contenido */}
      <div className="relative z-10 w-full h-full px-16 py-10 flex flex-col">

        {/* Header */}
        <motion.div
          className="mb-8 shrink-0"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-blue-400/70 text-sm tracking-[0.25em] uppercase font-medium">
            Gobernanza
          </span>
          <h2 className="text-5xl font-bold text-white mt-3 tracking-tight">
            Consejo Asesor
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mt-4 rounded-full"></div>
        </motion.div>

        {/* Contenido principal */}
        <motion.div
          className="flex-1 grid grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          {/* Card: Nuevo presidente */}
          <motion.div
            className="bg-white/[0.03] rounded-xl p-6 border border-white/[0.06] flex flex-col"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            {/* Header de card */}
            <div className="flex items-center gap-3 mb-5">
              <h3 className="text-white text-sm uppercase tracking-[0.15em] font-semibold">Nuevo Presidente</h3>
              <div className="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent"></div>
            </div>

            <div className="flex-1 flex flex-col justify-center">
              {/* Badge de fecha */}
              <div className="mb-4">
                <span className="px-3 py-1.5 bg-amber-500/20 text-amber-400 rounded-full text-sm font-medium border border-amber-500/30">
                  Mayo 2026
                </span>
              </div>

              {/* Nombre */}
              <h3 className="text-3xl font-bold text-white mb-3">
                Arturo Fermandois
              </h3>

              <p className="text-white/50 text-[15px] leading-relaxed">
                Asume como nuevo presidente del Consejo
              </p>

              {/* Separador y evaluación */}
              <div className="mt-6 pt-4 border-t border-white/[0.06]">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-indigo-400">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-white/90 text-sm font-medium">Evaluar nuevas incorporaciones</p>
                    <p className="text-white/40 text-xs">Al Consejo del Observatorio</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card: Cierre */}
          <motion.div
            className="bg-white/[0.03] rounded-xl p-6 border border-white/[0.06] flex flex-col items-center justify-center text-center"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            {/* Owl animado */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <AnimatedOwl size={80} color="#ffffff" />
            </motion.div>

            {/* Texto de cierre */}
            <motion.p
              className="text-white/40 text-sm mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Observatorio Judicial
            </motion.p>

            <motion.h3
              className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-purple-400 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
            >
              Planificación 2026
            </motion.h3>

            {/* Indicador de fin */}
            <motion.div
              className="flex items-center justify-center gap-3 text-white/30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div className="w-8 h-px bg-white/20"/>
              <span className="text-sm">Fin de la presentación</span>
              <div className="w-8 h-px bg-white/20"/>
            </motion.div>
          </motion.div>
        </motion.div>

      </div>
    </div>
  )
}
