import '@/styles/index.css'
import type { Metadata, Viewport } from 'next'
import { Archivo, Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Footer, Header, RevealObserver } from '@/components'
import { site } from '@/lib/site'

const archivo = Archivo({ subsets: ['latin'], weight: ['600', '700', '800'], variable: '--font-archivo', display: 'swap' })
const geist = Geist({ subsets: ['latin'], weight: ['300', '400', '500'], variable: '--font-geist', display: 'swap' })
const geistMono = Geist_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-geist-mono', display: 'swap' })

const title = 'CarrollMedia — Websites that book jobs, not compliments'

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: '%s — CarrollMedia',
  },
  description: site.description,
  icons: '/favicon.svg',
  openGraph: {
    title,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description: site.description,
  },
}

export const viewport: Viewport = {
  /* --ink. Browser chrome reads this meta tag, not CSS. */
  // eslint-disable-next-line no-restricted-syntax
  themeColor: '#08080A',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${archivo.variable} ${geist.variable} ${geistMono.variable}`}>
      <head>
        {/* Reveals wait on JS to add [data-in]. Without it, fail open. */}
        <noscript>
          <style>{'[data-reveal],[data-stagger]>*{opacity:1!important}'}</style>
        </noscript>
      </head>
      <body>
        <a href="#main" className="cm-skip-link">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <RevealObserver />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
