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

      {/* Navegación superior con flechas y dots - responsive */}
      <motion.div
        className="fixed top-3 sm:top-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 sm:gap-4
          backdrop-blur-sm px-2 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/5 border border-white/10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        {/* Flecha izquierda */}
        <motion.button
          onClick={onPrev}
          disabled={isFirst}
          className={`p-1 sm:p-1.5 rounded-full transition-all duration-300 group
            ${isFirst ? 'opacity-30 cursor-not-allowed' : 'hover:bg-white/10'}`}
          whileHover={!isFirst ? { x: -2 } : {}}
          whileTap={!isFirst ? { scale: 0.9 } : {}}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            className="text-white/60 group-hover:text-white/90 transition-colors sm:w-4 sm:h-4"
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

        {/* Dots - responsive: menos gap y tamaño en móvil */}
        <div className="flex items-center gap-1 sm:gap-2">
          {Array.from({ length: totalSlides }, (_, i) => (
            <motion.button
              key={i}
              onClick={() => onGoTo(i)}
              className={`relative rounded-full transition-all duration-300
                ${currentSlide === i
                  ? 'w-4 sm:w-6 h-1.5 sm:h-2 bg-white/60'
                  : 'w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white/20 hover:bg-white/40'}`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Ir a slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Flecha derecha */}
        <motion.button
          onClick={onNext}
          disabled={isLast}
          className={`p-1 sm:p-1.5 rounded-full transition-all duration-300 group
            ${isLast ? 'opacity-30 cursor-not-allowed' : 'hover:bg-white/10'}`}
          whileHover={!isLast ? { x: 2 } : {}}
          whileTap={!isLast ? { scale: 0.9 } : {}}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            className="text-white/60 group-hover:text-white/90 transition-colors sm:w-4 sm:h-4"
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
      </motion.div>

    </>
  )
}
