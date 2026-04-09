<script lang="ts">
	let {
		title,
		href
	}: {
		title: string;
		href: string;
	} = $props();
</script>

<a {href} class="block p-4 bg-gray-700 text-white rounded">{title}</a>
