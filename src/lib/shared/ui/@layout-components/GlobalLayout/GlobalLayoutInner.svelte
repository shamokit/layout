<script lang="ts">
	import { GLOBAL_LAYOUT_AREAS } from './GlobalLayout.svelte';
	import type { Snippet } from 'svelte';

	let {
		inner = undefined
	}: {
		inner?: Snippet<[typeof GLOBAL_LAYOUT_AREAS.INNER]>;
	} = $props();
</script>

{@render inner?.(GLOBAL_LAYOUT_AREAS.INNER)}
