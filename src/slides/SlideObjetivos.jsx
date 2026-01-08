import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

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
  const videoRef = useRef(null)
  const [videoOpacity, setVideoOpacity] = useState(0)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.playbackRate = 0.8

    const FADE_DURATION = 2 // segundos para fade in/out

    const updateOpacity = () => {
      const currentTime = video.currentTime
      const duration = video.duration || 8

      let opacity = 1

      // Fade in al inicio (curva suave)
      if (currentTime < FADE_DURATION) {
        // Curva ease-in-out para transición más suave
        const progress = currentTime / FADE_DURATION
        opacity = progress * progress * (3 - 2 * progress) // smoothstep
      }
      // Fade out al final (curva suave)
      else if (currentTime > duration - FADE_DURATION) {
        const progress = (duration - currentTime) / FADE_DURATION
        opacity = progress * progress * (3 - 2 * progress) // smoothstep
      }

      setVideoOpacity(Math.max(0, Math.min(1, opacity)))
    }

    video.addEventListener('timeupdate', updateOpacity)
    return () => video.removeEventListener('timeupdate', updateOpacity)
  }, [])

  return (
    <div className="relative w-full h-full overflow-hidden bg-slate-900">

      {/* Video de fondo con máscara de desvanecimiento lateral */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 2, ease: 'easeOut' }}
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, transparent 40%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0.8) 75%, black 90%, black 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, transparent 40%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0.8) 75%, black 90%, black 100%)',
        }}
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
          style={{
            objectPosition: 'center center',
            filter: 'brightness(0.7) saturate(0.8)',
            transform: 'scale(1.8) translateX(15%)',
            transformOrigin: 'center center',
            opacity: videoOpacity,
            transition: 'opacity 0.3s ease-out',
          }}
        >
          <source src="/assets/Ambient_Animation_Generation_From_Image.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Overlay oscuro sobre el video para suavizar */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to right, rgb(15, 23, 42) 0%, rgb(15, 23, 42) 45%, rgba(15, 23, 42, 0.6) 58%, rgba(15, 23, 42, 0.35) 72%, rgba(15, 23, 42, 0.25) 100%)'
        }}
      />

      {/* Gradientes superior e inferior */}
      <div
        className="absolute top-0 left-0 right-0 h-28 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgb(15, 23, 42) 0%, transparent 100%)'
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgb(15, 23, 42) 0%, transparent 100%)'
        }}
      />

      {/* Contenido */}
      <div className="relative z-10 w-full h-full flex flex-col lg:flex-row slide-scroll lg:overflow-hidden">

        {/* Columna Izquierda */}
        <div className="w-full lg:w-[55%] xl:w-[50%] h-auto lg:h-full px-4 sm:px-8 md:px-12 lg:pl-16 xl:pl-28 lg:pr-10 py-6 sm:py-8 lg:py-12 flex flex-col justify-center">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-blue-400 text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase font-medium">
              Enfoque Estratégico
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[3.2rem] font-bold text-white mt-2 tracking-tight leading-none">
              Objetivos 2026
            </h2>
            <div className="w-16 sm:w-20 lg:w-28 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 mt-3 sm:mt-4 lg:mt-5 rounded-full"></div>
          </motion.div>

          {/* Espaciador */}
          <div className="h-10 sm:h-12 lg:h-16"></div>

          {/* OBJETIVO PRINCIPAL */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            <div className="bg-gradient-to-br from-blue-500/[0.15] to-slate-800/50 backdrop-blur-sm rounded-lg p-4 sm:p-5 lg:p-6 shadow-lg shadow-blue-500/10">
              <p className="text-white text-base sm:text-lg lg:text-[1.2rem] leading-relaxed lg:leading-[1.6] font-normal">
                Posicionar al Observatorio Judicial como un{' '}
                <span
                  className="font-semibold"
                  style={{
                    background: 'linear-gradient(90deg, #d4af70 0%, #22d3ee 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >centro de estudios líder</span>{' '}
                en el uso de{' '}
                <span
                  className="font-bold"
                  style={{
                    background: 'linear-gradient(90deg, #d4af70 0%, #22d3ee 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >Inteligencia Artificial</span>{' '}
                en el control ciudadano a un poder del Estado.
              </p>
            </div>
          </motion.div>

          {/* Espaciador */}
          <div className="h-6 sm:h-8 lg:h-12"></div>

          {/* Separador */}
          <motion.div
            className="flex items-center gap-2 sm:gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-slate-400 text-xs sm:text-sm uppercase tracking-[0.1em] sm:tracking-[0.15em] font-semibold">Líneas de acción</span>
            <div className="h-px flex-1 bg-gradient-to-r from-slate-400/50 to-transparent"></div>
          </motion.div>

          {/* Espaciador */}
          <div className="h-5 sm:h-6 lg:h-8"></div>

          {/* Cards de objetivos */}
          <div className="space-y-4 sm:space-y-5">
            {objectives.map((obj, index) => (
              <motion.div
                key={obj.num}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25 + index * 0.08 }}
              >
                <div className="group relative bg-slate-800/60 backdrop-blur-sm hover:bg-slate-800/80 rounded-lg py-3 sm:py-4 px-4 sm:px-5 border border-white/[0.08] hover:border-blue-400/30 transition-all duration-200 shadow-md">

                  {/* Contenido */}
                  <div className="flex items-start gap-3 sm:gap-4">
                    {/* Número */}
                    <span className="text-slate-400 text-lg sm:text-xl font-bold font-mono mt-0.5 w-7 shrink-0">
                      {obj.num}
                    </span>

                    {/* Texto */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-blue-400/80 mb-1.5 sm:mb-2">
                        {obj.title}
                      </h3>
                      <p className="text-base sm:text-lg lg:text-[1.15rem] leading-relaxed font-medium bg-gradient-to-r from-white to-amber-50 bg-clip-text text-transparent">
                        {obj.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Columna Derecha - oculta en móvil */}
        <div className="hidden lg:block lg:w-[45%] xl:w-[50%] h-full relative">
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
