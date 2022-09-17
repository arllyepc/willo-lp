const menuBtn = document.querySelector('.menu-btn');
const navbarMobile = document.querySelector('.navbar-mobile');
const logo = document.querySelector('.logo-desktop');
const linksMobile = document.querySelectorAll('nav.navbar-mobile ul li');
const linksDesktop = document.querySelectorAll('ul.menu-desktop li');
const sections = document.querySelectorAll('section');
const tables = document.querySelectorAll("table");
tables[1].style.display = "none"
const options = document.querySelectorAll("option");

const selector = document.querySelector("select")
console.log(tables, options, selector)


window.addEventListener('scroll', () => {
	let current = '';

	sections.forEach((section) => {
		const sectionTop = section.offsetTop;
		const sectionHeight = section.clientHeight;
		if (scrollY > sectionTop - sectionHeight / 3) {
			current = section.getAttribute('id');
		}
	});

	linksDesktop.forEach((linkDesktop) => {
		linkDesktop.firstElementChild.classList.remove('active');

		if (linkDesktop.classList.contains(current)) {
			linkDesktop.firstElementChild.classList.add('active');
		}
	});

	linksMobile.forEach((linkMobile) => {
		linkMobile.firstElementChild.classList.remove('active');

		if (linkMobile.classList.contains(current)) {
			linkMobile.firstElementChild.classList.add('active');
		}
	});
});

linksMobile.forEach((el) => {
	el.addEventListener('click', (event) => {
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

//Tabela

selector.addEventListener("change", activeTableItem)

function activeTableItem() {
	if (selector.value === "willo-palmares") {
		tables[1].style.display = "none"
		tables[0].style.display = "block";
	} else {
		tables[0].style.display = "none"
		tables[1].style.display = "block"
	}
}



