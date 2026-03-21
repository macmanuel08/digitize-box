import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://digitizebox.com',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: 'https://digitizebox.com/website-development',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
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