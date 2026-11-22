import Image from 'next/image'
import type { CSSProperties } from 'react'

export type ScopeStripProps = {
  src?: string
  height?: string
  timecode?: string
  style?: CSSProperties
}

/* A short horizontal band of footage used to separate two dense sections.
 * No type on it beyond a timecode. */
export function ScopeStrip({ src, height, timecode, style }: ScopeStripProps) {
  return (
    <div className="cm-scope-strip" style={{ height, ...style }}>
      {src ? <Image src={src} alt="" fill sizes="100vw" className="cm-plate cm-cover cm-grade--strip" /> : null}
      <div className="cm-scope-strip__scrim" />
      {timecode ? <span className="text-timecode cm-scope-strip__timecode">{timecode}</span> : null}
    </div>
  )
}
