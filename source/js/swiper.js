import Swiper from 'swiper';
import { Pagination, Scrollbar, Navigation } from 'swiper/modules';

import 'swiper/css';

export const initHeroSwiper = () => new Swiper('.hero__swiper', {
  modules: [Pagination, Scrollbar],
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
  modules: [Navigation],
  loop: false,
  speed: 600,

  slidesPerView: 1,
  spaceBetween: 15,

  navigation: {
    nextEl: '.programs .swiper-button-next',
    prevEl: '.programs .swiper-button-prev',
    disabledClass: 'swiper-button--deactivated',
  }
});

export const initNewsSwiper = () => new Swiper('.news__swiper', {
  modules: [Navigation],
  loop: false,
  speed: 600,

  slidesPerView: 1,
  spaceBetween: 15,

  navigation: {
    nextEl: '.news .swiper-button-next',
    prevEl: '.news .swiper-button-prev',
    disabledClass: 'swiper-button--deactivated',
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
});
