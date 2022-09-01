const menuBtn = document.querySelector('.menu-btn');
const navbarMobile = document.querySelector('.navbar-mobile');
const logo = document.querySelector('.logo-desktop');
const linksMobile = document.querySelectorAll('li');
linksMobile.forEach((el) => {
	el.addEventListener('click', (event) => {
		event.preventDefault();
		menuBtn.classList.toggle('open');
		navbarMobile.classList.toggle('active');
		logo.classList.toggle('active');
		menuOpen = false;
		
	});
});

let menuOpen = false;



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
