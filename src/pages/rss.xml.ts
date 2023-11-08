import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { app } from '$lib/configs';

export async function GET(context: { site: string | URL }) {
  const posts = await getCollection('blog');
  return rss({
    title: app.name,
    description: app.description,
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/blog/${post.slug}/`
    })),
    trailingSlash: false
  });
}
