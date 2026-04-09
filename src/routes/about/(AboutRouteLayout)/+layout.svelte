<script lang="ts">
	import { page } from '$app/state';
	import SimpleFooter from '$lib/shared/ui/SimpleFooter/SimpleFooter.svelte';
	import GlobalLayoutInner from '$lib/shared/ui/@layout-components/GlobalLayoutInner.svelte';
	import GlobalLayoutLeftSidebar from '$lib/shared/ui/@layout-components/GlobalLayoutLeftSidebar.svelte';
	import AboutPageBanner from '$lib/shared/ui/Banner/Banner.svelte';
	import FetchAboutPageBanner from '$lib/features/aboutPageBanner/ui/FetchAboutPageBanner/FetchAboutPageBanner.remote.svelte';

	const pageSlug = $derived(page.url.pathname);
	let { children } = $props();

	const showAboutPageBanner = $derived(pageSlug === '/about');
</script>

{@render children?.()}
<GlobalLayoutLeftSidebar>
	{#snippet sidebarContent({ leftSidebar, label })}
		<aside {...leftSidebar.props}>
			<p {...label.props} class="sr-only">global</p>
			<GlobalLayoutInner>
				{#snippet inner(innerProps)}
					<div {...innerProps}>
						<ul>
							<li>
								<a href="/about">About</a>
							</li>
							<li>
								<a href="/about/recruit">Recruit</a>
							</li>
						</ul>
					</div>
				{/snippet}
			</GlobalLayoutInner>
		</aside>
	{/snippet}
</GlobalLayoutLeftSidebar>
{#snippet banner()}
	{#if showAboutPageBanner}
		<!-- データのfetchはこのコンポーネントが表示されない限り行われない。aboutページ以外でもこのコンポーネントのコードが読み込まれてしまうが、コンポーネント単体の容量は小さいかつレイアウト部分で追加で読み込むコンポーネントがそんなに重たい物である可能性も低いので許容する。 -->
		<!-- JavaScriptに依存しても問題ない場合はコンポーネントをawait importすることでパフォーマンスの改善が見込める。 -->
		<FetchAboutPageBanner>
			{#snippet children(bannerData)}
				<AboutPageBanner {...bannerData} />
			{/snippet}
		</FetchAboutPageBanner>
	{/if}
{/snippet}
<SimpleFooter banner={showAboutPageBanner ? banner : undefined} />
