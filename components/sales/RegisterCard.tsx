import type { CSSProperties } from 'react'

export type RegisterCardProps = {
  name: string
  sector: string
  swatch: string
  note?: string
  style?: CSSProperties
}

/* One studio, many client registers. The 26px swatch is the specimen chip —
 * it stands in for a palette, and it is why this component exists. */
export function RegisterCard({ name, sector, swatch, note, style }: RegisterCardProps) {
  return (
    <div className="cm-register" style={style}>
      <span className="cm-register__swatch" style={{ background: swatch }} />
      <div>
        <div className="text-label" style={{ color: 'var(--color-foreground)' }}>{name}</div>
        <div className="text-caption" style={{ marginTop: 'var(--space-2xs)' }}>{sector}</div>
        {note ? (
          <p className="text-body-sm" style={{ color: 'var(--color-muted-foreground)', margin: 'var(--space-sm) 0 0', maxWidth: '34ch' }}>{note}</p>
        ) : null}
      </div>
    </div>
  )
}
