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
    id: 42,
    title: 'AI Competitor Citation Audit: Find the Sources That Make Rivals Recommended',
    date: '2026-06-17',
    category: 'geo-strategy',
    image: '/generated/blog/2026-06-17-ai-competitor-citation-audit-cover.png',
    description:
      'A practical competitor citation audit for finding the sources, pages, public proof, and buyer routes that make rivals appear in AI answers before your brand.',
    slug: 'ai-competitor-citation-audit',
    tags: ['AI competitor citation audit', 'AI visibility competitors', 'citation-source analysis', 'AI source URLs', 'GEO workflow'],
  },
  {
    id: 41,
    title: 'AI Source Repair Brief: Turn Prompt Gaps Into Pages, Proof, and Retests',
    date: '2026-06-16',
    category: 'geo-strategy',
    image: '/generated/blog/2026-06-16-ai-source-repair-brief-cover.png',
    description:
      'A practical source repair brief for turning AI visibility prompt gaps into owned page updates, source-quality work, off-page evidence, buyer routes, and retests.',
    slug: 'ai-source-repair-brief',
    tags: ['AI source repair', 'prompt gaps', 'citation-source analysis', 'owned content repair', 'AI visibility workflow'],
  },
  {
    id: 40,
    title: 'AI Visibility Metrics Brief: Measure Mentions, Sources, and Retests That Matter',
    date: '2026-06-15',
    category: 'geo-strategy',
    image: '/generated/blog/2026-06-15-ai-visibility-metrics-brief-cover.png',
    description:
      'A practical metrics brief for measuring AI visibility through prompt coverage, brand mentions, share of voice, cited sources, citation quality, buyer-route fit, and retesting.',
    slug: 'ai-visibility-metrics-brief',
    tags: ['AI visibility metrics', 'AI share of voice', 'citation-source quality', 'brand mention tracking', 'GEO measurement'],
  },
  {
    id: 39,
    title: 'AI Visibility Tool Selection Scorecard: Choose Software That Can Become Source Repair',
    date: '2026-06-14',
    category: 'geo-strategy',
    image: '/generated/blog/2026-06-14-ai-visibility-tool-selection-scorecard-cover.png',
    description:
      'A practical how-to and listicle guide for choosing AI visibility tools by scoring prompt coverage, competitor visibility, source gaps, citation quality, execution ownership, and retesting.',
    slug: 'ai-visibility-tool-selection-scorecard',
    tags: ['AI visibility tools', 'AI search software', 'GEO platform evaluation', 'citation-source analysis', 'AI visibility scorecard'],
  },
  {
    id: 38,
    title: 'AI Visibility Ownership Map: Who Fixes Brand Mentions in ChatGPT, Google AI Overview, and Gemini?',
    date: '2026-06-13',
    category: 'geo-strategy',
    image: '/generated/blog/2026-06-13-ai-visibility-ownership-map-cover.png',
    description:
      'A practical owned how-to guide for assigning PR, SEO, content, RevOps, and product marketing ownership when AI answers mention competitors but skip your brand.',
    slug: 'ai-visibility-ownership-map',
    tags: ['AI visibility ownership', 'ChatGPT brand mentions', 'AI search audit', 'GEO workflow', 'citation-source analysis'],
  },
  {
    id: 37,
    title: 'AI Shortlist Evidence Brief: How to Earn Inclusion in AI-Cited Buyer Lists',
    date: '2026-06-11',
    category: 'geo-strategy',
    image: '/generated/blog/2026-06-11-ai-shortlist-evidence-brief-cover.png',
    description:
      'An editorial and reference-source playbook for turning missing AI buyer-shortlist evidence into owned pages, comparison routes, third-party proof, and retesting.',
    slug: 'ai-shortlist-evidence-brief',
    tags: ['AI shortlist evidence', 'AI-cited listicles', 'editorial GEO', 'AI visibility PR', 'citation-source quality'],
  },
  {
    id: 36,
    title: 'AI Source Coverage Matrix: Build the Evidence Stack Answer Engines Can Use',
    date: '2026-06-11',
    category: 'geo-strategy',
    image: '/generated/blog/2026-06-11-ai-source-coverage-matrix-cover.png',
    description:
      'A source coverage playbook for turning missing UGC, video, editorial, review, directory, partner, and owned evidence into a practical GEO action matrix.',
    slug: 'ai-source-coverage-matrix',
    tags: ['AI source coverage', 'citation-source analysis', 'UGC GEO', 'YouTube GEO', 'AI visibility workflow'],
  },
  {
    id: 35,
    title: 'AI Visibility Platform Evaluation Playbook: Monitoring vs Execution',
    date: '2026-06-11',
    category: 'geo-strategy',
    image: '/generated/blog/2026-06-11-ai-visibility-platform-evaluation-playbook-cover.png',
    description:
      'A buyer playbook for evaluating AI visibility platforms by separating dashboards, source diagnostics, off-page evidence, owned content repair, and retesting workflows.',
    slug: 'ai-visibility-platform-evaluation-playbook',
    tags: ['AI visibility platforms', 'GEO execution', 'AI visibility alternatives', 'AI search monitoring', 'answer engine optimization'],
  },
  {
    id: 34,
    title: "Why ChatGPT Doesn't Mention Your Brand: The AI Entity Gap Audit",
    date: '2026-06-09',
    category: 'geo-strategy',
    image: '/generated/blog/2026-06-09-chatgpt-brand-mention-gap-audit-cover.png',
    description:
      'An owned how-to guide for diagnosing why ChatGPT, Google AI Overviews, and Gemini do not mention a brand, with a practical AI entity gap audit and retest checklist.',
    slug: 'chatgpt-brand-mention-gap-audit',
    tags: ['ChatGPT brand mentions', 'AI entity audit', 'AI visibility audit', 'GEO how-to guide', 'answer engine optimization'],
  },
  {
    id: 33,
    title: 'AI Citation Source Graph: LinkedIn, Reddit, and Medium GEO Playbook',
    date: '2026-06-09',
    category: 'geo-strategy',
    image: '/generated/blog/2026-06-09-ai-citation-source-graph-cover.png',
    description:
      'A Tuesday GEO playbook for turning AI visibility tool signals into crawlable off-page source work across LinkedIn, Reddit, Medium, YouTube, review sites, listicles, and partner pages.',
    slug: 'ai-citation-source-graph',
    tags: ['AI citation sources', 'LinkedIn GEO', 'Reddit GEO', 'Medium articles', 'AI visibility tools'],
  },
  {
    id: 32,
    title: "AI Mode Impression Map: Turn Google's New AI Report Into Prompt-Level GEO Actions",
    date: '2026-06-08',
    category: 'geo-strategy',
    image: '/generated/blog/2026-06-08-ai-mode-impression-map-cover.png',
    description:
      'A Monday GEO playbook for turning Google Search Console generative AI impressions into prompt clusters, citation-source audits, answer-influence checks, and qualified AI search traffic routes.',
    slug: 'ai-mode-impression-map',
    tags: ['Google AI Mode', 'AI impressions', 'GEO workflow', 'Search Console AI reports', 'prompt intelligence'],
  },
  {
    id: 31,
    title: 'AI Search Traffic Signal Board: The Sunday GEO Playbook After Google AI Reports',
    date: '2026-06-07',
    category: 'geo-strategy',
    image: '/generated/blog/2026-06-07-ai-search-traffic-signal-board-cover.png',
    description:
      'A Sunday GEO traffic playbook for using Google Search Generative AI reports alongside ChatGPT Search, Perplexity, Gemini, Claude, Copilot, crawler access, citation-source audits, and qualified route checks.',
    slug: 'ai-search-traffic-signal-board',
    tags: ['AI search traffic', 'Google AI reports', 'GEO playbook', 'AI citations', 'source signal audit'],
  },
  {
    id: 30,
    title: 'AI Visibility Pricing Control Room: Budget GEO Spend After Google AI Reports',
    date: '2026-06-06',
    category: 'geo-strategy',
    image: '/generated/blog/2026-06-06-ai-visibility-pricing-control-room-cover.png',
    description:
      'A Saturday buyer-decision playbook for scoping AI visibility and GEO pricing after Google Search Console generative AI reports, AI Mode, ChatGPT Search, and cross-engine citation audits.',
    slug: 'ai-visibility-pricing-control-room',
    tags: ['AI visibility pricing', 'GEO budget', 'Google AI reports', 'buyer-decision prompts', 'citation source analysis'],
  },
  {
    id: 29,
    title: 'B2B SaaS AI Search Pipeline Board: Turn GEO Reports Into Qualified Demand',
    date: '2026-06-04',
    category: 'geo-strategy',
    image: '/generated/blog/2026-06-04-b2b-saas-ai-search-pipeline-board-cover.png',
    description:
      'A Thursday B2B SaaS GEO playbook for connecting Google AI Search Console reports, cross-engine citation evidence, product-route repair, and qualified pipeline attribution.',
    slug: 'b2b-saas-ai-search-pipeline-board',
    tags: ['B2B SaaS GEO', 'AI search pipeline', 'Search Console AI reports', 'AI visibility reporting', 'qualified AI traffic'],
  },
  {
    id: 28,
    title: 'Citation Absorption GEO: Measure Answer Influence, Not Just AI Citations',
    date: '2026-06-03',
    category: 'geo-strategy',
    image: '/generated/blog/2026-06-03-citation-absorption-geo-cover.png',
    description:
      'A Wednesday GEO methodology guide for measuring whether cited pages actually influence AI answers across ChatGPT, Google AI Overviews, AI Mode, Gemini, Perplexity, and Claude.',
    slug: 'citation-absorption-geo',
    tags: ['citation absorption', 'GEO methodology', 'AI citations', 'AI answer influence', 'citation source analysis'],
  },
  {
    id: 27,
    title: 'AI Mode Intent Packets: How to Win Longer Google AI Search Prompts',
    date: '2026-06-01',
    category: 'geo-strategy',
    image: '/generated/blog/2026-06-01-ai-mode-intent-packets-cover.png',
    description:
      'A Monday GEO playbook for building answer-ready intent packets that match longer, multimodal, planning-heavy Google AI Mode prompts and query fan-out behavior.',
    slug: 'ai-mode-intent-packets',
    tags: ['Google AI Mode', 'query fan-out', 'AI search prompts', 'GEO strategy', 'AI answer optimization'],
  },
  {
    id: 26,
    title: 'AI Search Traffic Firewall Check: The Sunday GEO Playbook for Crawlable Answers',
    date: '2026-05-31',
    category: 'geo-strategy',
    image: '/generated/blog/2026-05-31-ai-search-traffic-firewall-check-cover.png',
    description:
      'A Sunday AI search traffic playbook for checking crawler access, source fidelity, answer routes, and retesting before teams rewrite content for Google AI Mode, ChatGPT Search, Perplexity, Gemini, and Claude.',
    slug: 'ai-search-traffic-firewall-check',
    tags: ['AI search traffic', 'crawler access', 'AI Mode', 'ChatGPT Search', 'Perplexity citations'],
  },
  {
    id: 25,
    title: 'AI Visibility Source-Trust Budget: Which Preferred-Source Prompts Deserve Spend?',
    date: '2026-05-30',
    category: 'geo-strategy',
    image: '/generated/blog/2026-05-30-ai-visibility-source-trust-budget-cover.png',
    description:
      'A Saturday buyer-decision guide for funding AI visibility work around Preferred Sources, Highly Cited labels, source trust, citation fidelity, and qualified AI-search traffic paths.',
    slug: 'ai-visibility-source-trust-budget',
    tags: ['AI visibility budget', 'Preferred Sources', 'AI Mode', 'source trust', 'buyer-decision prompts'],
  },
  {
    id: 24,
    title: 'Personalized AI Mode Prompt Intelligence: Test Context Variants, Not Average Rankings',
    date: '2026-05-29',
    category: 'geo-strategy',
    image: '/generated/blog/2026-05-29-personalized-ai-mode-prompt-intelligence-cover.png',
    description:
      'A Friday prompt-intelligence playbook for testing AI Mode personalization, ChatGPT shopping research, Perplexity crawler access, citation fidelity, and context-variant traffic paths.',
    slug: 'personalized-ai-mode-prompt-intelligence',
    tags: ['personalized AI search', 'AI Mode', 'prompt intelligence', 'citation source analysis', 'AI search testing'],
  },
  {
    id: 23,
    title: 'Enterprise GEO After AI Mode: Build a Source-Fidelity Operating System, Not Another Content Queue',
    date: '2026-05-28',
    category: 'geo-strategy',
    image: '/generated/blog/2026-05-28-reusable-geo-strategy-learning-cover.png',
    description:
      'A Thursday enterprise GEO playbook for turning AI Mode volatility, source fidelity, and citation governance into reusable operating workflows.',
    slug: 'enterprise-geo-source-fidelity-operating-system',
    tags: ['enterprise GEO', 'source fidelity', 'AI Mode', 'AI citation governance', 'reusable GEO strategy'],
  },
  {
    id: 22,
    title: 'Profound vs Peec vs Writesonic GEO: Which AI Visibility Platform Needs an Execution Layer?',
    date: '2026-05-26',
    category: 'geo-strategy',
    image: '/generated/blog/2026-05-26-profound-peec-writesonic-geo-platforms-cover.png',
    description:
      'A Tuesday competitor-comparison guide for choosing between Profound, Peec AI, Writesonic GEO, and an execution-led HyperMind workflow after Google AI Mode.',
    slug: 'profound-peec-writesonic-geo-platforms',
    tags: ['Profound', 'Peec AI', 'Writesonic GEO', 'AI visibility platforms', 'GEO software comparison'],
  },
  {
    id: 21,
    title: 'Google AI Mode Follow-Up Loops: Optimize Prompt Branches, Not AI Search Hacks',
    date: '2026-05-25',
    category: 'geo-strategy',
    image: '/generated/blog/2026-05-25-google-ai-mode-follow-up-loops-cover.png',
    description:
      'A Monday Google AI Mode playbook for turning follow-up questions and query fan-out into prompt branch maps, source eligibility checks, claim-fidelity repairs, and qualified AI search traffic paths.',
    slug: 'google-ai-mode-follow-up-loops',
    tags: ['Google AI Mode', 'query fan-out', 'follow-up prompts', 'AI search SEO', 'GEO prompt branches'],
  },
  {
    id: 20,
    title: 'Agentic AI Search Budget: Which Buyer Prompts Deserve Spend After Google AI Mode?',
    date: '2026-05-23',
    category: 'geo-strategy',
    image: '/generated/blog/2026-05-23-agentic-ai-search-budget-buyer-prompts-cover.png',
    description:
      'A Saturday buyer-decision guide for allocating AI visibility budget after Google AI Mode, agentic search, ChatGPT Search, Perplexity citations, and GEO prompt volatility.',
    slug: 'agentic-ai-search-budget-buyer-prompts',
    tags: ['agentic AI search budget', 'buyer prompts', 'Google AI Mode', 'GEO budget', 'AI visibility ROI'],
  },
  {
    id: 19,
    title: 'AI Visibility Pricing: Pay for Citation Source Analysis, Not Prompt Volume',
    date: '2026-05-23',
    category: 'geo-strategy',
    image: '/generated/blog/2026-05-23-ai-visibility-pricing-citation-source-analysis-cover.png',
    description:
      'A Saturday buyer-decision guide for AI visibility pricing, prompt intelligence budgets, citation-source analysis, and GEO spend decisions in 2026.',
    slug: 'ai-visibility-pricing-citation-source-analysis',
    tags: ['AI visibility pricing', 'citation source analysis', 'prompt intelligence', 'GEO budget', 'AI search ROI'],
  },
  {
    id: 18,
    title: 'Ecommerce GEO for Agentic Shopping: How Retailers Should Prepare for AI Mode Buyers',
    date: '2026-05-21',
    category: 'geo-strategy',
    image: '/generated/blog/2026-05-21-ecommerce-geo-agentic-shopping-cover.png',
    description:
      'A Thursday ecommerce GEO playbook for agentic shopping, Google Universal Cart, UCP, product data readiness, AI answer citations, and checkout-oriented traffic paths.',
    slug: 'ecommerce-geo-agentic-shopping',
    tags: ['ecommerce GEO', 'agentic shopping', 'Google Universal Cart', 'AI Mode shopping', 'product data'],
  },
  {
    id: 17,
    title: 'Google AI Mode Information Agents: The GEO Playbook for Always-On Search',
    date: '2026-05-20',
    category: 'geo-strategy',
    image: '/generated/blog/2026-05-20-ai-mode-information-agents-geo-cover.png',
    description:
      'A Wednesday GEO methodology playbook for Google AI Mode information agents, always-on AI search monitoring, citation freshness, source eligibility, and prompt retesting.',
    slug: 'ai-mode-information-agents-geo',
    tags: ['Google AI Mode', 'information agents', 'agentic search', 'GEO methodology', 'AI search freshness'],
  },
  {
    id: 16,
    title: 'Semrush AI Toolkit vs Ahrefs Brand Radar: Which AI Visibility Data Model Fits GEO Teams?',
    date: '2026-05-19',
    category: 'geo-strategy',
    image: '/generated/blog/2026-05-19-semrush-ai-toolkit-vs-ahrefs-brand-radar-cover.png',
    description:
      'A Tuesday competitor-comparison guide for choosing between Semrush AI Visibility Toolkit, Ahrefs Brand Radar, and execution-led GEO workflows based on data model fit.',
    slug: 'semrush-ai-toolkit-vs-ahrefs-brand-radar',
    tags: ['Semrush AI Visibility Toolkit', 'Ahrefs Brand Radar', 'AI visibility tools', 'GEO platforms', 'prompt tracking'],
  },
  {
    id: 15,
    title: 'Google AI Mode SEO: What Still Works After Google\'s AI Search Guidance',
    date: '2026-05-18',
    category: 'geo-strategy',
    image: '/generated/blog/2026-05-18-google-ai-mode-seo-still-works-cover.png',
    description:
      'A Monday GEO playbook for turning Google AI Mode and AI Overviews guidance into prompt clusters, source eligibility checks, evidence repairs, and qualified AI search traffic paths.',
    slug: 'google-ai-mode-seo-still-works',
    tags: ['Google AI Mode SEO', 'AI Overviews', 'query fan-out', 'AI search guidance', 'GEO playbook'],
  },
  {
    id: 14,
    title: 'AI Search Traffic Recovery Playbook: What to Fix This Week',
    date: '2026-05-17',
    category: 'geo-strategy',
    image: '/generated/blog/2026-05-17-ai-search-traffic-recovery-playbook-cover.png',
    description:
      'A Sunday AI search traffic recovery playbook for teams reacting to Google AI Mode link updates, FAQ rich result deprecation, AI Overview source-quality research, and crawler access requirements.',
    slug: 'ai-search-traffic-recovery-playbook',
    tags: ['AI search traffic', 'Google AI Mode', 'AI Overview links', 'FAQ rich results', 'GEO playbook'],
  },
  {
    id: 13,
    title: 'AI Visibility Budget: Which Buyer-Decision Prompts Deserve Spend Now?',
    date: '2026-05-16',
    category: 'geo-strategy',
    image: '/generated/blog/2026-05-16-ai-visibility-budget-buyer-decision-prompts-cover.png',
    description:
      'A practical budget framework for deciding which AI visibility, GEO, and AI-search buyer prompts deserve tracking, source repair, content work, and conversion-path investment.',
    slug: 'ai-visibility-budget-buyer-decision-prompts',
    tags: ['AI visibility budget', 'buyer decision prompts', 'AI search pricing', 'Google AI Mode', 'GEO prioritization'],
  },
  {
    id: 12,
    title: 'AI Overview Source Triage: Which Citations Should Prompt Teams Fix First?',
    date: '2026-05-15',
    category: 'geo-strategy',
    image: '/generated/blog/2026-05-15-ai-overview-source-triage-prompt-intelligence-cover.png',
    description:
      'A practical prompt-intelligence framework for deciding which AI Overview and AI Mode citation sources to monitor, repair, strengthen, or connect to traffic paths.',
    slug: 'ai-overview-source-triage-prompt-intelligence',
    tags: ['AI Overview source triage', 'prompt intelligence', 'AI citations', 'Google AI Mode', 'citation source analysis'],
  },
  {
    id: 11,
    title: 'B2B SaaS AI Search Traffic: Turning Buyer Prompts into Qualified Pipeline',
    date: '2026-05-14',
    category: 'geo-strategy',
    image: '/generated/blog/2026-05-14-b2b-saas-ai-search-traffic-buyer-prompts-cover.png',
    description:
      'A B2B SaaS GEO playbook for turning AI buyer prompts into qualified pipeline by mapping prompts, citations, answer absorption, source repair, and conversion paths.',
    slug: 'b2b-saas-ai-search-traffic-buyer-prompts',
    tags: ['B2B SaaS GEO', 'AI search traffic', 'buyer prompts', 'AI citations', 'qualified pipeline'],
  },
  {
    id: 10,
    title: 'Citation Failure Diagnosis for GEO: Why AI Answers Ignore Your Best Pages',
    date: '2026-05-13',
    category: 'geo-strategy',
    image: '/generated/blog/2026-05-13-citation-failure-diagnosis-geo-cover.png',
    description:
      'A practical GEO methodology for diagnosing why AI answer engines fail to cite a page, with a repair framework for retrieval, evidence, extraction, attribution, synthesis, and retesting.',
    slug: 'citation-failure-diagnosis-geo',
    tags: ['citation failure diagnosis', 'Generative Engine Optimization', 'AI citations', 'AgentGEO', 'prompt intelligence'],
  },
  {
    id: 9,
    title: 'GEO Gap Audit: The AI Visibility Infrastructure Most Brands Are Missing',
    date: '2026-05-12',
    category: 'geo-strategy',
    image: '/generated/blog/2026-05-12-geo-gap-audit-ai-visibility-infrastructure-codex-cover.png',
    description:
      'A practical GEO gap audit for brands that need more than content: crawler access, llms.txt, entity facts, citation maps, prompt coverage, and conversion measurement.',
    slug: 'geo-gap-audit-ai-visibility-infrastructure',
    tags: ['GEO audit', 'AI visibility infrastructure', 'llms.txt', 'AI crawler access', 'citation source map'],
  },
  {
    id: 8,
    title: 'Google AI Mode & AI Overviews: Winning High-Intent Prompt Clusters (May 11, 2026)',
    date: '2026-05-11',
    category: 'geo-strategy',
    image: '/generated/blog/2026-05-11-google-ai-mode-overviews-prompt-cluster-cover.png',
    description:
      'A practical prompt-cluster playbook for May 2026 AI answer surfaces, focused on high-intent comparison, implementation, and trust prompts across Google AI Mode, AI Overviews, ChatGPT, and Perplexity.',
    slug: 'google-ai-mode-overviews-prompt-cluster',
    tags: ['Google AI Mode', 'AI Overviews', 'high-intent prompts', 'AI search traffic', 'ChatGPT Search', 'Perplexity'],
  },
  {
    id: 7,
    title: 'AI Search Traffic Playbook: What Changed in the Last Week for AI Answers (May 10, 2026)',
    date: '2026-05-10',
    category: 'geo-strategy',
    image: '/generated/blog/2026-05-10-ai-search-traffic-playbook-cover.png',
    description:
      'A weekly AI search traffic playbook for 2026, with prompt clusters that influence qualified traffic and practical execution steps for ChatGPT, Google AI Overviews, Perplexity, and Gemini.',
    slug: 'ai-search-traffic-playbook-may-2026',
    tags: ['AI search traffic', 'AI trends', 'AI Mode', 'ChatGPT Search', 'Perplexity', 'citation behavior'],
  },
  {
    id: 6,
    title: 'AI Visibility Pricing in 2026: What Buyer Prompts Should You Pay to Track?',
    date: '2026-05-09',
    category: 'geo-strategy',
    image: '/generated/blog/2026-05-09-ai-visibility-pricing-buyer-prompts-cover.png',
    description:
      'A buyer guide to AI visibility pricing in 2026, including which prompts to track first, how to compare tool costs, and when execution support matters more than dashboard volume.',
    slug: 'ai-visibility-pricing-buyer-prompts',
    tags: ['AI visibility pricing', 'buyer prompts', 'Google AI Mode', 'GEO budget', 'AI search tracking'],
  },
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
