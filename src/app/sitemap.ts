import { MetadataRoute } from 'next'
import { getStaticClient } from '@/lib/supabase/static'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://losos4.com' // Replace with actual domain if different

    // Static pages
    const routes = [
        '',
        '/about',
        '/projects',
        '/services',
        '/blog',
        '/contact',
        '/schedule',
        '/gallery',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    // Dynamic blog posts
    let blogRoutes: MetadataRoute.Sitemap = []

    try {
        const supabase = getStaticClient()
        const { data: posts } = await supabase
            .from('posts')
            .select('slug, updated_at')
            .eq('is_published', true)

        if (posts) {
            blogRoutes = posts.map((post) => ({
                url: `${baseUrl}/blog/${post.slug}`,
                lastModified: new Date(post.updated_at || new Date()),
                changeFrequency: 'weekly' as const,
                priority: 0.6,
            }))
        }
    } catch (error) {
        console.error('Sitemap error:', error)
    }

    return [...routes, ...blogRoutes]
}
