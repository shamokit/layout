<script lang="ts">
	import GlobalLayoutContents from '$lib/shared/ui/@layout-components/GlobalLayoutContents.svelte';
	import GlobalLayoutHeader from '$lib/shared/ui/@layout-components/GlobalLayoutHeader.svelte';
	import GlobalLayoutInner from '$lib/shared/ui/@layout-components/GlobalLayoutInner.svelte';
	import SimpleFooter from '$lib/shared/ui/SimpleFooter/SimpleFooter.svelte';
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<GlobalLayoutHeader>
	{#snippet children({ header, label })}
		<header {...header.props}>
			<p {...label.props} class="sr-only">global</p>
			<GlobalLayoutInner>
				{#snippet inner(props)}
					<div {...props}>
						<p>Logo</p>
					</div>
				{/snippet}
			</GlobalLayoutInner>
		</header>
	{/snippet}
</GlobalLayoutHeader>
<GlobalLayoutContents>
	{#snippet contents(props)}
		<main {...props}>
			<GlobalLayoutInner>
				{#snippet inner(props)}
					<div {...props}>
						{@render children()}
					</div>
				{/snippet}
			</GlobalLayoutInner>
		</main>
	{/snippet}
</GlobalLayoutContents>
<SimpleFooter />
