import { query } from '$app/server';
export const fetchAboutBannerData = query(async () => {
	console.log('fetchBanner');
	await new Promise((resolve) => setTimeout(resolve, 1200));
	return {
		title: 'About Page Banner',
		href: '/'
	};
});
