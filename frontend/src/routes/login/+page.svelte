<script lang="ts">
import '$lib/styles/app.css';
import { apiPost } from '$lib/utils/api';

let username: string;
let password: string;

const handleLogin = async () => {
  const body = JSON.stringify({
    "username": username,
    "password": password
  });
  const headers = {
    'Content-Type': 'application/json'
  };
  const response = await apiPost("user/login", body, headers);
  console.log(response);
}
</script>

<div class="page">
  <div class="container">
    <div class="login-box">
      <h1>Login</h1>
      <input bind:value={username} type="text" placeholder="Username">
      <input bind:value={password} type="password" placeholder="Password">
      <button on:click={handleLogin}>Login</button>
    </div>
  </div>
</div>

<style lang="scss">
h1, h2, h3, p {
  color: var(--primary);
}
.login-box {
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
