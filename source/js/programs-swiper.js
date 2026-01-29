import Swiper from 'swiper';
import { Navigation, Scrollbar } from 'swiper/modules';

export const initProgramsSwiper = () => new Swiper('.programs__swiper', {
  modules: [Navigation, Scrollbar],
  loop: false,
  speed: 300,

  slidesPerView: 1,
  spaceBetween: 30,

  navigation: {
    nextEl: '.programs .swiper-button-next',
    prevEl: '.programs .swiper-button-prev',
    disabledClass: 'swiper-button--deactivated',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: false,
    hide: true,
  },

  breakpoints: {
    768: {
      slidesPerView: 'auto',
      scrollbar: {
        draggable: true,
        hide: false,
      },
    },
    1440: {
      allowTouchMove: false,
      slidesPerView: 'auto',
      spaceBetween: 32,
      scrollbar: {
        draggable: true,
        hide: false,
      },
    },
  },
});
