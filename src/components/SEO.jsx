// src/components/seo.js
import React from 'react';
import { useSiteMetadata } from "../hooks/use-site-metadata"

const SEO = ({ title, description, pathname, children }) => {
  const { title: defaultTitle, description: defaultDescription, image, siteUrl, type, keywords } = useSiteMetadata()

  const seo = {
    title: title ? `${title} | ${defaultTitle}` : defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
    type: `${type}`,
    keywords: `${keywords}`,
  }

  return (
    <div>
      <title>{seo.title}</title>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="keywords" content={seo.keywords}/>

      {/* Open Graph Protcol */}
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content={seo.type} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:site_name" content={seo.title} />
      <meta property="og:image" content={seo.image} />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={seo.image} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "ANZZA ~bottega di borsa~",
          "url": "https://anzza.jp",
          "logo": "https://anzza.jp/images/favicon.png"
        })}
      </script>
      
      {children}
      
    </div>
  )
}

export default SEO;

