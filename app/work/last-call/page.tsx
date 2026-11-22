import type { Metadata } from 'next'
import type { CSSProperties, ReactNode } from 'react'
import Image from 'next/image'
import { AerialPlate, Button, Section, StatBlock, Tag } from '@/components'
import { callHref } from '@/lib/site'

/* Published with Last Call's permission (November 2026). */
export const metadata: Metadata = {
  title: 'Last Call Roofing',
  description: 'A new roofer, a QR code that led nowhere, and a site built out of their own logo: a phone, its cord, and Ohio. Dated decision by decision.',
}

const siteHref = 'https://lastcallroofingoh.com'

/* next/image needs a literal media query here; a token can't stand in. */
// eslint-disable-next-line no-restricted-syntax
const SIZES = '(max-width: 940px) 100vw, 640px'

type Entry = {
  date: string
  title: string
  body: ReactNode
  image?: string
  caption?: string
}

/* The build log. Every entry is a decision and the reason for it, dated from
 * the project's own commit history. */
const log: Entry[] = [
  {
    date: 'OCT 06',
    title: 'Their QR code led nowhere. It worked by evening.',
    body: 'On the discovery call it came out that the QR code on the truck and the yard signs pointed at a page that didn’t exist. A one-page site went up the same day, before any design work, so every sign already out there started working.',
  },
  {
    date: 'OCT 06',
    title: 'Two decisions before any design.',
    body: 'No CMS: changes go through us, so the site stays fast and there’s nothing to patch. And every inspection request goes into Tradely, where the crew already works, not into an inbox.',
  },
  {
    date: 'OCT 12',
    title: 'Hosted in their account, not ours.',
    body: 'The site deploys to Last Call’s own Cloudflare account. We push the code; they own the account it lands in.',
  },
  {
    date: 'OCT 17',
    title: 'Matching Google, line for line.',
    body: 'Open to search engines, a sitemap, structured data, and the address and hours matched exactly to their Google Business Profile. Local search checks that those agree.',
  },
  {
    date: 'OCT',
    title: 'Two homepages to react to.',
    body: 'A warm, local direction with the logo front and centre, and a sleeker one built around drone footage of finished roofs. Dashed boxes mark where their own photos would go; neither used stock.',
    image: '/work/last-call/concepts.jpg',
    caption: 'CONCEPT A, WARM AND LOCAL / CONCEPT B, SLEEK',
  },
  {
    date: 'OCT 19',
    title: 'The cord is Ohio’s edge, as on the logo.',
    body: 'In their logo the handset’s coiled cord wraps the bottom of the state. The hero does the same: the outline stops where the cord starts, their drone footage plays inside Ohio and fills the curls, and the cord’s tail runs straight into the state line.',
  },
  {
    date: 'OCT 21',
    title: 'Three voices. They picked the loud one.',
    body: 'The same page in three type and colour systems: Signal, Limestone and Front porch. Signal won, loud like their logo, and became the design system the rest of the site is built in.',
    image: '/work/last-call/voices.jpg',
    caption: 'SIGNAL / LIMESTONE / FRONT PORCH',
  },
  {
    date: 'OCT 22',
    title: 'Less warm, fewer reviews.',
    body: 'The palette moved from warm browns to black, grey and white, so the red reads as theirs. The homepage shows three Google reviews, not eight; the rest are a click away.',
  },
  {
    date: 'OCT 22',
    title: 'One cord through every page.',
    body: 'The cord leaves the logo and runs down the left of every page, coiling where each section starts. It draws itself as you scroll and ends at the logo’s phone beside the number, which rings when the cord gets there.',
  },
  {
    date: 'OCT 23',
    title: '72 towns, and a page for the ones that matter.',
    body: 'Every town they serve, on a map. The eight they work most each get a page that leads with the town, not the service list, so “roofer in Hilliard” lands on a page about Hilliard.',
    image: '/work/last-call/town.jpg',
    caption: 'THE HILLIARD PAGE, LIVE',
  },
  {
    date: 'OCT 24',
    title: 'The form drops the lead into Tradely.',
    body: 'Name, phone and address from the inspection form arrive in Tradely as a lead, with the address checked against the map. Nobody retypes anything.',
    image: '/work/last-call/lead.jpg',
    caption: 'THE FORM ON THEIR SITE / A LEAD IN TRADELY, DEMO DATA',
  },
  {
    date: 'OCT 27',
    title: 'A video hero, framed on Ohio.',
    body: 'Of the video directions, the one that shipped puts central Ohio on the map behind the headline. On a phone, the footage is framed on the state and the headline starts below its southern tip.',
    image: '/work/last-call/directions.jpg',
    caption: 'TWO OF THE VIDEO HERO DIRECTIONS',
  },
  {
    date: 'NOV 02',
    title: 'If Tradely can’t take a lead, the office still gets it.',
    body: 'A form that fails quietly loses a job. If Tradely is unreachable, the request goes to the office by email instead, and the email says when Tradely may already have it.',
  },
  {
    date: 'NOV 03',
    title: 'The review count stays hidden until it reaches 100.',
    body: 'A new business’s count looks small next to roofers who’ve been around for decades. The 5.0 rating shows now; the number shows when it helps.',
  },
  {
    date: 'NOV 06',
    title: 'Only what the client confirmed.',
    body: 'The commercial page was cut back to what Last Call confirmed they do, and the town pages lost a line about scheduling we couldn’t back up. Every claim on the site is one they’ve signed off.',
  },
  {
    date: 'NOV 07',
    title: 'Plain City, the shop’s own town.',
    body: 'The home town got its own page, built on local facts we looked up rather than filler: Census figures on how old the houses are, NOAA hail reports, the village’s history and its permit rule for a re-roof.',
  },
  {
    date: 'NOV 09',
    title: 'The team, as a phone’s Favorites list.',
    body: 'For a company named after a phone call, the team lives in a phone. Tap a name and that person’s profile opens, with a button to call the office. Bios, quotes and photos come from each person’s own intro post on Last Call’s Facebook page.',
  },
  {
    date: 'NOV 13',
    title: 'Try a shingle color on a real roof.',
    body: 'Homeowners pick a color from a sample the size of a hand. Here they tap one of the IKO Dynasty colors Last Call installs and see it on one of Last Call’s own jobs, with colors sampled from IKO’s swatches.',
    image: '/work/last-call/shingles.jpg',
    caption: 'ATLANTIC BLUE ON A LAST CALL JOB, LIVE',
  },
  {
    date: 'NOV 14',
    title: 'Storm damage, in confirmed facts only.',
    body: 'Tarping nights and weekends, a free inspection that says honestly whether it’s a claim, and four steps from filing to a paid-for roof. Nothing about adjusters or deductibles until Last Call confirms it, and it stays out of the header because retail work comes first.',
  },
  {
    date: 'NOV 14',
    title: 'NOAA reports wind in knots, not miles per hour.',
    body: 'Caught while writing the Marysville and Dublin pages: Worthington’s 2012 derecho was 70 knots, about 80 mph, and the page had said 70 mph. Every storm figure on the site was checked again and corrected.',
  },
  {
    date: 'NOV 17',
    title: 'The site grew with the business.',
    body: 'Four service pages for work Last Call does that the site didn’t cover yet: windows, chimneys, attic vents and skylights, soffit and fascia. The header, built when the site was one page, became a Services menu, Where we work, Our team and a Free inspection button.',
  },
  {
    date: 'NOV 17',
    title: '“Do you come to my town?”',
    body: 'Pick a town on the map and a coiled phone cord stretches from the shop to it. Type one and the finder reads it loosely: “mt” is Mount, “vernon” finds Mount Vernon.',
  },
  {
    date: 'NOV 19',
    title: 'Drone day.',
    body: 'Stills from a Plain City replacement became that page’s hero and job photo, and the homepage video got a longer edit: 45 seconds, from the yard sign to the logo over the pond.',
    image: '/work/last-call/drone.jpg',
    caption: 'A PLAIN CITY REPLACEMENT, NOV 19',
  },
]

