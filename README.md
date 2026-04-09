## 設計方針
### やらないこと
- `+page@.svelte`や`+layout@.svelte`などの上の階層に戻るルーティング機能を「利用しない」。
  - その階層のserver.tsなども読まなくなるので、事故の可能性を減らすため。
- 認証はremote.tsもしくはhooks.server.tsで行う。
- 認可はものによるが、ページ固有のものは+page.server.ts、コンポーネントの出し分けなど簡易なものはremote.tsで行う。
- ルートの+layout.svelteにGlobalLayoutとメタ以外のHTMLを記載しない。
- +layout.svelteを使用する場合は`()`ディレクトリで適切な名前をつけ、必ず`()`ディレクトリ直下にだけ置くようにする。、
  - ディレクトリ配下すべてにHTMLが共有される。ある仮想ページで別のレイアウトに変更することができない（`@`で遡ることを禁止している）ため。
- +page.server.tsや+layout.server.tsで取得したデータをフロントエンドで使用しない。
  - HTMLの描画に使用するデータはremote.tsで取得する。
  - 認可などに使用し、リダイレクトを行いたい場合などは+page.server.tsや+layout.server.tsで行うが、必要なデータはremote.ts経由で取得する。

## remote.ts
- 基本的にサーバーサイドの処理はなるべくremote.tsで行う。
- フロントエンドで使用するデータのフェッチは通常の.svelteファイルではなく、.remote.svelteファイルで行い、children Snippetでデータを子に渡す。
- `await`ブロックはなるべく使用しない。使用する場合はそのデータがもし取得できなかったとしても主要な機能へのアクセス手段が保たれるようにすること。JavaScriptを利用しないユーザー向けの配慮。

## ページ全体のランドマークを持つ要素の配置
`src/lib/shared/ui/@layout-components`のGlobalLayout.svelte以外のものを使用する。  
コンテンツはどれかのランドマークに属する必要があるため、これらでページのコンテンツなどをラップして使用する。

### レイアウトの一部変更
あるページでのみレイアウトを変更したい場合は+page.svelteで以下のように位置を変更することができる。

注意点として、`<div class="hidden">`などで`style`要素を囲まない場合はSvelteの通常のscopedなスタイル設定になるので、`:global()`を使用しないと`data-global-layout-area`にスタイルを当てることができない。

`:global()`を使用した場合は+page.svelteだけではなく全ページに`style`要素が配置されてしまうため、注意すること。  
それを望む場合は、[data-page-id={page.route.id}]に対してスタイルをネストすることで、そのページの要素のみにスタイルを適用することができる。（pageは$app/stateのpage）

```svelte
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
```

また、要素の大きさや要素間の余白に関しては
`src/lib/shared/ui/@layout-components/GlobalLayout.svelte`で定義されている。`--override`で始まるCSS変数の値を上書きすることによって変更する。

### display: contentsの使用
roleが消えるバグが報告されているので、mainなど元々重要なroleを持っている要素に付与する場合は保険で冗長なroleを付与してください。