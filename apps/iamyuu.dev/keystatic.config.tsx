import { type Config, config, fields, component, singleton, collection } from '@keystatic/core';

// ---------------------------------------------------------------------------
// Homepage
// ---------------------------------------------------------------------------

const homeSingleton = singleton({
	label: 'Home',
	path: 'src/content/home/index',
	schema: {
		name: fields.text({
			label: 'Name',
		}),
		role: fields.text({
			label: 'Role',
		}),
		location: fields.text({
			label: 'Location',
		}),
		about: fields.text({
			label: 'About',
			multiline: true,
		}),
		contact: fields.array(
			fields.object({
				label: fields.text({
					label: 'Label',
				}),
				value: fields.conditional(
					fields.select({
						label: 'Type',
						defaultValue: 'link',
						options: [
							{ label: 'Link', value: 'link' },
							{ label: 'Text', value: 'text' },
						],
					}),
					{
						text: fields.text({
							label: 'Value',
						}),
						link: fields.url({
							label: 'URL',
						}),
					},
				),
			}),
			{
				label: 'Contact',
				itemLabel: props => props.fields.label.value,
			},
		),
	},
});

// ---------------------------------------------------------------------------
// Tags
// ---------------------------------------------------------------------------

const tagsCollection = collection({
	label: 'Tags',
	path: 'src/content/tags/*',
	slugField: 'title',
	schema: {
		title: fields.text({
			label: 'Title',
		}),
	},
});

// ---------------------------------------------------------------------------
// Portofolio
// ---------------------------------------------------------------------------

const portofolioCollection = collection({
	label: 'Portofolio',
	path: 'src/content/portofolio/*',
	slugField: 'title',
	schema: {
		cover: fields.image({
			label: 'Cover',
			directory: 'src/content/portofolio/_images',
			publicPath: '/src/content/portofolio/_images/',
		}),
		title: fields.text({
			label: 'Title',
		}),
		previewUrl: fields.url({
			label: 'Preview URL',
		}),
		repoUrl: fields.url({
			label: 'Repository URL',
		}),
		tags: fields.array(
			fields.relationship({
				label: 'Tags',
				collection: 'tags',
			}),
			{
				label: 'Tags',
				itemLabel: props => props.value ?? 'Please select a tag',
			},
		),
	},
});

// ---------------------------------------------------------------------------
// Articles
// ---------------------------------------------------------------------------

const articlesCollection = collection({
	label: 'Articles',
	path: 'src/content/articles/*',
	slugField: 'title',
	format: {
		contentField: 'content',
	},
	schema: {
		draft: fields.checkbox({
			label: 'Draft',
			defaultValue: true,
		}),
		title: fields.slug({
			name: {
				label: 'Title',
			},
			slug: {
				label: 'Slug',
			},
		}),
		tags: fields.array(
			fields.relationship({
				label: 'Tags',
				collection: 'tags',
			}),
			{
				label: 'Tags',
				itemLabel: props => props.value ?? 'Please select a tag',
			},
		),
		publishedAt: fields.date({
			label: 'Published on',
		}),
		content: fields.document({
			label: 'Content',
			formatting: true,
			dividers: true,
			tables: true,
			links: true,
			images: {
				directory: 'src/content/articles/*/_images',
				publicPath: '/src/content/articles/_images',
			},
			componentBlocks: {
				imageWithCaption: component({
					label: 'Image with caption',
					schema: {
						src: fields.image({
							label: 'Image',
							directory: 'src/content/articles/_images',
							publicPath: '/src/content/articles/_images/',
						}),
						alt: fields.text({
							label: 'Alt text',
						}),
						caption: fields.text({
							label: 'Caption',
							multiline: true,
						}),
					},
					preview: () => null,
				}),
			},
		}),
	},
});

// ---------------------------------------------------------------------------

const storage: Config['storage'] =
	process.env.NODE_ENV === 'development'
		? { kind: 'local' }
		: {
				kind: 'github',
				repo: {
					owner: 'iamyuu',
					name: 'iamyuu',
				},
		  };

export default config({
	storage,

	singletons: {
		home: homeSingleton,
	},

	collections: {
		tags: tagsCollection,
		articles: articlesCollection,
		portofolio: portofolioCollection,
	},
});
