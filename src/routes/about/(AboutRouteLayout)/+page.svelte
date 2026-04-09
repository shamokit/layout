<script lang="ts">
	import GlobalLayoutContents from '$lib/shared/ui/@layout-components/GlobalLayoutContents.svelte';
	import GlobalLayoutHeader from '$lib/shared/ui/@layout-components/GlobalLayoutHeader.svelte';
	import GlobalLayoutInner from '$lib/shared/ui/@layout-components/GlobalLayoutInner.svelte';
</script>

<GlobalLayoutHeader>
	{#snippet children({ header, label })}
		<header {...header.props}>
			<p id={label.props.id} class="sr-only">global</p>
			<GlobalLayoutInner>
				{#snippet inner(props)}
					<div {...props} class="grid grid-cols-[1fr_auto_1fr] gap-x-4">
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
<main class="contents" role="main">
	<GlobalLayoutContents>
		{#snippet contents(contentsProps)}
			<div {...contentsProps}>
				<GlobalLayoutInner>
					{#snippet inner(innerProps)}
						<div {...innerProps}>
							<h1>About Page</h1>
						</div>
					{/snippet}
				</GlobalLayoutInner>
			</div>
		{/snippet}
	</GlobalLayoutContents>
</main>
