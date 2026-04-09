<script lang="ts">
	import { GLOBAL_LAYOUT_AREAS } from './GlobalLayout.svelte';
	import type { Snippet } from 'svelte';

	let {
		contents = undefined
	}: {
		contents?: Snippet<[typeof GLOBAL_LAYOUT_AREAS.CONTENTS]>;
	} = $props();
</script>

{@render contents?.(GLOBAL_LAYOUT_AREAS.CONTENTS)}
