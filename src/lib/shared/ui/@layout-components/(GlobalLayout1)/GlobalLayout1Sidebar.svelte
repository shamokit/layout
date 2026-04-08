<script lang="ts">
	import { LAYOUT1_AREAS } from './GlobalLayout1.svelte';
	import type { Snippet } from 'svelte';

	let {
		sidebar = undefined
	}: {
		sidebar?: Snippet;
	} = $props();
</script>

<aside {...LAYOUT1_AREAS.SIDEBAR}>
	{@render sidebar?.()}
</aside>
