import type { CSSProperties } from 'react'
import { callNote, site } from '@/lib/site'

export type CallStripProps = {
  phone?: string
  note?: string
  /* Shows the email under the number as a second way in. */
  email?: boolean
  style?: CSSProperties
}

/* The entry point. A phone number set large in mono, because the offer is a
 * conversation and a form is a way of avoiding one. The number takes texts
 * too, and a lot of trades run their day by text, so texting is offered as
 * plainly as calling. A money component: nothing here shrinks to caption size. */
export function CallStrip({ phone = site.phone, note = callNote, email = false, style }: CallStripProps) {
  const digits = phone.replace(/[^0-9+]/g, '')
  return (
    <div style={style}>
      <a href={`tel:${digits}`} className="cm-call cm-cut-transition">
        <span className="cm-call__dot cm-tally" />
        <span className="text-num cm-call__number">{phone}</span>
      </a>
      <div className="text-caption cm-call__note">
        CALL OR <a href={`sms:${digits}`} className="cm-link">TEXT</a> / {note}
      </div>
      {email ? (
        <div className="text-caption cm-call__secondary">
          OR <a href={`mailto:${site.email}`} className="cm-link">{site.email.toUpperCase()}</a>
        </div>
      ) : null}
    </div>
  )
}
