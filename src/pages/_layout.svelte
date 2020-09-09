<script>
  import Header from '../components/header.svelte';
  import Footer from '../components/footer.svelte';

  export let segment;
</script>

<Header {segment} />

<main class="px-6 md:px-20 lg:px-64">
  <slot />
</main>

<Footer />
