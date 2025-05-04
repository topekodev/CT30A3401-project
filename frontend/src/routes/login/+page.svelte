<script lang="ts">
import '$lib/styles/app.css';
import { goto } from '$app/navigation';
import { browser } from '$app/environment';

export let form;

$: {
  if (browser && form?.success) {
    goto('/feed');
  }
}
</script>

<div class="page">
  <div class="container">
      <form method="POST" action="?/login">
        <h1>Login</h1>
        <input type="text" id="username" name="username" placeholder="Username" />
        <input type="password" id="password" name="password" placeholder="Password" />
        <button type="submit">Login</button>

        {#if form?.invalid}
          <p class="body-txt error">Invalid username or password.</p>
        {/if}

        {#if form?.incorrect}
          <p class="body-txt error">Incorrect username or password.</p>
        {/if}
      </form>
  </div>
</div>

<style lang="scss">
h1, h2, h3, p {
  color: var(--primary);
}
form {
  margin: 50px auto 0 auto;
  width: 250px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  input {
    border: 1px solid var(--border);
    padding: 10px;
    border-radius: 5px;
    background-color: var(--secondary);
    color: var(--primary);
    font-size: var(--body-size);
    font-weight: var(--body-weight);
  }
  button {
    border: 1px solid var(--border);
    padding: 15px;
    border-radius: 5px;
    background-color: var(--primary);
    color: var(--secondary);
    cursor: pointer;
  }
}
</style>
