<script lang="ts">
	import type { Snippet } from 'svelte';
	import { getBanner } from '../api/getBanner.remote';

	const banner = await getBanner();
	let { children }: { children: Snippet<[Awaited<ReturnType<typeof getBanner>>]> } = $props();
</script>

{@render children(banner)}
