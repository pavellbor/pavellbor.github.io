// Навигация

var mainNav = document.querySelector('.main-nav');
var mainNavOpen = mainNav.querySelector('.main-nav__button--open');
var mainNavClose = mainNav.querySelector('.main-nav__button--close');
var sliderJs = document.querySelectorAll('.slider--nojs');
var loginLink = document.querySelector('.user-list__item--login a');
var loginModal = document.querySelector('.login');
var loginModalClose = document.querySelector('.login__button--close');

loginLink.addEventListener('click', function(evt) {
    evt.preventDefault();
    loginModal.classList.add('login--active');
    mainNav.classList.remove('main-nav--opened');
    mainNav.classList.add('main-nav--closed');
});

loginModalClose.addEventListener('click', function() {
    loginModal.classList.remove('login--active');
});

mainNav.classList.remove('main-nav--nojs');
mainNav.classList.add('main-nav--closed');

for (var i = 0; i < sliderJs.length; i++) {
    sliderJs[i].classList.remove('slider--nojs');
    sliderJs[i].classList.add('slider');
}

mainNavOpen.addEventListener('click', function() {
	mainNav.classList.remove('main-nav--closed');
	mainNav.classList.add('main-nav--opened');

    if (loginModal.classList.contains('login--active')) {
        loginModal.classList.remove('login--active');
    }
});

mainNavClose.addEventListener('click', function() {
	mainNav.classList.remove('main-nav--opened');
	mainNav.classList.add('main-nav--closed');
});


// Cлайдер 1

var sliderButton1 = document.querySelectorAll(".advantages .slider__toggle");
var sliderItem1 = document.querySelectorAll(".advantages .slider__item");
 
var slider1 = function (number) {
    for (var i = 0; i < sliderButton1.length; i++) {
        sliderItem1[i].classList.remove("slider__item--active");
        sliderButton1[i].classList.remove("slider__toggle--active");
    }
    sliderItem1[number].classList.add("slider__item--active");
    sliderButton1[number].classList.add("slider__toggle--active");
};

sliderButton1[0].addEventListener("click", function () {
    slider1(0);
});
 
sliderButton1[1].addEventListener("click", function () {
    slider1(1);
});
 
sliderButton1[2].addEventListener("click", function () {
    slider1(2);
});


// Cлайдер 2

var sliderButton2 = document.querySelectorAll(".reviews .slider__toggle");
var sliderItem2 = document.querySelectorAll(".reviews .slider__item");
 
var slider2 = function (number) {
    for (var i = 0; i < sliderButton2.length; i++) {
        sliderItem2[i].classList.remove("slider__item--active");
        sliderButton2[i].classList.remove("slider__toggle--active");
    }
    sliderItem2[number].classList.add("slider__item--active");
    sliderButton2[number].classList.add("slider__toggle--active");
};

sliderButton2[0].addEventListener("click", function () {
    slider2(0);
});
 
sliderButton2[1].addEventListener("click", function () {
    slider2(1);
});
 
sliderButton2[2].addEventListener("click", function () {
    slider2(2);
});