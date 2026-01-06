import './global.css'
import type { Metadata } from 'next'
import { Syne } from 'next/font/google'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'

const syne = Syne({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-syne',
})

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'CarrollMedia | Premium Software Engineering',
    template: '%s | CarrollMedia',
  },
  description: 'Portfolio of Ryan Carroll - Senior Software Engineer specializing in cinematic web experiences, scalable systems, and creative development.',
  icons: 'favicon.svg',
  openGraph: {
    title: 'CarrollMedia | Premium Software Engineering',
    description: 'Portfolio of Ryan Carroll - Senior Software Engineer specializing in cinematic web experiences and scalable systems.',
    url: baseUrl,
    siteName: 'CarrollMedia',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og',
        width: 1200,
        height: 630,
        alt: 'CarrollMedia Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CarrollMedia | Premium Software Engineering',
    description: 'Portfolio of Ryan Carroll - Building cinematic web experiences.',
    images: ['/og'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'dark', // Force dark mode
        GeistSans.variable,
        GeistMono.variable,
        syne.variable
      )}
    >
      <body className="antialiased w-full mx-auto min-h-screen">
        <main className="flex-auto min-w-0 flex flex-col">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}
