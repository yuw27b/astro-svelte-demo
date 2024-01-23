<script>
  import { onMount } from "svelte";

  let currentTime = "";

  onMount(() => {
    const now = new Date();
    currentTime = now.toLocaleTimeString();
  });
</script>

<div>
  <p>Hello! This is Svelte component.</p>
  <p>{currentTime}</p>
</div>
