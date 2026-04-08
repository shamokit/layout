<script lang="ts" module>
	export const LAYOUT2_AREAS = {
		HEADER: {
			'data-layout2-area': 'header'
		},
		MAIN: {
			'data-layout2-area': 'main'
		},
		FOOTER: {
			'data-layout2-area': 'footer'
		},
		INNER: {
			'data-layout2-area': 'inner'
		}
	} as const;
</script>

<script lang="ts">
	import { onMount, type Snippet } from 'svelte';
	import Layout2Header from './Layout2Header.svelte';
	import Layout2Main from './Layout2Main.svelte';
	import Layout2Footer from './Layout2Footer.svelte';
	let {
		main
	}: {
		main: Snippet;
	} = $props();

	onMount(() => {
		console.log('Layout2 mounted');
	});
</script>

<div class="grid-cols-subgrid min-h-dvh" data-layout2-area="root">
	<Layout2Header />
	<Layout2Main>
		{@render main()}
	</Layout2Main>
	<Layout2Footer />
</div>

<style>
	[data-layout2-area='root'] {
		--layout2-space-content-x: var(--override-layout2-space-content-x, 1rem);
		--layout2-space-between-sidebar-content-x: var(
			--override-layout2-space-between-sidebar-content-x,
			1rem
		);
		display: grid;
		grid-template:
			'header header header' auto
			'main main main' 1fr
			'footer footer footer' auto
			/ var(--layout2-space-content-x) 1fr var(--layout2-space-content-x);
	}
	[data-layout2-area='root'] :global([data-layout2-area='header']) {
		display: grid;
		grid-area: header;
		grid-template-columns: subgrid;
	}
	[data-layout2-area='root'] :global([data-layout2-area='main']) {
		display: grid;
		grid-area: main;
		grid-template-columns: subgrid;
	}
	[data-layout2-area='root'] :global([data-layout2-area='footer']) {
		display: grid;
		grid-area: footer;
		grid-template-columns: subgrid;
	}
	[data-layout2-area='root'] :global([data-layout2-area='inner']) {
		grid-column: 2/-2;
	}
</style>
