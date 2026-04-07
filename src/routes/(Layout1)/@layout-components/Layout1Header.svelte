<script lang="ts">
	import { LAYOUT1_AREAS } from './Layout1.svelte';
	import type { Snippet } from 'svelte';

	let {
		navigation = undefined
	}: {
		navigation?: Snippet;
	} = $props();
	const uniqueId = $props.id();
</script>

<header
	{...LAYOUT1_AREAS.HEADER}
	class="py-5 bg-white border-b border-gray-200 items-center"
	aria-labelledby={uniqueId}
>
	<div class="grid grid-cols-[1fr_auto_1fr] gap-4" {...LAYOUT1_AREAS.INNER}>
		<p id={uniqueId} class="sr-only">global</p>
		<p>Logo</p>
		{@render navigation?.()}
	</div>
</header>
