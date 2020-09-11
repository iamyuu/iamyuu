<script>
  import SEO from '../components/seo.svelte';

  export let status;
</script>

<SEO title={status} />

<article class="mt-12 prose prose-xl">
  <h1>{status}</h1>

  {#if status === 404}
    <p>Halaman yang kamu cari sepertinya ga ada deh, coba di cek lagi urlnya</p>
  {:else}
    <p>Sepertinya ada masalah, tapi ini juga bisa jadi karena koneksi jaringan kamu</p>
  {/if}
</article>
