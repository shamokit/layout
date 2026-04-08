<script lang="ts">
	import { LAYOUT2_AREAS } from './Layout2.svelte';

	const uniqueId = $props.id();
</script>

<footer {...LAYOUT2_AREAS.FOOTER} class="py-5 bg-gray-100 items-center" aria-labelledby={uniqueId}>
	<div class="grid grid-cols-[1fr_auto_1fr] gap-4" {...LAYOUT2_AREAS.INNER}>
		<p id={uniqueId} class="sr-only">global</p>
		<p>Logo</p>
		<p><small>Copyright &copy; {new Date().getFullYear()} Company</small></p>
	</div>
</footer>
