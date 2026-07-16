'use client'

import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

// ---------------------------------------------------------------------------
// Palette
// ---------------------------------------------------------------------------
const GREEN = '#2ee87e'
const YELLOW = '#ffd23f'
const RED = '#ff3b57'
const INK = '#0a0a12'
const PANEL = '#12121d'

const CONCERT_DATE = new Date('2026-10-03T19:30:00-04:00')

// ---------------------------------------------------------------------------
// Typewriter
// ---------------------------------------------------------------------------
function useTypewriter(lines: string[], speed = 22, startDelay = 600) {
  const total = useMemo(() => lines.reduce((a, l) => a + l.length, 0), [lines])
  const [count, setCount] = useState(0)

  useEffect(() => {
    let i = 0
    let interval: ReturnType<typeof setInterval>
    const start = setTimeout(() => {
      interval = setInterval(() => {
        i += 1
        setCount(i)
        if (i >= total) clearInterval(interval)
      }, speed)
    }, startDelay)
    return () => {
      clearTimeout(start)
      clearInterval(interval)
    }
  }, [total, speed, startDelay])

  const rendered: string[] = []
  let remaining = count
  for (const line of lines) {
    if (remaining <= 0) break
    rendered.push(line.slice(0, remaining))
    remaining -= line.length
  }
  return { rendered, done: count >= total }
}

// ---------------------------------------------------------------------------
// Stage 1 — Incoming transmission
// ---------------------------------------------------------------------------
const TRANSMISSION_LINES = [
  '> INCOMING TRANSMISSION . . .',
  '> SOURCE: U.A. HIGH COMMAND // DAYTON BRANCH',
  '> CLEARANCE: TOP SECRET — HERO EYES ONLY',
  '> RECIPIENT: PRO HERO "REBECCA"',
  '> COURIER: THE WING HERO ・ DELIVERED BY CRIMSON FEATHER',
  '> DECRYPTING MISSION FILE 0716 . . .',
  '> DECRYPTION COMPLETE.',
]

function Transmission({ onAccept }: { onAccept: () => void }) {
  const { rendered, done } = useTypewriter(TRANSMISSION_LINES)

  return (
    <div className="relative flex min-h-[100dvh] flex-col items-center justify-center px-6">
      {/* scanlines */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, rgba(46,232,126,0.06) 0px, rgba(46,232,126,0.06) 1px, transparent 1px, transparent 3px)',
        }}
      />
      <div className="w-full max-w-xl font-mono text-sm sm:text-base" style={{ color: GREEN }}>
        {rendered.map((line, i) => (
          <p key={i} className="mb-3 whitespace-pre-wrap leading-relaxed">
            {line}
            {i === rendered.length - 1 && !done && <span className="animate-pulse">▋</span>}
          </p>
        ))}
        {done && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-10 flex justify-center"
          >
            <button
              onClick={onAccept}
              className="border-2 px-8 py-4 font-mono text-lg tracking-[0.2em] transition-transform active:scale-95"
              style={{
                borderColor: GREEN,
                color: GREEN,
                boxShadow: `0 0 24px rgba(46,232,126,0.35), inset 0 0 12px rgba(46,232,126,0.15)`,
              }}
            >
              [ ACCEPT MISSION ]
            </button>
          </motion.div>
        )}
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Decorative lightning (One For All crackle)
// ---------------------------------------------------------------------------
function Lightning({ className, flip = false }: { className?: string; flip?: boolean }) {
  return (
    <motion.svg
      viewBox="0 0 120 200"
      className={className}
      style={{ transform: flip ? 'scaleX(-1)' : undefined }}
      animate={{ opacity: [0, 1, 0.3, 1, 0] }}
      transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 2.2, ease: 'easeInOut' }}
      aria-hidden
    >
      <polyline
        points="60,0 40,60 70,70 30,140 55,145 20,200"
        fill="none"
        stroke={GREEN}
        strokeWidth="4"
        strokeLinejoin="round"
        style={{ filter: `drop-shadow(0 0 6px ${GREEN})` }}
      />
      <polyline
        points="90,20 75,70 95,80 65,150"
        fill="none"
        stroke={YELLOW}
        strokeWidth="2.5"
        strokeLinejoin="round"
        style={{ filter: `drop-shadow(0 0 4px ${YELLOW})` }}
      />
    </motion.svg>
  )
}

