/**
 * Canonical category + subtopic definitions for the HyperMind blog.
 *
 * Auto-classification strategy:
 *   1. getAutoCategory(title, slug)   — keyword matching + hash fallback (6 categories)
 *   2. getAutoSubtopic(title, slug, categoryId) — keyword matching + hash fallback per category
 *
 * Both functions are deterministic: same inputs always produce same output.
 * The hash seed for subtopics is slug+categoryId so subtopic distribution
 * is independent of the category distribution.
 */

// ── Types ────────────────────────────────────────────────────────────────────

export interface BlogSubtopic {
  id: string
  label: string
}

export interface BlogCategory {
  id: string
  label: string
  description: string
  color: string      // Tailwind bg class for badge
  textColor: string  // Tailwind text class for badge
  subtopics: BlogSubtopic[]
}

// ── Categories ───────────────────────────────────────────────────────────────

export const BLOG_CATEGORIES: BlogCategory[] = [
  {
    id: 'geo-basics',
    label: 'GEO Basics',
    description: 'GEO overview, GEO vs SEO, AI search systems, ranking factors, ecosystem',
    color: 'bg-blue-100',
    textColor: 'text-blue-800',
    subtopics: [
      { id: 'geo-overview',      label: 'GEO Overview' },
      { id: 'geo-vs-seo',        label: 'GEO vs SEO' },
      { id: 'ai-search-systems', label: 'AI Search Systems' },
      { id: 'ranking-factors',   label: 'Ranking Factors' },
      { id: 'ecosystem',         label: 'Ecosystem' },
    ],
  },
  {
    id: 'answer-ranking',
    label: 'Answer Ranking',
    description: 'ChatGPT ranking, AI answers, featured snippets, zero-click search, answer optimization',
    color: 'bg-purple-100',
    textColor: 'text-purple-800',
    subtopics: [
      { id: 'chatgpt-ranking',      label: 'ChatGPT Ranking' },
      { id: 'ai-answers',           label: 'AI Answers' },
      { id: 'featured-snippets',    label: 'Featured Snippets' },
      { id: 'zero-click-search',    label: 'Zero-Click Search' },
      { id: 'answer-optimization',  label: 'Answer Optimization' },
    ],
  },
  {
    id: 'ai-mentions',
    label: 'AI Mentions',
    description: 'AI citations, brand mentions, authority signals, backlinks, PR',
    color: 'bg-green-100',
    textColor: 'text-green-800',
    subtopics: [
      { id: 'ai-citations',      label: 'AI Citations' },
      { id: 'brand-mentions',    label: 'Brand Mentions' },
      { id: 'authority-signals', label: 'Authority Signals' },
      { id: 'backlinks',         label: 'Backlinks' },
      { id: 'pr',                label: 'PR & Media' },
    ],
  },
  {
    id: 'content-optimization',
    label: 'Content Optimization',
    description: 'LLM content structure, semantic SEO, entity optimization, chunking, RAG',
    color: 'bg-orange-100',
    textColor: 'text-orange-800',
    subtopics: [
      { id: 'llm-content-structure', label: 'LLM Content Structure' },
      { id: 'semantic-seo',          label: 'Semantic SEO' },
      { id: 'entity-optimization',   label: 'Entity Optimization' },
      { id: 'chunking',              label: 'Content Chunking' },
      { id: 'rag',                   label: 'RAG & Retrieval' },
    ],
  },
  {
    id: 'ai-analytics',
    label: 'AI Analytics',
    description: 'Visibility tracking, mention monitoring, GEO metrics, competitor analysis, tools',
    color: 'bg-cyan-100',
    textColor: 'text-cyan-800',
    subtopics: [
      { id: 'visibility-tracking',  label: 'Visibility Tracking' },
      { id: 'mention-monitoring',   label: 'Mention Monitoring' },
      { id: 'geo-metrics',          label: 'GEO Metrics' },
      { id: 'competitor-analysis',  label: 'Competitor Analysis' },
      { id: 'tools',                label: 'Tools & Platforms' },
    ],
  },
  {
    id: 'geo-strategy',
    label: 'GEO Strategy',
    description: 'SaaS GEO, eCommerce GEO, B2B GEO, content strategy, case studies',
    color: 'bg-gray-100',
    textColor: 'text-gray-800',
    subtopics: [
      { id: 'saas-geo',          label: 'SaaS GEO' },
      { id: 'ecommerce-geo',     label: 'eCommerce GEO' },
      { id: 'b2b-geo',           label: 'B2B GEO' },
      { id: 'content-strategy',  label: 'Content Strategy' },
      { id: 'case-studies',      label: 'Case Studies' },
    ],
  },
]

