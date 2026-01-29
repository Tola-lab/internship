import {initMobileMenu} from './menu.js';
import {initPopup} from './popup.js';
import {initHeroSwiper} from './hero-swiper.js';
import {initProgramsSwiper} from './programs-swiper.js';
import {initNewsSwiper} from './news-swiper.js';
import {initReviewsSwiper} from './reviews-swiper.js';
import {initFormsValidation} from './form-validation.js';

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initPopup();
  initHeroSwiper();
  initProgramsSwiper();
  initNewsSwiper();
  initReviewsSwiper();
  initFormsValidation();
});
