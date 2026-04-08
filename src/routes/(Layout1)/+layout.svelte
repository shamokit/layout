<script lang="ts">
	import { page } from '$app/state';
	import Layout1 from './@layout-components/Layout1.svelte';
	import AboutPageBanner from '../../lib/features/aboutPageBanner/ui/AboutPageBanner.svelte';
	import FetchAboutPageBanner from '../../lib/features/aboutPageBanner/ui/FetchAboutPageBanner.svelte';

	const pageSlug = $derived(page.url.pathname);
	let { children } = $props();

	const showAboutPageBanner = $derived(pageSlug === '/about');
	const showBanner = $derived([showAboutPageBanner].some(Boolean));
</script>

{#snippet navigation()}
	<nav>
		<ul class="flex items-center gap-4">
			<li><a href="/">Home</a></li>
			<li><a href="/about">About</a></li>
			<li><a href="/contact">Contact</a></li>
			<li><a href="/recruit">Recruit</a></li>
		</ul>
	</nav>
{/snippet}
{#snippet main()}
	{@render children()}
{/snippet}
{#snippet sidebar()}
	<p class="col-[2/-2]">Sidebar</p>
{/snippet}
{#snippet banner()}
	{#if showAboutPageBanner}
		<!-- データのfetchはこのコンポーネントが表示されない限り行われない。aboutページ以外でもこのコンポーネントのコードが読み込まれてしまうが、コンポーネント単体の容量は小さいかつレイアウト部分で追加で読み込むコンポーネントがそんなに重たい物である可能性も低いので許容する。 -->
		<!-- JavaScriptに依存しても問題ない場合はコンポーネントをawait importすることでパフォーマンスの改善が見込める。 -->
		<FetchAboutPageBanner>
			{#snippet children(props)}
				<AboutPageBanner {...props} />
			{/snippet}
		</FetchAboutPageBanner>
	{/if}
{/snippet}

<Layout1 {navigation} {main} {sidebar} banner={showBanner ? banner : undefined} />
