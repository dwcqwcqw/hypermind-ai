type ArticleStructuredDataProps = {
  title: string
  url: string
  image: string
  datePublished: string
  dateModified?: string
  description: string
  content: string
}

export default function ArticleStructuredData({
  title,
  url,
  image,
  datePublished,
  dateModified,
  description,
  content,
}: ArticleStructuredDataProps) {
  // Extract plain text from HTML content (first 500 chars)
  const plainText = content.replace(/<[^>]*>/g, '').substring(0, 500)

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "url": url,
    "image": image,
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "author": {
      "@type": "Organization",
      "name": "HyperMind Team",
      "url": "https://www.hypermindai.tech/#organization"
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://www.hypermindai.tech/#organization",
      "name": "HyperMind",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.hypermindai.tech/asset/logo.png",
        "width": 185,
        "height": 185
      }
    },
    "description": description,
    "articleBody": plainText,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    "inLanguage": "en"
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

