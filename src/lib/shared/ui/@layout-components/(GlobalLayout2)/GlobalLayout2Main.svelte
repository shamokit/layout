<script lang="ts">
	import { LAYOUT2_AREAS } from './GlobalLayout2.svelte';
	import type { Snippet } from 'svelte';

	let {
		children = undefined
	}: {
		children?: Snippet;
	} = $props();
</script>

<main {...LAYOUT2_AREAS.MAIN}>
	<div class="grid place-items-start place-content-start" {...LAYOUT2_AREAS.INNER}>
		{@render children?.()}
	</div>
</main>
