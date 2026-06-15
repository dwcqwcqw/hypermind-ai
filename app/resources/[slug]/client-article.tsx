import Link from 'next/link'
import { marked } from 'marked'
import { getCategoryById } from '@/lib/blogConfig'

interface RelatedArticle {
  title: string
  slug: string
  category?: string
  excerpt?: string
}

interface ArticleContentProps {
  slug: string
  title: string
  coverImage?: string
  content: string
  displayDate: string
  updatedDate?: string
  author?: string
  authorBio?: string
  category?: string
  tags?: string[]
  tldr?: string
  keyTakeaways?: string[]
  relatedArticles?: RelatedArticle[]
}

interface KnowledgeHubLink {
  label: string
  href: string
}

interface KnowledgeHubGroup {
  title: string
  links: KnowledgeHubLink[]
}

const KNOWLEDGE_LINK_RULES: Array<{ keywords: string[]; links: KnowledgeHubLink[] }> = [
  {
    keywords: ['chatgpt', 'brand mention', 'mention gap', 'entity', 'answer engine', 'recommend my company'],
    links: [
      { label: 'AI Mention Tracking', href: '/platform/ai-mention-tracking' },
      { label: 'AI Answer Optimization', href: '/services/ai-answer-optimization' },
      { label: 'AI Visibility Monitoring Guide', href: '/resources/ai-visibility-monitoring-guide' },
      { label: 'AI Search Traffic Firewall Check', href: '/resources/ai-search-traffic-firewall-check' },
      { label: 'AI Citation Source Graph', href: '/resources/ai-citation-source-graph' },
      { label: 'HyperMind Methodology', href: '/company/methodology' },
    ],
  },
  {
    keywords: ['citation', 'source', 'linkedin', 'reddit', 'medium', 'perplexity', 'co-citation'],
    links: [
      { label: 'AI Citation Source Analysis', href: '/platform/ai-citation-source-analysis' },
      { label: 'AI Citation Strategy', href: '/services/ai-citation-strategy' },
      { label: 'Citation Source Database', href: '/data/ai-citation-sources-database' },
      { label: 'Citation Absorption GEO', href: '/resources/citation-absorption-geo' },
      { label: 'Citation Failure Diagnosis', href: '/resources/citation-failure-diagnosis-geo' },
      { label: 'HyperMind Trust Signals', href: '/company/trust' },
    ],
  },
  {
    keywords: ['google ai mode', 'ai mode', 'ai overview', 'query fan-out', 'search generative'],
    links: [
      { label: 'AI Mode Impression Map', href: '/resources/ai-mode-impression-map' },
      { label: 'Google AI Mode Follow-Up Loops', href: '/resources/google-ai-mode-follow-up-loops' },
      { label: 'Google AI Mode SEO', href: '/resources/google-ai-mode-seo-still-works' },
      { label: 'AI Mode Intent Packets', href: '/resources/ai-mode-intent-packets' },
      { label: 'Prompt Intelligence', href: '/platform/prompt-intelligence' },
      { label: 'AI Search Traffic Signal Board', href: '/resources/ai-search-traffic-signal-board' },
    ],
  },
  {
    keywords: ['pricing', 'budget', 'buyer decision', 'spend', 'cost', 'tools vs execution'],
    links: [
      { label: 'Pricing', href: '/pricing' },
      { label: 'AI Visibility Pricing Control Room', href: '/resources/ai-visibility-pricing-control-room' },
      { label: 'Citation Source Pricing Analysis', href: '/resources/ai-visibility-pricing-citation-source-analysis' },
      { label: 'Buyer-Decision Prompt Budget', href: '/resources/ai-visibility-budget-buyer-decision-prompts' },
      { label: 'Competitor AI Visibility', href: '/platform/competitor-ai-visibility' },
      { label: 'HyperMind vs SEO Tools', href: '/compare/hypermind-vs-seo-tools' },
    ],
  },
  {
    keywords: ['traffic', 'pipeline', 'demand', 'qualified', 'conversion', 'attribution'],
    links: [
      { label: 'AI Traffic Attribution', href: '/platform/ai-traffic-attribution' },
      { label: 'AI Search Traffic Growth', href: '/services/ai-search-traffic-growth' },
      { label: 'AI Search Traffic Recovery', href: '/resources/ai-search-traffic-recovery-playbook' },
      { label: 'B2B SaaS Buyer Prompts', href: '/resources/b2b-saas-ai-search-traffic-buyer-prompts' },
      { label: 'AI Search Traffic Signal Board', href: '/resources/ai-search-traffic-signal-board' },
      { label: 'Prompt Database', href: '/resources/prompt-database' },
    ],
  },
  {
    keywords: ['saas', 'b2b'],
    links: [
      { label: 'B2B SaaS GEO', href: '/solutions/b2b-saas-geo' },
      { label: 'SaaS AI Search Pipeline', href: '/resources/b2b-saas-ai-search-pipeline-board' },
      { label: 'SaaS AI Mention Growth', href: '/case-studies/saas-ai-mention-growth' },
      { label: 'AI Mention Growth Service', href: '/services/ai-mention-growth' },
      { label: 'AI Visibility Optimization', href: '/services/ai-visibility-optimization' },
      { label: 'Prompt Intelligence', href: '/platform/prompt-intelligence' },
    ],
  },
  {
    keywords: ['ecommerce', 'e-commerce', 'shopping', 'retail', 'product recommendation'],
    links: [
      { label: 'Ecommerce GEO', href: '/solutions/ecommerce-geo' },
      { label: 'Agentic Shopping GEO', href: '/resources/ecommerce-geo-agentic-shopping' },
      { label: 'Product Recommendations Case Study', href: '/case-studies/ecommerce-product-recommendations' },
      { label: 'AI Answer Optimization', href: '/services/ai-answer-optimization' },
      { label: 'AI Citation Strategy', href: '/services/ai-citation-strategy' },
      { label: 'AI Search Trends', href: '/data/ai-search-trends' },
    ],
  },
  {
    keywords: ['enterprise', 'governance', 'source fidelity', 'operating system'],
    links: [
      { label: 'Enterprise GEO', href: '/solutions/enterprise-geo' },
      { label: 'Enterprise Source Fidelity OS', href: '/resources/enterprise-geo-source-fidelity-operating-system' },
      { label: 'Enterprise Share of Voice', href: '/case-studies/enterprise-share-of-voice' },
      { label: 'AI Narrative Control', href: '/services/ai-narrative-control' },
      { label: 'AI Brand Sentiment Index', href: '/data/ai-brand-sentiment-index' },
      { label: 'HyperMind Methodology', href: '/company/methodology' },
    ],
  },
  {
    keywords: ['platform', 'profound', 'peec', 'writesonic', 'semrush', 'ahrefs', 'competitor'],
    links: [
      { label: 'HyperMind vs SEO Tools', href: '/compare/hypermind-vs-seo-tools' },
      { label: 'HyperMind vs Profound', href: '/compare/hypermind-vs-profound' },
      { label: 'HyperMind vs Writesonic', href: '/compare/hypermind-vs-writesonic' },
      { label: 'Platform Evaluation Playbook', href: '/resources/ai-visibility-platform-evaluation-playbook' },
      { label: 'Semrush vs Ahrefs AI Visibility', href: '/resources/semrush-ai-toolkit-vs-ahrefs-brand-radar' },
      { label: 'Competitor AI Visibility', href: '/platform/competitor-ai-visibility' },
    ],
  },
]

