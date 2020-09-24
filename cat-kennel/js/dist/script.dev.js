"use strict";
'use stict';

function slider(slidesSelector, buttonPrevSelector, buttonNextSelector, activeClass) {
  var slides = Array.from(document.querySelectorAll(slidesSelector));
  var prevButton = document.querySelector(buttonPrevSelector);
  var nextButton = document.querySelector(buttonNextSelector);

  if (slides.length > 1) {
    var removeSlidesActiveClass = function removeSlidesActiveClass() {
      slides.forEach(function (slide) {
        if (slide.classList.contains(activeClass)) counter = slides.indexOf(slide);
        slide.classList.remove(activeClass);
      });
    };

    var counter;
    prevButton.addEventListener('click', function (evt) {
      evt.preventDefault();
      removeSlidesActiveClass();
      counter -= 1;

      if (counter < 0) {
        counter = slides.length - 1;
      }

      slides[counter].classList.add(activeClass);
    });
    nextButton.addEventListener('click', function (evt) {
      evt.preventDefault();
      removeSlidesActiveClass();
      counter += 1;

      if (counter >= slides.length) {
        counter = 0;
      }

      slides[counter].classList.add(activeClass);
    });
  } else {
    prevButton.remove();
    nextButton.remove();
  }
}

slider('.item-team', '.item-team__arrow-prev', '.item-team__arrow-next', 'item-team--active');
slider('.item-reviews', '.item-reviews__arrow-prev', '.item-reviews__arrow-next', 'item-reviews--active');