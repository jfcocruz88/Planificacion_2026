import { motion } from 'framer-motion'
import { AnimatedBackground } from '../components/AnimatedBackground'

const informes = [
  {
    num: '07',
    title: 'Administrativo-sancionatorio',
    objetivo: '¿Cómo le va a las Superintendencias? Medir la consistencia, proporcionalidad y control judicial de las sanciones administrativas.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-slate-400">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 8v4M12 16h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    num: '08',
    title: 'Macrozona Sur',
    objetivo: 'Evaluar el desempeño del sistema de persecución penal en causas vinculadas a violencia rural y terrorismo en las regiones de Biobío, La Araucanía, Los Ríos y Los Lagos.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-slate-400">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    )
  },
  {
    num: '09',
    title: 'Bloques de votación en la Corte Suprema',
    objetivo: 'Revisar la conformación de los bloques de votación, tras los cambios de integración en la Corte Suprema, especialmente en la Tercera Sala.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-slate-400">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    num: '10',
    title: 'Ley Karin',
    objetivo: 'Analizar el número de causas judiciales ingresadas por concepto de esta ley y su impacto en el sistema de justicia laboral.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-slate-400">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 14l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    num: '11',
    title: 'Bloques de votación en el Tribunal Constitucional',
    objetivo: 'Revisar la conformación de los bloques de votación, tras los cambios en la integración.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-slate-400">
        <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    num: '12',
    title: 'El lento regreso al antiguo sistema procesal penal',
    objetivo: 'Analizar el funcionamiento del sistema procesal penal, identificando los principales cuellos de botella que explican la duración de los procesos y formulando propuestas de mejora.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-slate-400">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4 4l2.5 2.5M4 4v2.5M4 4h2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  }
]

export function SlideInformes2() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-slate-900">

      {/* Fondo animado Bokeh */}
      <AnimatedBackground accentColor="purple" />

      {/* Contenido */}
      <div className="relative z-10 w-full h-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-6 sm:py-8 lg:py-12 flex flex-col slide-scroll lg:overflow-hidden">

        {/* Header */}
        <motion.div
          className="mb-4 sm:mb-6 lg:mb-8 shrink-0"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-purple-400/80 text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.25em] uppercase font-medium">
            Publicaciones Planificadas
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2 sm:mt-3 tracking-tight">
            Informes 2026
          </h2>
          <div className="w-16 sm:w-20 lg:w-28 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 mt-3 sm:mt-4 rounded-full"></div>
        </motion.div>

        {/* Grid con imagen central */}
        <div className="flex-1 relative flex items-start lg:items-center">

          {/* Imagen central - oculta en móvil */}
          <motion.div
            className="hidden lg:block absolute z-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="relative">
              <div className="w-[140px] h-[140px] xl:w-[192px] xl:h-[192px] rounded-full overflow-hidden ring-4 ring-slate-900 shadow-2xl shadow-purple-500/20">
                <img
                  src="/assets/JMA.png"
                  alt="José Manuel Álvarez"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full ring-2 ring-purple-400/40"></div>
            </div>
          </motion.div>

          {/* Grid de informes - responsive */}
          <motion.div
            className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-4 lg:gap-x-[10rem] xl:gap-x-[17rem] gap-y-4 sm:gap-y-6 lg:gap-y-8 pb-4 lg:pb-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
          >
            {informes.map((informe, index) => (
              <motion.div
                key={informe.num}
                className="group relative rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: 'linear-gradient(to bottom, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.02) 100%)',
                  padding: '1.5rem'
                }}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.05 }}
              >
                  {/* Header de card */}
                  <div className="flex items-start gap-3 mb-4 relative">
                    <span className="text-[23px] font-bold text-blue-400 font-mono shrink-0">
                      {informe.num}
                    </span>
                    <div className="h-8 w-px bg-gradient-to-b from-white/25 to-transparent shrink-0"></div>
                    <h3 className="text-[22px] font-bold text-white flex-1 leading-tight tracking-[-0.01em]">
                      {informe.title}
                    </h3>
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110"
                      style={{
                        background: 'linear-gradient(145deg, rgba(30,41,59,0.8), rgba(15,23,42,0.9))',
                        boxShadow: 'inset 2px 2px 4px rgba(0,0,0,0.3), inset -2px -2px 4px rgba(255,255,255,0.05), 0 4px 12px rgba(0,0,0,0.2)'
                      }}
                    >
                      {informe.icon}
                    </div>
                  </div>

                  {/* Objetivo */}
                  <div className="pl-11 flex gap-2.5">
                    <div className="w-[2px] rounded-full bg-gradient-to-b from-blue-400/50 to-blue-400/10 shrink-0"></div>
                    <p className="text-[#C8D0DC] text-[18px] leading-[1.65]">
                      {informe.objetivo}
                    </p>
                  </div>
                </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </div>
  )
}
