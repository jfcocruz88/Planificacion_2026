import { useState, useEffect, useCallback } from 'react'

const TOTAL_SLIDES = 10

export function useKeyboardNavigation() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => {
      if (prev < TOTAL_SLIDES - 1) {
        setDirection(1)
        return prev + 1
      }
      return prev
    })
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide(prev => {
      if (prev > 0) {
        setDirection(-1)
        return prev - 1
      }
      return prev
    })
  }, [])

  const goToSlide = useCallback((index) => {
    if (index >= 0 && index < TOTAL_SLIDES) {
      setDirection(index > currentSlide ? 1 : -1)
      setCurrentSlide(index)
    }
  }, [currentSlide])

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case 'ArrowRight':
        case 'ArrowDown':
        case ' ':
        case 'Enter':
          event.preventDefault()
          nextSlide()
          break
        case 'ArrowLeft':
        case 'ArrowUp':
        case 'Backspace':
          event.preventDefault()
          prevSlide()
          break
        case 'Home':
          event.preventDefault()
          goToSlide(0)
          break
        case 'End':
          event.preventDefault()
          goToSlide(TOTAL_SLIDES - 1)
          break
        default:
          if (event.key >= '1' && event.key <= '9') {
            event.preventDefault()
            goToSlide(parseInt(event.key) - 1)
          }
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [nextSlide, prevSlide, goToSlide])

  return {
    currentSlide,
    direction,
    nextSlide,
    prevSlide,
    goToSlide,
    totalSlides: TOTAL_SLIDES,
    isFirst: currentSlide === 0,
    isLast: currentSlide === TOTAL_SLIDES - 1
  }
}
