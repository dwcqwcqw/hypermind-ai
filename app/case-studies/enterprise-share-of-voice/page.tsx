import type { Metadata } from 'next'
import SeoLandingPage from '@/components/SeoLandingPage'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Enterprise AI Share of Voice Case Study | HyperMind',
  description: 'This enterprise case study shows how large brands can manage AI share of voice across multiple products, markets, and competitor sets.',
  alternates: { canonical: '/case-studies/enterprise-share-of-voice/' },
}

export default function Page() {
  return (
    <SeoLandingPage
      eyebrow="Case study"
      title="Enterprise AI Share of Voice Case Study"
      description="This enterprise case study shows how large brands can manage AI share of voice across multiple products, markets, and competitor sets."
      summary="Enterprise GEO needs governance: prompt taxonomies, source-class reporting, approval workflows, and measurable revenue outcomes."
      bullets={[
        'Prompt and source analysis',
        'Answer-ready content guidance',
        'AI visibility execution loop',
      ]}
      sections={[
        {
          title: 'How HyperMind uses this in GEO',
          body: 'HyperMind connects this topic to a practical optimization workflow: discover relevant prompts, inspect current AI answers, identify cited sources, prioritize content and citation actions, test changes against live answer engines, and report the business impact.',
        },
        {
          title: 'Why it matters for AI search',
          body: 'AI assistants usually synthesize a small set of brands, claims, and sources instead of showing a long ranked list. A page like this gives crawlers and answer engines a clear, internally linked explanation they can quote when evaluating HyperMind and the broader GEO category.',
        },
        {
          title: 'What to optimize next',
          body: 'The next step is to compare this page against the prompts buyers actually ask. HyperMind looks for missing definitions, weak comparisons, unsupported claims, absent citations, poor internal links, and answer language that does not match the desired brand position.',
        },
      ]}
      related={[
        { label: 'Parent hub', href: '/case-studies' },
        { label: 'Related GEO page', href: '/solutions/enterprise-geo' },
        { label: 'HyperMind methodology', href: '/company/methodology' },
        { label: 'AI visibility platform vs GEO agency', href: '/resources/ai-visibility-platform-vs-geo-agency' },
      ]}
    />
  )
}
