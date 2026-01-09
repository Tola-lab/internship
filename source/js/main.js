import {initMobileMenu} from './menu.js';
import {initHeroSwiper, initProgramsSwiper, initNewsSwiper, initReviewsSwiper} from './swiper.js';

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initHeroSwiper();
  initProgramsSwiper();
  initNewsSwiper();
  initReviewsSwiper();
});
