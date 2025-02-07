/* import { imageMetadata } from 'astro/assets/utils'; */
import { defineCollection, z, reference } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      draft: z.boolean(),
      // Transform string to Date object
      pubDate: z
        .string()
        .or(z.date())
        .transform((val) => new Date(val)),
      updatedDate: z
        .string()
        .or(z.date())
        .transform((val) => new Date(val)),
      heroImage: z.object({
        src: image(),
        alt: z.string(),
      }),
      categories: z.string().optional(),
      tags: z.array(z.string()).optional(),
      author: z.string(),
      related: z.array(reference("blog")),
      show: z.boolean(),
      publicSrc: z.string().optional(),
    }),
});

export const collections = { blog: blog };
