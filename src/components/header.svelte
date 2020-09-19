<script>
  export let segment;
</script>

<style>
  a {
    @apply no-underline;
    @apply block;
    @apply relative;
    @apply py-2;
    @apply px-1;
  }

  a:not(.site-name) {
    @apply ml-4;
  }

  a:not(.active):not(.site-name) {
    opacity: 0.7;
  }

  a::before {
    content: '';
    @apply absolute;
    @apply left-0;
    @apply bottom-0;
    @apply bg-gray-100;
    @apply w-full;
    height: 2px;
    transition: transform 0.3s ease;
    transform: scaleX(0);
  }

  a:not(.site-name):hover::before,
  .active::before {
    transform: scaleX(1);
  }

  .active::before {
    background: theme('textColor.gray.200');
  }
</style>

<header class="flex mx-auto py-6 px-6 md:px-20 lg:px-32 font-semibold">
  <a href="/" class="site-name ml-0 font-bold">iamyuu.dev</a>

  <nav class="flex flex-1 items-end justify-end uppercase">
    <a href="about" class:active={segment === 'about'}>about</a>
    <a href="article" class:active={segment === 'article'}>article</a>
    <a href="talk" class:active={segment === 'talk'}>talk</a>
  </nav>
</header>
