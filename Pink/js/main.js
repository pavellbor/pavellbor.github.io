// Меню

var nav = document.querySelector('.nav');
var navToggleClose = nav.querySelector('.nav__toggle--close');
var navToggleOpen = nav.querySelector('.nav__toggle--open');
var navList = nav.querySelector('.nav__list');


navToggleOpen.addEventListener('click', function() {

	navToggleOpen.classList.remove('nav__toggle--active');
	navToggleClose.classList.add('nav__toggle--active');

	navList.classList.add('nav__list--opened');
})

navToggleClose.addEventListener("click", function() {

	navToggleClose.classList.remove('nav__toggle--active');
	navToggleOpen.classList.add('nav__toggle--active');

	navList.classList.remove('nav__list--opened');
})
