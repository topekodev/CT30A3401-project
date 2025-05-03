<script lang="ts">
import '$lib/styles/app.css';
import Navbar from '$lib/components/Navbar.svelte';
</script>

<svelte:head>
  <meta name="viewport" content="width=device-width, height=device-height, target-densitydpi=device-dpi, initial-scale=1.0">
</svelte:head>

<Navbar />
<main id="main">
  <slot />
</main>

<style lang="scss">
main {
  margin: 0;
  padding: 0;
}
</style>
