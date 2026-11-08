import type { Metadata } from 'next'
import { Section, Tag, WorkCard } from '@/components'

export const metadata: Metadata = {
  title: 'Labs',
  description: 'Side work, tools and experiments. None of it is for sale.',
}

/* Labs — the founder's experiments. The one place the Japanese accent from the
 * original portfolio is still sanctioned; never in the sales path. */
export default function LabsPage() {
  return (
    <>
      <Section frame={100} label="Labs / 実験室" meta={'FOUNDER PAGES ONLY\nNOT THE SALES PATH'}>
        <h1 className="text-h1" style={{ margin: 0, maxWidth: '18ch' }}>Things built to find out.</h1>
        <p className="text-body-lg" style={{ color: 'var(--color-muted-foreground)', margin: 'var(--space-lg) 0 0', maxWidth: 'var(--copy-measure)' }}>
          Side work, tools and experiments. None of it is for sale. It is here because range is the thing a design client is actually buying.
        </p>
        <div className="cm-row" style={{ marginTop: 'var(--space-lg)' }}>
          <Tag tone="concept">NOT CLIENT WORK</Tag>
        </div>
      </Section>

      <Section frame={200} label="Experiments" ground="surface">
        <div className="cm-autogrid cm-autogrid--240">
          <WorkCard frame={201} client="Scroll-scrubbed plate" sector="Interaction — the visitor operates the drone shot" status="Experiment" image="/aerial/aerial-02.jpg" />
          <WorkCard frame={202} client="Hover plate index" sector="Interaction — carried into the work index" status="Shipped" />
          <WorkCard frame={203} client="Frame-counter layout" sector="Typography — slate rail as page structure" status="Shipped" />
          <WorkCard frame={204} client="Grade ladder" sector="Colour — one plate, three grades" status="Experiment" />
        </div>
      </Section>
    </>
  )
}