const CATEGORY_FALLBACK_LINKS: Record<string, KnowledgeHubLink[]> = {
  'geo-strategy': [
    { label: 'GEO Playbooks', href: '/resources/geo-playbooks' },
    { label: 'Complete GEO Strategy', href: '/resources/complete-geo-strategy-guide' },
    { label: 'AI Visibility Optimization', href: '/services/ai-visibility-optimization' },
  ],
  'ai-analytics': [
    { label: 'AI Visibility Monitoring', href: '/platform/ai-visibility-monitoring' },
    { label: 'AI Visibility Leaderboard', href: '/data/ai-visibility-leaderboard' },
    { label: 'AI Search Statistics', href: '/resources/ai-search-statistics' },
  ],
  'ai-mentions': [
    { label: 'AI Mention Tracker', href: '/tools/ai-mention-tracker' },
    { label: 'AI Brand Mention Index', href: '/data/ai-brand-mention-index' },
    { label: 'AI Citation Checker', href: '/tools/ai-citation-checker' },
  ],
  'answer-ranking': [
    { label: 'AI Answer Optimization', href: '/services/ai-answer-optimization' },
    { label: 'How AI Search Works', href: '/resources/how-ai-search-works' },
    { label: 'AI Search Library', href: '/resources/ai-search-library' },
  ],
  'content-optimization': [
    { label: 'AI Knowledge Graph Strategy', href: '/services/ai-knowledge-graph-strategy' },
    { label: 'How to Optimize for AI Search', href: '/resources/how-to-optimize-for-ai-search' },
    { label: 'GEO Gap Audit', href: '/resources/geo-gap-audit-ai-visibility-infrastructure' },
  ],
  'geo-basics': [
    { label: 'What is GEO?', href: '/resources/what-is-geo' },
    { label: 'How AI Search Works', href: '/resources/how-ai-search-works' },
    { label: 'GEO Guides', href: '/resources/geo-guides' },
  ],
}

