import type { NextConfig } from 'next'

const legacy = 'https://old.carrollmedia.dev'

/* Pages and files from the original portfolio now live on the legacy site.
 * Temporary redirects keep old links working without committing to them. */
const legacyPaths = [
  '/decibel-meter',
  '/omikuji',
  '/react-native',
  '/mission-0716',
  '/Ryan_Carroll_Resume.pdf',
  '/DIY-IoT.pdf',
  '/local-AI.pdf',
  '/react-native.pdf',
]

const nextConfig: NextConfig = {
  async redirects() {
    return [
      ...legacyPaths.map((source) => ({
        source,
        destination: `${legacy}${source}`,
        permanent: false,
      })),
      /* Services and pricing are one page. */
      { source: '/services', destination: '/pricing', permanent: true },
    ]
  },
}

export default nextConfig
