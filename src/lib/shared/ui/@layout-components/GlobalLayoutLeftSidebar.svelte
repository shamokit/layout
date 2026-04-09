<script lang="ts">
	import { GLOBAL_LAYOUT_AREAS } from './GlobalLayout.svelte';
	import type { Snippet } from 'svelte';

	let {
		sidebarContent = undefined
	}: {
		sidebarContent?: Snippet<
			[
				{
					leftSidebar: {
						tag: 'aside';
						props: typeof GLOBAL_LAYOUT_AREAS.LEFT_SIDEBAR & {
							'aria-labelledby': string;
						};
					};
					label: {
						props: {
							id: string;
						};
					};
				}
			]
		>;
	} = $props();
	const uniqueId = $props.id();
</script>

{@render sidebarContent?.({
	leftSidebar: {
		tag: 'aside',
		props: {
			...GLOBAL_LAYOUT_AREAS.LEFT_SIDEBAR,
			'aria-labelledby': uniqueId
		}
	},
	label: {
		props: {
			id: uniqueId
		}
	}
})}
