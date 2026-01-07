import { motion } from 'framer-motion'
import { AnimatedBackground } from '../components/AnimatedBackground'

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

      {/* Fondo animado Bokeh */}
      <AnimatedBackground accentColor="cyan" />

      {/* Contenido */}
      <div className="relative z-10 w-full h-full px-20 py-12 flex flex-col">

        {/* Header */}
        <motion.div
          className="mb-8 shrink-0"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-cyan-400/80 text-sm tracking-[0.25em] uppercase font-medium">
            Publicaciones Planificadas
          </span>
          <h2 className="text-5xl font-bold text-white mt-3 tracking-tight">
            Informes 2026
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mt-4 rounded-full"></div>
        </motion.div>

        {/* Grid con imagen central */}
        <div className="flex-1 relative -mt-[8%]">

          {/* Imagen central - exactamente al centro */}
          <motion.div
            className="absolute z-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <div className="relative">
              <div className="w-[192px] h-[192px] rounded-full overflow-hidden ring-4 ring-slate-900 shadow-2xl shadow-cyan-500/20">
                <img
                  src="/assets/JFC.png"
                  alt="José Francisco Cruz"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full ring-2 ring-cyan-400/40"></div>
            </div>
          </motion.div>

          {/* Grid de informes */}
          <motion.div
            className="w-full h-full grid grid-cols-2 gap-x-[17rem] gap-y-10 content-center"
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
