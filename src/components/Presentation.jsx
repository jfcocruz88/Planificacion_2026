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

// Transición por defecto - crossfade suave
const defaultVariants = {
  enter: (direction) => ({
    x: direction > 0 ? '3%' : '-3%',
    opacity: 0,
    scale: 1.02
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    zIndex: 1
  },
  exit: (direction) => ({
    x: direction < 0 ? '3%' : '-3%',
    opacity: 0,
    scale: 0.98,
    zIndex: 0
  })
}

// Slide 3 (Resumen) - Fade con scale-down elegante (cierre de capítulo)
const resumenVariants = {
  enter: {
    opacity: 0,
    scale: 1.05,
    filter: 'blur(8px)'
  },
  center: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    zIndex: 1
  },
  exit: {
    opacity: 0,
    scale: 0.92,
    filter: 'blur(4px)',
    zIndex: 0
  }
}

// Slide 4 (Objetivos) - Expansión desde el centro (apertura de visión)
const objetivosVariants = {
  enter: {
    opacity: 0,
    scale: 0.9,
    clipPath: 'circle(30% at 50% 50%)'
  },
  center: {
    opacity: 1,
    scale: 1,
    clipPath: 'circle(150% at 50% 50%)',
    zIndex: 1
  },
  exit: (direction) => ({
    opacity: 0,
    x: direction < 0 ? '5%' : '-5%',
    scale: 0.98,
    zIndex: 0
  })
}

// Slide 5 (Informes JFC) - Slide horizontal pronunciado
const informes1Variants = {
  enter: (direction) => ({
    x: direction > 0 ? '8%' : '-8%',
    opacity: 0,
    skewX: direction > 0 ? -2 : 2
  }),
  center: {
    x: 0,
    opacity: 1,
    skewX: 0,
    zIndex: 1
  },
  exit: (direction) => ({
    x: direction < 0 ? '8%' : '-8%',
    opacity: 0,
    skewX: direction < 0 ? -2 : 2,
    zIndex: 0
  })
}

// Slide 6 (Informes JMA) - Slide vertical (continuación natural)
const informes2Variants = {
  enter: (direction) => ({
    y: direction > 0 ? '6%' : '-6%',
    opacity: 0,
    scale: 0.98
  }),
  center: {
    y: 0,
    opacity: 1,
    scale: 1,
    zIndex: 1
  },
  exit: (direction) => ({
    y: direction < 0 ? '6%' : '-6%',
    opacity: 0,
    scale: 0.98,
    zIndex: 0
  })
}

// Mapa de variantes por índice de slide
const slideVariantsMap = {
  2: resumenVariants,    // SlideResumen1
  3: objetivosVariants,  // SlideObjetivos
  4: informes1Variants,  // SlideInformes1
  5: informes2Variants   // SlideInformes2
}

// Transiciones personalizadas por slide
const slideTransitions = {
  2: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  3: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  4: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] },
  5: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
}

const defaultTransition = {
  type: 'tween',
  duration: 0.4,
  ease: [0.25, 0.1, 0.25, 1]
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

  // Obtener variantes y transición para la slide actual
  const currentVariants = slideVariantsMap[currentSlide] || defaultVariants
  const currentTransition = slideTransitions[currentSlide] || defaultTransition

  return (
    <div className="relative w-full h-full overflow-hidden bg-slate-900">
      <Navigation
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onNext={nextSlide}
        onPrev={prevSlide}
        onGoTo={goToSlide}
        isFirst={isFirst}
        isLast={isLast}
      />

      <AnimatePresence mode="sync" custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={currentVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={currentTransition}
          className="absolute inset-0 w-full h-full"
        >
          <CurrentSlideComponent goToSlide={goToSlide} />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
