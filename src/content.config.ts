import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const topics = defineCollection({
  type: 'content_layer',
  loader: glob({
    pattern: ['**/*.md', '**/*.mdx'],
    base: './src/content/topics',
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    author: z.string().default('Turtleand'),
    tags: z.array(z.string()).default([]),
    module: z.string().optional(),
  }),
});

export const collections = { topics };
