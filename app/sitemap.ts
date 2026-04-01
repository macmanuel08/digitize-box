import { MetadataRoute } from 'next'
const today = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://digitizebox.com',
            lastModified: today,
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: 'https://digitizebox.com/website-development',
            lastModified: today,
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: 'https://digitizebox.com/appointment-scheduling',
            lastModified: today,
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: 'https://digitizebox.com/ehr-development',
            lastModified: today,
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        /*
        {
            url: 'https://digitizebox.com/blog',
            lastModified: today,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        */
    ]
}