import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Resources - Learn AI Search Optimization | HyperMind',
  description: 'Learn how to optimize your content for AI search engines. Discover strategies, tools, and best practices for improving your visibility on ChatGPT, Claude, Perplexity, and more.',
  openGraph: {
    title: 'Resources - Learn AI Search Optimization | HyperMind',
    description: 'Learn how to optimize your content for AI search engines with expert guides and insights.',
    url: 'https://www.hypermindai.tech/resources',
    siteName: 'HyperMind',
    type: 'website',
  },
}

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

