import {initMobileMenu} from './menu.js';
import {initPopup} from './popup.js';
import {initHeroSwiper, initProgramsSwiper, initNewsSwiper, initReviewsSwiper} from './swiper.js';
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
