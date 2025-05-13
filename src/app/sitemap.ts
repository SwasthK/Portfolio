import { blogsData } from '@/lib/data/data-blog'
import { projectsData } from '@/lib/data/data-project'
import { snippetsData } from '@/lib/data/data-snippet'
import type { MetadataRoute } from 'next'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const getSitemapEntries = (
  path: string,
  data: { slug: string }[],
  options: Partial<MetadataRoute.Sitemap[number]>
): MetadataRoute.Sitemap => {
  return data.map((item) => ({
    url: `${BASE_URL}/${path}/${item.slug}`,
    lastModified: new Date(),
    ...options,
  }));
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/projects`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blogs`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/snippets`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
  ];

  const projectPages = getSitemapEntries('projects', projectsData, {
    changeFrequency: 'monthly',
    priority: 0.8,
  });

  const blogPages = getSitemapEntries('blogs', blogsData, {
    changeFrequency: 'weekly',
    priority: 0.5,
  });

  const snippetPages = getSitemapEntries('snippets', snippetsData, {
    changeFrequency: 'weekly',
    priority: 0.5,
  });

  return [...staticPages, ...projectPages, ...blogPages, ...snippetPages];
}
