import { defineCollection, z } from "astro:content";

export const collections = {
  posts: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
      publishedAt: z.date(),
      description: z.string().optional(),
      draft: z.boolean().default(false),
    })
  }),

  projects: defineCollection({
    type: "data",
    schema: z.object({
      title: z.string(),
      link: z.string(),
      techs: z.array(z.string()),
      isComingSoon: z.boolean().default(false),
    })
  }),
};
