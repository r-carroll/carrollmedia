import type { Metadata } from 'next'
import type { CSSProperties } from 'react'
import Image from 'next/image'
import { Button, ScopeRow, Section, Tag, WorkCard } from '@/components'

export const metadata: Metadata = {
  title: 'Labs',
  description: 'Side projects, apps and talks: two apps on the App Store, a Japanese sentiment model inside Rails, and a Raspberry Pi that measures noise.',
}

/* next/image needs a literal media query here; a token can't stand in. */
// eslint-disable-next-line no-restricted-syntax
const SIZES = '(max-width: 940px) 100vw, 560px'

/* The three parts of Sentiment Omikuji, named the way the talk names them. */
const omikujiParts = [
  { kanji: '耳', name: 'The ear', body: 'bert-base-japanese-v3, fine-tuned for sentiment, exported to ONNX and run from Ruby.' },
  { kanji: '声', name: 'The voice', body: 'A Markov model over Japanese morphemes writes each fortune fresh, word by word.' },
  { kanji: '社', name: 'The shrine', body: 'Solid Queue keeps the model off the request; Solid Cable and Turbo bring the fortune back.' },
]

/* Articles on Medium, linked rather than copied: they draw developers, not
 * the local businesses this site is for, so they don't need to live here. */
const medium = 'https://carrollmedia.medium.com'
const writing = [
  { title: 'On the next generation of computer scientists', body: 'What to tell a kid who loves computers, now that a machine can build an app in minutes.', date: 'JAN 2026', href: `${medium}/on-the-next-generation-of-computer-scientists-1510e20f6fba` },
  { title: 'エンジニアの次の世代へ', body: 'The same essay, in Japanese.', date: 'JAN 2026', href: `${medium}/%E3%82%A8%E3%83%B3%E3%82%B8%E3%83%8B%E3%82%A2%E3%81%AE%E6%AC%A1%E3%81%AE%E4%B8%96%E4%BB%A3%E3%81%B8-dda2ea2e0336` },
  { title: 'Don’t grind leetcode', body: 'Puzzle practice has its place; hundreds of hours of it doesn’t. Where an engineer’s time pays off instead.', date: 'MAR 2025', href: `${medium}/dont-grind-leetcode-optimize-spending-your-time-where-it-matters-most-286014317b4d` },
  { title: 'Level up your software engineering', body: 'For early-career engineers: how to go deeper on the fundamentals when there are a hundred directions to go.', date: 'FEB 2025', href: `${medium}/level-up-your-software-engineering-game-a-practical-guide-b1bde089ac98` },
  { title: 'Japan: the second journey', body: 'A second trip, this time for people rather than sights. Visits, new connections, and a little onsen.', date: 'JUN 2026', href: `${medium}/japan-the-second-journey-ca6cbc0ae31a` },
  { title: 'An 11-day whirlwind tour of Japan', body: 'The first trip, planned around a bucket list, day by day.', date: 'SEP 2023', href: `${medium}/11-day-whirlwind-tour-of-japan-an-itinerary-f80baf3d470e` },
  { title: 'Japan travel: three essential tips', body: 'Starting with the one that matters most: learn as much Japanese as you can before you go.', date: 'SEP 2023', href: `${medium}/japan-travel-3-essential-tips-65e99649fe0c` },
]

/* Labs: the founder's own projects and talks. The one place the Japanese
 * accent from the original portfolio is sanctioned; never in the sales path.
 * Every entry links to the real thing. */
