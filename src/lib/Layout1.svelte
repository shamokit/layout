<script lang="ts">
	import { onMount, type Snippet } from 'svelte';

	let {
		main,
		navigation = undefined,
		footer = undefined,
		sidebar = undefined,
	}: {
		main: Snippet;
		navigation?: Snippet;
		footer?: Snippet;
		sidebar?: Snippet;
	} = $props();

	onMount(() => {
		console.log('Layout1 mounted');
	});
</script>

<div class="layout">
	<header>
		<p>Logo</p>
		{@render navigation?.()}
	</header>
	<div class="flex flex-1">
		{#if sidebar}
			<aside class="sidebar">
				{@render sidebar()}
			</aside>
		{/if}
		<main>
			{@render main()}
		</main>
	</div>
	<footer>
		{@render footer?.()}
		<p><small>Copyright &copy; {new Date().getFullYear()} Company</small></p>
	</footer>
</div>

<style>
	.layout {
		display: grid;
		grid-area:
			'header header' auto,
			'main main' 1fr,
			'footer footer' auto;
	}
	.layout:has(.sidebar) {
		grid-area:
			'header header' auto,
			'sidebar main' 1fr,
			'footer footer' auto;
	}
</style>
