import { query } from '$app/server';
export const getBanner = query(async () => {
	console.log('getBanner');
	return {
		title: 'About Page Banner',
	};
});
