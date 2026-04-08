<script lang="ts" module>
	export const LAYOUT1_AREAS = {
		HEADER: {
			'data-layout1-area': 'header'
		},
		MAIN: {
			'data-layout1-area': 'main'
		},
		SIDEBAR: {
			'data-layout1-area': 'sidebar'
		},
		FOOTER: {
			'data-layout1-area': 'footer'
		},
		INNER: {
			'data-layout1-area': 'inner'
		}
	} as const;
</script>

<script lang="ts">
	import { onMount, type Snippet } from 'svelte';
	import Layout1Header from './GlobalLayout1Header.svelte';
	import Layout1Footer from './GlobalLayout1Footer.svelte';
	import Layout1Main from './GlobalLayout1Main.svelte';
	import Layout1Sidebar from './GlobalLayout1Sidebar.svelte';

	let {
		main,
		navigation,
		banner,
		sidebar
	}: {
		main: Snippet;
		navigation?: Snippet;
		banner?: Snippet;
		sidebar?: Snippet;
	} = $props();

	onMount(() => {
		console.log('Layout1 mounted');
	});
</script>

<div class="grid-cols-subgrid min-h-dvh" data-layout1-area="root">
	<Layout1Header {navigation} />
	<Layout1Sidebar {sidebar} />
	<Layout1Main>
		{@render main()}
	</Layout1Main>
	<Layout1Footer {banner} />
</div>

<style>
	[data-layout1-area='root'] {
		--layout1-space-content-x: var(--override-layout1-space-content-x, 1rem);
		--layout1-space-between-sidebar-content-x: var(
			--override-layout1-space-between-sidebar-content-x,
			1rem
		);
		display: grid;
		grid-template:
			'header header header' auto
			'main main main' 1fr
			'footer footer footer' auto
			/ var(--layout1-space-content-x) 1fr var(--layout1-space-content-x);
	}
	[data-layout1-area='root']:has(:global([data-layout1-area='sidebar']:not(:empty))) {
		grid-template:
			'header header header header header' auto
			'sidebar sidebar main main main' 1fr
			'footer footer footer footer footer' auto
			/ var(--layout1-space-content-x) minmax(200px, 20%) var(
				--layout1-space-between-sidebar-content-x
			)
			1fr var(--layout1-space-content-x);
	}
	[data-layout1-area='root'] :global([data-layout1-area='header']) {
		display: grid;
		grid-area: header;
		grid-template-columns: subgrid;
	}
	[data-layout1-area='root'] :global([data-layout1-area='main']) {
		display: grid;
		grid-area: main;
		grid-template-columns: subgrid;
	}
	[data-layout1-area='root'] :global([data-layout1-area='sidebar']) {
		display: grid;
		grid-area: sidebar;
		grid-template-columns: subgrid;
	}
	[data-layout1-area='root'] :global([data-layout1-area='footer']) {
		display: grid;
		grid-area: footer;
		grid-template-columns: subgrid;
	}
	[data-layout1-area='root'] :global([data-layout1-area='inner']) {
		grid-column: 2/-2;
	}
</style>
