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