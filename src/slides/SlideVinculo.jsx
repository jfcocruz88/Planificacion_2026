import { motion } from 'framer-motion'

const areas = [
  {
    num: '01',
    title: 'Trabajo en Prensa',
    description: 'Posicionar al Observatorio Judicial, a nivel de opinión pública, como un referente en innovación con inteligencia artificial.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-blue-400/70">
        <path d="M4 4h16v2H4V4zm0 4h10v2H4V8zm0 4h16v2H4v-2zm0 4h10v2H4v-2zm0 4h16v2H4v-2z" fill="currentColor"/>
      </svg>
    )
  },
  {
    num: '02',
    title: 'Multimedia',
    items: [
      'Continuar con el formato entrevista "Podcast"',
      'Informe en 1 minuto',
      'Explotar la creación de contenido visual con avatares digitales'
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-purple-400/70">
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M10 9l5 3-5 3V9z" fill="currentColor"/>
        <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    num: '03',
    title: 'Diseño Gráfico',
    description: 'Implementar el nuevo diseño gráfico de los informes.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-emerald-400/70">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
        <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor"/>
        <path d="M21 15l-5-5L5 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  }
]

export function SlideVinculo() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-slate-900">

      {/* Acentos sutiles */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-950/30 to-transparent" />
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl" />

      {/* Contenido */}
      <div className="relative z-10 w-full h-full px-16 py-10 flex flex-col">

        {/* Header */}
        <motion.div
          className="mb-8 shrink-0"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-blue-400/70 text-sm tracking-[0.25em] uppercase font-medium">
            Estrategia de Comunicación
          </span>
          <h2 className="text-5xl font-bold text-white mt-3 tracking-tight">
            Vínculo con el Medio
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mt-4 rounded-full"></div>
        </motion.div>

        {/* Grid de áreas */}
        <motion.div
          className="flex-1 grid grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          {areas.map((area, index) => (
            <motion.div
              key={area.num}
              className="bg-white/[0.03] rounded-xl p-6 border border-white/[0.06] flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              {/* Header de card */}
              <div className="flex items-center gap-4 mb-5">
                <span className="text-3xl font-bold text-white/20 font-mono">
                  {area.num}
                </span>
                <div className="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent"></div>
                <div className="w-10 h-10 rounded-lg bg-white/[0.05] flex items-center justify-center">
                  {area.icon}
                </div>
              </div>

              {/* Título */}
              <h3 className="text-xl font-semibold text-white mb-4">
                {area.title}
              </h3>

              {/* Contenido: descripción o lista */}
              <div className="flex-1">
                {area.description ? (
                  <p className="text-white/50 text-[15px] leading-relaxed">
                    {area.description}
                  </p>
                ) : (
                  <ul className="space-y-3">
                    {area.items?.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-[15px] text-white/50">
                        <span className="text-blue-400/60 mt-1.5 text-xs">●</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Footer decorativo */}
              <div className="mt-5 pt-4 border-t border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                    className={index === 0 ? 'text-blue-400/50' : index === 1 ? 'text-purple-400/50' : 'text-emerald-400/50'}>
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <span className="text-white/40 text-sm">Difusión externa</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  )
}
