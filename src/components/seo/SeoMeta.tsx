import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SeoMetaProps {
  title: string;
  description: string;
  canonicalPath: string;
  robots?: string;
  schema?: string;
}

export function SeoMeta({
  title,
  description,
  canonicalPath,
  robots = 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1',
  schema
}: SeoMetaProps) {
  const origin = 'https://ventra.co.kr';
  const url = `${origin}${canonicalPath}`;
  
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta name="robots" content={robots} />
      
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Ventra" />
      <meta property="og:locale" content="ko_KR" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="theme-color" content="#1B2D53" />
      
      {schema && (
        <script type="application/ld+json">
          {schema}
        </script>
      )}
    </Helmet>
  );
}
