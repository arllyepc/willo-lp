const menuBtn = document.querySelector('.menu-btn');
const navbarMobile = document.querySelector('.navbar-mobile');
const logo = document.querySelector('.logo-desktop');
let menuOpen = false;

menuScroll = document.querySelector('.menu');

menuBtn.addEventListener('click', () => {
	if (!menuOpen) {
		menuBtn.classList.add('open');
		navbarMobile.classList.add('active');
		logo.classList.add('active');
		menuOpen = true;
	} else {
		menuBtn.classList.remove('open');
		navbarMobile.classList.remove('active');
		logo.classList.remove('active');
		menuOpen = false;
	}
});


