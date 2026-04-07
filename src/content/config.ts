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

const products = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    description: z.string().optional(),
    image: z.string().optional(),
    price: z.number(),
    unit: z.string().default('unit'),
    category: z.string().optional(),
    inStock: z.boolean().default(true),
    active: z.boolean().default(true),
  }),
});

export const collections = {
  blog,
  products,
};
