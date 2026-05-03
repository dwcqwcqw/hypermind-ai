import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { getRequestContext } from '@cloudflare/next-on-pages'
import Pagination from './pagination'
import {
  BLOG_CATEGORIES,
  getCategoryById,
  getAutoCategory,
  getAutoSubtopic,
} from '@/lib/blogConfig'
import type { Metadata } from 'next'

export const runtime = 'edge'
export const revalidate = 3600

export async function generateMetadata({
  searchParams,
}: {
  searchParams?: Promise<{ page?: string; category?: string; subtopic?: string }>
}): Promise<Metadata> {
  const resolved = searchParams ? await searchParams : undefined
  const pageNum = resolved?.page
  const activeCategory = resolved?.category ?? ''
  const activeSubtopic = resolved?.subtopic ?? ''

  if (pageNum) {
    const p = parseInt(pageNum, 10)
    if (!isNaN(p) && p > 1) {
      const parts = ['GEO Blog', 'Page', String(p)]
      if (activeCategory) parts.push(activeCategory.replace(/-/g, ' '))
      return {
        title: parts.join(' — '),
        description:
          'Expert articles on GEO, AI search ranking, LLM content optimization, and AI citation strategies — page ' + p + '.',
        alternates: { canonical: '/resources/blog/' },
      }
    }
  }
  return {
    title: 'GEO Blog — AI Visibility & GEO Resources | HyperMind',
    description:
      'Expert articles on GEO, AI search ranking, LLM content optimization, and AI citation strategies.',
    alternates: { canonical: '/resources/blog/' },
  }
}

// ── Types ────────────────────────────────────────────────────────────────────

interface Article {
  id: string | number
  title: string
  date?: string
  publishAt?: string
  category: string
  subtopic: string
  image?: string
  coverImage?: string
  description?: string
  excerpt?: string
  slug: string
  tags?: string[]
}

interface KVPost {
  id: string
  title: string
  slug: string
  publishAt: string
  content: string
  coverImage: string
  excerpt: string
  updatedAt: string
  category?: string
  tags?: string[]
  tldr?: string
  keyTakeaways?: string[]
}

const PAGE_SIZE = 9

// ── Static articles ──────────────────────────────────────────────────────────

const RAW_STATIC: Array<Omit<Article, 'subtopic'>> = [
  {
    id: 5,
    title: 'MAGEO and Reusable Strategy Learning: HyperMind Core Technology for GEO',
    date: '2026-05-04',
    category: 'geo-strategy',
    image: '/asset/Understand_What_AI_is_Saying_About_Your_Brand.jpg',
    description:
      'How HyperMind applies MAGEO-style reusable strategy learning, Skill Banks, and fidelity-aware evaluation as a core technology for AI visibility optimization.',
    slug: 'mageo-reusable-strategy-learning-geo',
    tags: ['MAGEO', 'multi-agent GEO', 'reusable strategy learning', 'DSV-CF', 'AI citation fidelity'],
  },
  {
    id: 4,
    title: 'AI Visibility Platform vs GEO Agency: Profound, Peec, Writesonic, HyperMind',
    date: '2026-05-03',
    category: 'geo-strategy',
    image: '/asset/Understand_What_AI_is_Saying_About_Your_Brand.jpg',
    description:
      'A buyer-focused guide to choosing between AI visibility platforms and GEO agencies, with a prompt-to-revenue framework for brands evaluating Profound, Peec AI, Writesonic GEO, and HyperMind.',
    slug: 'ai-visibility-platform-vs-geo-agency',
    tags: ['AI visibility platform', 'GEO agency', 'Profound AI', 'Peec AI', 'Writesonic GEO'],
  },
  {
    id: 3,
    title: 'Top 7 Mobile AI Marketing Apps for Instant Insights in 2025',
    date: 'Jan 28, 2025',
    category: 'ai-analytics',
    image: '/resources/article3_image.png',
    description:
      'Discover the best mobile AI marketing apps delivering real-time competitive intelligence, brand monitoring, and actionable insights.',
    slug: 'top-7-mobile-ai-marketing-apps-2025',
    tags: ['AI visibility analytics', 'AI search ranking factors', 'ChatGPT', 'Perplexity', 'brand mentions'],
  },
  {
    id: 2,
    title: 'Top 10 AI Marketing Vendors for Prompt Simulation in 2025',
    date: 'Jan 5, 2025',
    category: 'answer-ranking',
    image: '/resources/article2_image.png',
    description:
      'Explore the leading AI marketing vendors specializing in prompt simulation and AI answer optimization.',
    slug: 'top-10-ai-marketing-vendors-prompt-simulation-2025',
    tags: ['optimize for AI search', 'ChatGPT', 'Gemini', 'AI ranking signals', 'answer extraction'],
  },
  {
    id: 1,
    title: 'The Definitive Comparison of HyperMind vs Top AI Marketing Platforms',
    date: 'Oct 1, 2024',
    category: 'geo-strategy',
    image: '/resources/article1_image.png',
    description:
      'Discover how HyperMind stands apart as the only B2B SaaS platform specializing in GEO.',
    slug: 'hypermind-vs-top-ai-marketing-platforms',
    tags: ['AI SEO strategy', 'ChatGPT', 'Perplexity', 'AI citations', 'GEO vs SEO'],
  },
]

