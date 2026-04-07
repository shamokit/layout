<script lang="ts">
	import { LAYOUT2_AREAS } from './Layout2.svelte';

	const uniqueId = $props.id();
</script>

<header
	{...LAYOUT2_AREAS.HEADER}
	class="py-5 bg-white border-b border-gray-200 items-center"
	aria-labelledby={uniqueId}
>
	<div class="grid grid-cols-[1fr_auto_1fr] gap-4" {...LAYOUT2_AREAS.INNER}>
		<p id={uniqueId} class="sr-only">global</p>
		<p>Logo</p>
	</div>
</header>
