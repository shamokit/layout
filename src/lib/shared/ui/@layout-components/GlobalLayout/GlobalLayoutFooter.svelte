<script lang="ts">
	import { GLOBAL_LAYOUT_AREAS } from './GlobalLayout.svelte';
	import type { Snippet } from 'svelte';

	let {
		children
	}: {
		children?: Snippet<
			[
				{
					footer: {
						tag: 'footer';
						props: typeof GLOBAL_LAYOUT_AREAS.FOOTER & {
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
	footer: {
		tag: 'footer',
		props: {
			...GLOBAL_LAYOUT_AREAS.FOOTER,
			'aria-labelledby': uniqueId
		}
	},
	label: {
		props: {
			id: uniqueId
		}
	}
})}
