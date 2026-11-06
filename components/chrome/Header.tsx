import Link from 'next/link'
import { callHref } from '@/lib/site'
import { Button } from '../core/Button'
import { Nav } from './Nav'
import { Wordmark } from './Wordmark'

/* Sticky header with a tally dot, the wordmark, and the nav. */
export function Header() {
  return (
    <header className="cm-header">
      <div className="cm-measure cm-header__inner">
        <Link href="/" className="cm-wordmark" aria-label="CarrollMedia home">
          <span className="cm-dot cm-tally" />
          <Wordmark />
        </Link>
        <Nav />
        <Button variant="action" size="sm" href={callHref}>Talk to us</Button>
      </div>
    </header>
  )
}
