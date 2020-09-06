<script>
  import talks from './_data.yml';
  import { formatDate } from '../../utils';
  import SEO from '../../components/seo.svelte';

  const title = 'Berbicara';
</script>

<SEO {title} />

<h1 class="mb-8">{title}</h1>

{#each talks as { title, date, formats }}
  <div class="mt-6">
    <h2 class="leading-tight">{title}</h2>
    <small class="block uppercase text-sm font-bold">{formatDate(date)}</small>

    <span class="leading-none">
      {#each formats as { text, url }, index}
        {#if index}
          <span>&bull;</span>
        {/if}

        <a href={url} target="_blank" rel="noopener noreferrer" class="mr-1 text-lg">{text}</a>
      {/each}
    </span>
  </div>
{/each}
