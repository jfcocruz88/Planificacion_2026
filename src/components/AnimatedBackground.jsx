import { useEffect, useRef } from 'react'

export function AnimatedBackground({ accentColor = 'cyan' }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationId
    let width, height
    let orbs = []

    // Color configurations based on accent
    const colors = accentColor === 'cyan'
      ? [
          'rgba(34, 211, 238, 0.08)',  // cyan-400
          'rgba(59, 130, 246, 0.06)',  // blue-500
          'rgba(99, 102, 241, 0.05)'   // indigo-500
        ]
      : [
          'rgba(168, 85, 247, 0.08)',  // purple-500
          'rgba(139, 92, 246, 0.06)',  // violet-500
          'rgba(59, 130, 246, 0.05)'   // blue-500
        ]

    const config = {
      count: 12,
      minSize: 80,
      maxSize: 200,
      speed: 0.15
    }

    class BokehOrb {
      constructor() {
        this.x = Math.random() * width
        this.y = Math.random() * height
        this.vx = (Math.random() - 0.5) * config.speed
        this.vy = (Math.random() - 0.5) * config.speed
        this.size = Math.random() * (config.maxSize - config.minSize) + config.minSize
        this.color = colors[Math.floor(Math.random() * colors.length)]
        this.angle = Math.random() * Math.PI * 2
      }

      update() {
        this.x += Math.cos(this.angle) * this.vx
        this.y += Math.sin(this.angle) * this.vy
        this.angle += 0.001

        // Soft bounce
        if (this.x < -100 || this.x > width + 100) this.vx *= -1
        if (this.y < -100 || this.y > height + 100) this.vy *= -1
      }

      draw() {
        ctx.beginPath()
        const grad = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size)
        grad.addColorStop(0, this.color)
        grad.addColorStop(1, 'rgba(0,0,0,0)')
        ctx.fillStyle = grad
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    function resize() {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
    }

    function initScene() {
      orbs = []
      for (let i = 0; i < config.count; i++) {
        orbs.push(new BokehOrb())
      }
    }

    function animate() {
      ctx.clearRect(0, 0, width, height)

      orbs.forEach(orb => {
        orb.update()
        orb.draw()
      })

      animationId = requestAnimationFrame(animate)
    }

    resize()
    initScene()
    animate()

    window.addEventListener('resize', resize)

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationId)
    }
  }, [accentColor])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
      style={{ opacity: 0.8 }}
    />
  )
}
