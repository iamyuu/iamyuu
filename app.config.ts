export default defineAppConfig({
	alpine: {
		title: 'iamyuu.dev',
		description:
			`@iamyuu. Hey there, I'm Yusuf. Software engineer based in Bogor, Indonesia.` +
			`I write about web development, software engineering, and other things I'm interested in.` +
			`I also write what I've learned from courses, books, and other resources.`,
		image: {
			src: '/social-card-preview.png',
			alt: '',
			width: 400,
			height: 300,
		},
		header: {
			position: 'left',
			logo: {
				path: '/logo.svg',
				pathDark: '/logo-dark.svg',
				alt: 'alpine',
			},
		},
		footer: {
			credits: {
				enabled: false,
			},
			navigation: false,
			message: 'Reach me on',
		},
		socials: {
			twitter: 'iamyuu027',
			instagram: 'iamyuu027',
			linkedin: 'iamyuu027',
			github: 'iamyuu',
			telegram: 'iamyuu027',
			email: 'yusuf@iamyuu.dev',
		},
	},
});
