'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { nav } from '@/lib/site'

/* The active item takes record red via an 80ms cut, never a fade. */
export function Nav() {
  const pathname = usePathname()
  return (
    <nav className="cm-nav" aria-label="Primary">
      {nav.map(({ href, label }) => {
        const active = pathname === href || pathname.startsWith(href + '/')
        return (
          <Link key={href} href={href} className="cm-nav__link cm-cut-transition" aria-current={active ? 'page' : undefined}>
            {label}
          </Link>
        )
      })}
    </nav>
  )
}
