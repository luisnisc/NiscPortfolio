import { defineCollection, z } from "astro:content";
// z -> zod schema

const projectsEn = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    img: z.string(),
    link: z.string().url(),
  }),
});

const projectsEs = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    img: z.string(),
    link: z.string().url(),
  }),
});

const formationEn = defineCollection({
  schema: z.object({
    name: z.string(),
    title: z.string(),
    description: z.string(),
    timeframe: z.string().optional(),
    skills: z.array(z.string()).optional(),
  }),
});

const formationEs = defineCollection({
  schema: z.object({
    name: z.string(),
    title: z.string(),
    description: z.string(),
    timeframe: z.string().optional(),
    skills: z.array(z.string()).optional(),
  }),
});

export const collections = { projectsEn, formationEn, projectsEs, formationEs };
