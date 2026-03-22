import { MetadataRoute } from 'next'

/**
 * Static sitemap for all pages that actually have a page.tsx route.
 *
 * Design decision: removed edge runtime + force-dynamic that previously
 * fetched KV posts at sitemap generation time. This caused the sitemap
 * itself to depend on an edge function, which could fail/timeout and
 * return an empty sitemap — catastrophic for SEO and AI crawlability.
 *
 * Dynamic blog posts from KV are still reachable via /resources/blog
 * and internal links; they'll get indexed through natural crawling.
 * When a new KV post is published, the sitemap can be rebuilt via
 * Cloudflare Pages redeploy.
 */
export const revalidate = 3600

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.hypermindai.tech'
  const now = new Date().toISOString()

  return [
    // ── Home ──
    { url: `${baseUrl}/`, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },

    // ── Platform ──
    { url: `${baseUrl}/platform/`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },

    // ── Services ──
    { url: `${baseUrl}/services/`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/services/ai-visibility-optimization/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services/ai-mention-growth/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services/ai-reputation-management/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services/ai-citation-strategy/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services/ai-search-traffic-growth/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services/ai-answer-optimization/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },

    // ── Solutions ──
    { url: `${baseUrl}/solutions/`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/solutions/b2b-saas-geo/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/solutions/fintech-geo/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/solutions/ecommerce-geo/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/solutions/enterprise-geo/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/solutions/startup-geo/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },

    // ── Resources Hub ──
    { url: `${baseUrl}/resources/`, lastModified: now, changeFrequency: 'daily', priority: 0.9 },

    // ── Pillar Pages (highest priority content) ──
    { url: `${baseUrl}/resources/what-is-geo/`, lastModified: now, changeFrequency: 'monthly', priority: 0.95 },
    { url: `${baseUrl}/resources/how-ai-search-works/`, lastModified: now, changeFrequency: 'monthly', priority: 0.95 },
    { url: `${baseUrl}/resources/how-to-optimize-for-ai-search/`, lastModified: now, changeFrequency: 'monthly', priority: 0.95 },
    { url: `${baseUrl}/resources/ai-visibility-monitoring-guide/`, lastModified: now, changeFrequency: 'monthly', priority: 0.95 },
    { url: `${baseUrl}/resources/complete-geo-strategy-guide/`, lastModified: now, changeFrequency: 'monthly', priority: 0.95 },
    { url: `${baseUrl}/resources/ai-search-statistics/`, lastModified: now, changeFrequency: 'monthly', priority: 0.95 },

    // ── Resource Sub-Pages ──
    { url: `${baseUrl}/resources/geo-guides/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/resources/ai-search-library/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/resources/prompt-database/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/resources/geo-playbooks/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/resources/blog/`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },

    // ── Static Blog Articles ──
    { url: `${baseUrl}/resources/top-7-mobile-ai-marketing-apps-2025/`, lastModified: '2025-01-28', changeFrequency: 'yearly', priority: 0.7 },
    { url: `${baseUrl}/resources/top-10-ai-marketing-vendors-prompt-simulation-2025/`, lastModified: '2025-01-05', changeFrequency: 'yearly', priority: 0.7 },
    { url: `${baseUrl}/resources/hypermind-vs-top-ai-marketing-platforms/`, lastModified: '2024-10-01', changeFrequency: 'yearly', priority: 0.7 },

    // ── Data Hub ──
    { url: `${baseUrl}/data/`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },

    // ── Tools ──
    { url: `${baseUrl}/tools/`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },

    // ── Case Studies ──
    { url: `${baseUrl}/case-studies/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },

    // ── Compare ──
    { url: `${baseUrl}/compare/`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },

    // ── Pricing ──
    { url: `${baseUrl}/pricing/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },

    // ── Company ──
    { url: `${baseUrl}/company/`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
  ]
}
