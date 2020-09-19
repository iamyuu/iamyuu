<script>
  import talks from './_data.yml';
  import { formatDate } from '../../utils';
  import SEO from '../../components/seo.svelte';
</script>

<style>
  h3 {
    @apply mb-1;
  }

  .dot {
    @apply ml-2;
    @apply mr-1;
  }
</style>

<SEO title='Talk' />

<article class="prose prose-xl">
  {#each talks as { title, date, formats }}
    <section>
      <h3 class="leading-tight">{title}</h3>
      <small class="block uppercase font-bold">{formatDate(date)}</small>

      <span class="leading-none">
        {#each formats as { text, url }, index}
          {#if index}
            <span class="dot">&bull;</span>
          {/if}

          <a href={url} target="_blank" rel="noopener noreferrer">{text}</a>
        {/each}
      </span>
    </section>
  {/each}
</article>