const CATEGORY_IDS = BLOG_CATEGORIES.map((c) => c.id)

export function getCategoryById(id: string): BlogCategory | undefined {
  return BLOG_CATEGORIES.find((c) => c.id === id)
}

export function getSubtopicLabel(categoryId: string, subtopicId: string): string {
  const cat = getCategoryById(categoryId)
  return cat?.subtopics.find((s) => s.id === subtopicId)?.label ?? subtopicId
}

// ── Auto-classification (category) ───────────────────────────────────────────

const CATEGORY_KEYWORD_RULES: Array<{ id: string; keywords: string[] }> = [
  {
    id: 'ai-analytics',
    keywords: [
      'top 7', 'top 10', 'top 5', 'best tools', 'best apps', 'mobile ai',
      'vendor comparison', 'platform comparison', 'vs top', 'competitor analysis',
      'tracking tool', 'monitoring tool', 'analytics platform', 'kpi', 'roi measurement',
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
      'optimize content', 'content readability', 'llm-friendly', 'ai-readable',
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

export function getAutoCategory(title: string, slug: string): string {
  const combined = `${title.toLowerCase()} ${slug.toLowerCase()}`
  for (const { id, keywords } of CATEGORY_KEYWORD_RULES) {
    if (keywords.some((kw) => combined.includes(kw))) return id
  }
  let hash = 0
  for (let i = 0; i < slug.length; i++) {
    hash = ((hash << 5) - hash) + slug.charCodeAt(i)
    hash |= 0
  }
  return CATEGORY_IDS[Math.abs(hash) % CATEGORY_IDS.length]
}

// ── Auto-classification (subtopic) ───────────────────────────────────────────

/**
 * Per-category subtopic keyword rules.
 * Each rule maps a subtopic ID → keyword fragments.
 * If no keyword matches, hash(slug + ':' + categoryId) picks a subtopic
 * within the category, ensuring even distribution independent of the
 * category-level hash.
 */
const SUBTOPIC_KEYWORD_RULES: Record<string, Array<{ id: string; keywords: string[] }>> = {
  'geo-basics': [
    { id: 'geo-vs-seo',        keywords: ['vs seo', 'versus seo', 'seo vs', 'geo and seo', 'difference between geo'] },
    { id: 'ai-search-systems', keywords: ['how ai search', 'perplexity search', 'chatgpt search', 'gemini search', 'llm search system', 'search engine works'] },
    { id: 'ranking-factors',   keywords: ['ranking factor', 'ranking signal', 'what factor', 'ai rank criteria', 'ranking criteria'] },
    { id: 'ecosystem',         keywords: ['ecosystem', 'landscape', 'market overview', 'industry overview', 'ai search market'] },
    { id: 'geo-overview',      keywords: ['overview', 'what is geo', 'intro to geo', 'basics', '101', 'beginners guide', 'introduction'] },
  ],
  'answer-ranking': [
    { id: 'zero-click-search',   keywords: ['zero-click', 'zero click', 'no-click', 'no click'] },
    { id: 'featured-snippets',   keywords: ['featured snippet', 'position 0', 'rich result', 'rich snippet'] },
    { id: 'chatgpt-ranking',     keywords: ['chatgpt', 'openai', 'gpt-4', 'gpt-3', 'gpt4', 'gpt3'] },
    { id: 'answer-optimization', keywords: ['answer optimization', 'optimize answer', 'answer engine', 'answer format'] },
    { id: 'ai-answers',          keywords: ['ai answer', 'ai response', 'ai recommendation', 'ai generated answer', 'direct answer'] },
  ],
  'ai-mentions': [
    { id: 'backlinks',         keywords: ['backlink', 'link building', 'inbound link', 'link strategy', 'link equity'] },
    { id: 'pr',                keywords: ['public relations', 'digital pr', 'press release', 'media coverage', 'earned media'] },
    { id: 'ai-citations',      keywords: ['ai citation', 'citation strategy', 'cited by ai', 'earn citation', 'cite'] },
    { id: 'authority-signals', keywords: ['authority signal', 'domain authority', 'credibility signal', 'trust signal'] },
    { id: 'brand-mentions',    keywords: ['brand mention', 'brand in ai', 'mentioned in ai', 'brand visibility', 'mention monitoring'] },
  ],
  'content-optimization': [
    { id: 'rag',                   keywords: ['rag', 'retrieval augmented', 'retrieval', 'vector search', 'embedding', 'vector'] },
    { id: 'chunking',              keywords: ['chunking', 'content chunk', 'text chunk', 'passage', 'segment'] },
    { id: 'entity-optimization',   keywords: ['entity seo', 'entity optimization', 'entity', 'knowledge graph', 'named entity'] },
    { id: 'semantic-seo',          keywords: ['semantic seo', 'semantic search', 'semantic relevance', 'latent semantic'] },
    { id: 'llm-content-structure', keywords: ['content structure', 'structured content', 'content format', 'content for llm', 'llm-friendly', 'ai-readable'] },
  ],
  'ai-analytics': [
    { id: 'competitor-analysis', keywords: ['competitor', 'competitive analysis', 'benchmark', 'competitive intel', 'vs competitor'] },
    { id: 'tools',               keywords: ['tool', 'platform', 'software', 'app', 'mobile', 'top 7', 'top 10', 'vendor', 'best tools'] },
    { id: 'mention-monitoring',  keywords: ['mention monitoring', 'brand monitoring', 'social listening', 'monitor mention', 'track mention'] },
    { id: 'geo-metrics',         keywords: ['metric', 'kpi', 'measurement', 'measure', 'roi', 'score', 'performance indicator'] },
    { id: 'visibility-tracking', keywords: ['visibility tracking', 'track visibility', 'monitor visibility', 'ai visibility', 'visibility score'] },
  ],
  'geo-strategy': [
    { id: 'case-studies',     keywords: ['case study', 'case studies', 'success story', 'example', 'results', 'outcome'] },
    { id: 'ecommerce-geo',    keywords: ['ecommerce', 'e-commerce', 'online store', 'product listing', 'shopping'] },
    { id: 'saas-geo',         keywords: ['saas', 'software as a service', 'b2b saas', 'software product'] },
    { id: 'b2b-geo',          keywords: ['b2b', 'business to business', 'enterprise', 'corporate', 'b2b marketing'] },
    { id: 'content-strategy', keywords: ['content strategy', 'content plan', 'editorial', 'content calendar', 'content marketing'] },
  ],
}

/**
 * Returns a deterministic subtopic ID for a given post within its category.
 * Uses keyword matching first, then falls back to a hash that is independent
 * of the category-level hash (seed = slug + ':' + categoryId).
 */
export function getAutoSubtopic(title: string, slug: string, categoryId: string): string {
  const cat = getCategoryById(categoryId)
  if (!cat || cat.subtopics.length === 0) return ''

  const combined = `${title.toLowerCase()} ${slug.toLowerCase()}`
  const rules = SUBTOPIC_KEYWORD_RULES[categoryId] ?? []

  for (const { id, keywords } of rules) {
    if (keywords.some((kw) => combined.includes(kw))) return id
  }

  // Hash with a different seed per category for independent distribution
  const seed = `${slug}:${categoryId}`
  let hash = 0
  for (let i = 0; i < seed.length; i++) {
    hash = ((hash << 5) - hash) + seed.charCodeAt(i)
    hash |= 0
  }
  return cat.subtopics[Math.abs(hash) % cat.subtopics.length].id
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
    tags: ['ChatGPT', 'Perplexity', 'Gemini', 'Claude', 'Copilot', 'Grok'],
  },
  {
    group: 'Technical',
    tags: [
      'RAG', 'embeddings', 'semantic SEO', 'entity SEO',
      'content chunking', 'structured data', 'FAQ schema', 'knowledge graph', 'LLM SEO',
    ],
  },
  {
    group: 'GEO Mechanism',
    tags: [
      'AI citations', 'brand mentions', 'authority signals', 'AI ranking signals',
      'answer extraction', 'AI citation strategy', 'AI brand monitoring', 'AI recommendation rate',
    ],
  },
]

export const ALL_TAGS: string[] = BLOG_TAG_GROUPS.flatMap((g) => g.tags)

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
