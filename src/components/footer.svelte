<script>
  import Facebook from './icons/facebook.svelte';
  import Twitter from './icons/twitter.svelte';
  import Instagram from './icons/instagram.svelte';
  import Linkedin from './icons/linkedin.svelte';
  import Github from './icons/github.svelte';
  import Mail from './icons/mail.svelte';
  import RSS from './icons/rss.svelte';

  const icons = [
    { icon: Mail, url: 'mailto:iamyuu027@gmail.com' },
    { icon: Linkedin, url: 'https://linkedin.com/in/iamyuu' },
    { icon: Facebook, url: 'https://facebook.com/iamyuu027' },
    { icon: Instagram, url: 'https://instagram.com/iamyuu027' },
    { icon: Twitter, url: 'https://twitter.com/iamyuu027' },
    { icon: Github, url: 'https://github.com/iamyuu' },
    { icon: RSS, url: '/rss' }
  ];
</script>

<footer class="text-gray-300 my-4 mx-auto py-4 px-8 text-center">
  <section class="mb-4">
    {#each icons as { url: href, icon: Icon }}
      <a {href} target="_blank" rel="noopener noreferrer" class="m-2">
        <Icon />
      </a>
    {/each}
  </section>

  <span class="text-base">
    &copy; {new Date().getFullYear()} iamyuu.dev &bull; Ditenagai oleh <a href="https://sapper.svelte.dev" target="_blank" rel="noopener noreferrer">Sapper</a>
  </span>
</footer>