// ---------------------------------------------------------------------------
// Hawks — crimson feathers
// ---------------------------------------------------------------------------
const CRIMSON = '#d92638'

function Feather({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 40 100" className={className} style={style} aria-hidden>
      <path
        d="M20,4 C33,22 37,58 21,96 C8,62 7,26 20,4 Z"
        fill={CRIMSON}
        style={{ filter: `drop-shadow(0 0 4px rgba(217,38,56,0.5))` }}
      />
      <path d="M20,10 C21,40 21,68 21,92" stroke="#8e1220" strokeWidth="2" fill="none" />
      <path d="M21,30 L30,22 M21,44 L32,36 M21,58 L31,52 M20,32 L11,25 M20,46 L9,39 M20,60 L10,54" stroke="#8e1220" strokeWidth="1" opacity="0.6" />
    </svg>
  )
}

const DRIFTING_FEATHERS = [
  { left: '6%', size: 26, duration: 13, delay: 0, sway: 34 },
  { left: '22%', size: 18, duration: 16, delay: 4, sway: -28 },
  { left: '41%', size: 22, duration: 14, delay: 8, sway: 40 },
  { left: '58%', size: 16, duration: 17, delay: 2, sway: -36 },
  { left: '74%', size: 24, duration: 15, delay: 6, sway: 30 },
  { left: '90%', size: 19, duration: 18, delay: 10, sway: -32 },
]

function FeatherDrift() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {DRIFTING_FEATHERS.map((f, i) => (
        <motion.div
          key={i}
          className="absolute -top-24"
          style={{ left: f.left, width: f.size, opacity: 0.75 }}
          initial={{ y: -100 }}
          animate={{
            y: '110vh',
            x: [0, f.sway, -f.sway * 0.6, f.sway * 0.8, 0],
            rotate: [10, f.sway * 1.5, -f.sway, f.sway, 20],
          }}
          transition={{
            duration: f.duration,
            delay: f.delay,
            repeat: Infinity,
            ease: 'linear',
            x: { duration: f.duration, delay: f.delay, repeat: Infinity, ease: 'easeInOut' },
            rotate: { duration: f.duration, delay: f.delay, repeat: Infinity, ease: 'easeInOut' },
          }}
        >
          <Feather className="w-full" />
        </motion.div>
      ))}
    </div>
  )
}

// ---------------------------------------------------------------------------
// Title hero
// ---------------------------------------------------------------------------
function TitleHero() {
  return (
    <div className="relative overflow-hidden px-6 pb-20 pt-24 text-center">
      {/* manga speed lines */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            'repeating-conic-gradient(from 0deg at 50% 42%, transparent 0deg 5deg, rgba(255,255,255,0.04) 5deg 6deg)',
        }}
      />
      <Lightning className="absolute -left-4 top-8 w-20 sm:left-8 sm:w-28" />
      <Lightning className="absolute -right-4 top-24 w-20 sm:right-8 sm:w-28" flip />
      <FeatherDrift />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mx-auto mb-10 inline-block border px-4 py-1 font-mono text-[11px] tracking-[0.35em]"
        style={{ borderColor: 'rgba(255,255,255,0.25)', color: 'rgba(255,255,255,0.6)' }}
      >
        U.A. HIGH COMMAND ・ CONFIDENTIAL BRIEFING
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 40, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: 'spring', stiffness: 120, damping: 14, delay: 0.35 }}
        className="font-[family-name:var(--font-bangers)] leading-none"
      >
        <span
          className="block text-5xl tracking-wide sm:text-7xl"
          style={{ color: '#fff', textShadow: `4px 4px 0 ${RED}` }}
        >
          HAPPY BIRTHDAY
        </span>
        <span
          className="mt-2 block -rotate-2 text-7xl tracking-wide sm:text-9xl"
          style={{
            color: YELLOW,
            WebkitTextStroke: '2px #000',
            textShadow: `6px 6px 0 ${GREEN}, 12px 12px 0 rgba(0,0,0,0.5)`,
          }}
        >
          REBECCA
        </span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, scale: 3, rotate: -30 }}
        animate={{ opacity: 1, scale: 1, rotate: -8 }}
        transition={{ type: 'spring', stiffness: 200, damping: 16, delay: 1.1 }}
        className="mx-auto mt-12 inline-block border-4 px-6 py-2 font-[family-name:var(--font-bangers)] text-3xl tracking-[0.15em] sm:text-4xl"
        style={{ borderColor: RED, color: RED, background: 'rgba(255,59,87,0.08)' }}
      >
        PLUS ULTRA!
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="mx-auto mt-12 max-w-md text-lg leading-relaxed text-white/70"
      >
        A two-phase mission has been commissioned in your honor.
        <br />
        But first — every hero consults the fates.
      </motion.p>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        className="mt-14 text-2xl text-white/40"
        aria-hidden
      >
        ▼
      </motion.div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Omikuji — the rigged fortune draw
