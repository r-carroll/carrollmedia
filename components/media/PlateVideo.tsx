'use client'

import { useEffect, useRef } from 'react'

/* <source media> needs a literal media query here; a token can't stand in. */
// eslint-disable-next-line no-restricted-syntax
const SMALL = '(max-width: 940px)'

export type PlateVideoProps = {
  src: string
  small?: string
  className?: string
}

/* Muted loop laid over the plate's still. No autoPlay attribute: playback
 * starts here, after checking reduced motion, so a visitor who asked for less
 * motion keeps the still and never downloads the footage. */
export function PlateVideo({ src, small, className }: PlateVideoProps) {
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const v = ref.current
    if (!v) return
    const reduce =
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      document.documentElement.hasAttribute('data-reduce-motion')
    if (reduce) return
    v.load()
    v.play().catch(() => {})
  }, [])

  return (
    <video ref={ref} className={className} muted loop playsInline preload="none" aria-hidden="true">
      {small ? <source src={small} media={SMALL} type="video/mp4" /> : null}
      <source src={src} type="video/mp4" />
    </video>
  )
}
