<script>
  import Facebook from './icons/facebook.svelte';
  import Twitter from './icons/twitter.svelte';
  import Instagram from './icons/instagram.svelte';
  import Linkedin from './icons/linkedin.svelte';
  import Github from './icons/github.svelte';
  import Mail from './icons/mail.svelte';

  const icons = [
    {
      icon: Mail,
      label: 'Mail',
      url: 'mailto:iamyuu027@gmail.com'
    },
    {
      icon: Linkedin,
      label: 'Linkedin',
      url: 'https://linkedin.com/in/iamyuu'
    },
    {
      icon: Facebook,
      label: 'Facebook',
      url: 'https://facebook.com/iamyuu027'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      url: 'https://instagram.com/iamyuu027'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      url: 'https://twitter.com/iamyuu027'
    },
    {
      icon: Github,
      label: 'Github',
      url: 'https://github.com/iamyuu'
    }
  ];
</script>

<style>
  :global(.feather) {
    @apply inline-block;
  }

  :global(.feather):hover {
    @apply opacity-75;
  }
</style>

<footer class="text-gray-300 my-4 mx-auto py-4 px-8 text-center">
  <section class="mb-4">
    {#each icons as { url: href, icon: Icon, label }}
      <a {href} target="_blank" rel="noopener noreferrer" aria-label={label} class="m-2">
        <Icon />
      </a>
    {/each}
  </section>

  <span class="text-base">
    &copy; {new Date().getFullYear()} iamyuu.dev &bull; Ditenagai oleh <a href="https://sapper.svelte.dev" target="_blank" rel="noopener noreferrer">Sapper</a>
  </span>
</footer>
