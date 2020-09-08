<script>
  import { stores } from '@sapper/app';

  const { page } = stores();

  const siteName = 'iamyuu.dev';
  const siteUrl = 'https://iamyuu.dev';

  export let title;
  export let keywords;
  export let thumbnail;
  export let description = 'Personal website by Yusuf (@iamyuu)';
</script>

<svelte:head>
  <title>{title ? `${title} - ${siteName}` : siteName}</title>
  <meta name="description" content={description} />
  <meta name="keywords" content={keywords} />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="{siteUrl}{$page.path}" />
  <meta property="og:title" content={title || siteName} />
  <meta property="og:description" content={description} />
  {#if thumbnail}
    <meta property="og:image" content={thumbnail} />
  {/if}

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="{siteUrl}{$page.path}" />
  <meta property="twitter:title" content={title || siteName} />
  <meta property="twitter:description" content={description} />
  {#if thumbnail}
    <meta property="twitter:image" content={thumbnail} />
  {/if}
</svelte:head>
