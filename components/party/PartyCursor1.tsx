'use client'

import { useEffect } from 'react'

const COLORS: Array<[string, string]> = [
  ['#f97316', '#facc15'], // orange → yellow
  ['#22c55e', '#a3e635'], // green → lime
  ['#3b82f6', '#a855f7'], // blue → purple
  ['#ec4899', '#f97316'], // pink → orange
  ['#22d3ee', '#6366f1'], // cyan → indigo
]

const SHAPES = ['circle', 'star'] as const
type Shape = (typeof SHAPES)[number]

export function PartyCursor1() {
  useEffect(() => {
    let lastSpawn = 0

    function spawnParticle(e: PointerEvent, burst = false) {
      const now = performance.now()
      if (!burst && now - lastSpawn < 25) return
      lastSpawn = now

      const el = document.createElement('span')
      const shape: Shape = SHAPES[Math.floor(Math.random() * SHAPES.length)]
      const [c1, c2] = COLORS[Math.floor(Math.random() * COLORS.length)]

      const size = 4 + Math.random() * 6 // 4–10px
      const offsetX = (Math.random() - 0.5) * 40
      const offsetY = (Math.random() - 0.5) * 40

      el.className = 'party-spark'
      el.dataset.shape = shape

      el.style.left = `${e.clientX + offsetX}px`
      el.style.top = `${e.clientY + offsetY}px`
      el.style.setProperty('--spark-size', `${size}px`)
      el.style.setProperty('--spark-color-1', c1)
      el.style.setProperty('--spark-color-2', c2)
      el.style.setProperty(
        '--spark-rotation',
        `${(Math.random() - 0.5) * 60}deg`,
      )
      el.style.setProperty('--spark-duration', `${0.7 + Math.random() * 0.6}s`)

      document.body.appendChild(el)
      el.addEventListener('animationend', () => el.remove())
    }

    const handleMove = (e: PointerEvent) => {
      if (e.pointerType === 'mouse' || e.pointerType === 'pen') {
        spawnParticle(e)
      }
    }

    const handleDown = (e: PointerEvent) => {
      // small burst on click
      for (let i = 0; i < 16; i++) spawnParticle(e, true)
    }

    window.addEventListener('pointermove', handleMove, { passive: true })
    window.addEventListener('pointerdown', handleDown, { passive: true })

    return () => {
      window.removeEventListener('pointermove', handleMove)
      window.removeEventListener('pointerdown', handleDown)
    }
  }, [])

  return null
}
