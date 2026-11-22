import type { CSSProperties } from 'react'
import { cx } from '@/lib/site'
import { Stat, type StatProps } from './Stat'

export type StatBlockProps = {
  stats: StatProps[]
  columns?: 2 | 4
  style?: CSSProperties
}

/* Published figures in a hairline grid. Each Stat owns its own counter. */
export function StatBlock({ stats, columns = 2, style }: StatBlockProps) {
  return (
    <div className={cx('cm-hairline-grid cm-stats', columns === 4 && 'cm-stats--4')} style={style}>
      {stats.map((stat, i) => <Stat key={i} {...stat} />)}
    </div>
  )
}
