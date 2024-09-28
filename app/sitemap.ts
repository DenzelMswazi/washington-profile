import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
      {
           url: `${ process.env.NEXT_PUBLIC_SERVER_URL }`, // landing page
           lastModified: new Date(),
           changeFrequency: 'daily',
           priority: 1
      }, {
        url: `${ process.env.NEXT_PUBLIC_SERVER_URL }/projects`, // projects page
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1
      }, {
        url: `${ process.env.NEXT_PUBLIC_SERVER_URL }/blog/best-tailwindcss-practices`, // blog item page
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1
      },{
        url: `${ process.env.NEXT_PUBLIC_SERVER_URL }/contact`, // contact page
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0
      }
   ]
}
