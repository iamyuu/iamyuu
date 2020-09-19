<script>
  import { formatDate } from '../utils';

  export let title;
  export let posts;
</script>

<style>
  a {
    @apply py-2;
    @apply shadow-none;
  }

  a:hover {
    @apply text-gray-200;
    @apply underline;
    @apply shadow-none;
  }
</style>

<article class="prose prose-xl">
  {#if title}
    <h1>{title}</h1>
  {/if}

  {#each posts as { title, slug, date, description }, index}
    {#if index}
      <hr class="border-green-100 opacity-25" />
    {/if}

    <section>
      <h2><a href="article/{slug}"> {title} </a></h2>

      <p class="my-2">{description}</p>

      <small class="uppercase text-base font-bold"> — {formatDate(date)}</small>
    </section>
  {/each}
</article>
