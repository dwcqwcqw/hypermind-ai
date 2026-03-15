import Link from 'next/link'

const FOOTER_SECTIONS = [
  {
    title: 'Platform',
    links: [
      { label: 'Platform Overview', href: '/platform' },
      { label: 'AI Visibility Monitoring', href: '/platform/ai-visibility-monitoring' },
      { label: 'AI Mention Tracking', href: '/platform/ai-mention-tracking' },
      { label: 'Prompt Intelligence', href: '/platform/prompt-intelligence' },
      { label: 'Competitor AI Visibility', href: '/platform/competitor-ai-visibility' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'AI Visibility Optimization', href: '/services/ai-visibility-optimization' },
      { label: 'AI Mention Growth', href: '/services/ai-mention-growth' },
      { label: 'AI Reputation Management', href: '/services/ai-reputation-management' },
      { label: 'AI Citation Strategy', href: '/services/ai-citation-strategy' },
      { label: 'AI Search Traffic Growth', href: '/services/ai-search-traffic-growth' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'B2B SaaS GEO', href: '/solutions/b2b-saas-geo' },
      { label: 'Fintech GEO', href: '/solutions/fintech-geo' },
      { label: 'Ecommerce GEO', href: '/solutions/ecommerce-geo' },
      { label: 'Enterprise GEO', href: '/solutions/enterprise-geo' },
      { label: 'Startup GEO', href: '/solutions/startup-geo' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'What is GEO', href: '/resources/what-is-geo' },
      { label: 'How AI Search Works', href: '/resources/how-ai-search-works' },
      { label: 'GEO Guides', href: '/resources/geo-guides' },
      { label: 'AI Search Library', href: '/resources/ai-search-library' },
      { label: 'GEO Playbooks', href: '/resources/geo-playbooks' },
      { label: 'Blog', href: '/resources/blog' },
    ],
  },
  {
    title: 'Data & Tools',
    links: [
      { label: 'AI Visibility Leaderboard', href: '/data/ai-visibility-leaderboard' },
      { label: 'AI Search Trends', href: '/data/ai-search-trends' },
      { label: 'AI Visibility Checker', href: '/tools/ai-visibility-checker' },
      { label: 'AI Brand Audit', href: '/tools/ai-brand-audit' },
      { label: 'Case Studies', href: '/case-studies' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About HyperMind', href: '/company' },
      { label: 'GEO Methodology', href: '/company/methodology' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Compare', href: '/compare' },
      { label: 'Trust & Security', href: '/company/trust' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-semibold mb-4 text-sm">{section.title}</h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <span className="text-white font-bold text-lg">HyperMind</span>
            <span className="text-gray-500 text-sm">The GEO Agency for AI Search</span>
          </div>
          <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} HyperMind. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
