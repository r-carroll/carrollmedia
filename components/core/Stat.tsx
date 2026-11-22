'use client'

import { useEffect, useRef, useState } from 'react'

export type StatProps = {
  value?: number
  display?: string
  suffix?: string
  label: string
}

/* Numbers are mono, tabular, and count once on entry. The component renders
 * the FINAL number until the count actually begins — never seed a zero, or a
 * re-render strands the figure at nothing. */
export function Stat({ value, display, suffix = '', label }: StatProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [shown, setShown] = useState(value)

  useEffect(() => {
    if (display != null || typeof value !== 'number') return
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (document.documentElement.hasAttribute('data-reduce-motion')) return

    let done = false
    let frame = 0
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting || done) return
        done = true
        io.disconnect()
        const t0 = performance.now()
        const step = (t: number) => {
          const p = Math.min((t - t0) / 900, 1)
          setShown(Math.round(value * (1 - Math.pow(1 - p, 3))))
          if (p < 1) frame = requestAnimationFrame(step)
        }
        frame = requestAnimationFrame(step)
      })
    }, { threshold: 0.4 })
    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [value, display])

  return (
    <div ref={ref} className="cm-stat">
      <div className="text-num cm-stat__value">
        {display != null ? display : shown}{suffix}
      </div>
      <div className="text-label cm-stat__label">{label}</div>
    </div>
  )
}
