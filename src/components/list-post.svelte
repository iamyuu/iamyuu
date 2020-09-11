<script>
  import { formatDate } from '../utils';

  export let posts;
</script>

<article class="prose prose-xl">
  {#each posts as { title, slug, date, description }, index}
    {#if index}
      <hr class="border-green-100 opacity-25" />
    {/if}

    <section>
      <h2><a rel="prefetch" href="tulisan/{slug}" class="hover:underline py-2"> {title} </a></h2>

      <p class="my-2">{description}</p>

      <small class="uppercase text-base font-bold"> — {formatDate(date)}</small>
    </section>
  {/each}
</article>
