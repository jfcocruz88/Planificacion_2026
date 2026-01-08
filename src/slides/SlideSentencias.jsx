import { motion } from 'framer-motion'
import { AnimatedBackground } from '../components/AnimatedBackground'

const tareasSentencias = [
  'Convocar al Comité Editorial para selección de sentencias',
  'Publicar comentarios en el sitio web',
  'Difundir y promover los comentarios',
]

const tareasConsejo = [
  'Evaluar nuevas incorporaciones al Consejo',
  'Coordinar sesiones con el nuevo presidente',
]

export function SlideSentencias() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-slate-900">

      {/* Fondo animado Bokeh */}
      <AnimatedBackground accentColor="cyan" />

      {/* Contenido */}
      <div className="relative z-10 w-full h-full py-6 sm:py-8 lg:py-10 flex flex-col slide-scroll lg:overflow-hidden">

        {/* Header - con su propio padding izquierdo reducido */}
        <motion.div
          className="mb-4 sm:mb-6 lg:mb-6 shrink-0 pt-[3%] lg:pt-[4%] pl-4 sm:pl-6 md:pl-8 lg:pl-10"
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

        {/* Grid principal - centrado independiente */}
        <motion.div
          className="flex-1 flex items-start justify-center pt-[2%] lg:pt-[3%]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">

            {/* Card: Sentencias Destacadas */}
            <motion.div
              className="relative rounded-2xl p-6 lg:p-8 flex flex-col w-[520px] lg:w-[600px] h-[540px] lg:h-[590px] bg-gradient-to-br from-white/[0.04] to-white/[0.01] backdrop-blur-sm border border-white/[0.08]"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              {/* Glow interno sutil */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/[0.015] to-transparent pointer-events-none" />

              {/* Header de card */}
              <div className="relative mb-5 flex items-center gap-4">
                <h3 className="text-white text-sm lg:text-base font-semibold uppercase tracking-[0.2em] shrink-0">Sentencias Destacadas</h3>
                <div className="flex-1 h-px bg-gradient-to-r from-cyan-400/40 to-transparent"></div>
              </div>

              {/* SECCIÓN: Última edición - Hero del libro - altura fija */}
              <motion.div
                className="relative flex items-center gap-5 h-[160px] lg:h-[180px] shrink-0"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                {/* Portada del libro */}
                <div className="relative shrink-0">
                  {/* Capa de fondo decorativa */}
                  <div className="absolute -inset-1 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-xl blur-sm" />
                  {/* Reflejo/sombra inferior */}
                  <div className="absolute -bottom-3 left-2 right-2 h-6 bg-gradient-to-t from-cyan-500/5 to-transparent blur-md rounded-full" />
                  {/* Imagen principal */}
                  <div className="relative w-28 h-[140px] lg:w-32 lg:h-[160px] rounded-xl overflow-hidden shadow-xl shadow-cyan-500/10 border border-white/10">
                    <img
                      src="/portada-sentencias.jpg"
                      alt="Portada Sentencias Destacadas 2024-2025"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1">
                  <p className="text-white text-lg lg:text-xl font-bold leading-tight">
                    Última edición impresa
                  </p>
                  <p className="text-white/80 text-sm mt-3 leading-relaxed">
                    La edición <span className="text-cyan-400 font-semibold">2024-2025</span> marca el cierre de la publicación física
                  </p>
                  <p className="text-white/60 text-sm mt-2">
                    Futuras ediciones serán <span className="text-cyan-400/80">digitales</span>
                  </p>
                </div>
              </motion.div>

              {/* Separador con gradiente */}
              <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-5 lg:my-6"></div>

              {/* SECCIÓN: Tareas 2026 */}
              <div className="flex-1 relative">
                <p className="text-white/60 text-xs uppercase tracking-[0.2em] font-semibold mb-4">Tareas 2026</p>

                <div className="space-y-3 lg:space-y-3.5">
                  {tareasSentencias.map((tarea, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3 p-3.5 lg:p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-cyan-500/20 transition-all duration-300 group"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                    >
                      {/* Indicador con glow */}
                      <div className="relative">
                        <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 shrink-0" />
                        <div className="absolute inset-0 rounded-full bg-cyan-400/30 blur-sm group-hover:blur-md transition-all" />
                      </div>
                      {/* Texto */}
                      <span className="text-white/90 text-sm leading-relaxed group-hover:text-white transition-colors">
                        {tarea}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Card: Consejo Asesor - mismo tamaño */}
            <motion.div
              className="relative rounded-2xl p-6 lg:p-8 flex flex-col w-[520px] lg:w-[600px] h-[540px] lg:h-[590px] bg-gradient-to-br from-white/[0.04] to-white/[0.01] backdrop-blur-sm border border-white/[0.08]"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              {/* Glow interno sutil */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-500/[0.01] to-transparent pointer-events-none" />

              {/* Header de card */}
              <div className="relative mb-5 flex items-center gap-4">
                <h3 className="text-white text-sm lg:text-base font-semibold uppercase tracking-[0.2em] shrink-0">Consejo Asesor</h3>
                <div className="flex-1 h-px bg-gradient-to-r from-amber-400/40 to-transparent"></div>
              </div>

              {/* SECCIÓN: Nuevo presidente - Hero - altura fija alineada */}
              <motion.div
                className="relative flex items-center gap-5 h-[160px] lg:h-[180px] shrink-0"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
              >
                {/* Imagen con capas de profundidad */}
                <div className="relative shrink-0">
                  {/* Cuadrado decorativo detrás */}
                  <div className="absolute -inset-2 bg-gradient-to-br from-amber-500/8 to-amber-600/3 rounded-2xl -rotate-3" />
                  {/* Reflejo/sombra inferior */}
                  <div className="absolute -bottom-3 left-2 right-2 h-5 bg-gradient-to-t from-amber-500/5 to-transparent blur-md rounded-full" />
                  {/* Imagen principal */}
                  <div className="relative w-28 h-28 lg:w-32 lg:h-32 rounded-2xl overflow-hidden shadow-xl shadow-amber-500/5 border border-white/10">
                    <img
                      src="/fermandois.jpg"
                      alt="Arturo Fermandois"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  {/* Badge NUEVO */}
                  <div className="absolute -top-2 -right-2 px-2 py-0.5 bg-amber-500 text-slate-900 text-xs font-bold rounded-lg shadow-lg shadow-amber-500/30">
                    NUEVO
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1">
                  <p className="text-amber-400/90 text-xs uppercase tracking-[0.15em] font-semibold">Presidente del Consejo</p>
                  <p className="text-white text-xl lg:text-2xl font-bold mt-2 leading-tight">
                    Arturo Fermandois
                  </p>
                  <p className="text-white/80 text-sm mt-2.5 leading-relaxed">Abogado, ex embajador de Chile</p>
                  <p className="text-white/60 text-sm mt-1">
                    Asume en <span className="text-amber-400/90 font-medium">mayo 2026</span>
                  </p>
                </div>
              </motion.div>

              {/* Separador con gradiente */}
              <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-5 lg:my-6"></div>

              {/* SECCIÓN: Tareas 2026 */}
              <div className="flex-1 relative">
                <p className="text-white/60 text-xs uppercase tracking-[0.2em] font-semibold mb-4">Tareas 2026</p>

                <div className="space-y-3 lg:space-y-3.5">
                  {tareasConsejo.map((tarea, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3 p-3.5 lg:p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] hover:border-amber-500/20 transition-all duration-300 group"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      {/* Indicador con glow */}
                      <div className="relative">
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-400 shrink-0" />
                        <div className="absolute inset-0 rounded-full bg-amber-400/30 blur-sm group-hover:blur-md transition-all" />
                      </div>
                      {/* Texto */}
                      <span className="text-white/90 text-sm leading-relaxed group-hover:text-white transition-colors">
                        {tarea}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Espacio inferior decorativo - breathing room intencional */}
                <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-white/10"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500/20"></div>
                  <div className="w-1 h-1 rounded-full bg-white/10"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </div>
  )
}
