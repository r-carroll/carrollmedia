export const site = {
  name: 'CarrollMedia',
  url: 'https://carrollmedia.dev',
  legacyUrl: 'https://old.carrollmedia.dev',
  description:
    'Websites, Google Business Profile management and software for local businesses in Columbus, Ohio, with drone video in-house. You own the domain, the code and the hosting.',
  phone: '(937) 553-1132',
  email: 'ryan@carrollmedia.dev',
} as const

export const nav = [
  { href: '/work', label: 'Work' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
  { href: '/labs', label: 'Labs' },
] as const

/* Every "Talk to us" lands on the call, not the top of the pricing page. */
export const callHref = '/pricing#start-here'

export const callNote = '30 MINUTES / NO SLIDES'

export function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}

export function frameNumber(frame: number | string) {
  return `[${String(frame).padStart(4, '0')}]`
}

/* Google's notice for businesses whose profile an agency manages. Its
 * third-party policy asks agencies to link it from their site and send it to
 * each client in writing (WEB-141). */
export const googleThirdPartyHref = 'https://support.google.com/business/answer/7353941'
