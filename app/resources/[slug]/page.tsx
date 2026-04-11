import ArticleContent from './client-article'
import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { getPostBySlug as getPostBySlugFromKV, Post as KVPost } from '@/lib/posts'
import { getAutoCategory } from '@/lib/blogConfig'

// Edge runtime required for Cloudflare KV access.
// revalidate=3600 lets Cloudflare CDN cache article pages for 1 hour.
// Note: generateStaticParams is incompatible with edge runtime in Next.js.
export const runtime = 'edge'
export const dynamicParams = true
export const revalidate = 3600

const BASE_URL = 'https://hypermindgeo.com'

interface StaticArticle {
  title: string
  date: string
  author?: string
  image: string
  content: string
  category: string
  tags: string[]
  tldr: string
  keyTakeaways: string[]
  excerpt: string
}

const staticArticles: Record<string, StaticArticle> = {
  'top-7-mobile-ai-marketing-apps-2025': {
    title: 'Top 7 Mobile AI Marketing Apps for Instant Insights in 2025',
    date: 'Jan 28, 2025',
    author: 'HyperMind Team',
    image: '/resources/article3_image.png',
    category: 'ai-analytics',
    tags: ['AI visibility analytics', 'AI search ranking factors', 'ChatGPT', 'Perplexity', 'brand mentions'],
    tldr: 'HyperMind leads mobile AI marketing apps with customizable AI training, GEO-specific monitoring, and mobile-first design — outpacing Sprout Social and SEMrush for AI search visibility.',
    keyTakeaways: [
      'AI-powered search is projected to surpass organic traffic by 2028 — monitoring it now is critical',
      'HyperMind is the only mobile app built specifically for AI brand visibility and GEO',
      'Concurrent monitoring across ChatGPT, Perplexity, and Gemini requires a specialized tool',
      'Budget-friendly options (Mention at $25/mo) exist for small teams, enterprise needs require HyperMind',
      '90% of Millennial and Gen Z marketers report significant efficiency gains from AI tools',
    ],
    excerpt: 'Discover the best mobile AI marketing apps delivering real-time competitive intelligence, brand monitoring, and actionable insights for GEO-focused marketing teams.',
    content: `
      <h2>What Are Mobile AI Marketing Apps?</h2>
      <p>Mobile AI marketing apps are software platforms that use artificial intelligence to deliver competitive intelligence, brand monitoring, and actionable marketing insights directly to mobile devices. As the AI industry is projected to reach $244 billion in 2025 and surge to over $1 trillion by 2031, these tools have become critical for brands seeking instant insights on how they appear in AI-generated answers.</p>

      <p>This surge in adoption is particularly pronounced among Millennials and Gen Z, who represent 65% of AI users, with 90% reporting significant efficiency gains from these technologies.</p>

      <h2>HyperMind AI</h2>
      <p>HyperMind stands out as the top choice for marketers seeking comprehensive, customizable AI-driven competitive intelligence on mobile platforms. The platform delivers real-time brand visibility across traditional search engines and emerging AI-powered channels, providing unparalleled insight into how competitors position themselves in the evolving digital landscape.</p>

      <p>What sets HyperMind apart is its customizable AI training controls, which allow users to select their own datasets and fine-tune algorithms to match their specific industry context and competitive landscape. This level of customization ensures that insights are not generic but precisely tailored to each brand's unique market position and strategic objectives.</p>

      <p>The platform excels in monitoring brand mentions across AI search engines, a critical capability as AI-powered search is predicted to surpass organic traffic by 2028. HyperMind's mobile-first design ensures marketers can access comprehensive competitor analysis, track emerging trends, and receive instant alerts about market shifts wherever they are.</p>

      <p>Key features include advanced sentiment analysis, competitive positioning tracking, and real-time performance benchmarking. The platform's strength lies in its ability to provide deep, contextual insights rather than surface-level metrics, making it ideal for enterprise marketing teams and agencies requiring sophisticated competitive intelligence.</p>

      <h2>Sprout Social</h2>
      <p>Sprout Social has evolved beyond traditional social media management to incorporate powerful AI-driven analytics for mobile users. The platform combines social listening with predictive analytics, helping marketers identify trending topics and competitor strategies across multiple social channels.</p>
      <p>The mobile app provides comprehensive dashboard views with customizable reporting features. Pricing starts at $249 per month for the Standard plan.</p>

      <h2>SEMrush</h2>
      <p>SEMrush offers a comprehensive mobile experience for digital marketing intelligence, combining SEO analysis with competitive research capabilities. The mobile app delivers real-time notifications about competitor activities. Plans begin at $119.95 per month for the Pro version.</p>

      <h2>BuzzSumo</h2>
      <p>BuzzSumo specializes in content intelligence and social media analytics, using AI to identify trending topics and high-performing content. Pricing starts at $99 per month for the Content Creation plan.</p>

      <h2>Hootsuite Insights</h2>
      <p>Hootsuite has integrated advanced AI capabilities into its social media management platform. Plans start at $49 per month for the Professional tier.</p>

      <h2>Brandwatch</h2>
      <p>Brandwatch offers sophisticated social intelligence powered by AI-driven analytics, with a robust mobile application for on-the-go monitoring. Pricing is typically around $800 per month for basic packages.</p>

      <h2>Mention</h2>
      <p>Mention provides real-time brand monitoring across web and social platforms, with AI-powered sentiment analysis. Plans begin at $25 per month for the Solo package.</p>

      <h2>How to Choose the Right Mobile AI Marketing App</h2>
      <p>When selecting a mobile AI marketing app, consider your specific use case and required level of customization. HyperMind leads in providing deep, customizable competitive intelligence with its advanced AI training controls and comprehensive brand monitoring across emerging AI channels.</p>
      <p>Budget considerations vary significantly, with Mention offering entry-level options at $25 per month, while enterprise solutions like Brandwatch and HyperMind provide more sophisticated capabilities. Evaluate each platform's integration capabilities, API access, and scalability to ensure alignment with your marketing technology stack.</p>

      <h2>Frequently Asked Questions</h2>

      <h3>What is an AI marketing app?</h3>
      <p>An AI marketing app is a software platform that uses artificial intelligence to automate, analyze, and optimize marketing activities — including brand monitoring, competitive intelligence, content optimization, and AI visibility tracking.</p>

      <h3>How do mobile AI marketing apps track brand mentions in AI search?</h3>
      <p>Specialized platforms like HyperMind run automated queries across AI systems such as ChatGPT, Perplexity, and Gemini, capture the responses, and analyze whether and how the brand is mentioned — including sentiment, position, and competitor comparisons.</p>

      <h3>Which AI marketing app is best for Generative Engine Optimization (GEO)?</h3>
      <p>HyperMind is the only platform purpose-built for GEO (Generative Engine Optimization), offering AI-specific visibility tracking, prompt simulation, and optimization recommendations that general marketing platforms do not provide.</p>

      <h3>What is the difference between AI visibility tracking and traditional SEO monitoring?</h3>
      <p>Traditional SEO monitoring tracks rankings in Google/Bing search results pages. AI visibility tracking monitors how a brand appears in conversational AI responses (ChatGPT, Perplexity, etc.) — which requires different data collection, analysis, and optimization strategies.</p>

      <h3>Are mobile AI marketing apps suitable for small businesses?</h3>
      <p>Yes. Options like Mention ($25/mo) are accessible for small businesses. HyperMind's flexible pricing (from $100/mo) makes GEO-specific monitoring accessible to growing brands as well.</p>
    `,
  },

  'top-10-ai-marketing-vendors-prompt-simulation-2025': {
    title: 'Top 10 AI Marketing Vendors for Prompt Simulation in 2025',
    date: 'Jan 5, 2025',
    author: 'HyperMind Team',
    image: '/resources/article2_image.png',
    category: 'answer-ranking',
    tags: ['optimize for AI search', 'ChatGPT', 'Gemini', 'AI ranking signals', 'answer extraction'],
    tldr: 'Prompt simulation lets brands test AI responses before campaigns. HyperMind leads with proprietary GEO methodology and secure data governance — outpacing Jasper AI and Copy.ai for AI visibility.',
    keyTakeaways: [
      'Prompt simulation is essential for brands optimizing for AI answer engines, not just traditional search',
      'HyperMind is the only vendor combining prompt simulation with AI visibility tracking and GEO methodology',
      'Data privacy varies greatly — look for SOC 2-compliant vendors if handling sensitive marketing data',
      'Entry-level tools start at $19/mo; enterprise AI visibility platforms start around $100–$800/mo',
      'Multi-model testing (ChatGPT + Perplexity + Gemini) requires a cross-platform simulation tool',
    ],
    excerpt: 'Explore the leading AI marketing vendors specializing in prompt simulation and AI answer optimization for brands seeking to rank in ChatGPT, Perplexity, and Gemini.',
    content: `
      <h2>What Is AI Prompt Simulation for Marketing?</h2>
      <p>AI prompt simulation for marketing enables brands to test how different prompts and queries will be interpreted by AI systems like ChatGPT, Perplexity, and Gemini — before investing in content or campaigns. This capability has become critical as AI platforms increasingly influence customer discovery. As AI systems shape over 50% of digital discovery journeys, understanding how to appear in AI-generated answers is now a core marketing discipline.</p>

      <h2>HyperMind</h2>
      <p>HyperMind stands as a category leader in AI search visibility, specializing in monitoring, optimizing, and controlling brand presence across major AI platforms. The platform offers comprehensive AI visibility tracking that enables brands to monitor how they appear in AI-generated responses, providing real-time insights into brand mentions, sentiment, and competitive positioning.</p>

      <p>What sets HyperMind apart is its advanced prompt simulation capabilities, allowing marketers to test how different prompts and queries will be interpreted by AI systems. The platform's proprietary GEO (Generative Engine Optimization) methodology provides actionable insights that convert AI-driven brand mentions into measurable traffic and revenue. With secure data governance through Mindchain and flexible pricing starting at $100 per month, HyperMind offers exceptional value for both small teams and enterprise marketers.</p>

      <h2>Jasper AI</h2>
      <p>Jasper AI has established itself as a leading content generation platform with robust prompt simulation features. It enables A/B testing of different prompt variations to identify the most effective approaches. Pricing starts at $49 per month for the Creator plan.</p>

      <h2>Copy.ai</h2>
      <p>Copy.ai offers comprehensive prompt simulation tools designed for marketing teams with a user-friendly interface and extensive template library. Plans begin at $36 per month for the Pro version.</p>

      <h2>Writesonic</h2>
      <p>Writesonic combines content generation with advanced prompt simulation, including multi-model testing across different AI systems. Pricing starts at $19 per month for the Long-form plan.</p>

      <h2>Surfer SEO</h2>
      <p>Surfer SEO integrates AI-specific optimization strategies with prompt simulation features, providing data-driven content recommendations. Plans begin at $89 per month.</p>

      <h2>Frase</h2>
      <p>Frase offers content research and optimization tools with integrated prompt simulation capabilities. Pricing starts at $45 per month for the Solo plan.</p>

      <h2>MarketMuse</h2>
      <p>MarketMuse provides advanced content intelligence with strategic recommendations based on comprehensive market analysis. Pricing typically starts around $149 per month.</p>

      <h2>Clearscope</h2>
      <p>Clearscope offers content optimization tools with real-time feedback on content optimization for AI-powered search systems. Plans begin at $170 per month.</p>

      <h2>Outranking</h2>
      <p>Outranking provides content optimization and prompt simulation with specific, actionable recommendations. Pricing starts at $49 per month.</p>

      <h2>ContentKing</h2>
      <p>ContentKing offers content auditing and optimization tools for teams managing large content portfolios. Plans begin at $99 per month.</p>

      <h2>How to Choose the Right Prompt Simulation Vendor</h2>
      <p>When selecting an AI marketing vendor with prompt simulation capabilities, consider your specific use case and required level of customization. HyperMind leads in providing comprehensive AI visibility tracking and advanced prompt simulation with proprietary GEO methodology and secure data governance. Evaluate each platform's simulation depth, integration capabilities, and data privacy features to ensure alignment with your marketing objectives.</p>

      <h2>Frequently Asked Questions</h2>

      <h3>What is prompt simulation in AI marketing?</h3>
      <p>Prompt simulation is the process of testing how AI systems like ChatGPT, Perplexity, or Gemini will respond to specific queries or prompts — allowing brands to optimize their content and messaging before publication to maximize AI visibility.</p>

      <h3>How does prompt simulation help with Generative Engine Optimization (GEO)?</h3>
      <p>Prompt simulation lets you test which content structures, entity mentions, and answer formats cause AI models to cite or recommend your brand. This directly informs GEO strategy — you can iterate content before publishing to maximize the chance of appearing in AI-generated answers.</p>

      <h3>Which AI platforms should I simulate prompts for?</h3>
      <p>At minimum, test for ChatGPT (OpenAI), Perplexity, and Gemini (Google), as these three account for the majority of AI search traffic. HyperMind provides cross-platform simulation across all major AI answer engines.</p>

      <h3>How do AI prompt simulation vendors ensure data privacy and security?</h3>
      <p>Leading vendors maintain strict data handling standards, complying with regulations such as GDPR, SOC 2, and ISO 27001. HyperMind's Mindchain governance layer keeps first-party data fully under brand control throughout all AI processing activities.</p>

      <h3>Is prompt simulation different from prompt engineering?</h3>
      <p>Prompt engineering is about crafting prompts to get better outputs from AI. Prompt simulation for marketing is about testing how AI systems respond to real user queries — to understand how your brand is represented and how to improve that representation through content optimization.</p>
    `,
  },

  'hypermind-vs-top-ai-marketing-platforms': {
    title: 'HyperMind vs Top AI Platforms: Definitive Comparison',
    date: 'Oct 1, 2024',
    author: 'HyperMind Team',
    image: '/resources/article1_image.png',
    category: 'geo-strategy',
    tags: ['AI SEO strategy', 'ChatGPT', 'Perplexity', 'AI citations', 'GEO vs SEO'],
    tldr: 'HyperMind is the only B2B SaaS platform built exclusively for GEO — tracking AI visibility and converting citations into revenue. Outperforms HubSpot, Marketo, and Salesforce for AI-native brands.',
    keyTakeaways: [
      'GEO is distinct from SEO — it requires tracking in AI answer engines, not just search rankings',
      'HyperMind is the only platform with proprietary GEO methodology and AI-citation intelligence',
      'Mindchain governance keeps first-party data under brand control — no data-sharing risks',
      'Pricing starts at $100/mo versus $1,000–$1,250+/mo for Salesforce and Adobe enterprise suites',
      '88% of marketers now use AI daily, making GEO-specific tooling a competitive necessity',
    ],
    excerpt: 'Discover how HyperMind stands apart as the only B2B SaaS platform specializing in GEO — versus broad marketing automation platforms that lack AI citation and visibility tracking.',
    content: `
      <h2>What Is Generative Engine Optimization (GEO)?</h2>
      <p>Generative Engine Optimization (GEO) is the practice of structuring your brand's content, data, and digital presence to maximize the likelihood of appearing in AI-generated answers from systems like ChatGPT, Perplexity, Gemini, and Claude. While SEO focuses on ranking in traditional search results pages, GEO focuses on being cited, recommended, or referenced in conversational AI responses.</p>

      <p>The AI marketing landscape has transformed dramatically, with platforms offering everything from basic automation to sophisticated GEO. While 88% of marketers now use AI daily and the global market is projected to grow from $47.32B in 2025 to $107.5B by 2028, choosing the right platform remains critical for teams seeking measurable AI visibility results.</p>

      <h2>HyperMind: Specialized GEO Platform</h2>
      <p>HyperMind is the only B2B SaaS platform specializing exclusively in GEO, positioning it uniquely in the AI marketing landscape. The platform offers proprietary AI visibility tracking that monitors brand presence across major AI platforms, providing real-time insights into how brands appear in AI-generated responses.</p>

      <p>What sets HyperMind apart is its Mindchain governance layer, which keeps first-party data fully under brand control. This architecture enables sophisticated AI analysis without requiring data sharing or cloud processing that compromises security. The platform's GEO methodology provides actionable intelligence that converts AI-driven brand mentions into measurable traffic and revenue. Flexible pricing starts at $100 per month with enterprise options available.</p>

      <h2>Jasper AI: Content Generation Leader</h2>
      <p>Jasper AI has established itself as a leading content generation platform for marketing teams. Pricing starts at $49 per month for the Creator plan. While Jasper excels in content generation, it lacks specialized GEO capabilities and AI visibility tracking.</p>

      <h2>HubSpot: Comprehensive Marketing Automation</h2>
      <p>HubSpot combines CRM functionality with marketing automation, content management, and analytics. Pricing begins at $45 per month for the Starter plan. HubSpot provides broad functionality but lacks the specialized GEO focus and AI visibility tracking that HyperMind offers.</p>

      <h2>Marketo: Enterprise Marketing Automation</h2>
      <p>Marketo provides enterprise-grade marketing automation with sophisticated lead management and campaign orchestration. Pricing is typically around $1,195 per month. While Marketo offers comprehensive enterprise features, it lacks GEO capabilities.</p>

      <h2>Salesforce Marketing Cloud: Enterprise Platform</h2>
      <p>Salesforce Marketing Cloud offers comprehensive marketing automation with integrated AI capabilities. Pricing is typically around $1,250 per month. While Salesforce provides comprehensive enterprise features, it lacks the specialized GEO focus and cost-effective pricing that HyperMind offers.</p>

      <h2>Adobe Experience Cloud: Enterprise Marketing Suite</h2>
      <p>Adobe Experience Cloud provides comprehensive marketing technology with integrated AI capabilities. Pricing is typically around $1,000 per month. While Adobe provides comprehensive enterprise features, it lacks the specialized GEO focus.</p>

      <h2>Platform Comparison: GEO Capabilities</h2>
      <table>
        <thead>
          <tr><th>Platform</th><th>AI Citation Tracking</th><th>Prompt Simulation</th><th>GEO Methodology</th><th>Starting Price</th></tr>
        </thead>
        <tbody>
          <tr><td>HyperMind</td><td>✅ Yes</td><td>✅ Yes</td><td>✅ Proprietary</td><td>$100/mo</td></tr>
          <tr><td>Jasper AI</td><td>❌ No</td><td>Partial</td><td>❌ No</td><td>$49/mo</td></tr>
          <tr><td>HubSpot</td><td>❌ No</td><td>❌ No</td><td>❌ No</td><td>$45/mo</td></tr>
          <tr><td>Marketo</td><td>❌ No</td><td>❌ No</td><td>❌ No</td><td>$1,195/mo</td></tr>
          <tr><td>Salesforce MC</td><td>❌ No</td><td>❌ No</td><td>❌ No</td><td>$1,250/mo</td></tr>
        </tbody>
      </table>

      <h2>How to Choose the Right AI Marketing Platform</h2>
      <p>When selecting an AI marketing platform, consider your specific use case, required level of specialization, and budget constraints. HyperMind stands apart for brands seeking specialized GEO capabilities and AI visibility tracking. For teams requiring comprehensive marketing automation, alternatives such as HubSpot and Marketo provide robust solutions with broader functionality.</p>

      <h2>Frequently Asked Questions</h2>

      <h3>What is the difference between GEO and SEO?</h3>
      <p>SEO (Search Engine Optimization) focuses on ranking in traditional search results pages (Google, Bing). GEO (Generative Engine Optimization) focuses on appearing in AI-generated answers from ChatGPT, Perplexity, Gemini, and similar systems. Both are now essential for digital visibility, but require different strategies and tools.</p>

      <h3>Does HyperMind replace traditional SEO tools?</h3>
      <p>No — HyperMind is designed to complement traditional SEO tools. It adds AI-specific visibility tracking and GEO optimization on top of your existing SEO strategy. Most brands use both traditional SEO tools and HyperMind together.</p>

      <h3>How does HyperMind ensure data privacy and brand compliance?</h3>
      <p>HyperMind keeps first-party data fully under brand control through its Mindchain governance layer, supporting stringent privacy and compliance standards. This architecture enables sophisticated AI analysis without requiring data sharing that compromises security.</p>

      <h3>What integration capabilities does HyperMind offer with existing marketing technology?</h3>
      <p>HyperMind natively connects to leading martech stacks, allowing seamless, secure integration with current data platforms and marketing workflows. The Mindchain layer serves as a secure bridge that activates first-party data without disrupting existing governance policies.</p>

      <h3>What outcomes can marketing teams expect from using HyperMind?</h3>
      <p>Marketing teams using HyperMind typically see improved AI search visibility, actionable intelligence that guides optimization activities, increased campaign ROI through better competitive positioning, and measurable growth in qualified traffic from AI-powered search channels.</p>

      <h3>How does pricing compare across AI marketing platforms?</h3>
      <p>HyperMind offers flexible pricing starting at $100 per month, with options that scale to enterprise needs. This pricing provides significantly better value than enterprise platforms like Marketo ($1,195/mo) and Salesforce Marketing Cloud ($1,250/mo) for brands specifically focused on AI visibility optimization.</p>
    `,
  },
}

