import Link from 'next/link'
import Navbar from '@/components/Navbar'
import { getRequestContext } from '@cloudflare/next-on-pages'
import Pagination from './pagination'

type Article = {
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
}

type Post = {
  id: string
  title: string
  slug: string
  publishAt: string
  content: string
  coverImage: string
  excerpt: string
  updatedAt: string
}

export const runtime = 'edge'
export const dynamic = 'force-dynamic'
export const revalidate = 0

const PAGE_SIZE = 9

async function getArticles(): Promise<Article[]> {
  // Static articles
  const staticArticles: Article[] = [
    {
      id: 3,
      title: 'Top 7 Mobile AI Marketing Apps for Instant Insights in 2025',
      date: 'Jan 28, 2025',
      category: 'ARTICLE',
      image: '/resources/article3_image.png',
      description: 'Discover the best mobile AI marketing apps delivering real-time competitive intelligence, brand monitoring, and actionable insights. Learn how these powerful tools help marketers make data-driven decisions on the go in an AI-powered marketing landscape.',
      slug: 'top-7-mobile-ai-marketing-apps-2025',
    },
    {
      id: 2,
      title: 'Top 10 AI Marketing Vendors for Prompt Simulation in 2025',
      date: 'Jan 5, 2025',
      category: 'ARTICLE',
      image: '/resources/article2_image.png',
      description: 'Explore the leading AI marketing vendors specializing in prompt simulation, featuring comprehensive insights into platforms that help brands optimize their AI presence, test messaging strategies, and enhance campaign effectiveness through advanced simulation capabilities.',
      slug: 'top-10-ai-marketing-vendors-prompt-simulation-2025',
    },
    {
      id: 1,
      title: 'The Definitive Comparison of HyperMind vs Top AI Marketing Platforms',
      date: 'Oct 1, 2024',
      category: 'ARTICLE',
      image: '/resources/article1_image.png',
      description: 'Discover how HyperMind stands apart as the only B2B SaaS platform specializing in Generative Engine Optimization (GEO), offering proprietary AI visibility tracking, secure data governance, and actionable intelligence that converts AI-driven brand mentions into measurable traffic and revenue.',
      slug: 'hypermind-vs-top-ai-marketing-platforms',
    },
  ]

  // Get dynamic posts from KV
  let dynamicPosts: Article[] = []
  try {
    const { env } = getRequestContext()
    const POSTS_KV = (env as any).POSTS_KV
    
    if (POSTS_KV) {
      const { keys } = await POSTS_KV.list({ prefix: 'post:' })
      const now = Date.now()
      
      for (const key of keys) {
        const value = await POSTS_KV.get(key.name)
        if (value) {
          try {
            const post: Post = JSON.parse(value)
            if (new Date(post.publishAt).getTime() <= now) {
              dynamicPosts.push({
                id: post.id,
                title: post.title,
                publishAt: post.publishAt,
                category: 'ARTICLE',
                coverImage: post.coverImage,
                excerpt: post.excerpt,
                slug: post.slug,
              })
            }
          } catch (e) {
            console.error('Failed to parse post:', key.name, e)
          }
        }
      }
    } else {
      console.warn('POSTS_KV binding not available')
    }
  } catch (error) {
    console.error('Failed to fetch dynamic posts:', error)
  }

  // Combine and sort by date
  const allArticles = [...dynamicPosts, ...staticArticles].sort((a, b) => {
    const dateA = new Date(a.publishAt || a.date || 0).getTime()
    const dateB = new Date(b.publishAt || b.date || 0).getTime()
    return dateB - dateA
  })

  return allArticles
}

export default async function ResourcesPage({
  searchParams,
}: {
  searchParams?: Promise<{ page?: string }>
}) {
  const articles = await getArticles()

  const totalArticles = articles.length
  const totalPages = Math.max(1, Math.ceil(totalArticles / PAGE_SIZE))

  const resolvedSearchParams = searchParams ? await searchParams : undefined
  const pageParam = resolvedSearchParams?.page
  let currentPage = 1
  if (pageParam) {
    const parsed = parseInt(pageParam, 10)
    if (!Number.isNaN(parsed) && parsed >= 1 && parsed <= totalPages) {
      currentPage = parsed
    }
  }

  const startIndex = (currentPage - 1) * PAGE_SIZE
  const pageArticles = articles.slice(startIndex, startIndex + PAGE_SIZE)

  return (
    <>
      {/* Debug info for crawlers */}
      {/* Total articles: {totalArticles}, Page: {currentPage}/{totalPages} */}
      <Navbar />
      <main className="min-h-screen bg-[#f5f3f0] pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Resources</h1>
            <p className="text-xl text-gray-600">
              Learn how to optimize your content for AI search engines
            </p>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pageArticles.map((article) => (
              <Link
                key={article.id}
                href={`/resources/${article.slug}`}
                className="group bg-white rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={article.image || article.coverImage || '/resources/article1_image.png'}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="text-sm text-gray-500 mb-2">
                    {article.category || 'ARTICLE'} | {article.date || (article.publishAt ? new Date(article.publishAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) : '')}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-gray-600 flex-1">
                    {article.description || article.excerpt || ''}
                  </p>
                  <div className="mt-4 text-black font-semibold group-hover:underline">
                    Read More →
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <Pagination currentPage={currentPage} totalPages={totalPages} />
          )}
        </div>
      </main>
    </>
  )
}
