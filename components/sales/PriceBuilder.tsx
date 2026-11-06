'use client'

import { useId, useState, type CSSProperties, type ReactNode } from 'react'
import { cx } from '@/lib/site'
import { usd, type AddOn, type Build } from '@/lib/pricing'
import { CallStrip } from './CallStrip'

export type PriceBuilderProps = {
  builds: Build[]
  addOns: AddOn[]
  shoots: AddOn[]
  migration: AddOn
  care: AddOn
  style?: CSSProperties
}

/* Pick a build, tick what you need, read the total. Nothing is submitted: the
 * only action is the phone number, and the call turns this total into a fixed
 * one-page scope. The photo and drone day comes with Standard and up for
 * central Ohio businesses; anywhere else it is an add-on. */
export function PriceBuilder({ builds, addOns, shoots, migration, care, style }: PriceBuilderProps) {
  const name = useId()
  const [buildId, setBuildId] = useState(builds[1]?.id ?? builds[0].id)
  const [local, setLocal] = useState(true)
  const [picked, setPicked] = useState<string[]>([])
  const [shootId, setShootId] = useState('none')
  const [caring, setCaring] = useState(false)

  const build = builds.find((b) => b.id === buildId) ?? builds[0]
  const shootIncluded = local && build.shootIncluded
  const shoot = shootIncluded ? undefined : shoots.find((s) => s.id === shootId)
  const chosen = [...addOns, migration].filter((a) => picked.includes(a.id))
  const total = build.price + chosen.reduce((sum, a) => sum + a.price, 0) + (shoot?.price ?? 0)
  const half = Math.ceil(total / 2)

  const toggle = (id: string) =>
    setPicked((ids) => (ids.includes(id) ? ids.filter((x) => x !== id) : [...ids, id]))

  return (
    <div className="cm-builder" style={style}>
      <div className="cm-builder__options">
        <Group legend="1. Pick a build" hint="PICK ONE">
          {builds.map((b) => (
            <Choice
              key={b.id}
              type="radio"
              name={`${name}-build`}
              checked={b.id === buildId}
              onChange={() => setBuildId(b.id)}
              title={b.name}
              body={b.who}
              meta={b.weeks}
              price={usd(b.price)}
              note={local && b.shootIncluded ? 'PHOTO AND DRONE DAY INCLUDED' : undefined}
            />
          ))}
        </Group>

        <Group legend="2. Where is the business?" hint="PICK ONE">
          <div className="cm-builder__pair">
            <Choice type="radio" name={`${name}-where`} checked={local} onChange={() => setLocal(true)} title="Central Ohio" />
            <Choice type="radio" name={`${name}-where`} checked={!local} onChange={() => setLocal(false)} title="Somewhere else" />
          </div>
        </Group>

        <Group legend="3. Get found" hint="ADD ANY">
          {addOns.map((a) => (
            <Choice
              key={a.id}
              type="checkbox"
              checked={picked.includes(a.id)}
              onChange={() => toggle(a.id)}
              title={a.name}
              body={a.body}
              price={`+${usd(a.price)}`}
            />
          ))}
        </Group>

        <Group legend="4. Photos and drone" hint={shootIncluded ? 'INCLUDED' : 'PICK ONE'}>
          {shootIncluded ? (
            <div className="cm-choice cm-choice--on cm-choice--locked">
              <span className="cm-choice__box cm-choice__box--check" aria-hidden="true" />
              <span className="cm-choice__text">
                <span className="text-h3 cm-choice__title">Photo and drone day</span>
                <span className="text-body-sm cm-choice__body">
                  Comes with {build.name} for central Ohio businesses. Half a day on site: your crews, your trucks, your roofs, from the ground and the air.
                </span>
              </span>
              <span className="text-label cm-choice__price">INCLUDED</span>
            </div>
          ) : (
            <>
              <Choice
                type="radio"
                name={`${name}-shoot`}
                checked={shootId === 'none'}
                onChange={() => setShootId('none')}
                title="No shoot"
                body="Use photos you already have."
              />
              {shoots.map((s) => (
                <Choice
                  key={s.id}
                  type="radio"
                  name={`${name}-shoot`}
                  checked={s.id === shootId}
                  onChange={() => setShootId(s.id)}
                  title={s.name}
                  body={s.body}
                  price={`+${usd(s.price)}`}
                />
              ))}
              {!local ? (
                <p className="text-body-sm cm-builder__aside">Outside central Ohio, travel for a shoot is priced on the call.</p>
              ) : null}
            </>
          )}
        </Group>

        <Group legend="5. Already have a site?" hint="OPTIONAL">
          <Choice
            type="checkbox"
            checked={picked.includes(migration.id)}
            onChange={() => toggle(migration.id)}
            title={migration.name}
            body={migration.body}
            price={`+${usd(migration.price)}`}
          />
        </Group>

        <Group legend="6. Want us to run it?" hint="OPTIONAL / MONTHLY">
          <Choice
            type="checkbox"
            checked={caring}
            onChange={() => setCaring((on) => !on)}
            title={care.name}
            body={care.body}
            price={`+${usd(care.price)} / MO`}
          />
        </Group>
      </div>

      {/* Under the 940px break the summary sits below the options, so the
       * running total rides along the bottom of the screen until it arrives. */}
      <div className="cm-builder__bar" aria-hidden="true">
        <span className="text-label">TOTAL</span>
        <span className="text-num cm-builder__bar-total">
          {usd(total)}
          {caring ? <span className="text-label cm-builder__bar-monthly"> +{usd(care.price)} / MO</span> : null}
        </span>
      </div>

      <aside className="cm-builder__summary" aria-label="Your total">
        <span className="text-overline" style={{ color: 'var(--color-dim-foreground)' }}>YOUR BUILD</span>
        <ul className="cm-builder__lines">
          <Line label={build.name} value={usd(build.price)} />
          {chosen.map((a) => <Line key={a.id} label={a.name} value={`+${usd(a.price)}`} />)}
          {shootIncluded ? <Line label="Photo and drone day" value="INCLUDED" /> : null}
          {shoot ? <Line label={shoot.name} value={`+${usd(shoot.price)}`} /> : null}
        </ul>
        <div className="cm-builder__total" aria-live="polite" aria-atomic="true">
          <span className="text-overline" style={{ color: 'var(--color-dim-foreground)' }}>TOTAL</span>
          <span className="text-num cm-builder__amount">{usd(total)}</span>
          {caring ? (
            <span className="cm-builder__monthly">
              <span className="text-num">then {usd(care.price)} / mo</span>
              <span className="text-label">CARE PLAN / CANCEL ANYTIME</span>
            </span>
          ) : null}
        </div>
        <div className="cm-builder__terms">
          <span className="text-label">{usd(half)} UP FRONT</span>
          <span className="text-label">{usd(total - half)} AT LAUNCH</span>
          <span className="text-label">TYPICAL BUILD {build.weeks}</span>
        </div>
        <p className="text-body-sm cm-builder__promise">
          On the call this becomes one number on a one-page scope, and it doesn&apos;t move unless you change the scope. Most people over-buy. We&apos;ll tell you what to drop.
        </p>
        <CallStrip note="CALL ABOUT THIS BUILD / 30 MINUTES" />
      </aside>
    </div>
  )
}

