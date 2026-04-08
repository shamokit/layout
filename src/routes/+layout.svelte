<script lang="ts">
	import { page } from '$app/state';
	import { server } from 'typescript';
	import './layout.css';
	let { children } = $props();
</script>

<!-- メタはapp.d.tsのPageDataで型を共有し、+page.server.tsで設定する。 -->
<!-- メタにデフォルトを設定する場合は+layout.server.tsに書いてマージすることができるが、継承したくない場合も想定されるので、各ページの+page.svelteに書いた方がいいかもしれない。メタの設定はページの責務なのでその方が自然かもしれない。 -->
<svelte:head>
	{#if 'meta' in page.data && 'title' in page.data.meta}
		<title>{page.data.meta.title}</title>
	{/if}
</svelte:head>

<div class="contents" data-page-id={page.route.id}>
	{@render children()}
</div>
