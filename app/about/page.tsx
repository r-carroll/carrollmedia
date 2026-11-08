import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
import { Letterbox, ScopeRow, Section, StatBlock, Tag } from '@/components'

export const metadata: Metadata = {
  title: 'About',
  description: 'One engineer builds the site and the software behind it. Ryan Carroll founded CarrollMedia; Brad Thompson runs sales.',
}

/* Who you work with, its own page. On sales pages Ryan appears once and
 * late; everything a hiring visitor came looking for lives here instead. */
export default function FounderPage() {
  return (
    <>
      <Section frame={100} label="About" meta={'RYAN CARROLL\nBRAD THOMPSON\nCOLUMBUS OH'}>
        <div className="cm-split" style={{ '--split': 'minmax(0,1.3fr) minmax(0,1fr)' } as CSSProperties}>
          <div>
            <h1 className="text-h1" style={{ margin: 0, maxWidth: '20ch' }}>One engineer builds the site and the software behind it.</h1>
            <p className="text-body-lg" style={{ color: 'var(--color-muted-foreground)', margin: 'var(--space-lg) 0 var(--space-md)', maxWidth: 'var(--copy-measure)' }}>
              Ryan Carroll founded CarrollMedia after ten years as a lead software engineer in insurance and healthcare — regulated systems where a bad deploy is a phone call from a lawyer, not a rollback.
            </p>
            <p className="text-body" style={{ color: 'var(--color-muted-foreground)', margin: '0 0 var(--space-xl)', maxWidth: 'var(--copy-measure)' }}>
              That is why the studio publishes prices and hands over accounts in writing. It is also why we build our own product, Tradely, rather than only writing about other people&apos;s software.
            </p>
            <div className="cm-row">
              <Tag tone="signal">SOFTWARE ENGINEERING</Tag>
              <Tag tone="signal">DESIGN</Tag>
              <Tag tone="signal">FAA PART 107</Tag>
              <Tag tone="signal">PHOTOGRAPHY</Tag>
            </div>
          </div>
          <figure style={{ margin: 0 }}>
            <div style={{ position: 'relative', aspectRatio: '4 / 5', background: 'var(--color-muted)', border: 'var(--hairline) solid var(--color-border)', borderRadius: 'var(--radius-plate)' }}>
              <span className="text-caption cm-empty-well">PORTRAIT NOT SHOT YET</span>
            </div>
            <figcaption className="text-caption" style={{ marginTop: 'var(--space-sm)' }}>RYAN CARROLL — FOUNDER</figcaption>
          </figure>
        </div>
      </Section>

      <Section frame={200} label="Who you work with" ground="surface" meta={'TWO PEOPLE\nNO HANDOFFS'}>
        <div className="cm-scope-list">
          <ScopeRow frame={201} title="Ryan Carroll" body="Founder. Designs and builds every site, and builds Tradely." meta="FOUNDER" />
          <ScopeRow frame={202} title="Brad Thompson" body="Runs sales for CarrollMedia and Tradely." meta="HEAD OF SALES" />
        </div>
      </Section>

      <Section frame={300} label="Track record">
        <StatBlock
          columns={4}
          stats={[
            { value: 10, suffix: ' yrs', label: 'Production engineering' },
            { display: 'Insurance', label: 'Regulated systems' },
            { display: 'Healthcare', label: 'Regulated systems' },
            { display: 'Part 107', label: 'Licensed to fly' },
          ]}
        />
        <div className="cm-scope-list" style={{ marginTop: 'var(--space-2xl)' }}>
          <ScopeRow frame={301} title="Lead software engineer — insurance" body="Claims and policy systems. Ten years of shipping software that other people's money depends on." meta="2015 — 2025" />
          <ScopeRow frame={302} title="Healthcare platform work" body="Patient-facing systems under audit. Where the habit of writing things down came from." meta="CONTRACT" />
          <ScopeRow frame={303} title="Founder — Tradely" body="Field-service software for the trades. A CarrollMedia product, in free pilots with a roofer and an electrician in central Ohio." meta="2024 — PRESENT" />
          <ScopeRow frame={304} title="Founder — CarrollMedia" body="Web design, software and aerial video for local businesses in central Ohio." meta="PRESENT" />
        </div>
      </Section>

      <Section frame={400} label="Why we fly" ground="surface" meta={'FAA PART 107\nIN-HOUSE'}>
        <div className="cm-split" style={{ '--split': 'minmax(0,1fr) minmax(0,1.2fr)', '--split-gap': 'var(--space-3xl)', alignItems: 'center' } as CSSProperties}>
          <p className="text-body" style={{ color: 'var(--color-muted-foreground)', margin: 0 }}>
            Very few people selling websites to a roofer can put a camera over the roof. We can, and the footage on your site is the building your customers drive past — not a stock library.
          </p>
          <Letterbox src="/aerial/farmland.jpg" grade="case" caption="DJI_0412 — CENTRAL OHIO" />
        </div>
      </Section>
    </>
  )
}
