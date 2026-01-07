import { motion } from 'framer-motion'

const informes = [
  {
    num: '01',
    title: 'Radar Tributario',
    objetivo: 'Reeditar el seguimiento a los TTA, mediante un análisis de 12.000 sentencias sobre reclamaciones.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-slate-300">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2"/>
        <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 8v8M10 10c.4-.4 1-.6 2-.6 1.5 0 2 .6 2 1.3s-.5 1.1-2 1.4c-1.5.3-2 .7-2 1.4s.5 1.4 2 1.4c1 0 1.6-.2 2-.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    num: '02',
    title: 'Despidos injustificados a gran escala',
    objetivo: 'Medir los resultados de las demandas por despido injustificado para determinar el grado de imparcialidad de los tribunales laborales.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-slate-300">
        <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 7V5a4 4 0 0 1 8 0v2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M9 12l6 5M15 12l-6 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    num: '03',
    title: 'Propuesta de Reforma Ley 20.600',
    objetivo: 'En conjunto con ex jueces y académicos generar un documento con propuestas de ley concretas a nivel orgánico y de procedimiento.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-slate-300">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M14 2v6h6" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="12" cy="15" r="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 11v1M12 18v1M8 15h1M15 15h1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    num: '04',
    title: 'Radiografía de la vista de la causa',
    objetivo: 'Evaluar la gestión de las cortes de apelaciones en el uso de las tablas para los alegatos.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-slate-300">
        <rect x="3" y="4" width="13" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M3 9h13M8 4v5M12 4v5" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="18" cy="18" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M21 21l-1.5-1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    num: '05',
    title: '¿Es garantista el sistema penal?',
    objetivo: 'Evaluar con la evidencia disponible si los jueces penales son proclives a beneficiar a los imputados.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-slate-300">
        <path d="M12 3v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M3 10l9-4 9 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5 11l-2 8h6l-2-8M19 11l2 8h-6l2-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="19" r="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 10v6" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    )
  },
  {
    num: '06',
    title: 'Eficiencia en Juzgados Civiles de Santiago',
    objetivo: 'Medir la eficiencia de los juzgados civiles en la dictación de sentencias definitivas.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-slate-300">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8.5 2.5L12 4l3.5-1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M17.5 5.5l1 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    )
  }
]

export function SlideInformes1() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-slate-900">

      {/* Acentos sutiles */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-950/30 to-transparent" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-cyan-500/8 rounded-full blur-3xl" />

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
              <span className="text-cyan-400/80 text-sm tracking-[0.25em] uppercase font-medium">
                Publicaciones Planificadas
              </span>
              <h2 className="text-5xl font-bold text-white mt-3 tracking-tight">
                Informes 2026 — JFC
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mt-4 rounded-full"></div>
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
                <span className="text-2xl font-bold text-cyan-400 font-mono shrink-0 mt-0.5">
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
