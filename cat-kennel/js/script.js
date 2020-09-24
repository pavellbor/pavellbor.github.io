'use stict';

function slider(slidesSelector, buttonPrevSelector, buttonNextSelector, activeClass) {
  const slides = Array.from(document.querySelectorAll(slidesSelector));
  const prevButton = document.querySelector(buttonPrevSelector);
  const nextButton = document.querySelector(buttonNextSelector);


  if (slides.length > 1) {
      let counter;

      prevButton.addEventListener('click', (evt) => {
          evt.preventDefault();

          removeSlidesActiveClass();

          counter -= 1;

          if (counter < 0) {
              counter = slides.length - 1;
          }

          slides[counter].classList.add(activeClass);
      });

      nextButton.addEventListener('click', (evt) => {
          evt.preventDefault();

          removeSlidesActiveClass();

          counter += 1;

          if (counter >= slides.length) {
              counter = 0;
          }

          slides[counter].classList.add(activeClass);
      });

      function removeSlidesActiveClass() {
          slides.forEach(slide => {
              if (slide.classList.contains(activeClass)) counter = slides.indexOf(slide);
              slide.classList.remove(activeClass);
          });
      }
  } else {
      prevButton.remove();
      nextButton.remove();
  }
}

slider('.item-team', '.item-team__arrow-prev', '.item-team__arrow-next', 'item-team--active');
slider('.item-reviews', '.item-reviews__arrow-prev', '.item-reviews__arrow-next', 'item-reviews--active');