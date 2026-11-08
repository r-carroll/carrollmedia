/* Every published price lives here so the builder, the pricing page and any
 * "from" figure elsewhere read one source.
 *
 * TODO: these are placeholders until the central Ohio market research is back.
 * While pricesConfirmed is false the pricing page says so above the builder. */
export const pricesConfirmed = false

export type Build = {
  id: string
  name: string
  who: string
  price: number
  weeks: string
  /* The photo and drone day comes with this build when the business is local. */
  shootIncluded: boolean
}

export type AddOn = {
  id: string
  name: string
  body: string
  price: number
}

export const builds: Build[] = [
  {
    id: 'one-page',
    name: 'One page',
    who: 'One scroll: what you do, where you work, proof, and a number to call.',
    price: 1750,
    weeks: '1 WK',
    shootIncluded: false,
  },
  {
    id: 'standard',
    name: 'Standard',
    who: 'A full business site. Clean design, light motion, and content you can edit yourself.',
    price: 4500,
    weeks: '2–3 WKS',
    shootIncluded: true,
  },
  {
    id: 'cinematic',
    name: 'Cinematic',
    who: "Heavy motion, video and custom interactions. The kind of site you're on now.",
    price: 8500,
    weeks: '4–6 WKS',
    shootIncluded: true,
  },
  {
    id: 'agency',
    name: 'Agency grade',
    who: 'Everything in Cinematic, plus a design system another developer or agency can build on.',
    price: 15000,
    weeks: '8–12 WKS',
    shootIncluded: true,
  },
]

export const findAddOns: AddOn[] = [
  {
    id: 'gbp',
    name: 'Google Business Profile',
    body: 'Set up and tuned: categories, service areas, photos and a review link your office will use.',
    price: 400,
  },
  {
    id: 'seo',
    name: 'Search setup',
    body: 'The technical work Google reads: speed, schema, and a page for each area you serve.',
    price: 1200,
  },
  {
    id: 'listings',
    name: 'Listings beyond Google',
    body: 'Apple Maps, Bing, Yelp, Nextdoor and BBB, with the same name, address and phone on every one.',
    price: 350,
  },
]

export const migration: AddOn = {
  id: 'migration',
  name: 'Moving off your current site',
  body: 'Content, redirects, domain and DNS moved to accounts in your name.',
  price: 500,
}

export const shoots: AddOn[] = [
  { id: 'photo', name: 'Photo day', body: 'Half a day on site. Your crews, trucks and finished work.', price: 600 },
  { id: 'drone', name: 'Drone flight', body: 'Aerial stills and short clips of your building and job sites.', price: 500 },
  { id: 'both', name: 'Photo and drone day', body: 'Both, in one half-day visit.', price: 900 },
]

export type Plan = AddOn & {
  includes: string[]
  /* Taken off any build when the client takes the plan. */
  buildDiscount: number
}

/* Optional and monthly. The accounts stay in the client's name either way:
 * this pays for running the site, never for keeping access to it.
 *
 * Taking the plan takes buildDiscount off the build. Cancelling is still a
 * phone call, but the discount is earned month by month: leave before it is
 * earned and the client pays the rest of the regular build price. */
export const carePlan: Plan = {
  id: 'care',
  name: 'Care and search plan',
  body: 'We keep it running and keep you findable: updates, small edits, renewals and your Google Business Profile. Cancel anytime and everything stays yours.',
  price: 150,
  buildDiscount: 750,
  includes: [
    'Uptime monitoring, and we fix it when it goes down',
    'Security and software updates',
    'Up to an hour of small edits a month',
    'Domain and hosting renewals watched, including an expiring card',
    'Your Google Business Profile kept current: hours, photos and posts',
    'Your name, address and phone checked so they match on every listing',
    'A short monthly report: calls, messages, and where people found you',
  ],
}

/* Months of the plan it takes to earn the build discount. */
export const discountMonths = (plan: Plan) => Math.ceil(plan.buildDiscount / plan.price)

export const software = {
  dayRate: 900,
  firstPhaseFrom: 5000,
}

/* Paid to other companies, in the client's name. Typical figures, not ours. */
export const thirdParty = [
  { name: 'Domain', body: 'Registered to you, renewed on your card.', cost: 'ABOUT $20 / YR' },
  { name: 'Hosting', body: 'Most small sites fit a free or entry plan. You hold the account.', cost: '$0–$20 / MO' },
  { name: 'Email', body: 'Only if you want addresses on your domain.', cost: 'ABOUT $7 / USER / MO' },
]

export const lowest = (items: { price: number }[]) => Math.min(...items.map((i) => i.price))

export const usd = (n: number) =>
  n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })
