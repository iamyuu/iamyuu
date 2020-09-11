<script>
  import talks from './_data.yml';
  import { formatDate } from '../../utils';
  import SEO from '../../components/seo.svelte';

  const title = 'Berbicara';
</script>

<style>
  h3 {
    @apply mb-1;
  }
</style>

<SEO {title} />

<article class="prose prose-xl">
  {#each talks as { title, date, formats }}
    <section>
      <h3 class="leading-tight">{title}</h3>
      <small class="block uppercase text-sm font-bold">{formatDate(date)}</small>

      <span class="leading-none">
        {#each formats as { text, url }, index}
          {#if index}
            <span>&bull;</span>
          {/if}

          <a href={url} target="_blank" rel="noopener noreferrer" class="mr-1 text-lg">
            {text}
          </a>
        {/each}
      </span>
    </section>
  {/each}
</article>
