import { motion } from 'framer-motion'
import { AnimatedBackground } from '../components/AnimatedBackground'

const objetivos = [
  {
    num: '01',
    title: 'Trabajo en Prensa',
    description: 'Posicionar al Observatorio Judicial, a nivel de opinión pública, como un referente en innovación con inteligencia artificial.'
  },
  {
    num: '02',
    title: 'Multimedia',
    items: [
      'Continuar con el formato entrevista "Podcast".',
      'Informe en 1 minuto.',
      'Explotar la creación de contenido visual con avatares digitales.'
    ]
  },
  {
    num: '03',
    title: 'Diseño Gráfico',
    description: 'Implementar el nuevo diseño gráfico de los informes.',
    images: [
      { src: '/assets/informe-portada.png', alt: 'Portada nuevo diseño' },
      { src: '/assets/informe-pagina.png', alt: 'Página interior' }
    ]
  }
]

// Ícono de Televisión estilizado
const TelevisionIcon = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7">
    <rect x="2" y="7" width="20" height="13" rx="2" fill="#1e1e2e" stroke="#8B5CF6" strokeWidth="1.5" />
    <rect x="4" y="9" width="12" height="9" rx="1" fill="#60A5FA" />
    <circle cx="18.5" cy="11.5" r="1" fill="#8B5CF6" />
    <circle cx="18.5" cy="14.5" r="1" fill="#8B5CF6" />
    <line x1="7" y1="4" x2="10" y2="7" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="14" y1="4" x2="11" y2="7" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

// Ícono de Radio estilizado
const RadioIcon = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7">
    <rect x="2" y="8" width="20" height="12" rx="2" fill="#1e1e2e" stroke="#F59E0B" strokeWidth="1.5" />
    <circle cx="8" cy="14" r="3.5" fill="#F59E0B" />
    <circle cx="8" cy="14" r="1.5" fill="#1e1e2e" />
    <rect x="13" y="11" width="6" height="1.5" rx="0.5" fill="#F59E0B" />
    <rect x="13" y="14" width="6" height="1.5" rx="0.5" fill="#F59E0B" />
    <line x1="6" y1="5" x2="10" y2="8" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

// Ícono de Prensa estilizado
const PrensaIcon = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7">
    <rect x="3" y="3" width="18" height="18" rx="2" fill="#1e1e2e" stroke="#60A5FA" strokeWidth="1.5" />
    <rect x="5" y="5" width="8" height="5" rx="1" fill="#60A5FA" />
    <line x1="5" y1="12" x2="19" y2="12" stroke="#60A5FA" strokeWidth="1" strokeLinecap="round" />
    <line x1="5" y1="15" x2="19" y2="15" stroke="#60A5FA" strokeWidth="1" strokeLinecap="round" />
    <line x1="5" y1="18" x2="14" y2="18" stroke="#60A5FA" strokeWidth="1" strokeLinecap="round" />
    <line x1="15" y1="5" x2="19" y2="5" stroke="#60A5FA" strokeWidth="1" strokeLinecap="round" />
    <line x1="15" y1="7.5" x2="19" y2="7.5" stroke="#60A5FA" strokeWidth="1" strokeLinecap="round" />
  </svg>
)

const LinkedInLogo = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7" fill="#0A66C2">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const YouTubeLogo = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#FF0000">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
)

const SpotifyLogo = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7" fill="#1DB954">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
  </svg>
)

const medios = [
  { id: 'tv', icon: <TelevisionIcon />, label: 'Televisión', angle: -120, color: '#8B5CF6', isEmoji: false },
  { id: 'prensa', icon: <PrensaIcon />, label: 'Prensa', angle: -60, color: '#60A5FA', isEmoji: false },
  { id: 'radio', icon: <RadioIcon />, label: 'Radio', angle: 180, color: '#F59E0B', isEmoji: false },
  { id: 'linkedin', icon: <LinkedInLogo />, label: 'LinkedIn', angle: 0, color: '#0A66C2', isEmoji: false },
  { id: 'spotify', icon: <SpotifyLogo />, label: 'Spotify', angle: 120, color: '#1DB954', isEmoji: false },
  { id: 'youtube', icon: <YouTubeLogo />, label: 'YouTube', angle: 60, color: '#FF0000', isEmoji: false }
]

// Configuración de radios
const START_RADIUS = 132
const END_RADIUS = 341
const ICON_RADIUS = 341
const CIRCLE_RADIUS = 142

// Configuración de tiempos para animación secuencial
const PULSE_DURATION = 1.0
const ION_TRAVEL_DURATION = 1.3
const GLOW_DURATION = 0.6
const PAUSE_BETWEEN = 0.3
const SINGLE_SEQUENCE = PULSE_DURATION + ION_TRAVEL_DURATION + PAUSE_BETWEEN
const FULL_CYCLE = medios.length * SINGLE_SEQUENCE