/* The logo next to the hero built from it, then the places the phone shows up. */
const brandPair = [
  { image: '/work/last-call/logo.jpg', caption: 'THE LOGO THEY CAME WITH' },
  { image: '/work/last-call/curls.jpg', caption: 'THE HERO: THEIR DRONE FOOTAGE INSIDE OHIO, CORD AND ALL' },
]

const brandTouches = [
  { image: '/work/last-call/cord.jpg', title: 'The cord runs every page', body: 'It coils at each section, draws itself as you scroll, and ends at the logo’s phone beside the number, which rings when the cord gets there.' },
  { image: '/work/last-call/team.jpg', title: 'The team is a Favorites list', body: 'Tap a name to open that person’s profile, with a button to call the office.' },
  { image: '/work/last-call/map.jpg', title: 'The map is on the line', body: 'Pick a town and a phone cord stretches from the shop in Plain City to it.' },
]

function Plate({ image, caption }: { image: string; caption?: string }) {
  return (
    <figure style={{ margin: 0 }}>
      <div style={{ position: 'relative', aspectRatio: '16 / 10', overflow: 'hidden', borderRadius: 'var(--radius-plate)', border: 'var(--hairline) solid var(--color-border)' }}>
        <Image src={image} alt="" fill sizes={SIZES} className="cm-cover" />
      </div>
      {caption ? (
        <figcaption className="text-caption" style={{ marginTop: 'var(--space-sm)', color: 'var(--color-dim-foreground)' }}>{caption}</figcaption>
      ) : null}
    </figure>
  )
}

