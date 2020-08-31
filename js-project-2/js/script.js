'use strict';

window.addEventListener('DOMContentLoaded', () => {


  // Табы

  const tabsContent = document.querySelectorAll('.tabcontent'),
    tabs = document.querySelectorAll('.tabheader__item'),
    tabsParent = document.querySelector('.tabheader__items');


  tabsContentHide();
  tabsContentShow();

  tabsParent.addEventListener('click', (e) => {
    const target = e.target;

    if (target && target.classList.contains('tabheader__item')) {
      tabs.forEach((item, i) => {
        if (item == target) {
          tabsContentHide();
          tabsContentShow(i);
        }
      });
    }
  });


  function tabsContentHide() {

    tabsContent.forEach(item => {
      item.classList.remove('show', 'fade');
      item.classList.add('hide');
    });

    tabs.forEach(item => {
      item.classList.remove('tabheader__item_active');
    });

  }


  function tabsContentShow(i = 0) {

    tabsContent[i].classList.remove('hide');
    tabsContent[i].classList.add('show', 'fade');

    tabs[i].classList.add('tabheader__item_active');

  }


  // Таймер

  const timer = document.querySelector('.timer'),
    days = timer.querySelector('#days'),
    hours = timer.querySelector('#hours'),
    minutes = timer.querySelector('#minutes'),
    seconds = timer.querySelector('#seconds');

  getTime();
  const timerStart = setInterval(getTime, 1000);


  function getTime() {
    const timeRange = Date.parse('2020-11-31') - Date.parse(new Date());

    if (timeRange <= 0) {
      clearInterval(timerStart);
    }

    const daysValue = Math.floor(timeRange / (1000 * 60 * 60 * 24)),
      hoursValue = Math.floor((timeRange / (1000 * 60 * 60)) % 24),
      minutesValue = Math.floor((timeRange / (1000 * 60)) % 60),
      secondsValue = Math.floor(timeRange / 1000 % 60);

    days.innerHTML = addZero(daysValue);
    hours.innerHTML = addZero(hoursValue);
    minutes.innerHTML = addZero(minutesValue);
    seconds.innerHTML = addZero(secondsValue);
  }

  function addZero(num) {
    if (num < 10) {
      return num = "0" + num;
    } else {
      return num;
    }
  }


  // Модальное окно

  const modal = document.querySelector('.modal'),
    modalOpen = document.querySelectorAll('[data-modal]'),
    modalClose = modal.querySelector('[data-close]');


  modalOpen.forEach(btn => {
    btn.addEventListener('click', openModal);
  });


  function openModal() {
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
    clearTimeout(modalTimerId);
    window.removeEventListener('scroll', modalShowByScroll);

  }


  function closeModal() {
    modal.classList.remove('show');
    document.body.style.overflow = '';
  }


  modalClose.addEventListener('click', closeModal);


  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });


  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && modal.classList.contains('show')) {
      closeModal();
    }
  });

  const modalTimerId = setTimeout(openModal, 5000);

  function modalShowByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
      openModal();
    }
  }

  window.addEventListener('scroll', modalShowByScroll);


  // Карточки товара

  class MenuCard {
    constructor(src, alt, title, desc, price, parentSelector, ...classes) {
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.desc = desc;
      this.price = price;
      this.rate = 25;
      this.parent = document.querySelector(parentSelector);
      this.classes = classes;
      this.exchangeUSD();
    }

    exchangeUSD() {
      this.price = this.price * this.rate;
    }

    render() {
      const card = document.createElement('div');

      if (this.classes.length === 0) {
        card.classList.add('menu__item');
      } else {
        this.classes.forEach(className => card.classList.add(className));
      }

      card.innerHTML = `
        <img src=${this.src} alt=${this.alt}>
        <h3 class="menu__item-subtitle">${this.title}</h3>
        <div class="menu__item-descr">${this.desc}</div>
        <div class="menu__item-divider"></div>
        <div class="menu__item-price">
            <div class="menu__item-cost">Цена:</div>
            <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
        </div>
      `;

      this.parent.append(card);
    }
  }

  new MenuCard(
    "img/tabs/vegy.jpg",
    "vegy",
    'Меню "Фитнес"',
    'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    9,
    '.menu__field .container'
  ).render();

  new MenuCard(
    "img/tabs/elite.jpg",
    "elite",
    'Меню “Премиум”',
    'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
    18,
    '.menu__field .container',
    'menu__item'
  ).render();

  new MenuCard(
    "img/tabs/post.jpg",
    "post",
    'Меню "Постное"',
    'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
    16,
    '.menu__field .container',
    'menu__item'
  ).render();


});