export default function LabsPage() {
  return (
    <>
      <Section frame={100} label="Labs / 実験室" meta={'FOUNDER PAGES ONLY\nNOT THE SALES PATH'}>
        <div className="cm-labs-hero">
          <div>
            <h1 className="text-h1" style={{ margin: 0, maxWidth: '16ch' }}>Built for ourselves first.</h1>
            <p className="text-body-lg" style={{ color: 'var(--color-muted-foreground)', margin: 'var(--space-lg) 0 0', maxWidth: 'var(--copy-measure)' }}>
              Two apps on the App Store, a Japanese sentiment model running inside Rails, and a Raspberry Pi that measures how loud a room gets. Most of it became a talk, two of them at CodeMash. None of it is for sale. It&apos;s where we try things before a client pays for them.
            </p>
            <div className="cm-row" style={{ marginTop: 'var(--space-xl)', gap: 'var(--space-md)' }}>
              <span className="cm-hanko" aria-hidden="true">実験</span>
              <Tag tone="concept">NOT CLIENT WORK</Tag>
            </div>
          </div>
          <div className="cm-labs-mark" aria-hidden="true">
            <span className="cm-labs-kanji">実験室</span>
            <span className="text-caption cm-labs-reading">JIKKENSHITSU — THE LAB</span>
          </div>
        </div>
      </Section>

      <Section frame={200} label="Omikuji / おみくじ" ground="surface" meta={'LIVE\nA RAILS MEETUP TALK'}>
        <div className="cm-split" style={{ '--split': 'minmax(0,1fr) minmax(0,1.1fr)' } as CSSProperties}>
          <div>
            <h2 className="text-h2" style={{ margin: 0, maxWidth: '18ch' }}>A shrine fortune, read from your words.</h2>
            <p className="text-body" style={{ color: 'var(--color-muted-foreground)', margin: 'var(--space-md) 0 0', maxWidth: 'var(--copy-measure)' }}>
              Sentiment Omikuji reads the feeling in a line of Japanese and writes a fortune to match. The model runs inside the Rails app itself, with no AI service behind it: no API bill, no rate limit, nothing sent anywhere else.
            </p>
            <div className="cm-row" style={{ marginTop: 'var(--space-xl)', gap: 'var(--space-sm)' }}>
              <Button variant="outline" size="md" href="https://sentiment-omikuji.fly.dev">Draw a fortune</Button>
              <Button variant="ghost" size="md" href="https://github.com/r-carroll/ruby-ai-prototype">Read the code</Button>
            </div>
          </div>
          <figure style={{ margin: 0 }}>
            <div style={{ position: 'relative', aspectRatio: '16 / 10', overflow: 'hidden', borderRadius: 'var(--radius-plate)', border: 'var(--hairline) solid var(--color-border)' }}>
              <Image src="/labs/omikuji.jpg" alt="Sentiment Omikuji, live" fill sizes={SIZES} className="cm-cover" />
            </div>
            <figcaption className="text-caption" style={{ marginTop: 'var(--space-sm)', color: 'var(--color-dim-foreground)' }}>SENTIMENT-OMIKUJI.FLY.DEV</figcaption>
          </figure>
        </div>
        <ol className="cm-labs-trio">
          {omikujiParts.map((part) => (
            <li key={part.name}>
              <span className="cm-labs-trio__kanji" aria-hidden="true">{part.kanji}</span>
              <span className="text-overline">{part.name}</span>
              <p className="text-body-sm" style={{ color: 'var(--color-muted-foreground)', margin: 'var(--space-xs) 0 0' }}>{part.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section frame={300} label="Projects / 作品" meta={'FOUR MORE\nTWO IN THE APP STORE'}>
        <div className="cm-autogrid cm-autogrid--240">
          <WorkCard frame={301} client="Travel Bingo" sector="Road-trip bingo for the back seat. iOS, built with React Native and Expo." status="App Store" image="/labs/travel-bingo.jpg" href="https://apps.apple.com/us/app/travel-bingo-road-trip-bingo/id6479892388" />
          <WorkCard frame={302} client="Circles" sector="Nudges you when it's time to reach out, with a private journal for each person. Nothing leaves the phone." status="App Store" image="/labs/circles.jpg" href="https://apps.apple.com/us/app/circles-relationships/id6743945385" />
          <WorkCard frame={303} client="Noise dashboard" sector="A Raspberry Pi and a sound sensor, logging decibels and charting them." status="Experiment" image="/labs/noise.jpg" href="https://github.com/r-carroll/decibel-meter" />
          <WorkCard frame={304} client="Reading tracker" sector="A small group's reading, charted by hour and day." status="Live" image="/labs/reading.jpg" href="https://smallgroup.carrollmedia.dev/reading-tracker/" />
        </div>
      </Section>

      <Section frame={400} label="Talks / 登壇" ground="surface" meta={'CODEMASH AND\nA RAILS MEETUP'}>
        <div className="cm-scope-list">
          <ScopeRow frame={401} href="https://github.com/r-carroll/ruby-ai-prototype" title="Local AI in Rails: fast, cheap and predictable" body="Training a Japanese sentiment model in Python, exporting it to ONNX, and running it inside Rails with background jobs, instead of calling an AI service." meta={'RAILS MEETUP\nCOLUMBUS'} />
          <ScopeRow frame={402} href="https://github.com/r-carroll/decibel-meter" title="Bringing ideas to life with DIY IoT" body="Off-the-shelf sensors, a Raspberry Pi and Python, from raw sensor readings to a dashboard that tells the story." meta="CODEMASH" />
          <ScopeRow frame={403} href="https://github.com/r-carroll/react-native-idea2prod" title="From idea to the App Store with React Native" body="Picking a framework, building with Expo, and getting a cross-platform app through review and into the stores." meta="CODEMASH" />
        </div>
      </Section>

      <Section frame={500} label="Writing / 執筆" meta={'ON MEDIUM\nENGINEERING AND JAPAN'}>
        <div className="cm-scope-list">
          {writing.map((post, i) => (
            <ScopeRow key={post.href} frame={501 + i} href={post.href} title={post.title} body={post.body} meta={post.date} />
          ))}
        </div>
      </Section>

      <Section frame={600} label="This site / このサイト" ground="surface" meta={'DESIGN EXPERIMENTS\nTHAT SHIPPED HERE'}>
        <div className="cm-autogrid cm-autogrid--240">
          <WorkCard frame={601} client="Scroll-scrubbed plate" sector="Interaction — the visitor operates the drone shot" status="Experiment" image="/aerial/aerial-02.jpg" />
          <WorkCard frame={602} client="Hover plate index" sector="Interaction — carried into the work index" status="Shipped" />
          <WorkCard frame={603} client="Frame-counter layout" sector="Typography — slate rail as page structure" status="Shipped" />
          <WorkCard frame={604} client="Grade ladder" sector="Colour — one plate, three grades" status="Experiment" />
        </div>
      </Section>
    </>
  )
}