// ── Data fetching ────────────────────────────────────────────────────────────

async function getArticles(): Promise<Article[]> {
  let dynamicRaw: Array<Omit<Article, 'subtopic'>> = []

  try {
    const { env } = getRequestContext()
    const POSTS_KV = (env as Record<string, unknown>).POSTS_KV as
      | {
          list: (opts: { prefix: string }) => Promise<{ keys: Array<{ name: string }> }>
          get: (key: string) => Promise<string | null>
        }
      | undefined

    if (POSTS_KV) {
      const { keys } = await POSTS_KV.list({ prefix: 'post:' })
      const now = Date.now()
      const values = await Promise.all(keys.map((k) => POSTS_KV.get(k.name)))

      dynamicRaw = values.flatMap((value, i) => {
        if (!value) return []
        try {
          const post: KVPost = JSON.parse(value)
          if (new Date(post.publishAt).getTime() <= now) {
            return [
              {
                id: post.id,
                title: post.title,
                publishAt: post.publishAt,
                category: post.category ?? getAutoCategory(post.title, post.slug),
                coverImage: post.coverImage,
                description: post.excerpt,
                slug: post.slug,
                tags: post.tags,
              },
            ]
          }
        } catch (e) {
          console.error('Failed to parse post:', keys[i].name, e)
        }
        return []
      })
    }
  } catch (error) {
    console.error('Failed to fetch dynamic posts:', error)
  }

  // Merge dynamic + static, then assign subtopic using category
  const combined = [
    ...dynamicRaw,
    ...RAW_STATIC,
  ].sort((a, b) => {
    const dateA = new Date(a.publishAt ?? a.date ?? 0).getTime()
    const dateB = new Date(b.publishAt ?? b.date ?? 0).getTime()
    return dateB - dateA
  })

  return combined.map((a) => ({
    ...a,
    subtopic: getAutoSubtopic(a.title, a.slug, a.category),
  }))
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default async function BlogPage({
  searchParams,
}: {
  searchParams?: Promise<{ page?: string; category?: string; subtopic?: string }>
}) {
  const allArticles = await getArticles()
  const resolved = searchParams ? await searchParams : undefined

  const activeCategory = resolved?.category ?? ''
  const activeSubtopic = resolved?.subtopic ?? ''

  // Filter articles
  let filteredArticles = allArticles
  if (activeCategory) {
    filteredArticles = filteredArticles.filter((a) => a.category === activeCategory)
  }
  if (activeSubtopic && activeCategory) {
    filteredArticles = filteredArticles.filter((a) => a.subtopic === activeSubtopic)
  }

  // Pagination
  const totalArticles = filteredArticles.length
  const totalPages = Math.max(1, Math.ceil(totalArticles / PAGE_SIZE))
  const pageParam = resolved?.page
  let currentPage = 1
  if (pageParam) {
    const parsed = parseInt(pageParam, 10)
    if (!Number.isNaN(parsed) && parsed >= 1 && parsed <= totalPages) {
      currentPage = parsed
    }
  }
  const pageArticles = filteredArticles.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  )

  // Compute counts per category and subtopic
  const categoryCounts = Object.fromEntries(
    BLOG_CATEGORIES.map((cat) => [
      cat.id,
      allArticles.filter((a) => a.category === cat.id).length,
    ])
  )

  function subtopicCount(catId: string, subId: string): number {
    return allArticles.filter((a) => a.category === catId && a.subtopic === subId).length
  }

  const activeLabel = activeSubtopic
    ? getCategoryById(activeCategory)?.subtopics.find((s) => s.id === activeSubtopic)?.label
    : activeCategory
    ? getCategoryById(activeCategory)?.label
    : 'All Posts'

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#f5f3f0] pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

          {/* Page header */}
          <div className="mb-8">
            <div className="text-sm text-gray-500 mb-2">
              <Link href="/resources" className="hover:underline">Resources</Link>
              <span className="mx-2">›</span>
              <span>Blog</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">GEO Blog</h1>
            <p className="text-lg text-gray-600">
              Expert insights on Generative Engine Optimization, AI search visibility, and LLM content strategies.
            </p>
          </div>

          {/* Main layout: sidebar + articles */}
          <div className="flex flex-col lg:flex-row gap-8 items-start">

            {/* ── Filter Sidebar ──────────────────────────────── */}
            <aside className="w-full lg:w-72 shrink-0 lg:sticky lg:top-28">
              <div className="bg-white rounded-2xl shadow-sm overflow-hidden">

                {/* All Posts */}
                <Link
                  href="/resources/blog"
                  className={`flex items-center justify-between px-5 py-4 border-b border-gray-100 transition-colors ${
                    !activeCategory
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <span className="font-semibold">All Posts</span>
                  <span className={`text-sm tabular-nums ${!activeCategory ? 'text-gray-300' : 'text-gray-400'}`}>
                    {allArticles.length}
                  </span>
                </Link>

                {/* Category rows */}
                {BLOG_CATEGORIES.map((cat, idx) => {
                  const count = categoryCounts[cat.id] ?? 0
                  const isActive = activeCategory === cat.id
                  const isLast = idx === BLOG_CATEGORIES.length - 1

                  return (
                    <div key={cat.id} className={!isLast ? 'border-b border-gray-100' : ''}>
                      {/* Category header row */}
                      <Link
                        href={`/resources/blog?category=${cat.id}`}
                        className={`flex items-center justify-between px-5 py-4 transition-colors ${
                          isActive
                            ? `${cat.color} ${cat.textColor}`
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        <span className="font-semibold text-sm">{cat.label}</span>
                        <span className="text-xs tabular-nums opacity-60">{count}</span>
                      </Link>

                      {/* Subtopic chips — always visible */}
                      <div className="px-4 pb-4 pt-1 flex flex-wrap gap-2">
                        {cat.subtopics.map((sub) => {
                          const subCount = subtopicCount(cat.id, sub.id)
                          const isActiveSub =
                            isActive && activeSubtopic === sub.id

                          return (
                            <Link
                              key={sub.id}
                              href={`/resources/blog?category=${cat.id}&subtopic=${sub.id}`}
                              className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                                isActiveSub
                                  ? 'bg-gray-900 text-white shadow-sm'
                                  : `${cat.color} ${cat.textColor} hover:opacity-80`
                              }`}
                            >
                              {sub.label}
                              <span className={`tabular-nums ${isActiveSub ? 'text-gray-300' : 'opacity-50'}`}>
                                ({subCount})
                              </span>
                            </Link>
                          )
                        })}
                      </div>
                    </div>
                  )
                })}
              </div>
            </aside>

            {/* ── Articles area ───────────────────────────────── */}
            <div className="flex-1 min-w-0">
              {/* Active filter breadcrumb */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-bold text-gray-900">{activeLabel}</h2>
                  <span className="text-sm text-gray-400">({totalArticles} articles)</span>
                </div>
                {(activeCategory || activeSubtopic) && (
                  <Link
                    href="/resources/blog"
                    className="text-sm text-gray-500 hover:text-gray-900 transition-colors flex items-center gap-1"
                  >
                    Clear filter ✕
                  </Link>
                )}
              </div>

              {/* Articles grid */}
              {pageArticles.length === 0 ? (
                <div className="text-center py-20 text-gray-500 bg-white rounded-2xl">
                  <p className="text-xl mb-4">No articles in this topic yet.</p>
                  <Link href="/resources/blog" className="text-black underline">
                    View all articles →
                  </Link>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {pageArticles.map((article) => {
                    const cat = getCategoryById(article.category)
                    const subLabel = cat?.subtopics.find((s) => s.id === article.subtopic)?.label
                    const displayDate = article.publishAt
                      ? new Date(article.publishAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })
                      : article.date ?? ''

                    return (
                      <Link
                        key={article.id}
                        href={`/resources/${article.slug}`}
                        className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
                      >
                        {/* Cover */}
                        <div className="relative h-44 overflow-hidden">
                          <img
                            src={article.image ?? article.coverImage ?? '/resources/article1_image.png'}
                            alt={article.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>

                        {/* Card body */}
                        <div className="p-5 flex-1 flex flex-col">
                          {/* Category + subtopic */}
                          <div className="flex flex-wrap items-center gap-1.5 mb-3">
                            {cat && (
                              <span className={`px-2 py-0.5 text-xs rounded-full font-medium ${cat.color} ${cat.textColor}`}>
                                {cat.label}
                              </span>
                            )}
                            {subLabel && (
                              <span className="px-2 py-0.5 text-xs rounded-full bg-gray-100 text-gray-500">
                                {subLabel}
                              </span>
                            )}
                            <span className="ml-auto text-xs text-gray-400">{displayDate}</span>
                          </div>

                          <h2 className="text-base font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors line-clamp-3 leading-snug">
                            {article.title}
                          </h2>

                          <p className="text-gray-500 text-sm flex-1 line-clamp-2">
                            {article.description ?? article.excerpt ?? ''}
                          </p>

                          {/* Tags */}
                          {article.tags && article.tags.length > 0 && (
                            <div className="mt-3 flex flex-wrap gap-1">
                              {article.tags.slice(0, 2).map((tag) => (
                                <span
                                  key={tag}
                                  className="px-2 py-0.5 text-xs rounded-full bg-gray-50 border border-gray-200 text-gray-400"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}

                          <div className="mt-3 text-sm font-semibold text-black group-hover:underline">
                            Read More →
                          </div>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  category={activeCategory || undefined}
                  subtopic={activeSubtopic || undefined}
                />
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
