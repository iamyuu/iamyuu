<script>
  import Facebook from './icons/facebook.svelte';
  import Twitter from './icons/twitter.svelte';
  import Instagram from './icons/instagram.svelte';
  import Linkedin from './icons/linkedin.svelte';
  import Github from './icons/github.svelte';

  const icons = [
    { icon: Linkedin, url: 'https://linkedin.com/in/iamyuu' },
    { icon: Facebook, url: 'https://facebook.com/iamyuu027' },
    { icon: Instagram, url: 'https://instagram.com/iamyuu027' },
    { icon: Twitter, url: 'https://twitter.com/iamyuu027' },
    { icon: Github, url: 'https://github.com/iamyuu' }
  ];
</script>

<footer class="text-gray-300 my-4 mx-auto py-4 px-8 text-center">
  <div class="icons">
    {#each icons as { url, icon: Icon }}
      <a href={url} target="_blank" rel="noopener noreferrer" class="m-2">
        <Icon />
      </a>
    {/each}
  </div>

  <span class="text-base">
    &copy; {new Date().getFullYear()} iamyuu.dev &bull; Ditenagai oleh <a href="https://sapper.svelte.dev" target="_blank" rel="noopener noreferrer">Sapper</a>
  </span>
</footer>
