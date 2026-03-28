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
          'HyperMind is the leading GEO (Generative Engine Optimization) agency that helps brands get recommended in AI answers across ChatGPT, Gemini, Perplexity, Claude, and other AI assistants.',
        foundingDate: '2024',
        areaServed: 'Worldwide',
        knowsAbout: [
          'Generative Engine Optimization',
          'GEO',
          'AI Search Optimization',
          'AI Visibility Monitoring',
          'AI Citation Strategy',
          'AI Brand Monitoring',
          'LLM SEO',
          'Answer Engine Optimization',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://hypermindgeo.com/#website',
        url: 'https://hypermindgeo.com/',
        name: 'HyperMind — The GEO Agency for AI Search',
        description:
          'Generative Engine Optimization agency helping brands get recommended in AI answers. AI visibility monitoring, citation strategy, and search optimization.',
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
        name: 'HyperMind GEO Agency',
        serviceType: 'Generative Engine Optimization',
        provider: {
          '@id': 'https://hypermindgeo.com/#organization',
        },
        description:
          'Full-service GEO agency offering AI visibility monitoring, AI mention tracking, AI citation strategy, AI reputation management, and AI search traffic optimization.',
        url: 'https://hypermindgeo.com/services/',
        areaServed: 'Worldwide',
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'GEO Agency & Platform Plans',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'AI Visibility Monitoring',
                description: 'Track brand mentions across AI assistants. Includes AI mention tracking, sentiment analysis, and competitor benchmarking.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'GEO Strategy',
                description: 'AI visibility monitoring plus GEO strategy development, content optimization, and citation planning.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Full GEO Agency',
                description: 'Complete GEO service including strategy, implementation, content production, citation building, and ongoing optimization.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Enterprise GEO',
                description: 'Custom enterprise GEO programs with dedicated teams, multi-brand management, and advanced AI analytics.',
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
