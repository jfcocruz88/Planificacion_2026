import { motion } from 'framer-motion'

const tareas = [
  { text: 'Última edición impresa del libro', highlight: false },
  { text: 'Convocar al Comité Editorial durante marzo para selección de sentencias', highlight: false },
  { text: 'Continuar con la publicación de los comentarios en el sitio web', highlight: false },
  { text: 'Buscar más fórmulas para difundir y promover los comentarios', highlight: false },
]

export function SlideSentencias() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-slate-900">

      {/* Acentos sutiles */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-950/30 to-transparent" />
      <div className="absolute -top-40 -right-40 w-[400px] h-[400px] bg-red-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-3xl" />

      {/* Contenido */}
      <div className="relative z-10 w-full h-full px-16 py-10 flex flex-col">

        {/* Header */}
        <motion.div
          className="mb-8 shrink-0"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-blue-400/70 text-sm tracking-[0.25em] uppercase font-medium">
            Edición 2024-2025
          </span>
          <h2 className="text-5xl font-bold text-white mt-3 tracking-tight">
            Sentencias Destacadas
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mt-4 rounded-full"></div>
        </motion.div>

        {/* Grid principal */}
        <motion.div
          className="flex-1 grid grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          {/* Card: Lanzamiento */}
          <motion.div
            className="bg-white/[0.03] rounded-xl p-6 border border-white/[0.06] flex flex-col"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            {/* Header de card */}
            <div className="flex items-center gap-3 mb-5">
              <h3 className="text-white text-sm uppercase tracking-[0.15em] font-semibold">Lanzamiento</h3>
              <div className="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent"></div>
            </div>

            {/* Fecha destacada */}
            <div className="flex-1 flex flex-col justify-center">
              <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-xl p-6 border border-red-500/20">
                <div className="text-center">
                  <span className="text-red-400/80 text-sm uppercase tracking-wider font-medium">Fecha</span>
                  <div className="text-4xl font-bold text-white mt-2 mb-1">
                    20 de Enero de 2026
                  </div>
                  <span className="text-white/50 text-lg">18:30 horas</span>
                </div>
              </div>

              {/* Detalles adicionales */}
              <div className="mt-6 pt-4 border-t border-white/[0.06]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-red-400">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-white/90 text-sm font-medium">Última edición impresa</p>
                    <p className="text-white/40 text-xs">Formato libro físico</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card: Plan de trabajo */}
          <motion.div
            className="bg-white/[0.03] rounded-xl p-6 border border-white/[0.06] flex flex-col"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            {/* Header de card */}
            <div className="flex items-center gap-3 mb-5">
              <h3 className="text-white text-sm uppercase tracking-[0.15em] font-semibold">Plan de trabajo</h3>
              <div className="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent"></div>
            </div>

            {/* Lista de tareas */}
            <div className="flex-1 flex flex-col justify-center">
              <ul className="space-y-4">
                {tareas.map((tarea, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.08 }}
                  >
                    <span className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center shrink-0 mt-0.5 bg-white/[0.03]">
                      <span className="text-blue-400/80 text-xs font-mono">{String(index + 1).padStart(2, '0')}</span>
                    </span>
                    <span className="text-white/70 text-[15px] leading-relaxed">
                      {tarea.text}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Footer de card */}
            <div className="mt-5 pt-4 border-t border-white/[0.06]">
              <div className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-cyan-400/50">
                  <path d="M9 11l3 3L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-white/40 text-sm">4 tareas pendientes</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </div>
  )
}
