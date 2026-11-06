import type { CSSProperties, ReactNode } from 'react'
import { cx } from '@/lib/site'
import { FrameMark } from '../core/FrameMark'

export type SectionProps = {
  frame: number
  label: string
  meta?: string
  ground?: 'ink' | 'surface'
  id?: string
  children: ReactNode
  style?: CSSProperties
}

/* The rail grid every content section is built on: frame counter, section
 * label and slate data on the left, content in the wide right column. */
export function Section({ frame, label, meta, ground = 'ink', id, children, style }: SectionProps) {
  return (
    <section id={id} className={cx('cm-section', ground === 'surface' && 'cm-section--surface')} style={style}>
      <div className="cm-measure cm-section__inner">
        <div className="cm-frame">
          <div className="cm-rail">
            <FrameMark frame={frame} />
            <span className="text-overline" style={{ color: 'var(--color-foreground)' }}>{label}</span>
            {meta ? <span className="text-caption cm-section__meta">{meta}</span> : null}
          </div>
          <div>{children}</div>
        </div>
      </div>
    </section>
  )
}
