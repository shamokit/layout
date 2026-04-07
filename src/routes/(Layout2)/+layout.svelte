<script lang="ts">
	import Layout2 from './@layout-components/Layout2.svelte';

	let { children } = $props();
</script>

<Layout2>
	{#snippet main()}
		{@render children()}
	{/snippet}
</Layout2>
