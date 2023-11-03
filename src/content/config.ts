import { defineCollection, z } from 'astro:content';
// import { rssSchema } from '@astrojs/rss';

const work = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updateDate: z.coerce.date().optional(),
    tags: z.array(z.string()),
    image: z.string(),
    alt: z.string().optional()
  })
});

const blog = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      publisDate: z.coerce.date(),
      updateDate: z.coerce.date().optional(),
      image: z
        .preprocess((val) => `./images/${val}`, image())
        .refine((img) => img.width >= 720, {
          message: 'Hero image must be at least 720 pixels wide!'
        })
    })
});

const gallery = defineCollection({
  type: 'data',
  schema: ({ image }) =>
    z.array(
      z.object({
        image: z
          .preprocess((val) => `./images/${val}`, image())
          .refine((img) => img.width >= 320, {
            message: 'Gallery image must be at least 320 pixels wide!'
          }),
        caption: z.object({
          title: z.string().optional(),
          subtitle: z.string().optional(),
          description: z.string().optional()
        })
      })
    )
});

export const collections = { work, blog, gallery };
