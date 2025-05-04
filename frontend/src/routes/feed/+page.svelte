<script lang="ts">
import '$lib/styles/app.css';
import Post from '$lib/components/Post.svelte';

let posts: [] = [];
let writerInput: string;

async function getPosts() {

}

const handleWriterPost = async () => {
  const body = JSON.stringify({
    "text": writerInput
  });
  console.log(body);
  writerInput = "";
  getPosts();
}
</script>

<div class="page">
  <div class="container">
    <div class="writer">
      <textarea bind:value={writerInput} placeholder="Yap about something" rows=3></textarea>
      <button on:click={handleWriterPost}>Post</button>
    </div>
    <div class="content">
      <Post user="Pekka" text="Lorem ipsum dolor sit amet. 1" />
      <Post user="Tiivi" text="Lorem ipsum dolor sit amet. 2" />
      <Post user="Taavi" text="Lorem ipsum dolor sit amet. 3" />
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
