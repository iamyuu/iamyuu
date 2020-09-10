<script>
  import { formatDate } from '../utils';

  export let posts;
</script>

{#each posts as { title, slug, date, desc }, index}
  {#if index}
    <hr class="my-6 border-green-100 opacity-25" />
  {/if}

  <article>
    <h2>
      <a rel=prefetch href="tulisan/{slug}" class="hover:underline py-2">
        {title}
      </a>
    </h2>
    <p class="my-2">{desc}</p>
    <small class="uppercase text-base font-bold"> — {formatDate(date)}</small>
  </article>
{/each}
