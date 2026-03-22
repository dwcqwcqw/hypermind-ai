import { MetadataRoute } from 'next'

/**
 * Robots.txt configuration.
 *
 * Explicitly allows major search engine bots AND AI assistant crawlers
 * (GPTBot, ChatGPT-User, Google-Extended, PerplexityBot, ClaudeBot, etc.)
 * to ensure content is discoverable by both traditional search and AI systems.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
      {
        userAgent: 'GPTBot',
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
      {
        userAgent: 'Google-Extended',
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
      {
        userAgent: 'PerplexityBot',
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
      {
        userAgent: 'ClaudeBot',
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
      {
        userAgent: 'Anthropic-ai',
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
      {
        userAgent: 'cohere-ai',
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
    ],
    sitemap: 'https://www.hypermindai.tech/sitemap.xml',
    host: 'https://www.hypermindai.tech',
  }
}
