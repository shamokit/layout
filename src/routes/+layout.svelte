<script lang="ts">
	import { page } from '$app/state';
	import GlobalLayout from '$lib/shared/ui/@layout-components/GlobalLayout/GlobalLayout.svelte';
	import './app.css';

	let { children } = $props();
	const pageRouteId = $derived(page.route.id);
</script>

<!-- メタはapp.d.tsのPageDataで型を共有し、+page.server.tsで設定する。 -->
<!-- メタにデフォルトを設定する場合は+layout.server.tsに書いてマージすることができるが、継承したくない場合も想定されるので、各ページの+page.svelteに書いた方がいいかもしれない。メタの設定はページの責務なのでその方が自然かもしれない。 -->
<svelte:head>
	{#if 'meta' in page.data && 'title' in page.data.meta}
		<title>{page.data.meta.title}</title>
	{/if}
</svelte:head>
<GlobalLayout {pageRouteId}>
	{@render children()}
</GlobalLayout>
