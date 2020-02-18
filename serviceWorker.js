const staticDevK1cks = 'dev-k1cks-site-v1';
const assets = [
	'/',
	'/index.html',
	'/css/style.css',
	'/js/app.js',
	'/images/jordan1.jpg',
	'/images/jordan2.jpg',
	'/images/jordan3.jpg',
	'/images/jordan4.jpg',
	'/images/jordan5.jpg',
	'/images/jordan6.jpg',
	'/images/jordan7.jpg',
	'/images/jordan8.jpg',
	'/images/jordan9.jpg',
];

self.addEventListener('install', installEvent => {
	installEvent.waitUntil(
		caches.open(staticDevK1cks).then(cache => {
			cache.addAll(assets);
		})
	);
});

self.addEventListener('fetch', fetchEvent => {
	fetchEvent.respondWith(
		caches.match(fetchEvent.request).then(res => {
			return res || fetch(fetchEvent.request);
		})
	);
});
