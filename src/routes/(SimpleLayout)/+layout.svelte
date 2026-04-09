<script lang="ts">
	import GlobalLayoutContents from '$lib/shared/ui/@layout-components/GlobalLayout/GlobalLayoutContents.svelte';
	import GlobalLayoutFooter from '$lib/shared/ui/@layout-components/GlobalLayout/GlobalLayoutFooter.svelte';
	import GlobalLayoutHeader from '$lib/shared/ui/@layout-components/GlobalLayout/GlobalLayoutHeader.svelte';
	import GlobalLayoutInner from '$lib/shared/ui/@layout-components/GlobalLayout/GlobalLayoutInner.svelte';

	let { children: main } = $props();
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
						{@render main()}
					</div>
				{/snippet}
			</GlobalLayoutInner>
		</main>
	{/snippet}
</GlobalLayoutContents>
<GlobalLayoutFooter>
	{#snippet children({ footer, label })}
		<footer {...footer.props}>
			<p {...label.props} class="sr-only">global</p>
			<GlobalLayoutInner>
				{#snippet inner(innerProps)}
					<div {...innerProps}>
						<p>Footer</p>
					</div>
				{/snippet}
			</GlobalLayoutInner>
		</footer>
	{/snippet}
</GlobalLayoutFooter>
