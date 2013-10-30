var images = [
	'home-page.png',
	'home-page2.png',
	'home-page3.png',
	'home-page4.png',
	'home-page5.png'
];
var totalImages = images.length;
var randImage = Math.floor(Math.random() * totalImages);
document.querySelector('.leading-content').style.backgroundImage = 'url("img/' + images[randImage] + '")';
