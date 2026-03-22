/**
 * Canonical category and tag definitions for the HyperMind blog.
 * All blog posts MUST use exactly one category from BLOG_CATEGORIES
 * and 3-5 tags chosen from the tag groups below.
 *
 * Auto-classification: getAutoCategory(title, slug) provides deterministic
 * keyword-based classification with a hash fallback for even distribution
 * when no keywords match. This ensures every post always has a category,
 * even if it was created before categories were introduced.
 */

// ── Categories ───────────────────────────────────────────────────────────────

export interface BlogCategory {
  id: string
  label: string
  description: string
  color: string     // Tailwind bg class for badge
  textColor: string // Tailwind text class for badge
}

export const BLOG_CATEGORIES: BlogCategory[] = [
  {
    id: 'geo-basics',
    label: 'GEO Basics',
    description: 'GEO overview, GEO vs SEO, AI search systems, ranking factors, ecosystem',
    color: 'bg-blue-100',
    textColor: 'text-blue-800',
  },
  {
    id: 'answer-ranking',
    label: 'Answer Ranking',
    description: 'ChatGPT ranking, AI answers, featured snippets, zero-click search, answer optimization',
    color: 'bg-purple-100',
    textColor: 'text-purple-800',
  },
  {
    id: 'ai-mentions',
    label: 'AI Mentions',
    description: 'AI citations, brand mentions, authority signals, backlinks, PR',
    color: 'bg-green-100',
    textColor: 'text-green-800',
  },
  {
    id: 'content-optimization',
    label: 'Content Optimization',
    description: 'LLM content structure, semantic SEO, entity optimization, chunking, RAG',
    color: 'bg-orange-100',
    textColor: 'text-orange-800',
  },
  {
    id: 'ai-analytics',
    label: 'AI Analytics',
    description: 'Visibility tracking, mention monitoring, GEO metrics, competitor analysis, tools',
    color: 'bg-cyan-100',
    textColor: 'text-cyan-800',
  },
  {
    id: 'geo-strategy',
    label: 'GEO Strategy',
    description: 'SaaS GEO, eCommerce GEO, B2B GEO, content strategy, case studies',
    color: 'bg-gray-100',
    textColor: 'text-gray-800',
  },
]

/** Ordered list of all category IDs — used for hash-based fallback */
const CATEGORY_IDS = BLOG_CATEGORIES.map((c) => c.id)

export function getCategoryById(id: string): BlogCategory | undefined {
  return BLOG_CATEGORIES.find((c) => c.id === id)
}

// ── Auto-classification ───────────────────────────────────────────────────────

/**
 * Priority-ordered keyword rules. The FIRST matching rule wins.
 * Each rule maps a category ID to a list of lowercase keyword fragments
 * that are tested against `title + slug` (both lowercased).
 *
 * Design notes:
 * - More specific / rarer terms are listed first to avoid false matches.
 * - Ordering: ai-analytics first because "top 7 / top 10 / vendor / tool"
 *   are unambiguous signals, whereas "strategy" is too generic.
 * - geo-strategy is last intentionally; it catches broad signals as fallback
 *   before the hash fallback runs.
 */
