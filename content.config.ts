import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: 'index.md',
      schema: z.object({
        title: z.string(),
        titleSeo: z.string().optional(),
        descriptionSeo: z.string().optional(),
        description: z.string().optional(),
        moreLink: z.string().url().optional(),
        growthInfo1: z.string().optional(),
        growthInfo2: z.string().optional(),
        growthInfo3: z.string().optional(),
        growthInfo4: z.string().optional(),
        growthTitle1: z.string().optional(),
        growthTitle2: z.string().optional(),
        growthTitle3: z.string().optional(),
        growthTitle4: z.string().optional(),
        growthMainTitle: z.string().optional(),
        growthText: z.string().optional(),
        image: z.string().optional(),
        CtaTitle: z.string().optional(),
        CtaText: z.string().optional(),
        CtaButton: z.string().optional(),
        CtaLink: z.string().url().optional(),
        footerTitle: z.string().optional(),
        footerText: z.string().optional()
      })
    }),
    faqs: defineCollection({
      type: 'page',
      source: 'faqs/*.md',
      schema: z.object({
        question: z.string(),
        answer: z.string(),
        position: z.number().optional()
      })
    }),
    legal: defineCollection({
      type: 'page',
      source: 'legal/*.md'
    }),
    blog: defineCollection({
      type: 'page',
      source: 'blog/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        coverImage: z.string(),
        date: z.string(),
        summarySeo: z.string().optional()
      })
    }),
    seo: defineCollection({
      type: 'page',
      source: 'seo.md',
      schema: z.object({
        bookingPageTitle: z.string().optional(),
        bookingPageDescription: z.string().optional(),
        bookingPageImage: z.string().optional(),
        contactPageTitle: z.string().optional(),
        contactPageDescription: z.string().optional(),
        contactPageImage: z.string().optional(),
        blogIndexPageTitle: z.string().optional(),
        blogIndexPageDescription: z.string().optional(),
        blogIndexPageImage: z.string().optional()
      })
    })
  }
})