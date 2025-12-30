import Swiper from 'swiper';
import { Pagination, Navigation, Scrollbar, Grid } from 'swiper/modules';

export const initHeroSwiper = () => new Swiper('.hero__swiper', {
  modules: [Pagination],
  loop: true,
  speed: 600,

  pagination: {
    el: '.hero__swiper .swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    1440: {
      allowTouchMove: false,
    },
  },
});

export const initProgramsSwiper = () => new Swiper('.programs__swiper', {
  modules: [Navigation, Scrollbar],
  loop: false,
  speed: 600,

  slidesPerView: 1,
  spaceBetween: 30,

  navigation: {
    nextEl: '.programs .swiper-button-next',
    prevEl: '.programs .swiper-button-prev',
    disabledClass: 'swiper-button--deactivated',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
    hide: false,
  },

  breakpoints: {
    768: {
      slidesPerView: 'auto',
    },
    1440: {
      allowTouchMove: false,
      slidesPerView: 'auto',
      spaceBetween: 32,
    },
  },
});

export const initNewsSwiper = () => new Swiper('.news__swiper', {
  modules: [Navigation, Pagination, Grid],
  loop: false,
  speed: 600,

  pagination: {
    el: '.news__swiper .swiper-pagination',
    clickable: true,
  },

  slidesPerView: 1,
  spaceBetween: 15,

  grid: {
    rows: 2,
  },

  navigation: {
    nextEl: '.news .swiper-button-next',
    prevEl: '.news .swiper-button-prev',
    disabledClass: 'swiper-button--deactivated',
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 32,
      grid: {
        rows: 1,
      },
    },
  },
});

export const initReviewsSwiper = () => new Swiper('.reviews__swiper', {
  modules: [Navigation],
  loop: false,
  speed: 600,

  slidesPerView: 1,
  spaceBetween: 15,

  navigation: {
    nextEl: '.reviews .swiper-button-next',
    prevEl: '.reviews .swiper-button-prev',
    disabledClass: 'swiper-button--deactivated',
  },
  breakpoints: {
    768: {
      slidesPerView: 'auto',
      spaceBetween: 30,
    },
  },
});