const DEFAULT_KNOWLEDGE_LINKS: KnowledgeHubLink[] = [
  { label: 'AI Visibility Monitoring', href: '/platform/ai-visibility-monitoring' },
  { label: 'Prompt Intelligence', href: '/platform/prompt-intelligence' },
  { label: 'AI Citation Source Analysis', href: '/platform/ai-citation-source-analysis' },
  { label: 'AI Answer Optimization', href: '/services/ai-answer-optimization' },
  { label: 'GEO Playbooks', href: '/resources/geo-playbooks' },
  { label: 'HyperMind Methodology', href: '/company/methodology' },
]

function normalizePath(path: string): string {
  return path.replace(/\/$/, '')
}

function getKnowledgeHubCandidates({
  slug,
  title,
  category,
  tags,
  limit = 18,
}: {
  slug: string
  title: string
  category?: string
  tags?: string[]
  limit?: number
}): KnowledgeHubLink[] {
  const haystack = `${slug} ${title} ${(tags ?? []).join(' ')} ${category ?? ''}`.toLowerCase()
  const currentPath = normalizePath(`/resources/${slug}`)
  const selected: KnowledgeHubLink[] = []
  const seen = new Set<string>()

  const addLinks = (links: KnowledgeHubLink[]) => {
    links.forEach((link) => {
      const normalized = normalizePath(link.href)
      if (normalized === currentPath || seen.has(normalized) || selected.length >= limit) return
      seen.add(normalized)
      selected.push(link)
    })
  }

  KNOWLEDGE_LINK_RULES.forEach((rule) => {
    if (rule.keywords.some((keyword) => haystack.includes(keyword))) {
      addLinks(rule.links)
    }
  })

  if (category && CATEGORY_FALLBACK_LINKS[category]) {
    addLinks(CATEGORY_FALLBACK_LINKS[category])
  }

  addLinks(DEFAULT_KNOWLEDGE_LINKS)

  return selected.slice(0, limit)
}

const RELATED_RESOURCE_GROUP_ORDER = [
  'Core AI Visibility Metrics',
  'Measurement & Attribution',
  'Citation Source Quality',
  'Prompt & AI Search Playbooks',
  'Industry GEO Playbooks',
  'Platform & Competitor Comparisons',
  'Pricing & Buyer Decisions',
  'GEO Execution Services',
  'Strategic Context',
]

