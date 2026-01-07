import { motion } from 'framer-motion'
import { useMemo } from 'react'

// Red Neuronal Dinámica - Simula procesamiento de IA
function NeuralNetwork() {
  // Estructura de capas neuronales en los bordes (evitando el centro)
  const { nodes, connections } = useMemo(() => {
    const allNodes = []
    const allConnections = []

    // Capa izquierda (input layer)
    const leftLayer = [
      { id: 'L1', x: 5, y: 15, size: 3, layer: 'input' },
      { id: 'L2', x: 8, y: 35, size: 2.5, layer: 'input' },
      { id: 'L3', x: 5, y: 55, size: 2.5, layer: 'input' },
      { id: 'L4', x: 8, y: 75, size: 3, layer: 'input' },
      { id: 'L5', x: 4, y: 90, size: 2, layer: 'input' },
    ]

    // Capa superior (hidden layer 1)
    const topLayer = [
      { id: 'T1', x: 25, y: 6, size: 2.5, layer: 'hidden' },
      { id: 'T2', x: 45, y: 4, size: 2, layer: 'hidden' },
      { id: 'T3', x: 65, y: 5, size: 2.5, layer: 'hidden' },
      { id: 'T4', x: 85, y: 7, size: 2, layer: 'hidden' },
    ]

    // Capa derecha (hidden layer 2)
    const rightLayer = [
      { id: 'R1', x: 94, y: 20, size: 3, layer: 'hidden' },
      { id: 'R2', x: 92, y: 45, size: 2.5, layer: 'hidden' },
      { id: 'R3', x: 95, y: 65, size: 2.5, layer: 'hidden' },
      { id: 'R4', x: 92, y: 85, size: 3, layer: 'hidden' },
    ]

    // Capa inferior (output layer)
    const bottomLayer = [
      { id: 'B1', x: 20, y: 94, size: 2.5, layer: 'output' },
      { id: 'B2', x: 40, y: 96, size: 2, layer: 'output' },
      { id: 'B3', x: 60, y: 95, size: 2, layer: 'output' },
      { id: 'B4', x: 80, y: 93, size: 2.5, layer: 'output' },
    ]

    // Nodos pequeños dispersos en bordes
    const scatteredNodes = []
    for (let i = 0; i < 12; i++) {
      const edge = i % 4
      let x, y
      switch (edge) {
        case 0: x = Math.random() * 15; y = Math.random() * 100; break
        case 1: x = 85 + Math.random() * 15; y = Math.random() * 100; break
        case 2: x = Math.random() * 100; y = Math.random() * 12; break
        case 3: x = Math.random() * 100; y = 88 + Math.random() * 12; break
      }
      scatteredNodes.push({
        id: `S${i}`,
        x, y,
        size: Math.random() * 1 + 1,
        layer: 'scattered'
      })
    }

    allNodes.push(...leftLayer, ...topLayer, ...rightLayer, ...bottomLayer, ...scatteredNodes)

    // Crear conexiones entre capas adyacentes
    let connId = 0

    // Left -> Top
    leftLayer.slice(0, 3).forEach(l => {
      topLayer.slice(0, 2).forEach(t => {
        allConnections.push({
          id: `conn-${connId++}`,
          x1: l.x, y1: l.y, x2: t.x, y2: t.y,
          delay: Math.random() * 8,
          hasDataPulse: Math.random() > 0.5
        })
      })
    })

    // Top -> Right
    topLayer.slice(2).forEach(t => {
      rightLayer.slice(0, 2).forEach(r => {
        allConnections.push({
          id: `conn-${connId++}`,
          x1: t.x, y1: t.y, x2: r.x, y2: r.y,
          delay: Math.random() * 8,
          hasDataPulse: Math.random() > 0.5
        })
      })
    })

    // Right -> Bottom
    rightLayer.slice(2).forEach(r => {
      bottomLayer.slice(2).forEach(b => {
        allConnections.push({
          id: `conn-${connId++}`,
          x1: r.x, y1: r.y, x2: b.x, y2: b.y,
          delay: Math.random() * 8,
          hasDataPulse: Math.random() > 0.5
        })
      })
    })

    // Bottom -> Left (ciclo)
    bottomLayer.slice(0, 2).forEach(b => {
      leftLayer.slice(3).forEach(l => {
        allConnections.push({
          id: `conn-${connId++}`,
          x1: b.x, y1: b.y, x2: l.x, y2: l.y,
          delay: Math.random() * 8,
          hasDataPulse: Math.random() > 0.6
        })
      })
    })

    // Conexiones adicionales entre nodos cercanos del mismo borde
    const addIntraLayerConnections = (layer) => {
      for (let i = 0; i < layer.length - 1; i++) {
        allConnections.push({
          id: `conn-${connId++}`,
          x1: layer[i].x, y1: layer[i].y,
          x2: layer[i + 1].x, y2: layer[i + 1].y,
          delay: Math.random() * 10,
          hasDataPulse: false
        })
      }
    }

    addIntraLayerConnections(leftLayer)
    addIntraLayerConnections(topLayer)
    addIntraLayerConnections(rightLayer)
    addIntraLayerConnections(bottomLayer)

    return { nodes: allNodes, connections: allConnections }
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Glow para nodos activos */}
          <filter id="nodeGlow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          {/* Glow para pulsos de datos */}
          <filter id="pulseGlow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Conexiones (sinapsis) */}
        {connections.map((conn) => (
          <g key={conn.id}>
            {/* Línea base de conexión */}
            <motion.line
              x1={`${conn.x1}%`}
              y1={`${conn.y1}%`}
              x2={`${conn.x2}%`}
              y2={`${conn.y2}%`}
              stroke="rgba(100, 180, 255, 0.1)"
              strokeWidth="0.5"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.1, 0.3, 0.1] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: conn.delay,
                ease: 'easeInOut',
              }}
            />

            {/* Pulso de datos viajando por la conexión */}
            {conn.hasDataPulse && (
              <motion.circle
                r="2"
                fill="rgba(100, 200, 255, 0.9)"
                filter="url(#pulseGlow)"
                initial={{ opacity: 0 }}
                animate={{
                  cx: [`${conn.x1}%`, `${conn.x2}%`],
                  cy: [`${conn.y1}%`, `${conn.y2}%`],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: conn.delay,
                  ease: 'linear',
                  repeatDelay: 3,
                }}
              />
            )}
          </g>
        ))}

        {/* Neuronas (nodos) */}
        {nodes.map((node, index) => (
          <g key={node.id}>
            {/* Halo de activación */}
            {node.layer !== 'scattered' && (
              <motion.circle
                cx={`${node.x}%`}
                cy={`${node.y}%`}
                r={node.size * 3}
                fill="none"
                stroke="rgba(100, 180, 255, 0.2)"
                strokeWidth="0.5"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: [0, 0.4, 0],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: index * 0.3,
                  ease: 'easeOut',
                }}
              />
            )}

            {/* Neurona */}
            <motion.circle
              cx={`${node.x}%`}
              cy={`${node.y}%`}
              r={node.size}
              fill={
                node.layer === 'input'
                  ? 'rgba(100, 180, 255, 0.7)'
                  : node.layer === 'output'
                    ? 'rgba(150, 255, 200, 0.6)'
                    : node.layer === 'hidden'
                      ? 'rgba(180, 150, 255, 0.5)'
                      : 'rgba(255, 255, 255, 0.3)'
              }
              filter={node.layer !== 'scattered' ? 'url(#nodeGlow)' : undefined}
              initial={{ opacity: 0 }}
              animate={{
                opacity: node.layer === 'scattered'
                  ? [0.2, 0.4, 0.2]
                  : [0.5, 1, 0.5],
                scale: node.layer === 'scattered'
                  ? [1, 1, 1]
                  : [1, 1.15, 1],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: index * 0.2,
                ease: 'easeInOut',
              }}
            />
          </g>
        ))}
      </svg>
    </div>
  )
}

