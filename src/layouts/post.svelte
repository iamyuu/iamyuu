<script>
  import SEO from '../components/seo.svelte';
  import { formatDate, slugify } from '../utils';

  export let title;
  export let date;
  export let thumbnail;
  export let description;
  export let tags = ['random'];
</script>

<style>
  .title {
    @apply mb-4;
  }

  .date {
    @apply text-lg;
    @apply font-semibold;
  }

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
    @apply no-underline;
    @apply shadow-none;
  }

  .tag:hover {
    @apply bg-gray-200;
    @apply text-gray-900;
    @apply shadow-none;
  }
</style>

<svelte:head>
  <link rel="stylesheet" href="https://unpkg.com/prism-theme-night-owl@1.4.0/build/style.css" />
</svelte:head>

<SEO {title} {thumbnail} {description} isPost keywords={tags.join(',').toLowerCase()} />

<article class="mt-12 prose prose-xl">
  <section>
    <h1 class="title">{title}</h1>
    <small class="date">Ditulis tanggal {formatDate(date)}</small>
  </section>

  <section>
    <slot />
  </section>

  <section>
    {#each tags as tag}
      <a rel=prefetch href="tag/{slugify(tag)}" class="tag">
        #{tag.toLowerCase()}
      </a>
    {/each}
  </section>
</article>
