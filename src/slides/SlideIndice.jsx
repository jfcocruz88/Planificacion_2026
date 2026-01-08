import { motion } from 'framer-motion'

const sections = [
  { num: '01', title: 'Resumen 2025', desc: 'Balance del año anterior', slide: 2 },
  { num: '02', title: 'Objetivos 2026', desc: 'Metas y enfoque estratégico', slide: 3 },
  { num: '03', title: 'Informes', desc: 'Publicaciones planificadas', slide: 4 },
  { num: '04', title: 'Actividades', desc: 'Seminarios y eventos', slide: 7 },
  { num: '05', title: 'Sentencias Destacadas', desc: 'Lanzamiento y novedades', slide: 8 },
  { num: '06', title: 'Vínculo con el Medio', desc: 'Comunicación y difusión', slide: 9 },
  { num: '07', title: 'Consejo Asesor', desc: 'Composición y cambios', slide: 10 },
]

export function SlideIndice({ goToSlide }) {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Fondo oscuro con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />

      {/* Patrón de líneas sutiles */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Acentos de color */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl" />

      {/* Contenido principal */}
      <div className="relative z-10 w-full h-full flex">

        {/* Columna izquierda - Título */}
        <div className="hidden lg:flex w-[35%] h-full flex-col justify-center pr-4" style={{ paddingLeft: 'var(--space-4xl)' }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-blue-400/60 tracking-[0.3em] uppercase" style={{ fontSize: 'var(--text-sm)' }}>
              Planificación 2026
            </span>
            <h2 className="font-bold text-white leading-tight" style={{ fontSize: 'var(--text-5xl)', marginTop: 'var(--space-md)' }}>
              Contenido
            </h2>
            <div className="w-16 sm:w-20 lg:w-28 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mt-3 sm:mt-4" />
          </motion.div>
        </div>

        {/* Título móvil */}
        <motion.div
          className="lg:hidden absolute top-8 left-0 right-0 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-white">Contenido</h2>
          <div className="w-12 h-0.5 bg-blue-400 mx-auto mt-3" />
        </motion.div>

        {/* Columna derecha - Lista de secciones */}
        <div className="flex-1 h-full flex items-center justify-start px-6 lg:pl-12 lg:pr-16">
          <motion.div
            className="space-y-2 lg:space-y-3 w-full max-w-md pt-16 lg:pt-0"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.08, delayChildren: 0.3 }
              }
            }}
          >
            {sections.map((section, index) => (
              <motion.button
                key={section.num}
                onClick={() => goToSlide(section.slide)}
                className="group w-full text-left"
                variants={{
                  hidden: { opacity: 0, x: 30 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { type: 'spring', stiffness: 300, damping: 30 }
                  }
                }}
                whileHover={{ x: 8 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="relative flex items-center gap-5 lg:gap-6 py-3 lg:py-4 px-4 lg:px-5
                  rounded-xl transition-all duration-300
                  hover:bg-white/5 border border-transparent hover:border-white/10">

                  {/* Número grande */}
                  <span className="text-3xl lg:text-4xl font-bold text-white/20
                    group-hover:text-blue-400/60 transition-colors duration-300
                    font-mono w-12 lg:w-14 shrink-0">
                    {section.num}
                  </span>

                  {/* Línea separadora */}
                  <div className="w-px h-10 lg:h-12 bg-white/10 group-hover:bg-blue-400/30
                    transition-colors duration-300 shrink-0" />

                  {/* Texto */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base lg:text-lg font-semibold text-white/80
                      group-hover:text-white transition-colors duration-300">
                      {section.title}
                    </h3>
                    <p className="text-xs lg:text-sm text-white/30 group-hover:text-white/50
                      transition-colors duration-300 mt-0.5">
                      {section.desc}
                    </p>
                  </div>

                  {/* Flecha */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 shrink-0">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="text-blue-400"
                    >
                      <path
                        d="M9 5l7 7-7 7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  {/* Línea de progreso inferior en hover */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-blue-400/50 to-transparent"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.button>
            ))}
          </motion.div>
        </div>

      </div>

      {/* Línea decorativa vertical entre columnas */}
      <div className="hidden lg:block absolute left-[35%] top-1/2 -translate-y-1/2 h-[55%]">
        <div className="w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
      </div>
    </div>
  )
}
