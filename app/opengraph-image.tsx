import { ImageResponse } from 'next/og'

export const alt = 'CarrollMedia'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

/* The homepage tile from the design project (thumbnail.html), resized to a
 * share card: the wordmark on ink beside a strip of the four hues the system
 * names — the tally light and the three client registers. ImageResponse can't
 * read CSS custom properties, so the token values are inlined. */
const ink = '#08080A'
const signal = '#E4E4E7'
const dim = '#5A5A62'
const strip = ['#38E0C0', '#FF7A60', '#FF3B18', '#C25A22']

async function loadArchivo() {
  try {
    const css = await fetch('https://fonts.googleapis.com/css2?family=Archivo:wght@800&text=CARROLMEDIA').then((r) => r.text())
    const url = css.match(/src: url\((.+?)\) format\('(?:opentype|truetype)'\)/)?.[1]
    return url ? await fetch(url).then((r) => r.arrayBuffer()) : null
  } catch {
    return null
  }
}

export default async function OpenGraphImage() {
  const archivo = await loadArchivo()

  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex' }}>
        <div style={{ flex: 1, background: ink, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ display: 'flex', fontFamily: archivo ? 'Archivo' : 'sans-serif', fontWeight: 800, fontSize: 80, letterSpacing: '0.06em', color: signal }}>
            CARROLL<span style={{ color: dim }}>MEDIA</span>
          </div>
        </div>
        <div style={{ width: '25%', display: 'flex', flexDirection: 'column' }}>
          {strip.map((color) => <div key={color} style={{ flex: 1, background: color }} />)}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: archivo ? [{ name: 'Archivo', data: archivo, weight: 800, style: 'normal' }] : undefined,
    },
  )
}
