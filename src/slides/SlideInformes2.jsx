import { motion } from 'framer-motion'

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

      {/* Acentos sutiles */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-950/30 to-transparent" />
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-3xl" />

      {/* Contenido */}
      <div className="relative z-10 w-full h-full px-20 py-12 flex flex-col">

        {/* Header */}
        <motion.div
          className="mb-10 shrink-0"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center gap-4">
            <div>
              <span className="text-purple-400/80 text-sm tracking-[0.25em] uppercase font-medium">
                Publicaciones Planificadas
              </span>
              <h2 className="text-5xl font-bold text-white mt-3 tracking-tight">
                Informes 2026 — JMA
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-blue-500 mt-4 rounded-full"></div>
            </div>
          </div>
        </motion.div>

        {/* Grid de informes */}
        <motion.div
          className="flex-1 grid grid-cols-2 gap-6 content-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          {informes.map((informe, index) => (
            <motion.div
              key={informe.num}
              className="group relative rounded-2xl p-7 border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
              style={{
                background: 'linear-gradient(to bottom, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.02) 100%)'
              }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.05 }}
            >
              {/* Número decorativo de fondo */}
              <span className="absolute top-4 right-4 text-[4rem] font-bold text-white/[0.03] font-mono leading-none select-none">
                {informe.num}
              </span>

              {/* Header de card */}
              <div className="flex items-start gap-4 mb-5 relative">
                {/* Número */}
                <span className="text-2xl font-bold text-purple-400 font-mono shrink-0 mt-0.5">
                  {informe.num}
                </span>

                <div className="h-12 w-px bg-gradient-to-b from-white/20 to-transparent shrink-0"></div>

                {/* Título con altura mínima */}
                <h3 className="text-[17px] font-semibold text-white flex-1 leading-snug min-h-[44px] flex items-center">
                  {informe.title}
                </h3>

                {/* Ícono con fondo circular */}
                <div className="w-12 h-12 rounded-full bg-white/[0.06] border border-white/[0.08] flex items-center justify-center shrink-0 group-hover:bg-white/[0.1] transition-colors">
                  {informe.icon}
                </div>
              </div>

              {/* Objetivo */}
              <p className="text-[#B8C0CC] text-[15px] leading-[1.65] pl-14">
                {informe.objetivo}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  )
}
