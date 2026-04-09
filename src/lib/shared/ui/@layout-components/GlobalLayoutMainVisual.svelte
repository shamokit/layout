<script lang="ts">
	import { GLOBAL_LAYOUT_AREAS } from './GlobalLayout.svelte';
	import type { Snippet } from 'svelte';

	let {
		mainVisual = undefined
	}: {
		mainVisual?: Snippet<[typeof GLOBAL_LAYOUT_AREAS.MAIN_VISUAL]>;
	} = $props();
</script>

{@render mainVisual?.(GLOBAL_LAYOUT_AREAS.MAIN_VISUAL)}
