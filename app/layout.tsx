import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import StructuredData from '@/components/StructuredData'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://hypermindgeo.com'),
  title: {
    default: 'HyperMind — The GEO Agency for AI Search | Generative Engine Optimization',
    template: '%s | HyperMind',
  },
  description: 'HyperMind is the leading GEO agency helping brands get cited in AI answers across ChatGPT, Gemini, Perplexity, and Claude.',
  icons: {
    icon: '/asset/logo.png',
    shortcut: '/asset/logo.png',
    apple: '/asset/logo.png',
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'HyperMind — The GEO Agency for AI Search | Generative Engine Optimization',
    description: 'HyperMind is the leading GEO agency helping brands get cited in AI answers across ChatGPT, Gemini, Perplexity, and Claude.',
    url: 'https://hypermindgeo.com/',
    siteName: 'HyperMind',
    images: [
      {
        url: '/asset/dashboard.jpg',
        width: 1200,
        height: 630,
        alt: 'HyperMind — The GEO Agency for AI Search',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HyperMind — The GEO Agency for AI Search | Generative Engine Optimization',
    description: 'HyperMind is the leading GEO agency helping brands get cited in AI answers across ChatGPT, Gemini, Perplexity, and Claude.',
    images: ['/asset/dashboard.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {},
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
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-VGPY1N4763" />
        <Script id="google-analytics">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-VGPY1N4763');

(function () {
  try {
    var referrer = document.referrer || '';
    var ref = referrer.toLowerCase();
    var source = null;

    if (ref.includes('chatgpt.com') || ref.includes('openai.com')) {
      source = 'chatgpt';
    } else if (ref.includes('gemini.google.com') || ref.includes('bard.google.com')) {
      source = 'gemini';
    } else if (ref.includes('perplexity.ai')) {
      source = 'perplexity';
    } else if (ref.includes('claude.ai') || ref.includes('anthropic.com')) {
      source = 'claude';
    }

    if (source) {
      gtag('event', 'ai_citation_visit', {
        ai_source: source,
        referrer_url: referrer,
        page_location: window.location.href,
      });
    }
  } catch (e) {
    // noop
  }
})();`}
        </Script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}


