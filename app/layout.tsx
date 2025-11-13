import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import StructuredData from '@/components/StructuredData'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HyperMind - 10x your traffic from AI Search Engines',
  description: 'Turn AI mentions on ChatGPT, Perplexity, and Google AI into traffic and customers.',
  icons: {
    icon: '/asset/logo.png',
    shortcut: '/asset/logo.png',
    apple: '/asset/logo.png',
  },
  openGraph: {
    title: 'HyperMind - 10x your traffic from AI Search Engines',
    description: 'Empower AI platforms like ChatGPT, Claude, Perplexity to feature your brand more and transform those mentions into real business results.',
    url: 'https://www.hypermindai.tech/',
    siteName: 'HyperMind',
    images: [
      {
        url: 'https://www.hypermindai.tech/asset/dashboard.jpg',
        width: 1200,
        height: 630,
        alt: 'HyperMind AI Search Optimization Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HyperMind - 10x your traffic from AI Search Engines',
    description: 'Empower AI platforms to feature your brand more and transform those mentions into real business results.',
    images: ['https://www.hypermindai.tech/asset/dashboard.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
        <link rel="icon" href="/asset/logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}


