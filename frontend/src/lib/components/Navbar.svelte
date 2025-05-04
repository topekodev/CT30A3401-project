<script lang="ts">
import '$lib/styles/app.css';
import { browser } from '$app/environment';

let hasCookie = false;

$: if (browser) {
  hasCookie = document.cookie.includes('token=');
}
</script>

<nav>
  <div class="container">
    <a href="/" class="logo"><span>Yapper</span></a>

    <!-- Burger menu -->
    <input type="checkbox" id="pages-input">
    <label for="pages-input" id="pages-button">
      <div class="bar1"></div>
      <div class="bar2"></div>
      <div class="bar3"></div>
    </label>

    <!-- Pages -->
    <ul>
      <li>
        <a href="/feed" class="body-txt">Feed</a>
      </li>
      {#if hasCookie}
      <li>
        <a href="/register" class="body-txt">Register</a>
      </li>
      <li>
        <a href="/login" class="body-txt">Login</a>
      </li>
      {:else}
      <li>
        <a href="/logout" class="body-txt">Logout</a>
      </li>
      {/if}
    </ul>
  </div>
</nav>

<style lang="scss">
nav {
  position: fixed;
  z-index: 10;
  width: 100%;
  height: var(--nav-height);
  margin: 0;
  padding: 0;
  background-color: var(--base);
  border-bottom: 1px solid var(--border);
}
.logo {
  line-height: var(--nav-height);
  float: left;
  text-decoration: none;
  color: var(--primary);
  font-size: 1.9em;
  font-weight: 600;
}
ul {
  display: block;
  list-style-type: none;
  float: right;
  margin: 0;
  padding: 0;
}
li {
  text-align: center;
  float: left;
  display: block;
  margin-left: 4rem;
  font-weight: 500;
}
li a {
  line-height: var(--nav-height);
  text-decoration: none;
  display: block;
  color: var(--primary);
}
#pages-button {
  display: none;
  height: var(--nav-height);
  width: 30px;
  padding: 1.5em 0;
  float: right;
  cursor: pointer;
}
#pages-input {
  display: none;
}
.bar1, .bar2, .bar3 {
  width: 100%;
  height: 3px;
  background-color: var(--primary);
  margin: 5px 0;
  transition: 0.1s;
  border-radius: 2px;
}
/* Responsive view */
@media (max-width: 768px) {
  ul {
    visibility: hidden;
    padding-top: var(--nav-height);
    height: 200vh;
    opacity: 0;
    position: fixed;
    left: 0;
    width: 100%;
    background-color: var(--base);
  }
  li {
    float: none;
    text-align: left;
    margin: 0;
    padding: 5px var(--container-padding) 5px var(--container-padding);
    border-bottom: 1px solid var(--border-light);
  }
  li a {
    width: 100%;
    line-height: 50px;
    font-size: var(--label-medium-size);
  }
  #pages-button {
    position: static;
    display: block;
    margin-left: 10px;
  }
  /* Logic for mobile menu */
  #pages-input:checked ~ ul {
    visibility: visible;
    opacity: 1;
    transition: opacity .2s, visibility .2s;
  }
  #pages-input:checked ~ #pages-button {
    position: relative;
    z-index: 2;
  }

  /* Rotate bars */
  #pages-input:checked ~ #pages-button > .bar1 {
    transform: translate(0, 8px) rotate(-45deg);
  }
  #pages-input:checked ~ #pages-button > .bar2 {
    opacity: 0;
  }
  #pages-input:checked ~ #pages-button > .bar3 {
    transform: translate(0, -8px) rotate(45deg);
  }
}
</style>
