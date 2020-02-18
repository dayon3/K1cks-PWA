const container = document.querySelector('.container');

const shoes = [
	{ name: 'Crimson Tint', image: 'images/jordan1.jpg' },
	{ name: 'NYC to PARIS', image: 'images/jordan2.jpg' },
	{ name: 'Phantom', image: 'images/jordan3.jpg' },
	{ name: 'Pine Green', image: 'images/jordan4.jpg' },
	{ name: 'Reserve Bred', image: 'images/jordan5.jpg' },
	{ name: 'Shadow', image: 'images/jordan6.jpg' },
	{ name: 'Travis Scott', image: 'images/jordan7.jpg' },
	{ name: 'Turbo Green', image: 'images/jordan8.jpg' },
	{ name: 'Wheat', image: 'images/jordan9.jpg' },
];

const showShoes = () => {
	let output = '';
	shoes.forEach(
		({ name, image }) =>
			(output += `
      <div class="card">
        <img class="card--avatar" src=${image} />
        <h1 class="card--title">${name}</h1>
        <a class="card--link" href="#">Shop</a>
      </div>
      `)
	);
	container.innerHTML = output;
};

document.addEventListener('DOMContentLoaded', showShoes);

if ('serviceWorker' in navigator) {
	window.addEventListener('load', function() {
		navigator.serviceWorker
			.register('/serviceWorker.js')
			.then(res => console.log('service worker registered'))
			.catch(err => console.log('service worker not registered', err));
	});
}
