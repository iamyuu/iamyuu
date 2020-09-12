<script>
  import MailIcon from './icons/mail.svelte';
  import FacebookIcon from './icons/facebook.svelte';
  import TwitterIcon from './icons/twitter.svelte';
  import GithubIcon from './icons/github.svelte';
  import FeedIcon from './icons/rss.svelte';

  const icons = [
    {
      icon: MailIcon,
      label: 'Email',
      url: 'mailto:hello@iamyuu.dev'
    },
    {
      icon: FacebookIcon,
      label: 'Facebook',
      url: 'https://facebook.com/iamyuu027'
    },
    {
      icon: GithubIcon,
      label: 'Github',
      url: 'https://github.com/iamyuu'
    },
    {
      icon: TwitterIcon,
      label: 'Twitter',
      url: 'https://twitter.com/iamyuu027'
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

  .powered-by {
    box-shadow: inset 0 -0.12em 0 theme('textColor.gray.200');
    transition: box-shadow 0.2s ease-in-out, color 0.2s ease-in-out;
  }

  .powered-by:hover {
    color: theme('backgroundColor.gray.900');
    box-shadow: inset 0 -1.5em 0 theme('textColor.gray.200');
  }
</style>

<footer class="text-gray-300 mt-12 mb-4 mx-auto py-4 px-8 text-center">
  <section class="mb-4">
    {#each icons as { url: href, icon: Icon, label }}
      <a {href} target="_blank" rel="noopener noreferrer" aria-label={label} class="m-2">
        <Icon />
      </a>
    {/each}
    <a href="/feed.xml" rel="alternate" type="application/rss+xml" aria-label="RSS Feed" class="m-2">
      <FeedIcon />
    </a>
  </section>

  <span class="text-base">
    &copy; {new Date().getFullYear()} iamyuu.dev &bull; Ditenagai oleh <a href="https://sapper.svelte.dev" target="_blank" rel="noopener noreferrer" class="powered-by">Sapper</a>
  </span>
</footer>
