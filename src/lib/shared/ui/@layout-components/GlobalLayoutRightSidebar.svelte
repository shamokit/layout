<script lang="ts">
	import { GLOBAL_LAYOUT_AREAS } from './GlobalLayout.svelte';
	import type { Snippet } from 'svelte';

	let {
		sidebarContent = undefined
	}: {
		sidebarContent?: Snippet<
			[
				{
					rightSidebar: {
						tag: 'aside';
						props: typeof GLOBAL_LAYOUT_AREAS.RIGHT_SIDEBAR;
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
	rightSidebar: {
		tag: 'aside',
		props: {
			...GLOBAL_LAYOUT_AREAS.RIGHT_SIDEBAR
		}
	},
	label: {
		props: {
			id: uniqueId
		}
	}
})}
