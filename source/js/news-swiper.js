import Swiper from 'swiper';
import { Pagination, Navigation } from 'swiper/modules';

export const initNewsSwiper = () => {
  const newsSwiper = new Swiper('.news__swiper', {
    modules: [Navigation, Pagination],
    loop: false,
    speed: 300,

    pagination: {
      el: '.news__swiper .swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return `<span class="${className}">${index + 1}</span>`;
      },
    },

    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 15,
    watchSlidesProgress: true,

    navigation: {
      nextEl: '.news .swiper-button-next',
      prevEl: '.news .swiper-button-prev',
      disabledClass: 'swiper-button--deactivated',
    },

    breakpoints: {
      768: {
        slidesPerView: 'auto',
        spaceBetween: 30
      },
      1440: {
        slidesPerView: 'auto',
        spaceBetween: 32,
      },
    },
  });

  function updatePaginationWindow() {
    const bullets = newsSwiper.pagination.bullets;
    const totalBullets = bullets.length;
    const currentBullet = newsSwiper.realIndex;

    let startCount = 0;

    if (currentBullet <= 2) {
      startCount = 0;
    } else if (currentBullet >= totalBullets - 1) {
      startCount = totalBullets - 4;
    } else {
      startCount = currentBullet - 2;
    }

    bullets.forEach((bullet, index) => {
      bullet.style.display = (index >= startCount && index < startCount + 4) ? 'inline-flex' : 'none';
    });
  }

  newsSwiper.on('init', updatePaginationWindow);
  newsSwiper.on('slideChange', updatePaginationWindow);
  updatePaginationWindow();

  return newsSwiper;
};
