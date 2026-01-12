<script lang="ts">
	let {
		title,
		text,
	}: {
		title: string;
		text: string;
	} = $props();
</script>

<a href="/">{title}<br />{text}</a>
