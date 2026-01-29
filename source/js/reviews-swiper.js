import Swiper from 'swiper';
import { Navigation, Scrollbar } from 'swiper/modules';

export const initReviewsSwiper = () => new Swiper('.reviews__swiper', {
  modules: [Navigation, Scrollbar],
  loop: false,
  speed: 300,

  slidesPerView: 1,
  spaceBetween: 15,

  navigation: {
    nextEl: '.reviews .swiper-button-next',
    prevEl: '.reviews .swiper-button-prev',
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
      spaceBetween: 30,
      scrollbar: {
        draggable: true,
        hide: false,
      },
    },
    1440: {
      slidesPerView: 'auto',
      spaceBetween: 32,
      scrollbar: {
        draggable: true,
        hide: false,
      },
    }
  },
});
