'use client'

import { useEffect } from 'react'

const EMOJIS = ['✨', '🎉', '⚡️', '💫', '🎈', '🔥', '⭐️']

export function PartyCursor2() {
  useEffect(() => {
    let lastSpawn = 0

    function spawnEmoji(e: PointerEvent) {
      const now = performance.now()
      // Throttle a bit so we don't create a billion elements
      if (now - lastSpawn < 30) return
      lastSpawn = now

      const emoji = document.createElement('span')
      const emojiChar = EMOJIS[Math.floor(Math.random() * EMOJIS.length)]

      emoji.textContent = emojiChar
      emoji.className = 'party-emoji'

      const size = 18 + Math.random() * 10
      const offsetX = (Math.random() - 0.5) * 40 // random spread
      const offsetY = (Math.random() - 0.5) * 40

      emoji.style.left = `${e.clientX + offsetX}px`
      emoji.style.top = `${e.clientY + offsetY}px`
      emoji.style.fontSize = `${size}px`
      emoji.style.setProperty(
        '--party-rotation',
        `${(Math.random() - 0.5) * 40}deg`,
      )
      emoji.style.setProperty(
        '--party-duration',
        `${0.8 + Math.random() * 0.5}s`,
      )

      document.body.appendChild(emoji)

      const remove = () => emoji.remove()
      emoji.addEventListener('animationend', remove)
    }

    const handleMove = (e: PointerEvent) => {
      // Only do this for mouse / pen, not touch scroll
      if (e.pointerType === 'mouse' || e.pointerType === 'pen') {
        spawnEmoji(e)
      }
    }

    const handleClick = (e: PointerEvent) => {
      // Extra burst on click
      for (let i = 0; i < 6; i++) spawnEmoji(e)
    }

    window.addEventListener('pointermove', handleMove, { passive: true })
    window.addEventListener('pointerdown', handleClick, { passive: true })

    return () => {
      window.removeEventListener('pointermove', handleMove)
      window.removeEventListener('pointerdown', handleClick)
    }
  }, [])

  // Nothing to render; this just hooks into events
  return null
}
