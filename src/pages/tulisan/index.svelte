<script context="module">
  export async function preload() {
    const res = await this.fetch('blog.json');
    const data = await res.json();

    return { posts: data };
  }
</script>

<script>
  import { formatDate } from '../../utils';
  import SEO from '../../components/seo.svelte';

  export let posts;
  const title = 'Tulisan';
</script>

<SEO {title} />

<h1 class="mb-8">{title}</h1>

{#each posts as { title, slug, date, desc }, index}
  {#if index}
    <hr class="my-6 border-green-100 opacity-25" />
  {/if}

  <article>
    <h2><a rel="prefetch" href="tulisan/{slug}" class="hover:underline py-2"> {title} </a></h2>
    <p class="my-2">{desc}</p>
    <small class="uppercase text-base font-bold"> — {formatDate(date)}</small>
  </article>
{/each}
