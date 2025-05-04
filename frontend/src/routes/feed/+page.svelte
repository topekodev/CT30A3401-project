<script lang="ts">
import '$lib/styles/app.css';
import Post from '$lib/components/Post.svelte';
import { apiGet, apiPost } from '$lib/utils/api';
import { page } from '$app/stores';
import { onMount } from 'svelte';
import { jwtDecode } from 'jwt-decode';

let posts: [] = [];
let writerInput: string;

let jwt_token: string | null;
let username: string | null;
onMount(() => {
  jwt_token = $page.data.token;
  username = $page.data.username;
  getPosts();
});

async function getPosts() {
  const response = await apiGet("post");
  const data = await response.json();
  posts = data.posts.reverse();
}

const handleWriterPost = async () => {
  if (jwt_token && username) {
    const decoded = jwtDecode(jwt_token);
    const body = JSON.stringify({
      "name": writerInput,
      "user": decoded.id
    });
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${jwt_token}`
    };
    const path = "post/" + decoded.id;
    const response = await apiPost(path, body, headers);
    writerInput = "";
    getPosts();
  }
}
</script>

<div class="page">
  <div class="container">
    <div class="writer">
      <textarea bind:value={writerInput} placeholder="Yap about something" rows=3></textarea>
      <button on:click={handleWriterPost}>Post</button>
    </div>
    <div class="content">
      {#each posts as post}
        <Post user={post.user} text={post.name} />
      {/each}
    </div>
  </div>
</div>

<style lang="scss">
h1, h2, h3, p {
  color: var(--primary);
}
.writer {
  margin: 50px 0 10px 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
  textarea {
    border: none;
    background: none;
    resize: none;
    font-size: var(--body-size);
    font-weight: var(--body-weight);
    color: var(--primary);
  }
  button {
    width: 100px;
    border: 1px solid var(--border);
    padding: 10px;
    border-radius: 5px;
    background-color: var(--primary);
    color: var(--secondary);
    cursor: pointer;
  }
}
.content {
  h2 {
    margin: 30px 0 30px 0;
  }
  p {

  }
}
</style>
