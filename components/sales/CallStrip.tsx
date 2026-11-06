import type { CSSProperties } from 'react'
import { callNote, site } from '@/lib/site'

export type CallStripProps = {
  phone?: string
  note?: string
  secondary?: string
  style?: CSSProperties
}

/* The entry point. A phone number set large in mono, because the offer is a
 * conversation and a form is a way of avoiding one. A money component: nothing
 * here shrinks to caption size. */
export function CallStrip({ phone = site.phone, note = callNote, secondary, style }: CallStripProps) {
  const tel = 'tel:' + phone.replace(/[^0-9+]/g, '')
  return (
    <div style={style}>
      <a href={tel} className="cm-call cm-cut-transition">
        <span className="cm-call__dot cm-tally" />
        <span className="text-num cm-call__number">{phone}</span>
      </a>
      <div className="text-caption cm-call__note">{note}</div>
      {secondary ? <div className="text-caption cm-call__secondary">{secondary}</div> : null}
    </div>
  )
}
