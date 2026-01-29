import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

const hero = document.querySelector('.hero');
const heroPagination = hero?.querySelector('.hero__swiper-pagination');
let heroSwiper = null;

const movePagination = (swiper) => {
  const activeSlide = swiper.slides[swiper.activeIndex];
  const bulletsWrapper = activeSlide?.querySelector('.hero__bullets-wrapper');

  if (heroPagination && bulletsWrapper && !bulletsWrapper.contains(heroPagination)) {
    bulletsWrapper.appendChild(heroPagination);
  }
};

const setBulletsContainerSize = () => {
  if (!heroPagination) {
    return;
  }

  const heroBulletsContainers = hero.querySelectorAll('.hero__bullets-wrapper');
  heroBulletsContainers.forEach((container) => {
    container.style.minWidth = `${heroPagination.offsetWidth}px`;
    container.style.minHeight = `${heroPagination.offsetHeight}px`;
  });
};

export const initHeroSwiper = () => {
  heroSwiper = new Swiper('.hero__swiper', {
    modules: [Pagination],
    loop: true,
    speed: 300,
    autoHeight: true,

    pagination: {
      el: '.hero__swiper-pagination',
      clickable: true,
      bulletElement: 'button',
      bulletClass: 'hero__pagination-bullet',
      bulletActiveClass: 'hero__pagination-bullet--active',
      renderBullet: (index, className) =>
        `<button type="button" class="${className}"><span class="visually-hidden">Слайд ${index + 1}</span></button>`,
    },

    breakpoints: {
      1440: {
        allowTouchMove: false,
      },
    },

    on: {
      init: function () {
        movePagination(this);
        setTimeout(setBulletsContainerSize, 100);
      },
      slideChange: function () {
        movePagination(this);
      },
      resize: function () {
        setBulletsContainerSize();
      },
    },
  });

  return heroSwiper;
};
