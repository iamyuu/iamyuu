import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
		repo: {
			owner: 'iamyuu',
			name: 'iamyuu',
		}
  },
  collections: {
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      entryLayout: 'content',
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      schema: {
				draft: fields.checkbox({ label: 'Draft' }),
        title: fields.slug({ name: { label: 'Title' } }),
				publishedAt: fields.date({ label: 'Published At', defaultValue: {kind: 'today'} }),
				description: fields.text({ label: 'Description', multiline: true }),
        tags: fields.array(
          fields.relationship({
            label: 'Tags',
            collection: 'postTags'
          }),
          {
            label: 'Tags',
            itemLabel: props => props.value ?? '',
          }
        ),
        content: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
          images: true,
        }),
      },
    }),

    postTags: collection({
      label: 'Post Tags',
      slugField: 'text',
      path: 'src/content/postTags/*',
      schema: {
        text: fields.slug({ name: { label: 'Text' } }),
      }
    }),

    projects: collection({
      label: 'Projects',
      slugField: 'title',
      path: 'src/content/projects/*',
      schema: {
        isComingSoon: fields.checkbox({ label: 'Coming Soon' }),
        title: fields.slug({ name: { label: 'Title' } }),
        link: fields.url({ label: 'Link', validation: {isRequired: true} }),
        techs: fields.array(
          fields.text({ label: 'Techs' }),
          {
            itemLabel: props => props.value,
          }
        ),
      }
    })
  },
});
