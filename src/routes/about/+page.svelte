<script lang="ts" module>
	export { Banner };
</script>

<script lang="ts">
	import AboutPageBanner from './AboutPageBanner.svelte';
</script>

{#snippet Banner(data: { title: string; text: string })}
	<p><AboutPageBanner {...data} /></p>
{/snippet}

<h1>About Page</h1>
