import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://fxkiller.com'

  return {
    rules: [
      {
        userAgent: '*',
<<<<<<< HEAD
        allow: '*',
      },
      // 针对百度爬虫的特殊规则
      {
        userAgent: 'Baiduspider',
        allow: '*',
      },
      // 针对Google爬虫的特殊规则
      {
        userAgent: 'Googlebot',
        allow: '*',
=======
        allow: '/',
        disallow: [
          '/api/',
          '/animation-test',
          '/particle-test',
          '/_next/',
          '/admin',
        ],
      },
      // 针对百度爬虫
      {
        userAgent: 'Baiduspider',
        allow: '/',
        crawlDelay: 1,
      },
      // 针对Google爬虫
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
      // 针对Bing爬虫
      {
        userAgent: 'bingbot',
        allow: '/',
>>>>>>> fx-killer/main
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
