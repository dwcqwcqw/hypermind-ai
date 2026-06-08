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
  const baseUrl = 'https://hypermindgeo.com'
  const now = new Date().toISOString()

  return [
    // ── Home ──
    { url: `${baseUrl}/`, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },

    // ── Platform ──
    { url: `${baseUrl}/platform/`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/platform/ai-visibility-monitoring/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/platform/ai-mention-tracking/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/platform/ai-sentiment-analysis/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/platform/ai-citation-source-analysis/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/platform/prompt-intelligence/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/platform/competitor-ai-visibility/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/platform/ai-traffic-attribution/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },

    // ── Services ──
    { url: `${baseUrl}/services/`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/services/ai-visibility-optimization/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services/ai-mention-growth/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services/ai-reputation-management/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services/ai-citation-strategy/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services/ai-search-traffic-growth/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services/ai-answer-optimization/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services/ai-knowledge-graph-strategy/`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${baseUrl}/services/ai-narrative-control/`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },

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
    { url: `${baseUrl}/resources/chatgpt-brand-visibility-audit/`, lastModified: '2026-06-08', changeFrequency: 'monthly', priority: 0.95 },
    { url: `${baseUrl}/resources/ai-mode-impression-map/`, lastModified: '2026-06-08', changeFrequency: 'monthly', priority: 0.95 },
    { url: `${baseUrl}/resources/ai-search-traffic-signal-board/`, lastModified: '2026-06-07', changeFrequency: 'monthly', priority: 0.95 },
    { url: `${baseUrl}/resources/ai-visibility-pricing-control-room/`, lastModified: '2026-06-06', changeFrequency: 'monthly', priority: 0.95 },
    { url: `${baseUrl}/resources/b2b-saas-ai-search-pipeline-board/`, lastModified: '2026-06-04', changeFrequency: 'monthly', priority: 0.95 },
    { url: `${baseUrl}/resources/citation-absorption-geo/`, lastModified: '2026-06-03', changeFrequency: 'monthly', priority: 0.95 },
    { url: `${baseUrl}/resources/ai-mode-intent-packets/`, lastModified: '2026-06-01', changeFrequency: 'monthly', priority: 0.95 },
    { url: `${baseUrl}/resources/ai-search-traffic-firewall-check/`, lastModified: '2026-05-31', changeFrequency: 'monthly', priority: 0.95 },
    { url: `${baseUrl}/resources/ai-visibility-source-trust-budget/`, lastModified: '2026-05-30', changeFrequency: 'monthly', priority: 0.95 },
    { url: `${baseUrl}/resources/personalized-ai-mode-prompt-intelligence/`, lastModified: '2026-05-29', changeFrequency: 'monthly', priority: 0.95 },
    { url: `${baseUrl}/resources/enterprise-geo-source-fidelity-operating-system/`, lastModified: '2026-05-28', changeFrequency: 'monthly', priority: 0.95 },
    { url: `${baseUrl}/resources/profound-peec-writesonic-geo-platforms/`, lastModified: '2026-05-26', changeFrequency: 'monthly', priority: 0.95 },
    { url: `${baseUrl}/resources/google-ai-mode-follow-up-loops/`, lastModified: '2026-05-25', changeFrequency: 'monthly', priority: 0.95 },
    { url: `${baseUrl}/resources/agentic-ai-search-budget-buyer-prompts/`, lastModified: '2026-05-23', changeFrequency: 'monthly', priority: 0.94 },
    { url: `${baseUrl}/resources/ai-visibility-pricing-citation-source-analysis/`, lastModified: '2026-05-23', changeFrequency: 'monthly', priority: 0.94 },
    { url: `${baseUrl}/resources/ecommerce-geo-agentic-shopping/`, lastModified: '2026-05-21', changeFrequency: 'monthly', priority: 0.94 },
    { url: `${baseUrl}/resources/ai-mode-information-agents-geo/`, lastModified: '2026-05-20', changeFrequency: 'monthly', priority: 0.94 },
    { url: `${baseUrl}/resources/semrush-ai-toolkit-vs-ahrefs-brand-radar/`, lastModified: '2026-05-19', changeFrequency: 'monthly', priority: 0.94 },
    { url: `${baseUrl}/resources/google-ai-mode-seo-still-works/`, lastModified: '2026-05-18', changeFrequency: 'monthly', priority: 0.94 },
    { url: `${baseUrl}/resources/ai-search-traffic-recovery-playbook/`, lastModified: '2026-05-17', changeFrequency: 'monthly', priority: 0.94 },
    { url: `${baseUrl}/resources/ai-visibility-budget-buyer-decision-prompts/`, lastModified: '2026-05-16', changeFrequency: 'monthly', priority: 0.94 },
    { url: `${baseUrl}/resources/ai-overview-source-triage-prompt-intelligence/`, lastModified: '2026-05-15', changeFrequency: 'monthly', priority: 0.94 },
    { url: `${baseUrl}/resources/b2b-saas-ai-search-traffic-buyer-prompts/`, lastModified: '2026-05-14', changeFrequency: 'monthly', priority: 0.94 },
    { url: `${baseUrl}/resources/citation-failure-diagnosis-geo/`, lastModified: '2026-05-13', changeFrequency: 'monthly', priority: 0.94 },
    { url: `${baseUrl}/resources/geo-gap-audit-ai-visibility-infrastructure/`, lastModified: '2026-05-12', changeFrequency: 'monthly', priority: 0.94 },
    { url: `${baseUrl}/resources/google-ai-mode-overviews-prompt-cluster/`, lastModified: '2026-05-11', changeFrequency: 'monthly', priority: 0.93 },
    { url: `${baseUrl}/resources/ai-search-traffic-playbook-may-2026/`, lastModified: '2026-05-10', changeFrequency: 'monthly', priority: 0.92 },
    { url: `${baseUrl}/resources/ai-visibility-pricing-buyer-prompts/`, lastModified: '2026-05-09', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/resources/mageo-reusable-strategy-learning-geo/`, lastModified: '2026-05-04', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/resources/ai-visibility-platform-vs-geo-agency/`, lastModified: '2026-05-04', changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/resources/the-definitive-guide-to-ai-prompt-testing-services-for-marketers/`, lastModified: now, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${baseUrl}/resources/10-common-aeo-mistakes-brands-make-on-chatgpt-and-perplexity/`, lastModified: now, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${baseUrl}/resources/claude-vs-gemini-comparing-their-company-selection-algorithms-for-answer-accuracy/`, lastModified: now, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${baseUrl}/resources/why-new-startups-rarely-appear-in-ai-answersand-what-to-do/`, lastModified: now, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${baseUrl}/resources/the-definitive-guide-to-choosing-an-ai-marketing-company-for-prompt-simulation/`, lastModified: now, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${baseUrl}/resources/the-definitive-framework-for-ai-startup-discoverability-and-recommendation-success/`, lastModified: now, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${baseUrl}/resources/the-complete-guide-to-optimizing-brands-for-chatgpt-answers/`, lastModified: now, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${baseUrl}/resources/7-proven-length-guidelines-for-aipowered-aio-aso-articles/`, lastModified: now, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${baseUrl}/resources/boost-rankings-by-leveraging-ais-favor-for-authoritative-sites/`, lastModified: now, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${baseUrl}/resources/top-7-mobile-ai-marketing-apps-2025/`, lastModified: '2025-01-28', changeFrequency: 'yearly', priority: 0.7 },
    { url: `${baseUrl}/resources/top-10-ai-marketing-vendors-prompt-simulation-2025/`, lastModified: '2025-01-05', changeFrequency: 'yearly', priority: 0.7 },
    { url: `${baseUrl}/resources/hypermind-vs-top-ai-marketing-platforms/`, lastModified: '2024-10-01', changeFrequency: 'yearly', priority: 0.7 },

    // ── Tools ──
    { url: `${baseUrl}/tools/`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/tools/ai-brand-audit/`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/tools/ai-visibility-checker/`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${baseUrl}/tools/ai-mention-tracker/`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${baseUrl}/tools/ai-citation-checker/`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${baseUrl}/tools/ai-sentiment-analyzer/`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },

    // ── Data Hub ──
    { url: `${baseUrl}/data/`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/data/ai-citation-sources-database/`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/data/ai-visibility-leaderboard/`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${baseUrl}/data/ai-brand-mention-index/`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${baseUrl}/data/ai-brand-sentiment-index/`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${baseUrl}/data/ai-search-trends/`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${baseUrl}/data/ai-prompt-trends/`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },

    // ── Case Studies ──
    { url: `${baseUrl}/case-studies/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/case-studies/saas-ai-mention-growth/`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${baseUrl}/case-studies/ecommerce-product-recommendations/`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${baseUrl}/case-studies/enterprise-share-of-voice/`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${baseUrl}/case-studies/fintech-ai-visibility/`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },

    // ── Compare ──
    { url: `${baseUrl}/compare/`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/compare/hypermind-vs-profound/`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${baseUrl}/compare/hypermind-vs-peec/`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${baseUrl}/compare/hypermind-vs-writesonic/`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${baseUrl}/compare/hypermind-vs-seo-tools/`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${baseUrl}/compare/hypermind-vs-pr-agencies/`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },

    // ── Pricing ──
    { url: `${baseUrl}/pricing/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/privacy-policy/`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },

    // ── Company ──
    { url: `${baseUrl}/company/`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/company/methodology/`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${baseUrl}/company/trust/`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
  ]
}