// Pulso central que se expande - uno por cada medio en secuencia
function CenterPulse({ index }) {
  const delay = index * SINGLE_SEQUENCE

  return (
    <motion.circle
      cx="0"
      cy="0"
      fill="none"
      stroke="url(#pulseGradient)"
      strokeWidth="3"
      initial={{ r: 0, opacity: 0 }}
      animate={{
        r: [0, START_RADIUS],
        opacity: [0.9, 0.5, 0]
      }}
      transition={{
        duration: PULSE_DURATION,
        repeat: Infinity,
        delay: delay,
        repeatDelay: FULL_CYCLE - PULSE_DURATION,
        ease: 'easeOut',
      }}
    />
  )
}

// Línea estática de conexión
function ConnectionLine({ angle, color }) {
  if (angle === undefined) return null
  const radians = (angle * Math.PI) / 180
  const x1 = Math.cos(radians) * START_RADIUS
  const y1 = Math.sin(radians) * START_RADIUS
  const x2 = Math.cos(radians) * END_RADIUS
  const y2 = Math.sin(radians) * END_RADIUS

  return (
    <line
      x1={x1 || 0}
      y1={y1 || 0}
      x2={x2 || 0}
      y2={y2 || 0}
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.3"
    />
  )
}

// Ion que viaja por la línea - se activa en secuencia después de su pulso
function TravelingIon({ angle, color, index }) {
  if (angle === undefined) return null
  const radians = (angle * Math.PI) / 180
  const startX = Math.cos(radians) * START_RADIUS
  const startY = Math.sin(radians) * START_RADIUS
  const endX = Math.cos(radians) * END_RADIUS
  const endY = Math.sin(radians) * END_RADIUS

  const delay = index * SINGLE_SEQUENCE + PULSE_DURATION - 0.1

  return (
    <motion.circle
      r="5"
      fill={color}
      filter="url(#glow)"
      initial={{
        cx: startX || 0,
        cy: startY || 0,
        opacity: 0,
      }}
      animate={{
        cx: [startX || 0, endX || 0],
        cy: [startY || 0, endY || 0],
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration: ION_TRAVEL_DURATION,
        repeat: Infinity,
        delay: delay,
        repeatDelay: FULL_CYCLE - ION_TRAVEL_DURATION,
        ease: 'easeOut',
      }}
    />
  )
}

// Punto final estático con brillo sutil
function EndpointDot({ angle, color }) {
  if (angle === undefined) return null
  const radians = (angle * Math.PI) / 180
  const cx = Math.cos(radians) * END_RADIUS
  const cy = Math.sin(radians) * END_RADIUS

  return (
    <circle
      cx={cx || 0}
      cy={cy || 0}
      r="5"
      fill={color}
      opacity="0.8"
    />
  )
}

// Ícono de medio con brillo animado cuando llega el ion
function MediaIcon({ medio, index }) {
  if (!medio) return null
  const radians = (medio.angle * Math.PI) / 180
  const x = Math.cos(radians) * ICON_RADIUS
  const y = Math.sin(radians) * ICON_RADIUS

  // Delay para el brillo: cuando el ion llega al ícono
  const glowDelay = index * SINGLE_SEQUENCE + PULSE_DURATION + ION_TRAVEL_DURATION - 0.2

  return (
    <motion.div
      className="absolute"
      style={{
        left: `calc(50% + ${x}px)`,
        top: `calc(50% + ${y}px)`,
      }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{
        duration: 0.5,
        delay: 0.3 + index * 0.1,
        type: 'spring',
        stiffness: 200
      }}
    >
      {/* Ícono principal - centrado en el punto de anclaje */}
      <motion.div
        className={`w-14 h-14 rounded-2xl flex items-center justify-center -translate-x-1/2 -translate-y-1/2 ${medio.isEmoji ? 'text-3xl' : ''}`}
        style={{
          background: `linear-gradient(135deg, ${medio.color}20, ${medio.color}10)`,
          border: `1px solid ${medio.color}30`,
          backdropFilter: 'blur(8px)'
        }}
        animate={{
          boxShadow: [
            `0 0 0px ${medio.color}00`,
            `0 0 25px ${medio.color}80`,
            `0 0 35px ${medio.color}60`,
            `0 0 0px ${medio.color}00`
          ],
          borderColor: [
            `${medio.color}30`,
            `${medio.color}90`,
            `${medio.color}70`,
            `${medio.color}30`
          ]
        }}
        transition={{
          duration: GLOW_DURATION,
          repeat: Infinity,
          delay: glowDelay,
          repeatDelay: FULL_CYCLE - GLOW_DURATION,
          ease: 'easeOut',
        }}
      >
        {medio.icon}
      </motion.div>
    </motion.div>
  )
}

