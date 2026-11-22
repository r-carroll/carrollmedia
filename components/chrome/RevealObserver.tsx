'use client'

import { useEffect } from 'react'

const TARGETS = '[data-reveal]:not([data-in]),[data-stagger]:not([data-in]),.cm-plate:not([data-in])'

/* The reveal contract. Components emit [data-reveal] / [data-stagger] /
 * .cm-plate but do not observe; this adds [data-in] once each enters view.
 *
 * threshold MUST be 0. Collapsed-at-rest targets ([data-reveal="wipe"] is
 * clipped to a zero-height inset) have a zero-area transformed box, and
 * IntersectionObserver computes ratios on the transformed box — any non-zero
 * threshold can never be reached. Rely on isIntersecting instead.
 *
 * The rescan is debounced to a frame: Stat's counter sets state every frame,
 * and an undebounced rescan re-observes mid-flight reveals and restarts them.
 * Letterbox bars are deliberately absent — AerialPlate owns those on load. */
export function RevealObserver() {
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.setAttribute('data-in', '')
          io.unobserve(e.target)
        }
      })
    }, { threshold: 0 })

    const scan = () => document.querySelectorAll(TARGETS).forEach((n) => io.observe(n))
    scan()

    let queued = 0
    const mo = new MutationObserver(() => {
      cancelAnimationFrame(queued)
      queued = requestAnimationFrame(scan)
    })
    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      cancelAnimationFrame(queued)
      mo.disconnect()
      io.disconnect()
    }
  }, [])

  return null
}