function Group({ legend, hint, children }: { legend: string; hint: string; children: ReactNode }) {
  return (
    <fieldset className="cm-builder__group">
      <legend className="cm-builder__legend">
        <span className="text-h3">{legend}</span>
        <span className="text-label" style={{ color: 'var(--color-dim-foreground)' }}>{hint}</span>
      </legend>
      <div className="cm-builder__choices">{children}</div>
    </fieldset>
  )
}

type ChoiceProps = {
  type: 'radio' | 'checkbox'
  name?: string
  checked: boolean
  onChange: () => void
  title: string
  body?: string
  meta?: string
  price?: string
  note?: string
}

function Choice({ type, name, checked, onChange, title, body, meta, price, note }: ChoiceProps) {
  return (
    <label className={cx('cm-choice cm-cut-transition', checked && 'cm-choice--on')}>
      <input className="cm-choice__input" type={type} name={name} checked={checked} onChange={onChange} />
      <span className={cx('cm-choice__box', type === 'checkbox' && 'cm-choice__box--check')} aria-hidden="true" />
      <span className="cm-choice__text">
        <span className="text-h3 cm-choice__title">{title}</span>
        {body ? <span className="text-body-sm cm-choice__body">{body}</span> : null}
        {note || meta ? (
          <span className="cm-row cm-choice__meta">
            {meta ? <span className="text-label">{meta}</span> : null}
            {note ? <span className="text-label" style={{ color: 'var(--color-foreground)' }}>{note}</span> : null}
          </span>
        ) : null}
      </span>
      {price ? <span className="text-num cm-choice__price">{price}</span> : null}
    </label>
  )
}

function Line({ label, value }: { label: string; value: string }) {
  return (
    <li className="cm-builder__line">
      <span className="text-body-sm">{label}</span>
      <span className="text-num">{value}</span>
    </li>
  )
}
