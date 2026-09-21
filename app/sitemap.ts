import type { MetadataRoute } from 'next'
import { site, weddings } from '@/content/data'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url
  const staticRoutes = ['', '/servicios', '/bodas', '/sobre-alba', '/contacto'].map(path => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : 0.8,
  }))

  const weddingRoutes = weddings.map(w => ({
    url: `${base}/bodas/${w.slug}`,
    lastModified: new Date(),
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }))

  return [...staticRoutes, ...weddingRoutes]
}