export function SlideVinculo() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-slate-900">

      {/* Fondo animado Bokeh */}
      <AnimatedBackground accentColor="purple" />

      {/* Contenido principal */}
      <div className="relative z-10 w-full h-full flex flex-col lg:flex-row slide-scroll lg:overflow-hidden">

        {/* Columna Izquierda - Objetivos */}
        <div className="w-full lg:w-[40%] h-auto lg:h-full px-12 sm:px-20 md:px-28 py-6 sm:py-8 lg:py-12 flex flex-col justify-center">

          {/* Header */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-blue-400/70 text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.25em] uppercase font-medium">
              Estrategia de Comunicación
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-2 sm:mt-3 tracking-tight">
              Vínculo con el Medio
            </h2>
            <div className="w-16 sm:w-20 lg:w-28 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 mt-3 sm:mt-4 rounded-full"></div>
          </motion.div>

          {/* Objetivos */}
          <div className="space-y-7 lg:ml-16">
            {objetivos.map((obj, index) => (
              <motion.div
                key={obj.num}
                className="relative bg-white/[0.03] rounded-xl p-5 border border-white/[0.06] overflow-hidden"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                {/* Borde de acento izquierdo */}
                <div className="absolute left-0 top-0 bottom-0 w-1 rounded-full bg-gradient-to-b from-blue-400/80 via-blue-500/60 to-blue-600/40" />

                <div className="flex items-start gap-4 pl-2">
                  {/* Número */}
                  <span className="text-blue-400 text-xl font-bold font-mono shrink-0">
                    {obj.num}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-white text-lg font-semibold mb-2">
                      {obj.title}
                    </h3>
                    {obj.description && (
                      <p className="text-white/60 text-base leading-relaxed">
                        {obj.description}
                      </p>
                    )}
                    {obj.items && (
                      <ul className="space-y-2">
                        {obj.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-base text-white/60 leading-relaxed">
                            <span className="text-slate-400 mt-0.5">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
                {/* Imágenes del nuevo diseño - centradas en la card */}
                {obj.images && (
                  <div className="flex items-stretch justify-center gap-6 mt-4">
                    {obj.images.map((image, i) => (
                      <motion.div
                        key={i}
                        className="w-[138px] rounded-lg overflow-hidden shadow-2xl border border-white/20 bg-white/5"
                        whileHover={{ scale: 1.05, y: -4 }}
                        transition={{ duration: 0.2 }}
                      >
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-auto object-cover"
                        />
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Columna Derecha - Diagrama de Medios */}
        <div className="w-full lg:w-[60%] h-full relative flex items-center justify-center">

          {/* SVG de animaciones */}
          <svg
            className="absolute w-[600px] h-[600px]"
            viewBox="-300 -300 600 600"
            style={{
              overflow: 'visible',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)'
            }}
          >
            {/* Definiciones de gradientes y filtros */}
            <defs>
              <linearGradient id="pulseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#60A5FA" />
                <stop offset="100%" stopColor="#34D399" />
              </linearGradient>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Círculo central decorativo */}
            <circle
              cx="0"
              cy="0"
              r="142"
              fill="none"
              stroke="url(#pulseGradient)"
              strokeWidth="1.5"
              opacity="0.4"
            />

            {/* Líneas de conexión estáticas */}
            {medios.map((medio) => (
              <ConnectionLine
                key={`line-${medio.id}`}
                angle={medio.angle}
                color={medio.color}
              />
            ))}

            {/* Pulsos centrales - uno por cada medio en secuencia */}
            {medios.map((_, index) => (
              <CenterPulse key={`pulse-${index}`} index={index} />
            ))}

            {/* Iones viajeros - cada uno se activa después de su pulso correspondiente */}
            {medios.map((medio, index) => (
              <TravelingIon
                key={`ion-${medio.id}`}
                angle={medio.angle}
                color={medio.color}
                index={index}
              />
            ))}

            {/* Puntos en los endpoints */}
            {medios.map((medio) => (
              <EndpointDot
                key={`dot-${medio.id}`}
                angle={medio.angle}
                color={medio.color}
              />
            ))}
          </svg>

          {/* Logo central */}
          <motion.div
            className="relative z-20"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.6,
              type: 'spring',
              stiffness: 150
            }}
          >
            {/* Contenedor del logo */}
            <div className="w-[276px] h-[276px] rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center">
              <img
                src="/assets/logo-white.png"
                alt="Logo Observatorio"
                className="w-[260px] h-[260px] object-contain"
                style={{
                  filter: 'drop-shadow(0 0 15px rgba(96, 165, 250, 0.4))'
                }}
              />
            </div>
          </motion.div>

          {/* Íconos de medios alrededor - contenedor del mismo tamaño que el SVG */}
          <div
            className="absolute w-[600px] h-[600px]"
            style={{
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              position: 'absolute'
            }}
          >
            <div className="relative w-full h-full">
              {medios.map((medio, index) => (
                <MediaIcon key={medio.id} medio={medio} index={index} />
              ))}
            </div>
          </div>

          {/* Etiqueta inferior */}
        </div>

      </div>
    </div>
  )
}
