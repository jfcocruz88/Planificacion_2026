import { motion } from 'framer-motion'

export function Navigation({
  currentSlide,
  totalSlides,
  onNext,
  onPrev,
  onGoTo,
  isFirst,
  isLast
}) {
  return (
    <>
      {/* Barra de progreso superior */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-white/10 z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="h-full bg-white/40"
          initial={{ width: 0 }}
          animate={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        />
      </motion.div>

      {/* Flecha izquierda */}
      <motion.button
        onClick={onPrev}
        disabled={isFirst}
        className={`fixed left-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full
          backdrop-blur-sm border transition-all duration-300 group
          bg-white/5 border-white/10
          ${isFirst ? 'opacity-0 cursor-not-allowed' : 'hover:bg-white/15 hover:border-white/20 hover:scale-110'}`}
        whileHover={!isFirst ? { x: -3 } : {}}
        whileTap={!isFirst ? { scale: 0.95 } : {}}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          className="text-white/60 group-hover:text-white/90 transition-colors"
        >
          <path
            d="M15 19l-7-7 7-7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.button>

      {/* Flecha derecha */}
      <motion.button
        onClick={onNext}
        disabled={isLast}
        className={`fixed right-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full
          backdrop-blur-sm border transition-all duration-300 group
          bg-white/5 border-white/10
          ${isLast ? 'opacity-30 cursor-not-allowed' : 'hover:bg-white/15 hover:border-white/20 hover:scale-110'}`}
        whileHover={!isLast ? { x: 3 } : {}}
        whileTap={!isLast ? { scale: 0.95 } : {}}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          className="text-white/60 group-hover:text-white/90 transition-colors"
        >
          <path
            d="M9 5l7 7-7 7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.button>

      {/* Indicadores de slide (dots) */}
      <motion.div
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2
          backdrop-blur-sm px-4 py-2 rounded-full bg-white/5 border border-white/10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        {Array.from({ length: totalSlides }, (_, i) => (
          <motion.button
            key={i}
            onClick={() => onGoTo(i)}
            className={`relative rounded-full transition-all duration-300
              ${currentSlide === i
                ? 'w-6 h-2 bg-white/60'
                : 'w-2 h-2 bg-white/20 hover:bg-white/40'}`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Ir a slide ${i + 1}`}
          />
        ))}
      </motion.div>

      {/* Contador de slides */}
      <motion.div
        className="fixed bottom-8 right-8 z-50 text-sm font-medium
          bg-white/5 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        <span className="text-white/70 font-bold">{currentSlide + 1}</span>
        <span className="mx-1 text-white/30">/</span>
        <span className="text-white/40">{totalSlides}</span>
      </motion.div>
    </>
  )
}
