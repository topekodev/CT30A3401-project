<script lang="ts">
import '$lib/styles/app.css';
</script>

<div class="page">
  <div class="container">
    <div class="content">
      <h1>Hello world</h1>
    </div>
  </div>
</div>

<style lang="scss">
h1, h2, h3, p {
  color: var(--primary);
}
.content {
  h2 {
    margin: 30px 0 30px 0;
  }
  p {

  }
}
@media (min-width: 768px) {
  .content {
    padding: 30px 0 30px 0;
    h2 {
      max-width: 500px;
    }
  }
}
</style>