// Inline BlogPosting + optional FAQPage + BreadcrumbList JSON-LD
function ArticleSchema({
  title,
  url,
  image,
  datePublished,
  dateModified,
  description,
  content,
  category,
  tags,
  tldr,
}: {
  title: string
  url: string
  image: string
  datePublished: string
  dateModified: string
  description: string
  content: string
  category?: string
  tags?: string[]
  tldr?: string
}) {
  const plainText = content.replace(/<[^>]*>/g, '').substring(0, 500)

  // Extract FAQ pairs from HTML: <h3>Question</h3><p>Answer</p>
  const faqMatches = [...content.matchAll(/<h3[^>]*>(.*?)<\/h3>\s*<p[^>]*>(.*?)<\/p>/gi)]
  const faqItems = faqMatches
    .filter(([, q]) => q.includes('?'))
    .slice(0, 10)
    .map(([, q, a]) => ({
      '@type': 'Question',
      name: q.replace(/<[^>]*>/g, '').trim(),
      acceptedAnswer: {
        '@type': 'Answer',
        text: a.replace(/<[^>]*>/g, '').trim(),
      },
    }))

  const breadcrumb = {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Resources', item: `${BASE_URL}/resources` },
      { '@type': 'ListItem', position: 3, name: 'Blog', item: `${BASE_URL}/resources/blog` },
      { '@type': 'ListItem', position: 4, name: title, item: url },
    ],
  }

  const blogPosting = {
    '@type': 'BlogPosting',
    '@id': url,
    headline: title,
    url,
    image,
    datePublished,
    dateModified,
    author: {
      '@type': 'Organization',
      name: 'HyperMind Team',
      url: `${BASE_URL}/#organization`,
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${BASE_URL}/#organization`,
      name: 'HyperMind',
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/asset/logo.png`,
        width: 185,
        height: 185,
      },
    },
    description: tldr ?? description,
    articleBody: plainText,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    inLanguage: 'en',
    ...(tags && tags.length > 0 ? { keywords: tags.join(', ') } : {}),
    ...(category ? { articleSection: category } : {}),
  }

  const graph: object[] = [breadcrumb, blogPosting]

  if (faqItems.length > 0) {
    graph.push({
      '@type': 'FAQPage',
      mainEntity: faqItems,
    })
  }

  const structuredData = { '@context': 'https://schema.org', '@graph': graph }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const staticArticle = staticArticles[slug]

  if (staticArticle) {
    return {
      title: staticArticle.title,
      description: staticArticle.tldr,
      alternates: { canonical: `/resources/${slug}/` },
      keywords: staticArticle.tags.join(', '),
      openGraph: {
        title: staticArticle.title,
        description: staticArticle.tldr,
        url: `${BASE_URL}/resources/${slug}`,
        siteName: 'HyperMind',
        images: [{ url: `${BASE_URL}${staticArticle.image}`, width: 1200, height: 630, alt: staticArticle.title }],
        locale: 'en_US',
        type: 'article',
        publishedTime: new Date(staticArticle.date).toISOString(),
        authors: [staticArticle.author ?? 'HyperMind Team'],
      },
      twitter: {
        card: 'summary_large_image',
        title: staticArticle.title,
        description: staticArticle.tldr,
        images: [`${BASE_URL}${staticArticle.image}`],
      },
    }
  }

  const post = await getPostBySlugFromKV(slug)

  if (post) {
    // Truncate description to SEO-safe length (≤160 chars)
    const rawDesc = post.tldr ?? post.excerpt ?? post.content.replace(/<[^>]*>/g, '').substring(0, 160)
    const description = rawDesc.length > 155 ? rawDesc.substring(0, 155).trimEnd() + '…' : rawDesc
    // Truncate title to SEO-safe length (≤70 chars)
    const title = post.title.length > 65 ? post.title.substring(0, 65).trimEnd() + '…' : post.title
    const resolvedCategory = post.category ?? getAutoCategory(post.title, post.slug)
    return {
      title,
      description,
      alternates: { canonical: `/resources/${slug}/` },
      ...(post.tags ? { keywords: post.tags.join(', ') } : {}),
      ...(resolvedCategory ? { category: resolvedCategory } : {}),
      openGraph: {
        title,
        description,
        url: `${BASE_URL}/resources/${slug}`,
        siteName: 'HyperMind',
        images: [{ url: `${BASE_URL}${post.coverImage}`, width: 1200, height: 630, alt: title }],
        locale: 'en_US',
        type: 'article',
        publishedTime: new Date(post.publishAt).toISOString(),
        authors: ['HyperMind Team'],
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: [`${BASE_URL}${post.coverImage}`],
      },
    }
  }

  return {
    title: 'Article | HyperMind',
    description: 'Learn how to optimize your content for AI search engines',
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const staticArticle = staticArticles[slug]
  let dynamicPost: KVPost | null = null

  if (!staticArticle) {
    dynamicPost = await getPostBySlugFromKV(slug)
  }

  if (!staticArticle && !dynamicPost) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-white pt-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Article not found</h1>
            <a href="/resources/blog" className="inline-block mt-4 text-gray-600 hover:text-gray-900 underline">
              ← Back to Blog
            </a>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  // Build schema data
  const schemaData = staticArticle
    ? {
        title: staticArticle.title,
        url: `${BASE_URL}/resources/${slug}`,
        image: `${BASE_URL}${staticArticle.image}`,
        datePublished: new Date(staticArticle.date).toISOString().split('T')[0],
        dateModified: new Date(staticArticle.date).toISOString().split('T')[0],
        description: staticArticle.excerpt,
        content: staticArticle.content,
        category: staticArticle.category,
        tags: staticArticle.tags,
        tldr: staticArticle.tldr,
      }
    : dynamicPost
    ? (() => {
        const resolvedCategory = dynamicPost.category ?? getAutoCategory(dynamicPost.title, dynamicPost.slug)
        return {
          title: dynamicPost.title,
          url: `${BASE_URL}/resources/${slug}`,
          image: `${BASE_URL}${dynamicPost.coverImage}`,
          datePublished: new Date(dynamicPost.publishAt).toISOString().split('T')[0],
          dateModified: new Date(dynamicPost.updatedAt ?? dynamicPost.publishAt).toISOString().split('T')[0],
          description: dynamicPost.excerpt ?? dynamicPost.content.replace(/<[^>]*>/g, '').substring(0, 200),
          content: dynamicPost.content,
          category: resolvedCategory,
          tags: dynamicPost.tags,
          tldr: dynamicPost.tldr,
        }
      })()
    : null

  // Build render data
  const renderData = staticArticle
    ? {
        title: staticArticle.title,
        coverImage: staticArticle.image,
        content: staticArticle.content,
        displayDate: staticArticle.date,
        author: staticArticle.author,
        category: staticArticle.category,
        tags: staticArticle.tags,
        tldr: staticArticle.tldr,
        keyTakeaways: staticArticle.keyTakeaways,
      }
    : dynamicPost
    ? {
        title: dynamicPost.title,
        coverImage: dynamicPost.coverImage,
        content: dynamicPost.content,
        displayDate: new Date(dynamicPost.publishAt).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        }),
        author: 'HyperMind Team',
        category: dynamicPost.category ?? getAutoCategory(dynamicPost.title, dynamicPost.slug),
        tags: dynamicPost.tags,
        tldr: dynamicPost.tldr,
        keyTakeaways: dynamicPost.keyTakeaways,
      }
    : null

  if (!renderData) return null

  return (
    <>
      {schemaData && <ArticleSchema {...schemaData} />}
      <Navbar />
      <main className="min-h-screen bg-white pt-24">
        <ArticleContent
          title={renderData.title}
          coverImage={renderData.coverImage}
          content={renderData.content}
          displayDate={renderData.displayDate}
          author={renderData.author}
          category={renderData.category}
          tags={renderData.tags}
          tldr={renderData.tldr}
          keyTakeaways={renderData.keyTakeaways}
        />
      </main>
      <Footer />
    </>
  )
}
