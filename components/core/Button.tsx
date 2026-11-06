import Link from 'next/link'
import type { CSSProperties, ReactNode } from 'react'
import { cx } from '@/lib/site'

export type ButtonProps = {
  variant?: 'action' | 'outline' | 'solid' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  disabled?: boolean
  children: ReactNode
  style?: CSSProperties
  className?: string
}

/* 5px radius, mono label. The action variant carries the tally red and there
 * is one of it per view. */
export function Button({ variant = 'action', size = 'md', href, disabled = false, children, style, className }: ButtonProps) {
  const classes = cx('cm-button', `cm-button--${variant}`, `cm-button--${size}`, className)

  if (href && !disabled) {
    if (href.startsWith('/')) {
      return <Link href={href} className={classes} style={style}>{children}</Link>
    }
    return <a href={href} className={classes} style={style}>{children}</a>
  }
  return <button type="button" disabled={disabled} className={classes} style={style}>{children}</button>
}
