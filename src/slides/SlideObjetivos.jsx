import { motion } from 'framer-motion'

const objectives = [
  {
    num: '01',
    title: 'Extracción y análisis de datos',
    description: 'Seguir consolidando el uso de IA para la extracción y análisis de datos a gran escala.'
  },
  {
    num: '02',
    title: 'Diseño y difusión',
    description: 'Utilizar la IA para mejorar el diseño gráfico y difusión de nuestro contenido.'
  },
  {
    num: '03',
    title: 'Políticas públicas',
    description: 'Desarrollar contenido orientado a mejorar políticas públicas en materia judicial.'
  }
]

export function SlideObjetivos() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-slate-900">

      {/* Imagen de fondo */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        <motion.img
          src="/assets/helix-ia.png"
          alt="IA Helix Visualization"
          className="w-full h-full object-cover"
          style={{
            objectPosition: '48% center',
            filter: 'brightness(1.15) saturate(1.1)',
          }}
          animate={{
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.div>

      {/* Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.5) 0%, rgba(15, 23, 42, 0.15) 50%, rgba(15, 23, 42, 0.3) 100%)'
        }}
      />

      {/* Gradiente izquierdo */}
      <div
        className="absolute inset-y-0 left-0 w-[58%] pointer-events-none"
        style={{
          background: 'linear-gradient(to right, rgb(15, 23, 42) 0%, rgb(15, 23, 42) 55%, rgba(15, 23, 42, 0.95) 70%, rgba(15, 23, 42, 0.6) 85%, transparent 100%)'
        }}
      />

      {/* Gradientes superior e inferior */}
      <div
        className="absolute top-0 left-0 right-0 h-24 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgb(15, 23, 42) 0%, transparent 100%)'
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgb(15, 23, 42) 0%, transparent 100%)'
        }}
      />

      {/* Viñeta */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 130% 100% at 75% 50%, transparent 20%, rgba(15, 23, 42, 0.5) 70%, rgba(15, 23, 42, 0.9) 100%)'
        }}
      />

      {/* Contenido */}
      <div className="relative z-10 w-full h-full flex">

        {/* Columna Izquierda */}
        <div className="w-[50%] h-full pl-28 pr-10 py-12 flex flex-col justify-center">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-blue-400 text-sm tracking-[0.3em] uppercase font-medium">
              Enfoque Estratégico
            </span>
            <h2 className="text-[3.2rem] font-bold text-white mt-2 tracking-tight leading-none">
              Objetivos 2026
            </h2>
            <div className="w-14 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mt-5 rounded-full"></div>
          </motion.div>

          {/* Espaciador */}
          <div className="h-8"></div>

          {/* OBJETIVO PRINCIPAL */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            <div className="bg-gradient-to-br from-blue-500/[0.08] to-transparent rounded-xl p-6 border-l-[3px] border-blue-400/60">
              <p className="text-white text-[1.35rem] leading-[1.65] font-normal">
                Posicionar al Observatorio Judicial como un{' '}
                <span className="text-cyan-400 font-medium">centro de estudios líder</span>{' '}
                en el uso de <span className="text-blue-400 font-semibold">IA</span> en el control ciudadano a un poder del Estado.
              </p>
            </div>
          </motion.div>

          {/* Espaciador */}
          <div className="h-10"></div>

          {/* Separador */}
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-blue-400/70 text-sm uppercase tracking-[0.15em] font-semibold">Líneas de acción</span>
            <div className="h-px flex-1 bg-gradient-to-r from-blue-400/30 to-transparent"></div>
          </motion.div>

          {/* Espaciador */}
          <div className="h-6"></div>

          {/* Cards de objetivos */}
          <div className="space-y-4">
            {objectives.map((obj, index) => (
              <motion.div
                key={obj.num}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25 + index * 0.08 }}
              >
                <div className="group relative bg-white/[0.03] hover:bg-white/[0.06] rounded-xl py-4 px-5 border border-white/[0.05] hover:border-white/[0.1] transition-all duration-200">

                  {/* Contenido */}
                  <div className="flex items-start gap-4">
                    {/* Número */}
                    <span className="text-blue-400 text-xl font-bold font-mono mt-0.5 w-7 shrink-0">
                      {obj.num}
                    </span>

                    {/* Texto */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white text-[17px] font-semibold leading-snug mb-1.5">
                        {obj.title}
                      </h3>
                      <p className="text-white/50 text-[15px] leading-relaxed">
                        {obj.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Columna Derecha */}
        <div className="w-[50%] h-full relative">
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 70% 80% at 50% 50%, rgba(251, 191, 36, 0.04) 0%, transparent 70%)'
            }}
            animate={{
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>

      </div>
    </div>
  )
}
