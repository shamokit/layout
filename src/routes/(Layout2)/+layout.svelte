<script lang="ts">
	import Layout2 from './@layout-components/Layout2.svelte';

	let { children } = $props();
</script>

<Layout2 main={children} />
