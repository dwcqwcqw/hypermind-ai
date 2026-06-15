/**
 * Global structured data (JSON-LD) injected into every page via root layout.
 *
 * Schema.org @graph includes: Organization, WebSite (with SearchAction),
 * ProfessionalService (GEO agency), and SiteNavigationElement.
 *
 * Page-specific schema (Article, FAQPage, BreadcrumbList) is handled by
 * individual page components — not here.
 */
export default function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://hypermindgeo.com/#organization',
        name: 'HyperMind',
        url: 'https://hypermindgeo.com/',
        logo: {
          '@type': 'ImageObject',
          url: 'https://hypermindgeo.com/asset/logo.png',
          width: 185,
          height: 185,
        },
        description:
          'HyperMind is an agentic GEO agency and AI visibility execution partner that helps brands get mentioned, cited, and recommended in AI answers across ChatGPT, Google AI Overviews, Gemini, Perplexity, Claude, Copilot, and other AI assistants.',
        foundingDate: '2024',
        areaServed: 'Worldwide',
        knowsAbout: [
          'Generative Engine Optimization',
          'GEO',
          'AI Search Optimization',
          'AI Visibility Monitoring',
          'AI Citation Strategy',
          'AgenticGEO',
          'AI Answer Optimization',
          'AI Brand Monitoring',
          'LLM SEO',
          'Answer Engine Optimization',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://hypermindgeo.com/#website',
        url: 'https://hypermindgeo.com/',
        name: 'HyperMind - Agentic GEO Agency for AI Search',
        description:
          'Agentic Generative Engine Optimization agency helping brands get recommended in AI answers through strategy archives, critic-guided prioritization, citation strategy, answer-ready content, and AI search attribution.',
        publisher: {
          '@id': 'https://hypermindgeo.com/#organization',
        },
        inLanguage: 'en',
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://hypermindgeo.com/resources/?q={search_term_string}',
          },
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'ProfessionalService',
        '@id': 'https://hypermindgeo.com/#service',
        name: 'HyperMind Agentic GEO Agency',
        serviceType: 'Agentic Generative Engine Optimization',
        provider: {
          '@id': 'https://hypermindgeo.com/#organization',
        },
        description:
          'Full-service agentic GEO agency offering AI visibility monitoring, prompt demand mapping, strategy archive selection, critic-guided prioritization, AI citation strategy, AI answer optimization, and AI search traffic attribution.',
        url: 'https://hypermindgeo.com/services/',
        areaServed: 'Worldwide',
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Agentic GEO Agency & Platform Plans',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'AI Visibility Monitoring',
                description: 'Track brand mentions, citations, sentiment, and recommendation rank across AI assistants with competitor benchmarking.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Agentic GEO Strategy',
                description: 'AI visibility monitoring plus prompt demand mapping, strategy archive selection, critic-guided prioritization, content optimization, and citation planning.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Full GEO Execution',
                description: 'Complete GEO service including strategy, implementation, answer-ready content, citation source development, live model testing, and ongoing optimization.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Enterprise GEO and Managed Traffic Operations',
                description: 'Custom enterprise GEO programs with managed social media operations, expert content production, cross-channel publishing, multi-brand governance, and growth reporting across traffic, users, and orders.',
              },
            },
          ],
        },
      },
      {
        '@type': 'SiteNavigationElement',
        '@id': 'https://hypermindgeo.com/#navigation',
        name: 'Main Navigation',
        hasPart: [
          { '@type': 'WebPage', name: 'Try Free AI Visibility Audit', url: 'https://hypermindgeo.com/tools/ai-brand-audit/' },
          { '@type': 'WebPage', name: 'AI Visibility Monitoring', url: 'https://hypermindgeo.com/platform/ai-visibility-monitoring/' },
          { '@type': 'WebPage', name: 'AI Citation Strategy', url: 'https://hypermindgeo.com/services/ai-citation-strategy/' },
          { '@type': 'WebPage', name: 'See Pricing Plans', url: 'https://hypermindgeo.com/pricing/' },
          { '@type': 'WebPage', name: 'Compare HyperMind vs SEO Tools', url: 'https://hypermindgeo.com/compare/hypermind-vs-seo-tools/' },
          { '@type': 'WebPage', name: 'Platform', url: 'https://hypermindgeo.com/platform/' },
          { '@type': 'WebPage', name: 'Services', url: 'https://hypermindgeo.com/services/' },
          { '@type': 'WebPage', name: 'Solutions', url: 'https://hypermindgeo.com/solutions/' },
          { '@type': 'WebPage', name: 'Resources', url: 'https://hypermindgeo.com/resources/' },
          { '@type': 'WebPage', name: 'Data', url: 'https://hypermindgeo.com/data/' },
          { '@type': 'WebPage', name: 'Tools', url: 'https://hypermindgeo.com/tools/' },
          { '@type': 'WebPage', name: 'Case Studies', url: 'https://hypermindgeo.com/case-studies/' },
          { '@type': 'WebPage', name: 'Pricing', url: 'https://hypermindgeo.com/pricing/' },
          { '@type': 'WebPage', name: 'Company', url: 'https://hypermindgeo.com/company/' },
        ],
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
