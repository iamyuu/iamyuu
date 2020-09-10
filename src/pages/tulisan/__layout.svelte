<script>
  import SEO from '../../components/seo.svelte';
  import { formatDate, slugify } from '../../utils';

  export let title;
  export let date;
  export let thumbnail;
  export let description;
  export let tags = ['random'];
</script>

<style>
  .tag {
    @apply inline-block;
    @apply text-base;
    @apply font-semibold;
    @apply px-3;
    @apply py-1;
    @apply mr-2;
    @apply mb-2;
    @apply rounded-md;
    @apply bg-transparent;
    @apply border;
    @apply border-gray-200;
    @apply transition;
    @apply duration-500;
    @apply ease-in-out;
  }

  .tag:hover {
    @apply bg-gray-200;
    @apply text-gray-900;
  }
</style>

<SEO {title} {thumbnail} {description} isPost keywords={tags.join(',').toLowerCase()} />

<article>
  <section>
    <h1>{title}</h1>
    <span class="text-base font-semibold">Ditulis pada {formatDate(date)}</span>
  </section>

  <section>
    <slot />
  </section>

  <section>
    {#each tags as tag}
      <a rel=prefetch href="tags/{slugify(tag)}" class="tag">
        #{tag}
      </a>
    {/each}
  </section>
</article>
