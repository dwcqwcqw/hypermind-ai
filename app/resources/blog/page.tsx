import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { getRequestContext } from '@cloudflare/next-on-pages'
import Pagination from './pagination'
import { BLOG_CATEGORIES, getCategoryById, getAutoCategory } from '@/lib/blogConfig'
import type { Metadata } from 'next'

// Edge runtime is required for Cloudflare KV access via getRequestContext().
// revalidate=3600 allows Cloudflare CDN to cache this page for 1 hour.
export const runtime = 'edge'
export const revalidate = 3600

export const metadata: Metadata = {
  title: 'GEO Blog — AI Visibility & Generative Engine Optimization',
  description: 'Expert articles on GEO, AI search ranking, LLM content optimization, and AI citation strategies. Learn how to make your brand visible in ChatGPT, Perplexity, and Gemini.',
  alternates: { canonical: '/resources/blog/' },
}

interface Article {
  id: string | number
  title: string
  date?: string
  publishAt?: string
  category?: string
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

// Static articles with proper GEO classification
const STATIC_ARTICLES: Article[] = [
  {
    id: 3,
    title: 'Top 7 Mobile AI Marketing Apps for Instant Insights in 2025',
    date: 'Jan 28, 2025',
    category: 'ai-analytics',
    image: '/resources/article3_image.png',
    description: 'Discover the best mobile AI marketing apps delivering real-time competitive intelligence, brand monitoring, and actionable insights.',
    slug: 'top-7-mobile-ai-marketing-apps-2025',
    tags: ['AI visibility analytics', 'AI search ranking factors', 'ChatGPT', 'Perplexity', 'brand mentions'],
  },
  {
    id: 2,
    title: 'Top 10 AI Marketing Vendors for Prompt Simulation in 2025',
    date: 'Jan 5, 2025',
    category: 'answer-ranking',
    image: '/resources/article2_image.png',
    description: 'Explore the leading AI marketing vendors specializing in prompt simulation and AI answer optimization.',
    slug: 'top-10-ai-marketing-vendors-prompt-simulation-2025',
    tags: ['optimize for AI search', 'ChatGPT', 'Gemini', 'AI ranking signals', 'answer extraction'],
  },
  {
    id: 1,
    title: 'The Definitive Comparison of HyperMind vs Top AI Marketing Platforms',
    date: 'Oct 1, 2024',
    category: 'geo-strategy',
    image: '/resources/article1_image.png',
    description: 'Discover how HyperMind stands apart as the only B2B SaaS platform specializing in Generative Engine Optimization (GEO).',
    slug: 'hypermind-vs-top-ai-marketing-platforms',
    tags: ['AI SEO strategy', 'ChatGPT', 'Perplexity', 'AI citations', 'GEO vs SEO'],
  },
]

async function getArticles(): Promise<Article[]> {
  let dynamicPosts: Article[] = []
  try {
    const { env } = getRequestContext()
    const POSTS_KV = (env as Record<string, unknown>).POSTS_KV as {
      list: (opts: { prefix: string }) => Promise<{ keys: Array<{ name: string }> }>
      get: (key: string) => Promise<string | null>
    } | undefined

    if (POSTS_KV) {
      const { keys } = await POSTS_KV.list({ prefix: 'post:' })
      const now = Date.now()
      const values = await Promise.all(keys.map((key) => POSTS_KV.get(key.name)))

      dynamicPosts = values.flatMap((value, i) => {
        if (!value) return []
        try {
          const post: KVPost = JSON.parse(value)
          if (new Date(post.publishAt).getTime() <= now) {
            return [{
              id: post.id,
              title: post.title,
              publishAt: post.publishAt,
              category: post.category,
              coverImage: post.coverImage,
              excerpt: post.excerpt,
              slug: post.slug,
              tags: post.tags,
            }]
          }
        } catch (e) {
          console.error('Failed to parse post:', keys[i].name, e)
        }
        return []
      })
    } else {
      console.warn('POSTS_KV binding not available')
    }
  } catch (error) {
    console.error('Failed to fetch dynamic posts:', error)
  }

  return [...dynamicPosts, ...STATIC_ARTICLES].sort((a, b) => {
    const dateA = new Date(a.publishAt ?? a.date ?? 0).getTime()
    const dateB = new Date(b.publishAt ?? b.date ?? 0).getTime()
    return dateB - dateA
  })
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams?: Promise<{ page?: string; category?: string }>
}) {
  const rawArticles = await getArticles()

  // Apply auto-classification: every article always gets a category,
  // even if none was explicitly set in KV. getAutoCategory() is deterministic
  // so the same post always resolves to the same category.
  const allArticles = rawArticles.map((a) => ({
    ...a,
    category: a.category ?? getAutoCategory(a.title, a.slug),
  }))

  const resolved = searchParams ? await searchParams : undefined
  const activeCategory = resolved?.category ?? ''

  // Filter by category if one is selected
  const filteredArticles = activeCategory
    ? allArticles.filter((a) => a.category === activeCategory)
    : allArticles

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

  const startIndex = (currentPage - 1) * PAGE_SIZE
  const pageArticles = filteredArticles.slice(startIndex, startIndex + PAGE_SIZE)

  // Build category counts for the filter tabs — all articles are now classified
  const categoryCounts = BLOG_CATEGORIES.map((cat) => ({
    ...cat,
    count: allArticles.filter((a) => a.category === cat.id).length,
  }))

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#f5f3f0] pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

          {/* Header */}
          <div className="mb-10">
            <div className="text-sm text-gray-500 mb-2">
              <Link href="/resources" className="hover:underline">Resources</Link>
              <span className="mx-2">›</span>
              <span>Blog</span>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">GEO Blog</h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              Expert insights on Generative Engine Optimization, AI search visibility, and LLM content strategies.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="mb-10 overflow-x-auto">
            <div className="flex gap-2 min-w-max pb-2">
              {/* All */}
              <Link
                href="/resources/blog"
                className={`px-4 py-2 rounded-full text-sm font-medium transition whitespace-nowrap ${
                  !activeCategory
                    ? 'bg-black text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:border-gray-500'
                }`}
              >
                All ({allArticles.length})
              </Link>

              {categoryCounts.map((cat) => {
                if (cat.count === 0) return null
                return (
                  <Link
                    key={cat.id}
                    href={`/resources/blog?category=${cat.id}`}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition whitespace-nowrap ${
                      activeCategory === cat.id
                        ? 'bg-black text-white'
                        : `${cat.color} ${cat.textColor} hover:opacity-80`
                    }`}
                  >
                    {cat.label} ({cat.count})
                  </Link>
                )
              })}

            </div>
          </div>

          {/* Active category label */}
          {activeCategory && activeCategory !== 'uncategorized' && (
            <div className="mb-6">
              {(() => {
                const cat = getCategoryById(activeCategory)
                return cat ? (
                  <div className="flex items-center gap-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${cat.color} ${cat.textColor}`}>
                      {cat.label}
                    </span>
                    <span className="text-sm text-gray-500">{cat.description}</span>
                    <Link href="/resources/blog" className="text-sm text-gray-400 hover:text-gray-600 ml-auto">
                      Clear filter ✕
                    </Link>
                  </div>
                ) : null
              })()}
            </div>
          )}

          {/* Articles Grid */}
          {pageArticles.length === 0 ? (
            <div className="text-center py-20 text-gray-500">
              <p className="text-xl mb-4">No articles in this category yet.</p>
              <Link href="/resources/blog" className="text-black underline">View all articles →</Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pageArticles.map((article) => {
                const cat = article.category ? getCategoryById(article.category) : undefined
                const displayDate = article.publishAt
                  ? new Date(article.publishAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
                  : article.date ?? ''
                return (
                  <Link
                    key={article.id}
                    href={`/resources/${article.slug}`}
                    className="group bg-white rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col"
                  >
                    {/* Cover image */}
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={article.image ?? article.coverImage ?? '/resources/article1_image.png'}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      {/* Category badge + date */}
                      <div className="flex items-center justify-between mb-3">
                        {cat ? (
                          <span className={`px-2 py-0.5 text-xs rounded-full font-medium ${cat.color} ${cat.textColor}`}>
                            {cat.label}
                          </span>
                        ) : (
                          <span className="px-2 py-0.5 text-xs rounded-full bg-gray-100 text-gray-500">ARTICLE</span>
                        )}
                        <span className="text-xs text-gray-400">{displayDate}</span>
                      </div>

                      <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors line-clamp-3">
                        {article.title}
                      </h2>

                      <p className="text-gray-600 text-sm flex-1 line-clamp-3">
                        {article.description ?? article.excerpt ?? ''}
                      </p>

                      {/* Tags */}
                      {article.tags && article.tags.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-1">
                          {article.tags.slice(0, 3).map((tag) => (
                            <span key={tag} className="px-2 py-0.5 text-xs rounded-full bg-gray-50 border border-gray-200 text-gray-500">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      <div className="mt-4 text-black font-semibold text-sm group-hover:underline">
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
            <Pagination currentPage={currentPage} totalPages={totalPages} category={activeCategory || undefined} />
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
