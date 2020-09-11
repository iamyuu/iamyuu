<script>
  import { stores } from '@sapper/app';
  import Header from '../components/header.svelte';
  import Footer from '../components/footer.svelte';
  import PreloadIndicator from '../components/preloading-indicator.svelte';

  export let segment;

  const { preloading } = stores();
</script>

{#if $preloading}
  <PreloadIndicator />
{/if}

<Header {segment} />

<main class="px-6 md:px-20 lg:px-64">
  <slot />
</main>

<Footer />
