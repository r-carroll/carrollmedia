import type { CSSProperties, ReactNode } from 'react'

export type TagProps = {
  tone?: 'default' | 'signal' | 'record' | 'concept'
  children: ReactNode
  style?: CSSProperties
}

/* Mono, tracked, hairline. Registers, statuses, and concept labels. */
export function Tag({ children, tone = 'default', style }: TagProps) {
  return <span className={`text-label cm-tag cm-tag--${tone}`} style={style}>{children}</span>
}
