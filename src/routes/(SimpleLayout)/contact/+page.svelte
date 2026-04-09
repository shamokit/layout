<h1>Contact Page</h1>
<p><a href="/">Home</a></p>

<!-- :global()を使うと全ページで読み込まれてしまう。これはこのページでのみレイアウトのスタイルを変更するテクニック。以下はヘッダーとフッターの行を入れ替える例。 -->
<div class="hidden">
	<style>
		[data-global-layout-area='header'] {
			grid-row: footer;
		}
		[data-global-layout-area='footer'] {
			grid-row: header;
		}
	</style>
</div>
