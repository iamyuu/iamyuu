<script>
  import SEO from '../../components/seo.svelte';
  import ListPost from '../../components/list-post.svelte';

  const title = 'Article';
  const posts = __POSTS__;
</script>

<SEO {title} />

<ListPost {posts} />
