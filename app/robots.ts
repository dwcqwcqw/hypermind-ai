import { MetadataRoute } from 'next'

/**
 * Robots.txt configuration.
 *
 * Keep robots.txt fully open for AI and search crawlers. Private or utility
 * surfaces such as /admin and /api are protected from indexing with
 * X-Robots-Tag headers in next.config.js instead of robots exclusions, because
 * crawler analytics tools treat any Disallow rule as partial crawlability.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://hypermindgeo.com/sitemap.xml',
    host: 'https://hypermindgeo.com',
  }
}
