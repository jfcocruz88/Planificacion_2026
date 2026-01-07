import { motion } from 'framer-motion'

const informes = [
  {
    num: '01',
    title: 'Radar Tributario',
    objetivo: 'Reeditar el seguimiento a los TTA, mediante un análisis de 12.000 sentencias sobre reclamaciones.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-slate-400">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
      </svg>
    )
  },
  {
    num: '02',
    title: 'Despidos injustificados a gran escala',
    objetivo: 'Medir los resultados de las demandas por despido injustificado para determinar el grado de imparcialidad de los tribunales laborales.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-slate-400">
        <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
        <path d="M5.5 21v-2a6.5 6.5 0 0 1 13 0v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M18 8l4 4m0-4l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    num: '03',
    title: 'Propuesta de Reforma Ley 20.600',
    objetivo: 'En conjunto con ex jueces y académicos generar un documento con propuestas de ley concretas a nivel orgánico y de procedimiento.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-slate-400">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 2v6h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 18v-6M9 15l3 3 3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    num: '04',
    title: 'Radiografía de la vista de la causa',
    objetivo: 'Evaluar la gestión de las cortes de apelaciones en el uso de las tablas para los alegatos.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-slate-400">
        <path d="M3 3v18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 16l4-8 4 5 5-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    num: '05',
    title: '¿Es garantista el sistema penal?',
    objetivo: 'Evaluar con la evidencia disponible si los jueces penales son proclives a beneficiar a los imputados.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-slate-400">
        <path d="M12 3L2 7l10 4 10-4-10-4z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 17l10 4 10-4M2 12l10 4 10-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    num: '06',
    title: 'Eficiencia en Juzgados Civiles de Santiago',
    objetivo: 'Medir la eficiencia de los juzgados civiles en la dictación de sentencias definitivas.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-slate-400">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  }
]

export function SlideInformes1() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-slate-900">

      {/* Acentos sutiles */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-950/30 to-transparent" />
      <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl" />

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
              <span className="text-blue-400/70 text-sm tracking-[0.25em] uppercase font-medium">
                Publicaciones Planificadas
              </span>
              <h2 className="text-5xl font-bold text-white mt-3 tracking-tight">
                Informes 2026 — JFC
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mt-4 rounded-full"></div>
            </div>
            <div className="ml-auto">
              <span className="px-5 py-2.5 bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-medium border border-emerald-500/30">
                6 informes
              </span>
            </div>
          </div>
        </motion.div>

        {/* Grid de informes - centrado verticalmente */}
        <motion.div
          className="flex-1 grid grid-cols-2 gap-5 content-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          {informes.map((informe, index) => (
            <motion.div
              key={informe.num}
              className="bg-white/[0.03] rounded-2xl p-6 border border-white/[0.06] hover:bg-white/[0.05] transition-colors"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.05 }}
            >
              {/* Header de card */}
              <div className="flex items-center gap-4 mb-4">
                <span className="text-2xl font-bold text-white/20 font-mono w-8">
                  {informe.num}
                </span>
                <div className="h-8 w-px bg-white/10"></div>
                <h3 className="text-lg font-semibold text-white flex-1 leading-snug">
                  {informe.title}
                </h3>
                <div className="w-11 h-11 rounded-xl bg-white/[0.05] flex items-center justify-center shrink-0">
                  {informe.icon}
                </div>
              </div>

              {/* Objetivo */}
              <p className="text-white/50 text-[15px] leading-relaxed pl-12">
                {informe.objetivo}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Indicador de navegación */}
        <motion.div
          className="mt-6 flex items-center justify-center gap-2 text-white/30 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <span>Continúa para ver informes JMA</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-white/30">
            <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>

      </div>
    </div>
  )
}
