<script lang="ts" module>
	export const GLOBAL_LAYOUT_AREAS = {
		ROOT: {
			'data-global-layout-area': 'root'
		},
		HEADER: {
			'data-global-layout-area': 'header'
		},
		MAIN_VISUAL: {
			'data-global-layout-area': 'main-visual'
		},
		CONTENTS: {
			'data-global-layout-area': 'contents'
		},
		LEFT_SIDEBAR: {
			'data-global-layout-area': 'left-sidebar'
		},
		RIGHT_SIDEBAR: {
			'data-global-layout-area': 'right-sidebar'
		},
		FOOTER: {
			'data-global-layout-area': 'footer'
		},
		INNER: {
			'data-global-layout-area': 'inner'
		}
	} as const;
</script>

<script lang="ts">
	import { onMount, type Snippet } from 'svelte';

	let {
		pageRouteId,
		children
	}: {
		pageRouteId: string | null;
		children?: Snippet;
	} = $props();

	onMount(() => {
		console.log('GlobalLayout mounted');
	});
</script>

<div class="min-h-dvh" {...GLOBAL_LAYOUT_AREAS.ROOT} data-page-id={pageRouteId}>
	{@render children?.()}
</div>

<style>
	/* ============================================================
	カスタムプロパティ
	============================================================ */
	[data-global-layout-area='root'] {
		/* Y方向 ─ 余白 */
		--global-layout-space-between-window-y-start-to-header-start: var(
			--override-global-layout-space-between-window-y-start-to-header-start,
			0
		);
		--global-layout-space-between-header-end-to-main-visual-start: var(
			--override-global-layout-space-between-header-end-to-main-visual-start,
			0px
		);
		--global-layout-space-between-main-visual-end-to-contents-start: var(
			--override-global-layout-space-between-main-visual-end-to-contents-start,
			0px
		);
		--global-layout-space-between-contents-end-to-footer-start: var(
			--override-global-layout-space-between-contents-end-to-footer-start,
			0px
		);
		--global-layout-space-between-footer-end-to-window-y-end: var(
			--override-global-layout-space-between-footer-end-to-window-y-end,
			0
		);

		/* Y方向 ─ 高さ */
		--global-layout-height-header: var(--override-global-layout-height-header, auto);
		--global-layout-height-main-visual: var(--override-global-layout-height-main-visual, auto);
		--global-layout-height-contents: var(--override-global-layout-height-contents, 1fr);
		--global-layout-height-footer: var(--override-global-layout-height-footer, auto);

		/* X方向 ─ 余白 */
		--global-layout-space-between-window-x-start-to-left-sidebar-start: var(
			--override-global-layout-space-between-window-x-start-to-left-sidebar-start,
			1rem
		);
		--global-layout-space-between-left-sidebar-end-to-contents-start: var(
			--override-global-layout-space-between-left-sidebar-end-to-contents-start,
			1rem
		);
		--global-layout-space-between-contents-end-to-right-sidebar-start: var(
			--override-global-layout-space-between-contents-end-to-right-sidebar-start,
			1rem
		);
		--global-layout-space-between-right-sidebar-end-to-window-x-end: var(
			--override-global-layout-space-between-right-sidebar-end-to-window-x-end,
			1rem
		);

		/* X方向 ─ 幅 */
		--global-layout-width-left-sidebar: var(--override-global-layout-width-left-sidebar, auto);
		--global-layout-width-contents: var(--override-global-layout-width-contents, 1fr);
		--global-layout-width-right-sidebar: var(--override-global-layout-width-right-sidebar, auto);
	}

	/* ============================================================
	main-visual がない（DOM不在 or :empty）場合：関連トラックを潰す
	============================================================ */
	[data-global-layout-area='root']:not(:has([data-global-layout-area='main-visual']:not(:empty))) {
		--global-layout-height-main-visual: 0px;
		--global-layout-space-between-main-visual-end-to-contents-start: 0px;
	}

	/* ============================================================
	left-sidebar がない（DOM不在 or :empty）場合：関連トラックを潰す
	============================================================ */
	[data-global-layout-area='root']:not(:has([data-global-layout-area='left-sidebar']:not(:empty))) {
		--global-layout-width-left-sidebar: 0px;
		--global-layout-space-between-left-sidebar-end-to-contents-start: 0px;
	}

	/* ============================================================
	right-sidebar がない（DOM不在 or :empty）場合：関連トラックを潰す
	============================================================ */
	[data-global-layout-area='root']:not(
		:has([data-global-layout-area='right-sidebar']:not(:empty))
	) {
		--global-layout-space-between-contents-end-to-right-sidebar-start: 0px;
		--global-layout-width-right-sidebar: 0px;
	}

	/* ============================================================
	ルートグリッド定義
	============================================================ */
	:where([data-global-layout-area='root']) {
		display: grid;
		grid-template:
			[window-y-start] var(--global-layout-space-between-window-y-start-to-header-start)
			[header-start] var(--global-layout-height-header)
			[header-end] var(--global-layout-space-between-header-end-to-main-visual-start)
			[main-visual-start] var(--global-layout-height-main-visual)
			[main-visual-end] var(--global-layout-space-between-main-visual-end-to-contents-start)
			[contents-start] var(--global-layout-height-contents)
			[contents-end] var(--global-layout-space-between-contents-end-to-footer-start)
			[footer-start] var(--global-layout-height-footer)
			[footer-end] var(--global-layout-space-between-footer-end-to-window-y-end)
			[window-y-end]
			/
			[window-x-start] var(--global-layout-space-between-window-x-start-to-left-sidebar-start)
			[left-sidebar-start] var(--global-layout-width-left-sidebar)
			[left-sidebar-end] var(--global-layout-space-between-left-sidebar-end-to-contents-start)
			[contents-start] var(--global-layout-width-contents)
			[contents-end] var(--global-layout-space-between-contents-end-to-right-sidebar-start)
			[right-sidebar-start] var(--global-layout-width-right-sidebar)
			[right-sidebar-end] var(--global-layout-space-between-right-sidebar-end-to-window-x-end)
			[window-x-end];
	}

	/* ============================================================
	各エリアの subgrid 定義
	============================================================ */
	:where([data-global-layout-area='root'])
		:global(
			:where(
				:is(
					[data-global-layout-area='header'],
					[data-global-layout-area='main-visual'],
					[data-global-layout-area='contents'],
					[data-global-layout-area='left-sidebar'],
					[data-global-layout-area='right-sidebar'],
					[data-global-layout-area='footer']
				):has([data-global-layout-area='inner'])
			)
		) {
		display: grid;
		grid-template-columns: subgrid;
	}

	/* ============================================================
	全エリア共通：列は全幅（サイドバーは後続ルールで上書き）
	============================================================ */
	:global(
		:where(
			[data-global-layout-area='header'],
			[data-global-layout-area='main-visual'],
			[data-global-layout-area='contents'],
			[data-global-layout-area='footer']
		)
	) {
		grid-column: window-x-start / window-x-end;
	}

	:global(
		:where([data-global-layout-area='left-sidebar'], [data-global-layout-area='right-sidebar'])
	) {
		grid-row: contents;
	}

	:global(:where([data-global-layout-area='header'])) {
		grid-row: header;
	}
	:global(:where([data-global-layout-area='main-visual'])) {
		grid-row: main-visual;
	}
	:global(:where([data-global-layout-area='contents'])) {
		grid-row: contents;
	}
	:global(:where([data-global-layout-area='footer'])) {
		grid-row: footer;
	}
	:global(:where([data-global-layout-area='left-sidebar'])) {
		grid-column: window-x-start / left-sidebar-end;
	}
	:global(:where([data-global-layout-area='right-sidebar'])) {
		grid-column: right-sidebar-start / window-x-end;
	}

	/* ============================================================
	left-sidebar がある場合： contents の列を上書き
	============================================================ */
	:global(
		:where([data-global-layout-area='root']):has(
				[data-global-layout-area='left-sidebar']:not(:empty)
			)
			:where([data-global-layout-area='contents'])
	) {
		grid-column-start: left-sidebar-end;
	}

	/* ============================================================
	right-sidebar がある場合：contents の列を上書き
	============================================================ */
	:global(
		:where([data-global-layout-area='root']):has(
				[data-global-layout-area='right-sidebar']:not(:empty)
			)
			:where([data-global-layout-area='contents'])
	) {
		grid-column-end: right-sidebar-start;
	}

	/* ============================================================
	main-visual がない場合： contents を main-visual-start まで拡張
	============================================================ */
	:global(
		:where([data-global-layout-area='root']):not(
				:has([data-global-layout-area='main-visual']:not(:empty))
			)
			:where([data-global-layout-area='contents'])
	) {
		grid-row-start: main-visual-start;
	}

	/* ============================================================
	left-sidebar がある場合かつ main-visual がない場合：
	left-sidebar を main-visual-start まで拡張
	============================================================ */
	:global(
		:where([data-global-layout-area='root']):not(
				:has([data-global-layout-area='main-visual']:not(:empty))
			):has([data-global-layout-area='left-sidebar']:not(:empty))
			:where([data-global-layout-area='left-sidebar'])
	) {
		grid-row-start: main-visual-start;
	}

	/* ============================================================
	right-sidebar がある場合かつ main-visual がない場合：
	right-sidebar を main-visual-start まで拡張
	============================================================ */
	:global(
		:where([data-global-layout-area='root']):not(
				:has([data-global-layout-area='main-visual']:not(:empty))
			):has([data-global-layout-area='right-sidebar']:not(:empty))
			:where([data-global-layout-area='right-sidebar'])
	) {
		grid-row-start: main-visual-start;
	}

	/* ============================================================
	inner の配置
	============================================================ */
	:global(:where([data-global-layout-area='inner'])) {
		grid-column: contents;
	}
	:global(
		:where(
			[data-global-layout-area='header'] [data-global-layout-area='inner'],
			[data-global-layout-area='main-visual'] [data-global-layout-area='inner'],
			[data-global-layout-area='footer'] [data-global-layout-area='inner']
		)
	) {
		grid-column: left-sidebar-start / right-sidebar-end;
	}
	:global(:where([data-global-layout-area='left-sidebar'] [data-global-layout-area='inner'])) {
		grid-column: left-sidebar;
	}
	:global(:where([data-global-layout-area='right-sidebar'] [data-global-layout-area='inner'])) {
		grid-column: right-sidebar;
	}

	/* ============================================================
	各エリアの背景色
	============================================================ */
	:global([data-global-layout-area='header']) {
		background-color: ghostwhite;
		padding-block: 1rem;
	}
	:global([data-global-layout-area='main-visual']) {
		background-color: skyblue;
		padding: 1rem;
	}
	:global([data-global-layout-area='contents']) {
		background-color: lightgreen;
		padding: 1rem;
	}
	:global([data-global-layout-area='footer']) {
		background-color: yellow;
		padding: 1rem;
	}
	:global([data-global-layout-area='left-sidebar']) {
		background-color: plum;
		padding: 1rem;
	}
	:global([data-global-layout-area='right-sidebar']) {
		background-color: orange;
		padding: 1rem;
	}
</style>
