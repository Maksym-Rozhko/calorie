import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);

new Swiper('.swiper.rating__slider', {
    slidesPerView: 4.5,
    spaceBetween: 20,
    loop: true,

    navigation: {
        nextEl: '.slider__controls .rating__btns.swiper-button-next',
        prevEl: '.slider__controls .rating__btns.swiper-button-prev',
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      375: {
        slidesPerView: 1.5,
        spaceBetween: 10,
      },
      575: {
        slidesPerView: 2.5,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 3.5,
        spaceBetween: 10,
      },
      1440: {
        slidesPerView: 4.5,
        spaceBetween: 20,
      }
  },
});