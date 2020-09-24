<script>
  import { onMount, onDestroy } from 'svelte';

  let p = 0;
  let visible = false;

  function next() {
    p += 0.1;
    visible = true;

    const remaining = 1 - p;
    if (remaining > 0.15) setTimeout(next, 500 / remaining);
  }

  onMount(() => {
    setTimeout(next, 250);
  });

  onDestroy(() => {
    clearTimeout(next);
  });
</script>

<style>
  .progress-container {
    @apply absolute;
    @apply top-0;
    @apply left-0;
    @apply w-full;
    height: 5px;
    z-index: 999;
  }

  .progress {
    @apply absolute;
    @apply top-0;
    @apply left-0;
    @apply h-full;
    @apply bg-gray-200;
    transition: width 0.5s;
  }

  .fade {
    @apply fixed;
    @apply w-full;
    @apply h-full;
    @apply pointer-events-none;
    background-color: rgba(255, 255, 255, 0.3);
    z-index: 998;
    animation: fade 0.5s;
  }

  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>

{#if visible}
  <div class="progress-container">
    <div class="progress" style="width: {p * 100}%" />
  </div>
{/if}

{#if p >= 0.5}
  <div class="fade" />
{/if}
