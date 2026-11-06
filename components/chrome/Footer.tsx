import { site } from '@/lib/site'
import { Wordmark } from './Wordmark'

/* The footer states ownership plainly. */
export function Footer() {
  return (
    <footer className="cm-footer">
      <div className="cm-measure cm-footer__inner">
        <div>
          <div className="cm-wordmark" style={{ minHeight: 0 }}><Wordmark /></div>
          <p className="text-body-sm" style={{ color: 'var(--color-muted-foreground)', margin: 'var(--space-sm) 0 0', maxWidth: '46ch' }}>
            {site.description}
          </p>
        </div>
        <div className="text-caption cm-footer__meta">
          COLUMBUS OH
          <br />
          <a href={`mailto:${site.email}`} className="cm-link">{site.email.toUpperCase()}</a>
          <br />
          TRADELY — A CARROLLMEDIA PRODUCT
          <br />
          <a href="/privacy" className="cm-link">PRIVACY</a>
        </div>
      </div>
    </footer>
  )
}
