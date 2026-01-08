import { motion } from 'framer-motion'

// Red de circuitos densa y fina desde el círculo central (radio 145)
const CIRCUIT_PATHS = [
  // Radiales superiores (Norte)
  { id: 1, d: 'M 0 -145 L 0 -200 L 50 -200 L 50 -280', delay: 0, color: 'blue' },
  { id: 2, d: 'M 0 -145 L 0 -190 L -40 -190 L -40 -270', delay: 0.08, color: 'orange' },
  { id: 3, d: 'M 0 -145 L 0 -210 L 100 -210 L 100 -290', delay: 0.16, color: 'blue' },
  { id: 4, d: 'M 0 -145 L 0 -180 L -90 -180 L -90 -260', delay: 0.24, color: 'orange' },
  { id: 5, d: 'M 0 -145 L 0 -220 L 140 -220 L 140 -300', delay: 0.32, color: 'blue' },
  { id: 6, d: 'M 0 -145 L 0 -195 L -130 -195 L -130 -280', delay: 0.4, color: 'orange' },

  // Radiales NE (45°)
  { id: 7, d: 'M 102 -102 L 145 -145 L 145 -220', delay: 0.05, color: 'orange' },
  { id: 8, d: 'M 102 -102 L 155 -155 L 210 -155', delay: 0.13, color: 'blue' },
  { id: 9, d: 'M 102 -102 L 140 -140 L 200 -140 L 200 -210', delay: 0.21, color: 'orange' },
  { id: 10, d: 'M 102 -102 L 160 -160 L 160 -240 L 210 -240', delay: 0.29, color: 'blue' },

  // Radiales E (Este)
  { id: 11, d: 'M 145 0 L 200 0 L 200 -50 L 280 -50', delay: 0.02, color: 'blue' },
  { id: 12, d: 'M 145 0 L 190 0 L 190 40 L 270 40', delay: 0.1, color: 'orange' },
  { id: 13, d: 'M 145 0 L 210 0 L 210 -90 L 290 -90', delay: 0.18, color: 'blue' },
  { id: 14, d: 'M 145 0 L 185 0 L 185 80 L 265 80', delay: 0.26, color: 'orange' },
  { id: 15, d: 'M 145 0 L 220 0 L 220 -130 L 300 -130', delay: 0.34, color: 'blue' },
  { id: 16, d: 'M 145 0 L 195 0 L 195 120 L 275 120', delay: 0.42, color: 'orange' },

  // Radiales SE (135°)
  { id: 17, d: 'M 102 102 L 145 145 L 210 145', delay: 0.07, color: 'blue' },
  { id: 18, d: 'M 102 102 L 150 150 L 150 220', delay: 0.15, color: 'orange' },
  { id: 19, d: 'M 102 102 L 155 155 L 220 155 L 220 210', delay: 0.23, color: 'blue' },
  { id: 20, d: 'M 102 102 L 140 140 L 140 200 L 200 200', delay: 0.31, color: 'orange' },

  // Radiales S (Sur)
  { id: 21, d: 'M 0 145 L 0 200 L -50 200 L -50 280', delay: 0.03, color: 'orange' },
  { id: 22, d: 'M 0 145 L 0 190 L 45 190 L 45 270', delay: 0.11, color: 'blue' },
  { id: 23, d: 'M 0 145 L 0 210 L -95 210 L -95 290', delay: 0.19, color: 'orange' },
  { id: 24, d: 'M 0 145 L 0 185 L 90 185 L 90 265', delay: 0.27, color: 'blue' },
  { id: 25, d: 'M 0 145 L 0 220 L -140 220 L -140 300', delay: 0.35, color: 'orange' },
  { id: 26, d: 'M 0 145 L 0 195 L 135 195 L 135 275', delay: 0.43, color: 'blue' },

  // Radiales SW (225°)
  { id: 27, d: 'M -102 102 L -145 145 L -145 220', delay: 0.06, color: 'blue' },
  { id: 28, d: 'M -102 102 L -150 150 L -215 150', delay: 0.14, color: 'orange' },
  { id: 29, d: 'M -102 102 L -155 155 L -155 230 L -210 230', delay: 0.22, color: 'blue' },
  { id: 30, d: 'M -102 102 L -140 140 L -200 140 L -200 195', delay: 0.3, color: 'orange' },

  // Radiales W (Oeste)
  { id: 31, d: 'M -145 0 L -200 0 L -200 55 L -280 55', delay: 0.04, color: 'orange' },
  { id: 32, d: 'M -145 0 L -190 0 L -190 -45 L -270 -45', delay: 0.12, color: 'blue' },
  { id: 33, d: 'M -145 0 L -210 0 L -210 95 L -290 95', delay: 0.2, color: 'orange' },
  { id: 34, d: 'M -145 0 L -185 0 L -185 -85 L -265 -85', delay: 0.28, color: 'blue' },
  { id: 35, d: 'M -145 0 L -220 0 L -220 135 L -300 135', delay: 0.36, color: 'orange' },
  { id: 36, d: 'M -145 0 L -195 0 L -195 -125 L -275 -125', delay: 0.44, color: 'blue' },

  // Radiales NW (315°)
  { id: 37, d: 'M -102 -102 L -145 -145 L -210 -145', delay: 0.09, color: 'orange' },
  { id: 38, d: 'M -102 -102 L -150 -150 L -150 -220', delay: 0.17, color: 'blue' },
  { id: 39, d: 'M -102 -102 L -155 -155 L -215 -155 L -215 -215', delay: 0.25, color: 'orange' },
  { id: 40, d: 'M -102 -102 L -140 -140 L -140 -195 L -195 -195', delay: 0.33, color: 'blue' },

  // Intermedios ENE
  { id: 41, d: 'M 126 -72 L 175 -72 L 175 -130', delay: 0.37, color: 'blue' },
  { id: 42, d: 'M 126 -72 L 180 -72 L 230 -72', delay: 0.45, color: 'orange' },
  { id: 43, d: 'M 72 -126 L 72 -175 L 130 -175', delay: 0.01, color: 'orange' },
  { id: 44, d: 'M 72 -126 L 72 -185 L 25 -185 L 25 -250', delay: 0.38, color: 'blue' },

  // Intermedios ESE
  { id: 45, d: 'M 126 72 L 175 72 L 175 135', delay: 0.46, color: 'orange' },
  { id: 46, d: 'M 126 72 L 185 72 L 235 72', delay: 0.39, color: 'blue' },
  { id: 47, d: 'M 72 126 L 72 180 L 125 180', delay: 0.47, color: 'blue' },
  { id: 48, d: 'M 72 126 L 72 190 L 20 190 L 20 255', delay: 0.41, color: 'orange' },

  // Intermedios WSW
  { id: 49, d: 'M -126 72 L -180 72 L -180 130', delay: 0.48, color: 'blue' },
  { id: 50, d: 'M -126 72 L -185 72 L -235 72', delay: 0.5, color: 'orange' },
  { id: 51, d: 'M -72 126 L -72 180 L -130 180', delay: 0.52, color: 'orange' },
  { id: 52, d: 'M -72 126 L -72 195 L -25 195 L -25 260', delay: 0.54, color: 'blue' },

  // Intermedios WNW
  { id: 53, d: 'M -126 -72 L -180 -72 L -180 -135', delay: 0.56, color: 'orange' },
  { id: 54, d: 'M -126 -72 L -190 -72 L -240 -72', delay: 0.58, color: 'blue' },
  { id: 55, d: 'M -72 -126 L -72 -180 L -125 -180', delay: 0.6, color: 'blue' },
  { id: 56, d: 'M -72 -126 L -72 -190 L -20 -190 L -20 -255', delay: 0.62, color: 'orange' },

  // Líneas finas adicionales cortas
  { id: 57, d: 'M 35 -140 L 35 -175 L 65 -175', delay: 0.64, color: 'blue' },
  { id: 58, d: 'M -35 -140 L -35 -170 L -60 -170', delay: 0.66, color: 'orange' },
  { id: 59, d: 'M 140 35 L 175 35 L 175 70', delay: 0.68, color: 'orange' },
  { id: 60, d: 'M 140 -35 L 170 -35 L 170 -65', delay: 0.7, color: 'blue' },
  { id: 61, d: 'M 35 140 L 35 170 L 60 170', delay: 0.72, color: 'blue' },
  { id: 62, d: 'M -35 140 L -35 175 L -65 175', delay: 0.74, color: 'orange' },
  { id: 63, d: 'M -140 35 L -175 35 L -175 65', delay: 0.76, color: 'blue' },
  { id: 64, d: 'M -140 -35 L -170 -35 L -170 -70', delay: 0.78, color: 'orange' },
]

