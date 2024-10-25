export default {
  name: 'blog',
  type: 'document',
  title: 'Blog',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title of blog article',
      description:
        'The main title of the blog post. This should be descriptive and capture the essence of the content.',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug of your blog article',
      description:
        'A unique, URL-friendly identifier for this blog post. It is automatically generated from the title when you click "Generate" after specifying a title. This slug will be part of the blog post’s URL.',
      options: {source: 'title'},
    },
    {
      name: 'titleImage',
      type: 'image',
      title: 'Title Image',
      description:
        'The main image representing the blog post. It appears at the top of the article and on blog listing pages.',
    },
    {
      name: 'smallDescription',
      type: 'text',
      title: 'Small description',
      description:
        'A short summary of the blog post. This will be shown on the blog list page and search results, typically around 150-200 characters.',
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      description:
        'The main content of the blog article, made up of text blocks and rich text formatting options.',
      of: [{type: 'block'}],
    },
    {
      name: 'badge',
      type: 'string',
      title: 'Badge',
      description:
        'A single word used as a label or indicator for the blog post, like "News" or "Coporate".',
    },
    {
      name: 'releaseDate',
      type: 'date',
      title: 'Release date',
      description:
        'The official date of release for this blog post. It will be shown on the post page and in listings.',
    },
  ],
}
