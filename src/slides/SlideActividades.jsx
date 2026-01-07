import { motion } from 'framer-motion'

const seminarios = [
  {
    num: '01',
    periodo: '1er Semestre',
    tema: 'Vista de la causa',
    responsable: 'JMA',
    objetivo: 'Exponer los datos del informe para generar un espacio de diagnóstico y propuestas para mejorar el sistema de revisión de causas en las cortes de apelaciones.'
  },
  {
    num: '02',
    periodo: '2do Semestre',
    tema: 'Cárceles',
    responsable: 'JMA',
    objetivo: 'Analizar los desafíos del sistema carcelario y las propuestas de política pública asociadas, con énfasis en su impacto sobre la actividad jurisdiccional.'
  }
]

export function SlideActividades() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-slate-900">

      {/* Acentos sutiles */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-950/30 to-transparent" />
      <div className="absolute -top-40 -right-40 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-3xl" />

      {/* Contenido */}
      <div className="relative z-10 w-full h-full px-16 py-10 flex flex-col">

        {/* Header */}
        <motion.div
          className="mb-8 shrink-0"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-blue-400/70 text-sm tracking-[0.25em] uppercase font-medium">
            Agenda 2026
          </span>
          <h2 className="text-5xl font-bold text-white mt-3 tracking-tight">
            Actividades
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mt-4 rounded-full"></div>
          <p className="text-white/50 text-base mt-4">
            Seminarios planificados para el año
          </p>
        </motion.div>

        {/* Grid de seminarios */}
        <motion.div
          className="flex-1 grid grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          {seminarios.map((seminario, index) => (
            <motion.div
              key={seminario.num}
              className="bg-white/[0.03] rounded-xl p-6 border border-white/[0.06] flex flex-col"
              initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.15 }}
            >
              {/* Header de card */}
              <div className="flex items-center gap-3 mb-5">
                <span className="text-3xl font-bold text-white/20 font-mono">
                  {seminario.num}
                </span>
                <div className="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent"></div>
              </div>

              {/* Badge de período */}
              <div className="mb-4">
                <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium
                  ${index === 0
                    ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                    : 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                  }`}>
                  {seminario.periodo}
                </span>
              </div>

              {/* Tema */}
              <h3 className="text-2xl font-bold text-white mb-3">
                {seminario.tema}
              </h3>

              {/* Responsable */}
              <div className="mb-4">
                <span className="text-white/40 text-sm">Responsable: </span>
                <span className="text-white/70 text-sm font-medium">{seminario.responsable}</span>
              </div>

              {/* Objetivo */}
              <p className="text-white/50 text-[15px] leading-relaxed flex-1">
                <span className="text-white/70 font-medium">Objetivo: </span>
                {seminario.objetivo}
              </p>

              {/* Línea decorativa inferior */}
              <div className={`mt-5 pt-4 border-t border-white/[0.06]`}>
                <div className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                    className={index === 0 ? 'text-cyan-400/50' : 'text-purple-400/50'}>
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-white/40 text-sm">Seminario abierto</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div
          className="mt-6 flex items-center justify-center gap-3 text-white/30 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div className="w-12 h-px bg-gradient-to-r from-transparent to-white/20"/>
          <span>2 seminarios de alto impacto</span>
          <div className="w-12 h-px bg-gradient-to-l from-transparent to-white/20"/>
        </motion.div>

      </div>
    </div>
  )
}
