import { Button, Section } from '@/components'

export default function NotFound() {
  return (
    <Section frame={404} label="Not found" meta="NO FOOTAGE AT THIS ADDRESS">
      <h1 className="text-h1" style={{ margin: 0, maxWidth: '18ch' }}>Nothing shot here.</h1>
      <p className="text-body-lg" style={{ color: 'var(--color-muted-foreground)', margin: 'var(--space-lg) 0 var(--space-2xl)', maxWidth: 'var(--copy-measure)' }}>
        This page doesn&apos;t exist. If you followed an old link, the original portfolio still lives at old.carrollmedia.dev.
      </p>
      <div className="cm-row" style={{ gap: 'var(--space-sm)' }}>
        <Button variant="action" href="/">Back to the start</Button>
        <Button variant="outline" href="https://old.carrollmedia.dev">Old site</Button>
      </div>
    </Section>
  )
}