// Colores por tipo
const COLORS = {
  blue: {
    base: 'rgba(59, 130, 246, 0.12)',
    pulse: 'url(#blueGradient)'
  },
  orange: {
    base: 'rgba(234, 88, 12, 0.12)',
    pulse: 'url(#orangeGradient)'
  }
}

// Línea de circuito fina con pulso de energía
function CircuitLine({ d, delay, color = 'blue' }) {
  const colors = COLORS[color]
  return (
    <g>
      {/* Línea base fina */}
      <motion.path
        d={d}
        fill="none"
        stroke={colors.base}
        strokeWidth="0.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1, delay, ease: "easeOut" }}
      />
      {/* Pulso de energía brillante */}
      <motion.path
        d={d}
        fill="none"
        stroke={colors.pulse}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#glow)"
        initial={{ pathLength: 0, pathOffset: 0 }}
        animate={{
          pathLength: [0, 0.35, 0.35, 0],
          pathOffset: [0, 0.15, 0.85, 1]
        }}
        transition={{
          duration: 3,
          delay: delay + 1,
          repeat: Infinity,
          repeatDelay: 2,
          ease: "linear"
        }}
      />
    </g>
  )
}

export function SlideCierre() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-slate-900">

      {/* Fondo con grid muy sutil */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="gridFine" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#gridFine)" />
        </svg>
      </div>

      {/* Gradientes de fondo */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/[0.03] rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/3 w-[300px] h-[300px] bg-orange-500/[0.02] rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/3 w-[300px] h-[300px] bg-amber-500/[0.02] rounded-full blur-3xl" />
      </div>

      {/* SVG de circuitos */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="-400 -380 800 760"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Gradiente azul para pulsos */}
          <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="30%" stopColor="#60a5fa" />
            <stop offset="50%" stopColor="#93c5fd" />
            <stop offset="70%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>

          {/* Gradiente naranja/amarillo para pulsos */}
          <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="30%" stopColor="#ea580c" />
            <stop offset="50%" stopColor="#fbbf24" />
            <stop offset="70%" stopColor="#ea580c" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>

          {/* Filtro de brillo para líneas */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Círculo central con gradiente */}
        <motion.circle
          cx="0"
          cy="0"
          r="145"
          fill="none"
          stroke="url(#circleGradient)"
          strokeWidth="1.5"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
        <defs>
          <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)" />
            <stop offset="50%" stopColor="rgba(234, 88, 12, 0.2)" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0.3)" />
          </linearGradient>
        </defs>

        {/* Red de circuitos finos */}
        {CIRCUIT_PATHS.map((circuit) => (
          <CircuitLine
            key={circuit.id}
            d={circuit.d}
            delay={circuit.delay}
            color={circuit.color}
          />
        ))}
      </svg>

      {/* Contenido central con transición Gracias -> Logo */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Texto "Gracias" que aparece primero y luego desaparece */}
        <motion.div
          className="absolute flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: [0, 1, 1, 0],
            scale: [0.8, 1, 1, 0.95]
          }}
          transition={{
            duration: 3,
            times: [0, 0.2, 0.7, 1],
            ease: "easeInOut"
          }}
        >
          <span className="text-6xl font-light tracking-widest text-white/90">
            Gracias
          </span>
        </motion.div>

        {/* Logo que aparece después */}
        <motion.div
          className="relative"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 2.5,
            ease: [0.16, 1, 0.3, 1]
          }}
        >
          {/* Glow dual azul/naranja */}
          <motion.div
            className="absolute -inset-8 rounded-full blur-3xl"
            style={{
              background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(234, 88, 12, 0.08) 50%, transparent 70%)'
            }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.4, 0.6, 0.4]
            }}
            transition={{
              duration: 4,
              delay: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Logo */}
          <img
            src="/assets/logo-white.png"
            alt="Observatorio Judicial"
            className="w-[360px] h-[360px] object-contain"
          />
        </motion.div>
      </div>

    </div>
  )
}
