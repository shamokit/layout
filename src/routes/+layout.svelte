<script lang="ts">
	import { page } from '$app/state';
	import './layout.css';
	let { children } = $props();
</script>

<svelte:head>
	{#if 'meta' in page.data && 'title' in page.data.meta}
		<title>{page.data.meta.title}</title>
	{/if}
</svelte:head>

<div class="contents" data-page-id={page.route.id}>
	{@render children()}
</div>
