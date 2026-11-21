import { MetadataRoute } from 'next';
import { personalInfo } from '@/lib/data';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/projects', '/about', '/contact'],
        disallow: ['/api/', '/admin/', '/_next/'],
      },
      {
        userAgent: 'Googlebot',
        allow: ['/', '/projects', '/about', '/contact'],
        disallow: ['/api/', '/admin/'],
      },
    ],
    sitemap: `${personalInfo.siteUrl}/sitemap.xml`,
  };
}