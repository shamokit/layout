<script lang="ts">
	import type { Snippet } from 'svelte';
	import { fetchAboutBannerData } from '../../api/fetchAboutBannerData/fetchAboutBannerData.remote';

	const banner = await fetchAboutBannerData();
	let { children }: { children: Snippet<[Awaited<ReturnType<typeof fetchAboutBannerData>>]> } =
		$props();
</script>

{@render children(banner)}
