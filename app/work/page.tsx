import type { Metadata } from 'next'
import { Letterbox, RegisterCard, Section, WorkCard } from '@/components'

export const metadata: Metadata = {
  title: 'Work',
  description: 'Built, shipped, and labelled honestly.',
}

/* The work index. Status is honest on every entry. */
export default function WorkPage() {
  return (
    <>
      <Section frame={100} label="Work" meta={'FIVE ENTRIES\nONE LIVE'}>
        <h1 className="text-h1" style={{ margin: 0, maxWidth: '20ch' }}>Built, shipped, and labelled honestly.</h1>
        <p className="text-body-lg" style={{ color: 'var(--color-muted-foreground)', margin: 'var(--space-lg) 0 0', maxWidth: 'var(--copy-measure)' }}>
          Concept work is marked concept every time, without being asked. The studio is young; the engineering behind it is not.
        </p>
      </Section>

      <Section frame={200} label="Index" ground="surface">
        <div className="cm-autogrid">
          <WorkCard frame={201} client="Tradely" sector="Field-service software — a CarrollMedia product" status="Product" register="var(--register-trades)" image="/aerial/jobsite-excavator.jpg" href="/work/tradely" />
          <WorkCard frame={202} client="Eubanks Electric" sector="Electrical — Columbus OH" status="Live" register="var(--register-trades)" image="/aerial/transmission-tower.jpg" />
          <WorkCard frame={203} client="Pegasus Roofing" sector="Roofing — Hilliard OH" status="Concept" register="var(--register-trades)" image="/aerial/rooftops.jpg" />
          <WorkCard frame={204} client="Sec/Ops" sector="Cybersecurity — remote" status="Concept" register="var(--register-security)" image="/aerial/reservoir-dusk.jpg" />
          <WorkCard frame={205} client="Bexley Family Dental" sector="Dental practice — Bexley OH" status="Concept" register="var(--register-practice)" />
        </div>
      </Section>

      <Section frame={300} label="Registers" meta={'ONE SHELL\nTHREE REGISTERS'}>
        <p className="text-body" style={{ color: 'var(--color-muted-foreground)', maxWidth: 'var(--copy-measure)', margin: '0 0 var(--space-xl)' }}>
          Our own chrome is achromatic on purpose. Colour belongs to the client, so a roofer and a security firm can both be our work without either looking borrowed.
        </p>
        <div className="cm-autogrid cm-autogrid--220">
          <RegisterCard name="TRADES" sector="Roofing, electrical, HVAC" swatch="var(--register-trades)" note="Warm, high contrast, heavy type. Reads on a phone in daylight." />
          <RegisterCard name="SECURITY" sector="Cyber, monitoring" swatch="var(--register-security)" note="Cold accent on near-black. Data-forward, minimal photography." />
          <RegisterCard name="PRACTICE" sector="Medical, dental, legal" swatch="var(--register-practice)" note="The light register. Paper ground, calm measure, no letterboxing." />
        </div>
        <Letterbox style={{ marginTop: 'var(--space-3xl)' }} src="/aerial/transmission-fields.jpg" caption="DJI_0432 — TRANSMISSION LINES, CENTRAL OHIO" />
      </Section>
    </>
  )
}
