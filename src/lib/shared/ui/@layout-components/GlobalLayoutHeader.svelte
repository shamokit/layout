<script lang="ts">
	import { GLOBAL_LAYOUT_AREAS } from './GlobalLayout.svelte';
	import type { Snippet } from 'svelte';

	let {
		children = undefined
	}: {
		children?: Snippet<
			[
				{
					header: {
						tag: 'header';
						props: typeof GLOBAL_LAYOUT_AREAS.HEADER & {
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

{@render children?.({
	header: {
		tag: 'header',
		props: {
			...GLOBAL_LAYOUT_AREAS.HEADER,
			'aria-labelledby': uniqueId
		}
	},
	label: {
		props: {
			id: uniqueId
		}
	}
})}
