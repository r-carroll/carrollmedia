import type { Metadata } from 'next'
import { Bangers, Caveat } from 'next/font/google'
import MissionBriefing from './mission-client'

const bangers = Bangers({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bangers',
})

const caveat = Caveat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-caveat',
})

export const metadata: Metadata = {
  title: { absolute: 'MISSION FILE: 0716' },
  description: 'Classified. U.A. High Command eyes only.',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  openGraph: {
    title: 'MISSION FILE: 0716',
    description: 'Classified. Pro Hero eyes only.',
  },
}

export default function MissionPage() {
  return (
    <div className={`${bangers.variable} ${caveat.variable}`}>
      <MissionBriefing />
    </div>
  )
}
