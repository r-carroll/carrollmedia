import Image from 'next/image'
import Link from 'next/link'
import type { CSSProperties } from 'react'
import { cx } from '@/lib/site'
import { FrameMark } from '../core/FrameMark'

/* next/image needs a literal media query here; a token can't stand in. */
// eslint-disable-next-line no-restricted-syntax
const SIZES = '(max-width: 940px) 100vw, 400px'

export type WorkCardProps = {
  frame: number | string
  client: string
  sector: string
  status?: string
  image?: string
  register?: string
  href?: string
  style?: CSSProperties
}

/* A work entry: plate, frame mark, client, sector, status. Status is honest —
 * concept work is labelled concept every time. */
export function WorkCard({ frame, client, sector, status = 'Live', image, register, href, style }: WorkCardProps) {
  const live = status.toLowerCase().startsWith('live')
  const content = (
    <>
      <div className="cm-work-card__plate">
        {image ? (
          <Image src={image} alt="" fill sizes={SIZES} className="cm-cover" />
        ) : (
          <div className="text-caption cm-empty-well">NO PLATE YET</div>
        )}
        {register ? <span className="cm-work-card__register" style={{ background: register }} /> : null}
      </div>
      <div className="cm-work-card__body">
        <div className="cm-work-card__head">
          <FrameMark frame={frame} />
          <span className={cx('text-label cm-work-card__status', live && 'cm-work-card__status--live')}>
            {live ? <span className="cm-dot cm-tally" /> : null}
            {status}
          </span>
        </div>
        <h3 className="text-h3" style={{ margin: 0, color: 'var(--color-foreground)' }}>{client}</h3>
        <span className="text-caption">{sector}</span>
      </div>
    </>
  )

  if (href) {
    return <Link href={href} className="cm-work-card cm-cut-transition" style={style}>{content}</Link>
  }
  return <article className="cm-work-card" style={style}>{content}</article>
}
