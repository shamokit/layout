<script lang="ts">
	import GlobalLayoutContents from '$lib/shared/ui/@layout-components/GlobalLayout/GlobalLayoutContents.svelte';
	import GlobalLayoutFooter from '$lib/shared/ui/@layout-components/GlobalLayout/GlobalLayoutFooter.svelte';
	import GlobalLayoutHeader from '$lib/shared/ui/@layout-components/GlobalLayout/GlobalLayoutHeader.svelte';
	import GlobalLayoutMainVisual from '$lib/shared/ui/@layout-components/GlobalLayout/GlobalLayoutMainVisual.svelte';
	import GlobalLayoutInner from '$lib/shared/ui/@layout-components/GlobalLayout/GlobalLayoutInner.svelte';
</script>

<GlobalLayoutHeader>
	{#snippet children({ header, label })}
		<header {...header.props}>
			<p id={label.props.id} class="sr-only">global</p>
			<GlobalLayoutInner>
				{#snippet inner(innerProps)}
					<div {...innerProps} class="grid grid-cols-[1fr_auto_1fr] gap-x-4">
						<p>Logo</p>
						<nav>
							<ul class="flex items-center gap-4">
								<li><a href="/">Home</a></li>
								<li><a href="/about">About</a></li>
								<li><a href="/contact">Contact</a></li>
							</ul>
						</nav>
					</div>
				{/snippet}
			</GlobalLayoutInner>
		</header>
	{/snippet}
</GlobalLayoutHeader>
<main class="contents">
	<GlobalLayoutMainVisual>
		{#snippet mainVisual(mainVisualProps)}
			<div {...mainVisualProps}>
				<GlobalLayoutInner>
					{#snippet inner(innerProps)}
						<div {...innerProps}>
							<h1>TOP Page</h1>
						</div>
					{/snippet}
				</GlobalLayoutInner>
			</div>
		{/snippet}
	</GlobalLayoutMainVisual>
	<GlobalLayoutContents>
		{#snippet contents(contentsProps)}
			<div {...contentsProps}>
				<GlobalLayoutInner>
					{#snippet inner(innerProps)}
						<div {...innerProps}>
							<p>Contents</p>
						</div>
					{/snippet}
				</GlobalLayoutInner>
			</div>
		{/snippet}
	</GlobalLayoutContents>
</main>
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
