'use client'

import Link from 'next/link'
import { useRef, type CSSProperties, type MouseEvent } from 'react'
import { FrameMark } from '../core/FrameMark'

export type HoverPlateItem = {
  frame: number | string
  title: string
  meta: string
  href: string
  image?: string
  position?: string
}

export type HoverPlateListProps = {
  items: HoverPlateItem[]
  style?: CSSProperties
}

const PLATE_WIDTH = 320
const PLATE_HEIGHT = 200

/* Point at a project, its aerial appears under the cursor. Carried forward
 * from the founder's original portfolio — the one interaction worth keeping.
 * Keyboard focus shows the same plate, pinned beside the focused row. */
export function HoverPlateList({ items, style }: HoverPlateListProps) {
  const wrap = useRef<HTMLDivElement>(null)
  const plate = useRef<HTMLDivElement>(null)
  const img = useRef<HTMLImageElement>(null)

  const place = (x: number, y: number) => {
    const w = wrap.current
    const p = plate.current
    if (!w || !p) return
    const clampedX = Math.min(Math.max(x, 0), Math.max(w.clientWidth - PLATE_WIDTH, 0))
    p.style.transform = `translate(${clampedX}px, ${y}px)`
  }

  const show = (item: HoverPlateItem) => {
    if (img.current && item.image) img.current.src = item.image
    if (img.current) img.current.style.objectPosition = item.position ?? ''
    if (plate.current) plate.current.style.opacity = item.image ? '1' : '0'
  }

  const hide = () => {
    if (plate.current) plate.current.style.opacity = '0'
  }

  const move = (e: MouseEvent) => {
    const r = wrap.current?.getBoundingClientRect()
    if (!r) return
    place(e.clientX - r.left + 24, e.clientY - r.top - PLATE_HEIGHT / 2)
  }

  const firstImage = items.find((item) => item.image)?.image

  return (
    <div ref={wrap} className="cm-hover-plates" onMouseMove={move} onMouseLeave={hide} style={style}>
      {items.map((item) => (
        <Link
          key={item.title}
          href={item.href}
          className="cm-scope-row cm-cut-transition"
          onMouseEnter={() => show(item)}
          onFocus={(e) => {
            const row = e.currentTarget
            place(row.clientWidth - PLATE_WIDTH - 180, row.offsetTop - PLATE_HEIGHT - 8)
            show(item)
          }}
          onBlur={hide}
        >
          <FrameMark frame={item.frame} />
          <span className="text-h2 cm-hover-plates__title">{item.title}</span>
          <span className="text-label cm-scope-row__meta cm-cut-transition">{item.meta}</span>
        </Link>
      ))}
      {firstImage ? (
        <div ref={plate} className="cm-hover-plates__plate" aria-hidden="true">
          {/* The src is swapped imperatively on hover, so this stays a plain img. */}
          <img ref={img} src={firstImage} alt="" />
        </div>
      ) : null}
    </div>
  )
}
