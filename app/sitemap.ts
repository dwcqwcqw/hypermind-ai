import { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/posts'

export const runtime = 'edge'
export const dynamic = 'force-dynamic'
export const revalidate = 3600

type Post = {
  slug: string
  publishAt: string
  updatedAt: string
}

async function getPosts(): Promise<Post[]> {
  try {
    const posts = await getAllPosts()
    return posts.map(p => ({
      slug: p.slug,
      publishAt: p.publishAt,
      updatedAt: p.updatedAt
    }))
  } catch (error) {
    console.error('Failed to fetch posts for sitemap:', error)
    return []
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.hypermindai.tech'
  const now = new Date()

  const dynamicPosts = await getPosts()

  const staticPages: MetadataRoute.Sitemap = [
    // Home
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },

    // Platform
    {
      url: `${baseUrl}/platform`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/platform/ai-visibility-monitoring`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/platform/ai-mention-tracking`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/platform/ai-sentiment-analysis`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/platform/prompt-intelligence`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/platform/competitor-ai-visibility`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    // Services
    {
      url: `${baseUrl}/services`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/ai-visibility-optimization`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/ai-mention-growth`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/ai-reputation-management`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/ai-citation-strategy`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/ai-search-traffic-growth`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/ai-answer-optimization`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    // Solutions
    {
      url: `${baseUrl}/solutions`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/solutions/b2b-saas-geo`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/solutions/fintech-geo`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/solutions/ecommerce-geo`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/solutions/enterprise-geo`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/solutions/startup-geo`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    // Resources (hub + pillar pages)
    {
      url: `${baseUrl}/resources`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/resources/what-is-geo`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/resources/how-ai-search-works`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/resources/how-to-optimize-for-ai-search`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/resources/ai-visibility-monitoring-guide`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/resources/complete-geo-strategy-guide`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/resources/ai-search-statistics`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },

    // Resource sub-pages
    {
      url: `${baseUrl}/resources/geo-guides`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/resources/ai-search-library`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/resources/prompt-database`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/resources/geo-playbooks`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    // Static articles
    {
      url: `${baseUrl}/resources/top-7-mobile-ai-marketing-apps-2025`,
      lastModified: new Date('2025-01-28'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/resources/top-10-ai-marketing-vendors-prompt-simulation-2025`,
      lastModified: new Date('2025-01-05'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/resources/hypermind-vs-top-ai-marketing-platforms`,
      lastModified: new Date('2024-10-01'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    // Data
    {
      url: `${baseUrl}/data`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/data/ai-visibility-leaderboard`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/data/ai-brand-mention-index`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/data/ai-citation-database`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/data/ai-search-trends`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    },

    // Tools
    {
      url: `${baseUrl}/tools`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tools/ai-visibility-checker`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/tools/ai-mention-tracker`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/tools/ai-citation-checker`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/tools/ai-brand-audit`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },

    // Case Studies
    {
      url: `${baseUrl}/case-studies`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    // Compare
    {
      url: `${baseUrl}/compare`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },

    // Pricing
    {
      url: `${baseUrl}/pricing`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    // Company
    {
      url: `${baseUrl}/company`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ]

  const dynamicPostEntries: MetadataRoute.Sitemap = dynamicPosts.map(post => ({
    url: `${baseUrl}/resources/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [...staticPages, ...dynamicPostEntries]
}
