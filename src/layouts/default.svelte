<script>
  import SEO from '../components/seo.svelte';

  export let title;
</script>

<SEO {title} />

<article class="prose prose-xl">
  <slot />
</article>
