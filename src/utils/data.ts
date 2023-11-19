import { getCollection } from 'astro:content';

export async function getAllPost() {
	const posts = await getCollection('posts', ({data}) => data.draft !== true);
	return posts
		.sort((first, second) => {
			return second.data.publishedAt.getTime() - first.data.publishedAt.getTime();
		})
}

export async function getAllProject() {
	return getCollection('projects');
}
