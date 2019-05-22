// Мобильное меню

var mainNav = document.querySelector('.main-nav');
var mainNavToggle = mainNav.querySelector('.main-nav__toggle');

mainNav.classList.add('main-nav--closed');

mainNavToggle.addEventListener('click', function () {
	if (mainNav.classList.contains('main-nav--closed')) {
		mainNav.classList.remove('main-nav--closed');
	} else {
		mainNav.classList.add('main-nav--closed');
	}
})
