<script lang="ts">
	import GlobalLayoutFooter from '$lib/shared/ui/@layout-components/GlobalLayoutFooter.svelte';
	import GlobalLayoutInner from '$lib/shared/ui/@layout-components/GlobalLayoutInner.svelte';
	import type { Snippet } from 'svelte';

	let { banner }: { banner?: Snippet } = $props();
</script>

<GlobalLayoutFooter>
	{#snippet children({ footer, label })}
		<footer {...footer.props}>
			<p {...label.props} class="sr-only">global</p>
			<GlobalLayoutInner>
				{#snippet inner(innerProps)}
					<div {...innerProps}>
						<p>Footer</p>
						{@render banner?.()}
					</div>
				{/snippet}
			</GlobalLayoutInner>
		</footer>
	{/snippet}
</GlobalLayoutFooter>
