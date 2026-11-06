import type { MetadataRoute } from 'next'
import { site } from '@/lib/site'

const routes = ['', '/work', '/work/tradely', '/pricing', '/about', '/labs']

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date().toISOString().split('T')[0]
  return routes.map((route) => ({ url: `${site.url}${route}`, lastModified }))
}
