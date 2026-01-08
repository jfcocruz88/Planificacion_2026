import { motion } from 'framer-motion'

const tareasSentencias = [
  'Última edición impresa del libro',
  'Convocar al Comité Editorial durante marzo para selección de sentencias',
  'Continuar con la publicación de los comentarios en el sitio web',
  'Buscar más fórmulas para difundir y promover los comentarios',
]

export function SlideSentencias() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-slate-900">

      {/* Acentos sutiles - responsive */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-950/30 to-transparent" />
      <div className="absolute -top-20 -right-20 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] bg-indigo-500/10 rounded-full blur-3xl" />

      {/* Contenido */}
      <div className="relative z-10 w-full h-full px-4 sm:px-8 md:px-12 lg:px-16 py-6 sm:py-8 lg:py-10 flex flex-col slide-scroll lg:overflow-hidden">

        {/* Header */}
        <motion.div
          className="mb-4 sm:mb-6 lg:mb-8 shrink-0"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-blue-400/70 text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.25em] uppercase font-medium">
            Otros
          </span>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mt-2 sm:mt-3 tracking-tight">
            Sentencias Destacadas y Consejo Asesor
          </h2>
          <div className="w-16 sm:w-20 lg:w-28 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 mt-3 sm:mt-4 rounded-full"></div>
        </motion.div>

        {/* Grid principal - cards cuadradas centradas */}
        <motion.div
          className="flex-1 flex items-center justify-center pb-4 lg:pb-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-9 sm:gap-12 lg:gap-16">
            {/* Card: Sentencias Destacadas */}
            <motion.div
              className="bg-white/[0.03] rounded-2xl p-7 border border-white/[0.06] flex flex-col w-[486px] h-[486px] sm:w-[525px] sm:h-[525px] lg:w-[567px] lg:h-[567px]"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              {/* Header de card */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="text-cyan-400">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-white text-xl font-semibold">Sentencias Destacadas</h3>
                  <p className="text-white/40 text-sm">Edición 2024-2025</p>
                </div>
              </div>

              {/* Lista de tareas */}
              <div className="flex-1 overflow-hidden">
                <ul className="space-y-4">
                  {tareasSentencias.map((tarea, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.08 }}
                    >
                      <span className="w-7 h-7 rounded-full border border-cyan-500/30 flex items-center justify-center shrink-0 mt-0.5 bg-cyan-500/10">
                        <span className="text-cyan-400/80 text-sm font-mono">{index + 1}</span>
                      </span>
                      <span className="text-white/70 text-lg leading-relaxed">
                        {tarea}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Card: Consejo Asesor */}
            <motion.div
              className="bg-white/[0.03] rounded-2xl p-7 border border-white/[0.06] flex flex-col w-[486px] h-[486px] sm:w-[525px] sm:h-[525px] lg:w-[567px] lg:h-[567px]"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              {/* Header de card */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/20 flex items-center justify-center">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="text-indigo-400">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-white text-xl font-semibold">Consejo Asesor</h3>
                  <p className="text-white/40 text-sm">Gobernanza</p>
                </div>
              </div>

              {/* Contenido */}
              <div className="flex-1 flex flex-col justify-center">
                {/* Nuevo presidente */}
                <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-xl p-6 border border-indigo-500/20 mb-5">
                  <span className="text-indigo-400/80 text-sm uppercase tracking-wider font-medium">Nuevo Presidente</span>
                  <div className="text-2xl font-bold text-white mt-2">
                    Arturo Fermandois
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="px-3 py-1.5 bg-amber-500/20 text-amber-400 rounded text-sm font-medium border border-amber-500/30">
                      Mayo 2026
                    </span>
                  </div>
                </div>

                {/* Tarea adicional */}
                <div className="flex items-start gap-4 p-5 bg-white/[0.02] rounded-xl">
                  <span className="w-7 h-7 rounded-full border border-indigo-500/30 flex items-center justify-center shrink-0 mt-0.5 bg-indigo-500/10">
                    <span className="text-indigo-400/80 text-sm font-mono">1</span>
                  </span>
                  <span className="text-white/70 text-lg leading-relaxed">
                    Evaluar nuevas incorporaciones al Consejo del Observatorio
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </div>
  )
}
