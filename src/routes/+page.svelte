<script lang="ts">
	import {writable, type Writable} from "svelte/store";
  import {fade} from "svelte/transition";

  const count: Writable<number> = writable(0);
  const items: {id: string; name: string; price: number}[] = [
    {
      id: "jsdosijojb",
      name: "donut",
      price: 2.5
    },
    {
      id: "jsdb",
      name: "coffee",
      price: 3.1
    },
    {
      id: "jsdosijojbsdsd",
      name: "pizza",
      price: 10.5
    },
  ];

  function addCount(): void
  {
    console.log(1);
    $count++;
  }
</script>

<div
  class="
    container rounded mt-10 bg-c30 flex gap-2 p-4 text-xl justify-center
    items-center flex-col
  "
>
  <!-- <div>Counter</div>
  <div>{$count}</div>

  <button
    on:click={addCount}
    class="font-bold p-2 rounded border bg-c10 text-c10-text"
  >
    Count!
  </button>

  {#if $count > 5}
    <p>wow how many clicks</p>
  {/if} -->

  {#each items as {id, name, price}, i (id)}
    <div>{i} {id} {name} {price}</div>
  {/each}

  {#key $count}
    <div transition:fade>{$count}</div>
  {/key}
</div>
