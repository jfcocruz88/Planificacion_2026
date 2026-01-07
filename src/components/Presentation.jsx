import { motion, AnimatePresence } from 'framer-motion'
import { useKeyboardNavigation } from '../hooks/useKeyboardNavigation'
import { Navigation } from './Navigation'

import { SlidePortada } from '../slides/SlidePortada'
import { SlideIndice } from '../slides/SlideIndice'
import { SlideResumen1 } from '../slides/SlideResumen1'
import { SlideObjetivos } from '../slides/SlideObjetivos'
import { SlideInformes1 } from '../slides/SlideInformes1'
import { SlideInformes2 } from '../slides/SlideInformes2'
import { SlideActividades } from '../slides/SlideActividades'
import { SlideSentencias } from '../slides/SlideSentencias'
import { SlideVinculo } from '../slides/SlideVinculo'
import { SlideConsejo } from '../slides/SlideConsejo'

const slides = [
  SlidePortada,
  SlideIndice,
  SlideResumen1,
  SlideObjetivos,
  SlideInformes1,
  SlideInformes2,
  SlideActividades,
  SlideSentencias,
  SlideVinculo,
  SlideConsejo
]

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0
  }),
  center: {
    x: 0,
    opacity: 1
  },
  exit: (direction) => ({
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0
  })
}

export function Presentation() {
  const {
    currentSlide,
    direction,
    nextSlide,
    prevSlide,
    goToSlide,
    totalSlides,
    isFirst,
    isLast
  } = useKeyboardNavigation()

  const CurrentSlideComponent = slides[currentSlide]

  return (
    <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-azul-claro to-white">
      <Navigation
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onNext={nextSlide}
        onPrev={prevSlide}
        onGoTo={goToSlide}
        isFirst={isFirst}
        isLast={isLast}
      />

      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.3 }
          }}
          className="absolute inset-0 w-full h-full"
        >
          <CurrentSlideComponent goToSlide={goToSlide} />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