export function SlidePortada() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">

      {/* Fondo con gradiente animado */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-[-20px] bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900"
          animate={{
            background: [
              'linear-gradient(to bottom right, #0f172a, #172554, #0f172a)',
              'linear-gradient(to bottom right, #0f172a, #1e3a5f, #0f172a)',
              'linear-gradient(to bottom right, #0f172a, #172554, #0f172a)',
            ],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* Capa de color secundario */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-cyan-950/20 to-transparent" />

        {/* Acentos de color animados */}
        <motion.div
          className="absolute -top-20 -right-20 w-[450px] h-[450px] bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-cyan-500/15 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Red neuronal dinámica */}
      <NeuralNetwork />

      {/* Textura de ruido */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col items-center gap-10 md:gap-12 px-8">
        {/* Logo - Entrada: fade + slide up */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <motion.img
            src="/assets/logo-white.png"
            alt="Observatorio Judicial"
            className="relative z-10 h-14 md:h-20 lg:h-24 w-auto"
            style={{ filter: 'drop-shadow(0 4px 20px rgba(0,0,0,0.3))' }}
          />
        </motion.div>

        {/* Separador - Entrada: scale desde centro */}
        <motion.div
          className="w-12 h-px bg-white/30"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
        />

        {/* Bloque de título */}
        <div className="flex flex-col items-center">
          {/* PLANIFICACIÓN - Entrada: fade + slide up */}
          <motion.h1
            className="text-white text-4xl md:text-6xl lg:text-7xl font-bold tracking-wide"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            PLANIFICACIÓN
          </motion.h1>

          {/* 2026 - Entrada con ligero énfasis de escala */}
          <motion.span
            className="text-white text-4xl md:text-6xl lg:text-7xl font-bold tracking-wide mt-1 md:mt-2"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 1.0,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            2026
          </motion.span>

          {/* Línea separadora */}
          <motion.div
            className="w-16 h-px bg-white/30 mt-8 md:mt-10"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.4, duration: 0.8, ease: 'easeOut' }}
          />

          {/* Subtítulo - Entrada: fade suave */}
          <motion.p
            className="text-white/50 text-xs md:text-sm tracking-[0.3em] uppercase mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 1.0 }}
          >
            Estrategia y Objetivos
          </motion.p>
        </div>
      </div>
    </div>
  )
}
