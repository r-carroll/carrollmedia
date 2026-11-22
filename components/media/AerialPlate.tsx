import Image from 'next/image'
import type { CSSProperties, ReactNode } from 'react'
import { cx } from '@/lib/site'
import { PlateVideo } from './PlateVideo'

export type Grade = 'plate' | 'strip' | 'case'

export type AerialPlateProps = {
  src?: string
  /* Footage looped over src. src stays the still: it paints first and is what
   * reduced-motion visitors see. videoSmall is served below the mobile break. */
  video?: string
  videoSmall?: string
  height?: string
  grade?: Grade
  bars?: boolean
  slate?: string
  children?: ReactNode
  style?: CSSProperties
}

/* Full-bleed aerial behind a masthead. Greyscale, slow push, scrim under type.
 * Type NEVER sits on raw footage — the scrim is not optional. Square edges:
 * only full-bleed footage is allowed radius 0.
 *
 * The letterbox bars are a load-time move owned here, not by the reveal
 * observer. See .cm-aerial__bar in styles/components.css. */
export function AerialPlate({ src, video, videoSmall, height, grade = 'plate', bars = true, slate, children, style }: AerialPlateProps) {
  return (
    <section className="cm-aerial" style={{ height, ...style }}>
      {src ? (
        <Image
          src={src}
          alt=""
          fill
          priority
          sizes="100vw"
          className={cx('cm-plate cm-cover', `cm-grade--${grade}`)}
        />
      ) : null}
      {video ? (
        <PlateVideo src={video} small={videoSmall} className={cx('cm-plate cm-cover cm-aerial__video', `cm-grade--${grade}`)} />
      ) : null}
      <div className="cm-aerial__scrim" />
      {bars ? (
        <>
          <div className="cm-bar cm-aerial__bar cm-aerial__bar--top" />
          <div className="cm-bar cm-aerial__bar cm-aerial__bar--bottom" />
        </>
      ) : null}
      {slate ? (
        <div className="text-caption cm-aerial__slate">
          <span className="cm-dot cm-tally" />
          <span>{slate}</span>
        </div>
      ) : null}
      <div className="cm-measure cm-aerial__content">{children}</div>
    </section>
  )
}
