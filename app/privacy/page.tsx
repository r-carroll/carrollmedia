import type { Metadata } from 'next'
import { Section } from '@/components'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How CarrollMedia, LLC handles website visitor data and Google Business Profile data.',
  alternates: { canonical: '/privacy' },
}

const heading = { margin: 'var(--space-2xl) 0 var(--space-sm)' }
const body = { color: 'var(--color-muted-foreground)', margin: '0 0 var(--space-md)', maxWidth: '65ch' }
const list = { ...body, paddingLeft: 'var(--space-lg)' }

export default function PrivacyPage() {
  return (
    <Section frame={100} label="Privacy" meta={'EFFECTIVE\nNOVEMBER 6, 2026'}>
      <h1 className="text-h1" style={{ margin: '0 0 var(--space-lg)' }}>Privacy Policy</h1>

      <p className="text-body" style={body}>
        CarrollMedia, LLC is a web design and software studio in Columbus, Ohio. This policy covers
        this website and the tools we use to manage Google Business Profiles for our clients,
        including our CarrollMedia SEO app.
      </p>

      <h2 className="text-h3" style={heading}>This website</h2>
      <p className="text-body" style={body}>
        We use Vercel Analytics and Vercel Speed Insights to see how many people visit this site
        and how well it performs. If you email us, we keep your message so we can reply. We
        don&apos;t sell this information.
      </p>

      <h2 className="text-h3" style={heading}>Google Business Profile data</h2>
      <p className="text-body" style={body}>
        Our app signs in to Google with one CarrollMedia account. It can only reach the Business
        Profiles of clients who have given CarrollMedia Manager access. For those profiles, it can
        access:
      </p>
      <ul className="text-body" style={list}>
        <li>Business details, such as name, address, hours and services</li>
        <li>Reviews, including the reviewer&apos;s name and review text, and any replies</li>
        <li>Posts and photos</li>
        <li>Performance information about the profile</li>
      </ul>

      <h2 className="text-h3" style={heading}>How we use it</h2>
      <p className="text-body" style={body}>
        We use this data only to manage our clients&apos; profiles: to draft review replies and posts,
        add photos, keep business details accurate, and report results to the client. A person
        approves every reply, post or change before it goes public. We don&apos;t sell this data or use
        it for advertising.
      </p>

      <h2 className="text-h3" style={heading}>Who we share it with</h2>
      <p className="text-body" style={body}>
        We share this data only as needed to do this work, with the client whose profile it is and
        with the service providers we use. Those providers include an AI model provider that helps
        us draft replies and posts, and the hosting and code storage services that hold our work
        records. We may also disclose data if the law requires it.
      </p>

      <h2 className="text-h3" style={heading}>How long we keep it</h2>
      <ul className="text-body" style={list}>
        <li>Review text and reviewer names received through Google&apos;s API: no more than 30 days.</li>
        <li>Review IDs, our drafts, approvals and records of what we did: up to 24 months.</li>
      </ul>
      <p className="text-body" style={body}>
        When a client leaves, we remove our access to their profile and delete reviewers&apos; personal
        details from our records.
      </p>

      <h2 className="text-h3" style={heading}>Your choices</h2>
      <p className="text-body" style={body}>
        A business owner can end our access at any time by removing CarrollMedia from their
        profile&apos;s People and access settings. If you left a review for one of our clients, or you
        want to ask about or delete information we hold about you, email us.
      </p>

      <h2 className="text-h3" style={heading}>Changes</h2>
      <p className="text-body" style={body}>
        If this policy changes, we&apos;ll update this page and its effective date.
      </p>

      <h2 className="text-h3" style={heading}>Contact</h2>
      <p className="text-body" style={body}>
        CarrollMedia, LLC, Columbus, OH
        <br />
        <a href={`mailto:${site.email}`} className="cm-link">{site.email}</a>
      </p>
    </Section>
  )
}
