import { StringRule, defineField } from 'sanity'

const article = {
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        slugify: (input: string) =>
          input
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, ''),
        validation: (rule: StringRule) => rule.required(),
      },
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'profile' }],
    },
    {
      name: 'publishedDate',
      title: 'Published Date',
      type: 'date',
      options: {
        dateFormat: 'DD-MM-YYYY',
      },
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
    },
    {
      name: 'relatedArticles',
      title: 'Related Articles',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'article' }] }],
    },
  ],
}

export default article