// ---------------------------------------------------------------------------
type DrawState = 'idle' | 'shaking' | 'revealed'

function OmikujiBox() {
  return (
    <div className="relative mx-auto h-56 w-40">
      {/* lid */}
      <div
        className="absolute left-1/2 top-0 h-10 w-44 -translate-x-1/2 rounded-md border-2 border-black/40"
        style={{ background: 'linear-gradient(180deg, #c22537, #9e1c2c)' }}
      >
        <div className="absolute left-1/2 top-1/2 h-4 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/70" />
      </div>
      {/* body */}
      <div
        className="absolute left-1/2 top-9 h-44 w-36 -translate-x-1/2 rounded-b-md border-2 border-black/40"
        style={{ background: 'linear-gradient(180deg, #b02133, #8c1826)' }}
      >
        <div className="absolute inset-x-0 top-4 h-2" style={{ background: YELLOW, opacity: 0.85 }} />
        <div className="absolute inset-x-0 bottom-4 h-2" style={{ background: YELLOW, opacity: 0.85 }} />
        <p
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl font-bold text-white/95"
          style={{ writingMode: 'vertical-rl', letterSpacing: '0.3em' }}
        >
          おみくじ
        </p>
      </div>
    </div>
  )
}

function FortuneCard() {
  return (
    <motion.div
      initial={{ rotateY: 90, opacity: 0 }}
      animate={{ rotateY: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 90, damping: 14 }}
      className="mx-auto w-full max-w-sm border-4 border-black bg-[#fbf6ea] p-6 text-left text-neutral-900"
      style={{ boxShadow: `10px 10px 0 ${RED}` }}
    >
      <div className="flex items-start justify-between border-b-2 border-dashed border-neutral-400 pb-4">
        <div>
          <p className="font-mono text-[11px] tracking-[0.3em] text-neutral-500">第一番 ・ FORTUNE No. 1</p>
          <p
            className="mt-2 font-[family-name:var(--font-bangers)] text-5xl tracking-wide"
            style={{ color: '#b02133' }}
          >
            GREAT BLESSING
          </p>
        </div>
        <p
          className="text-5xl font-bold leading-none"
          style={{ color: '#b02133', writingMode: 'vertical-rl' }}
        >
          大吉
        </p>
      </div>

      <dl className="mt-5 space-y-4 text-[15px] leading-snug">
        <div>
          <dt className="font-bold" style={{ color: '#b02133' }}>恋愛 — Love</dt>
          <dd className="text-neutral-700">Absolutely thriving. No further action required.</dd>
        </div>
        <div>
          <dt className="font-bold" style={{ color: '#b02133' }}>食運 — Food Luck</dt>
          <dd className="text-neutral-700">Exceptional tonight. Order the extra slice.</dd>
        </div>
        <div>
          <dt className="font-bold" style={{ color: '#b02133' }}>音楽運 — Music Luck</dt>
          <dd className="text-neutral-700">An orchestra assembles in your honor. Goosebumps guaranteed.</dd>
        </div>
        <div>
          <dt className="font-bold" style={{ color: '#b02133' }}>羽根運 — Feather Luck</dt>
          <dd className="text-neutral-700">A crimson feather drifts your way. The No. 2 hero sends his regards.</dd>
        </div>
        <div>
          <dt className="font-bold" style={{ color: '#b02133' }}>ヒーロー運 — Hero Luck</dt>
          <dd className="text-neutral-700">Unnecessary. You already are one.</dd>
        </div>
      </dl>

      <p className="mt-6 border-t-2 border-dashed border-neutral-400 pt-4 text-center font-mono text-[11px] tracking-widest text-neutral-500">
        THE FATES DID NOT NEED TO BE BRIBED. BUT THEY WERE.
      </p>
    </motion.div>
  )
}

