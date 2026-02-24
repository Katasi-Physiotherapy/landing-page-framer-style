import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(), // Used by CMS for filename; Astro derives slug from filename
    description: z.string().optional(),
    date: z.coerce.date(),
    category: z.string().optional(),
    coverImage: z.string().optional(),
  }),
});

export const collections = {
  blog,
};
