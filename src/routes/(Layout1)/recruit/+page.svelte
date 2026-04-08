<h1>Recruit Page</h1>

<!-- globalでCSSを読み込むことなく、このページでのみレイアウトのスタイルを変更するテクニック。:global()を使うと全ページで読み込まれてしまう。 -->
<div class="hidden">
	<style>
		[data-layout1-area='root'] {
			--override-layout1-space-content-x: 2rem;
			--override-layout1-space-between-sidebar-content-x: 2rem;
		}
	</style>
</div>