function Burst() {
  const particles = useMemo(
    () =>
      Array.from({ length: 28 }, (_, i) => {
        const angle = (i / 28) * Math.PI * 2 + Math.random() * 0.4
        const dist = 90 + Math.random() * 140
        return {
          x: Math.cos(angle) * dist,
          y: Math.sin(angle) * dist,
          color: [GREEN, YELLOW, RED, '#fff'][i % 4],
          duration: 0.7 + Math.random() * 0.6,
        }
      }),
    []
  )
  return (
    <div className="pointer-events-none absolute inset-0 overflow-visible" aria-hidden>
      {particles.map((p, i) => (
        <motion.span
          key={i}
          initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
          animate={{ x: p.x, y: p.y, opacity: 0, scale: 0.2 }}
          transition={{ duration: p.duration, ease: 'easeOut' }}
          className="absolute left-1/2 top-1/2 h-2.5 w-2.5 rounded-full"
          style={{ background: p.color, boxShadow: `0 0 8px ${p.color}` }}
        />
      ))}
    </div>
  )
}

function OmikujiSection({ onRevealed }: { onRevealed: () => void }) {
  const [state, setState] = useState<DrawState>('idle')

  const draw = () => {
    if (state !== 'idle') return
    setState('shaking')
    setTimeout(() => {
      setState('revealed')
      onRevealed()
    }, 1500)
  }

  return (
    <div className="relative px-6 py-20 text-center">
      <h2
        className="font-[family-name:var(--font-bangers)] text-4xl tracking-wide sm:text-5xl"
        style={{ color: '#fff', textShadow: `3px 3px 0 ${RED}` }}
      >
        CONSULT THE FATES
      </h2>
      <p className="mx-auto mt-3 max-w-sm text-white/60">
        運試し — one fortune stands between you and your mission briefing.
      </p>

      <div className="relative mx-auto mt-12 min-h-[22rem] max-w-sm">
        <AnimatePresence mode="wait">
          {state !== 'revealed' ? (
            <motion.button
              key="box"
              onClick={draw}
              exit={{ scale: 0.6, opacity: 0, y: 30 }}
              transition={{ duration: 0.25 }}
              className="mx-auto block cursor-pointer focus:outline-none"
              aria-label="Draw your fortune"
            >
              <motion.div
                animate={
                  state === 'shaking'
                    ? { rotate: [0, -12, 12, -12, 12, -8, 8, 0], y: [0, -6, 0, -6, 0, -4, 0] }
                    : { rotate: [0, -1.5, 1.5, 0] }
                }
                transition={
                  state === 'shaking'
                    ? { duration: 1.4, ease: 'easeInOut' }
                    : { duration: 3, repeat: Infinity, ease: 'easeInOut' }
                }
              >
                <OmikujiBox />
              </motion.div>
              <motion.p
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1.6, repeat: Infinity }}
                className="mt-8 font-mono text-sm tracking-[0.3em]"
                style={{ color: YELLOW }}
              >
                {state === 'shaking' ? 'SHAKING . . .' : 'TAP THE BOX TO DRAW'}
              </motion.p>
            </motion.button>
          ) : (
            <motion.div key="card" className="relative">
              <Burst />
              <FortuneCard />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Mission phases
// ---------------------------------------------------------------------------
function PhaseCard({
  number,
  kanji,
  title,
  subtitle,
  copy,
  chips,
  accent,
  tilt,
  delay,
}: {
  number: string
  kanji: string
  title: string
  subtitle: string
  copy: string
  chips: string[]
  accent: string
  tilt: number
  delay: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotate: 0 }}
      whileInView={{ opacity: 1, y: 0, rotate: tilt }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ type: 'spring', stiffness: 90, damping: 16, delay }}
      className="relative border-4 border-white/90 p-6 sm:p-8"
      style={{ background: PANEL, boxShadow: `10px 10px 0 ${accent}` }}
    >
      <span
        className="pointer-events-none absolute -top-7 right-4 font-[family-name:var(--font-bangers)] text-8xl opacity-20"
        style={{ color: accent }}
        aria-hidden
      >
        {number}
      </span>
      <p
        className="absolute right-4 top-4 text-lg font-bold text-white/25"
        style={{ writingMode: 'vertical-rl', letterSpacing: '0.25em' }}
        aria-hidden
      >
        {kanji}
      </p>

      <p className="font-mono text-[11px] tracking-[0.35em]" style={{ color: accent }}>
        PHASE {number}
      </p>
      <h3 className="mt-3 font-[family-name:var(--font-bangers)] text-4xl tracking-wide text-white sm:text-5xl">
        {title}
      </h3>
      <p className="mt-1 text-lg font-medium" style={{ color: accent }}>
        {subtitle}
      </p>
      <p className="mt-4 max-w-md leading-relaxed text-white/70">{copy}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {chips.map((chip) => (
          <span
            key={chip}
            className="border px-3 py-1 font-mono text-[11px] tracking-widest text-white/80"
            style={{ borderColor: `${accent}88`, background: `${accent}14` }}
          >
            {chip}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

function MissionPhases() {
  return (
    <div className="px-6 py-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 120, damping: 14 }}
        className="mx-auto mb-14 max-w-lg -rotate-1 border-4 border-black px-6 py-4 text-center"
        style={{ background: YELLOW, boxShadow: '8px 8px 0 rgba(0,0,0,0.6)' }}
      >
        <p className="font-mono text-[11px] tracking-[0.35em] text-black/60">MISSION DATE</p>
        <p className="mt-1 font-[family-name:var(--font-bangers)] text-3xl tracking-wide text-black sm:text-4xl">
          SATURDAY ・ OCTOBER 3, 2026
        </p>
      </motion.div>

      <div className="mx-auto grid max-w-2xl gap-12">
        <PhaseCard
          number="01"
          kanji="補給作戦"
          title="THE RENDEZVOUS"
          subtitle="Izakaya — Dayton, OH"
          copy="Every hero fuels up before the main event. Wood-fired pizza, hot from the oven, and zero restraint. Order boldly — tonight, appetite is a quirk."
          chips={['CODE: DINNER', 'STATUS: RESERVED', 'RESTRAINT: NONE']}
          accent={RED}
          tilt={-1}
          delay={0}
        />
        <PhaseCard
          number="02"
          kanji="本番決行"
          title="THE MAIN EVENT"
          subtitle="My Hero Academia in Concert — Victoria Theatre"
          copy="The music of heroes, performed live. Doors at the Victoria, downbeat at 7:30 PM. Bring goosebumps — the orchestra will supply the rest."
          chips={['1930 HOURS', 'VICTORIA THEATRE', 'FLY HIGH']}
          accent={GREEN}
          tilt={1}
          delay={0.15}
        />
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Countdown
// ---------------------------------------------------------------------------
function useCountdown(target: Date) {
  const [now, setNow] = useState<number | null>(null)
  useEffect(() => {
    setNow(Date.now())
    const id = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(id)
  }, [])
  if (now === null) return null
  const diff = Math.max(0, target.getTime() - now)
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor(diff / 3_600_000) % 24,
    minutes: Math.floor(diff / 60_000) % 60,
    seconds: Math.floor(diff / 1000) % 60,
    started: diff === 0,
  }
}

function Countdown() {
  const t = useCountdown(CONCERT_DATE)

  return (
    <div className="px-6 py-16 text-center">
      <h2
        className="font-[family-name:var(--font-bangers)] text-4xl tracking-wide sm:text-5xl"
        style={{ color: '#fff', textShadow: `3px 3px 0 ${GREEN}` }}
      >
        MISSION COUNTDOWN
      </h2>

      {t?.started ? (
        <motion.p
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="mt-8 font-[family-name:var(--font-bangers)] text-5xl"
          style={{ color: YELLOW }}
        >
          MISSION IN PROGRESS — GO BEYOND!
        </motion.p>
      ) : (
        <div className="mx-auto mt-10 flex max-w-lg justify-center gap-3 sm:gap-5">
          {(
            [
              [t?.days, 'DAYS'],
              [t?.hours, 'HRS'],
              [t?.minutes, 'MIN'],
              [t?.seconds, 'SEC'],
            ] as const
          ).map(([value, label]) => (
            <div
              key={label}
              className="w-20 border-4 border-white/90 py-4 sm:w-24"
              style={{ background: PANEL, boxShadow: `6px 6px 0 ${YELLOW}` }}
            >
              <p className="font-[family-name:var(--font-bangers)] text-4xl text-white sm:text-5xl">
                {value === undefined ? '—' : String(value).padStart(2, '0')}
              </p>
              <p className="mt-1 font-mono text-[10px] tracking-[0.25em] text-white/50">{label}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// ---------------------------------------------------------------------------
// Hawks interlude
// ---------------------------------------------------------------------------
function HawksInterlude() {
  return (
    <div className="px-6 py-16 text-center">
      <motion.div
        initial={{ opacity: 0, y: -30, rotate: -20 }}
        whileInView={{ opacity: 1, y: 0, rotate: 14 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ type: 'spring', stiffness: 70, damping: 12 }}
        className="mx-auto w-8"
      >
        <Feather className="w-full" />
      </motion.div>
      <motion.blockquote
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mx-auto mt-8 max-w-md text-xl italic leading-relaxed text-white/80"
      >
        “The Wing Hero always dreamed of a world where heroes had time on their hands.”
      </motion.blockquote>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="mt-4 font-mono text-sm tracking-widest"
        style={{ color: CRIMSON }}
      >
        TONIGHT, THAT WORLD EXISTS. TABLE FOR TWO.
      </motion.p>
    </div>
  )
}

// ---------------------------------------------------------------------------
// The letter
// ---------------------------------------------------------------------------
function Letter() {
  return (
    <div className="px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="mx-auto max-w-md rotate-1 border-2 border-neutral-300 bg-[#fbf6ea] p-8 text-neutral-800"
        style={{ boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}
      >
        <p className="font-mono text-[10px] tracking-[0.3em] text-neutral-400">
          ATTACHED TO MISSION FILE 0716
        </p>
        <div className="mt-5 font-[family-name:var(--font-caveat)] text-[1.65rem] leading-snug">
          <p>Rebecca —</p>
          <p className="mt-4">
            Fictional or real, you are the hero of my story and our family. Ruby and I are so lucky to have you. If I was watching this, I'd ship us and I think we make a pretty good team.
          </p>
          <p className="mt-4">
            Happy birthday. I love you so much, and I'm looking forward to the rest of the story we get to write together.
          </p>
          <p className="mt-6 text-3xl">— Ryan</p>
        </div>
      </motion.div>

      <p className="mt-16 text-center font-mono text-[10px] tracking-[0.3em] text-white/30">
        TICKET No. 0716 ・ ADMIT ONE HERO ・ PLUS ULTRA
      </p>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Page shell
// ---------------------------------------------------------------------------
export default function MissionBriefing() {
  const [accepted, setAccepted] = useState(false)
  const [fortuneDrawn, setFortuneDrawn] = useState(false)

  return (
    <div
      className="fixed inset-0 z-[100] overflow-y-auto overscroll-contain"
      style={{ background: INK }}
    >
      {/* halftone dot texture */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1.6px)',
          backgroundSize: '16px 16px',
        }}
      />

      <div className="relative z-10">
        <AnimatePresence mode="wait">
          {!accepted ? (
            <motion.div key="transmission" exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
              <Transmission onAccept={() => setAccepted(true)} />
            </motion.div>
          ) : (
            <motion.div
              key="briefing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <TitleHero />
              <OmikujiSection onRevealed={() => setFortuneDrawn(true)} />
              {fortuneDrawn && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
                  <MissionPhases />
                  <Countdown />
                  <HawksInterlude />
                  <Letter />
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
