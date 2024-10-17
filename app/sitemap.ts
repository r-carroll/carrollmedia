
export const baseUrl = 'https://carrollmedia.dev'

export default async function sitemap() {

  let routes = ['', '/blog', '/decibel-meter'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes]
}
