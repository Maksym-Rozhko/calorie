import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);

new Swiper('.swiper.steps-slider', {
  slidesPerView: 4,
  spaceBetween: 20,

  navigation: {
      nextEl: '.steps-slider__controls .steps-slider__btns.swiper-button-next',
      prevEl: '.steps-slider__controls .steps-slider__btns.swiper-button-prev',
  },

  pagination: {
    el: '.steps-slider__controls .swiper-pagination',
    clickable: true,
      renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    1280: {
      slidesPerView: 4,
    }
  },
});

new Swiper('.swiper.make__slider', {
  slidesPerView: 2.5,
  spaceBetween: 20,
  loop: true,

  navigation: {
      nextEl: '.slider__controls .make__btns.swiper-button-next',
      prevEl: '.slider__controls .make__btns.swiper-button-prev',
  },

  breakpoints: {
    320: {
      slidesPerView: 1.5,
      spaceBetween: 10,
    },
    1440: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    }
  },
});