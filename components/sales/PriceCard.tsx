import type { CSSProperties } from 'react'
import { cx } from '@/lib/site'

export type PriceCardProps = {
  name: string
  who: string
  price?: string
  cadence?: string
  includes?: string[]
  featured?: boolean
  style?: CSSProperties
}

/* Published numbers, fixed scope. Prices are mono and never hidden. A money
 * section: nothing here shrinks to caption size. */
export function PriceCard({ name, who, price, cadence, includes = [], featured = false, style }: PriceCardProps) {
  return (
    <div className={cx('cm-price', featured && 'cm-price--featured')} style={style}>
      <div className="cm-price__head">
        <h3 className="text-h3" style={{ margin: 0, color: 'var(--color-foreground)' }}>{name}</h3>
        {featured ? <span className="text-label" style={{ color: 'var(--color-action-text)' }}>MOST TAKEN</span> : null}
      </div>
      <p className="text-body-sm cm-price__who">{who}</p>
      {price ? (
        <div className="cm-price__figure">
          <span className="text-overline" style={{ color: 'var(--color-dim-foreground)' }}>FROM</span>
          <span className="text-num cm-price__amount">{price}</span>
          {cadence ? <span className="text-label" style={{ color: 'var(--color-dim-foreground)' }}>{cadence}</span> : null}
        </div>
      ) : cadence ? (
        <span className="text-label" style={{ color: 'var(--color-dim-foreground)' }}>{cadence}</span>
      ) : null}
      <ul className="cm-price__includes">
        {includes.map((line) => (
          <li key={line} className="cm-price__line">
            <span className="text-num cm-price__dash" aria-hidden="true">—</span>
            <span className="text-body-sm" style={{ color: 'var(--color-foreground)' }}>{line}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