function getRelatedResourceGroupTitle(link: KnowledgeHubLink): string {
  const text = `${link.label} ${link.href}`.toLowerCase()

  if (text.includes('compare') || text.includes('competitor') || text.includes('peec') || text.includes('profound') || text.includes('writesonic') || text.includes('semrush') || text.includes('ahrefs')) {
    return 'Platform & Competitor Comparisons'
  }
  if (text.includes('pricing') || text.includes('budget') || text.includes('buyer-decision') || text.includes('cost')) {
    return 'Pricing & Buyer Decisions'
  }
  if (text.includes('citation') || text.includes('source') || text.includes('trust')) {
    return 'Citation Source Quality'
  }
  if (text.includes('traffic') || text.includes('attribution') || text.includes('pipeline') || text.includes('statistics') || text.includes('signal board')) {
    return 'Measurement & Attribution'
  }
  if (text.includes('prompt') || text.includes('ai mode') || text.includes('google') || text.includes('answer') || text.includes('search works')) {
    return 'Prompt & AI Search Playbooks'
  }
  if (text.includes('solution') || text.includes('saas') || text.includes('ecommerce') || text.includes('enterprise') || text.includes('fintech')) {
    return 'Industry GEO Playbooks'
  }
  if (text.includes('visibility') || text.includes('mention') || text.includes('brand audit') || text.includes('leaderboard')) {
    return 'Core AI Visibility Metrics'
  }
  if (text.includes('service') || text.includes('methodology') || text.includes('geo playbooks') || text.includes('knowledge graph') || text.includes('optimization')) {
    return 'GEO Execution Services'
  }

  return 'Strategic Context'
}

function getRelatedResourceGroups({
  slug,
  title,
  category,
  tags,
}: {
  slug: string
  title: string
  category?: string
  tags?: string[]
}): KnowledgeHubGroup[] {
  const grouped = new Map<string, KnowledgeHubLink[]>()
  const links = getKnowledgeHubCandidates({ slug, title, category, tags, limit: 18 })

  links.forEach((link) => {
    const groupTitle = getRelatedResourceGroupTitle(link)
    const groupLinks = grouped.get(groupTitle) ?? []
    if (groupLinks.length < 4) {
      groupLinks.push(link)
      grouped.set(groupTitle, groupLinks)
    }
  })

  return RELATED_RESOURCE_GROUP_ORDER
    .map((groupTitle) => ({ title: groupTitle, links: grouped.get(groupTitle) ?? [] }))
    .filter((group) => group.links.length > 0)
    .slice(0, 5)
}

function getHtmlFromContent(content: string): string {
  const looksLikeHtml = /<\/(p|h1|h2|h3|h4|h5|h6|ul|ol|li|strong|em|div|section|article)>/i.test(content)
  return looksLikeHtml ? content : (marked.parse(content, { breaks: true }) as string)
}

