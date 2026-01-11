import Swiper from 'swiper';
import { Pagination, Navigation, Scrollbar } from 'swiper/modules';

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

export const initNewsSwiper = () => {
  const newsSwiper = new Swiper('.news__swiper', {
    modules: [Navigation, Pagination],
    loop: false,
    speed: 600,

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

export const initReviewsSwiper = () => new Swiper('.reviews__swiper', {
  modules: [Navigation, Scrollbar],
  loop: false,
  speed: 600,

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
