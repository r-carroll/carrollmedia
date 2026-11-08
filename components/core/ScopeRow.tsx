import Link from 'next/link'
import type { CSSProperties } from 'react'
import { FrameMark } from './FrameMark'

export type ScopeRowProps = {
  frame: number | string
  title: string
  body?: string
  meta?: string
  href?: string
  style?: CSSProperties
}

/* A frame-marked row: service, process step, or scope line. Hover is a 4%
 * white wash at cut speed — no lift, no transform. With an href the whole row
 * is the link. */
export function ScopeRow({ frame, title, body, meta, href, style }: ScopeRowProps) {
  const content = (
    <>
      <FrameMark frame={frame} />
      <div>
        <h3 className="text-h3" style={{ margin: 0, color: 'var(--color-foreground)' }}>{title}</h3>
        {body ? <p className="text-body-sm cm-scope-row__body">{body}</p> : null}
      </div>
      {meta ? <span className="text-label cm-scope-row__meta cm-cut-transition">{meta}</span> : null}
    </>
  )

  if (href) {
    return <Link href={href} className="cm-scope-row cm-cut-transition" style={style}>{content}</Link>
  }
  return <div className="cm-scope-row cm-cut-transition" style={style}>{content}</div>
}