export default function ArticleContent({
  slug,
  title,
  coverImage,
  content,
  displayDate,
  updatedDate,
  author,
  authorBio,
  category,
  tags,
  tldr,
  keyTakeaways,
  relatedArticles,
}: ArticleContentProps) {
  const html = getHtmlFromContent(content)
  const cat = category ? getCategoryById(category) : undefined
  const relatedResourceGroups = getRelatedResourceGroups({ slug, title, category, tags })

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 overflow-hidden">

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
        <span>›</span>
        <Link href="/resources" className="hover:text-gray-900 transition-colors">Resources</Link>
        <span>›</span>
        <Link href="/resources/blog" className="hover:text-gray-900 transition-colors">Blog</Link>
        {cat && (
          <>
            <span>›</span>
            <Link href={`/resources/blog?category=${category}`} className="hover:text-gray-900 transition-colors">
              {cat.label}
            </Link>
          </>
        )}
      </nav>

      {/* Article Header */}
      <header className="mb-10">
        {/* Category + Date row */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          {cat ? (
            <Link
              href={`/resources/blog?category=${category}`}
              className={`px-3 py-1 text-xs rounded-full font-medium transition-opacity hover:opacity-80 ${cat.color} ${cat.textColor}`}
            >
              {cat.label}
            </Link>
          ) : (
            <span className="px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-600">ARTICLE</span>
          )}
          <span className="text-sm text-gray-500">{displayDate}</span>
          {updatedDate && <span className="text-sm text-gray-500">Updated {updatedDate}</span>}
          {author && <span className="text-sm text-gray-500">by {author}</span>}
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight break-words">{title}</h1>

        {authorBio && (
          <p className="text-sm sm:text-base text-gray-600 max-w-3xl leading-relaxed">
            {authorBio}
          </p>
        )}

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs rounded-full bg-gray-100 border border-gray-200 text-gray-600"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      {/* Featured Image */}
      {coverImage && (
        <div className="relative w-full h-56 sm:h-96 mb-10 rounded-2xl overflow-hidden">
          <img src={coverImage} alt={title} className="w-full h-full object-cover" />
        </div>
      )}

      {/* TL;DR Box — AI-extractable quick answer */}
      {tldr && (
        <div className="mb-8 p-5 sm:p-6 bg-blue-50 border border-blue-200 rounded-2xl">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">TL;DR</span>
          </div>
          <p className="text-gray-800 leading-relaxed">{tldr}</p>
        </div>
      )}

      {/* Key Takeaways — structured for AI extraction */}
      {keyTakeaways && keyTakeaways.length > 0 && (
        <div className="mb-10 p-5 sm:p-6 bg-gray-50 border border-gray-200 rounded-2xl">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Key Takeaways</h2>
          <ul className="space-y-2">
            {keyTakeaways.map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-1 w-2 h-2 rounded-full bg-black shrink-0" />
                <span className="text-gray-700">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Article Body */}
      <div
        className="prose prose-base sm:prose-lg prose-headings:font-bold prose-h2:text-2xl sm:prose-h2:text-3xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl sm:prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3 prose-p:mb-4 prose-p:text-gray-700 prose-a:text-blue-600 prose-a:underline prose-strong:font-semibold prose-ul:list-disc prose-ul:ml-6 prose-ol:list-decimal prose-ol:ml-6 prose-li:mb-1 prose-img:rounded-xl prose-img:my-6 prose-blockquote:border-l-4 prose-blockquote:border-gray-300 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-600 prose-table:block prose-table:w-full prose-table:overflow-x-auto max-w-none break-words"
        style={{ lineHeight: '1.8', color: '#374151' }}
        dangerouslySetInnerHTML={{ __html: html }}
      />

      {/* Related Articles */}
      {relatedArticles && relatedArticles.length > 0 && (
        <div className="mt-16 pt-10 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {relatedArticles.map((article) => {
              const relCat = article.category ? getCategoryById(article.category) : undefined
              return (
                <Link
                  key={article.slug}
                  href={`/resources/${article.slug}`}
                  className="group p-5 bg-gray-50 rounded-xl border border-gray-200 hover:border-gray-400 hover:bg-white transition-all"
                >
                  {relCat && (
                    <span className={`inline-block px-2 py-0.5 text-xs rounded-full mb-2 ${relCat.color} ${relCat.textColor}`}>
                      {relCat.label}
                    </span>
                  )}
                  <h3 className="font-semibold text-gray-900 group-hover:text-black transition-colors line-clamp-2 mb-1">
                    {article.title}
                  </h3>
                  {article.excerpt && (
                    <p className="text-sm text-gray-500 line-clamp-2">{article.excerpt}</p>
                  )}
                  <span className="mt-2 inline-block text-sm font-medium text-black group-hover:underline">
                    Read →
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      )}

      {/* Internal linking: grouped resource paths for readers, crawlers, and AI answer engines */}
      {relatedResourceGroups.length > 0 && (
        <section className="mt-16 pt-10 border-t border-gray-200" aria-labelledby="related-resources-heading">
          <h2 id="related-resources-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
            Related Resources
          </h2>
          <div className="space-y-8">
            {relatedResourceGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">{group.title}</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-gray-900 underline underline-offset-2 hover:text-blue-700 transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <div className="mt-12 p-6 sm:p-8 bg-gray-900 rounded-2xl text-center text-white">
        <h3 className="text-xl sm:text-2xl font-bold mb-3">
          Ready to optimize your brand for AI search?
        </h3>
        <p className="text-gray-300 mb-6 max-w-lg mx-auto">
          HyperMind tracks your AI visibility across ChatGPT, Perplexity, and Gemini — and shows you exactly how to get cited more.
        </p>
        <a
          href="https://forms.gle/QA6WWgN4cpRHW5VF7"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-black px-6 sm:px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition"
        >
          Get Started Free →
        </a>
      </div>
    </article>
  )
}
