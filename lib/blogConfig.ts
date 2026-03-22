/**
 * Canonical category and tag definitions for the HyperMind blog.
 * All blog posts MUST use exactly one category from BLOG_CATEGORIES
 * and 3-5 tags chosen from the tag groups below.
 *
 * This file is the single source of truth — referenced by the admin UI,
 * blog listing filters, and article rendering.
 */

// ── Categories ───────────────────────────────────────────────────────────────

export interface BlogCategory {
  id: string
  label: string
  description: string
  color: string   // Tailwind bg class for badge
  textColor: string // Tailwind text class for badge
}

export const BLOG_CATEGORIES: BlogCategory[] = [
  {
    id: 'geo-fundamentals',
    label: 'GEO Fundamentals',
    description: 'Concepts, definitions, how AI search works, GEO vs SEO',
    color: 'bg-blue-100',
    textColor: 'text-blue-800',
  },
  {
    id: 'ai-answer-ranking',
    label: 'AI Answer & Ranking Optimization',
    description: 'How to rank in AI answers, ChatGPT/Perplexity optimization',
    color: 'bg-purple-100',
    textColor: 'text-purple-800',
  },
  {
    id: 'ai-mentions-authority',
    label: 'AI Mentions & Authority Building',
    description: 'Citations, backlinks, PR, brand mentions in AI',
    color: 'bg-green-100',
    textColor: 'text-green-800',
  },
  {
    id: 'llm-content-optimization',
    label: 'LLM Content Optimization',
    description: 'Content structuring, semantic SEO, RAG, chunking',
    color: 'bg-orange-100',
    textColor: 'text-orange-800',
  },
  {
    id: 'ai-visibility-analytics',
    label: 'AI Visibility Analytics & Monitoring',
    description: 'Tracking, tools, measurement, competitive analysis',
    color: 'bg-cyan-100',
    textColor: 'text-cyan-800',
  },
  {
    id: 'geo-strategies',
    label: 'GEO Strategies & Case Studies',
    description: 'Playbooks, industry strategies, real-world examples',
    color: 'bg-gray-100',
    textColor: 'text-gray-800',
  },
]

export function getCategoryById(id: string): BlogCategory | undefined {
  return BLOG_CATEGORIES.find((c) => c.id === id)
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
