<script lang="ts">
	import GlobalLayoutContents from '$lib/shared/ui/@layout-components/GlobalLayout/GlobalLayoutContents.svelte';
	import GlobalLayoutInner from '$lib/shared/ui/@layout-components/GlobalLayout/GlobalLayoutInner.svelte';
	import GlobalLayoutMainVisual from '$lib/shared/ui/@layout-components/GlobalLayout/GlobalLayoutMainVisual.svelte';
</script>

<main class="contents">
	<GlobalLayoutMainVisual>
		{#snippet mainVisual(props)}
			<div {...props}>
				<GlobalLayoutInner>
					{#snippet inner(props)}
						<div {...props} class="text-center">
							<h1>Recruit Page</h1>
						</div>
					{/snippet}
				</GlobalLayoutInner>
			</div>
		{/snippet}
	</GlobalLayoutMainVisual>
	<GlobalLayoutContents>
		{#snippet contents(props)}
			<main {...props}>
				<GlobalLayoutInner>
					{#snippet inner(props)}
						<div {...props}>
							<p>Recruit Contents</p>
						</div>
					{/snippet}
				</GlobalLayoutInner>
			</main>
		{/snippet}
	</GlobalLayoutContents>
</main>
