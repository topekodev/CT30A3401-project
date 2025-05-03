<script lang="ts">
import '$lib/styles/app.css';

export let user: string;
export let text: string;
</script>

<div class="post">
  <p class="label-medium-txt">{user}</p>
  <p class="body-txt">{text}</p>
</div>

<style lang="scss">
h1, h2, h3, p {
  color: var(--primary);
}
.post {
  padding: 10px 0 10px 0;
  border-bottom: 1px solid var(--border);
}
</style>
