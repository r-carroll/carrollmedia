import type { CSSProperties } from 'react'
import { FrameMark } from './FrameMark'

export type SectionSlateProps = {
  frame?: number | string
  label: string
  meta?: string
  rule?: boolean
  animate?: boolean
  style?: CSSProperties
}

/* Every section opens with a slate: frame counter, tracked label, and a rule
 * that draws to the right edge. Lives in the left rail on wide views and
 * collapses to a horizontal line under 940px. */
export function SectionSlate({ frame, label, meta, rule = true, animate = true, style }: SectionSlateProps) {
  return (
    <div className="cm-slate" style={style}>
      {frame != null ? <FrameMark frame={frame} /> : null}
      <span className="text-overline" style={{ color: 'var(--color-foreground)' }}>{label}</span>
      {meta ? <span className="text-caption">{meta}</span> : null}
      {rule ? <span className="cm-slate__rule" data-reveal={animate ? 'draw' : undefined} /> : null}
    </div>
  )
}
