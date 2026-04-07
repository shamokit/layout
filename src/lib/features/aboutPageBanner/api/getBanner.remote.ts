import { query } from '$app/server';
export const getBanner = query(async () => {
	console.log('getBanner');
	await new Promise((resolve) => setTimeout(resolve, 1200));
	return {
		title: 'About Page Banner',
		href: '/'
	};
});
