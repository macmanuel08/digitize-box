import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://digitizebox.com',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        /*
        {
            url: 'https://digitizebox.com/blog',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        */
    ]
}