export default function LastCallCasePage() {
  return (
    <>
      <AerialPlate src="/work/last-call/hero.jpg" grade="case" bars={false} height="72vh" slate="LAST CALL / CASE 0002">
        <div className="cm-row" style={{ marginBottom: 'var(--space-lg)' }}>
          <Tag tone="record">LIVE</Tag>
          <Tag>ROOFING</Tag>
          <Tag>PLAIN CITY OH</Tag>
        </div>
        <h1 className="text-display" style={{ margin: 0, fontSize: 'var(--display-section)', maxWidth: '18ch' }}>Last Call Roofing</h1>
        <p className="text-body-lg" style={{ color: 'var(--color-foreground)', margin: 'var(--space-md) 0 0', maxWidth: '46ch' }}>
          A new roofer with a QR code that led nowhere. Six weeks later: a site built out of their own logo, their Google profile, and every inspection request landing in Tradely.
        </p>
        <div style={{ marginTop: 'var(--space-2xl)' }}>
          <Button variant="outline" size="lg" href={siteHref}>Visit lastcallroofingoh.com</Button>
        </div>
      </AerialPlate>

      <Section frame={100} label="The short version" meta={'BUILD LOG\nDATED FROM\nTHE COMMITS'}>
        <StatBlock
          columns={4}
          stats={[
            { display: 'Day 1', label: 'The QR code worked' },
            { display: '21', label: 'Pages: home, 9 services, 9 towns, team and colors' },
            { display: '72', label: 'Towns on the map' },
            { display: 'Theirs', label: 'Domain, hosting and code' },
          ]}
        />
      </Section>

      <Section frame={200} label="Their brand" ground="surface" meta={'BUILT FROM\nTHEIR LOGO'}>
        <h2 className="text-h2" style={{ margin: 0, maxWidth: '20ch' }}>Their logo is a phone. So is the site.</h2>
        <p className="text-body" style={{ color: 'var(--color-muted-foreground)', margin: 'var(--space-md) 0 0', maxWidth: 'var(--copy-measure)' }}>
          Last Call&apos;s logo is a red handset with its coiled cord wrapped around Ohio, and their line is &ldquo;We will be your last call.&rdquo; A template would put that logo in the corner and move on. We built the site out of it: the phone, the cord and the state show up everywhere a visitor looks.
        </p>
        <div className="cm-split" style={{ '--split': 'minmax(0,1fr) minmax(0,1fr)', '--split-gap': 'var(--space-lg)', marginTop: 'var(--space-2xl)' } as CSSProperties}>
          {brandPair.map((plate) => <Plate key={plate.image} {...plate} />)}
        </div>
        <div className="cm-autogrid" style={{ marginTop: 'var(--space-3xl)', gap: 'var(--space-xl)' }}>
          {brandTouches.map((touch) => (
            <div key={touch.image}>
              <Plate image={touch.image} />
              <h3 className="text-h3" style={{ margin: 'var(--space-md) 0 var(--space-xs)' }}>{touch.title}</h3>
              <p className="text-body-sm" style={{ color: 'var(--color-muted-foreground)', margin: 0 }}>{touch.body}</p>
            </div>
          ))}
        </div>
        <p className="text-body-sm" style={{ color: 'var(--color-dim-foreground)', margin: 'var(--space-2xl) 0 0', maxWidth: 'var(--copy-measure)' }}>
          Even the icon in a browser tab and next to Google results is the handset, cut from the logo, because the full logo turns to mush at that size.
        </p>
      </Section>

      <Section frame={300} label="Build log" meta={'EVERY DECISION\nAND WHY'}>
        <ol style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          {log.map((entry, i) => (
            <li key={entry.title} style={{ padding: 'var(--space-2xl) 0', borderTop: i ? 'var(--hairline) solid var(--color-border)' : 0 }}>
              <div className="cm-split" style={{ '--split': entry.image ? 'minmax(0,0.85fr) minmax(0,1.15fr)' : 'minmax(0,1fr)', alignItems: 'start' } as CSSProperties}>
                <div>
                  <span className="text-frame" style={{ color: 'var(--color-dim-foreground)' }}>{entry.date}</span>
                  <h2 className="text-h3" style={{ margin: 'var(--space-sm) 0 var(--space-sm)', maxWidth: '32ch' }}>{entry.title}</h2>
                  <p className="text-body" style={{ color: 'var(--color-muted-foreground)', margin: 0, maxWidth: 'var(--copy-measure)' }}>{entry.body}</p>
                </div>
                {entry.image ? <Plate image={entry.image} caption={entry.caption} /> : null}
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section frame={400} label="Results" ground="surface" meta={'AT 90 DAYS\nEARLY JANUARY'}>
        <h2 className="text-h2" style={{ margin: 0, maxWidth: '22ch' }}>Too early to say, so we won&apos;t.</h2>
        <p className="text-body" style={{ color: 'var(--color-muted-foreground)', margin: 'var(--space-md) 0 0', maxWidth: 'var(--copy-measure)' }}>
          Calls, form requests and where people found them go here at 90 days, in early January, with Last Call&apos;s permission. Until then the site is the result.
        </p>
      </Section>

      <Section frame={500} label="Next" meta="ONE ACTION">
        <div style={{ display: 'flex', gap: 'var(--space-2xl)', alignItems: 'center', flexWrap: 'wrap' }}>
          <h2 className="text-h1" style={{ margin: 0, maxWidth: '16ch' }}>Want this for your business?</h2>
          <div className="cm-row" style={{ gap: 'var(--space-sm)' }}>
            <Button variant="action" size="lg" href={callHref}>Talk to us</Button>
            <Button variant="outline" size="lg" href={siteHref}>See their site</Button>
          </div>
        </div>
      </Section>
    </>
  )
}
