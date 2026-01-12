<script lang="ts">
	import { onMount, type Snippet } from 'svelte';

	let {
		main,
		footer,
	}: {
		main: Snippet;
		footer?: Snippet;
	} = $props();

	onMount(() => {
		console.log('Layout2 mounted');
	});
</script>

<div class="layout">
	<header>
		<p>Logo</p>
	</header>
	<div class="flex flex-1">
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
</style>
