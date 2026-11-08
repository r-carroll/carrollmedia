import type { Metadata } from 'next'
import { CallStrip, PriceBuilder, ScopeRow, ScopeStrip, Section, StatBlock, Tag } from '@/components'
import { builds, carePlan, discountMonths, findAddOns, migration, pricesConfirmed, shoots, software, thirdParty, usd } from '@/lib/pricing'
import { frameNumber, googleThirdPartyHref, site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'What we build and what it costs. Pick a build, add what you need, and see the total.',
}

const steps = [
  [301, 'The call', 'Thirty minutes on the phone with your site up. We ask what a good job is worth before we say a word about design.'],
  [302, 'Scope and price', 'One page: what you picked, the timeline, the fixed price, and what you own at the end. Half up front.'],
  [303, 'Shoot and build', 'Half a day on site with the camera if your build includes it, then a staging link you can share.'],
  [304, 'Launch and hand over', 'Domain, code, hosting and analytics in your accounts, in writing, at launch. Run it yourself, or have us run it monthly.'],
] as const

/* Services and prices on one page. Every price is public; clients differ only
 * in what they pick, and the call turns the builder's total into a fixed
 * scope. A money page with no form gate: nothing here shrinks to a caption. */
export default function PricingPage() {
  return (
    <>
      <Section frame={100} label="Pricing" meta={'PUBLISHED\nNOT ON REQUEST'}>
        <h1 className="text-h1" style={{ margin: 0, maxWidth: '20ch' }}>The prices are on the page.</h1>
        <p className="text-body-lg" style={{ color: 'var(--color-muted-foreground)', margin: 'var(--space-lg) 0 0', maxWidth: 'var(--copy-measure)' }}>
          Pick a build, add what you need, and the total is right there. Half up front, half at launch, and nothing to pay if you leave us later.
        </p>
        {!pricesConfirmed ? (
          <div className="cm-row" style={{ gap: 'var(--space-md)', marginTop: 'var(--space-2xl)' }}>
            <Tag tone="concept">PLACEHOLDER PRICES</Tag>
            <p className="text-body-sm" style={{ color: 'var(--color-muted-foreground)', margin: 0 }}>
              These figures are being checked against the central Ohio market. Don&apos;t quote them yet.
            </p>
          </div>
        ) : null}
      </Section>

      <Section frame={200} label="Build your price" ground="surface" meta={'NOTHING SENT\nNO FORM'}>
        <PriceBuilder builds={builds} addOns={findAddOns} shoots={shoots} migration={migration} care={carePlan} />
      </Section>

      <ScopeStrip src="/aerial/reservoir-treeline.jpg" timecode="00:01:14:08" />

      <Section frame={300} label="How it runs" meta={'FOUR STEPS\nNO ACCOUNT MANAGER'}>
        <ol className="cm-autogrid cm-autogrid--200" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
          {steps.map(([n, title, body]) => (
            <li key={n}>
              <span className="text-frame" style={{ color: 'var(--color-dim-foreground)' }}>{frameNumber(n)}</span>
              <h3 className="text-h3" style={{ margin: 'var(--space-sm) 0 var(--space-xs)' }}>{title}</h3>
              <p className="text-body-sm" style={{ color: 'var(--color-muted-foreground)', margin: 0 }}>{body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section frame={400} label="Custom software" ground="surface" meta={'FIXED PHASES\nPRICED BEFORE\nEACH STARTS'}>
        <div className="cm-split" style={{ alignItems: 'center' }}>
          <div>
            <h2 className="text-h2" style={{ margin: 0, maxWidth: '20ch' }}>When a website isn&apos;t the answer.</h2>
            <p className="text-body" style={{ color: 'var(--color-muted-foreground)', margin: 'var(--space-md) 0 0', maxWidth: 'var(--copy-measure-tight)' }}>
              Scheduling, estimating, follow-up, invoicing. Ten years of production engineering in insurance and healthcare, pointed at your operation. We price each phase before it starts, so you never sign up for a number you can&apos;t see.
            </p>
          </div>
          <StatBlock
            columns={2}
            stats={[
              { display: usd(software.dayRate), label: 'Per day' },
              { display: usd(software.firstPhaseFrom), label: 'First phase from' },
            ]}
          />
        </div>
      </Section>

      <Section frame={500} label="What you own" meta={'IN YOUR NAME\nON YOUR CARD'}>
        <div className="cm-split" style={{ alignItems: 'center' }}>
          <div>
            <h2 className="text-h2" style={{ margin: 0, maxWidth: '18ch' }}>No retainer for work that already shipped.</h2>
            <div className="cm-row" style={{ marginTop: 'var(--space-lg)' }}>
              <Tag tone="signal">DOMAIN</Tag>
              <Tag tone="signal">CODE</Tag>
              <Tag tone="signal">HOSTING</Tag>
              <Tag tone="signal">ANALYTICS</Tag>
            </div>
          </div>
          <StatBlock
            columns={2}
            stats={[
              { display: '$0', label: 'Required monthly' },
              { display: '100%', label: 'Yours at launch' },
            ]}
          />
        </div>
        <p className="text-body" style={{ color: 'var(--color-muted-foreground)', margin: 'var(--space-3xl) 0 var(--space-lg)', maxWidth: 'var(--copy-measure)' }}>
          We set these up in your name and they bill you directly, not through us, so you can fire us and keep all of it.
        </p>
        <div className="cm-scope-list">
          {thirdParty.map((item, i) => (
            <ScopeRow key={item.name} frame={501 + i} title={item.name} body={item.body} meta={item.cost} />
          ))}
        </div>

        <div className="cm-split" style={{ marginTop: 'var(--space-4xl)' }}>
          <div>
            <h3 className="text-h2" style={{ margin: 0, maxWidth: '18ch' }}>Or let us run it.</h3>
            <p className="text-body" style={{ color: 'var(--color-muted-foreground)', margin: 'var(--space-md) 0 var(--space-lg)', maxWidth: 'var(--copy-measure-tight)' }}>
              You own it; we look after it and keep you findable on Google. We&apos;re added as an admin on your accounts, and you pay us to run the site, never to keep access to it. Cancel with a phone call.
            </p>
            <p className="text-body" style={{ color: 'var(--color-foreground)', margin: '0 0 var(--space-lg)', maxWidth: 'var(--copy-measure-tight)' }}>
              Take the plan and any build is {usd(carePlan.buildDiscount)} less. Leave in the first {discountMonths(carePlan)} months and you pay the rest of the regular build price.
            </p>
            <div className="cm-row" style={{ alignItems: 'baseline', gap: 'var(--space-sm)' }}>
              <span className="text-num" style={{ fontSize: 'var(--text-5xl)', lineHeight: 1, color: 'var(--color-foreground)' }}>{usd(carePlan.price)}</span>
              <span className="text-label" style={{ color: 'var(--color-dim-foreground)' }}>/ MO / OPTIONAL / CANCEL ANYTIME</span>
            </div>
          </div>
          <div>
            <ul className="cm-price__includes" style={{ margin: 0, padding: 0, border: 0 }}>
              {carePlan.includes.map((line) => (
                <li key={line} className="cm-price__line">
                  <span className="text-num cm-price__dash" aria-hidden="true">—</span>
                  <span className="text-body-sm" style={{ color: 'var(--color-foreground)' }}>{line}</span>
                </li>
              ))}
            </ul>
            <p className="text-body-sm" style={{ color: 'var(--color-muted-foreground)', margin: 'var(--space-lg) 0 0' }}>
              Your Business Profile is free from Google; the plan is our fee for managing it. You stay the owner and add us as a manager. Google&apos;s notice on{' '}
              <a href={googleThirdPartyHref} className="cm-link" target="_blank" rel="noopener noreferrer">working with a third party</a>{' '}
              explains what that means.
            </p>
          </div>
        </div>
      </Section>

      <Section frame={600} id="start-here" label="Start here" ground="surface" meta={'30 MINUTES\nON THE PHONE\nNO SLIDES'}>
        <div style={{ maxWidth: '48ch' }}>
          <h2 className="text-h2" style={{ margin: 0, maxWidth: '20ch' }}>You don&apos;t have to decide anything to have the call.</h2>
          <p className="text-body" style={{ color: 'var(--color-muted-foreground)', margin: 'var(--space-md) 0 var(--space-xl)' }}>
            Thirty minutes with your site up on the screen. You tell us what a good job is worth and which ones you&apos;d rather stop taking; we tell you what&apos;s standing in the way. You leave with a one-page scope and the number on it, whether or not you hire us.
          </p>
          <CallStrip email />
        </div>
      </Section>
    </>
  )
}
