import type { CSSProperties } from 'react'
import { AerialPlate, Button, CallStrip, HoverPlateList, Letterbox, ScopeRow, Section, StatBlock, Tag } from '@/components'
import { builds, carePlan, lowest, shoots, software, usd } from '@/lib/pricing'
import { callHref } from '@/lib/site'

/* The cheapest build once the care and search plan takes its discount off. */
const withPlan = lowest(builds) - carePlan.buildDiscount

/* Masthead, the offer, what we do, and the work index. The cinema is the
 * frame; the offer and the numbers stay at full size. */
export default function HomePage() {
  return (
    <>
      <AerialPlate src="/aerial/hero-poster.jpg" video="/aerial/hero.mp4" videoSmall="/aerial/hero-720.mp4" slate="CM_HERO_V2 / 1080 30P / CENTRAL OHIO">
        <h1 className="text-display" data-reveal="rise" style={{ margin: 0, maxWidth: 'var(--headline-measure)' }}>
          Websites that book <span style={{ color: 'var(--color-action-text)' }}>jobs,</span> not compliments.
        </h1>
        <p className="text-body-lg" style={{ color: 'var(--color-foreground)', margin: 'var(--space-lg) 0 0', maxWidth: 'var(--copy-measure)', textWrap: 'balance' }}>
          The site that gets the call, and the software behind it. Built by the same people.
        </p>
        <div style={{ display: 'flex', gap: 'var(--space-sm)', marginTop: 'var(--space-2xl)', flexWrap: 'wrap' }}>
          <Button variant="action" size="lg" href={callHref}>Talk to us</Button>
          <Button variant="outline" size="lg" href="/work">See the work</Button>
        </div>
      </AerialPlate>

      <Section frame={100} label="The offer" meta={'COLUMBUS OH\nON THE PHONE'}>
        <h2 className="text-h1" style={{ margin: '0 0 var(--space-2xl)', maxWidth: '24ch' }}>
          Thirty minutes, and you leave with a price.
        </h2>
        <div className="cm-split" style={{ '--split': 'minmax(0,1.15fr) minmax(0,1fr)' } as CSSProperties}>
          <div>
            <p className="text-body-lg" style={{ color: 'var(--color-muted-foreground)', margin: '0 0 var(--space-md)', maxWidth: 'var(--copy-measure-tight)' }}>
              Put your site up on the screen and tell us what you&apos;re trying to book. We&apos;ll ask what we can&apos;t see from the outside: which work makes you money, which you&apos;d rather stop taking, and what a new customer is worth to you.
            </p>
            <p className="text-body-lg" style={{ color: 'var(--color-foreground)', margin: 0, maxWidth: 'var(--copy-measure-tight)' }}>
              You get a one-page scope and the number on it, whether or not you hire us.
            </p>
          </div>
          <div>
            <StatBlock
              columns={2}
              stats={[
                { value: 10, suffix: ' yrs', label: 'Building software' },
                { display: '2–3 wks', label: 'Typical build' },
                { display: usd(withPlan), label: 'Sites from, with the plan' },
                { display: '100%', label: 'Yours at launch' },
              ]}
            />
            <CallStrip email style={{ marginTop: 'var(--space-2xl)' }} />
          </div>
        </div>
      </Section>

      <Section frame={200} label="What we do" ground="surface" meta={'FOUR THINGS\nPRICED IN PUBLIC'}>
        <div style={{ display: 'flex', gap: 'var(--space-md)', alignItems: 'center', margin: '0 0 var(--space-2xl)', flexWrap: 'wrap' }}>
          <Tag tone="signal">THE DIFFERENCE</Tag>
          <p className="text-body-lg" style={{ color: 'var(--color-foreground)', margin: 0, maxWidth: 'var(--copy-measure)' }}>
            Most web designers stop when the phone rings. We build what happens next. For the trades, that&apos;s Tradely, our own field-service app: a lead from your site lands in it with the name, address and job filled in. For everyone else, we wire the site into the system you already run.
          </p>
        </div>
        <div className="cm-scope-list">
          <ScopeRow frame={201} href="/pricing" title="A site that books jobs" body={`Four builds, from one clean page to agency grade. Take the monthly care and search plan and any build is ${usd(carePlan.buildDiscount)} less.`} meta={`FROM ${usd(withPlan)} WITH THE PLAN`} />
          <ScopeRow frame={202} href="/pricing" title="Show up on Google" body="Your Google Business Profile, a page for every town you serve, and the listings people check next: Apple Maps, Bing, Yelp. Then kept current every month on the plan." meta="PROFILE SETUP FREE WITH THE PLAN" />
          <ScopeRow frame={203} href="/pricing" title="Photos and drone" body="We fly. Your crews and job sites from the ground and the air, not a stock library. Included with Standard and up in central Ohio." meta={`INCLUDED OR FROM ${usd(lowest(shoots))}`} />
          <ScopeRow frame={204} href="/work/tradely" title="Custom software" body="Leads, site visits, estimates and contracts, on a phone in the sun. It's what we build for Tradely, and what we build for you when a website isn't the answer." meta={`${usd(software.dayRate)} / DAY`} />
        </div>
      </Section>

      <Section frame={300} label="Selected work" meta={'TWO LIVE\nONE CONCEPT\nONE PRODUCT'}>
        <p className="text-body" style={{ color: 'var(--color-muted-foreground)', maxWidth: 'var(--copy-measure)', margin: '0 0 var(--space-2xl)' }}>
          Every site looks like the client, not like us. A roofer&apos;s site shouldn&apos;t look like a security firm&apos;s.
        </p>
        <HoverPlateList
          items={[
            { frame: 301, title: 'Tradely', meta: 'PRODUCT — FIELD SERVICE', href: '/work/tradely', image: '/work/tradely-sm.jpg' },
            { frame: 302, title: 'Last Call Roofing', meta: 'LIVE — ROOFING + TRADELY', href: 'https://lastcallroofingoh.com', image: '/work/last-call-sm.jpg' },
            { frame: 303, title: 'Eubanks Electric', meta: 'LIVE — ELECTRICAL', href: 'https://eubankselectric.com', image: '/work/eubanks-sm.jpg' },
            { frame: 304, title: 'Sec/Ops', meta: 'CONCEPT — SECURITY', href: '/work', image: '/aerial/reservoir-dusk-sm.jpg' },
          ]}
        />
        <Letterbox style={{ marginTop: 'var(--space-3xl)' }} src="/aerial/jobsite-crew.jpg" caption="DJI_0408 — SITE WORK, CENTRAL OHIO" />
      </Section>
    </>
  )
}
