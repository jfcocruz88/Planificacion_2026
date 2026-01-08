import { motion } from 'framer-motion'
import { AnimatedBackground } from '../components/AnimatedBackground'

const colorClasses = {
  amber: {
    overlay: 'from-amber-950/30 to-transparent',
    badge: 'bg-amber-500/20 text-amber-300 border border-amber-400/30',
    line: 'bg-gradient-to-r from-amber-400 to-amber-400/0',
    text: 'text-amber-400/80',
    dot: 'bg-amber-400',
    border: 'border-amber-500/20'
  },
  cyan: {
    overlay: 'from-cyan-950/30 to-transparent',
    badge: 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/30',
    line: 'bg-gradient-to-r from-cyan-400 to-cyan-400/0',
    text: 'text-cyan-400/80',
    dot: 'bg-cyan-400',
    border: 'border-cyan-500/20'
  },
  purple: {
    overlay: 'from-purple-950/30 to-transparent',
    badge: 'bg-purple-500/20 text-purple-300 border border-purple-400/30',
    line: 'bg-gradient-to-r from-purple-400 to-purple-400/0',
    text: 'text-purple-400/80',
    dot: 'bg-purple-400',
    border: 'border-purple-500/20'
  }
}

const actividades = [
  {
    num: '01',
    periodo: '1er Semestre',
    tipo: 'Lanzamiento',
    tema: 'Sentencias Destacadas 2024/2025',
    responsable: 'JMA',
    objetivo: 'Presentación del anuario de jurisprudencia con las sentencias más relevantes del período, desde la perspectiva de las políticas públicas.',
    imagen: '/portada-sentencias-destacadas.jpg',
    color: 'amber'
  },
  {
    num: '02',
    periodo: '1er Semestre',
    tipo: 'Seminario',
    tema: 'Vista de la causa',
    responsable: 'JMA',
    objetivo: 'Exponer los datos del informe para generar un espacio de diagnóstico y propuestas para mejorar el sistema de revisión de causas en las cortes de apelaciones.',
    imagen: '/seminario-vista-causa.jpg',
    color: 'cyan'
  },
  {
    num: '03',
    periodo: '2do Semestre',
    tipo: 'Seminario',
    tema: 'Cárceles',
    responsable: 'JMA',
    objetivo: 'Analizar los desafíos del sistema carcelario y las propuestas de política pública asociadas, con énfasis en su impacto sobre la actividad jurisdiccional.',
    imagen: '/seminario-carcel.png',
    color: 'purple'
  }
]

export function SlideActividades() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-slate-950">

      {/* Fondo animado Bokeh */}
      <AnimatedBackground accentColor="amber" />

      {/* Contenido */}
      <div className="relative z-10 w-full h-full px-4 sm:px-8 md:px-12 lg:px-16 py-6 sm:py-8 lg:py-10 flex flex-col slide-scroll lg:overflow-hidden">

        {/* Header */}
        <motion.div
          className="mb-4 sm:mb-6 lg:mb-8 shrink-0"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-blue-400/70 text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.25em] uppercase font-medium">
            Agenda 2026
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2 sm:mt-3 tracking-tight">
            Lanzamiento y seminarios
          </h2>
          <div className="w-16 sm:w-20 lg:w-28 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 mt-3 sm:mt-4 rounded-full"></div>
        </motion.div>

        {/* Grid de seminarios con imágenes - responsive */}
        <div className="flex-1 flex items-start lg:items-center justify-center pb-4 lg:pb-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-12 w-full max-w-7xl lg:h-[70%]">
          {actividades.map((actividad, index) => (
            <motion.div
              key={actividad.num}
              className="relative rounded-2xl overflow-hidden group cursor-default"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                delay: 0.15 + index * 0.2,
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1]
              }}
            >
              {/* Imagen de fondo */}
              <div className="absolute inset-0">
                <img
                  src={actividad.imagen}
                  alt={actividad.tema}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay gradiente sofisticado */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/40" />

                {/* Viñeta sutil */}
                <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.5)]" />
              </div>

              {/* Contenido superpuesto */}
              <div className="relative h-full p-5">

                {/* Número - posición absoluta arriba */}
                <motion.span
                  className="absolute top-5 left-5 text-4xl font-bold text-white/60 font-mono"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.2 }}
                >
                  {actividad.num}
                </motion.span>

                {/* Contenido principal - altura fija, posicionado abajo, títulos alineados arriba */}
                <div className="absolute bottom-5 left-5 right-5 h-[200px]">
                  {/* Línea decorativa */}
                  <motion.div
                    className={`w-10 h-0.5 mb-3 rounded-full ${colorClasses[actividad.color].line}`}
                    initial={{ width: 0 }}
                    animate={{ width: 40 }}
                    transition={{ delay: 0.6 + index * 0.2, duration: 0.4 }}
                  />

                  {/* Tema */}
                  <motion.h3
                    className="text-3xl font-bold text-white mb-4 tracking-tight"
                    style={{ textShadow: '0 2px 12px rgba(0,0,0,0.9), 0 4px 20px rgba(0,0,0,0.6)' }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.2 }}
                  >
                    {actividad.tema}
                  </motion.h3>

                  {/* Objetivo */}
                  <motion.p
                    className="text-white/70 text-sm leading-relaxed line-clamp-4 font-light"
                    style={{ textShadow: '0 1px 6px rgba(0,0,0,0.9)' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 + index * 0.2 }}
                  >
                    {actividad.objetivo}
                  </motion.p>
                </div>
              </div>

              {/* Borde sutil con glow */}
              <div className={`absolute inset-0 rounded-2xl border ${colorClasses[actividad.color].border} pointer-events-none`} />
            </motion.div>
          ))}
          </div>
        </div>

      </div>
    </div>
  )
}
