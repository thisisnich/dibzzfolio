import { z, defineCollection } from 'astro:content';
import { string } from 'astro:schema';
const beginnerPythonCollection = defineCollection({
    type: 'content',
    schema: z.object({
        file_name: z.string(),
        title: z.string(),
        body: z.string()
    })
})

const intermediateWebCollection = defineCollection({
    type: 'content',
    schema: z.object({
        URL: z.string(),
        title: z.string(),
        body: z.string(),
        sameTab: z.optional(z.boolean()),
    })
})
export const collections = {
    beginnerPython: beginnerPythonCollection,
    intermediateWeb: intermediateWebCollection
}