const KEYWORD_RULES: Array<{ id: string; keywords: string[] }> = [
  {
    id: 'ai-analytics',
    keywords: [
      'top 7', 'top 10', 'top 5', 'best tools', 'best apps', 'mobile ai',
      'vendor comparison', 'platform comparison', 'vs top', 'competitor analysis',
      'tracking', 'monitoring tool', 'analytics platform', 'kpi', 'roi measurement',
      'visibility score', 'benchmark', 'dashboard', 'reporting', 'audit tool',
    ],
  },
  {
    id: 'answer-ranking',
    keywords: [
      'rank in chatgpt', 'chatgpt ranking', 'rank in perplexity', 'rank in gemini',
      'appear in chatgpt', 'get cited by chatgpt', 'optimize for chatgpt',
      'ai answer', 'ai-generated answer', 'featured snippet', 'zero-click',
      'answer engine', 'answer optimization', 'direct answer', 'voice search ranking',
      'how to rank', 'rank higher in ai', 'ai search result',
    ],
  },
  {
    id: 'ai-mentions',
    keywords: [
      'ai citation', 'brand mention', 'brand in ai', 'get mentioned by ai',
      'citation strategy', 'brand citation', 'authority signal', 'digital pr',
      'ai recommendation rate', 'backlink for ai', 'brand authority in llm',
      'increase mentions', 'ai mention growth', 'earn citations', 'pr for geo',
    ],
  },
  {
    id: 'content-optimization',
    keywords: [
      'content structure', 'semantic seo', 'entity seo', 'entity optimization',
      'content chunking', 'rag', 'retrieval augmented', 'llm content',
      'knowledge graph', 'structured content', 'schema markup', 'faq schema',
      'embedding', 'vector search', 'content for ai', 'content format',
      'optimize content', 'content readability', 'content clarity',
      'prompt-friendly', 'ai-readable', 'llm-friendly',
    ],
  },
  {
    id: 'geo-basics',
    keywords: [
      'what is geo', 'what is generative engine', 'geo vs seo', 'geo vs. seo',
      'introduction to geo', 'understanding geo', 'generative engine optimization 101',
      'how ai search works', 'how ai search engine', 'ai search landscape',
      'ranking factor for ai', 'llm ranking', 'ai search ecosystem',
      'generative search explained', 'ai discovery', 'ai search basics',
    ],
  },
  {
    id: 'geo-strategy',
    keywords: [
      'saas geo', 'ecommerce geo', 'e-commerce geo', 'b2b geo', 'b2c geo',
      'fintech geo', 'healthcare geo', 'enterprise geo', 'startup geo',
      'geo playbook', 'geo roadmap', 'geo framework', 'geo for ',
      'industry strategy', 'case study', 'case studies', 'geo implementation',
      'prompt simulation', 'strategy guide', 'geo campaign',
    ],
  },
]

/**
 * Returns a deterministic category ID for any post.
 * 1. Tries keyword matching against `title + slug` (combined, lowercased).
 * 2. Falls back to a hash of the slug to distribute evenly across all 6 categories.
 *
 * The hash fallback ensures posts with no recognizable keywords are spread
 * uniformly — approximately 1/6 of unmatched posts per category.
 */
export function getAutoCategory(title: string, slug: string): string {
  const combined = `${title.toLowerCase()} ${slug.toLowerCase()}`

  for (const { id, keywords } of KEYWORD_RULES) {
    if (keywords.some((kw) => combined.includes(kw))) {
      return id
    }
  }

  // Deterministic hash fallback: ensures even distribution without randomness
  let hash = 0
  for (let i = 0; i < slug.length; i++) {
    hash = ((hash << 5) - hash) + slug.charCodeAt(i)
    hash |= 0 // Convert to 32-bit integer
  }
  return CATEGORY_IDS[Math.abs(hash) % CATEGORY_IDS.length]
}

// ── Tags ─────────────────────────────────────────────────────────────────────

export interface TagGroup {
  group: string
  tags: string[]
}

export const BLOG_TAG_GROUPS: TagGroup[] = [
  {
    group: 'Query-Based',
    tags: [
      'how to rank in ChatGPT',
      'how to get cited by AI',
      'AI search ranking factors',
      'optimize for AI search',
      'AI SEO strategy',
      'how to appear in AI answers',
      'GEO vs SEO',
      'how to increase AI mentions',
      'AI visibility strategy',
      'how to build AI authority',
    ],
  },
  {
    group: 'Platform',
    tags: [
      'ChatGPT',
      'Perplexity',
      'Gemini',
      'Claude',
      'Copilot',
      'Grok',
    ],
  },
  {
    group: 'Technical',
    tags: [
      'RAG',
      'embeddings',
      'semantic SEO',
      'entity SEO',
      'content chunking',
      'structured data',
      'FAQ schema',
      'knowledge graph',
      'LLM SEO',
    ],
  },
  {
    group: 'GEO Mechanism',
    tags: [
      'AI citations',
      'brand mentions',
      'authority signals',
      'AI ranking signals',
      'answer extraction',
      'AI citation strategy',
      'AI brand monitoring',
      'AI recommendation rate',
    ],
  },
]

/** Flat list of all available tags for autocomplete / multiselect */
export const ALL_TAGS: string[] = BLOG_TAG_GROUPS.flatMap((g) => g.tags)

// ── Standard blog template guide (used in admin UI help text) ───────────────

export const BLOG_TEMPLATE_STRUCTURE = [
  'Title (question or definition format)',
  'TL;DR (2–3 sentences)',
  'Key Takeaways (3–5 bullets)',
  'Definition section',
  'Main Sections (H2/H3)',
  'Examples / Use Cases',
  'FAQ (10–15 questions)',
  'Conclusion',
]
