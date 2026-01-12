<script lang="ts">
	import { page } from '$app/state';
	import './layout.css';
	import Layout1 from '$lib/Layout1.svelte';
	import Layout2 from '$lib/Layout2.svelte';
	import { Banner as AboutPageBanner } from './about/+page.svelte';
	import { getBanner } from './about/getBanner.remote';

	let { children } = $props();

	const pageSlug = $derived(page.url.pathname);
</script>

{#if pageSlug === '/' || pageSlug === '/about' || pageSlug === '/recruit'}
	<Layout1>
		{#snippet navigation()}
			<nav>
				<ul>
					<li><a href="/">Home</a></li>
					<li><a href="/about">About</a></li>
					<li><a href="/contact">Contact</a></li>
					<li><a href="/recruit">Recruit</a></li>
				</ul>
			</nav>
		{/snippet}
		{#snippet main()}
			{@render children()}
		{/snippet}
		{#snippet footer()}
			{#if pageSlug === '/about'}
				{@render AboutPageBanner({
					title: (await getBanner()).title,
					text: 'text',
				})}
			{/if}
		{/snippet}
	</Layout1>
{:else if pageSlug === '/contact'}
	<Layout2>
		{#snippet main()}
			{@render children()}
		{/snippet}
	</Layout2>
{:else}
	{@render children()}
{/if}
