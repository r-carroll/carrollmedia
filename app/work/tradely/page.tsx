import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
import { AerialPlate, Button, Letterbox, ScopeRow, Section, StatBlock, Tag } from '@/components'
import { callHref } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Tradely',
  description: 'Field-service software for the trades. Built and run by CarrollMedia.',
}

/* The flagship case: Tradely, a CarrollMedia product. This is the entry that
 * proves the studio ships real software, so it is the deepest one.
 * Note the grade shift — the aerial runs full colour here. */
export default function TradelyCasePage() {
  return (
    <>
      <AerialPlate src="/aerial/jobsite-excavator.jpg" grade="case" bars={false} height="72vh" slate="TRADELY / CASE 0001">
        <div className="cm-row" style={{ marginBottom: 'var(--space-lg)' }}>
          <Tag tone="record">PRODUCT</Tag>
          <Tag>FIELD SERVICE</Tag>
          <Tag>2024 — PRESENT</Tag>
        </div>
        <h1 className="text-display" style={{ margin: 0, fontSize: 'var(--display-section)', maxWidth: '18ch' }}>Tradely</h1>
        <p className="text-body-lg" style={{ color: 'var(--color-foreground)', margin: 'var(--space-md) 0 0', maxWidth: '44ch' }}>
          Field-service software for the trades. Built and run by CarrollMedia.
        </p>
      </AerialPlate>

      <Section frame={100} label="The brief" meta={'FULL COLOUR\nTHE UNGRADED SHOT\nIS THE PROOF'}>
        <div className="cm-split" style={{ '--split': 'minmax(0,1.2fr) minmax(0,1fr)' } as CSSProperties}>
          <div>
            <h2 className="text-h2" style={{ margin: 0, maxWidth: '22ch' }}>A contractor&apos;s day does not fit in a spreadsheet.</h2>
            <p className="text-body" style={{ color: 'var(--color-muted-foreground)', margin: 'var(--space-lg) 0 0', maxWidth: 'var(--copy-measure)' }}>
              Tradely started because the same problem kept coming up in discovery: the estimate lives in a truck, the schedule lives in a phone, and the invoice lives in someone&apos;s head until Friday. We built scheduling, estimating and follow-up as one thing, then ran it against real jobs before selling it to anyone.
            </p>
            <p className="text-body" style={{ color: 'var(--color-muted-foreground)', margin: 'var(--space-lg) 0 0', maxWidth: 'var(--copy-measure)' }}>
              It sits under CarrollMedia as a product, not a side project. That is the argument for hiring us on a website: the same people who ship your marketing site also ship production software with real customers on it.
            </p>
          </div>
          <StatBlock
            columns={2}
            stats={[
              { value: 10, suffix: ' yrs', label: 'Engineering behind it' },
              { display: 'Live', label: 'Status' },
              { display: '3', label: 'Modules shipped' },
              { display: 'Own', label: 'Design system' },
            ]}
          />
        </div>
      </Section>

      <Section frame={200} label="What shipped" ground="surface">
        <div className="cm-scope-list">
          <ScopeRow frame={201} title="Scheduling" body="Dispatch, crew assignment and a day view a foreman can read on a phone in the sun." meta="SHIPPED" />
          <ScopeRow frame={202} title="Estimating" body="Line-item estimates that turn into invoices without being retyped." meta="SHIPPED" />
          <ScopeRow frame={203} title="Follow-up" body="Reminders and review requests that office staff will actually use." meta="SHIPPED" />
        </div>
        <Letterbox style={{ marginTop: 'var(--space-3xl)' }} caption="PRODUCT SCREENS LIVE IN THE TRADELY DESIGN SYSTEM — NOT DUPLICATED HERE." />
      </Section>

      <Section frame={300} label="Next" meta="ONE ACTION">
        <div style={{ display: 'flex', gap: 'var(--space-2xl)', alignItems: 'center', flexWrap: 'wrap' }}>
          <h2 className="text-h1" style={{ margin: 0, maxWidth: '16ch' }}>Want the same engineering on your site?</h2>
          <Button variant="action" size="lg" href={callHref}>Talk to us</Button>
        </div>
      </Section>
    </>
  )
}
