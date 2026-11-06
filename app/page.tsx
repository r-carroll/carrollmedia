import type { CSSProperties } from 'react'
import { AerialPlate, Button, CallStrip, HoverPlateList, Letterbox, ScopeRow, Section, StatBlock, Tag } from '@/components'
import { builds, findAddOns, lowest, shoots, software, usd } from '@/lib/pricing'
import { callHref, callNote, site } from '@/lib/site'

/* Masthead, the offer, what we do, and the work index. The cinema is the
 * frame; the offer and the numbers stay at full size. */
export default function HomePage() {
  return (
    <>
      <AerialPlate src="/aerial/hero-poster.jpg" video="/aerial/hero.mp4" videoSmall="/aerial/hero-720.mp4" slate="CM_HERO_V2 / 1080 30P / OHIO">
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)', marginBottom: 'var(--space-lg)' }}>
          <span style={{ width: 34, height: 'var(--hairline)', background: 'var(--color-foreground)' }} />
          <span className="text-overline">A web studio in Columbus, Ohio</span>
        </div>
        <h1 className="text-display" data-reveal="rise" style={{ margin: 0, maxWidth: 'var(--headline-measure)' }}>
          Websites that book <span style={{ color: 'var(--color-action-text)' }}>jobs,</span> not compliments.
        </h1>
        <div style={{ display: 'flex', gap: 'var(--space-sm)', marginTop: 'var(--space-2xl)', flexWrap: 'wrap' }}>
          <Button variant="action" size="lg" href={callHref}>Talk to us</Button>
          <Button variant="outline" size="lg" href="/work">See the work</Button>
        </div>
      </AerialPlate>

      <Section frame={100} label="The offer" meta={'ON THE PHONE\nNO SLIDES'}>
        <div className="cm-split" style={{ '--split': 'minmax(0,1.15fr) minmax(0,1fr)' } as CSSProperties}>
          <div>
            <h2 className="text-h1" style={{ margin: 0, maxWidth: '22ch' }}>
              Anyone judging your site without your numbers is guessing.
            </h2>
            <p className="text-body-lg" style={{ color: 'var(--color-muted-foreground)', margin: 'var(--space-lg) 0 var(--space-md)', maxWidth: 'var(--copy-measure-tight)' }}>
              We can see your site is slow. We can&apos;t see which jobs make you money, which ones you&apos;d rather stop taking, or what a replacement is worth against a repair. That comes from asking.
            </p>
            <p className="text-body-lg" style={{ color: 'var(--color-foreground)', margin: '0 0 var(--space-2xl)', maxWidth: 'var(--copy-measure-tight)' }}>
              So call us. Thirty minutes, your site up on the screen, and we go through it while you tell us what you&apos;re actually trying to book.
            </p>
            <CallStrip note={callNote} secondary={`OR ${site.email.toUpperCase()}`} />
          </div>
          <StatBlock
            columns={2}
            stats={[
              { value: 10, suffix: ' yrs', label: 'Building software' },
              { display: '2–3 wks', label: 'Typical build' },
              { display: usd(lowest(builds)), label: 'Sites from' },
            ]}
          />
        </div>
      </Section>

      <Section frame={200} label="What we do" ground="surface" meta={'FOUR THINGS\nPRICED IN PUBLIC'}>
        <div style={{ display: 'flex', gap: 'var(--space-md)', alignItems: 'center', margin: '0 0 var(--space-2xl)', flexWrap: 'wrap' }}>
          <Tag tone="signal">THE DIFFERENCE</Tag>
          <p className="text-body-lg" style={{ color: 'var(--color-foreground)', margin: 0, maxWidth: 'var(--copy-measure)' }}>
            We fly. Standard builds and up in central Ohio include a half-day on site with a camera and a drone, so the photography on your site is your crews and your roofs — not a stock library.
          </p>
        </div>
        <div className="cm-scope-list">
          <ScopeRow frame={201} href="/pricing" title="A site that books jobs" body="Four builds, from one clean page to agency grade with a design system. New, or moved off the platform renting yours to you." meta={`FROM ${usd(lowest(builds))}`} />
          <ScopeRow frame={202} href="/pricing" title="Show up on Google" body="Google Business Profile, search setup, and the listings people check next: Apple Maps, Bing, Yelp." meta={`FROM ${usd(lowest(findAddOns))}`} />
          <ScopeRow frame={203} href="/pricing" title="Photos and drone" body="Your crews and job sites, from the ground and the air. Included with Standard and up in central Ohio." meta={`INCLUDED OR FROM ${usd(lowest(shoots))}`} />
          <ScopeRow frame={204} href="/pricing" title="Custom software" body="When a website is not the answer. Scheduling, estimates, follow-up. This is what we do all day." meta={`${usd(software.dayRate)} / DAY`} />
        </div>
      </Section>

      <Section frame={300} label="Selected work" meta={'ONE LIVE\nTWO CONCEPT\nONE PRODUCT'}>
        <p className="text-body" style={{ color: 'var(--color-muted-foreground)', maxWidth: 'var(--copy-measure)', margin: '0 0 var(--space-2xl)' }}>
          Every site looks like the client, not like us. A roofer&apos;s site shouldn&apos;t look like a security firm&apos;s.
        </p>
        <HoverPlateList
          items={[
            { frame: 301, title: 'Tradely', meta: 'PRODUCT — FIELD SERVICE', href: '/work/tradely', image: '/aerial/jobsite-excavator-sm.jpg' },
            { frame: 302, title: 'Eubanks Electric', meta: 'LIVE — ELECTRICAL', href: '/work', image: '/aerial/transmission-tower-sm.jpg' },
            { frame: 303, title: 'Pegasus Roofing', meta: 'CONCEPT — ROOFING', href: '/work', image: '/aerial/rooftops-sm.jpg' },
            { frame: 304, title: 'Sec/Ops', meta: 'CONCEPT — SECURITY', href: '/work', image: '/aerial/reservoir-dusk-sm.jpg' },
          ]}
        />
        <Letterbox style={{ marginTop: 'var(--space-3xl)' }} src="/aerial/jobsite-crew.jpg" caption="DJI_0408 — SITE WORK, CENTRAL OHIO" />
      </Section>
    </>
  )
}
