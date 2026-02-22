import { defineCollection, z } from 'astro:content';

const topics = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    author: z.string().default('Turtleand'),
    tags: z.array(z.string()).default([]),
    module: z.string().optional(),
  })
});

export const collections = { topics };
