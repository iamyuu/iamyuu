import { defineCollection, z } from "astro:content";

export const collections = {
  posts: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
      publishedAt: z.coerce.date(),
      description: z.string().optional(),
      tags: z.array(z.string()).default([]),
      draft: z.boolean().default(false),
    })
  }),

  postTags: defineCollection({
    type: "data",
    schema: z.object({
      text: z.string(),
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
