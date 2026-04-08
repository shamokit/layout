<script lang="ts">
	import { LAYOUT1_AREAS } from './GlobalLayout1.svelte';
	import type { Snippet } from 'svelte';

	let {
		banner,
		sitemap
	}: {
		banner?: Snippet;
		sitemap?: Snippet;
	} = $props();
	const uniqueId = $props.id();
</script>

<footer {...LAYOUT1_AREAS.FOOTER} class="py-5 bg-gray-100 items-center" aria-labelledby={uniqueId}>
	{#if banner}
		<div {...LAYOUT1_AREAS.INNER}>
			{@render banner?.()}
		</div>
	{/if}
	<div class="grid grid-cols-[1fr_auto_1fr] gap-4" {...LAYOUT1_AREAS.INNER}>
		<p id={uniqueId} class="sr-only">global</p>
		<p>Logo</p>
		{@render sitemap?.()}
		<p><small>Copyright &copy; {new Date().getFullYear()} Company</small></p>
	</div>
</footer>
