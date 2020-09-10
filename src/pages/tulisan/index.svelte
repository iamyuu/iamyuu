<script context="module">
  export async function preload() {
    const res = await this.fetch('blog.json');
    const data = await res.json();

    return { posts: data };
  }
</script>

<script>
  import SEO from '../../components/seo.svelte';
  import ListPost from '../../components/list-post.svelte';

  export let posts;
  const title = 'Tulisan';
</script>

<SEO {title} />

<h1 class="mb-8">{title}</h1>

<ListPost {posts} />
