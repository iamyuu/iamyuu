<script>
  import Header from '../components/header.svelte';
  import Footer from '../components/footer.svelte';

  export let segment;
</script>

<style global>
  /* purgecss start ignore */
  @import 'tailwindcss/base';

  @import 'tailwindcss/components';
  /* purgecss end ignore */

  @import 'tailwindcss/utilities';

  h1 {
    @apply text-4xl;
  }

  h2 {
    @apply text-3xl;
  }

  h3 {
    @apply text-2xl;
  }

  p,
  ul,
  ol,
  span {
    @apply text-xl;
    @apply my-5;
  }

  li {
    @apply my-4;
  }

  img {
    @apply w-full;
  }

  svg {
    @apply inline-block;
  }

  p a,
  span a {
    box-shadow: inset 0 -0.12em 0 theme('textColor.primary');
    -webkit-transition: box-shadow 0.2s ease-in-out, color 0.2s ease-in-out;
    transition: box-shadow 0.2s ease-in-out, color 0.2s ease-in-out;
  }

  p a:hover,
  span a:hover {
    box-shadow: inset 0 -1.5em 0 theme('textColor.primary');
    color: theme('backgroundColor.primary');
  }
</style>

<Header {segment} />

<main class="px-6 md:px-20 lg:px-64">
  <slot />
</main>

<Footer />
