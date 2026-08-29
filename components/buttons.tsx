import { CSSProperties, JSX, useEffect, useRef, useState } from 'react'
import {
  Muladhara1,
  Muladhara2,
  SquareCompass,
  Infinity,
  Anahata1,
  Ajna1,
  Sahasrara1,
  Manipura1,
  Svadhistana1,
  Ajna2,
  Anahata2,
  Manipura2,
  Sahasrara2,
  Svadhistana2,
  Vishudda1,
  Vishudda2,
} from './symbols'
import { useTheme } from 'next-themes'
import { CheckButtons } from './party'

function useHover<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const onEnter = () => setHovered(true)
    const onLeave = () => setHovered(false)

    el.addEventListener('pointerenter', onEnter, { passive: true })
    el.addEventListener('pointerleave', onLeave, { passive: true })

    return () => {
      el.removeEventListener('pointerenter', onEnter)
      el.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  return { ref, hovered } as const
}

const Buttons: {
  [id: string]: boolean
} = {}

function HoverSwap({
  size = 30,
  opacity = 0.777,
  hoverOpacity = 1,
  hoverScale = 1.234567,
  startToggled = false,
  title,
  Svg1,
  Svg2,
}: {
  size?: number
  opacity?: number
  hoverOpacity?: number
  hoverScale?: number
  startToggled?: boolean
  title?: string
  Svg1: ({
    background,
    style,
  }: {
    background: string
    style: CSSProperties
  }) => JSX.Element
  Svg2: ({
    background,
    style,
  }: {
    background: string
    style: CSSProperties
  }) => JSX.Element
}) {
  const [toggled, setToggled] = useState(false)
  const { ref, hovered } = useHover<HTMLButtonElement>()
  const { theme } = useTheme()

  const background = theme === 'light' ? 'white' : 'black'
  const rotation = `${toggled ? 360 : 0}deg`
  const duration = `${((3 + Math.random() * 6) / 9) * 3.69}s`

  useEffect(() => {
    setToggled(startToggled)
  }, [startToggled])

  if (title) {
    Buttons[title] = toggled
    CheckButtons(Buttons)
  }

  return (
    <button
      ref={ref}
      aria-hidden={true}
      style={{ position: 'relative', cursor: 'pointer' }}
      title={title}
      onClick={() => {
        setToggled(!toggled)
      }}
    >
      <Svg1
        background={background}
        style={{
          transition: `opacity .33s, transform ${duration}`,
          transform: `rotate(${rotation})`,
          opacity: hovered || toggled ? 0 : opacity,
          width: size,
          height: size,
        }}
      />
      <Svg2
        background={background}
        style={{
          position: 'absolute',
          inset: 0,
          transition: `opacity .33s, transform ${duration}`,
          transform: `scale(${hoverScale}) rotate(${rotation})`,
          opacity: hovered || toggled ? hoverOpacity : 0,
          width: size,
          height: size,
        }}
      />
    </button>
  )
}

export function Chakras() {
  const rand = () => Math.random() > 0.5

  // Workaround bug in Safari: Wrong theme color after selecting white theme
  // and reloading the page.
  if (typeof window === 'undefined') return <></>

  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: 6 }}>
      <HoverSwap
        startToggled={rand()}
        title="I am"
        Svg1={Muladhara1}
        Svg2={Muladhara2}
      />
      <HoverSwap
        startToggled={rand()}
        title="I feel"
        Svg1={Svadhistana1}
        Svg2={Svadhistana2}
      />
      <HoverSwap
        startToggled={rand()}
        title="I do"
        Svg1={Manipura1}
        Svg2={Manipura2}
      />
      <HoverSwap
        startToggled={rand()}
        title="I love"
        Svg1={Anahata1}
        Svg2={Anahata2}
      />
      <HoverSwap
        startToggled={rand()}
        title="I speak"
        Svg1={Vishudda1}
        Svg2={Vishudda2}
      />
      <HoverSwap
        startToggled={rand()}
        title="I see"
        Svg1={Ajna1}
        Svg2={Ajna2}
      />
      <HoverSwap
        startToggled={rand()}
        title="I know"
        Svg1={Sahasrara1}
        Svg2={Sahasrara2}
      />
    </div>
  )
}

export function Genius() {
  return (
    <HoverSwap
      size={72}
      opacity={0.555}
      hoverOpacity={0.777}
      hoverScale={1}
      title="Structure and motion"
      Svg1={SquareCompass}
      Svg2={Infinity}
    />
  )
}
