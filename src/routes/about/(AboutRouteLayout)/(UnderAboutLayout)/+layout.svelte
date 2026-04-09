<script lang="ts">
	import GlobalLayoutInner from '$lib/shared/ui/@layout-components/GlobalLayoutInner.svelte';
	import GlobalLayoutHeader from '$lib/shared/ui/@layout-components/GlobalLayoutHeader.svelte';
	import GlobalLayoutRightSidebar from '$lib/shared/ui/@layout-components/GlobalLayoutRightSidebar.svelte';
	let { children } = $props();
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
			<nav class="fixed bottom-3 inset-x-3 flex items-center justify-center drop-shadow-2xl">
				<ul class="flex items-center bg-white rounded-full p-3">
					<li><a href="/about" class="px-4 py-2">About</a></li>
					<li><a href="/about/recruit" class="px-4 py-2">Recruit</a></li>
				</ul>
			</nav>
		</header>
	{/snippet}
</GlobalLayoutHeader>
{@render children?.()}
<GlobalLayoutRightSidebar>
	{#snippet sidebarContent({ rightSidebar, label })}
		<aside {...rightSidebar.props}>
			<p id={label.props.id} class="sr-only">ad</p>
			<GlobalLayoutInner>
				{#snippet inner(innerProps)}
					<div {...innerProps}>
						<p>Ad Banner</p>
					</div>
				{/snippet}
			</GlobalLayoutInner>
		</aside>
	{/snippet}
</GlobalLayoutRightSidebar>
