import { defineCollection, z } from "astro:content";
// z -> zod schema

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    img: z.string(),
    link: z.string().url(),
  })
})

const formation = defineCollection({
  schema: z.object({
    name: z.string(),
    title: z.string(),
    description: z.string(),
  })
})

export const collections = { projects, formation }