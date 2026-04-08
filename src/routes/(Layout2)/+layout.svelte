<script lang="ts">
	import Layout2 from '$lib/shared/ui/@layout-components/(GlobalLayout2)/GlobalLayout2.svelte';

	let { children } = $props();
</script>

<!-- レイアウトコンポーネントにはchildrenで基本渡さない。今後他のスニペットが追加された時にchildren部分と他のスニペット部分の見分けが少しだけつきにくくなるため -->
<Layout2 main={children} />
