<script context="module">
  import { slugify } from '../../utils';

  export async function preload({ params }) {
    // idk sapper dosen't export sitemap.xml, so we need to fetch it
    const sitemap = this.fetch('sitemap.xml');

    const posts = __POSTS__;

    const postsByTag = posts.filter(post => {
      if (!post.tags) {
        return [];
      }

      const regex = new RegExp(post.tags.join('|'), 'i');
      return regex.test(slugify(params.slug));
    });

    return { sitemap, postsByTag, slug: params.slug };
  }
</script>

<script>
  import SEO from '../../components/seo.svelte';
  import ListPost from '../../components/list-post.svelte';

  export let slug;
  export let postsByTag;
</script>

<SEO title={slug} />

<ListPost title={`#${slug}`} posts={postsByTag} />
