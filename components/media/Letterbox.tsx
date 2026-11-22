import Image from 'next/image'
import type { CSSProperties } from 'react'
import type { Grade } from './AerialPlate'

/* next/image needs a literal media query here; a token can't stand in. */
// eslint-disable-next-line no-restricted-syntax
const SIZES = '(max-width: 940px) 100vw, 1100px'

export type LetterboxProps = {
  src?: string
  grade?: Grade
  caption?: string
  note?: string
  style?: CSSProperties
}

/* The scene break: a 2.39:1 inset plate with a caption rail. With no src it
 * renders the empty footage well — the studio labels footage it has not shot
 * rather than filling the hole with stock. */
export function Letterbox({ src, grade = 'strip', caption, note = 'FOOTAGE NOT SHOT YET', style }: LetterboxProps) {
  return (
    <figure className="cm-letterbox-figure" style={style}>
      <div className="cm-letterbox cm-letterbox--well">
        {src ? (
          <Image src={src} alt="" fill sizes={SIZES} className={`cm-plate cm-cover cm-grade--${grade}`} />
        ) : (
          <div className="text-caption cm-empty-well">{note}</div>
        )}
      </div>
      {caption ? (
        <figcaption className="text-caption cm-letterbox__caption">
          <span style={{ color: 'var(--color-dim-foreground)' }}>—</span>
          <span>{caption}</span>
        </figcaption>
      ) : null}
    </figure>
  )
}
