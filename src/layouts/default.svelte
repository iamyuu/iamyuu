<script>
  import SEO from '../components/seo.svelte';

  export let title;
</script>

<SEO {title} />

<article class="mt-12 prose prose-xl">
  <slot />
</article>
