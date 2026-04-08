<script lang="ts">
	import { LAYOUT1_AREAS } from './Layout1.svelte';
	import type { Snippet } from 'svelte';

	let {
		children = undefined
	}: {
		children?: Snippet;
	} = $props();
</script>

<main {...LAYOUT1_AREAS.MAIN}>
	<div class="grid" {...LAYOUT1_AREAS.INNER}>
		{@render children?.()}
	</div>
</main>
