'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface DropdownItem {
  label: string
  href: string
  desc?: string
}

interface NavGroup {
  label: string
  href: string
  items?: DropdownItem[]
}

const NAV_GROUPS: NavGroup[] = [
  {
    label: 'Platform',
    href: '/platform',
    items: [
      { label: 'Platform Overview', href: '/platform', desc: 'AI visibility monitoring & intelligence' },
      { label: 'AI Visibility Monitoring', href: '/platform/ai-visibility-monitoring', desc: 'Track brand mentions across AI assistants' },
      { label: 'AI Mention Tracking', href: '/platform/ai-mention-tracking', desc: 'Real-time AI mention analytics' },
      { label: 'AI Sentiment Analysis', href: '/platform/ai-sentiment-analysis', desc: 'Understand how AI describes your brand' },
      { label: 'Prompt Intelligence', href: '/platform/prompt-intelligence', desc: 'Discover prompts that mention your brand' },
      { label: 'Competitor AI Visibility', href: '/platform/competitor-ai-visibility', desc: 'Benchmark against competitors in AI search' },
    ],
  },
  {
    label: 'Services',
    href: '/services',
    items: [
      { label: 'AI Visibility Optimization', href: '/services/ai-visibility-optimization', desc: 'Increase how often AI recommends you' },
      { label: 'AI Mention Growth', href: '/services/ai-mention-growth', desc: 'Grow brand mentions in AI answers' },
      { label: 'AI Reputation Management', href: '/services/ai-reputation-management', desc: 'Control your AI brand narrative' },
      { label: 'AI Citation Strategy', href: '/services/ai-citation-strategy', desc: 'Become an AI citation source' },
      { label: 'AI Search Traffic Growth', href: '/services/ai-search-traffic-growth', desc: 'Convert AI mentions into traffic' },
      { label: 'AI Answer Optimization', href: '/services/ai-answer-optimization', desc: 'Optimize how AI answers about you' },
    ],
  },
  {
    label: 'Solutions',
    href: '/solutions',
    items: [
      { label: 'B2B SaaS GEO', href: '/solutions/b2b-saas-geo', desc: 'GEO for SaaS companies' },
      { label: 'Fintech GEO', href: '/solutions/fintech-geo', desc: 'GEO for financial technology' },
      { label: 'Ecommerce GEO', href: '/solutions/ecommerce-geo', desc: 'GEO for online retailers' },
      { label: 'Enterprise GEO', href: '/solutions/enterprise-geo', desc: 'GEO at enterprise scale' },
      { label: 'Startup GEO', href: '/solutions/startup-geo', desc: 'GEO for early-stage companies' },
    ],
  },
  {
    label: 'Resources',
    href: '/resources',
    items: [
      { label: 'GEO Guides', href: '/resources/geo-guides', desc: 'Comprehensive GEO knowledge base' },
      { label: 'AI Search Library', href: '/resources/ai-search-library', desc: 'How each AI platform works' },
      { label: 'Prompt Database', href: '/resources/prompt-database', desc: 'AI prompts by industry' },
      { label: 'GEO Playbooks', href: '/resources/geo-playbooks', desc: 'Step-by-step action guides' },
      { label: 'Blog', href: '/resources/blog', desc: 'Latest GEO insights & articles' },
      { label: 'Case Studies', href: '/case-studies', desc: 'Client results & success stories' },
    ],
  },
  {
    label: 'Data',
    href: '/data',
    items: [
      { label: 'AI Visibility Leaderboard', href: '/data/ai-visibility-leaderboard', desc: 'Top brands in AI search' },
      { label: 'AI Brand Mention Index', href: '/data/ai-brand-mention-index', desc: 'Brand mention rankings' },
      { label: 'AI Citation Database', href: '/data/ai-citation-database', desc: 'Most cited sources in AI answers' },
      { label: 'AI Search Trends', href: '/data/ai-search-trends', desc: 'Emerging AI search patterns' },
    ],
  },
  {
    label: 'Tools',
    href: '/tools',
    items: [
      { label: 'AI Visibility Checker', href: '/tools/ai-visibility-checker', desc: 'Check your AI visibility score' },
      { label: 'AI Mention Tracker', href: '/tools/ai-mention-tracker', desc: 'Track AI mentions of your brand' },
      { label: 'AI Citation Checker', href: '/tools/ai-citation-checker', desc: 'Find where AI cites your content' },
      { label: 'AI Brand Audit', href: '/tools/ai-brand-audit', desc: 'Full AI brand presence audit' },
    ],
  },
  { label: 'Pricing', href: '/pricing' },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleMouseEnter = useCallback((label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setOpenDropdown(label)
  }, [])

  const handleMouseLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => setOpenDropdown(null), 150)
  }, [])

  const toggleMobileSection = useCallback((label: string) => {
    setMobileExpanded((prev) => (prev === label ? null : label))
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-white/90 backdrop-blur-xl shadow-sm'
        : 'bg-white/60 backdrop-blur-md'
    } border-b border-gray-200/30`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition">
            <Image src="/asset/logo.png" alt="HyperMind Logo" width={40} height={40} className="rounded-lg" />
            <span className="text-2xl font-bold text-black">HyperMind</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {NAV_GROUPS.map((group) => (
              <div
                key={group.label}
                className="relative"
                onMouseEnter={() => group.items ? handleMouseEnter(group.label) : undefined}
                onMouseLeave={group.items ? handleMouseLeave : undefined}
              >
                <Link
                  href={group.href}
                  className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-black transition rounded-lg hover:bg-gray-100/60 flex items-center gap-1"
                >
                  {group.label}
                  {group.items && (
                    <svg className={`w-3.5 h-3.5 transition-transform ${openDropdown === group.label ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>

                {group.items && openDropdown === group.label && (
                  <div className="absolute top-full left-0 mt-1 w-80 bg-white rounded-xl shadow-xl border border-gray-200/60 py-2 z-50">
                    {group.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2.5 hover:bg-gray-50 transition"
                      >
                        <div className="text-sm font-medium text-gray-900">{item.label}</div>
                        {item.desc && <div className="text-xs text-gray-500 mt-0.5">{item.desc}</div>}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-3">
            <Link href="/company" className="text-sm font-medium text-gray-700 hover:text-black transition px-3 py-2">
              Company
            </Link>
            <a
              href="https://forms.gle/QA6WWgN4cpRHW5VF7"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition"
            >
              Get Started
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-gray-700 hover:text-black p-2"
          >
            <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4 max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col space-y-1 pt-2">
              {NAV_GROUPS.map((group) => (
                <div key={group.label}>
                  {group.items ? (
                    <>
                      <button
                        onClick={() => toggleMobileSection(group.label)}
                        className="w-full flex justify-between items-center px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-black hover:bg-gray-50 rounded-lg transition"
                      >
                        {group.label}
                        <svg className={`w-4 h-4 transition-transform ${mobileExpanded === group.label ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {mobileExpanded === group.label && (
                        <div className="pl-4 space-y-1">
                          {group.items.map((item) => (
                            <Link key={item.href} href={item.href} className="block px-3 py-2 text-sm text-gray-600 hover:text-black hover:bg-gray-50 rounded-lg transition">
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link href={group.href} className="block px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-black hover:bg-gray-50 rounded-lg transition">
                      {group.label}
                    </Link>
                  )}
                </div>
              ))}
              <Link href="/company" className="block px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-black hover:bg-gray-50 rounded-lg transition">
                Company
              </Link>
              <a
                href="https://forms.gle/QA6WWgN4cpRHW5VF7"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800 transition text-center mx-3 mt-2"
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
