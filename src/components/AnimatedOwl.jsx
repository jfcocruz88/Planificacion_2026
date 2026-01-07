import { motion } from 'framer-motion'

export function AnimatedOwl({
  size = 200,
  color = '#4A7BF7',
  className = '',
  animate = true
}) {
  const strokeWidth = size * 0.02

  const blinkAnimation = animate ? {
    scaleY: [1, 0.1, 1],
    transition: {
      duration: 0.3,
      repeat: Infinity,
      repeatDelay: 4,
      ease: 'easeInOut'
    }
  } : {}

  const breatheAnimation = animate ? {
    scale: [1, 1.02, 1],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  } : {}

  const headTiltAnimation = animate ? {
    rotate: [0, 2, 0, -2, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  } : {}

  return (
    <motion.svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={className}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1, ...breatheAnimation }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <motion.g animate={headTiltAnimation} style={{ transformOrigin: '50px 40px' }}>
        {/* Cuerpo/Corazón del búho - lado izquierdo */}
        <motion.path
          d="M50 15
             C35 15 20 30 20 50
             C20 70 35 85 50 95"
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        />

        {/* Cuerpo/Corazón del búho - lado derecho */}
        <motion.path
          d="M50 15
             C65 15 80 30 80 50
             C80 70 65 85 50 95"
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.1 }}
        />

        {/* Ojo izquierdo - círculo exterior */}
        <motion.circle
          cx="38"
          cy="42"
          r="12"
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4, delay: 0.6 }}
        />

        {/* Ojo derecho - círculo exterior */}
        <motion.circle
          cx="62"
          cy="42"
          r="12"
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4, delay: 0.7 }}
        />

        {/* Pupila izquierda (con parpadeo) */}
        <motion.circle
          cx="38"
          cy="42"
          r="5"
          fill={color}
          initial={{ scale: 0 }}
          animate={{ scale: 1, ...blinkAnimation }}
          transition={{ duration: 0.3, delay: 0.9 }}
          style={{ transformOrigin: '38px 42px' }}
        />

        {/* Pupila derecha (con parpadeo) */}
        <motion.circle
          cx="62"
          cy="42"
          r="5"
          fill={color}
          initial={{ scale: 0 }}
          animate={{ scale: 1, ...blinkAnimation }}
          transition={{ duration: 0.3, delay: 1 }}
          style={{ transformOrigin: '62px 42px' }}
        />

        {/* Conexión entre ojos (cejas) */}
        <motion.path
          d="M26 42 Q32 35 38 30"
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.4, delay: 0.8 }}
        />

        <motion.path
          d="M74 42 Q68 35 62 30"
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.4, delay: 0.8 }}
        />

        {/* Pico del búho */}
        <motion.path
          d="M44 55 L50 68 L56 55"
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        />

        {/* Línea central del pico */}
        <motion.path
          d="M50 55 L50 63"
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth * 0.8}
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.3, delay: 1.3 }}
        />
      </motion.g>
    </motion.svg>
  )
}
