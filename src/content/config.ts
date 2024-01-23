import { z, defineCollection } from "astro:content";

const news = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
  }),
});

export const collections = {
  news,
};