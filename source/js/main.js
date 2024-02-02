import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';
import {initTabs} from './modules/tabs/init-tabs';
import {initAccordions} from './modules/accordion/init-accordion';
import Swiper from './vendor/swiper';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  const slider = new Swiper('.judges', {
    direction: 'horizontal',
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      767: {
        slidesPerView: 1,
      },
      1365: {
        slidesPerView: 2,
      },
      1366: {
        slidesPerView: 4,
      },
    },
  });
  slider.init();

  const slider2 = new Swiper('.rewiews', {
    direction: 'horizontal',
    loop: false,
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },
    breakpoints: {
      767: {
        slidesPerView: 1,
      },
      1365: {
        slidesPerView: 1,
      },
      1366: {
        slidesPerView: 1,
      },
    },
  });
  slider2.init();
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    const form = new Form();
    window.form = form;
    form.init();
  });
});

window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    initTabs();
  });
});

window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('load', () => {
    initAccordions();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
