import { motion } from 'framer-motion'
import { AnimatedBackground } from '../components/AnimatedBackground'

const informes = [
  {
    num: '07',
    title: 'Administrativo-sancionatorio',
    objetivo: '¿Cómo le va a las Superintendencias? Medir la consistencia, proporcionalidad y control judicial de las sanciones administrativas.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-slate-300">
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
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-slate-300">
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
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-slate-300">
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
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-slate-300">
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
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-slate-300">
        <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    num: '12',
    title: 'El lento regreso al antiguo sistema procesal penal',
    objetivo: 'Analizar el funcionamiento del sistema procesal penal, identificando los principales cuellos de botella que explican la duración de los procesos y formulando propuestas de mejora.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-slate-300">
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
      <div className="relative z-10 w-full h-full px-20 py-12 flex flex-col">

        {/* Header */}
        <motion.div
          className="mb-8 shrink-0"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-purple-400/80 text-sm tracking-[0.25em] uppercase font-medium">
            Publicaciones Planificadas
          </span>
          <h2 className="text-5xl font-bold text-white mt-3 tracking-tight">
            Informes 2026
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-blue-500 mt-4 rounded-full"></div>
        </motion.div>

        {/* Grid con imagen central */}
        <div className="flex-1 relative flex items-center">

          {/* Imagen central - exactamente al centro */}
          <motion.div
            className="absolute z-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="relative">
              <div className="w-[192px] h-[192px] rounded-full overflow-hidden ring-4 ring-slate-900 shadow-2xl shadow-purple-500/20">
                <img
                  src="/assets/JMA.png"
                  alt="José Manuel Álvarez"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full ring-2 ring-purple-400/40"></div>
            </div>
          </motion.div>

          {/* Grid de informes */}
          <motion.div
            className="w-full grid grid-cols-2 gap-x-[17rem] gap-y-8"
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
                    <div className="w-9 h-9 rounded-full bg-white/[0.06] border border-white/[0.08] flex items-center justify-center shrink-0 group-hover:bg-white/[0.1] transition-colors">
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
