import type { CSSProperties } from 'react'
import { cx, frameNumber } from '@/lib/site'

export type FrameMarkProps = {
  frame: number | string
  tally?: boolean
  tone?: 'dim' | 'mute' | 'signal' | 'record'
  style?: CSSProperties
  className?: string
}

const tones = {
  dim: 'var(--color-dim-foreground)',
  mute: 'var(--color-muted-foreground)',
  signal: 'var(--color-foreground)',
  record: 'var(--color-action-text)',
}

/* The section marker. A bracketed four-digit frame counter — the film-slate
 * replacement for an industrial 01/02 sequence. Optional tally dot marks a
 * live item. */
export function FrameMark({ frame, tally = false, tone = 'dim', style, className }: FrameMarkProps) {
  return (
    <span className={cx('text-frame cm-frame-mark', className)} style={{ color: tones[tone], ...style }}>
      {tally ? <span className="cm-dot cm-tally" /> : null}
      <span>{frameNumber(frame)}</span>
    </span>
  )
}
